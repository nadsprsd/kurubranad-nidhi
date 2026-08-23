import Link from "next/link";
import { breadcrumbLabels } from "@/config/navigation";
import { siteConfig } from "@/config/site";

interface BreadcrumbsProps {
  path: string;
}

export function Breadcrumbs({ path }: BreadcrumbsProps) {
  const label = breadcrumbLabels[path] ?? path;

  const items = [
    { name: "Home", href: "/" },
    { name: label, href: path },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy/10 bg-surface-grey">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-ink/70">
          <li>
            <Link href="/" className="hover:text-navy underline-offset-2 hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy font-medium">
            {label}
          </li>
        </ol>
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
