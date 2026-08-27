import type { Product } from "../product-data";

type ProductIntroProps = {
  headingId?: string;
  product: Product;
};

export function ProductIntro({ headingId, product }: ProductIntroProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="font-display text-[13px] font-bold text-brand-flame">
          {product.number}
        </span>
        <span className="h-px w-7 bg-ember-gold" aria-hidden="true" />
        <span className="text-[9px] font-bold tracking-[0.14em] text-ember-dark">
          {product.tag}
        </span>
      </div>
      <h2
        id={headingId}
        className="font-display text-[32px] font-semibold leading-[1.06] text-coal-dark lg:text-[38px] lg:font-normal"
      >
        {product.title}
      </h2>
      <p className="font-display text-xl font-medium leading-[1.25] text-ember-dark lg:text-[23px] lg:leading-[1.17]">
        {product.promise}
      </p>
    </>
  );
}
