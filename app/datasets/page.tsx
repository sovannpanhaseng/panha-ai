import Link from "next/link";
import type { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { ResearchHero } from "@/components/research-hero";
import { ResearchSection } from "@/components/research-section";
import { DATASET_ITEMS } from "@/lib/research";

export const metadata: Metadata = {
  title: "Datasets — Panha AI",
  description:
    "Open Khmer-language datasets and text corpora from Panha AI, including the KhmerPile corpus for Khmer NLP research.",
};

export default function DatasetsPage() {
  return (
    <main id="main" className="advancements-page">
      <ResearchHero
        title="Datasets"
        lede="Open Khmer-language corpora for training, evaluating, and studying language models."
      />

      <div className="advancements-body">
        <ResearchSection id="released-datasets" title="Released Datasets">
          {DATASET_ITEMS.map((item) => (
            <NewsCard key={item.title} {...item} titleAs="h3" />
          ))}
        </ResearchSection>

        <ResearchSection id="dataset-access" title="Access">
          <div className="article-table research-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Resource</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://huggingface.co/datasets/sovannpanhaseng/khmer-pile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      sovannpanhaseng/khmer-pile
                    </a>
                  </td>
                  <td>Deduplicated corpus with approximately 627K documents.</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huggingface.co/datasets/sovannpanhaseng/khmer-pile-raw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      sovannpanhaseng/khmer-pile-raw
                    </a>
                  </td>
                  <td>
                    Filtered corpus before deduplication with approximately
                    1.28M documents.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://github.com/sovannpanhaseng/khmer-pile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      KhmerPile repository
                    </a>
                  </td>
                  <td>Collection, filtering, and processing code.</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/news/2026-09-14">Release notes</Link>
                  </td>
                  <td>Dataset construction, statistics, and limitations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ResearchSection>
      </div>
    </main>
  );
}
