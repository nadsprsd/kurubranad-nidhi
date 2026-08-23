"use client";

import { useState, type ReactNode } from "react";

interface CarouselProps {
  slides: ReactNode[];
  ariaLabel: string;
}

export function Carousel({ slides, ariaLabel }: CarouselProps) {
  const [index, setIndex] = useState(0);

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  return (
    <div role="region" aria-label={ariaLabel} className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full shrink-0 px-1"
              aria-hidden={i !== index}
              {...(i !== index ? { inert: true } : {})}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 ? (
        <>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-gold-dark" : "bg-navy/20"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
