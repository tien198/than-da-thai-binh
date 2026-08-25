import { ArrowUpRight } from "lucide-react";

import { SupplyTile } from "./comps/supply-tile";

const tileLabel = "text-[9px] font-bold tracking-[0.16em] text-brand-flame lg:text-[11px]";

export function SupplyMosaic() {
  return (
    <section id="nang-luc" className="bg-cream-mid px-5 py-12 sm:px-8 lg:px-20 lg:py-[72px]" aria-labelledby="supply-title">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:mb-10 lg:flex-row lg:items-end">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold tracking-[0.2em] text-ember-dark">NĂNG LỰC CUNG ỨNG</p>
            <h2 id="supply-title" className="mt-2 font-heading text-[30px] font-semibold leading-[1.08] text-coal-dark sm:text-4xl lg:text-[42px]">
              Nguồn than phù hợp cho từng hệ lò
            </h2>
            <p className="mt-3 max-w-[820px] text-[13px] leading-[1.6] text-text-muted lg:text-[15px]">
              Từ than nội địa đến nguồn nhập khẩu, chúng tôi kiểm soát nhiệt lượng, độ tro và tiến độ giao theo kế hoạch vận hành của nhà máy.
            </p>
          </div>
          <div className="shrink-0 border-l-2 border-ember-gold pl-4 lg:border-0 lg:pl-0 lg:text-right">
            <strong className="block font-heading text-[24px] leading-none text-coal-black lg:text-[26px]">10.000+ TẤN</strong>
            <span className="mt-1.5 block text-xs text-text-muted">năng lực cung ứng mỗi tháng</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-4">
          <div className="flex flex-col gap-2.5 lg:gap-4">
            <SupplyTile
              image="/images/home/p5dm87.webp"
              alt="Bãi than Quảng Ninh"
              className="h-60 lg:h-[328px]"
              overlayClassName="bg-[linear-gradient(180deg,rgba(17,16,14,0.08),rgba(17,16,14,0.92))]"
              contentClassName="inset-x-3 bottom-4 lg:inset-x-7 lg:bottom-11"
            >
              <p className={tileLabel}>NGUỒN NỘI ĐỊA</p>
              <h3 className="mt-2 font-heading text-xl font-semibold leading-[1.05] text-white lg:text-[27px]">
                Than Quảng Ninh
                <span className="block">ổn định quanh năm</span>
              </h3>
            </SupplyTile>

            <SupplyTile
              image="/images/home/ZZbby.webp"
              alt="Vận chuyển than đường bộ"
              className="h-[140px] lg:h-48"
              overlayClassName="bg-coal-dark/70"
              contentClassName="inset-x-3 top-4 lg:inset-x-7 lg:top-7"
            >
              <p className={tileLabel}>GIAO NHẬN LINH HOẠT</p>
              <h3 className="mt-2 font-heading text-base font-semibold text-white lg:text-[26px]">Đường bộ • Đường thủy</h3>
              <p className="mt-2 hidden text-[13px] text-ember-light lg:block">Điều phối theo lịch nhập kho và mức tồn an toàn.</p>
            </SupplyTile>
          </div>

          <div className="flex flex-col gap-2.5 lg:gap-4">
            <SupplyTile
              image="/images/home/O4XKhZ.webp"
              alt="Tàu vận chuyển nguồn than nhập khẩu"
              className="h-[140px] lg:h-44"
              overlayClassName="bg-[linear-gradient(90deg,rgba(17,16,14,0.95),rgba(17,16,14,0.08))]"
              contentClassName="inset-x-3 top-4 lg:left-7 lg:top-7"
            >
              <p className={tileLabel}>NGUỒN NHẬP KHẨU</p>
              <h3 className="mt-2 font-heading text-base font-semibold text-white lg:text-[29px]">Indonesia • Úc • Nam Phi</h3>
              <p className="mt-1 hidden text-[13px] text-ember-light lg:block">Dải nhiệt lượng đa dạng, hồ sơ xuất xứ rõ ràng.</p>
            </SupplyTile>

            <SupplyTile
              image="/images/home/VOXoW.webp"
              alt="Than đá được kiểm soát theo từng lô"
              className="h-60 lg:h-[344px]"
              overlayClassName="bg-[linear-gradient(180deg,rgba(17,16,14,0.12),rgba(17,16,14,0.9))]"
              contentClassName="inset-x-3 bottom-4 lg:inset-x-8 lg:bottom-8"
            >
              <p className={tileLabel}>KIỂM SOÁT THEO LÔ</p>
              <h3 className="mt-2 font-heading text-lg font-semibold leading-tight text-white lg:text-[32px]">Đúng nhiệt lượng. Đúng tiến độ.</h3>
              <p className="mt-2 hidden text-sm text-ember-light lg:block">Tư vấn phối trộn theo lò hơi, nghiệm thu chỉ tiêu trước khi giao.</p>
              <a href="#lien-he" className="mt-4 inline-flex items-center gap-2 rounded-sm bg-ember-gold px-3 py-2 text-[9px] font-bold tracking-wider text-coal-black lg:px-[18px] lg:py-3 lg:text-[11px]">
                YÊU CẦU BÁO GIÁ <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </SupplyTile>
          </div>
        </div>
      </div>
    </section>
  );
}
