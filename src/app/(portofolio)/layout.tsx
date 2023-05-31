import { ReactNode } from "react";

import Navbar from "@/components/Navbar";

interface PortofolioLayoutProps {
  children: ReactNode;
}

export default function PortofolioLayout({ children }: PortofolioLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
