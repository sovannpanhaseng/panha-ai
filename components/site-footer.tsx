export function SiteFooter() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="font-sans text-xl font-bold text-foreground">
              Panha AI
            </span>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              Panha AI is an independent project committed to advancing safe,
              reliable, and useful artificial intelligence for the people of
              Cambodia.
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
                <a href="#model" className="text-foreground hover:underline">
                  Models
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
                  href="mailto:sovannpanha359.seng@gmail.com"
                  className="text-foreground hover:underline"
                >
                  sovannpanha359.seng@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">Phnom Penh</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Panha AI</p>
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
  );
}
