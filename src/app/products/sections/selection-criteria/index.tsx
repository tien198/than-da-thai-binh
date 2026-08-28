import { CalendarClock, Cloudy, ThermometerSun } from "lucide-react";

import { SelectionCriterion } from "./comps/selection-criterion";
import { SelectionCriteriaMotion } from "./comps/selection-criteria-motion";

const criteria = [
  {
    icon: ThermometerSun,
    label: "NHIỆT LƯỢNG",
    description: "Phù hợp tải nhiệt và chu kỳ đốt",
  },
  {
    icon: Cloudy,
    label: "TRO & ĐỘ ẨM",
    description: "Kiểm soát theo yêu cầu vận hành",
  },
  {
    icon: CalendarClock,
    label: "LỊCH GIAO",
    description: "Bám tồn kho và ca nhận hàng",
  },
];

export function SelectionCriteria() {
  return (
    <section
      className="border-y border-border bg-cream-mid"
      aria-labelledby="selection-criteria-title"
    >
      <SelectionCriteriaMotion>
        <div
          className="opacity-0 motion-reduce:opacity-100"
          data-selection-criteria-reveal
          data-reveal-order="0"
        >
          <p className="text-[11px] font-bold tracking-[0.16em] text-ember-dark">
            CHỌN THEO HỆ LÒ
          </p>
          <h2
            id="selection-criteria-title"
            className="mt-3 font-display text-[29px] font-semibold leading-tight text-coal-dark lg:mt-1 lg:text-3xl lg:font-normal"
          >
            Không chỉ chọn theo tên than.
          </h2>
        </div>

        {criteria.map((criterion, index) => (
          <SelectionCriterion
            key={criterion.label}
            {...criterion}
            revealOrder={index + 1}
          />
        ))}
      </SelectionCriteriaMotion>
    </section>
  );
}
