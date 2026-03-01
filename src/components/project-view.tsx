"use client";

import { useState, useTransition, useRef } from "react";
import Image from "next/image";
import {
  MessageSquare,
  GitCommit,
  FileCode,
  RefreshCw,
  ExternalLink,
  Star,
  Send,
  Loader2,
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { cn, timeAgo, langColor } from "@/lib/utils";
import {
  askQuestion,
  toggleSaveAnswer,
  indexProject,
  syncCommits,
} from "@/actions/project.actions";
import type { AskQuestionResult } from "@/actions/project.actions";

// ─── Types ────────────────────────────────────────────────────────────────────

type Commit = {
  id: string; sha: string; message: string; author: string;
  avatarUrl: string | null; date: Date; summary: string | null;
};

type Question = {
  id: string; question: string; answer: string;
  filesReferenced: string[]; createdAt: Date;
  saved: { id: string }[];
};

type SourceFile = {
  id: string; filePath: string; summary: string | null; language: string | null;
};

type Project = {
  id: string; name: string; repoUrl: string; repoOwner: string;
  repoName: string; language: string | null; description: string | null;
  stars: number; isIndexed: boolean; indexedAt: Date | null;
  commits: Commit[]; questions: Question[]; sourceFiles: SourceFile[];
  _count: { sourceFiles: number; questions: number };
};

type Tab = "qa" | "commits" | "files";

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProjectView({
  project: initial,
}: {
  project: Project;
}) {
  const [questions, setQuestions] = useState(initial.questions);
  const [tab, setTab]             = useState<Tab>("qa");
  const [indexStatus, setIndexStatus] = useState<"idle" | "running" | "done" | "error">("idle");
  const [syncStatus,  setSyncStatus]  = useState<"idle" | "running">("idle");
  const [, startTransition] = useTransition();

  function handleReindex() {
    setIndexStatus("running");
    startTransition(async () => {
      const result = await indexProject(initial.id);
      setIndexStatus(result.ok ? "done" : "error");
      setTimeout(() => setIndexStatus("idle"), 3000);
    });
  }

  function handleSync() {
    setSyncStatus("running");
    startTransition(async () => {
      await syncCommits(initial.id);
      setSyncStatus("idle");
    });
  }

  async function handleAsk(q: string): Promise<AskQuestionResult> {
    const result = await askQuestion(initial.id, q);
    if (result.ok && result.questionId) {
      setQuestions((prev) => [
        {
          id:              result.questionId!,
          question:        q,
          answer:          result.answer!,
          filesReferenced: result.filesReferenced ?? [],
          createdAt:       new Date(),
          saved:           [],
        },
        ...prev,
      ]);
    }
    return result;
  }

  const tabs: { key: Tab; label: string; count?: number }[] = [
    { key: "qa",      label: "Ask AI",  count: questions.length           },
    { key: "commits", label: "Commits", count: initial.commits.length     },
    { key: "files",   label: "Files",   count: initial._count.sourceFiles },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-5 animate-fade-in">
      {/* Project header */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileCode className="w-5 h-5 text-brand-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg font-bold text-gray-900">{initial.name}</h1>
                {initial.language && (
                  <span className={`text-white text-[10px] font-medium px-2 py-0.5 rounded-full ${langColor(initial.language)}`}>
                    {initial.language}
                  </span>
                )}
                {initial.isIndexed ? (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Indexed
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full animate-pulse">
                    <Clock className="w-2.5 h-2.5" /> Indexing…
                  </span>
                )}
              </div>
              {initial.description && (
                <p className="text-sm text-gray-500 mt-0.5">{initial.description}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {initial.stars > 0 && (
              <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1.5">
                <Star className="w-3 h-3" /> {initial.stars.toLocaleString()}
              </span>
            )}
            <a
              href={initial.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-100 hover:border-gray-200 rounded-lg px-2.5 py-1.5 transition-colors"
            >
              <ExternalLink className="w-3 h-3" /> GitHub
            </a>
            <button
              onClick={handleSync}
              disabled={syncStatus === "running"}
              className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-100 hover:border-gray-200 rounded-lg px-2.5 py-1.5 disabled:opacity-50 transition-colors"
            >
              <RefreshCw className={cn("w-3 h-3", syncStatus === "running" && "animate-spin")} />
              Sync commits
            </button>
            <button
              onClick={handleReindex}
              disabled={indexStatus === "running"}
              className={cn(
                "flex items-center gap-1.5 text-xs rounded-lg px-2.5 py-1.5 transition-colors disabled:opacity-50",
                indexStatus === "done"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : indexStatus === "error"
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-gray-50 text-gray-600 border border-gray-100 hover:border-gray-200"
              )}
            >
              <RefreshCw className={cn("w-3 h-3", indexStatus === "running" && "animate-spin")} />
              {indexStatus === "running"
                ? "Indexing…"
                : indexStatus === "done"
                ? "Done!"
                : indexStatus === "error"
                ? "Failed"
                : "Re-index"}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
              tab === t.key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            )}
          >
            {t.label}
            {t.count !== undefined && (
              <span
                className={cn(
                  "text-[11px] px-1.5 py-0.5 rounded-full font-medium",
                  tab === t.key
                    ? "bg-brand-100 text-brand-700"
                    : "bg-gray-200 text-gray-500"
                )}
              >
                {t.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "qa"      && <QATab      project={initial} questions={questions} onAsk={handleAsk} />}
      {tab === "commits" && <CommitsTab commits={initial.commits} />}
      {tab === "files"   && <FilesTab   files={initial.sourceFiles} />}
    </div>
  );
}

// ─── Q&A Tab ──────────────────────────────────────────────────────────────────

function QATab({
  project,
  questions,
  onAsk,
}: {
  project: Project;
  questions: Question[];
  onAsk: (q: string) => Promise<AskQuestionResult>;
}) {
  const [input,   setInput]   = useState("");
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const q = input.trim();
    setInput("");
    setLoading(true);
    setError("");

    const result = await onAsk(q);
    if (!result.ok) setError(result.error ?? "Failed to get an answer");
    setLoading(false);
    inputRef.current?.focus();
  }

  return (
    <div className="space-y-4">
      {/* Ask box */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <h2 className="font-semibold text-gray-900 mb-3">
          Ask about{" "}
          <span className="text-brand-600">{project.name}</span>
        </h2>

        {!project.isIndexed && (
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-xl px-4 py-3 mb-4">
            <Clock className="w-4 h-4 flex-shrink-0" />
            Project is still being indexed. Q&amp;A will be available shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="How does authentication work in this project?"
            disabled={!project.isIndexed || loading}
            className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent disabled:opacity-50 transition-shadow"
          />
          <button
            type="submit"
            disabled={!project.isIndexed || loading || !input.trim()}
            className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">
              {loading ? "Thinking…" : "Ask"}
            </span>
          </button>
        </form>

        {error && (
          <div className="flex items-center gap-2 mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin text-brand-500" />
            <p className="text-sm text-gray-500">Gemini is reading your codebase…</p>
          </div>
        </div>
      )}

      {/* Questions list */}
      {questions.length > 0 ? (
        <div className="space-y-3">
          {questions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      ) : (
        !loading && (
          <div className="text-center py-12 text-gray-400">
            <MessageSquare className="w-8 h-8 mx-auto mb-3 opacity-25" />
            <p className="text-sm">No questions yet. Ask something above!</p>
          </div>
        )
      )}
    </div>
  );
}

function QuestionCard({ question }: { question: Question }) {
  const [open,        setOpen]       = useState(true);
  const [saved,       setSaved]      = useState(question.saved.length > 0);
  const [,            startSave]     = useTransition();

  function handleSave() {
    startSave(async () => {
      const result = await toggleSaveAnswer(question.id);
      setSaved(result);
    });
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <MessageSquare className="w-3.5 h-3.5 text-brand-600" />
          </div>
          <p className="font-medium text-sm text-gray-900">{question.question}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs text-gray-400 hidden sm:block">
            {timeAgo(question.createdAt)}
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-gray-400 transition-transform",
              open && "rotate-180"
            )}
          />
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-gray-100">
          <div
            className="mt-4 prose prose-sm prose-gray max-w-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-code:text-brand-700 prose-code:bg-brand-50 prose-code:rounded prose-code:px-1"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(question.answer) }}
          />

          {question.filesReferenced.length > 0 && (
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
                Files referenced
              </p>
              <div className="flex flex-wrap gap-1.5">
                {question.filesReferenced.map((f) => (
                  <code
                    key={f}
                    className="text-[11px] bg-gray-100 text-gray-600 px-2 py-1 rounded-lg font-mono"
                  >
                    {f}
                  </code>
                ))}
              </div>
            </div>
          )}

          <div className="mt-3 flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors"
            >
              {saved ? (
                <BookmarkCheck className="w-3.5 h-3.5 text-brand-500" />
              ) : (
                <Bookmark className="w-3.5 h-3.5" />
              )}
              {saved ? "Saved" : "Save answer"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Commits Tab ───────────────────────────────────────────────────────────────

function CommitsTab({ commits }: { commits: Commit[] }) {
  if (commits.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <GitCommit className="w-8 h-8 mx-auto mb-3 opacity-25" />
        <p className="text-sm">No commits synced. Click "Sync commits" above.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {commits.map((commit) => (
        <div
          key={commit.id}
          className="bg-white border border-gray-200 rounded-2xl p-4"
        >
          <div className="flex items-start gap-3">
            {commit.avatarUrl ? (
              <Image
                src={commit.avatarUrl}
                alt={commit.author}
                width={32}
                height={32}
                className="rounded-full flex-shrink-0"
              />
            ) : (
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <GitCommit className="w-4 h-4 text-gray-400" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium text-sm text-gray-900 truncate">
                  {commit.message}
                </p>
                <span className="text-xs text-gray-400 flex-shrink-0">
                  {timeAgo(commit.date)}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-400">{commit.author}</span>
                <span className="text-gray-200">·</span>
                <code className="text-[11px] font-mono text-gray-400">
                  {commit.sha.slice(0, 7)}
                </code>
              </div>
              {commit.summary && (
                <div className="mt-2.5 flex items-start gap-2 bg-brand-50 rounded-xl px-3 py-2">
                  <span className="text-brand-500 text-sm flex-shrink-0">✨</span>
                  <p className="text-xs text-brand-800 leading-relaxed">
                    {commit.summary}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Files Tab ────────────────────────────────────────────────────────────────

function FilesTab({ files }: { files: SourceFile[] }) {
  const [search, setSearch] = useState("");

  const filtered = files.filter((f) =>
    f.filePath.toLowerCase().includes(search.toLowerCase())
  );

  if (files.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <FileCode className="w-8 h-8 mx-auto mb-3 opacity-25" />
        <p className="text-sm">No files indexed. Click "Re-index" to start.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search files…"
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
      />

      <div className="space-y-1.5">
        {filtered.map((file) => (
          <div
            key={file.id}
            className="bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-brand-200 transition-colors"
          >
            <p className="text-sm font-mono text-brand-700 font-medium truncate">
              {file.filePath}
            </p>
            {file.summary && (
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {file.summary}
              </p>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-gray-400 py-8">
          No files match &quot;{search}&quot;
        </p>
      )}
    </div>
  );
}

// ─── Minimal markdown renderer ────────────────────────────────────────────────

function renderMarkdown(text: string): string {
  return text
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
      `<pre><code class="language-${lang}">${escHtml(code.trim())}</code></pre>`
    )
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm,  "<h2>$1</h2>")
    .replace(/^# (.+)$/gm,   "<h1>$1</h1>")
    .replace(/^[-*] (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]+?<\/li>)/g, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[a-z])/gm, "<p>")
    .replace(/(?<![>])$/gm, "</p>")
    .replace(/<p><\/p>/g, "")
    .replace(/<p>(<[uh])/g, "$1")
    .replace(/(<\/[uh][l134]>)<\/p>/g, "$1");
}

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
