"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "models", label: "Models" },
  { id: "datasets", label: "Datasets" },
];

export function PageToc() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (section): section is HTMLElement => section !== null,
    );

    if (sections.length === 0) {
      return;
    }

    let frame = 0;

    const update = () => {
      const marker = window.innerHeight * 0.35;
      let current = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          current = section;
        } else {
          break;
        }
      }

      setActiveSection(current.id);

      const first = sections[0];
      const last = sections[sections.length - 1];
      const start = first.getBoundingClientRect().top + window.scrollY;
      const end = last.getBoundingClientRect().bottom + window.scrollY;
      const scrollable = end - start;
      const distance = window.scrollY - start;

      setProgress(
        scrollable > 0
          ? Math.min(100, Math.max(0, (distance / scrollable) * 100))
          : 0,
      );
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <aside className="toc">
      <div className="toc__sticky">
        <nav className="toc__nav" aria-label="Page sections">
          <div className="toc__rail" aria-hidden="true">
            <span
              className="toc__progress"
              style={{ height: `${progress}%` }}
            />
          </div>

          <ul>
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "location" : undefined}
                  >
                    <span className="toc__dot" aria-hidden="true" />
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
