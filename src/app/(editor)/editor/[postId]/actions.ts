"use server";

import { postPatchSchema } from "@/lib/validation/post";
import { prisma } from "@/lib/db";

export interface ProjectUpdate {
  title: string;
  image: string;
  content: any;
  published: boolean;
}

export async function updatePost(id: number, data: ProjectUpdate) {
  const body = postPatchSchema.parse(data);
  
  await prisma.project.update({
    where: { id },
    data: {
      title: body.title,
      image: body.image,
      content: body.content,
      published: body.published,
    },
  });
}
