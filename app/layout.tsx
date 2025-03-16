import type React from "react";
import { dmSans, smoochSans } from "./font";
import "./globals.css";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness Wisdom | Premium Health Blog",
  description: "Evidence-based insights for your healthiest life",
  keywords: [
    "health",
    "wellness",
    "nutrition",
    "fitness",
    "mental health",
    "blog",
  ],
  authors: [{ name: "Wellness Wisdom Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wellnesswisdom.com",
    title: "Wellness Wisdom | Premium Health Blog",
    description: "Evidence-based insights for your healthiest life",
    siteName: "Wellness Wisdom",
    images: [
      {
        url: "https://wellnesswisdom.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wellness Wisdom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Wisdom | Premium Health Blog",
    description: "Evidence-based insights for your healthiest life",
    creator: "@wellnesswisdom",
    images: [
      {
        url: "https://wellnesswisdom.com/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wellness Wisdom",
      },
    ],
  },
  // Add credits for images
  other: {
    "image-credits": "All images provided by Pexels.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${smoochSans.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
