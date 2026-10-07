import Image from "next/image";
import { deco, images, site, type Photo } from "@/config/site";
import { Watercolor } from "@/components/ui/watercolor";
import { Cutout } from "@/components/ui/cutout";
import { Reveal } from "@/components/ui/reveal";
import { BlockButton } from "@/components/ui/arrow-link";
import { cn } from "@/lib/utils";

function Shot({ photo, className, sizes, delay = 0 }: { photo: Photo; className?: string; sizes: string; delay?: number }) {
  return (
    <Reveal delay={delay} className={cn("relative overflow-hidden", className)}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
    </Reveal>
  );
}

// Editorial collage on a 12-column grid. Photos stay put; edges line up across each row.
export function Collage() {
  return (
    <section aria-label="Life at Ramrajya" className="relative overflow-hidden py-16 md:py-24">
      <Watercolor tone="teal" seed={21} className="left-[30%] top-6 w-36 opacity-70" />
      <Watercolor tone="leaf" seed={4} className="left-[25%] top-36 w-20 opacity-80" />
      <Watercolor tone="rose" seed={14} className="bottom-10 right-[4%] w-32 opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Row 1 — bottoms aligned: thali, the story, misal. */}
        <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-8">
          <Shot photo={images.thaliFestive} sizes="(min-width: 1024px) 25vw, 100vw" className="hidden aspect-[4/5] lg:col-span-3 lg:block" />

          <Reveal className="lg:col-span-5 lg:px-6 lg:pb-4">
            <h2 className="font-display text-3xl leading-[1.15] md:text-[2.1rem]">
              If a single-screen cinema and a family dhaba opened in the same building, what might it be like?
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Loud, warm, generous, a little dramatic, spicy, sweet, crowded on Fridays, full of families, full of friends, and always
              smelling faintly of fresh popcorn and tadka.
            </p>
            <p className="mt-5 text-ink-soft">Come to {site.name} and find out.</p>
            <BlockButton href={site.contact.phoneHref} className="mt-7">
              Book a Table
            </BlockButton>
          </Reveal>

          <Shot photo={images.misalDip} delay={0.1} sizes="(min-width: 1024px) 33vw, 100vw" className="aspect-[4/5] lg:col-span-4" />
        </div>

        {/* Row 2 — tops aligned: popcorn, chai, chillies in their own cell, seat 23. */}
        <div className="mt-6 grid grid-cols-2 items-start gap-6 lg:mt-8 lg:grid-cols-12 lg:gap-8">
          <Shot photo={images.popcornBoxes} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4] lg:col-span-3" />
          <Shot photo={images.chaiHands} delay={0.1} sizes="(min-width: 1024px) 33vw, 50vw" className="aspect-[3/4] lg:col-span-4 lg:aspect-auto lg:self-stretch" />
          <div className="hidden items-center justify-center self-stretch lg:col-span-2 lg:flex">
            <Cutout src={deco.chilliTrio} rotate={-18} className="w-full" />
          </div>
          <Shot photo={images.seat23} delay={0.2} sizes="(min-width: 1024px) 25vw, 50vw" className="hidden aspect-[3/4] lg:col-span-3 lg:block" />
        </div>
      </div>
    </section>
  );
}
