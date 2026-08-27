import type { Metadata } from "next";

import { ProductCatalog } from "./sections/product-catalog";
// import { ProductConsultation } from "./sections/product-consultation";
import { ProductsHero } from "./sections/products-hero";
import { SelectionCriteria } from "./sections/selection-criteria";

export const metadata: Metadata = {
  title: "Sản phẩm than đá | Than Đá Thái Bình",
  description:
    "Danh mục than cục Quảng Ninh, than cám và than nhập khẩu cho lò hơi, lò nung và dây chuyền sản xuất công nghiệp.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <SelectionCriteria />
      <ProductCatalog />
      {/* <ProductConsultation /> */}
    </>
  );
}
