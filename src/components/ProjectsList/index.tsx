"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { Container } from "./styled";

interface Props {
  children: ReactNode;
}

const breakPoints = [350, 500, 750, 1024];

const ProjectList = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ProjectList;
