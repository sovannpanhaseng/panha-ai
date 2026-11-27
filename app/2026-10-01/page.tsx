import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panha AI at AACL-IJCNLP 2026 — Panha AI",
  description:
    "Panha AI is participating in AACL-IJCNLP 2026 with Bayon, our Khmer-focused language model and research submission.",
};

export default function ArticlePage() {
  return (
    <main id="main" className="article-page">
      <div className="article-page__inner">
        <article>
          <header className="article-head">
            <div className="article-meta">
              <time dateTime="2026-10-01">October 1, 2026</time>
              <span>General</span>
            </div>

            <h1 className="article-title">
              Panha AI at AACL-IJCNLP 2026
            </h1>
          </header>

          <div className="article-body">
            <p>
              Panha AI is pleased to participate in the Asia-Pacific Chapter
              of the Association for Computational Linguistics (AACL-IJCNLP
              2026), representing Cambodia and contributing to the advancement
              of Khmer language technology and research.
            </p>

            <p>
              Our participation features Bayon, our Khmer-focused language
              model and research submission, titled{" "}
              <cite>
                “Small Model, Native Design: Exploring Linguistic Purity and
                Reduced Language Bleeding in a 100M Khmer Language Model.”
              </cite>{" "}
              The work explores how language-specific model design can improve
              Khmer language generation while reducing unwanted language
              mixing.
            </p>

            <p>
              We are glad to represent Cambodia at AACL 2026 and remain
              committed to advancing sovereign Khmer AI through open-weight
              language models, datasets, benchmarks, and research
              infrastructure.
            </p>

            <p>
              Learn more about Bayon:{" "}
              <a
                href="https://huggingface.co/attentionlab/bayon"
                target="_blank"
                rel="noreferrer"
              >
                Bayon Model Release
              </a>
              .
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
