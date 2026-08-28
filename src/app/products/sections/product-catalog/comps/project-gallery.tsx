import Image from "next/image";

const galleryItems = [
  {
    src: "/images/home/2aOboQu0iuXFa5dm2YfRn3GkjParmeZH24SlZ2VU.jpg",
    title: "Góc nhìn tổng thể",
    description: "Toàn cảnh than cục Quảng Ninh tại kho.",
    layout: "row-span-2 lg:col-span-5 lg:row-span-2",
  },
  {
    src: "/images/home/2aOboQu0iib9JWH4MjTxf25cx5Qc1JnDgF3r8te4.jpg",
    title: "Chất than đồng đều",
    description: "Bề mặt chắc, màu đen tự nhiên và ổn định.",
    layout: "lg:col-span-4 lg:row-span-1",
  },
  {
    src: "/images/home/2aOboQu0ih1ssg3JYyiO1Rz2eJENSObvqEtGfXXc.jpg",
    title: "Kích thước tuyển chọn",
    description: "Phân loại rõ ràng cho từng nhu cầu sử dụng.",
    layout: "row-span-2 lg:col-span-3 lg:row-span-1",
  },
  {
    src: "/images/home/2aOboQu0imc1LApc6pZh51UWgv0n9uS1GGWHeNv6.jpg",
    title: "Sẵn sàng giao nhận",
    description: "Nguồn hàng được chuẩn bị và kiểm soát kỹ.",
    layout: "lg:col-span-7 lg:row-span-1",
  },
] as const;

type ProjectGalleryProps = {
  variant: "desktop" | "mobile";
};

export function ProjectGallery({ variant }: ProjectGalleryProps) {
  return (
    <div className={variant === "desktop" ? "lg:mt-9" : undefined}>
      {variant === "mobile" ? (
        <p className="mb-2.5 text-[11px] font-bold tracking-[0.13em] text-ember-gold">
          HÌNH ẢNH THỰC TẾ
        </p>
      ) : (
        <div className="mb-3 flex items-center gap-3 text-[12px] font-bold tracking-[0.12em]">
          <span className="text-brand-flame">THAN QUẢNG NINH</span>
          <span className="h-px w-8 bg-ember-gold" aria-hidden="true" />
          <span className="text-text-muted">04 ẢNH</span>
        </div>
      )}

      <div className="grid auto-rows-[104px] grid-flow-dense grid-cols-2 gap-2.5 sm:auto-rows-[140px] lg:auto-rows-[142px] lg:grid-cols-12 lg:gap-3">
        {galleryItems.map((item, index) => (
          <article
            key={item.src}
            className={`group relative overflow-hidden rounded-md border border-cream-dark bg-coal-dark ${item.layout}`}
          >
            <Image
              src={item.src}
              alt={`Kho và nguồn than Quảng Ninh ${index + 1}`}
              fill
              sizes="(max-width: 1023px) 50vw, 42vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coal-black/90 via-coal-black/55 to-transparent px-3 pt-9 pb-3 sm:px-4 sm:pt-12 sm:pb-4">
              <div className="flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-bold leading-tight text-white sm:text-base lg:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 hidden text-xs leading-4 text-cream sm:block lg:text-sm">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 font-display text-xs font-bold text-brand-flame sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
