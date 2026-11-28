import Link from "next/link";
import type { Metadata } from "next";
import {
  InstructionTuningChart,
  LanguageBleedChart,
  TaskEvaluationChart,
  TokenizerChart,
} from "@/components/bayon-charts";

export const metadata: Metadata = {
  title: "Bayon Model Card — Panha AI",
  description:
    "Model card for Bayon, a 100-million-parameter Khmer-focused language model from Panha AI, with architecture, compute requirements, and evaluation results.",
};

export default function BayonModelCardPage() {
  return (
    <main id="main" className="article-page">
      <div className="article-page__inner">
        <article>
          <header className="article-head">
            <div className="article-meta">
              <span>Model card</span>
              <span>100M parameters</span>
              <span>Khmer</span>
            </div>

            <h1 className="article-title">Bayon</h1>
            <p className="model-card__script" lang="km">
              បាយ័ន
            </p>
          </header>

          <div className="article-body">
            <p>
              Bayon is a 100-million-parameter Khmer-focused language model
              developed by Panha AI. It was built to explore how far
              native-language specialization can go with a compact model,
              limited compute, and a tokenizer designed around Khmer.
            </p>

            <p>
              This model card summarizes the released model. The{" "}
              <Link href="/news/2026-07-02">Bayon release article</Link>{" "}
              contains the full training report, experimental notes, and
              detailed evaluation discussion.
            </p>

            <h2>Model Details</h2>

            <div className="article-table">
              <table>
                <tbody>
                  <tr>
                    <td>Developer</td>
                    <td>Panha AI</td>
                  </tr>
                  <tr>
                    <td>Release date</td>
                    <td>July 2, 2026</td>
                  </tr>
                  <tr>
                    <td>Model type</td>
                    <td>Decoder-only Transformer language model</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>Khmer</td>
                  </tr>
                  <tr>
                    <td>Parameters</td>
                    <td>Approximately 100 million</td>
                  </tr>
                  <tr>
                    <td>Model ID</td>
                    <td>
                      <a
                        href="https://huggingface.co/attentionlab/bayon"
                        target="_blank"
                        rel="noreferrer"
                      >
                        attentionlab/bayon
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Architecture</h2>

            <p>
              Bayon uses a Gemma-inspired architecture with grouped-query
              attention. The design prioritizes a small memory footprint and
              practical training on limited hardware.
            </p>

            <div className="article-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Component</th>
                    <th scope="col">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Layers</td>
                    <td>28 transformer layers</td>
                  </tr>
                  <tr>
                    <td>Hidden dimension</td>
                    <td>512</td>
                  </tr>
                  <tr>
                    <td>Attention</td>
                    <td>
                      Grouped-query attention with 8 query heads and 2 key-value
                      heads
                    </td>
                  </tr>
                  <tr>
                    <td>Tokenizer</td>
                    <td>
                      5,000-token Khmer-focused BPE vocabulary with byte
                      fallback
                    </td>
                  </tr>
                  <tr>
                    <td>Pretraining data</td>
                    <td>
                      Approximately 1.361 billion tokens from a filtered Khmer
                      corpus derived from FineWeb-2
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The tokenizer was trained on approximately 2.42 million documents
              and 5.12 billion characters, of which 94.69% were Khmer
              characters. Its 5,000-token vocabulary and byte fallback preserve
              coverage for characters outside the learned vocabulary.
            </p>

            <h2>Compute Requirements</h2>

            <p>
              Bayon was trained with limited hardware. Pretraining ran primarily
              on a mobile NVIDIA RTX 4050 with 6GB of VRAM, followed by a short
              continuation run on an H100.
            </p>

            <div className="article-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Stage</th>
                    <th scope="col">Hardware</th>
                    <th scope="col">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Primary pretraining</td>
                    <td>NVIDIA RTX 4050, 6GB VRAM</td>
                    <td>96 hours</td>
                  </tr>
                  <tr>
                    <td>Pretraining continuation</td>
                    <td>NVIDIA H100</td>
                    <td>3 hours</td>
                  </tr>
                  <tr>
                    <td>Instruction tuning</td>
                    <td>NVIDIA RTX 4050, 6GB VRAM</td>
                    <td>2.5 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Pretraining was intentionally stopped at step 18,000 rather than
              the planned 50,000 steps, reaching a validation loss of 2.54 and
              a perplexity of 12.7. Instruction tuning used LoRA and 18,000
              Khmer instruction-response pairs.
            </p>

            <p>
              Inference requirements depend on runtime, precision, and context
              length. At 100 million parameters, the model weights occupy
              roughly 0.2 GB at 16-bit precision, before runtime and KV-cache
              overhead. Bayon was designed with edge deployment in mind and
              targets environments with limited GPU memory. See the model
              repository for implementation details and current usage terms.
            </p>

            <h2>Evaluation Results</h2>

            <p>
              The results below are from Panha AI&apos;s release evaluation. They
              are preliminary and specific to the reported benchmarks.
            </p>

            <p>
              <strong>Tokenization efficiency.</strong> On the tokenizer
              development corpus, Bayon produces approximately 1.389 billion
              tokens, 4.33&times; fewer than Qwen2.5 and 2.20&times; fewer than
              o200k_base.
            </p>

            <TokenizerChart />

            <p>
              These measurements are based on the tokenizer development corpus
              rather than a held-out evaluation set. On three representative
              Khmer passages, Bayon required between 1.65&times; and 4.49&times;
              fewer tokens than the comparison tokenizers.
            </p>

            <p>
              <strong>Language consistency.</strong> The Language Bleed Ratio
              (LBR) measures the share of generated tokens containing
              characters outside Khmer Unicode ranges. Bayon achieved an LBR of
              0.06% after instruction tuning: 13 non-Khmer tokens among 21,031
              generated tokens across three evaluation passes.
            </p>

            <LanguageBleedChart />

            <p>
              An important control experiment evaluated Bayon&apos;s pretrained
              checkpoint before instruction tuning. Using the same tokenizer and
              evaluation protocol, its LBR was 80.59%.
            </p>

            <InstructionTuningChart />

            <p>
              LBR measures script consistency, not grammatical quality,
              factual accuracy, or naturalness.
            </p>

            <p>
              <strong>Khmer question answering.</strong> On a 201-question Khmer
              historical and regional QA benchmark, Bayon answered 15 questions
              correctly. Questions had to be answered correctly in at least two
              of three independent passes.
            </p>

            <TaskEvaluationChart />

            <p>
              The benchmark is limited in size and scope, and the evaluation
              protocols for comparison models are not fully symmetric. The
              results suggest improved localized task behavior after
              instruction tuning, not broad Khmer factual competence. Detailed
              evaluation notes are available in the{" "}
              <Link href="/news/2026-07-02">release article</Link>.
            </p>

            <h2>Intended Use</h2>

            <p>
              Bayon is intended for research and experimentation in Khmer
              language modeling, tokenization, script fidelity, and low-resource
              training. It can also be used for experimental Khmer text
              generation and evaluation.
            </p>

            <p>
              It is not intended for high-stakes decisions, factual advice
              without human verification, or production deployment without
              additional safety and quality evaluation.
            </p>

            <h2>Limitations</h2>

            <ul>
              <li>
                Bayon&apos;s 100M-parameter scale limits its world knowledge,
                reasoning, and factual reliability compared with larger models.
              </li>
              <li>
                Evaluation is limited to a small set of benchmarks and does not
                establish broad Khmer language competence.
              </li>
              <li>
                Pretraining data is web-derived and instruction data was
                generated with teacher models, so both may contain noise or
                biases.
              </li>
              <li>
                LBR measures script consistency only; it is not a general
                measure of language quality.
              </li>
              <li>
                Safety, hallucination, and long-form factual behavior have not
                been comprehensively evaluated.
              </li>
            </ul>

            <h2>Access</h2>

            <ul>
              <li>
                <a
                  href="https://huggingface.co/attentionlab/bayon"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bayon on Hugging Face
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sovannpanhaseng/aaclijcnlp2026"
                  target="_blank"
                  rel="noreferrer"
                >
                  Training and research code
                </a>
              </li>
              <li>
                <Link href="/news/2026-07-02">
                  Full release and evaluation report
                </Link>
              </li>
              <li>
                <Link href="/publications">
                  AACL-IJCNLP 2026 paper and research artifacts
                </Link>
              </li>
              <li>
                <Link href="/datasets">KhmerPile dataset</Link>
              </li>
            </ul>

            <p>
              See the model repository for the current license and usage terms.
            </p>
          </div>

          <p className="article-back">
            <Link href="/models">Back to models</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
