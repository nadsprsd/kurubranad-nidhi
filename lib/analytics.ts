"use client";

/**
 * Consent-aware Google Analytics 4 helper.
 *
 * - GA4 script only loads after loadAnalytics() is called, which should only
 *   happen once the visitor has given consent (see components' consent gate).
 * - NEXT_PUBLIC_GA4_MEASUREMENT_ID must be set in the environment; if it is
 *   missing, analytics silently no-ops so local/dev builds never error.
 * - Event helpers below intentionally accept no free-form PII: do not extend
 *   these to pass name, phone, email, or any financial figures as params.
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "";

let loaded = false;

export function loadAnalytics(): void {
  if (loaded || !MEASUREMENT_ID || typeof window === "undefined") return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    anonymize_ip: true,
    // We call page_view manually on route change; avoid GA4's automatic
    // send-on-load double counting during client-side navigation.
    send_page_view: false,
  });

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);
}

function track(event: string, params?: Record<string, string>) {
  if (!loaded || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}

export const analytics = {
  pageView: (path: string) => track("page_view", { page_path: path }),
  enquirySubmit: (service: string) => track("enquiry_submit", { service }),
  phoneClick: () => track("phone_click"),
  whatsappClick: () => track("whatsapp_click"),
  mapClick: () => track("map_click"),
};
