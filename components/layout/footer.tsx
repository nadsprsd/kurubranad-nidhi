import Link from "next/link";
import { siteConfig } from "@/config/site";
import { primaryNav, footerLegalNav } from "@/config/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-surface-warm/85">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 sm:gap-10 md:grid-cols-4">
          <div>
            <p className="font-display font-semibold text-lg text-surface-warm">{siteConfig.companyName}</p>
            <p className="mt-1.5 text-sm font-body uppercase tracking-wide text-gold-light">
              {siteConfig.brandName}
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed">
              {siteConfig.contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <h2 className="font-body text-sm font-semibold text-surface-warm mb-5">Get in touch</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-gold-light underline-offset-2 hover:underline"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light underline-offset-2 hover:underline"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gold-light underline-offset-2 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-body text-sm font-semibold text-surface-warm mb-5">Navigate</h2>
            <ul className="space-y-3 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-light underline-offset-2 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-body text-sm font-semibold text-surface-warm mb-5">Legal</h2>
            <ul className="space-y-3 text-sm">
              {footerLegalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-light underline-offset-2 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* TODO(CLIENT): Add official social links only once confirmed */}
          </div>
        </div>

        <div className="mt-14 border-t border-surface-warm/15 pt-8 text-xs leading-relaxed text-surface-warm/60">
          <p>{siteConfig.legal.disclaimer}</p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {siteConfig.companyName}. All rights reserved.
            </p>
            <p>
              Website developed by{" "}
              <a
                href="https://bizgrowonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light hover:underline underline-offset-2"
              >
                BizgrowOnline
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
