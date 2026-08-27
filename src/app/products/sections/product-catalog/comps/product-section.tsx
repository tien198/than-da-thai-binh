import type { Product } from "../product-data";
import { ProductBody } from "./product-body";
import { ProductDetails } from "./product-details";
import { ProductImage } from "./product-image";
import { ProductIntro } from "./product-intro";
import { ProductSectionMotion } from "./product-section-motion";
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
      <ProductSectionMotion index={index}>
        <div className="flex flex-col gap-[17px] lg:hidden">
          <div
            className="flex flex-col gap-[17px] opacity-0 motion-reduce:opacity-100"
            data-product-section-mobile-item
          >
            <ProductIntro headingId={headingId} product={product} />
          </div>
          <div
            className="opacity-0 motion-reduce:opacity-100"
            data-product-section-mobile-item
          >
            <ProductImage product={product} />
          </div>
          {index === 0 ? (
            <div
              className="opacity-0 motion-reduce:opacity-100"
              data-product-section-mobile-item
            >
              <ProjectGallery variant="mobile" />
            </div>
          ) : null}
          <div
            className="opacity-0 motion-reduce:opacity-100"
            data-product-section-mobile-item
          >
            <ProductBody product={product} />
          </div>
        </div>
        <div className="hidden items-center gap-8 lg:grid lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-[72px]">
          <div
            className={`opacity-0 motion-reduce:opacity-100 ${copyFirst ? "lg:order-2" : ""}`}
            data-product-section-media
          >
            <ProductImage product={product} />
          </div>
          <div
            className={`opacity-0 motion-reduce:opacity-100 ${copyFirst ? "lg:order-1" : ""}`}
            data-product-section-copy
          >
            <ProductDetails product={product} />
          </div>
        </div>
        {index === 0 ? (
          <div
            className="hidden opacity-0 motion-reduce:opacity-100 lg:block"
            data-product-section-gallery
          >
            <ProjectGallery variant="desktop" />
          </div>
        ) : null}
      </ProductSectionMotion>
    </section>
  );
}
