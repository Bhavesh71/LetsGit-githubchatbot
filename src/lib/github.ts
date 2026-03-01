import { Octokit } from "@octokit/rest";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: "LetsGit/1.0",
});

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RepoMeta {
  owner: string;
  name: string;
  fullName: string;
  description: string | null;
  language: string | null;
  stars: number;
  defaultBranch: string;
  htmlUrl: string;
  isPrivate: boolean;
}

export interface CommitData {
  sha: string;
  message: string;
  author: string;
  avatarUrl: string | null;
  date: Date;
  htmlUrl: string;
}

export interface FileEntry {
  path: string;
  size: number;
}

// ─── Functions ────────────────────────────────────────────────────────────────

export async function fetchRepoMeta(
  owner: string,
  repo: string
): Promise<RepoMeta> {
  const { data } = await octokit.repos.get({ owner, repo });
  return {
    owner,
    name: data.name,
    fullName: data.full_name,
    description: data.description ?? null,
    language: data.language ?? null,
    stars: data.stargazers_count,
    defaultBranch: data.default_branch,
    htmlUrl: data.html_url,
    isPrivate: data.private,
  };
}

/** Fetch up to `limit` recent commits */
export async function fetchCommits(
  owner: string,
  repo: string,
  limit = 15
): Promise<CommitData[]> {
  const { data } = await octokit.repos.listCommits({
    owner,
    repo,
    per_page: limit,
  });

  return data.map((c) => ({
    sha: c.sha,
    message: c.commit.message.split("\n")[0] ?? "",
    author:
      c.commit.author?.name ?? c.author?.login ?? "Unknown",
    avatarUrl: c.author?.avatar_url ?? null,
    date: new Date(c.commit.author?.date ?? Date.now()),
    htmlUrl: c.html_url,
  }));
}

/** Fetch flat file tree, filtered to indexable text files */
export async function fetchFileTree(
  owner: string,
  repo: string,
  branch: string
): Promise<FileEntry[]> {
  const SKIP = [
    /node_modules\//,
    /\.next\//,
    /dist\//,
    /build\//,
    /out\//,
    /coverage\//,
    /\.git\//,
    /\.vercel\//,
    /__pycache__\//,
    /vendor\//,
  ];

  const ALLOWED_EXT =
    /\.(ts|tsx|js|jsx|mjs|cjs|py|go|rs|java|kt|swift|cpp|c|h|cs|rb|php|vue|svelte|md|mdx|txt|json|yaml|yml|toml|prisma|sql|graphql|sh|bash|env\.example)$/i;

  try {
    const { data } = await octokit.git.getTree({
      owner,
      repo,
      tree_sha: branch,
      recursive: "1",
    });

    return (data.tree ?? [])
      .filter(
        (f) =>
          f.type === "blob" &&
          f.path &&
          ALLOWED_EXT.test(f.path) &&
          !SKIP.some((rx) => rx.test(f.path!)) &&
          (f.size ?? 0) < 80_000 // skip files > 80 KB
      )
      .map((f) => ({ path: f.path!, size: f.size ?? 0 }))
      .slice(0, 120); // cap at 120 files
  } catch {
    return [];
  }
}

/** Fetch a single file's decoded content */
export async function fetchFileContent(
  owner: string,
  repo: string,
  path: string
): Promise<string> {
  try {
    const { data } = await octokit.repos.getContent({ owner, repo, path });
    if (Array.isArray(data)) return "";
    if (data.type !== "file") return "";
    const raw = data.content ?? "";
    return Buffer.from(raw, "base64").toString("utf-8");
  } catch {
    return "";
  }
}
