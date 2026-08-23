import { LinkButton } from "./button";

interface CtaProps {
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function Cta({ heading, body, ctaLabel, ctaHref }: CtaProps) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl md:text-3xl text-surface-warm">{heading}</h2>
        {body ? <p className="mt-3 text-surface-warm/80 max-w-xl mx-auto">{body}</p> : null}
        <div className="mt-8">
          <LinkButton href={ctaHref} variant="primary">
            {ctaLabel}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
