import DashboardHeader from "@/components/DashboardHeader";
import PostItem from "@/components/PostItem";

import { Button } from "@/components/UI";

import PostsList from "@/components/PostsList";

import { prisma } from "@/lib/db";

import { createNewPost } from "./actions";

export default async function Dashboard() {
  const posts = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <>
      <DashboardHeader heading="Posts" text="Create new project">
        <form action={createNewPost}>
          <Button type="submit">new post</Button>
        </form>
      </DashboardHeader>
      <PostsList>
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </PostsList>
    </>
  );
}
