import Image from "next/image";

export function Brand() {
  return (
    <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Than Đá Thái Bình">
      <Image
        src="/images/home/Lb5iP.webp"
        alt=""
        width={44}
        height={44}
        className="size-9 object-contain sm:size-11"
        priority
      />
      <span className="flex flex-col gap-0.5">
        <span className="font-heading text-[12px] font-extrabold tracking-[0.075em] text-coal-dark sm:text-base">
          CÔNG TY THAN ĐÁ THÁI BÌNH
        </span>
        <span className="text-[8px] text-brand-flame sm:text-[11px]">
          Cung cấp than đá Quảng Ninh &amp; Than nhập khẩu
        </span>
      </span>
    </a>
  );
}
