import DashboardHeader from "@/components/DashboardHeader";
import PostItem from "@/components/PostItem";
import { prisma } from "@/lib/db";

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
        <button>new post</button>
      </DashboardHeader>
      <main>
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </main>
    </>
  );
}
