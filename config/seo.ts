import type { Metadata } from "next";
import { siteConfig } from "./site";

interface PageSeo {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.brandName}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.companyName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.companyName} — ${siteConfig.brandName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const pageSeo = {
  home: {
    title: `${siteConfig.companyName} | Gold Loan in Perambra, Kerala`,
    description:
      "Kurumbranad Nidhi Limited — member savings, deposits, and gold loan enquiries in Perambra, Kerala. Enquire today, subject to eligibility and applicable regulations.",
    path: "/",
  },
  about: {
    title: "About Us",
    description:
      "Learn about Kurumbranad Nidhi Limited, a member-focused Nidhi based in Perambra, Kerala.",
    path: "/about",
  },
  services: {
    title: "Member Services",
    description:
      "Savings, recurring deposit, fixed deposit, and gold loan services for eligible members of Kurumbranad Nidhi Limited.",
    path: "/services",
  },
  goldLoan: {
    title: "Gold Loan in Perambra, Kerala",
    description:
      "Explore Kurumbranad Gold Loan — transparent, in-person gold-backed lending in Perambra, Kerala. Enquire now.",
    path: "/gold-loan",
  },
  corporateProfile: {
    title: "Corporate Profile",
    description:
      "An overview of Kurumbranad Nidhi Limited's corporate profile, structure, and indicative future plans.",
    path: "/corporate-profile",
  },
  compliance: {
    title: "Compliance & Governance",
    description:
      "Kurumbranad Nidhi Limited's approach to legal structure, KYC, internal controls, and grievance redressal.",
    path: "/compliance",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Kurumbranad Nidhi Limited in Perambra, Kerala for savings, deposit, or gold loan enquiries.",
    path: "/contact",
  },
} as const;
