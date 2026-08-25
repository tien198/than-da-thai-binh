import { Hero } from "@/app/sections/hero";
import { Products } from "@/app/sections/products";
import { Stats } from "@/app/sections/stats";
import { SupplyMosaic } from "@/app/sections/supply-mosaic";
import { WhyUs } from "@/app/sections/why-us";

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
