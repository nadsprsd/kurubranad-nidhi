"use client";

import { buildQuickEnquiryMessage, buildWhatsappLink } from "@/lib/whatsapp";
import { analytics } from "@/lib/analytics";

interface WhatsappQuoteCtaProps {
  serviceName?: string;
  label?: string;
  className?: string;
}

/**
 * A single-tap "Message us on WhatsApp" / "Get a Quick Quote" CTA — the
 * same pattern used by Muthoot Fincorp and similar sites: no form, just a
 * pre-filled WhatsApp message the visitor can send in one tap.
 */
export function WhatsappQuoteCta({ serviceName, label, className = "" }: WhatsappQuoteCtaProps) {
  const link = buildWhatsappLink(buildQuickEnquiryMessage(serviceName));

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => analytics.whatsappClick()}
      className={`inline-flex items-center justify-center gap-2 rounded bg-[#25D366] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#1DA851] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${className}`}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.14L2 22l5.11-1.53a9.87 9.87 0 0 0 4.93 1.33h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.37-.5.07-1.03.1-1.66-.1-.38-.12-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.5-3.97-.13-.17-1.08-1.43-1.08-2.73s.68-1.93.92-2.2c.24-.26.53-.33.7-.33.18 0 .35.01.5.01.16 0 .37-.06.58.44.24.57.8 1.97.87 2.12.07.14.11.32.02.5-.1.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.72 1.19 1.55 1.92 1.06.95 1.96 1.24 2.23 1.38.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.81.86.27.14.45.2.51.32.07.12.07.68-.17 1.35z" />
      </svg>
      {label ?? (serviceName ? `Get a Quick Quote on WhatsApp` : "Message us on WhatsApp")}
    </a>
  );
}
