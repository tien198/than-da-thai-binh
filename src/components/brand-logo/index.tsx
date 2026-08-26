import Image from "next/image";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Link
      href="/"
      className="flex min-w-0 items-center gap-3"
      aria-label="Than Đá Thái Bình"
    >
      <Image
        src="/images/home/Lb5iP.webp"
        alt=""
        width={44}
        height={44}
        className="size-9 shrink-0 object-contain sm:size-11"
        priority
      />
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate font-heading text-base font-semibold tracking-[0.075em] text-coal-dark sm:text-base">
          CÔNG TY THAN ĐÁ THÁI BÌNH
        </span>
        <span className="truncate text-[10px] text-ember-gold sm:text-[11px]">
          Cung cấp than đá Quảng Ninh &amp; Than nhập khẩu
        </span>
      </span>
    </Link>
  );
}
