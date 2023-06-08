"use client";

import { ReactNode } from "react";

import { Container } from "./styled";

interface Props {
  children: ReactNode;
}

const ProjectList = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ProjectList;
