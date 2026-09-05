export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden">
      <div className="sky-bg absolute inset-0" aria-hidden="true">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />
        <div className="cloud cloud-5" />
      </div>

      <div className="relative z-10 px-6">
        <h1 className="max-w-4xl text-balance text-center font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Frontier Generative AI for Cambodia.
        </h1>
      </div>
    </section>
  )
}
