import {
  Award,
  Headphones,
  ShieldCheck,
  TrendingDown,
  Truck,
  Zap,
} from "lucide-react";
import Image from "next/image";

import { FeatureItem } from "./comps/feature-item";

const leftFeatures = [
  {
    icon: ShieldCheck,
    title: "Nguồn Cung Ổn Định",
    description: "Cam kết nguồn hàng dồi dào, liên tục từ mỏ Quảng Ninh và các đối tác nhập khẩu uy tín.",
  },
  {
    icon: Award,
    title: "Chất Lượng Kiểm Định",
    description: "Từng lô than được đo lường nhiệt trị, độ ẩm, độ tro và lưu huỳnh chuẩn xác theo yêu cầu lò đốt.",
  },
  {
    icon: TrendingDown,
    title: "Giá Cả Cạnh Tranh",
    description: "Phân phối trực tiếp không qua trung gian, mang lại giải pháp chi phí nhiên liệu tối ưu nhất.",
  },
];

const rightFeatures = [
  {
    icon: Truck,
    title: "Đáp Ứng Trên 10 Tấn",
    description: "Linh hoạt từ các xưởng sản xuất vừa và nhỏ đến hợp đồng cung ứng hàng ngàn tấn cho KCN.",
  },
  {
    icon: Zap,
    title: "Tiến Độ Nhanh Chóng",
    description: "Đội ngũ xe tải và phương tiện chuyên dụng giao hàng đúng hẹn, đảm bảo số lượng tuyệt đối.",
  },
  {
    icon: Headphones,
    title: "Tư Vấn Kỹ Thuật Đốt",
    description: "Chuyên viên am hiểu sâu về lò hơi, hỗ trợ lựa chọn đúng loại than phù hợp công nghệ lò.",
  },
];

export function WhyUs() {
  return (
    <section id="gioi-thieu" className="bg-white px-5 py-12 sm:px-8 lg:px-20 lg:py-20" aria-labelledby="why-us-title">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[11px] font-bold tracking-[0.21em] text-ember-dark sm:text-xs sm:tracking-[0.25em]">TIÊU CHÍ HOẠT ĐỘNG &amp; NĂNG LỰC CUNG ỨNG</p>
          <h2 id="why-us-title" className="mt-2 font-heading text-[28px] font-bold leading-tight text-coal-dark sm:text-4xl">Tại sao các nhà máy tin chọn Than Đá Thái Bình?</h2>
          <p className="mt-2 text-[13px] leading-[1.55] text-text-muted sm:text-[15px]">Cam kết nguồn cung ổn định, chất lượng kiểm định và dịch vụ vận chuyển nhanh chóng cho mọi doanh nghiệp sản xuất.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:mx-auto lg:mt-12 lg:max-w-[1204px] lg:grid-cols-3 lg:items-center">
          <div className="order-2 flex flex-col gap-8 lg:order-none">
            {leftFeatures.map((feature) => <FeatureItem key={feature.title} {...feature} />)}
          </div>

          <div className="order-1 relative h-[300px] overflow-hidden rounded-lg border border-border bg-cream lg:order-none lg:h-[480px]">
            <Image
              src="/images/home/MEy4z.webp"
              alt="Bãi tập kết than sẵn sàng cung ứng"
              fill
              sizes="(max-width: 1023px) 100vw, (max-width: 1439px) calc((100vw - 224px) / 3), 380px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-coal-dark/35" />
            <div className="absolute inset-x-5 bottom-5 rounded-md bg-coal-dark/90 px-4 py-3">
              <p className="text-[11px] font-bold tracking-[0.15em] text-ember-gold">ĐƠN HÀNG TỪ 10 TẤN TRỞ LÊN</p>
              <p className="mt-1 text-[13px] font-light text-white">Giao tận kho các nhà máy khu vực phía Nam</p>
            </div>
          </div>

          <div className="order-3 flex flex-col gap-8 lg:order-none">
            {rightFeatures.map((feature) => <FeatureItem key={feature.title} {...feature} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
