export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-[var(--color-gray-light)] border-y border-[var(--color-gray-light)]">
      {items.map((f) => (
        <details key={f.q} className="group py-4">
          <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg font-semibold text-[var(--color-navy)] font-[family-name:var(--font-playfair)]">
            {f.q}
            <span className="text-[var(--color-gold-dark)] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
          </summary>
          <p className="mt-3 text-[var(--color-gray-medium)] leading-relaxed font-[family-name:var(--font-dm-sans)]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
