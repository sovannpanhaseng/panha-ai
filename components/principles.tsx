const PRINCIPLES = [
  {
    title: 'Rigor over hype',
    body: 'We publish reproducible results and measure what matters. Claims are earned through evidence, not narrative.',
  },
  {
    title: 'Safety is not optional',
    body: 'Capability and safety research advance together. We will not ship systems we cannot reason about.',
  },
  {
    title: 'Open by default',
    body: 'Wherever responsible, we share our methods, benchmarks, and findings with the broader research community.',
  },
]

export function Principles() {
  return (
    <section id="principles" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Principles
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance text-foreground md:text-5xl">
              How we work
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our commitments guide every project, from early theory to
              deployed systems.
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {PRINCIPLES.map((item) => (
              <li key={item.title} className="py-8 first:pt-0 last:pb-0">
                <h3 className="font-serif text-2xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
