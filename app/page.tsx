import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata, pageSeo } from "@/config/seo";
import { homeContent } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { Cta } from "@/components/ui/cta";
import { Faq } from "@/components/ui/faq";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { WhatsappQuoteCta } from "@/components/ui/whatsapp-quote-cta";
import { StatsBar } from "@/components/ui/stats-bar";
import { LeadershipMessage } from "@/components/ui/leadership-message";
import { Testimonials } from "@/components/ui/testimonials";

export const metadata: Metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  const { hero, stats, leadership, testimonials, services, whyUs, process, trust, serviceArea, faqPreview, contactCta } = homeContent;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-surface-warm md:text-5xl">
              {hero.heading}
            </h1>
            <p className="mt-5 max-w-lg text-surface-warm/80 leading-relaxed">{hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href={hero.primaryCta.href}>{hero.primaryCta.label}</LinkButton>
              <LinkButton href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </LinkButton>
              <WhatsappQuoteCta />
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            {/* TODO(CLIENT): replace stock image with approved branch/customer photography */}
            <Image
              src="/images/hero-gold-loan-valuation.jpg"
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <StatsBar heading={stats.heading} items={stats.items} />

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading heading={services.heading} body={services.body} align="center" as="h2" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item) => (
            <Link key={item.title} href={item.href} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-lg">
              <Card title={item.title} description={item.description} />
            </Link>
          ))}
        </div>
      </section>

      {/* Why Kurubranad */}
      <section className="bg-surface-grey">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading heading={whyUs.heading} body={whyUs.body} as="h2" />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {whyUs.points.map((point) => (
              <div key={point.title}>
                <h3 className="font-display text-lg text-navy">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadershipMessage
        heading={leadership.heading}
        quote={leadership.quote}
        name={leadership.name}
        designation={leadership.designation}
        imageAlt={leadership.imageAlt}
      />

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading heading={process.heading} as="h2" />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <li key={step.title} className="relative pl-12">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy font-display text-sm text-gold-light"
              >
                {index + 1}
              </span>
              <h3 className="font-display text-base text-navy">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <Testimonials heading={testimonials.heading} body={testimonials.body} items={testimonials.items} />

      {/* Trust and compliance */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <SectionHeading heading={trust.heading} body={trust.body} align="center" as="h2" />
          <div className="mt-6">
            <LinkButton href={trust.cta.href} variant="ghost">
              {trust.cta.label}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading heading={serviceArea.heading} body={serviceArea.body} as="h2" />
        <ul className="mt-8 flex flex-wrap gap-3">
          {serviceArea.areas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm text-ink/80"
            >
              {area}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ preview */}
      <section className="bg-surface-grey">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading heading={faqPreview.heading} as="h2" />
          <div className="mt-8">
            <Faq items={faqPreview.items} />
          </div>
        </div>
      </section>
      <FaqJsonLd items={faqPreview.items} />

      <Cta heading={contactCta.heading} body={contactCta.body} ctaLabel={contactCta.cta.label} ctaHref={contactCta.cta.href} />
    </>
  );
}
