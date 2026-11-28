import Link from "next/link";
import type { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { ResearchHero } from "@/components/research-hero";
import { ResearchSection } from "@/components/research-section";
import { MODEL_ITEMS } from "@/lib/research";

export const metadata: Metadata = {
  title: "Models — Panha AI",
  description:
    "Khmer-first language models from Panha AI, including Bayon and the Panha model family.",
};

export default function ModelsPage() {
  return (
    <main id="main" className="advancements-page">
      <ResearchHero
        title="Models"
        lede="Khmer-first language models built to explore what native-language design can achieve."
      />

      <div className="advancements-body">
        <ResearchSection id="released-models" title="Released Models">
          {MODEL_ITEMS.map((item) => (
            <NewsCard key={item.title} {...item} titleAs="h3" />
          ))}
        </ResearchSection>

        <ResearchSection id="panha-family" title="The Panha Family">
          <p>
            Panha is a family of Khmer-first language models and related
            language technology. It is the broader line of model research at
            Panha AI, complementing focused studies such as Bayon.
          </p>

          <p>
            The family is part of Panha AI&apos;s ongoing work. Released
            models, training details, and evaluation results will be listed
            here as they become available.
          </p>
        </ResearchSection>

        <ResearchSection id="model-design" title="Model Design">
          <p>
            Panha AI designs models around Khmer rather than treating the
            language as a translation target added to a system built for
            English. That changes decisions at every stage of development.
          </p>

          <ul>
            <li>
              <strong>Khmer-focused tokenization:</strong> A vocabulary built
              from Khmer text reduces fragmentation and the number of tokens
              required to represent the same passage.
            </li>
            <li>
              <strong>Curated Khmer data:</strong> Pretraining and
              instruction-tuning data are filtered for language, script, and
              quality before they reach the model.
            </li>
            <li>
              <strong>Efficient architectures:</strong> Compact models are
              designed to remain trainable and deployable with limited
              computational resources.
            </li>
            <li>
              <strong>Khmer-specific evaluation:</strong> Models are assessed
              for script consistency, task performance, and linguistic
              behavior, not fluency alone.
            </li>
          </ul>

          <p>
            Model development is connected to the rest of Panha AI&apos;s
            research. Read more about the underlying{" "}
            <Link href="/datasets">datasets</Link>, the{" "}
            <Link href="/publications">papers</Link>, or the broader work in{" "}
            <Link href="/advancements">Advancements</Link>.
          </p>
        </ResearchSection>

        <ResearchSection id="model-resources" title="Resources">
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
                      href="https://huggingface.co/attentionlab/bayon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bayon on Hugging Face
                    </a>
                  </td>
                  <td>Model weights and model card.</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/models/bayon">Bayon model card</Link>
                  </td>
                  <td>
                    Architecture, compute requirements, and evaluation summary.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/news/2026-07-02">Bayon release</Link>
                  </td>
                  <td>
                    Full training report, tokenizer results, and evaluation
                    notes.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://github.com/sovannpanhaseng/aaclijcnlp2026"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Research repository
                    </a>
                  </td>
                  <td>Code and resources for the AACL-IJCNLP 2026 study.</td>
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
