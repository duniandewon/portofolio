"use client";

import { ReactNode } from "react";
import { Container } from "./styled";

const PostsList = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default PostsList;
