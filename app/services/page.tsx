import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata, pageSeo } from "@/config/seo";
import { servicesContent } from "@/config/content";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Cta } from "@/components/ui/cta";
import { WhatsappQuoteCta } from "@/components/ui/whatsapp-quote-cta";

export const metadata: Metadata = buildMetadata(pageSeo.services);

export default function ServicesPage() {
  const { hero, services, disclaimer } = servicesContent;

  return (
    <>
      <Breadcrumbs path="/services" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-display text-3xl leading-tight text-navy md:text-4xl">{hero.heading}</h1>
            <p className="mt-5 text-ink/80 leading-relaxed">{hero.body}</p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            {/* TODO(CLIENT): replace with approved customer-support imagery */}
            <Image
              src="/images/branches/branch-balussery.jpg"
              alt="A financial services staff member assisting a customer at a branch desk, reviewing documents together"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg border border-navy/10 bg-white p-6">
              <h2 className="font-display text-lg text-navy">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{service.description}</p>
              <p className="mt-3 text-xs text-ink/50">{service.docsNote}</p>
              <WhatsappQuoteCta
                serviceName={service.title}
                label="Quick Quote"
                className="mt-4 !px-4 !py-2 text-sm"
              />
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-lg bg-surface-grey p-5 text-sm leading-relaxed text-ink/70">{disclaimer}</p>
      </section>

      <Cta
        heading="Ready to ask about a service?"
        body="Our team in Perambra can walk you through eligibility and next steps."
        ctaLabel="Enquire Now"
        ctaHref="/contact"
      />
    </>
  );
}
