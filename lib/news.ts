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
];
