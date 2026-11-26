export function Datasets() {
  return (
    <section className="section" id="datasets">
      <div className="section__inner">
        <div className="section__body">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            03 — Datasets
          </p>

          <div className="section__head">
            <h2 className="display">Datasets</h2>
            <p className="section__intro">
              Open corpora for Khmer language research.
            </p>
          </div>

          <article className="card">
            <div className="card__visual card__visual--dataset">
              <span className="tag">khmer-pile</span>

              <div className="card__heading">
                <h3 className="card__name">Khmer Pile</h3>
                <p className="card__script card__script--label">
                  Khmer web corpus
                </p>
              </div>

              <svg
                className="dataset-glyph"
                viewBox="0 0 96 96"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <ellipse cx="48" cy="22" rx="27" ry="11" />
                <path d="M21 22v22c0 6 12 11 27 11s27-5 27-11V22" />
                <path d="M21 44v22c0 6 12 11 27 11s27-5 27-11V44" />
                <path d="M21 22c0 6 12 11 27 11s27-5 27-11" />
                <path d="M21 44c0 6 12 11 27 11s27-5 27-11" />
              </svg>
            </div>

            <div className="card__body">
              <p className="card__text">
                Khmer web text corpus, built on top of FineWeb-2&apos;s Khmer
                extension with additional extraction and filtering.
              </p>

              <a
                className="arrow-link"
                href="https://huggingface.co/datasets/sovannpanhaseng/khmer-pile"
                target="_blank"
                rel="noreferrer"
              >
                Explore the dataset
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
