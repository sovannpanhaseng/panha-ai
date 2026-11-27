import { PlaceholderLink } from "@/components/placeholder-link";

export default function Page() {
  return (
    <main id="main">
      <section className="home-hero">
        <div className="home-hero__lava" aria-hidden="true">
          <span className="home-hero__blob home-hero__blob--1" />
          <span className="home-hero__blob home-hero__blob--2" />
        </div>

        <div className="home-hero__content">
          <h1 className="home-hero__title">
            Panha AI advances sovereign Khmer AI.
          </h1>

          <PlaceholderLink className="home-hero__cta">
            Explore our research <span aria-hidden="true">→</span>
          </PlaceholderLink>
        </div>
      </section>
    </main>
  );
}
