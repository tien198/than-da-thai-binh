import { FileText, Globe, Mail, MapPin, Phone } from "lucide-react";

import { FooterBrand } from "./comps/footer-brand";

const contactDetails = [
  { icon: Phone, label: "Điện thoại / Zalo:", value: "0908 607 391", href: "tel:0908607391" },
  { icon: Mail, label: "Email:", value: "thanthaibinh@gmail.com", href: "mailto:thanthaibinh@gmail.com" },
  { icon: Globe, label: "Website:", value: "thandathaibinh24h.vn", href: "https://thandathaibinh24h.vn" },
  { icon: MapPin, label: "Trụ sở:", value: "110/22 Đường Tân Chánh Hiệp 05, Tổ 54, Phường Trung Mỹ Tây, TP.Hồ Chí Minh" },
];

export function SiteFooter() {
  return (
    <footer id="lien-he" className="bg-cream-mid">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,820px)_380px] lg:gap-20 lg:px-20 lg:py-16">
        <div>
          <h2 className="font-heading text-[34px] font-bold tracking-[0.06em] text-coal-dark lg:text-[40px]">Liên hệ đặt hàng</h2>
          <h3 className="mt-4 font-heading text-[25px] font-normal leading-[1.08] text-ember-dark lg:mt-6 lg:text-[30px]">Nhận phương án cung ứng trong 30 phút</h3>
          <p className="mt-4 max-w-[820px] text-[13px] leading-[1.5] text-text-muted">Cho chúng tôi biết loại lò, sản lượng và lịch giao dự kiến. Đội ngũ sẽ tư vấn loại than và báo giá phù hợp.</p>

          <address className="mt-6 flex flex-col gap-4 not-italic">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3 text-sm">
                <Icon className="mt-0.5 size-[18px] shrink-0 text-ember-dark" aria-hidden="true" />
                <p>
                  <strong className="font-bold text-ember-dark">{label}</strong>{" "}
                  {href ? <a href={href} className="text-coal-dark hover:text-ember-dark">{value}</a> : <span className="text-coal-dark">{value}</span>}
                </p>
              </div>
            ))}
          </address>
        </div>

        <aside className="flex min-h-[299px] flex-col items-center justify-center rounded-md border border-border bg-white px-7 py-10 text-center">
          <h3 className="font-heading text-[34px] font-light leading-tight text-coal-dark lg:text-[40px]">Sẵn sàng đặt hàng?</h3>
          <p className="mt-4 max-w-[300px] text-sm leading-[1.6] text-text-muted">Gọi ngay hoặc gửi thông tin, đội ngũ Than Đá Thái Bình sẽ phản hồi trong 30 phút với báo giá chi tiết.</p>
          <a href="tel:0908607391" className="mt-5 flex min-h-16 w-full items-center justify-center gap-2 rounded-sm bg-ember-gold px-6 text-xl font-light text-coal-black transition-colors hover:bg-ember-light lg:text-2xl">
            <FileText className="size-[18px]" aria-hidden="true" /> Nhận báo giá ngay
          </a>
        </aside>
      </div>

      <div className="border-t border-border bg-[#e5e0d8]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:h-16 lg:flex-row lg:px-20 lg:py-0">
          <FooterBrand />
          <p className="text-xs font-semibold tracking-wide text-text-muted">Power of TexCra</p>
        </div>
      </div>
    </footer>
  );
}
