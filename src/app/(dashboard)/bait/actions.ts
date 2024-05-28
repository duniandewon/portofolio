"use server"
import { redirect } from "next/navigation";

import { prisma } from "@/lib/db";

export async function createNewPost() {
  const post = await prisma.project.create({
    data: { title: "Untitled Project" },
  });

  redirect(`/editor/${post.id}`);
}