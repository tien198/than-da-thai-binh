import { Mail, PhoneCall } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";

export function HeaderTopBar() {
  return (
    <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-3 border-b border-border px-5 sm:px-8 lg:h-[92px] lg:px-20">
      <BrandLogo />

      <div className="hidden items-center gap-3 text-base font-base text-coal-dark lg:flex">
        <a
          href="tel:0908607391"
          className="group flex items-center gap-1.5 text-ember-dark"
          aria-label="Gọi Than Đá Thái Bình"
        >
          <PhoneCall
            className="size-3.5 transition-colors duration-300 group-hover:text-brand-flame"
            aria-hidden="true"
          />
          <span className="phone-text-shimmer">tel/zalo: 0908607391</span>
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
  );
}
