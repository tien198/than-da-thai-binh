import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ProductCardActionsProps = {
  featured?: boolean;
};

function QuoteLink() {
  return (
    <a
      href="#lien-he"
      className="inline-flex items-center gap-1.5 text-[15px] font-bold text-ember-gold"
    >
      Nhận báo giá <ArrowUpRight className="size-3.5" aria-hidden="true" />
    </a>
  );
}

function ProductDetailsLink({ featured = false }: ProductCardActionsProps) {
  return (
    <Link
      href="/san-pham"
      className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-flame ${
        featured ? "text-coal-dark lg:text-white/75" : "text-coal-dark"
      }`}
    >
      Xem chi tiết
      <ArrowRight className="size-3" aria-hidden="true" />
    </Link>
  );
}

export function ProductCardActions({
  featured = false,
}: ProductCardActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <QuoteLink />
      <ProductDetailsLink featured={featured} />
    </div>
  );
}
