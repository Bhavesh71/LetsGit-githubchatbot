import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import type { User } from "@prisma/client";

/** Get current DB user. Throws if not authenticated or not found. */
export async function getCurrentUser(): Promise<User> {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthenticated");

  const user = await db.user.findUnique({ where: { clerkId: userId } });
  if (!user) throw new Error("User not synced");

  return user;
}

/** Get current user or null (for layouts/components that handle unauthenticated state) */
export async function getCurrentUserOrNull(): Promise<User | null> {
  try {
    return await getCurrentUser();
  } catch {
    return null;
  }
}
