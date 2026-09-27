/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------------------
 * This file is now populated with real, client-confirmed facts (address,
 * phone, hours, CIN, registration). The domain below is still a placeholder
 * since no domain has been purchased yet — that's the one remaining gap,
 * and it's backend-only (used for canonical URLs/metadata), so it never
 * renders as visible page content.
 */

export const siteConfig = {
  companyName: "Kurumbranad Nidhi Limited",
  brandName: "Kurumbranad Gold Loan",
  shortName: "Kurumbranad",

  // Not yet purchased — update once the client has chosen a domain, then redeploy.
  url: "https://www.kurumbranadgoldloan.example.com",

  tagline: "We make your dream easy",

  description:
    "Kurumbranad Gold Loan is a gold-backed lending institution serving members across Kozhikode and Kannur districts, Kerala, with savings, deposits, and gold loan services — offered subject to eligibility, documentation, company policy, and applicable regulations.",

  contact: {
    // Confirmed directly by the client.
    addressLines: [
      "Door No: 5/821-A, Old EMS Hospital Road",
      "Opposite Perambra Market",
      "Perambra, Kozhikode, Kerala — 673525",
      "India",
    ],
    // Primary contact number, given directly by the client.
    phoneDisplay: "8891 118 188",
    phoneHref: "tel:+918891118188",
    // The toll-free/WhatsApp number from the corporate profile PDF and branch
    // signage is kept here for WhatsApp specifically, since it's the number
    // printed on the "GOLD LOAN DELIVERED AT YOUR DOORSTEP" promotional
    // material. Flagging this assumption — confirm with the client that
    // WhatsApp should stay on this number rather than move to 8891118188.
    whatsappDisplay: "8089 099 196",
    whatsappHref: "https://wa.me/918089099196",
    email: "nidhi.kurumbranad@gmail.com",
    // TODO(CLIENT): verified Google Maps place link — using a text-based
    // search link in the meantime so the site works day one either way.
    mapsUrl: "https://maps.google.com/?q=Kurumbranad+Nidhi+Limited+Perambra+Kozhikode+Kerala+673525",
    hours: "Mon–Sat, 9:30 AM – 5:00 PM",
    // Escalation contact for unresolved complaints, given directly by the client.
    grievancePhone: "9061 554 575",
    grievancePhoneHref: "tel:+919061554575",
  },

  legal: {
    cin: "U65999KL2020PLN063491",
    legalStructure: "Nidhi company",
    registrationDetails:
      "Registered under CIN U65999KL2020PLN063491. Individual branches also operate under state-issued licence numbers — see the Compliance page.",
    disclaimer:
      "Kurumbranad Nidhi Limited is a Nidhi company and is not a bank or NBFC. Services described on this website are offered to eligible members only, subject to eligibility, documentation, company policy, and applicable regulations. Figures, rates, and terms shown are indicative and confirmed at the branch at the time of application.",
  },

  social: {
    facebook: "https://www.facebook.com/100083632792276/",
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
