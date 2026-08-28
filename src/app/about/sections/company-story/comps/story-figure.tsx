import Image from "next/image";

export function StoryFigure() {
  return (
    <figure
      className="overflow-hidden rounded-[2px] bg-coal-dark text-text-on-dark opacity-0 motion-reduce:opacity-100 lg:rounded-none"
      data-company-story-figure
    >
      <div className="relative h-[238px] lg:h-[476px]">
        <Image
          src="/images/about/rEdTA.webp"
          alt="Khu vực tập kết và kiểm tra chất lượng than"
          fill
          sizes="(max-width: 1023px) calc(100vw - 40px), 680px"
          className="object-cover"
          data-company-story-image
        />
      </div>
      <figcaption
        className="flex h-[76px] flex-col justify-center px-4 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:px-6"
        data-company-story-caption
      >
        <span
          className="opacity-0 motion-reduce:opacity-100"
          data-company-story-caption-part
        >
          <span className="block text-[10px] font-bold leading-[1.1] tracking-[0.14em] text-ember-light lg:text-[11px] lg:tracking-[0.2em]">
            TUYẾN CUNG ỨNG
          </span>
          <span className="mt-0.5 block text-[12px] leading-[1.35] text-white lg:text-[15px] lg:font-semibold">
            Quảng Ninh&nbsp; → &nbsp;Kho trung chuyển&nbsp; → &nbsp;Nhà máy phía
            Nam
          </span>
          <span className="mt-0.5 block text-[10px] font-semibold text-[#91877b] lg:hidden">
            TD•TB / 1995
          </span>
        </span>
        <span
          className="hidden font-display text-[15px] font-semibold tracking-[0.15em] text-text-on-dark/55 opacity-0 motion-reduce:opacity-100 lg:block"
          data-company-story-caption-part
        >
          TD•TB / 1995
        </span>
      </figcaption>
    </figure>
  );
}
