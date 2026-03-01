"use client";

import Link from "next/link";
import { GitBranch, MessageSquare, FileCode, CheckCircle2, Clock } from "lucide-react";
import { langColor, timeAgo } from "@/lib/utils";

type ProjectItem = {
  id: string;
  name: string;
  repoOwner: string;
  repoName: string;
  repoUrl: string;
  language: string | null;
  description: string | null;
  isIndexed: boolean;
  createdAt: Date;
  role: string;
  _count: { questions: number; sourceFiles: number };
};

export default function ProjectsList({ projects }: { projects: ProjectItem[] }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <GitBranch className="w-8 h-8 mx-auto mb-3 opacity-30" />
        <p className="text-sm">No repositories yet. Add one above.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4 hover:border-brand-300 hover:shadow-sm transition-all group"
        >
          {/* Icon */}
          <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <GitBranch className="w-5 h-5 text-brand-600" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-sm text-gray-900">
                {project.name}
              </span>
              {project.language && (
                <span
                  className={`text-white text-[10px] font-medium px-2 py-0.5 rounded-full ${langColor(project.language)}`}
                >
                  {project.language}
                </span>
              )}
              {project.isIndexed ? (
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Indexed
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[11px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                  <Clock className="w-2.5 h-2.5" /> Indexing…
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 truncate mt-0.5">
              {project.repoOwner}/{project.repoName}
              {project.description ? ` · ${project.description}` : ""}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-gray-400 flex-shrink-0">
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              {project._count.questions}
            </span>
            <span className="flex items-center gap-1">
              <FileCode className="w-3 h-3" />
              {project._count.sourceFiles}
            </span>
            <span className="hidden sm:block">{timeAgo(project.createdAt)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
