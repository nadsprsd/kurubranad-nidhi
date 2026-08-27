/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------------------
 * Values below marked "TODO(CLIENT)" are still placeholders. Everything else
 * was sourced directly from the client's own corporate profile PDF and
 * branch signage photos, so it's real — but still worth a final read-through
 * by the client before launch, since a couple of details (see notes) were
 * time-sensitive when the PDF was written and may need reconfirming.
 */

export const siteConfig = {
  companyName: "Kurumbranad Nidhi Limited",
  brandName: "Kurumbranad Gold Loan",
  shortName: "Kurumbranad",

  // TODO(CLIENT): Replace with the final production domain once purchased.
  url: "https://www.kurumbranadgoldloan.example.com",

  tagline: "We make your dream easy",

  description:
    "Kurumbranad Gold Loan is a gold-backed lending institution serving members across Kozhikode and Kannur districts, Kerala, with savings, deposits, and gold loan services — offered subject to eligibility, documentation, company policy, and applicable regulations.",

  contact: {
    // Registered / first branch address, from the client's corporate profile PDF.
    addressLines: [
      "Door No: 5/821-A, Old EMS Hospital Road",
      "Opposite Perambra Market",
      "Perambra, Kerala — 673525",
      "India",
    ],
    // Toll-free number from the client's corporate profile PDF and branch signage.
    phoneDisplay: "8089 099 196",
    phoneHref: "tel:+918089099196",
    // TODO(CLIENT): Confirm this is also the correct WhatsApp Business number —
    // the PDF only lists it as a general/toll-free contact number.
    whatsappDisplay: "8089 099 196",
    whatsappHref: "https://wa.me/918089099196",
    email: "nidhi.kurumbranad@gmail.com",
    // TODO(CLIENT): Replace with the verified Google Maps place link for the Perambra branch.
    mapsUrl: "https://maps.google.com/?q=Kurumbranad+Nidhi+Limited+Perambra+Kerala",
    // TODO(CLIENT): Confirm official office hours.
    hours: "TODO(CLIENT): e.g. Mon–Sat, 9:30 AM – 5:30 PM",
  },

  legal: {
    // TODO(CLIENT): CIN not shown in any supplied material — provide from ROC records only.
    cin: "TODO(CLIENT): CIN (verified, ROC records only)",
    legalStructure: "Nidhi company",
    // Per-branch licence numbers ARE shown in the supplied signage photos —
    // captured in branches.ts. TODO(CLIENT): confirm CIN and any additional
    // registration numbers not visible on signage.
    registrationDetails:
      "TODO(CLIENT): Full Registrar of Companies details and date of incorporation, beyond the per-branch licence numbers already on file.",
    disclaimer:
      "Kurumbranad Nidhi Limited is a Nidhi company and is not a bank or NBFC. Services described on this website are offered to eligible members only, subject to eligibility, documentation, company policy, and applicable regulations. Figures, rates, and terms shown are illustrative only until confirmed by the company and reviewed by qualified legal/compliance counsel.",
  },

  social: {
    facebook: "https://www.facebook.com/100083632792276/",
    // TODO(CLIENT): Add Instagram/YouTube only once official accounts are confirmed.
    instagram: "",
    youtube: "",
  },

  analytics: {
    // Read from environment at runtime — never hardcode.
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "",
  },

  searchConsole: {
    // Read from environment at runtime — never hardcode.
    verificationToken: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
