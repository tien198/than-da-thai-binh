import { Building2, Home, Menu } from "lucide-react";
import Link from "next/link";
import type { MouseEvent as ReactMouseEvent } from "react";

import { MobileNavDialog } from "./mobile-nav-dialog";
import type { ActivePage, MobileMenuState } from "./site-header-data";

type MobileNavProps = {
  activePage: ActivePage;
  isMenuVisible: boolean;
  menuState: MobileMenuState;
  onClose: (destination?: string) => void;
  onNavigate: (
    event: ReactMouseEvent<HTMLAnchorElement>,
    destination: string,
  ) => void;
  onOpen: () => void;
};

export function MobileNav({
  activePage,
  isMenuVisible,
  menuState,
  onClose,
  onNavigate,
  onOpen,
}: MobileNavProps) {
  const ActiveIcon = activePage === "about" ? Building2 : Home;
  const activeLabel = activePage === "about" ? "GIỚI THIỆU" : "TRANG CHỦ";

  return (
    <div className="h-[52px] bg-nav-bg lg:hidden">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <Link
          href={activePage === "about" ? "/gioi-thieu" : "/"}
          aria-current="page"
          className="flex items-center gap-2 text-[11px] font-bold tracking-[0.08em] text-white"
        >
          <ActiveIcon
            className="size-[15px] text-brand-flame"
            aria-hidden="true"
          />
          {activeLabel}
        </Link>

        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuVisible}
          onClick={onOpen}
          className="flex items-center gap-2 text-white"
        >
          <span className="text-[9px] font-bold tracking-[0.1em] text-[#beb6ac]">
            MENU
          </span>
          <Menu className="size-[18px]" aria-hidden="true" />
          <span className="sr-only">Mở menu điều hướng</span>
        </button>

        {isMenuVisible ? (
          <MobileNavDialog
            activePage={activePage}
            menuState={menuState}
            onClose={onClose}
            onNavigate={onNavigate}
          />
        ) : null}
      </div>
    </div>
  );
}
