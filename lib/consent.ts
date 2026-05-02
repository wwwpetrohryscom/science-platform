export type ConsentState = {
  necessary: true;
  analytics: boolean;
  decidedAt: string;
  version: 1;
};

export const CONSENT_STORAGE_KEY = "ecosciencehub.cookie-consent.v1";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const GOOGLE_ANALYTICS_ID = /^G-[A-Z0-9]+$/.test(googleAnalyticsId)
  ? googleAnalyticsId
  : "";

export function createConsentState(analytics: boolean): ConsentState {
  return {
    necessary: true,
    analytics,
    decidedAt: new Date().toISOString(),
    version: 1,
  };
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.necessary !== true || parsed.version !== 1) return null;

    return {
      necessary: true,
      analytics: parsed.analytics === true,
      decidedAt:
        typeof parsed.decidedAt === "string"
          ? parsed.decidedAt
          : new Date().toISOString(),
      version: 1,
    };
  } catch {
    return null;
  }
}

export function saveConsent(consent: ConsentState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Fail closed. The in-memory React state still updates for the
    // current session, but analytics will not persist across reloads.
  }
  window.dispatchEvent(new CustomEvent("ecosciencehub:consentchange"));
}

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.analytics === true;
}
