"use client";

import { useEffect, useRef, useState } from "react";

export type CharterSection = {
  id: string;
  label: string;
  roman?: string;
};

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function useActiveSection(sections: CharterSection[]) {
  const [active, setActive] = useState(sections[0]?.id ?? "preamble");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (sections.length === 0) return;
      const marker = window.innerWidth <= 900 ? 140 : 120;
      let next = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= marker) next = section.id;
        else break;
      }

      const documentElement = document.documentElement;
      if (window.innerHeight + window.scrollY >= documentElement.scrollHeight - 2) {
        next = sections[sections.length - 1].id;
      }

      setActive(next);
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
  }, [sections]);

  return active;
}

export function CharterMobileToc({ sections }: { sections: CharterSection[] }) {
  const active = useActiveSection(sections);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const current = sections.find(section => section.id === active) ?? sections[0];
  const currentLabel = current?.label || "Preamble";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeAndFocus() {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function goToSection(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
      });
    }
  }

  return (
    <div className="charter-mobile-toc">
      <button
        ref={triggerRef}
        type="button"
        className="charter-mobile-toc__trigger"
        aria-expanded={open}
        aria-controls="charter-mobile-toc-panel"
        onClick={() => setOpen(value => !value)}
      >
        <span className="charter-mobile-toc__copy">
          <span className="charter-mobile-toc__eyebrow">Contents</span>
          <span className="charter-mobile-toc__current">{currentLabel}</span>
        </span>
        <span className={`charter-mobile-toc__chevron${open ? " is-open" : ""}`}>
          <ChevronIcon />
        </span>
      </button>

      {open && (
        <>
          <div
            className="charter-mobile-toc__backdrop"
            aria-hidden="true"
            onClick={closeAndFocus}
          />
          <nav
            id="charter-mobile-toc-panel"
            className="charter-mobile-toc__panel"
            aria-label="Charter sections"
          >
            <p className="charter-mobile-toc__panel-label">Charter sections</p>
            {sections.map(section => {
              const isActive = section.id === active;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "location" : undefined}
                  onClick={event => goToSection(event, section.id)}
                >
                  <span className="charter-mobile-toc__roman">{section.roman || ""}</span>
                  <span>{section.label}</span>
                </a>
              );
            })}
          </nav>
        </>
      )}
    </div>
  );
}

export function CharterDesktopToc({ sections }: { sections: CharterSection[] }) {
  const active = useActiveSection(sections);

  return (
    <aside className="charter-toc" aria-label="Charter contents">
      <div className="charter-toc__sticky">
        <p className="charter-toc__label">Contents</p>
        <nav aria-label="Charter sections">
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={section.id === active ? "location" : undefined}
            >
              <span>{section.roman || ""}</span>
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
