const STATS = [
  { value: '2016', label: 'Founded' },
  { value: '80+', label: 'Researchers' },
  { value: '140', label: 'Publications' },
  { value: '9', label: 'Labs worldwide' },
]

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Independent Applied AI Laboratory
        </p>
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-balance text-foreground md:text-7xl">
          Building artificial intelligence that is safe, reliable, and useful.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Meridian Research is an independent laboratory studying the
          foundations of modern machine intelligence. We conduct rigorous,
          long-horizon research and translate it into systems the world can
          depend on.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#research"
            className="border border-foreground bg-foreground px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore our research
          </a>
          <a
            href="#about"
            className="border border-border px-6 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            About the lab
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-8">
              <dt className="font-serif text-4xl text-foreground">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
