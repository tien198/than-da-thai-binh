import type { Product } from "../product-data";
import { ProductBody } from "./product-body";
import { ProductIntro } from "./product-intro";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="flex min-w-0 flex-col items-start gap-4">
      <ProductIntro product={product} />
      <ProductBody product={product} />
    </div>
  );
}
