import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShinCode_Dev - Web開発受託サービス",
  description:
    "モダンなWeb開発、AI統合、MVPの開発を提供するフリーランスエンジニア",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className}`}>{children}</body>
    </html>
  );
}
