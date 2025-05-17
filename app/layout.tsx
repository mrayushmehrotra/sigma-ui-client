import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  viewport: {
    width: "device-width",

    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "React",
    "Next.js",
    "NextUI",
    "Tailwind CSS",
    "Sigma",
    "Sigma UI",
    "React Aria",
    "Server Components",
    "React Components",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "UI Design System",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "sigma",
      url: "https://x.com/sigma_ui",
    },
  ],
  creator: "sigmaui-inc",
  alternates: {
    canonical: "https://sigma.com",
    types: {
      "application/rss+xml": [
        { url: "https://sigma.com/feed.xml", title: "RSS Feed" },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
