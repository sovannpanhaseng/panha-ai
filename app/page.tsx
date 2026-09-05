import { LavaGlow } from '@/components/lava-glow'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <LavaGlow />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-primary">
          Coming soon
        </p>
        <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Something new is on the way
        </h1>
        <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
          We&apos;re putting the finishing touches on it. Check back shortly.
        </p>
      </div>
    </main>
  )
}
