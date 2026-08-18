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

const siteUrl = "https://asbg-hyu.vercel.app";
const siteTitle = "ASBG at HYU — AWS Student Builders Group";
const siteDescription =
  "AWS와 클라우드를 배우고, 서로의 경험을 나누며 함께 성장하는 한양대학교 학생 커뮤니티. 2026년 1기 멤버를 모집합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/asbg-hyu-ico.png",
    apple: "/asbg-hyu-ico.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "ASBG at HYU",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
