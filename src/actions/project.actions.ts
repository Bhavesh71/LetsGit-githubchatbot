"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import {
  fetchRepoMeta,
  fetchCommits,
  fetchFileTree,
  fetchFileContent,
} from "@/lib/github";
import {
  summarizeCommit,
  summarizeFile,
  rankRelevantFiles,
  answerQuestion,
} from "@/lib/gemini";
import { parseGitHubUrl } from "@/lib/utils";
import { z } from "zod";

// ─── Create Project ────────────────────────────────────────────────────────────

const createSchema = z.object({
  repoUrl: z.string().min(1, "Repository URL is required"),
});

export type CreateProjectState = {
  error?: string;
  projectId?: string;
};

export async function createProject(
  _prev: CreateProjectState,
  formData: FormData
): Promise<CreateProjectState> {
  const parsed = createSchema.safeParse({ repoUrl: formData.get("repoUrl") });
  if (!parsed.success) {
    return { error: parsed.error.errors[0]?.message ?? "Invalid input" };
  }

  const { repoUrl } = parsed.data;
  const gitParts = parseGitHubUrl(repoUrl);
  if (!gitParts) {
    return {
      error: "Invalid GitHub URL. Use format: https://github.com/owner/repo",
    };
  }

  let user;
  try {
    user = await getCurrentUser();
  } catch {
    redirect("/sign-in");
  }

  // Check for duplicate
  const existing = await db.project.findFirst({
    where: {
      repoOwner: { equals: gitParts.owner, mode: "insensitive" },
      repoName:  { equals: gitParts.repo,  mode: "insensitive" },
      members:   { some: { userId: user.id } },
    },
  });
  if (existing) {
    return { error: "You already have this repository added." };
  }

  // Fetch metadata from GitHub
  let meta;
  try {
    meta = await fetchRepoMeta(gitParts.owner, gitParts.repo);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "";
    if (msg.includes("Not Found") || msg.includes("404")) {
      return {
        error:
          "Repository not found. Make sure it exists and your GitHub token has access.",
      };
    }
    return { error: "Failed to fetch repository. Check the URL and try again." };
  }

  const project = await db.project.create({
    data: {
      name:        meta.name,
      repoUrl:     meta.htmlUrl,
      repoOwner:   meta.owner,
      repoName:    meta.name,
      description: meta.description,
      language:    meta.language,
      stars:       meta.stars,
      members: {
        create: { userId: user.id, role: "OWNER" },
      },
    },
  });

  revalidatePath("/projects");
  revalidatePath("/dashboard");
  return { projectId: project.id };
}

// ─── Delete Project ────────────────────────────────────────────────────────────

export async function deleteProject(projectId: string): Promise<void> {
  const user = await getCurrentUser();

  const membership = await db.projectMember.findUnique({
    where: { userId_projectId: { userId: user.id, projectId } },
  });
  if (!membership || membership.role !== "OWNER") {
    throw new Error("Not authorized");
  }

  await db.project.delete({ where: { id: projectId } });
  revalidatePath("/projects");
  revalidatePath("/dashboard");
  redirect("/projects");
}

// ─── Index Project ─────────────────────────────────────────────────────────────

export async function indexProject(projectId: string): Promise<{
  ok: boolean;
  filesIndexed?: number;
  error?: string;
}> {
  const user = await getCurrentUser();

  const project = await db.project.findFirst({
    where: { id: projectId, members: { some: { userId: user.id } } },
  });
  if (!project) return { ok: false, error: "Project not found" };

  try {
    await db.project.update({
      where: { id: projectId },
      data: { isIndexed: false },
    });

    const meta = await fetchRepoMeta(project.repoOwner, project.repoName);
    const files = await fetchFileTree(
      project.repoOwner,
      project.repoName,
      meta.defaultBranch
    );

    let indexed = 0;
    const BATCH = 8;

    for (let i = 0; i < files.length; i += BATCH) {
      const batch = files.slice(i, i + BATCH);

      await Promise.allSettled(
        batch.map(async (file) => {
          const content = await fetchFileContent(
            project.repoOwner,
            project.repoName,
            file.path
          );
          if (!content.trim()) return;

          const summary = await summarizeFile(file.path, content);

          const ext = file.path.split(".").pop() ?? "";
          const langMap: Record<string, string> = {
            ts: "TypeScript", tsx: "TypeScript",
            js: "JavaScript", jsx: "JavaScript",
            py: "Python",     go: "Go",
            rs: "Rust",       java: "Java",
            kt: "Kotlin",
          };

          await db.sourceFile.upsert({
            where: { projectId_filePath: { projectId, filePath: file.path } },
            update:  { content: content.slice(0, 50_000), summary, language: langMap[ext] },
            create:  {
              projectId,
              filePath: file.path,
              content:  content.slice(0, 50_000),
              summary,
              language: langMap[ext],
            },
          });
          indexed++;
        })
      );

      // Respect Gemini free tier: 15 req/min
      if (i + BATCH < files.length) {
        await new Promise((r) => setTimeout(r, 2000));
      }
    }

    await db.project.update({
      where: { id: projectId },
      data:  { isIndexed: true, indexedAt: new Date() },
    });

    revalidatePath(`/projects/${projectId}`);
    return { ok: true, filesIndexed: indexed };
  } catch (err) {
    console.error("[indexProject]", err);
    return { ok: false, error: "Indexing failed. Please try again." };
  }
}

// ─── Sync Commits ──────────────────────────────────────────────────────────────

export async function syncCommits(projectId: string): Promise<{
  ok: boolean;
  newCommits?: number;
}> {
  const user = await getCurrentUser();

  const project = await db.project.findFirst({
    where: { id: projectId, members: { some: { userId: user.id } } },
  });
  if (!project) return { ok: false };

  try {
    const commits = await fetchCommits(project.repoOwner, project.repoName, 20);

    const existingShas = new Set(
      (
        await db.commit.findMany({
          where:  { projectId },
          select: { sha: true },
        })
      ).map((c) => c.sha)
    );

    const newOnes = commits.filter((c) => !existingShas.has(c.sha));
    let count = 0;

    for (const commit of newOnes) {
      let summary: string | null = null;
      try {
        summary = await summarizeCommit(commit.message);
      } catch {
        // non-critical — still save the commit
      }

      await db.commit.create({
        data: {
          projectId,
          sha:       commit.sha,
          message:   commit.message,
          author:    commit.author,
          avatarUrl: commit.avatarUrl,
          date:      commit.date,
          summary,
        },
      });
      count++;
    }

    revalidatePath(`/projects/${projectId}`);
    return { ok: true, newCommits: count };
  } catch (err) {
    console.error("[syncCommits]", err);
    return { ok: false };
  }
}

// ─── Ask Question ──────────────────────────────────────────────────────────────

export type AskQuestionResult = {
  ok: boolean;
  questionId?:      string;
  answer?:          string;
  filesReferenced?: string[];
  error?:           string;
};

export async function askQuestion(
  projectId: string,
  question: string
): Promise<AskQuestionResult> {
  if (!question.trim()) {
    return { ok: false, error: "Question cannot be empty" };
  }

  const user = await getCurrentUser();

  const project = await db.project.findFirst({
    where: { id: projectId, members: { some: { userId: user.id } } },
    include: {
      sourceFiles: {
        select: { filePath: true, summary: true, content: true },
      },
    },
  });

  if (!project) return { ok: false, error: "Project not found" };

  if (!project.isIndexed) {
    return {
      ok: false,
      error: "Project is not indexed yet. Please wait for indexing to finish.",
    };
  }

  if (project.sourceFiles.length === 0) {
    return {
      ok: false,
      error: "No indexed files found. Try re-indexing the project.",
    };
  }

  try {
    const relevantPaths = await rankRelevantFiles(
      question,
      project.sourceFiles.map((f) => ({
        path:    f.filePath,
        summary: f.summary ?? "",
      }))
    );

    const context = project.sourceFiles
      .filter((f) => relevantPaths.includes(f.filePath))
      .map((f) => ({
        path:    f.filePath,
        summary: f.summary ?? "",
        content: f.content,
      }));

    const result = await answerQuestion(question, project.name, context);

    const saved = await db.question.create({
      data: {
        projectId,
        userId:          user.id,
        question,
        answer:          result.answer,
        filesReferenced: result.filesReferenced,
      },
    });

    revalidatePath(`/projects/${projectId}`);
    return {
      ok:              true,
      questionId:      saved.id,
      answer:          result.answer,
      filesReferenced: result.filesReferenced,
    };
  } catch (err) {
    console.error("[askQuestion]", err);
    return { ok: false, error: "AI service temporarily unavailable. Try again." };
  }
}

// ─── Toggle Save Answer ────────────────────────────────────────────────────────

export async function toggleSaveAnswer(questionId: string): Promise<boolean> {
  const user = await getCurrentUser();

  const existing = await db.savedAnswer.findUnique({
    where: { questionId_userId: { questionId, userId: user.id } },
  });

  if (existing) {
    await db.savedAnswer.delete({ where: { id: existing.id } });
    return false;
  } else {
    await db.savedAnswer.create({ data: { questionId, userId: user.id } });
    return true;
  }
}
