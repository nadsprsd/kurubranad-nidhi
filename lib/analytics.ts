"use client";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let loaded = false;

export function loadAnalytics(measurementId: string): void {
  if (typeof window === "undefined") return;

  if (!measurementId) {
    // Shows in the browser console so a missing env var is never silent again.
    console.warn(
      "[analytics] No GA4 Measurement ID found. Set NEXT_PUBLIC_GA4_MEASUREMENT_ID in Vercel and redeploy."
    );
    return;
  }

  if (loaded) return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];

  // IMPORTANT: gtag.js only understands the special `arguments` object.
  // Pushing a normal array (e.g. `(...args) => dataLayer.push(args)`) makes
  // Google silently ignore every command, so no data ever reaches GA4.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: false, // page views are sent manually on each route change
  });

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.async = true;
  document.head.appendChild(script);
}

function track(event: string, params?: Record<string, string | boolean>) {
  if (!loaded || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}

export const analytics = {
  pageView: (path: string) =>
    track("page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    }),
  enquirySubmit: (service: string) => track("enquiry_submit", { service }),
  phoneClick: () => track("phone_click"),
  whatsappClick: () => track("whatsapp_click"),
  mapClick: () => track("map_click"),
};