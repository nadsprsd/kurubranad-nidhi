import Image from "next/image";
import { LinkButton } from "./button";
import { WhatsappQuoteCta } from "./whatsapp-quote-cta";
import { Carousel } from "./carousel";

interface HeroCarouselProps {
  title: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const slides = [
  { src: "/images/promotions/fd-promo-1.jpg", alt: "Kurumbranad Nidhi Limited fixed deposit offer, rate of interest up to 12.5 percent" },
  { src: "/images/promotions/gold-loan-promo-2.jpg", alt: "Kurumbranad Gold Loan Dhamakka offer — lower interest, greater value" },
];

export function HeroCarousel({ title, primaryCta, secondaryCta }: HeroCarouselProps) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-2xl leading-tight text-surface-warm sm:text-3xl md:text-4xl">
          {title}
        </h1>

        <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-lg shadow-2xl">
          <Carousel
            ariaLabel="Current offers"
            theme="dark"
            autoPlay
            autoPlayInterval={5000}
            slides={slides.map((slide) => (
              // Fixed height rather than a fixed aspect ratio, since the
              // slides are supplied print banners that don't all share the
              // same ratio — object-contain + a set height keeps every
              // slide readable without cropping or stretching any of them.
              <div key={slide.src} className="relative h-56 w-full sm:h-72">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 672px, 100vw"
                  className="object-contain bg-white"
                />
              </div>
            ))}
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <LinkButton href={primaryCta.href}>{primaryCta.label}</LinkButton>
          <LinkButton href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </LinkButton>
          <WhatsappQuoteCta />
        </div>
      </div>
    </section>
  );
}
