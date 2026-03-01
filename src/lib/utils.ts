import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function timeAgo(date: Date | string): string {
  const seconds = Math.floor(
    (Date.now() - new Date(date).getTime()) / 1000
  );
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return formatDate(date);
}

export function truncate(str: string, n: number): string {
  return str.length > n ? str.slice(0, n - 1) + "…" : str;
}

/** Returns a Tailwind background color class based on language name */
export function langColor(lang: string | null | undefined): string {
  const map: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    Python: "bg-green-500",
    Rust: "bg-orange-600",
    Go: "bg-cyan-500",
    Java: "bg-red-600",
    "C++": "bg-pink-600",
    C: "bg-slate-500",
    Ruby: "bg-red-500",
    PHP: "bg-purple-500",
    Swift: "bg-orange-500",
    Kotlin: "bg-violet-500",
    "C#": "bg-indigo-500",
    Dart: "bg-blue-400",
    Shell: "bg-green-700",
    HTML: "bg-orange-400",
    CSS: "bg-blue-300",
    Vue: "bg-emerald-500",
    Svelte: "bg-red-400",
  };
  return map[lang ?? ""] ?? "bg-slate-400";
}

/** Parse a GitHub URL or "owner/repo" string */
export function parseGitHubUrl(
  url: string
): { owner: string; repo: string } | null {
  try {
    const cleaned = url.trim().replace(/\.git$/, "");

    // Full URL format
    if (cleaned.includes("github.com")) {
      const u = new URL(
        cleaned.startsWith("http") ? cleaned : `https://${cleaned}`
      );
      const parts = u.pathname.replace(/^\//, "").split("/").filter(Boolean);
      if (parts.length >= 2) return { owner: parts[0]!, repo: parts[1]! };
    }

    // owner/repo format
    const parts = cleaned.split("/").filter(Boolean);
    if (parts.length === 2) return { owner: parts[0]!, repo: parts[1]! };

    return null;
  } catch {
    return null;
  }
}
