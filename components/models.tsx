export function Models() {
  return (
    <section id="models">
      <div className="mx-auto grid max-w-6xl px-6 py-24 md:grid-cols-[0.8fr_2.2fr] md:py-32">
        <div className="col-start-2">
          <div className="mb-8 flex items-center justify-between gap-6">
            <p className="max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Models
            </p>
          </div>

          <article className="group relative grid overflow-hidden rounded-2xl border border-foreground/20 bg-card transition-transform duration-300 hover:-translate-y-1 lg:grid-cols-2">
            <div className="relative flex min-h-72 items-end overflow-hidden border-b border-border bg-secondary/40 p-8 md:min-h-[28rem] md:border-b-0 md:border-r md:p-12 lg:p-16">
              <span className="absolute right-8 top-8 rounded-md bg-muted px-2 py-1 font-mono text-xs lowercase tracking-wide text-muted-foreground md:right-12 md:top-12">
                bayon
              </span>
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-foreground/10 md:h-72 md:w-72" />
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-foreground/10 md:h-36 md:w-36" />
              <h2 className="relative font-serif text-6xl leading-[0.9] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                Bayon
                <span className="mt-4 block text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  (បាយ័ន)
                </span>
              </h2>
            </div>

            <div className="flex flex-col justify-between gap-10 p-8 md:p-12 lg:p-16">
              <div>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Bayon is the first native, from-scratch decoder-only
                  generative Khmer language model. Unlike many existing models
                  that are simply fine-tuned versions of Western or multilingual
                  architectures, this model was built and pretrained entirely
                  from scratch by Cambodians, for Cambodia.
                </p>
              </div>

              <a
                href="https://huggingface.co/attentionlab/bayon"
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-sm font-medium text-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground"
              >
                Explore the model
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
