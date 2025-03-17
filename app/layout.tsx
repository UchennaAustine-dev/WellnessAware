import type React from "react";
import { dmSans, smoochSans } from "./font";
import "./globals.css";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

// SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://wellnessaware.site"),
  title: {
    default: "WellnessAware | Evidence-Based Health & Wellness",
    template: "%s | WellnessAware",
  },
  description:
    "Evidence-based insights for your healthiest life from trusted health professionals and researchers.",
  keywords: [
    "health",
    "wellness",
    "nutrition",
    "fitness",
    "mental health",
    "blog",
    "wellnessaware",
  ],
  authors: [{ name: "WellnessAware Team" }],
  creator: "WellnessAware",
  publisher: "WellnessAware",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wellnessaware.site",
    title: "WellnessAware | Evidence-Based Health & Wellness",
    description:
      "Evidence-based insights for your healthiest life from trusted health professionals and researchers.",
    siteName: "WellnessAware",
    images: [
      {
        url: "https://wellnessaware.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WellnessAware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WellnessAware | Evidence-Based Health & Wellness",
    description:
      "Evidence-based insights for your healthiest life from trusted health professionals and researchers.",
    creator: "@wellnessaware",
    images: [
      {
        url: "https://wellnessaware.site/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "WellnessAware",
      },
    ],
  },
  // Add credits for images
  other: {
    "image-credits": "All images provided by Pexels.com",
  },
  alternates: {
    canonical: "https://wellnessaware.site",
    languages: {
      "en-US": "https://wellnessaware.site/en-US",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
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
