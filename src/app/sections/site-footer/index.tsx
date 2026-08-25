import { FileText, Globe, Mail, MapPin, Phone } from "lucide-react";

import { FooterBrand } from "./comps/footer-brand";

const contactDetails = [
  {
    icon: Phone,
    label: "Điện thoại / Zalo",
    value: "0908 607 391",
    href: "tel:0908607391",
  },
  {
    icon: Mail,
    label: "Email",
    value: "thanthaibinh@gmail.com",
    href: "mailto:thanthaibinh@gmail.com",
  },
  {
    icon: MapPin,
    label: "Trụ sở",
    value:
      "110/22 Đường Tân Chánh Hiệp 05, Tổ 54, Phường Trung Mỹ Tây, TP.Hồ Chí Minh",
    mobileValue: "110/22 Tân Chánh Hiệp 05, Trung Mỹ Tây, TP.HCM",
  },
];

export function SiteFooter() {
  return (
    <footer id="lien-he" className="bg-cream-mid">
      <div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-[52px] sm:px-8 lg:grid-cols-[minmax(0,820px)_380px] lg:gap-20 lg:px-20 lg:py-16">
        <div>
          <p className="text-[10px] font-bold tracking-[0.16em] text-ember-dark lg:hidden">
            LIÊN HỆ ĐẶT HÀNG
          </p>
          <h2 className="hidden font-display text-[40px] font-bold tracking-[0.075em] text-coal-dark lg:block">
            Liên hệ đặt hàng
          </h2>
          <h3 className="mt-1 font-display text-[30px] font-semibold leading-[1.08] text-ember-dark lg:mt-4 lg:font-normal">
            Nhận phương án cung ứng trong 30 phút
          </h3>
          <p className="mt-2 max-w-[820px] text-[13px] leading-[1.5] text-text-muted lg:mt-4">
            Cho chúng tôi biết loại lò, sản lượng và lịch giao dự kiến. Đội ngũ
            sẽ tư vấn loại than và báo giá phù hợp.
          </p>
          <p className="mt-6 hidden max-w-[460px] text-[15px] leading-[1.6] text-text-muted lg:block">
            Đặt hàng từ 10 tấn trở lên. Liên hệ ngay để nhận báo giá tốt nhất và
            chính sách vận chuyển ưu đãi.
          </p>

          <address className="mt-5 flex flex-col gap-[14px] not-italic lg:mt-6 lg:gap-4">
            {contactDetails.map(
              ({ icon: Icon, label, value, mobileValue, href }) => {
                const contactValue = href ? (
                  <a href={href} className="hover:text-ember-dark">
                    {value}
                  </a>
                ) : (
                  <>
                    <span className="lg:hidden">{mobileValue}</span>
                    <span className="hidden lg:inline">{value}</span>
                  </>
                );

                return (
                  <div
                    key={label}
                    className="grid grid-cols-[17px_minmax(0,1fr)] items-start gap-3 lg:grid-cols-[18px_minmax(0,1fr)]"
                  >
                    <Icon
                      className="mt-0.5 size-[17px] text-ember-dark lg:size-[18px]"
                      aria-hidden="true"
                    />
                    <p className="text-coal-dark">
                      <strong className="block text-[9px] font-bold leading-[1.2] text-ember-dark lg:inline lg:text-sm lg:leading-normal">
                        {label}
                        <span className="hidden lg:inline">:</span>
                      </strong>{" "}
                      <span className="block text-xs leading-[1.4] lg:inline lg:text-sm lg:leading-normal">
                        {contactValue}
                      </span>
                    </p>
                  </div>
                );
              },
            )}
          </address>
        </div>

        <aside className="flex min-h-[196px] flex-col items-center justify-center rounded-[4px] border border-border bg-white px-[22px] py-[26px] text-center lg:min-h-[299px] lg:rounded-md lg:px-7 lg:py-10">
          <h3 className="font-display text-[27px] font-medium leading-tight text-coal-dark lg:text-[40px] lg:font-light">
            Sẵn sàng đặt hàng?
          </h3>
          <p className="mt-2 max-w-[306px] text-xs leading-[1.5] text-text-muted lg:mt-4 lg:max-w-[300px] lg:text-sm lg:leading-[1.6]">
            Gọi ngay hoặc gửi thông tin. Đội ngũ Than Đá Thái Bình sẽ phản hồi
            trong 30 phút với báo giá chi tiết.
          </p>
          <a
            href="tel:0908607391"
            className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-ember-gold px-6 text-xs font-bold tracking-[0.05em] text-coal-black transition-colors hover:bg-ember-light lg:mt-5 lg:h-16 lg:text-2xl lg:font-light lg:tracking-normal"
          >
            <FileText className="size-[18px]" aria-hidden="true" />
            <span className="lg:hidden">NHẬN BÁO GIÁ NGAY</span>
            <span className="hidden lg:inline">Nhận báo giá ngay</span>
          </a>
        </aside>
      </div>

      <div className="border-t border-border bg-border">
        <div className="mx-auto flex h-[104px] max-w-[1440px] flex-col items-center px-5 pt-[18px] sm:px-8 lg:h-16 lg:flex-row lg:justify-between lg:px-20 lg:pt-0">
          <FooterBrand />
          <p className="mt-2 text-[10px] font-semibold text-text-muted lg:mt-0 lg:text-xs lg:tracking-wide">
            Power of TexCra
          </p>
        </div>
      </div>
    </footer>
  );
}
