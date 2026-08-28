import type { Metadata } from "next";

import { Hero } from "@/app/sections/hero";
import { Products } from "@/app/sections/products";
import { Stats } from "@/app/sections/stats";
import { SupplyMosaic } from "@/app/sections/supply-mosaic";
import { WhyUs } from "@/app/sections/why-us";

export const metadata: Metadata = {
  title: "Cty Than Đá Thái Bình",
  description:
    "Than Đá Thái Bình cung cấp than Quảng Ninh và than nhập khẩu cho nhà máy phía Nam. Nhận đơn từ 10 tấn, kiểm soát chất lượng, giao đúng tiến độ.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <SupplyMosaic />
      <Products />
      <WhyUs />
    </>
  );
}
