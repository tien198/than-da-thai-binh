import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { SiteFooter } from "@/app/sections/site-footer";
import { SiteHeader } from "@/app/sections/site-header";

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

export const metadata: Metadata = {
  title: "Công ty than Thái Bình",
  description: "Cung ứng than miền Nam",
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
      <body className="min-h-screen overflow-x-hidden bg-cream font-noto-sans text-coal-dark">
        <main>
          <SiteHeader />
          {children}
          <SiteFooter />
        </main>
      </body>
    </html>
  );
}
