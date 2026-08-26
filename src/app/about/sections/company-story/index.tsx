import { StoryFigure } from "./comps/story-figure";
import { CompanyStoryMotion } from "./comps/company-story-motion";

export function CompanyStory() {
  return (
    <section
      className="bg-cream text-coal-dark"
      aria-labelledby="company-story-title"
    >
      <CompanyStoryMotion>
        <div className="lg:mt-4">
          <div
            className="flex items-center gap-3 opacity-0 motion-reduce:opacity-100"
            data-company-story-reveal
            data-reveal-order="0"
          >
            <span className="font-display text-[11px] font-bold text-ember-dark lg:text-xs">
              01
            </span>
            <span className="h-px w-7 bg-ember-dark lg:w-10" />
            <p className="text-[9px] font-bold tracking-[0.13em] text-ember-dark lg:text-[11px] lg:tracking-[0.24em]">
              CÂU CHUYỆN DOANH NGHIỆP
            </p>
          </div>

          <h2
            id="company-story-title"
            className="mt-[22px] font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.02em] opacity-0 motion-reduce:opacity-100 lg:mt-[22px] lg:text-[46px] lg:leading-[1.08]"
            data-company-story-reveal
            data-reveal-order="1"
          >
            Từ nguồn than tin cậy
            <br />
            đến ngọn lửa sản xuất.
          </h2>
          <p
            className="mt-4 text-[13px] font-semibold leading-[1.5] opacity-0 motion-reduce:opacity-100 lg:mt-[22px] lg:text-[17px] lg:leading-[1.6]"
            data-company-story-reveal
            data-reveal-order="2"
          >
            Than Đá Thái Bình được xây dựng để giải quyết một việc rất cụ thể:
            giúp nhà máy luôn có đúng loại than, đúng chất lượng và đúng thời
            điểm cần đốt.
          </p>
          <p
            className="mt-4 text-xs leading-[1.55] text-text-muted opacity-0 motion-reduce:opacity-100 lg:mt-[22px] lg:text-sm lg:leading-[1.75]"
            data-company-story-reveal
            data-reveal-order="3"
          >
            Khởi nguồn từ năm 1995, doanh nghiệp chuyên cung cấp than đá Quảng
            Ninh chất lượng cao và các dòng than nhập khẩu cho khu vực phía Nam.
            Kinh nghiệm phân phối thực tế giúp chúng tôi phục vụ linh hoạt từ
            xưởng sản xuất đến nhà máy công nghiệp, với đơn hàng từ 10 tấn trở
            lên.
          </p>
          <blockquote
            className="mt-4 border-l-2 border-ember-dark pl-3 font-display text-sm text-ember-dark opacity-0 motion-reduce:opacity-100 lg:mt-[22px] lg:pl-5 lg:text-[21px] lg:font-medium"
            data-company-story-reveal
            data-reveal-order="4"
          >
            “Đốt sáng niềm tin, thắp lửa thành công.”
          </blockquote>
        </div>

        <StoryFigure />
      </CompanyStoryMotion>
    </section>
  );
}
