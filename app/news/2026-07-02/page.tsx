import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panha AI introduces Bayon, our first Language Model — Panha AI",
};

export default function BayonReleasePage() {
  return (
    <main id="main" className="article-page">
      <div className="article-page__inner">
        <article>
          <header className="article-head">
            <div className="article-meta">
              <time dateTime="2026-07-02">July 2, 2026</time>
              <span>Releases</span>
            </div>

            <h1 className="article-title">
              Panha AI introduces Bayon, our first Language Model
            </h1>
          </header>

          <p className="article-back">
            <Link href="/news">Back to news</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
