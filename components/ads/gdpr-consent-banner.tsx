"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function GDPRConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const hasConsent = localStorage.getItem("gdpr-consent");

    if (!hasConsent) {
      setShowBanner(true);
    }

    // This will be triggered by the netpub CMP script when loaded
    const handleCmpLoaded = () => {
      if (
        window.CMP_GDPR &&
        typeof window.CMP_GDPR.showConsentModal === "function"
      ) {
        // The CMP script is loaded and ready
        console.log("GDPR CMP script loaded");
      }
    };

    // Listen for the CMP loaded event
    window.addEventListener("cmp_gdpr_loaded", handleCmpLoaded);

    return () => {
      window.removeEventListener("cmp_gdpr_loaded", handleCmpLoaded);
    };
  }, []);

  const handleAcceptAll = () => {
    // Store consent in localStorage
    localStorage.setItem("gdpr-consent", "all");
    setShowBanner(false);

    // If the CMP script is loaded, use its API
    if (window.CMP_GDPR && typeof window.CMP_GDPR.acceptAll === "function") {
      window.CMP_GDPR.acceptAll();
    }
  };

  const handleCustomize = () => {
    // If the CMP script is loaded, open its modal
    if (
      window.CMP_GDPR &&
      typeof window.CMP_GDPR.showConsentModal === "function"
    ) {
      window.CMP_GDPR.showConsentModal();
    }
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t p-4 shadow-lg">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={handleCustomize}>
              Customize
            </Button>
            <Button onClick={handleAcceptAll}>Accept All</Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="ml-2"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
