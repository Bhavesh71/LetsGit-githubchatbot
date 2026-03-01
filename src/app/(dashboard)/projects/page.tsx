import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import CreateProjectForm from "@/components/create-project-form";
import ProjectsList from "@/components/projects-list";

export const metadata = { title: "Projects" };

export default async function ProjectsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: {
      projects: {
        include: {
          project: {
            include: {
              _count: { select: { questions: true, sourceFiles: true } },
            },
          },
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!user) redirect("/sync-user");

  const projects = user.projects.map((p) => ({
    ...p.project,
    role: p.role,
  }));

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <p className="text-gray-500 text-sm mt-1">
          {projects.length === 0
            ? "Add your first GitHub repository to get started."
            : `${projects.length} repositor${projects.length !== 1 ? "ies" : "y"} connected`}
        </p>
      </div>

      <CreateProjectForm />
      <ProjectsList projects={projects} />
    </div>
  );
}
