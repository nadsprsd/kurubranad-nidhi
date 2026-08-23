import { siteConfig } from "@/config/site";

/**
 * Organization JSON-LD, rendered site-wide in the root layout.
 * LocalBusiness structured data is intentionally NOT emitted until the
 * client supplies a verified address and phone number — publishing
 * unverified LocalBusiness data risks misleading search results.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    alternateName: siteConfig.brandName,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface FaqJsonLdProps {
  items: { question: string; answer: string }[];
}

export function FaqJsonLd({ items }: FaqJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
