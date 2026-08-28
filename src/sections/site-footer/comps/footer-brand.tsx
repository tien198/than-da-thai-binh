import Image from "next/image";

export function FooterBrand() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Về đầu trang">
      <Image src="/images/home/Lb5iP.webp" alt="" width={44} height={44} className="size-11 object-contain" />
      <span className="flex flex-col gap-0.5">
        <span className="font-heading text-lg font-extrabold tracking-[0.075em] text-coal-dark">CÔNG TY THAN ĐÁ THÁI BÌNH</span>
        <span className="text-[13px] text-brand-flame">Cung cấp than đá Quảng Ninh &amp; Than nhập khẩu</span>
      </span>
    </a>
  );
}
