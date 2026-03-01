import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { timeAgo, langColor } from "@/lib/utils";
import {
  GitBranch,
  Plus,
  MessageSquare,
  GitCommit,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: {
      projects: {
        include: {
          project: {
            include: {
              _count:  { select: { questions: true, commits: true } },
              commits: { orderBy: { date: "desc" }, take: 1, select: { date: true } },
            },
          },
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!user) redirect("/sync-user");

  const projects = user.projects.map((p) => p.project);
  const totalQuestions = projects.reduce((s, p) => s + p._count.questions, 0);
  const totalCommits   = projects.reduce((s, p) => s + p._count.commits,   0);

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Greeting */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back{user.name ? `, ${user.name.split(" ")[0]}` : ""} 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {projects.length === 0
              ? "Add your first repo to get started."
              : `${projects.length} project${projects.length !== 1 ? "s" : ""} · ${totalQuestions} questions · ${totalCommits} commits indexed`}
          </p>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" /> New Project
        </Link>
      </div>

      {/* Projects */}
      {projects.length === 0 ? (
        <EmptyDashboard />
      ) : (
        <>
          <h2 className="font-semibold text-gray-900">Your Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md hover:shadow-brand-100 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center">
                      <GitBranch className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-900 leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {project.repoOwner}/{project.repoName}
                      </p>
                    </div>
                  </div>
                  {project.language && (
                    <span
                      className={`text-white text-[10px] font-medium px-2 py-0.5 rounded-full ${langColor(project.language)}`}
                    >
                      {project.language}
                    </span>
                  )}
                </div>

                {project.description && (
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                )}

                <div className="flex items-center gap-3 text-xs text-gray-400">
                  {project.isIndexed ? (
                    <span className="flex items-center gap-1 text-emerald-600">
                      <CheckCircle2 className="w-3 h-3" /> Indexed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-amber-500">
                      <Clock className="w-3 h-3" /> Indexing…
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {project._count.questions}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitCommit className="w-3 h-3" />
                    {project._count.commits}
                  </span>
                  {project.commits[0] && (
                    <span className="ml-auto">{timeAgo(project.commits[0].date)}</span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs text-brand-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Open project <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}

            {/* Add new card */}
            <Link
              href="/projects"
              className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-2xl p-8 text-gray-400 hover:border-brand-300 hover:text-brand-500 transition-colors"
            >
              <div className="w-10 h-10 border-2 border-dashed border-current rounded-xl flex items-center justify-center">
                <Plus className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Add Repository</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

function EmptyDashboard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-16 text-center">
      <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
        <GitBranch className="w-8 h-8 text-brand-500" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">No projects yet</h2>
      <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">
        Add a GitHub repository to index it and start asking AI questions about
        the codebase.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
      >
        <Plus className="w-4 h-4" /> Add Your First Repository
      </Link>
    </div>
  );
}
