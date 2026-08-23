interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark mb-3">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-3xl md:text-4xl leading-tight text-navy relative inline-block">
        {heading}
        <span
          aria-hidden="true"
          className="block h-[3px] w-16 bg-gold mt-3 rounded-full"
        />
      </Heading>
      {body ? <p className="mt-4 text-base leading-relaxed text-ink/80">{body}</p> : null}
    </div>
  );
}
