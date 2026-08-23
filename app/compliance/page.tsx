import type { Metadata } from "next";
import { buildMetadata, pageSeo } from "@/config/seo";
import { complianceContent } from "@/config/content";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = buildMetadata(pageSeo.compliance);

const sections = [
  "legalStructure",
  "statutory",
  "kyc",
  "internalControls",
  "valuationCustody",
  "grievance",
  "privacyPolicy",
  "terms",
  "policiesDownloads",
] as const;

export default function CompliancePage() {
  const { hero } = complianceContent;

  return (
    <>
      <Breadcrumbs path="/compliance" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl leading-tight text-navy md:text-4xl">{hero.heading}</h1>
        <p className="mt-5 text-ink/80 leading-relaxed">{hero.body}</p>
        <p className="mt-4 text-sm font-medium uppercase tracking-wide text-gold-dark">
          All information on this page is subject to verification and applicable law.
        </p>
      </section>

      <section className="bg-surface-grey">
        <div className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
          {sections.map((key) => {
            const section = complianceContent[key];
            const id = "id" in section ? section.id : undefined;
            return (
              <div key={key} id={id} className="scroll-mt-24">
                <h2 className="font-display text-2xl text-navy">{section.heading}</h2>
                <p className="mt-3 text-ink/80 leading-relaxed">{section.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
