/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------------------
 * Every value marked "TODO(CLIENT)" is a placeholder and MUST be replaced
 * with client-verified information before launch. Do not invent values.
 * Legal/financial claims must be reviewed by the client's CA/CS/legal counsel
 * before publishing (see CLIENT_APPROVAL_CHECKLIST.md).
 */

export const siteConfig = {
  companyName: "Kurubranad Nidhi Limited",
  brandName: "Kurubranad Gold Loan",
  shortName: "Kurubranad",

  // TODO(CLIENT): Replace with the final production domain.
  url: "https://www.kurubranadnidhi.example.com",

  // TODO(CLIENT): Confirm final tagline wording with the client before launch.
  tagline: "A member-first Nidhi, rooted in Perambra.",

  description:
    "Kurubranad Nidhi Limited serves members in Perambra, Kerala with savings, deposits, and gold-backed loan enquiries — offered subject to eligibility, documentation, company policy, and applicable regulations.",

  contact: {
    // TODO(CLIENT): Verified registered office address required.
    addressLines: [
      "TODO(CLIENT): Building / Door No.",
      "TODO(CLIENT): Street / Locality",
      "Perambra, Kerala — TODO(CLIENT): PIN CODE",
      "India",
    ],
    // TODO(CLIENT): Verified landline/mobile number required.
    phoneDisplay: "TODO(CLIENT): +91 XXXXX XXXXX",
    phoneHref: "tel:+91XXXXXXXXXX",
    // TODO(CLIENT): Confirm WhatsApp business number.
    whatsappDisplay: "TODO(CLIENT): +91 XXXXX XXXXX",
    whatsappHref: "https://wa.me/91XXXXXXXXXX",
    // TODO(CLIENT): Verified official email address required.
    email: "TODO(CLIENT)@kurubranadnidhi.example.com",
    // TODO(CLIENT): Replace with the verified Google Maps place link.
    mapsUrl: "https://maps.google.com/?q=TODO-CLIENT-VERIFIED-ADDRESS",
    // Office hours — TODO(CLIENT): confirm actual hours.
    hours: "TODO(CLIENT): e.g. Mon–Sat, 9:30 AM – 5:30 PM",
  },

  legal: {
    // TODO(CLIENT): Corporate Identification Number, if applicable, from ROC records only.
    cin: "TODO(CLIENT): CIN (verified, ROC records only)",
    // TODO(CLIENT): Registered legal structure, confirmed by company secretary.
    legalStructure: "TODO(CLIENT): e.g. Nidhi Company registered under the Companies Act, 2013",
    // TODO(CLIENT): Regulatory/registration details — do not infer or invent.
    registrationDetails: "TODO(CLIENT): Registrar of Companies details, registration number, date of incorporation",
    disclaimer:
      "Kurubranad Nidhi Limited is not a bank or NBFC. Services described on this website are offered to eligible members only, subject to eligibility, documentation, company policy, and applicable regulations. Figures, rates, and terms shown are illustrative only until confirmed by the company and reviewed by qualified legal/compliance counsel.",
  },

  social: {
    // TODO(CLIENT): Add only official, client-confirmed social profiles. Leave empty otherwise.
    facebook: "",
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
