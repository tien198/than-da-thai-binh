import type { LucideIcon } from "lucide-react";

type FeatureItemProps = {
  description: string;
  icon: LucideIcon;
  title: string;
};

export function FeatureItem({ description, icon: Icon, title }: FeatureItemProps) {
  return (
    <article className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-border text-ember-gold">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="font-heading text-[17px] font-light text-coal-dark">{title}</h3>
        <p className="mt-1 text-[13px] leading-[1.5] text-text-muted">{description}</p>
      </div>
    </article>
  );
}
