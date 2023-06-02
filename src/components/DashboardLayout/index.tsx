"use client";

import { ReactNode } from "react";

import { Container } from "./styled";

interface IDashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: IDashboardLayoutProps) {
  return <Container>{children}</Container>;
}
