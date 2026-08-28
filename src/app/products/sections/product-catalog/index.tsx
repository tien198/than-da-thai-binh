import { ProductSection } from "./comps/product-section";
import { products } from "./product-data";

export function ProductCatalog() {
  return (
    <>
      <section
        className="bg-cream"
        aria-labelledby="product-catalog-title"
      >
        <div className="mx-auto max-w-[1440px] px-5 pt-[52px] pb-9 sm:px-8 lg:px-20 lg:pt-[72px] lg:pb-[52px]">
          <p className="text-[12px] font-bold tracking-[0.18em] text-brand-flame">
            05 DÒNG THAN ĐÁ
          </p>
          <h2
            id="product-catalog-title"
            className="mt-2 max-w-[780px] font-display text-[34px] leading-[1.08] text-coal-dark lg:text-[42px] lg:leading-[43px]"
          >
            Một lựa chọn rõ ràng cho từng bài toán đốt.
          </h2>
          <p className="mt-2 max-w-[720px] text-[15px] leading-5 text-text-muted lg:text-base lg:leading-[21px]">
            Mỗi sản phẩm dưới đây tập trung vào một lợi ích vận hành. Chỉ tiêu
            thực tế được xác nhận theo từng lô hàng trước khi báo giá.
          </p>
        </div>
      </section>

      {products.map((product, index) => (
        <ProductSection key={product.title} product={product} index={index} />
      ))}
    </>
  );
}
