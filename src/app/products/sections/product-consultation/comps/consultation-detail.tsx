import type { LucideIcon } from "lucide-react";

type ConsultationDetailProps = {
  icon: LucideIcon;
  label: string;
};

export function ConsultationDetail({
  icon: Icon,
  label,
}: ConsultationDetailProps) {
  return (
    <div className="flex items-center gap-3 rounded-sm border border-white/15 bg-white/5 px-3.5 py-3">
      <Icon className="size-4 text-brand-flame" aria-hidden="true" />
      <span className="text-[12px] font-bold tracking-[0.07em]">{label}</span>
    </div>
  );
}
