import type { LucideIcon } from "lucide-react";

type CommitmentItemProps = {
  description: string;
  icon: LucideIcon;
  title: string;
};

export function CommitmentItem({
  description,
  icon: Icon,
  title,
}: CommitmentItemProps) {
  return (
    <article className="grid grid-cols-[34px_minmax(0,1fr)] gap-x-3 border-t border-cream-dark py-4 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-x-6 lg:py-[17px]">
      <span className="grid size-[34px] place-items-center bg-white lg:hidden">
        <Icon className="size-4 text-ember-dark" aria-hidden="true" />
      </span>
      <h3 className="font-display text-[15px] font-semibold leading-[1.2] text-coal-dark lg:text-lg">
        {title}
      </h3>
      <p className="col-start-2 mt-0.5 text-[11px] leading-[1.4] text-text-muted lg:mt-0 lg:text-[13px] lg:leading-[1.55]">
        {description}
      </p>
    </article>
  );
}
