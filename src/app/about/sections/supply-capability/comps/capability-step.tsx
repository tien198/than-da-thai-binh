type CapabilityStepProps = {
  description: string;
  index: string;
  label: string;
  note: string;
  revealOrder: number;
  title: string;
};

export function CapabilityStep({
  description,
  index,
  label,
  note,
  revealOrder,
  title,
}: CapabilityStepProps) {
  return (
    <article
      className="grid grid-cols-[28px_minmax(0,1fr)] border-t border-white/15 py-5 opacity-0 motion-reduce:opacity-100 lg:grid-cols-[1fr_auto] lg:border-l lg:px-8 lg:py-[26px] lg:first:border-l-0"
      data-supply-capability-step
      data-reveal-order={revealOrder}
    >
      <span
        className="row-span-4 pt-5 font-display text-[15px] font-bold text-ember-light opacity-0 motion-reduce:opacity-100 lg:row-auto lg:pt-0 lg:text-sm lg:font-semibold"
        data-supply-capability-accent
      >
        {index}
      </span>
      <span className="col-start-2 text-[8px] font-bold leading-none tracking-[0.125em] text-[#91877b] lg:col-start-auto lg:text-[9px] lg:tracking-[0.2em] lg:text-text-on-dark/55">
        {label}
      </span>
      <h3 className="col-start-2 mt-1 font-display text-[19px] font-semibold text-white lg:col-span-2 lg:col-start-1 lg:mt-8 lg:text-[26px] lg:font-medium">
        {title}
      </h3>
      <p className="col-start-2 mt-1 text-[11px] leading-[1.45] text-[#c9c1b6] lg:col-span-2 lg:col-start-1 lg:mt-2 lg:text-sm lg:leading-[1.65] lg:text-text-on-dark/70">
        {description}
      </p>
      <p
        className="col-start-2 mt-1 text-[9px] font-semibold leading-[1.3] text-ember-light opacity-0 motion-reduce:opacity-100 lg:col-span-2 lg:col-start-1 lg:mt-7 lg:text-[11px] lg:leading-[1.5]"
        data-supply-capability-accent
      >
        {note}
      </p>
    </article>
  );
}
