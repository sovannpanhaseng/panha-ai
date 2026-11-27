import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { PlaceholderLink } from "@/components/placeholder-link";

const ABOUT_LINKS = ["Objectives", "The Panha Charter"];
const RESEARCH_LINKS = ["Papers", "Models", "Datasets", "Chat"];
const NEWS_LINKS = [
  { label: "News", href: "/news" },
  { label: "Releases", href: "/news#releases" },
  { label: "Changelogs", href: "/news#changelogs" },
  { label: "General", href: "/news#general" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link className="brand" href="/" aria-label="Panha AI — home">
              <LogoMark className="brand__mark" compact />
              <span className="brand__word">Panha AI</span>
            </Link>

            <p className="site-footer__tagline">
              Independent AI research and open language resources for Cambodia.
            </p>

            <a
              className="site-footer__email"
              href="mailto:sovannpanha359.seng@gmail.com"
            >
              sovannpanha359.seng@gmail.com
            </a>
          </div>

          <nav className="site-footer__nav" aria-label="Footer">
            <div className="site-footer__group">
              <h2 className="site-footer__heading">About</h2>
              <ul className="site-footer__links">
                {ABOUT_LINKS.map((item) => (
                  <li key={item}>
                    <PlaceholderLink className="site-footer__link">
                      {item}
                    </PlaceholderLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__group">
              <h2 className="site-footer__heading">Research</h2>
              <ul className="site-footer__links">
                {RESEARCH_LINKS.map((item) => (
                  <li key={item}>
                    <PlaceholderLink className="site-footer__link">
                      {item}
                    </PlaceholderLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__group">
              <h2 className="site-footer__heading">News</h2>
              <ul className="site-footer__links">
                {NEWS_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link className="site-footer__link" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>© {year} Panha AI</p>
          <p>Phnom Penh, Cambodia</p>
        </div>
      </div>
    </footer>
  );
}
