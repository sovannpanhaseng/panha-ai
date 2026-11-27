"use client";

import { useState } from "react";
import { NewsCard } from "@/components/news-card";
import { NEWS_ITEMS } from "@/lib/news";

const CATEGORIES = ["All", "Releases", "Changelogs", "General"] as const;

type Category = (typeof CATEGORIES)[number];

export function NewsList() {
  const [filter, setFilter] = useState<Category>("All");
  const items =
    filter === "All"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === filter);

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
        {items.map((item) => (
          <NewsCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
