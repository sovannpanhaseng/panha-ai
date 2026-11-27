import type { Metadata } from "next";
import { PlaceholderLink } from "@/components/placeholder-link";

export const metadata: Metadata = {
  title: "News — Panha AI",
  description:
    "Releases, changelogs, and general updates from Panha AI.",
};

const GROUPS = [
  {
    id: "releases",
    label: "Releases",
    description: "Model and product release notes.",
    items: [
      { title: "Release notes — placeholder", meta: "Coming soon" },
      { title: "Version history — placeholder", meta: "Coming soon" },
    ],
  },
  {
    id: "changelogs",
    label: "Changelogs",
    description: "Ongoing changes to the site and models.",
    items: [
      { title: "Website changelog — placeholder", meta: "Coming soon" },
      { title: "Model changelog — placeholder", meta: "Coming soon" },
    ],
  },
  {
    id: "general",
    label: "General",
    description: "Announcements and general updates.",
    items: [
      { title: "General update — placeholder", meta: "Coming soon" },
      { title: "Announcement — placeholder", meta: "Coming soon" },
    ],
  },
];

export default function NewsPage() {
  return (
    <main id="main" className="news-page">
      <div className="news-page__inner">
        <header className="news-head">
          <h1 className="news-title">News</h1>

          <p className="news-lede">
            Releases, changelogs, and general updates from Panha AI.
          </p>

          <nav className="news-categories" aria-label="News categories">
            {GROUPS.map((group) => (
              <a key={group.id} href={`#${group.id}`}>
                {group.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="news-groups">
          {GROUPS.map((group) => (
            <section key={group.id} id={group.id} className="news-group">
              <div className="news-group__head">
                <h2>{group.label}</h2>
                <p>{group.description}</p>
              </div>

              <ul className="news-list">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <PlaceholderLink className="news-item">
                      <span className="news-item__title">{item.title}</span>
                      <span className="news-item__meta">{item.meta}</span>
                    </PlaceholderLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
