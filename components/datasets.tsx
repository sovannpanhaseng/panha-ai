export function Datasets() {
  return (
    <section id="datasets" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl px-6 py-24 md:grid-cols-[0.8fr_2.2fr] md:py-32">
        <div className="col-start-2">
          <div className="mb-8 flex items-center justify-between gap-6">
            <p className="max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Datasets
            </p>
          </div>

          <article className="group relative grid overflow-hidden rounded-2xl border border-foreground/20 bg-card transition-transform duration-300 hover:-translate-y-1 lg:grid-cols-2">
            <div className="relative flex min-h-72 items-end overflow-hidden border-b border-border bg-secondary/40 p-8 md:min-h-[28rem] md:border-b-0 md:border-r md:p-12 lg:p-16">
              <span className="absolute right-8 top-8 rounded-md bg-muted px-2 py-1 font-mono text-xs lowercase tracking-wide text-muted-foreground md:right-12 md:top-12">
                khmer-pile
              </span>
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-foreground/10 md:h-72 md:w-72" />
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-foreground/10 md:h-36 md:w-36" />
              <h2 className="relative max-w-sm font-serif text-5xl leading-[0.9] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Khmer Pile
              </h2>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                Khmer web text corpus, built on top of FineWeb-2&apos;s Khmer
                extension with additional extraction and filtering.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
