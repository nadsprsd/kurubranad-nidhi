"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { serviceOptions } from "@/lib/validation";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { analytics } from "@/lib/analytics";

const SESSION_KEY = "kn_lead_popup_shown";
const DELAY_MS = 14000;
const SCROLL_THRESHOLD = 0.5; // 50% down the page

export function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dismissedThisLoad, setDismissedThisLoad] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Don't show on the contact page — the person is already enquiring there.
  const eligiblePage = pathname !== "/contact";

  useEffect(() => {
    if (!eligiblePage || dismissedThisLoad) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    };

    const timer = window.setTimeout(show, DELAY_MS);

    function onScroll() {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      if (scrolled >= SCROLL_THRESHOLD) show();
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [eligiblePage, dismissedThisLoad]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector("input")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
    setDismissedThisLoad(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/70 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-heading"
        className="relative w-full max-w-md overflow-hidden rounded-lg bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative h-36 w-full">
          {/* TODO(CLIENT): replace with an approved gold-loan or branch photograph */}
          <Image
            src="/images/gold-loan-valuation-closeup.jpg"
            alt=""
            fill
            sizes="448px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>

        <div className="p-6">
          <h2 id="lead-popup-heading" className="font-display text-xl text-navy">
            Have a question about a gold loan?
          </h2>
          <p className="mt-1.5 text-sm text-ink/70">
            Leave your number and we&rsquo;ll reach out, or send it straight to us on WhatsApp.
          </p>

          <PopupForm onSent={close} />

          <p className="mt-3 text-center text-xs text-ink/45">
            No spam. We&rsquo;ll only contact you about this enquiry.
          </p>
        </div>
      </div>
    </div>
  );
}

function PopupForm({ onSent }: { onSent: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("gold-loan");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[+]?[0-9\s-]{10,15}$/.test(phone.trim())) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError("");

    const serviceLabel = serviceOptions.find((s) => s.value === service)?.label ?? service;
    const message = [
      `Quick enquiry — ${siteConfig.brandName}`,
      ``,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Service: ${serviceLabel}`,
    ].join("\n");

    window.open(buildWhatsappLink(message), "_blank", "noopener,noreferrer");
    analytics.enquirySubmit(service);
    onSent();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3" noValidate>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Your name"
        className="block w-full rounded border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      />
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        aria-label="Phone number"
        className="block w-full rounded border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      />
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        aria-label="Service"
        className="block w-full rounded border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {serviceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] px-6 py-3 text-[15px] font-medium text-white hover:bg-[#1DA851] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
