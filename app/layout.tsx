import type React from "react";
import { dmSans, smoochSans } from "./fonts";
import "./globals.css";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { GDPRConsentBanner } from "@/components/ads/gdpr-consent-banner";
import { AdManager } from "@/components/ads/ad-manager";
import Script from "next/script";

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
      <head>
        <script
          type="text/javascript"
          src="https://fstatic.netpub.media/extra/cmp/cmp-gdpr.js"
          defer
        />
        {/* Netpub script for sticky and interstitial ads */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(a) { if (!document.getElementById(a)) { const s = document.createElement("script"); s.id = a; s.async = true; s.src = ["https://fstatic.netpub.media/static/", a, ".min.js?", Date.now()].join(""); document.head.appendChild(s); } })("6ab7f04dbd574119581a67a94b51cec0");`,
          }}
        />
      </head>
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
            <GDPRConsentBanner />
            <AdManager />
            {/* Sticky ad at the bottom */}
            <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center">
              <div className="text-xs text-white bg-black/70 px-2 py-0.5 rounded-t-md">
                Advertisement
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<ins class="adv-6ab7f04dbd574119581a67a94b51cec0" data-sizes-desktop="200x200,250x250,300x250,336x280,468x60,678x60,728x90,870x200,970x250,970x90" data-sizes-mobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50" data-sticky="1"></ins>`,
                }}
              />
            </div>

            {/* Interstitial ad */}
            <div
              dangerouslySetInnerHTML={{
                __html: `<ins class="adv-6ab7f04dbd574119581a67a94b51cec0" data-sizes-desktop="1050x300,200x200,250x250,300x250,336x280,400x350,468x60,678x60,  data-sizes-desktop="1050x300,200x200,250x250,300x250,336x280,400x350,468x60,678x60,700x300,728x500,728x90,750x400,750x480,870x200,970x250,970x90" data-sizes-mobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50" data-interstitial="1"></ins>`,
              }}
            />
          </div>
        </ThemeProvider>
        <Script id="aclib-auto-tag" strategy="afterInteractive">
          {`
            aclib.runAutoTag({
              zoneId: 'q6kpb6njyd',
            });
          `}
        </Script>
        <Script id="aclib-auto-tag" strategy="afterInteractive">
          {`
            aclib.runAutoTag({
              zoneId: 'ab7m7wwasz',
            });
          `}
        </Script>
      </body>
    </html>
  );
}
