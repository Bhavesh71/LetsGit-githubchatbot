import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { db } from "@/lib/db";

interface ClerkEvent {
  type: string;
  data: {
    id: string;
    email_addresses: { email_address: string; id: string }[];
    primary_email_address_id: string;
    first_name: string | null;
    last_name:  string | null;
    image_url:  string | null;
  };
}

export async function POST(req: Request) {
  const secret = process.env.CLERK_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret not set" }, { status: 500 });
  }

  const headersList = await headers();
  const svixId  = headersList.get("svix-id");
  const svixTs  = headersList.get("svix-timestamp");
  const svixSig = headersList.get("svix-signature");

  if (!svixId || !svixTs || !svixSig) {
    return NextResponse.json({ error: "Missing svix headers" }, { status: 400 });
  }

  const body = await req.text();
  const wh = new Webhook(secret);

  let event: ClerkEvent;
  try {
    event = wh.verify(body, {
      "svix-id":        svixId,
      "svix-timestamp": svixTs,
      "svix-signature": svixSig,
    }) as ClerkEvent;
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const { type, data } = event;

  const primaryEmail = data.email_addresses.find(
    (e) => e.id === data.primary_email_address_id
  );
  const email =
    primaryEmail?.email_address ??
    data.email_addresses[0]?.email_address ??
    "";
  const name =
    [data.first_name, data.last_name].filter(Boolean).join(" ") || null;

  if (type === "user.created") {
    await db.user.create({
      data: { clerkId: data.id, email, name, avatarUrl: data.image_url },
    });
  } else if (type === "user.updated") {
    await db.user.upsert({
      where:  { clerkId: data.id },
      update: { email, name, avatarUrl: data.image_url },
      create: { clerkId: data.id, email, name, avatarUrl: data.image_url },
    });
  } else if (type === "user.deleted") {
    await db.user.deleteMany({ where: { clerkId: data.id } });
  }

  return NextResponse.json({ ok: true });
}
