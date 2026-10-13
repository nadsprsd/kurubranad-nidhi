import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { primaryNav, footerLegalNav } from "@/config/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-surface-warm/85">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 sm:gap-10 md:grid-cols-4">
          <div>
            <div className="inline-block rounded-lg bg-surface-warm p-2.5">
              <Image
                src="/images/brand/logo-full.png"
                alt={`${siteConfig.companyName} logo`}
                width={140}
                height={110}
                className="h-auto w-28"
              />
            </div>
            <p className="mt-4 text-sm italic text-gold-light">&ldquo;{siteConfig.tagline}&rdquo;</p>
            <address className="mt-5 not-italic text-sm leading-relaxed">
              {siteConfig.contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            {(siteConfig.social.facebook || siteConfig.social.instagram || siteConfig.social.linkedin) ? (
              <div className="mt-5">
                <h2 className="font-body text-sm font-semibold text-surface-warm mb-3">Follow us</h2>
                <div className="flex gap-3">
                  {siteConfig.social.facebook ? (
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Facebook"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-warm/25 hover:border-gold-light hover:text-gold-light"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                      </svg>
                    </a>
                  ) : null}
                  {siteConfig.social.instagram ? (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-warm/25 hover:border-gold-light hover:text-gold-light"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.06 2.01.25 2.47.44.62.24 1.06.52 1.52.98.46.46.74.9.98 1.52.19.46.38 1.3.44 2.47.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.17-.25 2.01-.44 2.47-.24.62-.52 1.06-.98 1.52-.46.46-.9.74-1.52.98-.46.19-1.3.38-2.47.44-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.06-2.01-.25-2.47-.44a4.1 4.1 0 0 1-1.52-.98 4.1 4.1 0 0 1-.98-1.52c-.19-.46-.38-1.3-.44-2.47C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.17.25-2.01.44-2.47.24-.62.52-1.06.98-1.52.46-.46.9-.74 1.52-.98.46-.19 1.3-.38 2.47-.44C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-.96.04-1.48.2-1.82.34-.46.18-.78.39-1.13.74-.35.35-.56.67-.74 1.13-.14.34-.3.86-.34 1.82-.07 1.24-.07 1.6-.07 4.76s0 3.52.07 4.76c.04.96.2 1.48.34 1.82.18.46.39.78.74 1.13.35.35.67.56 1.13.74.34.14.86.3 1.82.34 1.24.07 1.6.07 4.76.07s3.52 0 4.76-.07c.96-.04 1.48-.2 1.82-.34.46-.18.78-.39 1.13-.74.35-.35.56-.67.74-1.13.14-.34.3-.86.34-1.82.07-1.24.07-1.6.07-4.76s0-3.52-.07-4.76c-.04-.96-.2-1.48-.34-1.82a2.3 2.3 0 0 0-.74-1.13 2.3 2.3 0 0 0-1.13-.74c-.34-.14-.86-.3-1.82-.34C15.52 4 15.15 4 12 4Zm0 3.07A4.93 4.93 0 1 1 12 16.93 4.93 4.93 0 0 1 12 7.07Zm0 1.8a3.13 3.13 0 1 0 0 6.26 3.13 3.13 0 0 0 0-6.26Zm5.12-1.99a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
                      </svg>
                    </a>
                  ) : null}
                  {siteConfig.social.linkedin ? (
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-warm/25 hover:border-gold-light hover:text-gold-light"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.98h3.96V21H3V9.98ZM9.5 9.98h3.8v1.51h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.08V21h-3.96v-4.96c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21H9.5V9.98Z" />
                      </svg>
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
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
                  href={siteConfig.contact.landlineHref}
                  className="hover:text-gold-light underline-offset-2 hover:underline"
                >
                  {siteConfig.contact.landlineDisplay} (landline)
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
