import type { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { ResearchHero } from "@/components/research-hero";
import { ResearchSection } from "@/components/research-section";
import {
  DATASET_ITEMS,
  MODEL_ITEMS,
  PUBLICATION_ITEMS,
} from "@/lib/research";

export const metadata: Metadata = {
  title: "Advancements — Panha AI",
  description:
    "Papers, models, and datasets from Panha AI's work on sovereign Khmer AI.",
};

const SECTIONS = [
  { id: "papers", title: "Papers", items: PUBLICATION_ITEMS },
  { id: "models", title: "Models", items: MODEL_ITEMS },
  { id: "datasets", title: "Datasets", items: DATASET_ITEMS },
];

export default function AdvancementsPage() {
  return (
    <main id="main" className="advancements-page">
      <ResearchHero
        title="Advancements"
        lede="Papers, models, and datasets advancing sovereign Khmer AI."
      />

      <div className="advancements-body">
        {SECTIONS.map((section) => (
          <ResearchSection
            id={section.id}
            key={section.id}
            title={section.title}
          >
            {section.items.map((item) => (
              <NewsCard key={item.title} {...item} titleAs="h3" />
            ))}
          </ResearchSection>
        ))}
      </div>
    </main>
  );
}
