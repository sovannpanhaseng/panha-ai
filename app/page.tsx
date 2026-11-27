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
    </main>
  );
}
