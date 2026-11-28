export type ResearchItem = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  href?: string;
  external?: boolean;
};

export const MODEL_ITEMS: ResearchItem[] = [
  {
    title: "Bayon",
    date: "July 2, 2026",
    category: "Model",
    excerpt:
      "A 100-million-parameter Khmer-focused language model with a custom Khmer tokenizer, pretrained on curated Khmer text and evaluated for linguistic fidelity.",
    href: "/models/bayon",
  },
];

export const DATASET_ITEMS: ResearchItem[] = [
  {
    title: "KhmerPile",
    date: "September 14, 2026",
    category: "Dataset",
    excerpt:
      "An open Khmer-language text corpus built from Common Crawl, containing approximately 627,000 deduplicated documents for Khmer NLP research.",
    href: "/news/2026-09-14",
  },
];

export const PUBLICATION_ITEMS: ResearchItem[] = [
  {
    title:
      "Small Model, Native Design: Exploring Linguistic Purity and Reduced Language Bleeding in a 100M Khmer Language Model",
    date: "October 1, 2026",
    category: "AACL-IJCNLP 2026",
    excerpt:
      "Our study of Khmer tokenization, language bleeding, and compact language-model design for Khmer.",
    href: "/news/2026-10-01",
  },
];
