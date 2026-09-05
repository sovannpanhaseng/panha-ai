export function SiteFooter() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="font-serif text-xl text-foreground">
              Meridian Research
            </span>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              An independent laboratory advancing safe and reliable artificial
              intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a href="#research" className="text-foreground hover:underline">
                  Research
                </a>
              </li>
              <li>
                <a href="#principles" className="text-foreground hover:underline">
                  Principles
                </a>
              </li>
              <li>
                <a href="#careers" className="text-foreground hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:hello@meridian.research"
                  className="text-foreground hover:underline"
                >
                  hello@meridian.research
                </a>
              </li>
              <li className="text-muted-foreground">San Francisco · London</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Meridian Research. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
