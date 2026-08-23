"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { loadAnalytics, analytics } from "@/lib/analytics";

const CONSENT_KEY = "kn_analytics_consent"; // stores "granted" | "denied" in a first-party cookie

function readConsent(): "granted" | "denied" | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`${CONSENT_KEY}=(granted|denied)`));
  return (match?.[1] as "granted" | "denied" | undefined) ?? null;
}

function writeConsent(value: "granted" | "denied") {
  document.cookie = `${CONSENT_KEY}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function AnalyticsConsent() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setConsent(readConsent());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (consent === "granted") {
      loadAnalytics();
      analytics.pageView(pathname);
    }
  }, [consent, pathname]);

  if (!hydrated || consent !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/80">
          We use privacy-conscious analytics to understand site usage. No sensitive personal or financial
          information is ever included. See our{" "}
          <a href="/compliance#privacy-policy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => {
              writeConsent("denied");
              setConsent("denied");
            }}
            className="rounded border border-navy/30 px-4 py-2 text-sm text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => {
              writeConsent("granted");
              setConsent("granted");
            }}
            className="rounded bg-gold px-4 py-2 text-sm font-medium text-navy-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
