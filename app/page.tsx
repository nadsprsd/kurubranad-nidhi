import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pageSeo } from "@/config/seo";
import { homeContent } from "@/config/content";
import { directors } from "@/config/directors";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { Cta } from "@/components/ui/cta";
import { Faq } from "@/components/ui/faq";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { StatsBar } from "@/components/ui/stats-bar";
import { TeamTeaser } from "@/components/ui/team-teaser";
import { BranchesPreview } from "@/components/ui/branches-preview";
import { Testimonials } from "@/components/ui/testimonials";
import { branches } from "@/config/branches";

export const metadata: Metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  const { hero, stats, team, testimonials, services, whyUs, process, trust, serviceArea, faqPreview, contactCta } = homeContent;

  return (
    <>
      <HeroCarousel title={hero.title} primaryCta={hero.primaryCta} secondaryCta={hero.secondaryCta} />

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

      {/* Why Kurumbranad */}
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

      <TeamTeaser heading={team.heading} body={team.body} directors={directors} cta={team.cta} />

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

      {/* Branches preview */}
      <BranchesPreview heading={serviceArea.heading} body={serviceArea.body} branches={branches} />

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
