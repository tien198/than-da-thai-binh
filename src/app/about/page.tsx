import type { Metadata } from "next";

import { AboutHero } from "./sections/about-hero";
import { CompanyCommitment } from "./sections/company-commitment";
import { CompanyStory } from "./sections/company-story";
import { SupplyCapability } from "./sections/supply-capability";

export const metadata: Metadata = {
  title: "Giới thiệu | Than Đá Thái Bình",
  description:
    "Tìm hiểu về Than Đá Thái Bình, năng lực cung ứng và cam kết chất lượng cho các nhà máy khu vực phía Nam.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <SupplyCapability />
      <CompanyCommitment />
    </>
  );
}
