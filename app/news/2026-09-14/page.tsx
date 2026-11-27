import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Introducing KhmerPile: An Open Web-Scale Text Corpus for Khmer — Panha AI",
  description:
    "KhmerPile is an open Khmer-language text corpus built from Common Crawl, containing approximately 627,000 deduplicated documents for Khmer NLP research.",
};

export default function KhmerPileReleasePage() {
  return (
    <main id="main" className="article-page">
      <div className="article-page__inner">
        <article>
          <header className="article-head">
            <div className="article-meta">
              <time dateTime="2026-09-14">September 14, 2026</time>
              <span>Releases</span>
            </div>

            <h1 className="article-title">
              Introducing KhmerPile: An Open Web-Scale Text Corpus for Khmer
            </h1>
          </header>

          <div className="article-body">
            <p>
              Today, we are releasing KhmerPile, an open Khmer-language text
              corpus built from Common Crawl. The project aims to address a
              fundamental limitation in Khmer natural language processing: the
              lack of large, accessible, and reusable datasets for training and
              evaluating language models.
            </p>

            <p>
              Despite Khmer being spoken by millions of people, the availability
              of large-scale Khmer text corpora remains limited compared with
              higher-resource languages. This creates a bottleneck for
              developing language models that can understand and generate Khmer
              reliably.
            </p>

            <p>KhmerPile is an attempt to help address that gap.</p>

            <h2>Building a larger Khmer text corpus</h2>

            <p>
              KhmerPile is constructed from Common Crawl snapshots spanning
              CC-MAIN-2023-06 through CC-MAIN-2026-30.
            </p>

            <p>
              Rather than relying on a single crawl or an existing static
              collection, we process multiple snapshots to collect
              Khmer-containing web documents across a broader range of sources
              and time periods.
            </p>

            <p>
              The collection pipeline follows the general filtering approach
              established by FineWeb-2, with additional Khmer-oriented
              filtering. URLs containing Khmer text are considered during
              collection, including documents where Khmer represents only a
              small portion of the text.
            </p>

            <p>
              This approach allows the corpus to retain multilingual documents
              and pages containing Khmer alongside other languages, rather than
              restricting collection exclusively to documents classified as
              predominantly Khmer.
            </p>

            <h2>Dataset statistics</h2>

            <p>The current release contains the following:</p>

            <div className="article-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Metric</th>
                    <th scope="col">Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Initial filtered documents</td>
                    <td>1,280,000</td>
                  </tr>
                  <tr>
                    <td>Documents after deduplication</td>
                    <td>627,000</td>
                  </tr>
                  <tr>
                    <td>Crawl coverage</td>
                    <td>CC-MAIN-2023-06 to CC-MAIN-2026-30</td>
                  </tr>
                  <tr>
                    <td>Source</td>
                    <td>Common Crawl</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Deduplication is performed against both the collected corpus and
              FineWeb-2. This helps reduce repeated content within KhmerPile and
              overlap with an existing large-scale web corpus.
            </p>

            <p>
              The resulting dataset contains approximately 627,000 documents
              after deduplication.
            </p>

            <h2>Processing and filtering</h2>

            <p>The processing pipeline consists of several stages:</p>

            <ul>
              <li>
                <strong>Collection:</strong> Retrieve documents from selected
                Common Crawl snapshots using Khmer-containing URLs as an initial
                collection criterion.
              </li>
              <li>
                <strong>Text extraction and filtering:</strong> Apply a
                FineWeb-2-style filtering pipeline, alongside additional
                filtering for Khmer text.
              </li>
              <li>
                <strong>Quality scoring:</strong> Use fastText language
                identification scores and Khmer-text ratios to help assess
                document relevance.
              </li>
              <li>
                <strong>Deduplication:</strong> Remove duplicates within the
                collected dataset and against FineWeb-2.
              </li>
              <li>
                <strong>Metadata preservation:</strong> Retain useful document
                metadata for downstream research and reproducibility.
              </li>
            </ul>

            <p>All filtering takes place before deduplication.</p>

            <p>
              The released dataset preserves metadata including source URLs,
              extracted text, fastText scores, and crawl snapshot information.
            </p>

            <h2>Releases</h2>

            <p>We are publishing two versions of KhmerPile:</p>

            <div className="article-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Release</th>
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
                    <td>
                      Deduplicated dataset containing approximately 627K
                      documents
                    </td>
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
                      Filtered dataset before deduplication, containing
                      approximately 1.28M documents
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Both releases are available on Hugging Face.</p>

            <p>
              The corresponding project repository is also available on GitHub
              under{" "}
              <a
                href="https://github.com/sovannpanhaseng/khmer-pile"
                target="_blank"
                rel="noreferrer"
              >
                sovannpanhaseng/khmer-pile
              </a>
              .
            </p>

            <h2>Intended applications</h2>

            <p>
              KhmerPile is intended to support research and development in Khmer
              natural language processing, particularly:
            </p>

            <ul>
              <li>
                Pretraining and continued pretraining of Khmer language models.
              </li>
              <li>Khmer-English multilingual language modeling.</li>
              <li>Khmer text classification and language identification.</li>
              <li>Research into low-resource language data processing.</li>
              <li>
                Development of larger Khmer-language datasets and benchmarks.
              </li>
            </ul>

            <p>
              We hope the dataset will make it easier for researchers to
              experiment with Khmer language models without having to
              independently reproduce the entire web-data collection process.
            </p>

            <h2>Limitations</h2>

            <p>
              KhmerPile is a web-derived corpus, and its quality is constrained
              by the material available through Common Crawl.
            </p>

            <p>
              The presence of Khmer text does not necessarily mean that an entire
              document is written in Khmer. The corpus may contain multilingual
              documents, duplicated material not caught by the deduplication
              process, noisy extracted text, and other forms of web content that
              require further processing.
            </p>

            <p>
              KhmerPile should therefore be treated as a research corpus rather
              than a fully curated collection of Khmer-only prose.
            </p>

            <h2>A step toward more accessible Khmer NLP</h2>

            <p>
              KhmerPile is part of our broader effort to develop accessible
              language resources and models for Khmer.
            </p>

            <p>
              Building language models for underrepresented languages requires
              more than model architectures and compute. It also requires the
              underlying data infrastructure that makes continued research
              possible.
            </p>

            <p>
              By releasing KhmerPile openly, we hope to provide researchers and
              developers with another resource for building, studying, and
              improving Khmer language technologies.
            </p>

            <p>KhmerPile is available on Hugging Face:</p>

            <ul>
              <li>
                <a
                  href="https://huggingface.co/datasets/sovannpanhaseng/khmer-pile"
                  target="_blank"
                  rel="noreferrer"
                >
                  sovannpanhaseng/khmer-pile
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/datasets/sovannpanhaseng/khmer-pile-raw"
                  target="_blank"
                  rel="noreferrer"
                >
                  sovannpanhaseng/khmer-pile-raw
                </a>
              </li>
            </ul>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/sovannpanhaseng/khmer-pile"
                target="_blank"
                rel="noreferrer"
              >
                sovannpanhaseng/khmer-pile
              </a>
            </p>

            <p>
              We welcome research use, evaluation, and contributions to the
              broader Khmer NLP ecosystem.
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
