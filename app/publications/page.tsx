import Link from "next/link";
import type { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { ResearchHero } from "@/components/research-hero";
import { ResearchSection } from "@/components/research-section";
import { PUBLICATION_ITEMS } from "@/lib/research";

export const metadata: Metadata = {
  title: "Papers — Panha AI",
  description:
    "Research papers and publications from Panha AI on Khmer language models, datasets, tokenization, and evaluation.",
};

export default function PublicationsPage() {
  return (
    <main id="main" className="advancements-page">
      <ResearchHero
        title="Papers"
        lede="Research papers and technical work on Khmer language models, datasets, and evaluation."
      />

      <div className="advancements-body">
        <ResearchSection id="papers" title="Papers">
          {PUBLICATION_ITEMS.map((item) => (
            <NewsCard key={item.title} {...item} titleAs="h3" />
          ))}

          <p>
            Panha AI&apos;s papers document the technical decisions behind its
            language models and data resources. They cover tokenization,
            training, linguistic evaluation, and the limitations of current
            methods for Khmer.
          </p>
        </ResearchSection>

        <ResearchSection id="research-areas" title="Research Areas">
          <p>
            The publications program is organized around the problems that
            make Khmer language technology difficult to build and assess.
          </p>

          <ul>
            <li>
              <strong>Khmer tokenization and representation:</strong> Reducing
              fragmentation, token cost, and inefficiency in language-model
              input.
            </li>
            <li>
              <strong>Language bleeding and script fidelity:</strong> Studying
              unwanted cross-lingual output and measuring consistency in
              generated Khmer.
            </li>
            <li>
              <strong>Compact and efficient models:</strong> Exploring how far
              Khmer-first design can go under limited computational resources.
            </li>
            <li>
              <strong>Khmer datasets and data curation:</strong> Building open
              corpora, documenting their limitations, and improving their
              usefulness for research.
            </li>
            <li>
              <strong>Evaluation for low-resource languages:</strong>{" "}
              Developing benchmarks and metrics that reflect real Khmer use
              rather than translating evaluation methods from English.
            </li>
          </ul>

          <p>
            These areas connect directly to the{" "}
            <Link href="/models">models</Link> and{" "}
            <Link href="/datasets">datasets</Link> released by Panha AI.
          </p>
        </ResearchSection>

        <ResearchSection id="research-artifacts" title="Research Artifacts">
          <div className="article-table research-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Artifact</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/news/2026-10-01">
                      AACL-IJCNLP 2026 paper
                    </Link>
                  </td>
                  <td>
                    Release announcement for the paper on Khmer linguistic
                    purity and reduced language bleeding.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://github.com/sovannpanhaseng/aaclijcnlp2026"
                      target="_blank"
                      rel="noreferrer"
                    >
                      AACL-IJCNLP 2026 repository
                    </a>
                  </td>
                  <td>Code and research resources.</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huggingface.co/attentionlab/bayon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bayon model
                    </a>
                  </td>
                  <td>The Khmer-focused model studied in the paper.</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/datasets">KhmerPile</Link>
                  </td>
                  <td>Open Khmer text data for language-model research.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ResearchSection>
      </div>
    </main>
  );
}
