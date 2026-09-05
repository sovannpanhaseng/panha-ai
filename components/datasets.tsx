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

              {/* Dataset glyph */}
              <div
                aria-hidden="true"
                className="absolute right-10 top-20 text-foreground/20 md:right-16 md:top-24"
              >
                <svg
                  viewBox="0 0 96 96"
                  className="h-28 w-28 md:h-40 md:w-40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <ellipse cx="48" cy="22" rx="27" ry="11" />
                  <path d="M21 22v22c0 6 12 11 27 11s27-5 27-11V22" />
                  <path d="M21 44v22c0 6 12 11 27 11s27-5 27-11V44" />
                  <path d="M21 22c0 6 12 11 27 11s27-5 27-11" />
                  <path d="M21 44c0 6 12 11 27 11s27-5 27-11" />
                </svg>
              </div>

              <h2 className="relative max-w-sm font-serif text-5xl leading-[0.9] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Khmer Pile
              </h2>
            </div>

            <div className="flex flex-col justify-between gap-10 p-8 md:p-12 lg:p-16">
              <div>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Khmer web text corpus, built on top of FineWeb-2&apos;s Khmer
                  extension with additional extraction and filtering.
                </p>
              </div>

              <a
                href="https://huggingface.co/datasets/sovannpanhaseng/khmer-pile"
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-sm font-medium text-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground"
              >
                Explore the dataset
                <span
                  aria-hidden="true"
                  className="text-base transition-transform duration-200 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
