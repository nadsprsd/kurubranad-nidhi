import { Carousel } from "./carousel";

interface TestimonialItem {
  quote: string;
  name: string;
  area: string;
  note?: string;
}

interface TestimonialsProps {
  heading: string;
  body: string;
  items: TestimonialItem[];
}

export function Testimonials({ heading, body, items }: TestimonialsProps) {
  return (
    <section className="bg-surface-grey">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl text-navy">{heading}</h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-[3px] w-16 rounded-full bg-gold" />
          <p className="mt-4 text-sm text-ink/60">{body}</p>
        </div>

        <div className="mt-10">
          <Carousel
            ariaLabel="Member testimonials"
            slides={items.map((item, i) => (
              <div key={i} className="rounded-lg border border-navy/10 bg-white p-8 text-center">
                <p className="font-display text-lg italic leading-relaxed text-navy">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-navy">{item.name}</p>
                <p className="text-xs text-ink/50">{item.area}</p>
                {item.note ? <p className="mt-2 text-[11px] text-ink/35">{item.note}</p> : null}
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
