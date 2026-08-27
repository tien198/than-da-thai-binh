import { CalendarClock, Factory, FileText, Gauge } from "lucide-react";

import { ConsultationDetail } from "./comps/consultation-detail";

const consultationDetails = [
  { icon: Factory, label: "01  LOẠI LÒ & CÔNG NGHỆ ĐỐT" },
  { icon: Gauge, label: "02  SẢN LƯỢNG TIÊU THỤ" },
  { icon: CalendarClock, label: "03  LỊCH GIAO DỰ KIẾN" },
];

export function ProductConsultation() {
  return (
    <section
      id="tu-van-chon-than"
      className="bg-coal-dark text-white"
      aria-labelledby="product-consultation-title"
    >
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-[52px] sm:px-8 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center lg:gap-20 lg:px-20 lg:py-16">
        <div>
          <p className="text-[10px] font-bold tracking-[0.16em] text-brand-flame">
            CHƯA CHẮC LOẠI NÀO PHÙ HỢP?
          </p>
          <h2
            id="product-consultation-title"
            className="mt-3 max-w-[650px] font-display text-[32px] leading-[1.08] lg:text-[40px] lg:leading-[43px]"
          >
            Gửi 3 thông tin. Nhận đúng phương án than đá.
          </h2>
          <p className="mt-3.5 max-w-[650px] text-[13px] leading-5 text-[#c9c1b6] lg:text-sm lg:leading-[22px]">
            Loại lò, sản lượng tiêu thụ và lịch giao dự kiến là đủ để đội ngũ
            đề xuất sản phẩm, phương án phối trộn và báo giá than đá phù hợp.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {consultationDetails.map((detail) => (
            <ConsultationDetail key={detail.label} {...detail} />
          ))}
          <a
            href="#lien-he"
            className="flex items-center justify-center gap-2.5 rounded-sm bg-brand-flame px-[18px] py-[15px] text-[11px] font-bold tracking-[0.07em] transition-colors hover:bg-ember-dark"
          >
            <FileText className="size-[17px]" aria-hidden="true" />
            NHẬN TƯ VẤN &amp; BÁO GIÁ
          </a>
        </div>
      </div>
    </section>
  );
}
