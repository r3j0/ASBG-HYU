import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  style: "normal",
  variable: "--font-pretendard",
  preload: true,
  fallback: ["-apple-system", "BlinkMacSystemFont", "Noto Sans KR", "sans-serif"],
});

export const metadata: Metadata = {
  title: "ASBG at HYU — AWS Students Builder Club",
  description:
    "클라우드를 배우고, 직접 만들고, 함께 성장하는 한양대학교 학생 빌더 커뮤니티.",
  icons: {
    icon: "/asbg-hyu-ico.png",
    apple: "/asbg-hyu-ico.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#020407",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>{children}</body>
    </html>
  );
}
