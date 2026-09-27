import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata, pageSeo } from "@/config/seo";
import { aboutContent } from "@/config/content";
import { directors } from "@/config/directors";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { DirectorVideo } from "@/components/ui/director-video";
import { CoreValues } from "@/components/ui/core-values";
import { BoardOfDirectors } from "@/components/ui/board-of-directors";

export const metadata: Metadata = buildMetadata(pageSeo.about);

export default function AboutPage() {
  const { hero, video, facts, vision, mission, coreValues, memberFocus, leadership } = aboutContent;

  return (
    <>
      <Breadcrumbs path="/about" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-display text-3xl leading-tight text-navy md:text-4xl">{hero.heading}</h1>
            <p className="mt-5 text-ink/80 leading-relaxed">{hero.body}</p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/branches/branch-perambra.jpg"
              alt={hero.imageAlt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <DirectorVideo heading={video.heading} body={video.body} />

      <section className="bg-surface-grey">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading heading={facts.heading} body={facts.body} as="h2" />
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {facts.items.map((item) => (
              <div key={item.label} className="rounded-lg border border-navy/10 bg-white p-5">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{item.label}</dt>
                <dd className="mt-1.5 text-sm text-ink/80">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-navy">{vision.heading}</h2>
            <p className="mt-3 text-ink/80 leading-relaxed">{vision.body}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-navy">{mission.heading}</h2>
            <p className="mt-3 text-ink/80 leading-relaxed">{mission.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-grey">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <CoreValues heading={coreValues.heading} items={coreValues.items} />

          <h2 className="mt-12 font-display text-2xl text-navy">{memberFocus.heading}</h2>
          <p className="mt-3 text-ink/80 leading-relaxed">{memberFocus.body}</p>
        </div>
      </section>

      <BoardOfDirectors heading={leadership.heading} body={leadership.body} directors={directors} id={leadership.id} />
    </>
  );
}
