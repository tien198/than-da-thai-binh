"use client";

import { useRouter } from "next/navigation";
import {
  type MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { DesktopNav } from "./comps/desktop-nav";
import { HeaderTopBar } from "./comps/header-top-bar";
import { MobileNav } from "./comps/mobile-nav";
import type {
  ActivePage,
  MobileMenuState,
} from "./comps/site-header-data";

type SiteHeaderProps = {
  activePage?: ActivePage;
};

export function SiteHeader({ activePage = "home" }: SiteHeaderProps) {
  const router = useRouter();
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [menuState, setMenuState] = useState<MobileMenuState>("closed");
  const isMenuVisible = menuState !== "closed";

  const finishClosing = useCallback(
    (destination?: string) => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      closeTimerRef.current = setTimeout(
        () => {
          setMenuState("closed");
          closeTimerRef.current = null;

          if (destination) {
            router.push(destination);
          }
        },
        reduceMotion ? 0 : 300,
      );
    },
    [router],
  );

  const closeMenu = useCallback(
    (destination?: string) => {
      if (menuState !== "open") return;

      setMenuState("closing");
      finishClosing(destination);
    },
    [finishClosing, menuState],
  );

  const handleNavigation = useCallback(
    (
      event: ReactMouseEvent<HTMLAnchorElement>,
      destination: string,
    ) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      closeMenu(destination);
    },
    [closeMenu],
  );

  useEffect(() => {
    if (!isMenuVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isMenuVisible]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    },
    [],
  );

  return (
    <header id="top" className="relative z-50 bg-white">
      <HeaderTopBar />
      <MobileNav
        activePage={activePage}
        isMenuVisible={isMenuVisible}
        menuState={menuState}
        onClose={closeMenu}
        onNavigate={handleNavigation}
        onOpen={() => setMenuState("open")}
      />
      <DesktopNav activePage={activePage} />
    </header>
  );
}
