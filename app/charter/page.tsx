import type { Metadata } from "next";
import { CharterDesktopToc, CharterMobileToc } from "@/components/charter-toc";
import { CHARTER } from "@/lib/charter";

export const metadata: Metadata = {
  title: "The Panha Charter — Panha AI",
  description:
    "The Panha Charter establishes the principles governing Panha's identity, conduct, reasoning, development, and relationship with humanity.",
};

export default function CharterPage() {
  const sections = [
    { id: "preamble", label: "Preamble" },
    ...CHARTER.chapters.map(chapter => ({
      id: `chapter-${chapter.roman.toLowerCase()}`,
      label: chapter.title,
      roman: chapter.roman
    }))
  ];

  return (
    <main id="main" className="charter-page">
      <CharterMobileToc sections={sections} />
      <div className="charter-page__inner">
        <header className="charter-hero">
          <h1 className="charter-hero__title">The Panha Charter</h1>
          <p className="charter-hero__lede">
            The principles governing Panha&apos;s identity, conduct, reasoning,
            development, and relationship with humanity.
          </p>
        </header>

        <div className="charter-layout">
          <CharterDesktopToc sections={sections} />

          <article className="charter-document">
            <section id="preamble" className="charter-section">
              <h2>Preamble</h2>
              {CHARTER.preamble.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>

            {CHARTER.chapters.map(chapter => (
              <section
                id={`chapter-${chapter.roman.toLowerCase()}`}
                className="charter-section"
                key={chapter.roman}
              >
                <header className="charter-chapter-head">
                  <span className="charter-chapter-number">Chapter {chapter.roman}</span>
                  <h2>{chapter.title}</h2>
                </header>

                {chapter.articles.map(article => (
                  <section
                    id={`article-${article.number}`}
                    className="charter-article"
                    key={article.number}
                  >
                    <h3>
                      <span>Article {article.number}.</span> {article.title}
                    </h3>
                    {article.clauses.length > 0 && (
                      <ol>
                        {article.clauses.map((clause, index) => (
                          <li key={index}>
                            {clause.text}
                            {clause.bullets.length > 0 && (
                              <ul>
                                {clause.bullets.map(bullet => (
                                  <li key={bullet}>{bullet}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ol>
                    )}
                    {article.beforeTable?.map((paragraph, index) => (
                      <p key={`before-${index}`}>{paragraph}</p>
                    ))}
                    {article.table && (
                      <div className="charter-table-wrap">
                        <table className="charter-table">
                          <thead>
                            <tr>
                              {article.table.headers.map(header => (
                                <th key={header} scope="col">{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {article.table.rows.map((row, index) => (
                              <tr key={index}>
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {article.afterTable?.map((paragraph, index) => (
                      <p key={`after-${index}`}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
