"use client";

import { useEffect, useState } from "react";

const HERO_WORDS = ["Frontier", "Generative", "AI", "for", "Cambodia."];
const DECODE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

function scrambleWord(word: string, elapsed: number, revealTimes: number[]) {
  return word
    .split("")
    .map((character, index) =>
      character === " " || elapsed >= revealTimes[index]
        ? character
        : DECODE_CHARACTERS[
            Math.floor(Math.random() * DECODE_CHARACTERS.length)
          ],
    )
    .join("");
}

export function Hero() {
  const [decodedWords, setDecodedWords] = useState(HERO_WORDS);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    const revealTimes = HERO_WORDS.map((word) =>
      word.split("").map(() => Math.random() * 800 + 100),
    );

    const interval = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;

      setDecodedWords(
        HERO_WORDS.map((word, index) =>
          scrambleWord(word, elapsed, revealTimes[index]),
        ),
      );
    }, 110);

    const completionTimeout = window.setTimeout(() => {
      window.clearInterval(interval);
      setDecodedWords(HERO_WORDS);
      window.setTimeout(() => setShowReadMore(true), 500);
    }, 1000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(completionTimeout);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Extended animated sky */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100svh+24rem)] overflow-hidden"
        aria-hidden="true"
      >
        <div className="sky-bg absolute inset-0">
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="cloud cloud-3" />
          <div className="cloud cloud-4" />
          <div className="cloud cloud-5" />
        </div>

        {/* Fade sky into the current page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center">
        <div className="z-10 px-6">
          <h1
            aria-label={HERO_WORDS.join(" ")}
            className="max-w-4xl text-balance text-center font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {decodedWords.map((word, index) => (
              <span key={HERO_WORDS[index]}>
                {word}
                {index < decodedWords.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          <a
            href="#about"
            aria-hidden={!showReadMore}
            tabIndex={showReadMore ? 0 : -1}
            className={`absolute bottom-8 left-1/2 flex w-fit -translate-x-1/2 flex-col items-center gap-3 text-xs tracking-[0.2em] text-foreground transition-opacity duration-500 ${
              showReadMore ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <span>read more</span>
            <span
              className="animate-bounce text-2xl leading-none"
              aria-hidden="true"
            >
              ↓
            </span>
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative min-h-[80svh] px-6 py-24 text-foreground sm:py-32 lg:py-40"
      >
        <div className="mx-auto grid max-w-6xl md:grid-cols-[0.8fr_2.2fr]">
          <div className="md:col-start-2">
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Building intelligence with purpose
            </h2>

            <div className="mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                Panha AI is an independent project committed to advancing safe,
                reliable, and useful artificial intelligence for the people of
                Cambodia.
              </p>
              <p>
                Since 2025, we have been focused on building high-quality NLP
                datasets alongside the development of increasingly capable
                language models. Our work has centered on establishing the data
                and model-development foundations required to support continued
                progress in language understanding, generation, and other core
                NLP capabilities.
              </p>
              <p>
                By developing datasets in parallel with increasingly intelligent
                language models, we have been able to continuously refine our
                approach to data collection, curation, evaluation, and model
                development. This ongoing process is intended to create a
                stronger foundation for building more capable and reliable
                language technologies over time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
