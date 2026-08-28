import { ChevronDown, FileText, Home } from "lucide-react";

import { cn } from "@/lib/utils";

import { NavLink } from "./nav-link";
import { aboutRouteAliases, navigationItems } from "./site-header-data";

const navigationLinkClassName = ({ isActive }: { isActive: boolean }) =>
  cn(
    "flex items-center gap-1.5 text-[15px] font-bold tracking-[0.06em] transition-colors hover:text-ember-light",
    isActive ? "text-ember-gold" : "text-text-on-dark",
  );

export function DesktopNav() {
  return (
    <div className="hidden h-14 bg-nav-bg lg:block">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-20">
        <nav className="flex items-center gap-7" aria-label="Điều hướng chính">
          <NavLink
            href="/"
            end
            className={navigationLinkClassName}
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
              className={navigationLinkClassName}
            >
              {item.label}
              {"dropdown" in item && item.dropdown ? (
                <ChevronDown
                  className="size-3.5 text-cream-dark"
                  aria-hidden="true"
                />
              ) : null}
            </NavLink>
          ))}
        </nav>

        <NavLink
          href="/gioi-thieu#lien-he"
          activePathnames={aboutRouteAliases}
          className="flex h-10 items-center gap-2 rounded-sm bg-ember-gold px-5 text-[15px] font-bold tracking-wide text-coal-black transition-colors hover:bg-ember-light"
        >
          <FileText className="size-3.5" aria-hidden="true" /> Nhận báo giá
        </NavLink>
      </div>
    </div>
  );
}
