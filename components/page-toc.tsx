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
    const sectionElements = SECTIONS.map(({ id }) =>
      document.getElementById(id),
    ).filter((section): section is HTMLElement => section !== null);

    if (sectionElements.length === 0) {
      return;
    }

    const update = () => {
      const marker = window.innerHeight * 0.35;

      let current = sectionElements[0];

      for (const section of sectionElements) {
        if (section.getBoundingClientRect().top <= marker) {
          current = section;
        } else {
          break;
        }
      }

      setActiveSection(current.id);

      const firstSection = sectionElements[0];
      const lastSection = sectionElements[sectionElements.length - 1];

      const start = firstSection.getBoundingClientRect().top + window.scrollY;
      const end = lastSection.getBoundingClientRect().bottom + window.scrollY;

      const scrollableHeight = end - start;
      const distance = window.scrollY - start;

      setProgress(
        scrollableHeight > 0
          ? Math.min(100, Math.max(0, (distance / scrollableHeight) * 100))
          : 0,
      );
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <aside className="pointer-events-none absolute inset-x-0 top-[calc(100svh-4rem)] bottom-0 z-20 hidden lg:block">
      <div className="sticky top-96 mx-auto max-w-6xl px-6">
        <nav
          aria-label="Page sections"
          className="pointer-events-auto relative w-full max-w-xl"
        >
          <div
            className="absolute left-[3px] top-2 bottom-2 w-0.5 bg-foreground/15"
            aria-hidden="true"
          >
            <span
              className="absolute left-0 top-0 w-0.5 bg-foreground transition-[height] duration-150"
              style={{ height: `${progress}%` }}
            />
          </div>

          <ul className="relative flex flex-col gap-5 text-base">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className="group flex items-center gap-2"
                  >
                    <span
                      className={[
                        "relative z-10 h-2 w-2 shrink-0 rounded-full",
                        "border border-background transition-all duration-150",
                        isActive
                          ? "scale-125 bg-foreground"
                          : "bg-muted-foreground/50 group-hover:bg-foreground",
                      ].join(" ")}
                      aria-hidden="true"
                    />

                    <span
                      className={[
                        "whitespace-nowrap transition-colors duration-150",
                        isActive
                          ? "font-semibold text-foreground"
                          : "text-muted-foreground group-hover:text-foreground",
                      ].join(" ")}
                    >
                      {section.label}
                    </span>
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
