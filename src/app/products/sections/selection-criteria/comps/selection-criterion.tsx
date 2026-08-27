import type { LucideIcon } from "lucide-react";

type SelectionCriterionProps = {
  description: string;
  icon: LucideIcon;
  label: string;
  revealOrder: number;
};

export function SelectionCriterion({
  description,
  icon: Icon,
  label,
  revealOrder,
}: SelectionCriterionProps) {
  return (
    <article
      className="flex items-center gap-3 border-b border-cream-dark py-5 opacity-0 motion-reduce:opacity-100 last:border-b-0 lg:border-0 lg:py-0"
      data-selection-criteria-reveal
      data-reveal-order={revealOrder}
    >
      <span className="grid size-[38px] shrink-0 place-items-center text-ember-dark lg:rounded-sm lg:border lg:border-border">
        <Icon className="size-5 lg:size-[17px]" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-[9px] font-bold tracking-[0.09em] text-coal-dark">
          {label}
        </h3>
        <p className="mt-0.5 text-[11px] leading-[15px] text-text-muted">
          {description}
        </p>
      </div>
    </article>
  );
}
