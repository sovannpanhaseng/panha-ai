const AREAS = [
  {
    index: '01',
    title: 'Alignment & Safety',
    body: 'Ensuring advanced systems reliably pursue the objectives their operators intend, and behave predictably under distribution shift.',
  },
  {
    index: '02',
    title: 'Foundation Models',
    body: 'Training and evaluating large-scale models, with a focus on data quality, sample efficiency, and reproducible measurement.',
  },
  {
    index: '03',
    title: 'Interpretability',
    body: 'Developing the tools and theory needed to understand the internal mechanisms of neural networks at scale.',
  },
  {
    index: '04',
    title: 'Applied Systems',
    body: 'Deploying research into production-grade infrastructure for scientific, industrial, and public-sector partners.',
  },
]

export function Research() {
  return (
    <section id="research" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Research
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Four areas of long-horizon inquiry
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {AREAS.map((area) => (
            <article key={area.index} className="bg-card p-8 md:p-10">
              <span className="font-serif text-sm text-muted-foreground">
                {area.index}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-foreground">
                {area.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {area.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
