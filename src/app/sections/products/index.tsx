import { ArrowUpRight } from "lucide-react";

import { ProductCard } from "./comps/product-card";

const products = [
  {
    tag: "Phổ biến",
    title: "Than cám Quảng Ninh",
    description: "Cỡ hạt mịn, dễ phối trộn và duy trì ngọn lửa ổn định; tối ưu cho lò hơi tầng sôi, xi măng.",
    image: "/images/home/srLoS.webp",
    imageAlt: "Than cám Quảng Ninh",
  },
  {
    tag: "Nhập khẩu",
    title: "Than đá Indonesia",
    description: "Độ bốc cao, dễ bắt lửa và nguồn cung linh hoạt; phù hợp lò hơi cần vận hành liên tục.",
    image: "/images/home/iFjtW.webp",
    imageAlt: "Than đá Indonesia",
  },
  {
    tag: "Cao cấp",
    title: "Than đá Úc",
    description: "Nhiệt trị cao, độ tro được kiểm soát; phù hợp dây chuyền ưu tiên hiệu suất nhiệt và chất lượng ổn định.",
    image: "/images/home/WtDsB.webp",
    imageAlt: "Than đá Úc",
  },
  {
    tag: "Nhập khẩu",
    title: "Than đá Nam Phi",
    description: "Nhiệt trị tốt, cháy ổn định và phù hợp phối trộn; cân bằng hiệu suất vận hành với chi phí nhiên liệu.",
    image: "/images/home/W0IcBk.webp",
    imageAlt: "Than đá Nam Phi",
  },
];

export function Products() {
  return (
    <section id="san-pham" className="bg-cream px-5 py-12 sm:px-8 lg:px-20 lg:py-[72px]" aria-labelledby="products-title">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex items-end justify-between gap-4 lg:mb-10">
          <div>
            <p className="font-alumni-sans text-primary text-xs font-semibold tracking-[0.2em]">SẢN PHẨM</p>
            <h2 id="products-title" className="mt-2 font-heading text-[30px] font-bold leading-tight text-coal-dark sm:text-4xl lg:text-[40px]">Các loại than đá chúng tôi cung cấp</h2>
          </div>
          <a href="#lien-he" className="hidden h-11 shrink-0 items-center gap-2 rounded-sm border border-coal-dark px-7 text-sm font-bold text-coal-dark transition-colors hover:bg-coal-dark hover:text-white sm:flex">
            Nhận báo giá <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-[430px_minmax(0,1fr)]">
          <ProductCard
            featured
            tag="Nội địa"
            title="Than Quảng Ninh"
            description="Than antraxit nhiệt trị cao, cháy bền và ít khói; phù hợp lò hơi, sấy và nung công nghiệp."
            image="/images/home/U8NaVN.webp"
            imageAlt="Than antraxit Quảng Ninh"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {products.map((product) => <ProductCard key={product.title} {...product} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
