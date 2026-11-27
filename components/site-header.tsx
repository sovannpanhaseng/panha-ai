import { LogoMark } from "@/components/logo";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Models", href: "#models" },
  { label: "Datasets", href: "#datasets" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Panha AI — back to top">
          <LogoMark className="brand__mark" compact />
          <span className="brand__word">Panha AI</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            className="button-contact"
            href="mailto:sovannpanha359.seng@gmail.com"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
