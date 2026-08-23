import Link from "next/link";
import { primaryNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-surface-warm/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {/* TODO(CLIENT): Replace with the approved logo mark (SVG preferred) */}
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-navy font-display text-sm font-semibold text-gold-light"
          >
            KN
          </span>
          <span className="leading-tight">
            <span className="block text-sm md:text-base">{siteConfig.companyName}</span>
            <span className="block text-[11px] font-body font-medium uppercase tracking-wide text-gold-dark">
              {siteConfig.brandName}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-body text-ink/80 hover:text-navy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded bg-gold px-5 py-2.5 text-sm font-body font-medium text-navy-deep hover:bg-gold-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Enquire Now
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
