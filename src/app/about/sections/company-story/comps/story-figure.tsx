import Image from "next/image";

export function StoryFigure() {
  return (
    <figure className="overflow-hidden rounded-[2px] bg-coal-dark text-text-on-dark lg:rounded-none">
      <div className="relative h-[238px] lg:h-[476px]">
        <Image
          src="/images/about/rEdTA.webp"
          alt="Khu vực tập kết và kiểm tra chất lượng than"
          fill
          sizes="(max-width: 1023px) calc(100vw - 40px), 680px"
          className="object-cover"
        />
      </div>
      <figcaption className="flex h-[76px] flex-col justify-center px-4 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <span>
          <span className="block text-[8px] font-bold leading-[1.1] tracking-[0.14em] text-ember-light lg:text-[9px] lg:tracking-[0.2em]">
            TUYẾN CUNG ỨNG
          </span>
          <span className="mt-0.5 block text-[10px] leading-[1.35] text-white lg:text-[13px] lg:font-semibold">
            Quảng Ninh&nbsp; → &nbsp;Kho trung chuyển&nbsp; → &nbsp;Nhà máy phía Nam
          </span>
          <span className="mt-0.5 block text-[8px] font-semibold text-[#91877b] lg:hidden">
            TD•TB / 1945
          </span>
        </span>
        <span className="hidden font-display text-[13px] font-semibold tracking-[0.15em] text-text-on-dark/55 lg:block">
          TD•TB / 1945
        </span>
      </figcaption>
    </figure>
  );
}
