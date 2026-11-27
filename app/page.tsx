import Link from "next/link";
import { NewsCard } from "@/components/news-card";
import { NEWS_ITEMS } from "@/lib/news";

const LATEST_NEWS = NEWS_ITEMS.filter((item) => item.href).slice(0, 2);

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

          <Link className="home-hero__cta" href="/advancements">
            Explore our research <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-news" aria-labelledby="home-news-title">
        <div className="home-news__inner">
          <div className="home-news__head">
            <h2 className="home-news__title" id="home-news-title">
              News
            </h2>
            <Link className="home-news__all" href="/news">
              All news <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-news__grid">
            {LATEST_NEWS.map((item) => (
              <NewsCard
                key={item.title}
                {...item}
                titleAs="h3"
                className="news-card--home"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="home-about__inner">
          <h2 className="home-about__title" id="home-about-title">
            About
          </h2>

          <div className="home-about__body">
            <p>
              Panha AI is an independent Cambodian AI research project advancing
              Khmer-first language models, natural language processing, open
              datasets, and language technology.
            </p>

            <p>
              Since 2025, Panha AI has focused on developing high-quality NLP
              datasets alongside increasingly capable language models. Its
              research covers Khmer language understanding, text generation,
              linguistic evaluation, and the data infrastructure needed to
              improve language technologies.
            </p>

            <p>
              Through projects including Bayon, Panha language models, and
              KhmerPile, Panha AI works to expand the availability of open
              research resources for Khmer and contribute to the broader
              development of artificial intelligence in Cambodia.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
