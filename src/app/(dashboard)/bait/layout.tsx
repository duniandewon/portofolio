import { ReactNode } from "react";

interface PortofolioLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: PortofolioLayoutProps) {
  return <>{children}</>;
}
