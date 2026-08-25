import {
  Building2,
  ChevronDown,
  FileText,
  Home,
  Mail,
  Menu,
  Phone,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

import { Brand } from "./comps/brand";

const navigation = [
  {
    key: "products",
    label: "SẢN PHẨM THAN",
    href: "/#san-pham",
    dropdown: true,
  },
  { key: "about", label: "GIỚI THIỆU", href: "/gioi-thieu" },
  {
    key: "capacity",
    label: "NĂNG LỰC CUNG ỨNG",
    href: "/gioi-thieu#nang-luc",
  },
  {
    key: "pricing",
    label: "BÁO GIÁ & VẬN CHUYỂN",
    href: "/gioi-thieu#lien-he",
  },
  {
    key: "contact",
    label: "LIÊN HỆ",
    href: "/gioi-thieu#lien-he",
  },
];

type SiteHeaderProps = {
  activePage?: "about" | "home";
};

export function SiteHeader({ activePage = "home" }: SiteHeaderProps) {
  const ActiveIcon = activePage === "about" ? Building2 : Home;
  const activeLabel = activePage === "about" ? "GIỚI THIỆU" : "TRANG CHỦ";

  return (
    <header id="top" className="relative z-50 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-3 border-b border-border px-5 sm:px-8 lg:h-[92px] lg:px-20">
        <Brand />

        <div className="hidden items-center gap-3 text-[13px] font-light text-coal-dark lg:flex">
          <a
            href="tel:0908607391"
            className="flex items-center gap-1.5 hover:text-ember-dark"
            aria-label="Gọi Than Đá Thái Bình"
          >
            <PhoneCall className="size-3.5" aria-hidden="true" />
            tel/zalo: 0908607391
          </a>
          <span className="text-cream-dark">|</span>
          <a
            href="mailto:thanthaibinh@gmail.com"
            className="flex items-center gap-1.5 hover:text-ember-dark"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            thanthaibinh@gmail.com
          </a>
        </div>
      </div>

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

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-white [&::-webkit-details-marker]:hidden">
              <span className="text-[9px] font-bold tracking-[0.1em] text-[#beb6ac]">
                MENU
              </span>
              <Menu className="size-[18px]" aria-hidden="true" />
              <span className="sr-only">Mở menu điều hướng</span>
            </summary>
            <nav className="absolute right-0 top-9 w-[min(320px,calc(100vw-40px))] border border-white/10 bg-nav-bg p-3 shadow-xl">
              <Link
                href="/"
                aria-current={activePage === "home" ? "page" : undefined}
                className={`flex items-center gap-2 border-b border-white/10 px-3 py-3 text-xs font-bold tracking-wider ${
                  activePage === "home"
                    ? "text-ember-gold"
                    : "text-text-on-dark"
                }`}
              >
                <Home className="size-4" aria-hidden="true" /> TRANG CHỦ
              </Link>
              {navigation.map((item) => {
                const isActive = item.key === activePage;

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block border-b border-white/10 px-3 py-3 text-xs font-bold tracking-wider last:border-0 ${
                      isActive ? "text-ember-gold" : "text-text-on-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/gioi-thieu#lien-he"
                className="mt-3 flex items-center justify-center gap-2 rounded-sm bg-ember-gold px-4 py-3 text-sm font-bold text-coal-black"
              >
                <FileText className="size-4" aria-hidden="true" /> Nhận báo giá
              </Link>
            </nav>
          </details>
        </div>
      </div>

      <div className="hidden h-14 bg-nav-bg lg:block">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-20">
          <nav className="flex items-center gap-7">
            <Link
              href="/"
              aria-current={activePage === "home" ? "page" : undefined}
              className={`flex items-center gap-1.5 text-[13px] font-bold tracking-[0.06em] transition-colors hover:text-ember-light ${
                activePage === "home" ? "text-ember-gold" : "text-text-on-dark"
              }`}
            >
              <Home className="size-4" aria-hidden="true" /> TRANG CHỦ
            </Link>
            {navigation.map((item) => {
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
                  {item.dropdown ? (
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
    </header>
  );
}
