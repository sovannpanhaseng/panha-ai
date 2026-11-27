import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Panha AI",
  description:
    "Panha AI is an independent project building high-quality Khmer NLP datasets, language models, and open research resources.",
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

          <p className="about-page__lede">
            Independent AI research and open language resources for Cambodia.
          </p>
        </header>

        <div className="about-page__body">
          <p>
            Panha AI is an independent project committed to advancing safe,
            reliable, and useful artificial intelligence for the people of
            Cambodia.
          </p>

          <p>
            Since 2025, we have been focused on building high-quality NLP
            datasets alongside the development of increasingly capable language
            models. Our work has centered on establishing the data and
            model-development foundations required to support continued progress
            in language understanding, generation, and other core NLP
            capabilities.
          </p>

          <p>
            By developing datasets in parallel with increasingly intelligent
            language models, we have been able to continuously refine our
            approach to data collection, curation, evaluation, and model
            development. This ongoing process is intended to create a stronger
            foundation for building more capable and reliable language
            technologies over time.
          </p>
        </div>
      </div>
    </main>
  );
}
