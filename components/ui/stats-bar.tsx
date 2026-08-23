interface StatItem {
  label: string;
  value: string;
}

interface StatsBarProps {
  heading: string;
  items: StatItem[];
}

export function StatsBar({ heading, items }: StatsBarProps) {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="sr-only">{heading}</h2>
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <dt className="text-xs font-body uppercase tracking-wide text-gold-light/80">{item.label}</dt>
              <dd className="mt-2 font-display text-lg font-semibold text-surface-warm sm:text-xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
