import { ReactNode } from "react";

import Navbar from "@/components/Navbar";

import PageLayout from "@/components/PageLayout";

interface PortofolioLayoutProps {
  children: ReactNode;
}

export default function PortofolioLayout({ children }: PortofolioLayoutProps) {
  return (
    <PageLayout>
      <Navbar />
      {children}
    </PageLayout>
  );
}
