import { LogoMark } from "@/components/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <a className="brand" href="#top" aria-label="Panha AI — back to top">
              <LogoMark className="brand__mark" compact />
              <span className="brand__word">Panha AI</span>
            </a>

            <p className="site-footer__tagline">
              Independent AI research and open language resources for Cambodia.
            </p>
          </div>

          <div className="site-footer__cols">
            <div>
              <h4>Explore</h4>
              <ul className="site-footer__links">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#models">Models</a>
                </li>
                <li>
                  <a href="#datasets">Datasets</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul className="site-footer__links">
                <li>
                  <a href="mailto:sovannpanha359.seng@gmail.com">
                    sovannpanha359.seng@gmail.com
                  </a>
                </li>
                <li className="is-muted">Phnom Penh, Cambodia</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {year} Panha AI</p>
          <p>Frontier AI for Cambodia.</p>
        </div>
      </div>
    </footer>
  );
}
