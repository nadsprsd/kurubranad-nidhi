"use client";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let loaded = false;

export function loadAnalytics(measurementId: string): void {
  if (loaded || !measurementId || typeof window === "undefined") return;

  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  });

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);
}

function track(event: string, params?: Record<string, string | boolean>) {
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