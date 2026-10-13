"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface CarouselProps {
  slides: ReactNode[];
  ariaLabel: string;
  /** "light" (default) for use on light backgrounds; "dark" for use on navy/dark sections. */
  theme?: "light" | "dark";
  /** Auto-advance slides every few seconds. Off by default; pauses on mouse hover (desktop only — touch devices have no hover state, so it simply runs continuously there), and never runs if the visitor prefers reduced motion. */
  autoPlay?: boolean;
  /** Milliseconds between auto-advances. */
  autoPlayInterval?: number;
}

export function Carousel({
  slides,
  ariaLabel,
  theme = "light",
  autoPlay = false,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const isDark = theme === "dark";
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  useEffect(() => {
    if (!autoPlay || paused || slides.length <= 1) return;
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, autoPlayInterval, paused, slides.length]);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/*
        onFocus/onBlur pausing was removed here — on mobile, a tap can
        trigger a focus-like state on a child button without a matching
        blur ever firing, which permanently stuck the carousel in a
        paused state. This was the actual cause of "autoplay only works
        on desktop". Keyboard-focusable controls (prev/next, dots) still
        work fine via click/tap regardless.
      */}
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
              className={`flex h-9 w-9 items-center justify-center rounded-full border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                isDark
                  ? "border-surface-warm/30 text-surface-warm hover:border-surface-warm"
                  : "border-navy/20 text-navy hover:border-navy"
              }`}
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
                    i === index ? "bg-gold-dark" : isDark ? "bg-surface-warm/25" : "bg-navy/20"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next"
              className={`flex h-9 w-9 items-center justify-center rounded-full border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                isDark
                  ? "border-surface-warm/30 text-surface-warm hover:border-surface-warm"
                  : "border-navy/20 text-navy hover:border-navy"
              }`}
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
