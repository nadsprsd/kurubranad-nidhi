import Image from "next/image";
import Link from "next/link";
import type { Director } from "@/config/directors";

interface TeamTeaserProps {
  heading: string;
  body: string;
  directors: Director[];
  cta: { label: string; href: string };
}

export function TeamTeaser({ heading, body, directors, cta }: TeamTeaserProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-navy/10 bg-white p-6 sm:p-10">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex -space-x-4">
            {directors.map((director) => (
              <div
                key={director.name}
                className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-sm sm:h-20 sm:w-20"
              >
                <Image
                  src={director.image}
                  alt={`Portrait of ${director.name}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left sm:flex-1 sm:px-8">
            <h2 className="font-display text-xl text-navy">{heading}</h2>
            <p className="mt-2 text-sm text-ink/70">{body}</p>
          </div>
          <Link
            href={cta.href}
            className="shrink-0 rounded border border-navy/30 px-5 py-2.5 text-sm font-medium text-navy hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
