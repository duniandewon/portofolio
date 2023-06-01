import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/app/registry";
import GlobalStyle from "@/app/GlobalStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
