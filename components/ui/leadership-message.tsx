import Image from "next/image";

interface LeadershipMessageProps {
  heading: string;
  quote: string;
  name: string;
  designation: string;
  imageAlt: string;
}

export function LeadershipMessage({ heading, quote, name, designation, imageAlt }: LeadershipMessageProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-lg border border-navy/10 bg-white p-6 sm:p-10 lg:grid-cols-[220px_1fr] lg:items-center">
        <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full border-4 border-gold/30 lg:w-full">
          {/* TODO(CLIENT): replace with an approved photograph of the director/officer quoted */}
          <Image src="/images/about-local-office.jpg" alt={imageAlt} fill sizes="220px" className="object-cover" />
        </div>
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">{heading}</p>
          <blockquote className="mt-4">
            <p className="font-display text-xl leading-relaxed text-navy italic">&ldquo;{quote}&rdquo;</p>
          </blockquote>
          <p className="mt-5 text-sm font-semibold text-navy">{name}</p>
          <p className="text-sm text-ink/60">{designation}</p>
        </div>
      </div>
    </section>
  );
}
