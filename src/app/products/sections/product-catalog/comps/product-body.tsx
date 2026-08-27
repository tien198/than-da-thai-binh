import { ArrowUpRight } from "lucide-react";

import type { Product } from "../product-data";

type ProductBodyProps = {
  product: Product;
};

export function ProductBody({ product }: ProductBodyProps) {
  const specifications = [
    ["NGUỒN GỐC", product.origin],
    ["ĐIỂM MẠNH", product.strength],
    ["PHÙ HỢP", product.suitable],
  ] as const;

  return (
    <div className="flex w-full min-w-0 flex-col items-start gap-4">
      <p className="text-[13px] leading-5 text-text-muted lg:text-sm lg:leading-[22px]">
        {product.description}
      </p>
      <dl className="grid w-full grid-cols-3 border-y border-border">
        {specifications.map(([label, value], index) => (
          <div
            key={label}
            className={`min-w-0 py-3.5 ${index > 0 ? "border-l border-border pl-3 lg:pl-5" : "pr-3 lg:pr-5"}`}
          >
            <dt className="text-[8px] font-bold tracking-[0.1em] text-text-muted lg:text-[9px]">
              {label}
            </dt>
            <dd className="mt-1 text-[11px] font-semibold leading-4 text-coal-dark lg:text-xs">
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <a
        href="#lien-he"
        className="group inline-flex items-center gap-2 rounded-sm bg-coal-dark px-[18px] py-3 text-[10px] font-bold tracking-[0.07em] text-white transition-colors hover:bg-brand-flame"
      >
        NHẬN THÔNG SỐ LÔ &amp; BÁO GIÁ
        <ArrowUpRight
          className="size-3.5 text-brand-flame transition-colors group-hover:text-white"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
