"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  GOOGLE_ANALYTICS_ID,
  createConsentState,
  readConsent,
  saveConsent,
  type ConsentState,
} from "@/lib/consent";

type BannerView = "summary" | "customize";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __ecosciencehubGaInitialized?: boolean;
    __ecosciencehubLastPageView?: string;
  }
}

const GA_SCRIPT_ID = "ecosciencehub-google-analytics";

function ensureGoogleAnalytics(): boolean {
  if (GOOGLE_ANALYTICS_ID === "") return false;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  if (!window.__ecosciencehubGaInitialized) {
    window.gtag("js", new Date());
    window.gtag("config", GOOGLE_ANALYTICS_ID, {
      anonymize_ip: true,
      send_page_view: false,
    });
    window.__ecosciencehubGaInitialized = true;
  }

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      GOOGLE_ANALYTICS_ID,
    )}`;
    document.head.appendChild(script);
  }

  return true;
}

export function CookieBanner() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState<BannerView>("summary");
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setAnalyticsEnabled(stored?.analytics ?? false);
    setReady(true);
  }, []);

  const decide = (analytics: boolean) => {
    const next = createConsentState(analytics);
    saveConsent(next);
    setConsent(next);
    setAnalyticsEnabled(analytics);
  };

  const showBanner = ready && consent === null;
  const loadAnalytics = ready && analyticsEnabled && GOOGLE_ANALYTICS_ID !== "";

  useEffect(() => {
    if (!loadAnalytics || !ensureGoogleAnalytics()) return;

    const query = window.location.search.replace(/^\?/, "");
    const pagePath = query ? `${pathname}?${query}` : pathname;
    if (window.__ecosciencehubLastPageView === pagePath) return;

    window.gtag?.("config", GOOGLE_ANALYTICS_ID, {
      anonymize_ip: true,
      page_path: pagePath,
    });
    window.__ecosciencehubLastPageView = pagePath;
  }, [loadAnalytics, pathname]);

  return (
    <>
      {showBanner && (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-line bg-white/95 shadow-[0_-16px_40px_rgba(26,36,33,0.12)] backdrop-blur"
        >
          <div className="container-page flex flex-col gap-5 py-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-ink">
                EcoScienceHub uses privacy-conscious cookies
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Necessary storage keeps this preference working. Analytics is
                optional and helps us understand aggregate site usage. Analytics
                scripts are blocked until you accept them.
              </p>

              {view === "customize" && (
                <div className="mt-4 grid gap-3 rounded-lg border border-ink-line bg-ink-surface p-4 text-sm">
                  <label className="flex items-start gap-3">
                    <input
                      checked
                      disabled
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-ink-line"
                    />
                    <span>
                      <span className="block font-medium text-ink">
                        Necessary cookies
                      </span>
                      <span className="block text-ink-muted">
                        Always enabled. Required for cookie preference storage
                        and basic site security.
                      </span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input
                      checked={analyticsEnabled}
                      onChange={(event) =>
                        setAnalyticsEnabled(event.currentTarget.checked)
                      }
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-ink-line text-primary-700 focus:ring-primary-600"
                    />
                    <span>
                      <span className="block font-medium text-ink">
                        Analytics cookies
                      </span>
                      <span className="block text-ink-muted">
                        Optional. Enables aggregate measurement through the
                        configured Google Analytics property.
                      </span>
                    </span>
                  </label>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
              {view === "summary" ? (
                <button
                  type="button"
                  onClick={() => setView("customize")}
                  className="btn-outline whitespace-nowrap"
                >
                  Customize
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => decide(analyticsEnabled)}
                  className="btn-outline whitespace-nowrap"
                >
                  Save choices
                </button>
              )}
              <button
                type="button"
                onClick={() => decide(false)}
                className="btn-outline whitespace-nowrap"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() => decide(true)}
                className="btn-primary whitespace-nowrap"
              >
                Accept all
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
