interface CoreValuesProps {
  heading: string;
  items: string[];
}

export function CoreValues({ heading, items }: CoreValuesProps) {
  return (
    <div>
      <h2 className="font-display text-2xl text-navy">{heading}</h2>
      <ul className="mt-5 flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-gold/40 bg-surface-grey px-5 py-2 text-sm font-medium text-navy"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
