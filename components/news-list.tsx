"use client";

import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["All", "Releases", "Changelogs", "General"] as const;

type Category = (typeof CATEGORIES)[number];
type NewsCategory = Exclude<Category, "All">;

type NewsItem = {
  title: string;
  date: string;
  category: NewsCategory;
  excerpt?: string;
  href?: string;
};

const ITEMS: NewsItem[] = [
  {
    title: "Panha AI at AACL-IJCNLP 2026",
    date: "October 1, 2026",
    category: "General",
    excerpt:
      "Panha AI is participating in AACL-IJCNLP 2026 with Bayon, our Khmer-focused language model and research submission.",
    href: "/news/2026-10-01",
  },
  {
    title: "Panha AI introduces Bayon, our first Language Model",
    date: "July 2, 2026",
    category: "Releases",
    excerpt:
      "Introducing Bayon, a 100-million-parameter Khmer-focused language model built to explore native-language specialization from the ground up.",
    href: "/news/2026-07-02",
  },
  {
    title: "Release notes",
    date: "Nov 2026",
    category: "Releases",
    excerpt: "Placeholder release notes for the next Panha AI update.",
  },
  {
    title: "Version history",
    date: "Oct 2026",
    category: "Releases",
    excerpt: "Placeholder release archive and version history.",
  },
  {
    title: "Website changelog",
    date: "Nov 2026",
    category: "Changelogs",
    excerpt: "Placeholder notes on site and navigation changes.",
  },
  {
    title: "Model changelog",
    date: "Oct 2026",
    category: "Changelogs",
    excerpt: "Placeholder notes on model updates and evaluations.",
  },
  {
    title: "General update",
    date: "Nov 2026",
    category: "General",
    excerpt: "Placeholder announcement from the Panha AI team.",
  },
  {
    title: "Field notes",
    date: "Sep 2026",
    category: "General",
    excerpt: "Placeholder notes on research, data, and language.",
  },
];

export function NewsList() {
  const [filter, setFilter] = useState<Category>("All");
  const items =
    filter === "All" ? ITEMS : ITEMS.filter((item) => item.category === filter);

  return (
    <div className="news-layout">
      <aside className="news-filter" aria-label="News categories">
        <span className="news-filter__bar" aria-hidden="true" />
        <ul className="news-filter__list">
          {CATEGORIES.map((category) => {
            const isActive = filter === category;

            return (
              <li key={category}>
                <button
                  type="button"
                  className={`news-filter__button${
                    isActive ? " is-active" : ""
                  }`}
                  aria-pressed={isActive}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="news-feed">
        {items.map((item) => {
          const card = (
            <>
              <div className="news-card__meta">
                <span className="news-card__date">{item.date}</span>
                <span className="news-card__category">{item.category}</span>
              </div>

              <h2 className="news-card__title">{item.title}</h2>
              {item.excerpt ? (
                <p className="news-card__excerpt">{item.excerpt}</p>
              ) : null}
            </>
          );

          return item.href ? (
            <Link
              className="news-card news-card--link"
              href={item.href}
              key={item.title}
            >
              {card}
            </Link>
          ) : (
            <article className="news-card" key={item.title}>
              {card}
            </article>
          );
        })}
      </div>
    </div>
  );
}
