"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AdBanner } from "./ad-banner";

export function AdManager() {
  const pathname = usePathname();
  const [adsEnabled, setAdsEnabled] = useState(false);

  useEffect(() => {
    // Check if user has consented to ads
    const hasConsent = localStorage.getItem("gdpr-consent") === "all";
    setAdsEnabled(hasConsent);

    // Listen for consent changes
    const handleConsentChange = (e: CustomEvent) => {
      if (e.detail?.consent === "all") {
        setAdsEnabled(true);
      }
    };

    window.addEventListener("gdpr-consent-changed" as any, handleConsentChange);

    return () => {
      window.removeEventListener(
        "gdpr-consent-changed" as any,
        handleConsentChange
      );
    };
  }, []);

  // Don't show ads if user hasn't consented
  if (!adsEnabled) return null;

  // Load interstitial and sticky ads on all pages
  return (
    <>
      {/* Sticky ad at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center">
        <AdBanner size="sticky" stickyId={1} />
      </div>

      {/* Interstitial ad - shown on page load */}
      <AdBanner size="interstitial" interstitialId={1} />

      {/* Notification ads */}
      <AdBanner size="notification" notificationId={1} />
    </>
  );
}
