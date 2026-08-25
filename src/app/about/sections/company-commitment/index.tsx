import {
  BadgeCheck,
  Clock3,
  Quote,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

import { CommitmentItem } from "./comps/commitment-item";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Nguồn hàng ổn định",
    description:
      "Chủ động cân đối sản lượng theo lịch vận hành và mức tồn kho an toàn của nhà máy.",
  },
  {
    icon: BadgeCheck,
    title: "Chất lượng rõ ràng",
    description:
      "Thống nhất chỉ tiêu trước khi giao, hỗ trợ kiểm tra và nghiệm thu theo từng lô.",
  },
  {
    icon: TrendingDown,
    title: "Chi phí cạnh tranh",
    description:
      "Tư vấn loại than và phương án phối trộn phù hợp hiệu suất lò và ngân sách nhiên liệu.",
  },
  {
    icon: Clock3,
    title: "Tiến độ có trách nhiệm",
    description:
      "Theo sát điều phối vận chuyển, thông báo sớm và xử lý ngay khi lịch giao thay đổi.",
  },
];

export function CompanyCommitment() {
  return (
    <section
      className="bg-cream-mid text-coal-dark"
      aria-labelledby="company-commitment-title"
    >
      <div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-[52px] lg:h-[620px] lg:grid-cols-[480px_minmax(0,720px)] lg:gap-20 lg:px-20 lg:py-[72px]">
        <blockquote className="flex min-h-[211px] flex-col bg-coal-dark px-6 py-7 text-white lg:h-[476px] lg:px-11 lg:py-11">
          <Quote className="size-5 text-ember-light lg:size-7" aria-hidden="true" />
          <p className="mt-5 font-display text-2xl font-medium leading-[1.15] lg:mt-7 lg:text-4xl lg:leading-[1.2]">
            “Sự ổn định của nguồn nhiên liệu là nhịp đập của một dây chuyền sản
            xuất.”
          </p>
          <footer className="mt-auto text-[8px] font-bold tracking-[0.1125em] text-ember-light lg:text-[9px] lg:tracking-[0.2em]">
            THAN ĐÁ THÁI BÌNH&nbsp; • &nbsp;CAM KẾT CUNG ỨNG
          </footer>
        </blockquote>

        <div>
          <div className="flex items-center gap-3">
            <span className="font-display text-[11px] font-bold text-ember-dark lg:text-xs">
              03
            </span>
            <span className="h-px w-7 bg-ember-dark lg:w-10" />
            <p className="text-[9px] font-bold tracking-[0.13em] text-ember-dark lg:text-[11px] lg:tracking-[0.24em]">
              CAM KẾT CỦA CHÚNG TÔI
            </p>
          </div>
          <h2
            id="company-commitment-title"
            className="mt-6 font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.02em] lg:mt-3 lg:text-[40px] lg:leading-[1.08]"
          >
            Bốn điều giữ vững
            <br />
            trong mọi đơn hàng.
          </h2>

          <div className="mt-6 lg:mt-6">
            {commitments.map((commitment) => (
              <CommitmentItem key={commitment.title} {...commitment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
