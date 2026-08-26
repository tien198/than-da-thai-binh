import Image from "next/image";

import { AboutHeroMotion } from "./comps/about-hero-motion";
import { ProvenanceLedger } from "./comps/provenance-ledger";

export function AboutHero() {
  return (
    <section
      id="gioi-thieu"
      className="relative isolate h-[620px] overflow-hidden bg-coal-black text-white"
      aria-labelledby="about-hero-title"
    >
      <AboutHeroMotion>
        <div
          className="absolute inset-0 opacity-0 motion-reduce:opacity-100 lg:left-[38.8889%]"
          data-about-hero-media
        >
          <Image
            src="/images/about/Lu79c.webp"
            alt="Bãi than và đoàn xe vận chuyển tại khu công nghiệp"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 880px"
            className="object-cover object-center"
            data-about-hero-image
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,13,13,0.45)_0%,rgba(13,13,13,0.98)_75%,#0d0d0d_100%)] lg:bg-[linear-gradient(to_right,#0d0d0d_0%,rgba(13,13,13,0.96)_34%,rgba(13,13,13,0.4)_68%,rgba(13,13,13,0.2)_100%)]" />

        <div className="absolute inset-x-5 top-16 lg:left-20 lg:right-auto lg:top-[76px] lg:w-[650px]">
          <div
            className="mb-3 h-0.5 w-[42px] bg-ember-light lg:mb-0 lg:hidden"
            data-about-hero-rule
          />
          <div className="flex items-center gap-3">
            <span
              className="hidden h-px w-9 bg-ember-light lg:block"
              data-about-hero-rule
            />
            <p
              className="text-[9px] font-bold leading-none tracking-[0.17em] text-ember-light opacity-0 motion-reduce:opacity-100 lg:text-xs lg:tracking-[0.25em]"
              data-about-hero-reveal
              data-reveal-order="0"
            >
              VỀ CHÚNG TÔI
            </p>
          </div>

          <h1
            id="about-hero-title"
            className="mt-3 font-display text-[38px] font-semibold leading-[0.98] tracking-[-0.025em] opacity-0 motion-reduce:opacity-100 lg:mt-5 lg:text-[58px] lg:leading-[1.03]"
            data-about-hero-reveal
            data-reveal-order="1"
          >
            Công ty TNHH
            <br />
            Than Đá Thái Bình
          </h1>

          <p
            className="mt-3 font-display text-sm leading-[1.35] text-ember-light opacity-0 motion-reduce:opacity-100 lg:mt-5 lg:font-body lg:text-lg lg:font-semibold"
            data-about-hero-reveal
            data-reveal-order="2"
          >
            “Đốt sáng niềm tin, thắp lửa thành công.”
          </p>
          <p
            className="mt-2 max-w-[560px] text-[13px] leading-[1.5] text-[#d9d2c8] opacity-0 motion-reduce:opacity-100 lg:mt-5 lg:text-[15px] lg:leading-[1.65] lg:text-text-on-dark/80"
            data-about-hero-reveal
            data-reveal-order="3"
          >
            Đối tác cung cấp than đá Quảng Ninh và than nhập khẩu cho nhà máy,
            xí nghiệp khu vực phía Nam — ổn định nguồn hàng, rõ ràng chất lượng,
            đúng tiến độ giao nhận.
          </p>
        </div>

        <div className="absolute inset-x-5 bottom-7 lg:inset-x-20 lg:bottom-9">
          <ProvenanceLedger />
        </div>
      </AboutHeroMotion>
    </section>
  );
}
