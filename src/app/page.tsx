import { Hero } from "@/app/sections/hero";
import { Products } from "@/app/sections/products";
import { SiteFooter } from "@/app/sections/site-footer";
import { SiteHeader } from "@/app/sections/site-header";
import { Stats } from "@/app/sections/stats";
import { SupplyMosaic } from "@/app/sections/supply-mosaic";
import { WhyUs } from "@/app/sections/why-us";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream font-noto-sans text-coal-dark">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <SupplyMosaic />
        <Products />
        <WhyUs />
      </main>
      <SiteFooter />
    </div>
  );
}
