"use client";

import { Project } from "@prisma/client";
import { Container, Post, PostDate, PostTitle } from "./styled";

interface Props {
  post: Pick<Project, "id" | "title" | "published" | "createdAt">;
}

const PostItem = ({ post }: Props) => {
  return (
    <Container>
      <Post>
        <PostTitle href={`/editor/${post.id}`}>{post.title}</PostTitle>
        <PostDate>{post.createdAt.toString()}</PostDate>
      </Post>
    </Container>
  );
};

export default PostItem;
