interface CMP_GDPR {
  showConsentModal: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  saveConsent: (consent: Record<string, boolean>) => void;
}

interface Window {
  CMP_GDPR?: CMP_GDPR;
}
