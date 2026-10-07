import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCta } from "@/components/mobile-cta";
import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/hero";
import { Masala } from "@/components/sections/masala";
import { Collage } from "@/components/sections/collage";
import { Cinema } from "@/components/sections/cinema";
import { Evening } from "@/components/sections/evening";
import { Kitchen } from "@/components/sections/kitchen";
import { Reel } from "@/components/sections/reel";
import { Visit } from "@/components/sections/visit";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Masala />
        <Collage />
        <Cinema />
        <Evening />
        <Kitchen />
        <Reel />
        <Visit />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
