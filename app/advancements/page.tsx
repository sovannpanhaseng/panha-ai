import type { Metadata } from "next";
import { NewsCard } from "@/components/news-card";

export const metadata: Metadata = {
  title: "Advancements — Panha AI",
  description:
    "Papers, models, and datasets from Panha AI's work on sovereign Khmer AI.",
};

const SECTIONS = [
  {
    id: "papers",
    title: "Papers",
    items: [
      {
        title:
          "Small Model, Native Design: Exploring Linguistic Purity and Reduced Language Bleeding in a 100M Khmer Language Model",
        date: "October 1, 2026",
        category: "Paper",
        excerpt:
          "Our AACL-IJCNLP 2026 study on Khmer tokenization, language bleeding, and a compact Khmer language model.",
        href: "/news/2026-10-01",
      },
    ],
  },
  {
    id: "models",
    title: "Models",
    items: [
      {
        title: "Bayon",
        date: "July 2, 2026",
        category: "Model",
        excerpt:
          "Bayon is a 100-million-parameter Khmer-focused language model built from scratch for Khmer.",
        href: "/news/2026-07-02",
      },
    ],
  },
  {
    id: "datasets",
    title: "Datasets",
    items: [
      {
        title: "KhmerPile",
        date: "September 14, 2026",
        category: "Dataset",
        excerpt:
          "An open Khmer-language text corpus built from Common Crawl, with approximately 627,000 deduplicated documents.",
        href: "/news/2026-09-14",
      },
    ],
  },
];

export default function AdvancementsPage() {
  return (
    <main id="main" className="advancements-page">
      <section className="advancements-hero">
        <div className="advancements-hero__card">
          <div className="home-hero__lava" aria-hidden="true">
            <span className="home-hero__blob home-hero__blob--1" />
            <span className="home-hero__blob home-hero__blob--2" />
          </div>

          <div className="advancements-hero__content">
            <h1 className="advancements-hero__title">Advancements</h1>
            <p className="advancements-hero__lede">
              Papers, models, and datasets advancing sovereign Khmer AI.
            </p>
          </div>
        </div>
      </section>

      <div className="advancements-body">
        {SECTIONS.map((section) => (
          <section
            className="advancement-section"
            id={section.id}
            key={section.id}
            aria-labelledby={`${section.id}-title`}
          >
            <div className="advancement-section__head">
              <h2 className="advancement-section__title" id={`${section.id}-title`}>
                {section.title}
              </h2>
            </div>

            <div className="advancement-section__body">
              {section.items.map((item) => (
                <NewsCard
                  key={item.title}
                  {...item}
                  titleAs="h3"
                  className="news-card--large"
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
