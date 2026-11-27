import type { Metadata } from "next";
import { NewsList } from "@/components/news-list";

export const metadata: Metadata = {
  title: "News — Panha AI",
  description:
    "Releases, changelogs, and general updates from Panha AI.",
};

export default function NewsPage() {
  return (
    <main id="main" className="news-page">
      <div className="news-page__inner">
        <h1 className="news-title">News</h1>
        <NewsList />
      </div>
    </main>
  );
}
