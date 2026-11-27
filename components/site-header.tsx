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
  const [displayMenu, setDisplayMenu] = useState<MenuKey>("about");
  const [pinned, setPinned] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelAnimation = useRef<Animation | null>(null);
  const panelFallback = useRef<number | null>(null);

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
      setDisplayMenu(key);
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
    setDisplayMenu(key);
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

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const panelEl = panel;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const card = panel.firstElementChild as HTMLElement | null;
    const isOpen = openMenu !== null;
    const targetHeight = isOpen
      ? (card?.getBoundingClientRect().height ?? panel.scrollHeight)
      : 0;
    const currentHeight = panel.getBoundingClientRect().height;

    panelAnimation.current?.cancel();

    if (panelFallback.current !== null) {
      window.clearTimeout(panelFallback.current);
      panelFallback.current = null;
    }

    if (reduceMotion || Math.abs(targetHeight - currentHeight) < 1) {
      panel.style.height = `${targetHeight}px`;
      return;
    }

    const animation = panel.animate(
      [{ height: `${currentHeight}px` }, { height: `${targetHeight}px` }],
      {
        duration: 240,
        easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
        fill: "forwards",
      },
    );

    panelAnimation.current = animation;

    function settle() {
      if (panelAnimation.current !== animation) {
        return;
      }

      panelEl.style.height = `${targetHeight}px`;
      panelAnimation.current = null;
      animation.cancel();

      if (panelFallback.current !== null) {
        window.clearTimeout(panelFallback.current);
        panelFallback.current = null;
      }
    }

    panelFallback.current = window.setTimeout(settle, 360);
    animation.onfinish = settle;
  }, [openMenu, displayMenu]);

  useEffect(() => {
    return () => {
      panelAnimation.current?.cancel();

      if (panelFallback.current !== null) {
        window.clearTimeout(panelFallback.current);
      }
    };
  }, []);

  return (
    <>
      <header
        className={`site-header${openMenu ? " is-expanded" : ""}`}
        ref={headerRef}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={scheduleClose}
      >
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
                >
                  <button
                    type="button"
                    className="nav-trigger"
                    aria-expanded={isOpen}
                    aria-controls="nav-panel"
                    onClick={() => handleTriggerClick(key)}
                  >
                    {menu.label}
                  </button>
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

        <div
          id="nav-panel"
          ref={panelRef}
          className={`nav-panel${openMenu ? " is-open" : ""}`}
          aria-hidden={!openMenu}
          inert={!openMenu}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
        >
          <div className="nav-card">
            <div className="nav-card__inner">
              <ul className="nav-card__links">
                {MENUS[displayMenu].items.map((item) => (
                  <li key={item}>
                    <a
                      className="nav-card__link"
                      href="#"
                      onClick={handlePlaceholderClick}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
