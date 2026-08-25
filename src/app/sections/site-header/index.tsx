import {
  ChevronDown,
  FileText,
  Home,
  Mail,
  Menu,
  PhoneCall,
} from "lucide-react";

import { Brand } from "./comps/brand";

const navigation = [
  { label: "SẢN PHẨM THAN", href: "#san-pham", dropdown: true },
  { label: "GIỚI THIỆU", href: "#gioi-thieu" },
  { label: "NĂNG LỰC CUNG ỨNG", href: "#nang-luc" },
  { label: "BÁO GIÁ & VẬN CHUYỂN", href: "#lien-he" },
  { label: "LIÊN HỆ", href: "#lien-he" },
];

export function SiteHeader() {
  return (
    <header id="top" className="relative z-50 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between border-b border-border px-5 sm:px-8 lg:h-[92px] lg:px-20">
        <Brand />

        <div className="hidden items-center gap-3 text-[13px] font-light text-coal-dark lg:flex">
          <a href="tel:0908607391" className="flex items-center gap-1.5 hover:text-ember-dark">
            <PhoneCall className="size-3.5" aria-hidden="true" />
            tel/zalo: 0908607391
          </a>
          <span className="text-cream-dark">|</span>
          <a href="mailto:thanthaibinh@gmail.com" className="flex items-center gap-1.5 hover:text-ember-dark">
            <Mail className="size-3.5" aria-hidden="true" />
            thanthaibinh@gmail.com
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-sm bg-nav-bg text-white [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Mở menu</span>
            <Menu className="size-5" aria-hidden="true" />
          </summary>
          <nav className="absolute right-0 top-12 w-[min(320px,calc(100vw-40px))] border border-white/10 bg-nav-bg p-3 shadow-xl">
            <a href="#top" className="flex items-center gap-2 border-b border-white/10 px-3 py-3 text-xs font-bold tracking-wider text-ember-gold">
              <Home className="size-4" aria-hidden="true" /> TRANG CHỦ
            </a>
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="block border-b border-white/10 px-3 py-3 text-xs font-bold tracking-wider text-text-on-dark last:border-0">
                {item.label}
              </a>
            ))}
            <a href="#lien-he" className="mt-3 flex items-center justify-center gap-2 rounded-sm bg-ember-gold px-4 py-3 text-sm font-bold text-coal-black">
              <FileText className="size-4" aria-hidden="true" /> Nhận báo giá
            </a>
          </nav>
        </details>
      </div>

      <div className="hidden h-14 bg-nav-bg lg:block">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-20">
          <nav className="flex items-center gap-7">
            <a href="#top" className="flex items-center gap-1.5 text-[13px] font-bold tracking-[0.06em] text-ember-gold">
              <Home className="size-4" aria-hidden="true" /> TRANG CHỦ
            </a>
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-1.5 text-[13px] font-bold tracking-[0.06em] text-text-on-dark transition-colors hover:text-ember-light">
                {item.label}
                {item.dropdown ? <ChevronDown className="size-3.5 text-cream-dark" aria-hidden="true" /> : null}
              </a>
            ))}
          </nav>
          <a href="#lien-he" className="flex h-10 items-center gap-2 rounded-sm bg-ember-gold px-5 text-[13px] font-bold tracking-wide text-coal-black transition-colors hover:bg-ember-light">
            <FileText className="size-3.5" aria-hidden="true" /> Nhận báo giá
          </a>
        </div>
      </div>
    </header>
  );
}
