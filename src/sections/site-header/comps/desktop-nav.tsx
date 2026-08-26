import { ChevronDown, FileText, Home } from "lucide-react";
import Link from "next/link";

import { type ActivePage, navigationItems } from "./site-header-data";

type DesktopNavProps = {
  activePage: ActivePage;
};

export function DesktopNav({ activePage }: DesktopNavProps) {
  return (
    <div className="hidden h-14 bg-nav-bg lg:block">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-20">
        <nav className="flex items-center gap-7" aria-label="Điều hướng chính">
          <Link
            href="/"
            aria-current={activePage === "home" ? "page" : undefined}
            className={`flex items-center gap-1.5 text-[13px] font-bold tracking-[0.06em] transition-colors hover:text-ember-light ${
              activePage === "home" ? "text-ember-gold" : "text-text-on-dark"
            }`}
          >
            <Home className="size-4" aria-hidden="true" /> TRANG CHỦ
          </Link>

          {navigationItems.map((item) => {
            const isActive = item.key === activePage;

            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-1.5 text-[13px] font-bold tracking-[0.06em] transition-colors hover:text-ember-light ${
                  isActive ? "text-ember-gold" : "text-text-on-dark"
                }`}
              >
                {item.label}
                {"dropdown" in item && item.dropdown ? (
                  <ChevronDown
                    className="size-3.5 text-cream-dark"
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/gioi-thieu#lien-he"
          className="flex h-10 items-center gap-2 rounded-sm bg-ember-gold px-5 text-[13px] font-bold tracking-wide text-coal-black transition-colors hover:bg-ember-light"
        >
          <FileText className="size-3.5" aria-hidden="true" /> Nhận báo giá
        </Link>
      </div>
    </div>
  );
}
