import { CapabilityStep } from "./comps/capability-step";
import { SupplyCapabilityMotion } from "./comps/supply-capability-motion";

const capabilitySteps = [
  {
    index: "01",
    label: "NGUỒN HÀNG",
    title: "Chọn đúng loại than",
    description:
      "Kết nối nguồn Quảng Ninh và đối tác nhập khẩu để duy trì sản lượng ổn định theo kế hoạch đốt.",
    note: "Antraxit • Than cám • Than nhập khẩu",
  },
  {
    index: "02",
    label: "CHỈ TIÊU",
    title: "Kiểm soát từng lô",
    description:
      "Đối chiếu nhiệt trị, độ tro, độ ẩm và lưu huỳnh trước khi xác nhận phương án cấp hàng.",
    note: "Hồ sơ lô • Mẫu than • Biên bản giao nhận",
  },
  {
    index: "03",
    label: "GIAO NHẬN",
    title: "Điều phối đúng tiến độ",
    description:
      "Kết hợp đường bộ và đường thủy, bám lịch nhập kho để hạn chế gián đoạn dây chuyền sản xuất.",
    note: "Từ 10 tấn • Kho phía Nam • Theo ca nhận",
  },
];

export function SupplyCapability() {
  return (
    <section
      id="nang-luc"
      className="bg-coal-dark text-white"
      aria-labelledby="supply-capability-title"
    >
      <SupplyCapabilityMotion>
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="lg:w-[720px]" data-supply-capability-heading>
            <div className="flex items-center gap-3 opacity-0 motion-reduce:opacity-100">
              <span className="font-display text-[13px] font-bold text-ember-light lg:text-sm">
                02
              </span>
              <span className="h-px w-7 bg-ember-light lg:w-10" />
              <p className="text-[11px] font-bold tracking-[0.13em] text-ember-light lg:text-[13px] lg:tracking-[0.24em]">
                NĂNG LỰC CUNG ỨNG
              </p>
            </div>
            <h2
              id="supply-capability-title"
              className="mt-6 font-display text-[33px] font-semibold leading-[1.04] tracking-[-0.02em] opacity-0 motion-reduce:opacity-100 lg:mt-3 lg:text-[46px] lg:leading-[1.08]"
            >
              Mỗi lô than đi qua
              <br />
              ba lớp kiểm soát.
            </h2>
          </div>
          <p
            className="mt-4 max-w-[390px] text-sm leading-[1.55] text-[#c9c1b6] opacity-0 motion-reduce:opacity-100 lg:mt-0 lg:text-base lg:leading-[1.7] lg:text-text-on-dark/65"
            data-supply-capability-intro
          >
            Từ lựa chọn nguồn hàng, xác nhận chỉ tiêu đến điều phối giao nhận —
            cùng một đầu mối chịu trách nhiệm xuyên suốt.
          </p>
        </div>

        <div
          className="mt-5 grid lg:mt-[50px] lg:h-[321px] lg:grid-cols-3"
          data-supply-capability-list
        >
          {capabilitySteps.map((step, index) => (
            <CapabilityStep
              key={step.index}
              {...step}
              revealOrder={index}
            />
          ))}
        </div>
      </SupplyCapabilityMotion>
    </section>
  );
}
