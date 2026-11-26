"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo";

const HERO_WORDS = ["Frontier", "Generative", "AI", "for", "Cambodia."];
const DECODE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

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
  const [words, setWords] = useState(HERO_WORDS);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const startedAt = performance.now();
    const revealTimes = HERO_WORDS.map((word) =>
      word.split("").map(() => Math.random() * 700 + 90),
    );

    const interval = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;

      setWords(
        HERO_WORDS.map((word, index) =>
          scrambleWord(word, elapsed, revealTimes[index]),
        ),
      );
    }, 100);

    const completion = window.setTimeout(() => {
      window.clearInterval(interval);
      setWords(HERO_WORDS);
    }, 900);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(completion);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Independent AI research · Phnom Penh
          </p>

          <h1 className="hero__title" aria-label={HERO_WORDS.join(" ")}>
            {words.map((word, index) => (
              <span key={HERO_WORDS[index]} aria-hidden="true">
                {word}
                {index < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          <p className="hero__lede">
            Advancing safe, reliable, and useful artificial intelligence for
            the people of Cambodia.
          </p>

          <div className="hero__actions">
            <a className="button" href="#models">
              Explore Bayon
              <span aria-hidden="true">→</span>
            </a>
            <a className="link-underline" href="#about">
              About Panha AI
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="brand-panel">
            <LogoMark className="brand-panel__logo" />
            <span className="brand-panel__meta brand-panel__meta--tl">
              Panha AI
            </span>
            <span className="brand-panel__meta brand-panel__meta--br">
              Est. 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
