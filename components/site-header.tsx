"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

// Logo hidden for now — uncomment to bring it back.
// import { LogoMark } from "@/components/logo";

type MenuKey = "about" | "research";

const MENUS: Record<MenuKey, { label: string; items: string[] }> = {
  about: {
    label: "About",
    items: ["Objectives", "The Panha Charter"],
  },
  research: {
    label: "Research",
    items: ["Papers", "Models", "Datasets", "Chat"],
  },
};

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [pinned, setPinned] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  function clearCloseTimer() {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function closeMenu() {
    clearCloseTimer();
    setOpenMenu(null);
    setPinned(false);
  }

  function scheduleClose() {
    if (pinned) {
      return;
    }

    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setOpenMenu(null);
    }, 140);
  }

  function handleHover(key: MenuKey) {
    clearCloseTimer();

    if (openMenu !== key) {
      setOpenMenu(key);

      if (pinned) {
        setPinned(false);
      }
    }
  }

  function handleTriggerClick(key: MenuKey) {
    if (openMenu === key && pinned) {
      closeMenu();
      return;
    }

    clearCloseTimer();
    setOpenMenu(key);
    setPinned(true);
  }

  function handlePlaceholderClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    closeMenu();
  }

  useEffect(() => {
    if (!openMenu) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current?.contains(event.target as Node)) {
        return;
      }

      closeMenu();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="site-header__inner">
          <Link className="brand" href="/" aria-label="Panha AI — home">
            {/* Logo hidden for now. */}
            {/* <LogoMark className="brand__mark" compact /> */}
            <span className="brand__word">Panha AI</span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {(Object.keys(MENUS) as MenuKey[]).map((key) => {
              const menu = MENUS[key];
              const isOpen = openMenu === key;

              return (
                <div
                  key={key}
                  className={`nav-item${isOpen ? " is-open" : ""}`}
                  onMouseEnter={() => handleHover(key)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className="nav-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`nav-panel-${key}`}
                    onClick={() => handleTriggerClick(key)}
                  >
                    {menu.label}
                    <svg
                      className="nav-chevron"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m3 4.5 3 3 3-3" />
                    </svg>
                  </button>

                  <div
                    id={`nav-panel-${key}`}
                    data-menu={key}
                    className={`nav-panel${isOpen ? " is-open" : ""}`}
                    aria-hidden={!isOpen}
                    onMouseEnter={clearCloseTimer}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="nav-card">
                      {menu.items.map((item) => (
                        <a
                          key={item}
                          className="nav-card__link"
                          href="#"
                          onClick={handlePlaceholderClick}
                        >
                          <span>{item}</span>
                          <span className="nav-card__arrow" aria-hidden="true">
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              className="nav-link"
              href="/news"
              aria-current={pathname === "/news" ? "page" : undefined}
              onMouseEnter={closeMenu}
              onClick={closeMenu}
            >
              News
            </Link>
          </nav>
        </div>
      </header>

      <div
        className={`nav-scrim${openMenu ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />
    </>
  );
}
