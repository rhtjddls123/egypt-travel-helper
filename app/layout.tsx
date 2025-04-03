import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutHeader from "@/components/layout-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이집트 여행 도우미",
  description: "이집트 여행을 위한 다양한 도구를 제공하는 앱"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <LayoutHeader />
        {children}
      </body>
    </html>
  );
}
