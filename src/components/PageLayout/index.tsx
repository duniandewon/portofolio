"use client";

import { ReactNode } from "react";

import { Container } from "./styled";

interface IPageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: IPageLayoutProps) => {
  return <Container>{children}</Container>;
};

export default PageLayout;
