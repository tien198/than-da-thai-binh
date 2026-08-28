import type { Product } from "../product-data";
import { ProductBody } from "./product-body";
import { ProductDetails } from "./product-details";
import { ProductImage } from "./product-image";
import { ProductIntro } from "./product-intro";
import { ProjectGallery } from "./project-gallery";

type ProductSectionProps = {
  index: number;
  product: Product;
};

export function ProductSection({ index, product }: ProductSectionProps) {
  const copyFirst = index % 2 === 1;
  const headingId = `product-${product.number}-title`;

  return (
    <section
      className={`overflow-hidden ${index % 2 === 0 ? "bg-white" : "bg-cream-mid"}`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-[1440px] px-5 py-[52px] sm:px-8 lg:px-20 lg:py-16">
        <div className="flex flex-col gap-[17px] lg:hidden">
          <div className="flex flex-col gap-[17px]">
            <ProductIntro headingId={headingId} product={product} />
          </div>
          <div>
            <ProductImage product={product} />
          </div>
          {index === 0 ? (
            <div>
              <ProjectGallery variant="mobile" />
            </div>
          ) : null}
          <div>
            <ProductBody product={product} />
          </div>
        </div>
        <div className="hidden items-center gap-8 lg:grid lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-[72px]">
          <div className={copyFirst ? "lg:order-2" : undefined}>
            <ProductImage product={product} />
          </div>
          <div className={copyFirst ? "lg:order-1" : undefined}>
            <ProductDetails product={product} />
          </div>
        </div>
        {index === 0 ? (
          <div className="hidden lg:block">
            <ProjectGallery variant="desktop" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
