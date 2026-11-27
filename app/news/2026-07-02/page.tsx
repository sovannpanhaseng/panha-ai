import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panha AI introduces Bayon, our first Language Model — Panha AI",
  description:
    "Panha AI introduces Bayon, a 100-million-parameter Khmer-focused language model built to explore native-language specialization from the ground up.",
};

export default function BayonReleasePage() {
  return (
    <main id="main" className="article-page">
      <div className="article-page__inner">
        <article>
          <header className="article-head">
            <div className="article-meta">
              <time dateTime="2026-07-02">July 2, 2026</time>
              <span>Releases</span>
            </div>

            <h1 className="article-title">
              Panha AI introduces Bayon, our first Language Model
            </h1>
          </header>

          <div className="article-body">
            <p>
              Today, Panha AI introduces Bayon, a 100-million-parameter
              Khmer-focused language model developed to explore a different
              approach to language modeling for underrepresented languages:
              instead of adapting a general-purpose multilingual model, what
              happens when a model is designed around Khmer from the beginning?
            </p>

            <p>
              Khmer remains underrepresented in large-scale language modeling.
              General-purpose models often allocate most of their vocabulary and
              training capacity to higher-resource languages, leaving Khmer text
              inefficiently tokenized and vulnerable to unwanted cross-lingual
              interference. These problems are not simply a matter of model
              size. They also reflect how models represent, tokenize, and learn
              individual languages.
            </p>

            <p>
              Bayon explores this problem through a combination of
              Khmer-specialized tokenization, filtered Khmer pretraining data,
              and linguistically constrained instruction tuning. The result is a
              compact model designed to investigate how far native-language
              specialization can go under limited computational resources.
            </p>

            <p>
              Bayon is also part of Panha AI&apos;s broader work on sovereign
              Khmer AI, alongside the development of open datasets, training
              resources, evaluation benchmarks, and infrastructure that allow
              other researchers and developers to build their own Khmer language
              models.
            </p>

            <h2>Designing Around Khmer</h2>

            <p>A central design decision in Bayon is its tokenizer.</p>

            <p>
              Most general-purpose language models use shared vocabularies
              designed to accommodate many languages and writing systems. For
              languages with less representation in their training data, this
              can result in excessive subword fragmentation, increasing the
              number of tokens required to represent the same text.
            </p>

            <p>
              Bayon instead uses a custom 5,000-token Khmer-focused BPE
              vocabulary, with byte fallback to preserve representability for
              characters outside its learned vocabulary.
            </p>

            <p>
              The tokenizer was developed using a source corpus containing
              approximately 2.42 million documents and 5.12 billion characters,
              of which 94.69% were Khmer characters.
            </p>

            <p>
              On this corpus, Bayon produces approximately 1.389 billion tokens,
              compared with 6.021 billion using Qwen2.5&apos;s tokenizer and
              3.057 billion using o200k_base.
            </p>

            <p>
              This represents a 4.33× reduction in token count against Qwen2.5
              and a 2.20× reduction against o200k_base.
            </p>

            <p>
              These measurements are based on the tokenizer&apos;s development
              corpus rather than a held-out evaluation set. We also tested three
              representative Khmer passages, where Bayon required between 1.65×
              and 4.49× fewer tokens than the comparison tokenizers.
            </p>

            <h2>Training Bayon</h2>

            <p>
              Bayon was pretrained on a filtered Khmer corpus derived from
              FineWeb-2. The final pretraining dataset contains approximately
              1.361 billion tokens, providing the model with its foundational
              Khmer language exposure.
            </p>

            <p>
              The model uses a Gemma-inspired architecture with 28 transformer
              layers, a hidden dimension of 512, and Grouped Query Attention with
              8 query heads and 2 key-value heads.
            </p>

            <p>
              Despite its 100M-parameter scale, the architecture was designed
              with edge deployment in mind, targeting environments with limited
              GPU memory.
            </p>

            <p>
              Pretraining was conducted primarily on a mobile NVIDIA RTX 4050
              with 6GB of VRAM. The training run lasted 96 hours on the RTX
              4050, followed by another 3 hours on an H100. Training was
              intentionally stopped at step 18,000 rather than the planned
              50,000 steps, reaching a validation loss of 2.54 and perplexity of
              12.7.
            </p>

            <p>
              Following pretraining, Bayon underwent supervised fine-tuning
              using 18,000 Khmer instruction-tuning pairs covering conversational
              exchanges, cultural question answering, and story generation.
            </p>

            <p>
              The instruction data was generated using Gemini teacher models
              under explicit linguistic constraints, followed by script
              filtering and deduplication. The fine-tuning stage used LoRA and
              required just 2.5 additional hours on the RTX 4050.
            </p>

            <h2>Evaluating Language Consistency</h2>

            <p>
              One of Bayon&apos;s primary research objectives is reducing
              language bleeding: the unprompted appearance of foreign scripts
              and characters in generated Khmer text.
            </p>

            <p>
              To measure this, we introduce the Language Bleed Ratio (LBR), a
              token-level metric that measures the proportion of generated
              tokens containing characters outside the defined Khmer Unicode
              ranges.
            </p>

            <p>
              On our 201-question Khmer historical and regional QA benchmark,
              Bayon achieved an LBR of just 0.06%, corresponding to 13
              non-Khmer tokens among 21,031 generated tokens across three
              evaluation passes.
            </p>

            <p>For comparison:</p>

            <div className="article-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Model</th>
                    <th scope="col">Language Bleed Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bayon</td>
                    <td>0.06%</td>
                  </tr>
                  <tr>
                    <td>Qwen-SEA-LION-v4.5-27B-IT</td>
                    <td>0.54%</td>
                  </tr>
                  <tr>
                    <td>GPT-OSS-120B</td>
                    <td>18.25%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              An important control experiment evaluated Bayon&apos;s pretrained
              checkpoint before instruction tuning. Using the same tokenizer and
              evaluation protocol, its LBR was 80.59%.
            </p>

            <p>
              This comparison provides evidence that the tokenizer alone does
              not account for Bayon&apos;s low post-training LBR. The
              instruction-tuning stage was associated with a substantial
              reduction in non-Khmer script output.
            </p>

            <p>
              However, LBR measures script consistency, not grammatical quality,
              factual accuracy, or naturalness. It should be interpreted as one
              dimension of Khmer generation rather than a general measure of
              language capability.
            </p>

            <h2>Task Evaluation</h2>

            <p>
              We also evaluated Bayon&apos;s ability to answer Khmer historical
              and regional questions.
            </p>

            <p>
              On the 201-question benchmark, Bayon obtained 15 correct answers,
              compared with 4 for Qwen2.5-0.5B-Instruct.
            </p>

            <div className="article-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Model</th>
                    <th scope="col">Parameters</th>
                    <th scope="col">Correct Answers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bayon (pre-SFT)</td>
                    <td>100M</td>
                    <td>0/201</td>
                  </tr>
                  <tr>
                    <td>Qwen2.5-Instruct</td>
                    <td>500M</td>
                    <td>4/201</td>
                  </tr>
                  <tr>
                    <td>Bayon (instruction-tuned)</td>
                    <td>100M</td>
                    <td>15/201</td>
                  </tr>
                  <tr>
                    <td>GPT-OSS</td>
                    <td>120B</td>
                    <td>54/201</td>
                  </tr>
                  <tr>
                    <td>Qwen-SEA-LION-v4.5-IT</td>
                    <td>27B</td>
                    <td>88/201</td>
                  </tr>
                  <tr>
                    <td>Gemma 4 IT</td>
                    <td>31B</td>
                    <td>103/201</td>
                  </tr>
                  <tr>
                    <td>GLM-4.7</td>
                    <td>—</td>
                    <td>117/201</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Bayon&apos;s evaluation required a question to be answered
              correctly in at least two of three independent passes. Other
              models were evaluated once.
            </p>

            <p>
              These results are preliminary. The benchmark is limited in size
              and scope, and the evaluation protocols are not fully symmetric.
              The results suggest improved localized task behavior following
              instruction tuning, rather than broad Khmer factual competence.
            </p>

            <h2>What Comes Next</h2>

            <p>Bayon is an early contribution to a broader effort.</p>

            <p>
              At Panha AI, we believe developing Khmer language technology
              requires more than releasing individual model checkpoints.
              Researchers need access to the underlying resources that make
              independent development possible.
            </p>

            <p>
              Our ongoing work includes Khmer-focused pretraining datasets,
              supervised fine-tuning datasets, decision models and datasets,
              evaluation benchmarks, and the infrastructure code needed to train
              and evaluate language models.
            </p>

            <p>
              KhmerPile, our filtered Khmer pretraining dataset, is one part of
              this effort. By making these resources available, we aim to give
              researchers and developers the ability to build upon previous
              releases, experiment with different architectures, and train their
              own Khmer language models.
            </p>

            <p>
              Bayon demonstrates one approach to this work: a compact model
              built around the linguistic characteristics of Khmer, developed
              under constrained compute, and released as a foundation for
              further research.
            </p>

            <p>Panha AI advances sovereign Khmer AI.</p>

            <h2>Availability</h2>

            <p>
              Bayon&apos;s model weights, training code, and evaluation resources
              are available through the following repositories:
            </p>

            <p>
              Model:{" "}
              <a
                href="https://huggingface.co/attentionlab/bayon"
                target="_blank"
                rel="noreferrer"
              >
                Bayon on Hugging Face
              </a>
            </p>

            <p>
              Code and research:{" "}
              <a
                href="https://github.com/sovannpanhaseng/aaclijcnlp2026"
                target="_blank"
                rel="noreferrer"
              >
                AACL-IJCNLP 2026 Repository
              </a>
            </p>

            <p>
              For details about the research, see our AACL-IJCNLP 2026 paper:
            </p>

            <p>
              <cite>
                Small Model, Native Design: Exploring Linguistic Purity and
                Reduced Language Bleeding in a 100M Khmer Language Model.
              </cite>
            </p>
          </div>

          <p className="article-back">
            <Link href="/news">Back to news</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
