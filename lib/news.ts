export type NewsCategory = "Releases" | "Changelogs" | "General";

export type NewsItem = {
  title: string;
  date: string;
  category: NewsCategory;
  excerpt?: string;
  href?: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    title: "Panha AI at AACL-IJCNLP 2026",
    date: "October 1, 2026",
    category: "General",
    excerpt:
      "Panha AI is participating in AACL-IJCNLP 2026 with Bayon, our Khmer-focused language model and research submission.",
    href: "/news/2026-10-01",
  },
  {
    title: "Introducing KhmerPile: An Open Web-Scale Text Corpus for Khmer",
    date: "September 14, 2026",
    category: "Releases",
    excerpt:
      "KhmerPile is an open Khmer-language text corpus built from Common Crawl, with approximately 627,000 deduplicated documents for Khmer NLP research.",
    href: "/news/2026-09-14",
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
