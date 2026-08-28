"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  type CarouselOptions,
} from "@/texcra-lib/ui/carousel";
import { cn } from "@/utilities/ui";

const galleryItems = [
  {
    src: "/images/home/2aOboQu0iuXFa5dm2YfRn3GkjParmeZH24SlZ2VU.jpg",
    title: "Góc nhìn tổng thể",
    description: "Toàn cảnh than cục Quảng Ninh tại kho.",
  },
  {
    src: "/images/home/2aOboQu0iib9JWH4MjTxf25cx5Qc1JnDgF3r8te4.jpg",
    title: "Chất than đồng đều",
    description: "Bề mặt chắc, màu đen tự nhiên và ổn định.",
  },
  {
    src: "/images/home/2aOboQu0ih1ssg3JYyiO1Rz2eJENSObvqEtGfXXc.jpg",
    title: "Kích thước tuyển chọn",
    description: "Phân loại rõ ràng cho từng nhu cầu sử dụng.",
  },
  {
    src: "/images/home/2aOboQu0imc1LApc6pZh51UWgv0n9uS1GGWHeNv6.jpg",
    title: "Sẵn sàng giao nhận",
    description: "Nguồn hàng được chuẩn bị và kiểm soát kỹ.",
  },
] as const;

const mobileCarouselOptions = {
  loop: false,
} satisfies CarouselOptions;

type ProjectGalleryProps = {
  variant: "desktop" | "mobile";
};

function MobileProjectGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    updateSelectedIndex();
    api.on("select", updateSelectedIndex);
    api.on("reInit", updateSelectedIndex);

    return () => {
      api.off("select", updateSelectedIndex);
      api.off("reInit", updateSelectedIndex);
    };
  }, [api]);

  return (
    <div className="flex flex-col gap-2.5" data-project-gallery-mobile>
      <p className="text-[11px] font-bold tracking-[0.13em] text-ember-gold">
        HÌNH ẢNH THỰC TẾ
      </p>

      <Carousel
        aria-label="Hình ảnh thực tế than cục Quảng Ninh"
        opts={mobileCarouselOptions}
        setApi={setApi}
      >
        <CarouselContent>
          {galleryItems.map((item, index) => {
            const isSelected = index === selectedIndex;

            return (
              <CarouselItem
                key={item.src}
                aria-label={`${index + 1} / ${galleryItems.length}: ${item.title}`}
                className="basis-[min(316px,calc(100%_-_20px))]"
              >
                <article
                  className={cn(
                    "h-full overflow-hidden rounded-lg border border-[#0069a84d] transition-[background-color,opacity] duration-300",
                    isSelected
                      ? "bg-transparent opacity-100"
                      : "bg-coal-dark opacity-50",
                  )}
                >
                  <div className="relative h-[170px] overflow-hidden rounded-t-lg">
                    <Image
                      src={item.src}
                      alt={`Kho và nguồn than Quảng Ninh ${index + 2}`}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 56px), 300px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 px-6 pt-[18px] pb-6">
                    <h3 className="font-display text-xl font-bold leading-[21px] text-brand-flame">
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-[17px] transition-colors duration-300",
                        isSelected ? "text-text-muted" : "text-cream",
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselDots
          aria-label="Chọn hình ảnh"
          className="mt-4 h-2 gap-2 [&_[data-slot=carousel-dot]]:!h-1 [&_[data-slot=carousel-dot]]:!w-1.5 [&_[data-slot=carousel-dot]]:!bg-text-muted [&_[data-slot=carousel-dot][aria-current=true]]:!w-5 [&_[data-slot=carousel-dot][aria-current=true]]:!bg-coal-dark"
        />
      </Carousel>

      <div className="flex items-center gap-[7px] text-[12px] text-[#7a7168]">
        <MoveHorizontal
          className="size-[13px] text-ember-gold"
          aria-hidden="true"
        />
        <span>Vuốt hoặc dùng mũi tên để xem ảnh</span>
      </div>
    </div>
  );
}

function DesktopProjectGallery() {
  return (
    <div className="lg:mt-9">
      <div className="mb-3 flex items-center gap-3 text-[12px] font-bold tracking-[0.12em]">
        <span className="text-brand-flame">THAN QUẢNG NINH</span>
        <span className="h-px w-8 bg-ember-gold" aria-hidden="true" />
        <span className="text-text-muted">04 ẢNH</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {galleryItems.map((item, index) => (
          <div
            key={item.src}
            className="relative aspect-[1.64/1] overflow-hidden rounded-sm border border-cream-dark first:border-2 first:border-brand-flame"
          >
            <Image
              src={item.src}
              alt={`Kho và nguồn than Quảng Ninh ${index + 2}`}
              fill
              sizes="308px"
              className="object-cover"
            />
            <span className="absolute right-2 bottom-2 grid size-6 place-items-center bg-coal-black/80 font-display text-[13px] font-bold text-brand-flame">
              0{index + 2}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectGallery({ variant }: ProjectGalleryProps) {
  return variant === "mobile" ? (
    <MobileProjectGallery />
  ) : (
    <DesktopProjectGallery />
  );
}
