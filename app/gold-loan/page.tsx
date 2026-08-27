import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata, pageSeo } from "@/config/seo";
import { goldLoanContent } from "@/config/content";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { Faq } from "@/components/ui/faq";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { Cta } from "@/components/ui/cta";
import { WhatsappQuoteCta } from "@/components/ui/whatsapp-quote-cta";

export const metadata: Metadata = buildMetadata(pageSeo.goldLoan);

export default function GoldLoanPage() {
  const {
    hero,
    intro,
    benefits,
    process,
    documents,
    valuationCustody,
    repayment,
    charges,
    faqs,
  } = goldLoanContent;

  return (
    <>
      <Breadcrumbs path="/gold-loan" />

      <section className="bg-navy">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="font-display text-3xl leading-tight text-surface-warm md:text-4xl">{hero.heading}</h1>
            <p className="mt-5 max-w-lg text-surface-warm/80 leading-relaxed">{hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/contact">Enquire Now</LinkButton>
              <WhatsappQuoteCta serviceName="Gold Loan" />
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            {/* TODO(CLIENT): replace with approved valuation/custody photography */}
            <Image
              src="/images/branches/branch-keezhur.jpg"
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading heading={intro.heading} body={intro.body} as="h2" />
      </section>

      <section className="bg-surface-grey">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading heading={benefits.heading} body={benefits.body} as="h2" />
          <ul className="mt-8 space-y-3">
            {benefits.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/80">
                <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading heading={process.heading} as="h2" />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-surface-grey">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading heading={documents.heading} body={documents.body} as="h2" />
          <ul className="mt-6 list-disc space-y-2 pl-5 text-ink/80">
            {documents.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-display text-2xl text-navy">{valuationCustody.heading}</h2>
          <p className="mt-3 text-ink/80 leading-relaxed">{valuationCustody.body}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-navy">{repayment.heading}</h2>
          <p className="mt-3 text-ink/80 leading-relaxed">{repayment.body}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-navy">{charges.heading}</h2>
          <p className="mt-3 text-ink/80 leading-relaxed">{charges.body}</p>
        </div>
      </section>

      <section className="bg-surface-grey">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading heading="Frequently asked questions" as="h2" />
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
      <FaqJsonLd items={faqs} />

      <Cta
        heading="Ready to enquire about your gold loan?"
        body="Reach out and our Perambra team will walk you through eligibility, documents, and next steps."
        ctaLabel="Enquire Now"
        ctaHref="/contact"
      />
    </>
  );
}
