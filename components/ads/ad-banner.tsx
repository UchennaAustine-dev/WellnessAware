"use client";

import { useEffect, useRef } from "react";

type AdSize =
  | "300x250" // IAB Medium Rectangle
  | "300x600" // IAB Half Page
  | "728x90" // IAB Leaderboard
  | "728x500" // Large Leaderboard
  | "750x400" // Custom Large
  | "sticky" // Sticky ad
  | "interstitial" // Interstitial ad
  | "notification"; // Notification ad

interface AdBannerProps {
  size: AdSize;
  slotId?: number;
  stickyId?: number;
  interstitialId?: number;
  notificationId?: number;
  className?: string;
}

export function AdBanner({
  size,
  slotId,
  stickyId,
  interstitialId,
  notificationId,
  className = "",
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const scriptId = "6ab7f04dbd574119581a67a94b51cec0";

  useEffect(() => {
    // Load the Netpub script if it doesn't exist
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://fstatic.netpub.media/static/${scriptId}.min.js?${Date.now()}`;
      script.type = "text/javascript";
      document.head.appendChild(script);
    }

    // Create the ad markup
    if (adRef.current) {
      const adElement = document.createElement("div");
      adElement.innerHTML = getAdMarkup(
        size,
        slotId,
        stickyId,
        interstitialId,
        notificationId
      );

      // Clear previous content and append new ad
      adRef.current.innerHTML = "";
      adRef.current.appendChild(adElement);
    }
  }, [size, slotId, stickyId, interstitialId, notificationId]);

  return <div ref={adRef} className={`ad-container ${className}`} />;
}

function getAdMarkup(
  size: AdSize,
  slotId?: number,
  stickyId?: number,
  interstitialId?: number,
  notificationId?: number
): string {
  const scriptPart = `<script type="text/javascript">(function(a) { if (!document.getElementById(a)) { const s = document.createElement("script"); s.id = a; s.async = true; s.src = ["https://fstatic.netpub.media/static/", a, ".min.js?", Date.now()].join(""); document.head.appendChild(s); } })("6ab7f04dbd574119581a67a94b51cec0");</script>`;

  let insPart = '<ins class="adv-6ab7f04dbd574119581a67a94b51cec0" ';

  switch (size) {
    case "300x250":
      insPart +=
        'data-sizes-desktop="200x200,250x250,300x250,336x280" data-sizes-mobile="200x200,250x250,300x250,336x280"';
      if (slotId) insPart += ` data-slot="${slotId}"`;
      break;
    case "300x600":
      insPart +=
        'data-sizes-desktop="120x600,160x600,200x200,250x250,300x250,300x600,336x280" data-sizes-mobile="160x600,200x200,250x250,300x250,300x600,336x280"';
      if (slotId) insPart += ` data-slot="${slotId}"`;
      break;
    case "728x90":
      insPart +=
        'data-sizes-desktop="728x90,970x90" data-sizes-mobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"';
      if (slotId) insPart += ` data-slot="${slotId}"`;
      break;
    case "728x500":
      insPart +=
        'data-sizes-desktop="200x200,250x250,300x250,336x280,400x350,468x60,640x480,700x300,728x500,728x90,970x90" data-sizes-mobile="200x200,250x250,300x250,300x50,320x100,320x50,336x280,360x100,360x50"';
      if (slotId) insPart += ` data-slot="${slotId}"`;
      break;
    case "750x400":
      insPart +=
        'data-sizes-desktop="200x200,250x250,300x250,336x280,400x350,700x300,728x90,750x400" data-sizes-mobile="200x200,250x250,300x250,300x50,320x100,320x50,336x280,360x100,360x50"';
      if (slotId) insPart += ` data-slot="${slotId}"`;
      break;
    case "sticky":
      insPart +=
        'data-sizes-desktop="200x200,250x250,300x250,336x280,468x60,678x60,728x90,870x200,970x250,970x90" data-sizes-mobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"';
      if (stickyId) insPart += ` data-sticky="${stickyId}"`;
      else insPart += ' data-sticky="1"';
      break;
    case "interstitial":
      insPart +=
        'data-sizes-desktop="1050x300,200x200,250x250,300x250,336x280,400x350,468x60,678x60,700x300,728x500,728x90,750x400,750x480,870x200,970x250,970x90" data-sizes-mobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"';
      if (interstitialId) insPart += ` data-interstitial="${interstitialId}"`;
      else insPart += ' data-interstitial="1"';
      break;
    case "notification":
      if (notificationId && notificationId <= 2) {
        insPart +=
          'data-sizes-desktop="120x600,160x600,300x600,336x280" data-sizes-mobile="120x600,160x600,300x600,336x280"';
      } else if (notificationId && notificationId <= 6) {
        insPart +=
          'data-sizes-desktop="200x200,250x250,300x250,336x280" data-sizes-mobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"';
      } else {
        insPart +=
          'data-sizes-desktop="300x50,320x100,320x50,360x100,360x50" data-sizes-mobile="300x50,320x100,320x50,360x100,360x50"';
      }
      insPart += ` data-notification="${notificationId || 1}"`;
      break;
  }

  insPart += "></ins>";

  return scriptPart + insPart;
}
