import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL_NAME = "gemini-2.5-flash"; // Free-tier friendly

// ─────────────────────────────────────────
// Retry wrapper for transient API failures
// ─────────────────────────────────────────

async function withRetry<T>(
  fn: () => Promise<T>,
  retries = 2,
  delayMs = 1500
): Promise<T> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err: any) {
      const isLast = attempt === retries;
      if (isLast) throw err;

      const msg = err?.message?.toLowerCase() ?? "";

      if (msg.includes("429") || msg.includes("quota")) {
        await new Promise((r) =>
          setTimeout(r, delayMs * (attempt + 1))
        );
      } else {
        throw err;
      }
    }
  }

  throw new Error("Retry failed unexpectedly");
}

// ─────────────────────────────────────────
// Commit summarizer
// ─────────────────────────────────────────

export async function summarizeCommit(
  message: string
): Promise<string> {
  return withRetry(async () => {
    const response = await genAI.models.generateContent({
      model: MODEL_NAME,
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Summarize this Git commit in one clear sentence for a developer changelog. Be specific. No preamble.

Commit:
${message.slice(0, 500)}`,
            },
          ],
        },
      ],
    });

    return response.text?.trim() ?? "";
  });
}

// ─────────────────────────────────────────
// File summarizer
// ─────────────────────────────────────────

export async function summarizeFile(
  filePath: string,
  content: string
): Promise<string> {
  if (!content.trim()) return "";

  return withRetry(async () => {
    const response = await genAI.models.generateContent({
      model: MODEL_NAME,
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Summarize this source file in 2–3 sentences. Describe its purpose and important logic.

File: ${filePath}

\`\`\`
${content.slice(0, 3000)}
\`\`\``,
            },
          ],
        },
      ],
    });

    return response.text?.trim() ?? "";
  }).catch(() => `Source file: ${filePath}`);
}

// ─────────────────────────────────────────
// File ranker
// ─────────────────────────────────────────

export async function rankRelevantFiles(
  question: string,
  files: { path: string; summary: string }[]
): Promise<string[]> {
  if (files.length === 0) return [];
  if (files.length <= 5) return files.map((f) => f.path);

  return withRetry(async () => {
    const list = files
      .map(
        (f, i) =>
          `${i + 1}. ${f.path} — ${f.summary.slice(0, 120)}`
      )
      .join("\n");

    const response = await genAI.models.generateContent({
      model: MODEL_NAME,
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Given this question about a codebase, return the indexes (1-based) of the 5 most relevant files as a JSON array of numbers only.

Question:
${question}

Files:
${list}`,
            },
          ],
        },
      ],
    });

    const text = response.text?.trim() ?? "";

    const match = text.match(/\[[\d,\s]+\]/);

    if (!match) {
      return files.slice(0, 5).map((f) => f.path);
    }

    const indexes = (JSON.parse(match[0]) as number[])
      .filter((n) => n >= 1 && n <= files.length)
      .slice(0, 5);

    return indexes.map((i) => files[i - 1]!.path);
  }).catch(() =>
    files.slice(0, 5).map((f) => f.path)
  );
}

// ─────────────────────────────────────────
// Q&A Answerer
// ─────────────────────────────────────────

export interface QAResult {
  answer: string;
  filesReferenced: string[];
}

export async function answerQuestion(
  question: string,
  projectName: string,
  context: {
    path: string;
    summary: string;
    content: string;
  }[]
): Promise<QAResult> {
  const filesReferenced = context.map((f) => f.path);

  const contextText = context
    .map(
      (f) =>
        `=== ${f.path} ===
Summary: ${f.summary}

${f.content.slice(0, 1800)}`
    )
    .join("\n\n");

  return withRetry(async () => {
    const response = await genAI.models.generateContent({
      model: MODEL_NAME,
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are an expert software engineer helping a developer understand the "${projectName}" codebase.

Answer using markdown formatting. Reference specific files using backticks like \`src/app/page.tsx\`. If the answer is not found in the provided files, say so clearly.

QUESTION:
${question}

SOURCE FILES:
${contextText}`,
            },
          ],
        },
      ],
    });

    return {
      answer: response.text?.trim() ?? "",
      filesReferenced,
    };
  });
}