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
  title: "ASBG at HYU",
  description: "AWS Students Builder Club at Hanyang University",
  icons: {
    icon: "/asbg-hyu-ico.png",
    apple: "/asbg-hyu-ico.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#07131d" },
  ],
  colorScheme: "light dark",
};

const themeInitializationScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem("asbg-theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");
    } catch (error) {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body className={pretendard.variable}>{children}</body>
    </html>
  );
}
