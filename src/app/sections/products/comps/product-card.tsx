import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  description: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
};

function QuoteLink() {
  return (
    <a
      href="#lien-he"
      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ember-gold"
    >
      Nhận báo giá <ArrowUpRight className="size-3.5" aria-hidden="true" />
    </a>
  );
}

export function ProductCard({
  description,
  featured = false,
  image,
  imageAlt,
  tag,
  title,
}: ProductCardProps) {
  if (featured) {
    return (
      <article className="overflow-hidden rounded-sm border border-border bg-white lg:relative lg:row-span-2 lg:h-[540px] lg:border-0 lg:bg-coal-dark">
        <div className="relative h-[196px] lg:absolute lg:inset-0 lg:h-auto">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1023px) 100vw, 430px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-coal-dark/25 lg:bg-[linear-gradient(180deg,rgba(13,13,13,0.05),rgba(13,13,13,0.9))]" />
          <span className="absolute left-4 top-4 rounded-sm bg-ember-gold px-2.5 py-1 text-[11px] font-bold text-coal-dark lg:left-[30px] lg:top-[30px]">
            {tag}
          </span>
        </div>
        <div className="relative p-5 lg:absolute lg:inset-x-[30px] lg:bottom-[30px] lg:p-0">
          <h3 className="font-heading text-2xl font-semibold text-coal-dark lg:text-[30px] lg:text-white">
            {title}
          </h3>
          <p className="mt-2 text-[13px] leading-[1.55] text-text-muted lg:text-sm lg:text-white/80">
            {description}
          </p>
          <div className="mt-4">
            <QuoteLink />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex min-h-[146px] overflow-hidden rounded-sm border border-border bg-white lg:h-[260px]">
      <div className="relative w-[118px] shrink-0 lg:w-[150px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1023px) 118px, 150px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-4 lg:p-5">
        <span className="w-fit rounded-sm bg-cream-mid px-2 py-1 text-[10px] font-semibold text-ember-dark lg:text-[11px]">
          {tag}
        </span>
        <h3 className="mt-2 font-heading text-base font-semibold text-coal-dark lg:text-[17px]">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-[11px] leading-[1.45] text-text-muted lg:mt-2 lg:text-xs">
          {description}
        </p>
        <div className="mt-auto pt-2">
          <QuoteLink />
        </div>
      </div>
    </article>
  );
}
