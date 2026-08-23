import type { Metadata } from "next";
import { buildMetadata, pageSeo } from "@/config/seo";
import { corporateProfileContent } from "@/config/content";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = buildMetadata(pageSeo.corporateProfile);

export default function CorporateProfilePage() {
  const { hero, disclaimer, overview, structure, futurePlans, downloadPlaceholder } = corporateProfileContent;

  return (
    <>
      <Breadcrumbs path="/corporate-profile" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl leading-tight text-navy md:text-4xl">{hero.heading}</h1>
        <p className="mt-5 text-ink/80 leading-relaxed">{hero.body}</p>

        <p className="mt-8 rounded-lg border border-gold/30 bg-surface-grey p-5 text-sm leading-relaxed text-ink/75">
          {disclaimer}
        </p>
      </section>

      <section className="bg-surface-grey">
        <div className="mx-auto max-w-3xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-2xl text-navy">{overview.heading}</h2>
            <p className="mt-3 text-ink/80 leading-relaxed">{overview.body}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-navy">{structure.heading}</h2>
            <p className="mt-3 text-ink/80 leading-relaxed">{structure.body}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-navy">{futurePlans.heading}</h2>
            <p className="mt-3 text-ink/80 leading-relaxed">{futurePlans.body}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-gold-dark">Indicative only — not a commitment</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl text-navy">{downloadPlaceholder.heading}</h2>
        <p className="mt-3 text-ink/80 leading-relaxed">{downloadPlaceholder.body}</p>
        {!downloadPlaceholder.available ? (
          <p className="mt-3 text-sm text-ink/50">TODO(CLIENT): Supply final approved PDF to enable this download.</p>
        ) : null}
      </section>
    </>
  );
}
