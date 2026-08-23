import type { Metadata } from "next";
import { buildMetadata, pageSeo } from "@/config/seo";
import { contactContent } from "@/config/content";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { WhatsappQuoteCta } from "@/components/ui/whatsapp-quote-cta";

export const metadata: Metadata = buildMetadata(pageSeo.contact);

export default function ContactPage() {
  const { hero, formNote } = contactContent;
  const { contact } = siteConfig;

  return (
    <>
      <Breadcrumbs path="/contact" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl leading-tight text-navy md:text-4xl">{hero.heading}</h1>
          <p className="mt-5 text-ink/80 leading-relaxed">{hero.body}</p>
          <div className="mt-6">
            <WhatsappQuoteCta />
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-lg text-navy">Office</h2>
              <address className="mt-2 not-italic text-sm leading-relaxed text-ink/75">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-2 text-sm text-ink/60">{contact.hours}</p>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-navy underline underline-offset-2 hover:text-gold-dark"
              >
                View on Google Maps
              </a>
            </div>

            <div>
              <h2 className="font-display text-lg text-navy">Phone</h2>
              <a
                href={contact.phoneHref}
                className="mt-2 block text-sm text-ink/75 underline-offset-2 hover:text-navy hover:underline"
              >
                {contact.phoneDisplay}
              </a>
            </div>

            <div>
              <h2 className="font-display text-lg text-navy">WhatsApp</h2>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-ink/75 underline-offset-2 hover:text-navy hover:underline"
              >
                {contact.whatsappDisplay}
              </a>
            </div>

            <div>
              <h2 className="font-display text-lg text-navy">Email</h2>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block text-sm text-ink/75 underline-offset-2 hover:text-navy hover:underline"
              >
                {contact.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-lg border border-navy/10 bg-white p-6 sm:p-8">
              <h2 className="font-display text-lg text-navy">Enquire in detail</h2>
              <p className="mt-2 text-sm text-ink/70">{formNote}</p>
              <p className="mt-1 text-xs text-ink/50">
                Submitting this form opens WhatsApp with your details pre-filled, ready for you to send.
              </p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
