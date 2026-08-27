import Image from "next/image";
import { Flame } from "lucide-react";

import { ProductsHeroMotion } from "./comps/products-hero-motion";

export function ProductsHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-coal-dark text-white"
      aria-labelledby="products-hero-title"
    >
      <ProductsHeroMotion>
        <div
          className="relative order-2 mt-[18px] h-[220px] overflow-hidden opacity-0 motion-reduce:opacity-100 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-1/2"
          data-products-hero-media
        >
          <Image
            src="/images/products/sSIUF.webp"
            alt="Bãi than công nghiệp với hệ thống băng chuyền"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 720px"
            className="object-cover"
            data-products-hero-image
          />
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,#141210_0%,rgba(20,18,16,0.46)_50%,rgba(20,18,16,0.08)_100%)] lg:block" />
        </div>

        <div className="relative z-10 order-1 lg:absolute lg:top-[76px] lg:left-20 lg:w-[620px]">
          <p
            className="text-[10px] font-bold tracking-[0.18em] text-brand-flame opacity-0 motion-reduce:opacity-100 lg:text-[11px]"
            data-products-hero-reveal
            data-reveal-order="0"
          >
            DANH MỤC THAN ĐÁ CÔNG NGHIỆP
          </p>
          <h1
            id="products-hero-title"
            className="mt-[18px] font-display text-[38px] font-semibold leading-[37px] tracking-[-0.02em] opacity-0 motion-reduce:opacity-100 lg:mt-4 lg:text-[54px] lg:font-normal lg:leading-[53px]"
            data-products-hero-reveal
            data-reveal-order="1"
          >
            Than đá đúng loại.
            <br />
            Lò vận hành đúng nhịp.
          </h1>
          <p
            className="mt-[18px] max-w-[560px] text-sm leading-[22px] text-[#d7d0c6] opacity-0 motion-reduce:opacity-100 lg:mt-4 lg:text-base lg:leading-[25px]"
            data-products-hero-reveal
            data-reveal-order="2"
          >
            Cung cấp than cục Quảng Ninh, Than cám và than nhập khẩu theo đặc
            tính lò, sản lượng tiêu thụ và kế hoạch giao nhận của nhà máy.
          </p>
          <a
            href="tel:0908607391"
            className="mt-[18px] inline-flex items-center gap-2.5 rounded-sm bg-brand-flame px-[18px] py-3.5 text-[10px] font-bold tracking-[0.06em] opacity-0 transition-colors motion-reduce:opacity-100 hover:bg-ember-dark lg:mt-6 lg:px-[22px] lg:text-[11px]"
            data-products-hero-reveal
            data-reveal-order="3"
          >
            <Flame className="size-[17px]" aria-hidden="true" />
            TƯ VẤN CHỌN THAN CHO HỆ LÒ
          </a>
        </div>
      </ProductsHeroMotion>
    </section>
  );
}
