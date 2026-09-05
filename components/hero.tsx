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
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden">
      <div className="sky-bg absolute inset-0" aria-hidden="true">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />
        <div className="cloud cloud-5" />
      </div>

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
          href="#models"
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
  );
}
