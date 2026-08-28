import Link from "next/link";

const stats = [
  ["10+", "Năm kinh nghiệm"],
  ["10 tấn +", "Năng lực cung ứng"],
  ["500+", "Khách hàng"],
  ["5 Loại", "Than chất lượng cao", "/san-pham"],
];

export function Stats() {
  return (
    <section
      className="border-y border-border bg-cream-mid"
      aria-label="Thống kê năng lực"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 py-6 sm:px-8 lg:grid-cols-4 lg:px-20 lg:py-9">
        {stats.map(([value, label, href], index) =>
          href ? (
            <Link href={href} key={index}>
              <StateItem label={label} value={value} />
            </Link>
          ) : (
            <StateItem label={label} value={value} key={index} />
          ),
        )}
      </div>
    </section>
  );
}

function StateItem({ label, value }: { label: string; value: string }) {
  return (
    <div
      key={label}
      className="relative flex min-h-[72px] flex-col justify-center border-border px-4 even:border-l lg:min-h-[58px] lg:border-l lg:px-10 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
    >
      <em className="font-heading text-[28px] leading-none text-coal-dark lg:text-[34px]">
        {value}
      </em>
      <span className="mt-1.5 text-sm font-medium text-text-muted lg:text-[15px]">
        {label}
      </span>
    </div>
  );
}
