import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
