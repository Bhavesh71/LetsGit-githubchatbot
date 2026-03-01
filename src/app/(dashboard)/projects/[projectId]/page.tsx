import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { db } from "@/lib/db";
import ProjectView from "@/components/project-view";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = await db.project.findUnique({
    where: { id: projectId },
    select: { name: true },
  });
  return { title: project?.name ?? "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await db.user.findUnique({ where: { clerkId: userId } });
  if (!user) redirect("/sync-user");

  const project = await db.project.findFirst({
    where: {
      id: projectId,
      members: { some: { userId: user.id } },
    },
    include: {
      commits: {
        orderBy: { date: "desc" },
        take: 25,
      },
      questions: {
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        take: 50,
        include: {
          saved: { where: { userId: user.id }, select: { id: true } },
        },
      },
      sourceFiles: {
        select: { id: true, filePath: true, summary: true, language: true },
        orderBy: { filePath: "asc" },
      },
      _count: { select: { sourceFiles: true, questions: true } },
    },
  });

  if (!project) notFound();

  return (
    <ProjectView project={project} />
  );
}
