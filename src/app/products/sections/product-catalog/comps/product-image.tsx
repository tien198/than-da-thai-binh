import Image from "next/image";

import type { Product } from "../product-data";

type ProductImageProps = {
  product: Product;
};

export function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="relative aspect-[13/9] w-full overflow-hidden rounded-sm">
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        sizes="(max-width: 1023px) calc(100vw - 40px), 520px"
        className="object-cover"
      />
    </div>
  );
}
