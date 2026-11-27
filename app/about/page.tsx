import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Panha AI",
  description:
    "Panha AI is an independent Cambodian research project building Khmer language models, linguistic datasets, and open research resources.",
};

export default function AboutPage() {
  return (
    <main id="main" className="about-page">
      <div className="about-page__inner">
        <header className="about-page__head">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            About Panha AI
          </p>

          <h1 className="about-page__title">Building intelligence with purpose</h1>
        </header>

        <div className="about-page__body">
          <h2>Who We Are</h2>

          <p>
            Panha AI is an independent Cambodian research project created by
            Seng Sovannpanha in late 2025, committed to advancing safe,
            reliable, and useful artificial intelligence for the people of
            Cambodia.
          </p>

          <p>
            Since its creation in late 2025, Panha AI has focused on developing
            high-quality NLP datasets alongside increasingly capable language
            models. Its research addresses the technical challenges involved in
            developing capable language technologies for Khmer, a language that
            remains underrepresented in much of the global language-model
            ecosystem.
          </p>

          <p>
            Our research combines dataset development with language model
            training and evaluation. By developing linguistic resources
            alongside increasingly capable models, we continuously refine our
            approaches to data collection, curation, tokenization, training, and
            evaluation.
          </p>

          <h2>Research and Development</h2>

          <p>
            Panha AI develops the data and model infrastructure needed to
            advance Khmer language technology.
          </p>

          <p>Our research includes:</p>

          <ul>
            <li>
              <strong>Khmer language models:</strong> Developing language models
              designed to understand and generate Khmer, including research into
              efficient model architectures and language-specific training.
            </li>
            <li>
              <strong>Natural language processing:</strong> Investigating
              language understanding, text generation, reasoning, and other core
              NLP capabilities.
            </li>
            <li>
              <strong>Linguistic datasets:</strong> Building and releasing
              curated Khmer-language corpora to support language model training
              and research.
            </li>
            <li>
              <strong>Evaluation and benchmarking:</strong> Studying language
              quality, linguistic fidelity, model capabilities, and the
              limitations of existing evaluation methods.
            </li>
            <li>
              <strong>Efficient language technology:</strong> Exploring
              approaches that make capable language models more accessible on
              locally available hardware.
            </li>
          </ul>

          <h2>Research Projects</h2>

          <p>
            Panha AI&apos;s work includes several independent research projects:
          </p>

          <ul>
            <li>
              <strong>Bayon:</strong> Research into compact Khmer language
              models, linguistic fidelity, and reduced cross-language
              interference.
            </li>
            <li>
              <strong>Panha:</strong> A family of Khmer-first language models
              and related language technology.
            </li>
            <li>
              <strong>KhmerPile:</strong> An open Khmer-language text corpus
              intended to support language model training and NLP research.
            </li>
          </ul>

          <p>
            Each project contributes to a broader research effort to improve the
            availability of Khmer-language resources and model capabilities.
          </p>

          <h2>Our Mission</h2>

          <p>
            Our mission is to contribute to the development of safe, reliable,
            and useful language technology for Cambodia.
          </p>

          <p>
            We believe progress in Khmer AI requires investment in both the data
            used to train language models and the models themselves. We
            therefore work on these foundations together, with an emphasis on
            reproducibility, open research, and measurable technical progress.
          </p>

          <h2>Independence and Scope</h2>

          <p>
            Panha AI operates as an independent research project founded in late
            2025. It is not presented as a registered company, university, or
            government institution.
          </p>

          <p>
            Its publications, datasets, and models are released under their
            respective licenses and terms. Project participation or research
            publication does not imply institutional endorsement.
          </p>
        </div>
      </div>
    </main>
  );
}
