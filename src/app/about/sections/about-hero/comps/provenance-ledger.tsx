const provenanceItems = [
  { value: "1995", label: "KHỞI NGUỒN" },
  { value: "10+", label: "NĂM KINH NGHIỆM" },
  { value: "500+", label: "KHÁCH HÀNG" },
  {
    value: "5",
    label: (
      <>
        LOẠI THAN <span className="hidden lg:inline">ĐÁ </span>CHẤT LƯỢNG CAO
      </>
    ),
  },
];

export function ProvenanceLedger() {
  return (
    <dl
      className="grid h-[156px] grid-cols-2 border border-white/15 bg-coal-black/80 opacity-0 motion-reduce:opacity-100 lg:h-24 lg:grid-cols-4 lg:bg-coal-dark/90"
      data-about-hero-ledger
    >
      {provenanceItems.map((item, index) => (
        <div
          key={item.value}
          className={[
            "flex flex-col justify-center px-4 opacity-0 motion-reduce:opacity-100",
            index < 2 ? "border-b border-white/15 lg:border-b-0" : "",
            index % 2 === 0 ? "border-r border-white/15" : "",
            index === 1 ? "lg:border-r" : "",
            index === 2 ? "lg:border-r" : "",
          ].join(" ")}
          data-about-hero-ledger-item
          data-reveal-order={index}
        >
          <dt className="order-2 mt-0.5 text-[8px] font-semibold leading-[1.2] tracking-[0.0875em] text-[#beb6ac] lg:mt-0 lg:text-[10px] lg:font-bold lg:leading-[1.4] lg:tracking-[0.18em] lg:text-text-on-dark/65">
            {item.label}
          </dt>
          <dd className="order-1 font-display text-xl font-bold text-ember-light lg:text-[28px] lg:font-semibold lg:leading-[1.2]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
