const stats = [
  ["10+", "Năm kinh nghiệm"],
  ["10 tấn +", "Năng lực cung ứng"],
  ["500+", "Khách hàng"],
  ["5 Loại", "Than chất lượng cao"],
];

export function Stats() {
  return (
    <section className="border-y border-border bg-cream-mid" aria-label="Thống kê năng lực">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 py-6 sm:px-8 lg:grid-cols-4 lg:px-20 lg:py-9">
        {stats.map(([value, label], index) => (
          <div key={label} className="relative flex min-h-[72px] flex-col justify-center border-border px-4 first:pl-0 even:border-l lg:min-h-[58px] lg:border-l lg:px-10 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0">
            <strong className="font-heading text-[26px] leading-none text-coal-dark lg:text-[32px]">{value}</strong>
            <span className="mt-1.5 text-xs font-medium text-text-muted lg:text-[13px]">{label}</span>
            {index < 2 ? <span className="absolute inset-x-0 bottom-0 h-px bg-border lg:hidden" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
