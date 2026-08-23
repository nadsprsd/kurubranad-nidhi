import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function Card({ title, description, icon, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-navy/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-150 ${className}`}
    >
      {icon ? <div className="mb-4 text-gold-dark" aria-hidden="true">{icon}</div> : null}
      <h3 className="font-display text-lg text-navy mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-ink/75">{description}</p>
    </div>
  );
}
