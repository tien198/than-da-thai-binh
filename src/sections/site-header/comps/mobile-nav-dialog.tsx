import { FileText, Home, X } from "lucide-react";
import type { MouseEvent as ReactMouseEvent } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";

import { NavLink } from "./nav-link";
import {
  aboutRouteAliases,
  type MobileMenuState,
  navigationItems,
} from "./site-header-data";

type MobileNavDialogProps = {
  menuState: MobileMenuState;
  onClose: () => void;
  onNavigate: (
    event: ReactMouseEvent<HTMLAnchorElement>,
    destination: string,
  ) => void;
};

export function MobileNavDialog({
  menuState,
  onClose,
  onNavigate,
}: MobileNavDialogProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] overflow-y-auto bg-nav-bg motion-reduce:animate-none ${
        menuState === "closing"
          ? "animate-out fade-out slide-out-to-left animation-duration-300 ease-in"
          : "animate-in fade-in slide-in-from-left animation-duration-300 ease-out"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu điều hướng"
    >
      <div className="flex h-[72px] items-center justify-between gap-3 border-b border-border bg-white px-5 sm:px-8">
        <BrandLogo />
        <button
          type="button"
          onClick={onClose}
          className="grid size-10 shrink-0 place-items-center text-coal-dark"
          aria-label="Đóng menu điều hướng"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="flex min-h-[calc(100dvh-72px)] flex-col px-5 py-6 sm:px-8"
        aria-label="Điều hướng di động"
      >
        <NavLink
          href="/"
          end
          onClick={(event) => onNavigate(event, "/")}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-2 border-b border-white/10 px-3 py-4 text-sm font-bold tracking-wider",
              isActive ? "text-ember-gold" : "text-text-on-dark",
            )
          }
        >
          <Home className="size-4" aria-hidden="true" /> TRANG CHỦ
        </NavLink>

        {navigationItems.map((item) => (
          <NavLink
            key={item.key}
            href={item.href}
            activePathnames={
              item.href.startsWith("/gioi-thieu")
                ? aboutRouteAliases
                : undefined
            }
            end
            onClick={(event) => onNavigate(event, item.href)}
            className={({ isActive }) =>
              cn(
                "block border-b border-white/10 px-3 py-4 text-sm font-bold tracking-wider last:border-0",
                isActive ? "text-ember-gold" : "text-text-on-dark",
              )
            }
          >
            {item.label}
          </NavLink>
        ))}

        <NavLink
          href="/gioi-thieu#lien-he"
          activePathnames={aboutRouteAliases}
          onClick={(event) => onNavigate(event, "/gioi-thieu#lien-he")}
          className="mt-auto flex items-center justify-center gap-2 rounded-sm bg-ember-gold px-4 py-3 text-sm font-bold text-coal-black"
        >
          <FileText className="size-4" aria-hidden="true" /> Nhận báo giá
        </NavLink>
      </nav>
    </div>
  );
}
