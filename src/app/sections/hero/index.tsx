import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[560px] overflow-hidden bg-cream lg:h-[620px]"
      aria-labelledby="hero-title"
    >
      <Image
        src="/images/home/L6UQEa.webp"
        alt="Bãi than và hệ thống băng tải công nghiệp"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center] lg:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(247,245,240,0.98)_0%,rgba(247,245,240,0.9)_38%,rgba(247,245,240,0.2)_72%,rgba(247,245,240,0.88)_100%)] lg:bg-[linear-gradient(90deg,rgba(247,245,240,0.98)_0%,rgba(247,245,240,0.92)_34%,rgba(247,245,240,0.12)_72%,rgba(247,245,240,0.84)_100%)]" />

      <div className="mx-auto flex min-h-[560px] max-w-[1440px] items-center px-5 py-16 sm:px-8 lg:h-full lg:px-20 lg:py-0">
        <div className="max-w-[700px]">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-0.5 w-8 bg-ember-dark" />
            <p className="text-[13px] font-semibold tracking-[0.23em] text-ember-dark sm:text-sm">
              NHÀ CUNG CẤP THAN ĐÁ UY TÍN
            </p>
          </div>
          <h1
            id="hero-title"
            className="font-alumni-sans text-[44px] font-bold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-[58px]"
          >
            <span className="block text-coal-dark">THAN QUẢNG NINH</span>
            <span className="font-alumni-sans text-primary block">
              CHẤT LƯỢNG CAO
            </span>
          </h1>
          <p className="mt-5 max-w-[600px] text-[16px] leading-[1.65] text-coal-dark sm:text-lg">
            <strong className="font-bold">CÔNG TY THAN ĐÁ THÁI BÌNH</strong>{" "}
            chuyên cung cấp than đá Quảng Ninh chất lượng cao khu vực phía Nam.
            Phục vụ các nhà máy, xí nghiệp và doanh nghiệp sản xuất — đáp ứng
            đơn hàng từ 10 tấn trở lên.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#lien-he"
              className="flex h-[52px] items-center justify-center gap-2 rounded-sm bg-ember-gold px-9 text-[17px] font-bold text-coal-black transition-colors hover:bg-ember-light"
            >
              <FileText className="size-4" aria-hidden="true" /> Nhận báo giá
              ngay
            </a>
            <Link
              href="/san-pham"
              className="flex h-12 items-center justify-center gap-2 rounded-sm border-[1.5px] border-coal-dark bg-white px-8 text-[17px] font-semibold text-coal-dark transition-colors hover:bg-cream-mid"
            >
              Xem sản phẩm <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
