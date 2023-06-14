import { notFound } from "next/navigation";

import { Project } from "@prisma/client";

import { prisma } from "@/lib/db";
import Editor from "@/components/Editor";

interface Props {
  params: { postId: string };
}

async function getPost(id: Project["id"]) {
  return await prisma.project.findFirst({ where: { id } });
}

export default async function PostEditor({ params }: Props) {
  const post = await getPost(Number(params.postId));

  if (!post) notFound();

  return (
    <Editor
      post={post}
    />
  );
}
