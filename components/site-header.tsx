import { ThemeToggle } from "@/components/theme-toggle";

const NAV = [
  { label: "Research", href: "#research" },
  { label: "Principles", href: "#principles" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-sans text-xl font-bold tracking-tight text-foreground">
            Panha AI
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="border border-foreground px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
