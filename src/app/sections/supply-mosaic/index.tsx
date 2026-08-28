import { ArrowUpRight } from "lucide-react";

import { SupplyMosaicMotion } from "./comps/supply-mosaic-motion";
import { SupplyTile } from "./comps/supply-tile";

const tileLabel = "text-[11px] font-bold tracking-[0.16em] text-brand-flame lg:text-[13px]";

export function SupplyMosaic() {
  return (
    <section id="nang-luc" className="bg-cream-mid px-5 py-12 sm:px-8 lg:px-20 lg:py-[72px]" aria-labelledby="supply-title">
      <SupplyMosaicMotion>
        <div data-supply-heading className="mb-8 flex flex-col justify-between gap-5 lg:mb-10 lg:flex-row lg:items-end">
          <div className="max-w-[820px]">
            <p className="text-sm font-bold tracking-[0.2em] text-ember-dark">NĂNG LỰC CUNG ỨNG</p>
            <h2 id="supply-title" className="mt-2 font-heading text-[32px] font-semibold leading-[1.08] text-coal-dark sm:text-5xl lg:text-[44px]">
              Nguồn than phù hợp cho từng hệ lò
            </h2>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.6] text-text-muted lg:text-[17px]">
              Từ than nội địa đến nguồn nhập khẩu, chúng tôi kiểm soát nhiệt lượng, độ tro và tiến độ giao theo kế hoạch vận hành của nhà máy.
            </p>
          </div>
          <div className="shrink-0 border-l-2 border-ember-gold pl-4 lg:border-0 lg:pl-0 lg:text-right">
            <strong className="block font-heading text-[26px] leading-none text-coal-black lg:text-[28px]">10.000+ TẤN</strong>
            <span className="mt-1.5 block text-sm text-text-muted">năng lực cung ứng mỗi tháng</span>
          </div>
        </div>

        <div data-supply-grid className="grid grid-cols-2 gap-2.5 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-4">
          <div className="flex flex-col gap-2.5 lg:gap-4">
            <SupplyTile
              image="/images/home/p5dm87.webp"
              alt="Bãi than Quảng Ninh"
              revealOrder={0}
              className="h-60 lg:h-[328px]"
              overlayClassName="bg-[linear-gradient(180deg,rgba(17,16,14,0.08),rgba(17,16,14,0.92))]"
              contentClassName="inset-x-3 bottom-4 lg:inset-x-7 lg:bottom-11"
            >
              <p className={tileLabel}>NGUỒN NỘI ĐỊA</p>
              <h3 className="mt-2 font-heading text-2xl font-semibold leading-[1.05] text-white lg:text-[29px]">
                Than Quảng Ninh
                <span className="block">ổn định quanh năm</span>
              </h3>
            </SupplyTile>

            <SupplyTile
              image="/images/home/ZZbby.webp"
              alt="Vận chuyển than đường bộ"
              revealOrder={2}
              className="h-[140px] lg:h-48"
              overlayClassName="bg-coal-dark/70"
              contentClassName="inset-x-3 top-4 lg:inset-x-7 lg:top-7"
            >
              <p className={tileLabel}>GIAO NHẬN LINH HOẠT</p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-white lg:text-[28px]">Đường bộ • Đường thủy</h3>
              <p className="mt-2 hidden text-[15px] text-ember-light lg:block">Điều phối theo lịch nhập kho và mức tồn an toàn.</p>
            </SupplyTile>
          </div>

          <div className="flex flex-col gap-2.5 lg:gap-4">
            <SupplyTile
              image="/images/home/O4XKhZ.webp"
              alt="Tàu vận chuyển nguồn than nhập khẩu"
              revealOrder={1}
              className="h-[140px] lg:h-44"
              overlayClassName="bg-[linear-gradient(90deg,rgba(17,16,14,0.95),rgba(17,16,14,0.08))]"
              contentClassName="inset-x-3 top-4 lg:left-7 lg:top-7"
            >
              <p className={tileLabel}>NGUỒN NHẬP KHẨU</p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-white lg:text-[31px]">Indonesia • Úc • Nam Phi</h3>
              <p className="mt-1 hidden text-[15px] text-ember-light lg:block">Dải nhiệt lượng đa dạng, hồ sơ xuất xứ rõ ràng.</p>
            </SupplyTile>

            <SupplyTile
              image="/images/home/VOXoW.webp"
              alt="Than đá được kiểm soát theo từng lô"
              revealOrder={3}
              className="h-60 lg:h-[344px]"
              overlayClassName="bg-[linear-gradient(180deg,rgba(17,16,14,0.12),rgba(17,16,14,0.9))]"
              contentClassName="inset-x-3 bottom-4 lg:inset-x-8 lg:bottom-8"
            >
              <p className={tileLabel}>KIỂM SOÁT THEO LÔ</p>
              <h3 className="mt-2 font-heading text-xl font-semibold leading-tight text-white lg:text-[34px]">Đúng nhiệt lượng. Đúng tiến độ.</h3>
              <p className="mt-2 hidden text-base text-ember-light lg:block">Tư vấn phối trộn theo lò hơi, nghiệm thu chỉ tiêu trước khi giao.</p>
              <a href="#lien-he" className="mt-4 inline-flex items-center gap-2 rounded-sm bg-ember-gold px-3 py-2 text-[11px] font-bold tracking-wider text-coal-black lg:px-[18px] lg:py-3 lg:text-[13px]">
                YÊU CẦU BÁO GIÁ <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </SupplyTile>
          </div>
        </div>
      </SupplyMosaicMotion>
    </section>
  );
}
