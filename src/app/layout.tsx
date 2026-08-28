import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Noto_Sans } from "next/font/google";
import { Phone } from "lucide-react";
import "./globals.css";
import { cn } from "@/lib/utils";

import { SiteFooter } from "@/sections/site-footer";
import { SiteHeader } from "@/sections/site-header";
import { AppScript } from "./script";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--next-font-bricolage-grotesque",
  subsets: ["latin", "vietnamese"],
  weight: "variable",
});

const notoSans = Noto_Sans({
  variable: "--next-font-noto-sans",
  subsets: ["latin", "vietnamese"],
  weight: "variable",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--next-font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cty Than Đá Thái Bình",
  description:
    "Than Đá Thái Bình cung cấp than Quảng Ninh và than nhập khẩu cho nhà máy phía Nam. Nhận đơn từ 10 tấn, kiểm soát chất lượng, giao đúng tiến độ.",
  openGraph: {
    images: [
      {
        url: "sSIUF.webp",
        width: 1040,
        height: 720,
        alt: "Than Đá Thái Bình",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        bricolageGrotesque.variable,
        notoSans.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-screen overflow-x-hidden bg-cream font-noto-sans text-lg text-coal-dark">
        <main>
          <SiteHeader />
          {children}
          <SiteFooter />
        </main>
        <a
          href="tel:0908607391"
          className="fixed right-5 bottom-5 z-50 isolate grid size-14 place-items-center rounded-full bg-brand-flame text-white shadow-[0_8px_28px_rgba(13,13,13,0.28)] transition-[transform,background-color,box-shadow] duration-300 hover:scale-105 hover:bg-ember-dark hover:shadow-[0_10px_32px_rgba(13,13,13,0.34)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-flame sm:right-8 sm:bottom-8 lg:size-16"
          aria-label="Gọi Than Đá Thái Bình: 0908 607 391"
        >
          <span
            className="floating-phone-pulse absolute inset-0 -z-10 rounded-full bg-brand-flame/40"
            aria-hidden="true"
          />
          <span className="grid -scale-x-100 place-items-center">
            <Phone
              className="floating-phone-shake size-6 lg:size-7"
              aria-hidden="true"
            />
          </span>
        </a>
      </body>
      <AppScript />
    </html>
  );
}
