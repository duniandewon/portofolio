import { ReactNode } from "react";

import DashboardLayout from "@/components/DashboardLayout";

interface PortofolioLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: PortofolioLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
