import Image from "next/image";
import type { Director } from "@/config/directors";

interface BoardOfDirectorsProps {
  heading: string;
  body: string;
  directors: Director[];
  id?: string;
}

export function BoardOfDirectors({ heading, body, directors, id }: BoardOfDirectorsProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl text-navy relative inline-block">
          {heading}
          <span aria-hidden="true" className="block h-[3px] w-16 bg-gold mt-3 rounded-full" />
        </h2>
        <p className="mt-4 text-ink/70">{body}</p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {directors.map((director) => (
          <div key={director.name} className="text-center">
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-gold/30">
              <Image
                src={director.image}
                alt={`Portrait of ${director.name}, ${director.designation} of Kurumbranad Nidhi Limited`}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 font-display text-base text-navy">{director.name}</h3>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
              {director.designation}
            </p>
            <ul className="mt-3 space-y-1 text-left text-xs text-ink/65">
              {director.bulletPoints.map((point) => (
                <li key={point} className="flex gap-1.5">
                  <span aria-hidden="true">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
