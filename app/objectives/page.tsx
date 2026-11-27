import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Objectives — Panha AI",
  description:
    "Panha AI's objectives span Khmer-first language models, natural language processing, open datasets, evaluation, and accessible language technology.",
};

export default function ObjectivesPage() {
  return (
    <main id="main" className="about-page">
      <div className="about-page__inner">
        <header className="about-page__head">
          <h1 className="about-page__title">Objectives</h1>
        </header>

        <div className="about-page__body">
          <p>
            Panha AI&apos;s objectives are centered on the data, models,
            evaluation methods, and infrastructure required to advance Khmer
            language technology.
          </p>

          <h2>Research Objectives</h2>

          <ul>
            <li>
              <strong>Develop Khmer-first language models:</strong> Build
              language models designed around Khmer, including research into
              efficient architectures and language-specific training.
            </li>
            <li>
              <strong>Advance Khmer natural language processing:</strong>{" "}
              Investigate language understanding, text generation, reasoning, and
              other core NLP capabilities for Khmer.
            </li>
            <li>
              <strong>Build open linguistic datasets:</strong> Create and release
              curated Khmer-language corpora that support language model
              training, evaluation, and independent research.
            </li>
            <li>
              <strong>Strengthen evaluation and benchmarking:</strong> Study
              language quality, linguistic fidelity, model capabilities, and the
              limitations of existing evaluation methods.
            </li>
            <li>
              <strong>Make language technology more accessible:</strong> Explore
              efficient architectures and training approaches that make capable
              language models usable on locally available hardware.
            </li>
            <li>
              <strong>Support open and reproducible research:</strong> Release
              datasets, models, code, and evaluation resources that allow others
              to build on previous work.
            </li>
          </ul>

          <h2>Open Research</h2>

          <p>
            Panha AI treats openness as part of the research process. Projects
            such as Bayon, Panha language models, and KhmerPile are intended to
            expand access to the resources needed for Khmer language research,
            while making results easier to reproduce, inspect, and improve.
          </p>

          <p>
            The objective is to contribute to a broader research ecosystem in
            which datasets, models, benchmarks, and infrastructure develop
            together rather than in isolation.
          </p>

          <h2>Responsible Development</h2>

          <p>
            Panha AI aims to advance safe, reliable, and useful language
            technology for Cambodia. Progress should be measurable and grounded
            in the needs of Khmer speakers, not capability alone.
          </p>

          <p>
            As an independent research project, Panha AI releases its
            publications, datasets, and models under their respective licenses
            and terms. Project participation or research publication does not
            imply institutional endorsement.
          </p>
        </div>
      </div>
    </main>
  );
}
