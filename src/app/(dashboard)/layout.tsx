import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import AppSidebar from "@/components/app-sidebar";
import AppHeader from "@/components/app-header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await db.user.findUnique({ where: { clerkId: userId } });
  if (!user) redirect("/sync-user");

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <AppSidebar user={user} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <AppHeader user={user} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
