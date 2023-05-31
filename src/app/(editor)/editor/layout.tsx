import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function EditorLayout({ children }: Props) {
  return <>{children}</>;
}
