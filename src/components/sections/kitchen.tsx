import Image from "next/image";
import { deco, images, menu, site } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { Watercolor } from "@/components/ui/watercolor";
import { Cutout } from "@/components/ui/cutout";
import { ArrowLink } from "@/components/ui/arrow-link";
import { VegMark } from "@/components/ui/veg-mark";

export function Kitchen() {
  return (
    <section id="restaurant" className="relative overflow-hidden bg-paper-deep/60 py-28 md:py-40">
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.05fr] md:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={images.masalaDabba.src} alt={images.masalaDabba.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-12 -right-4 w-[46%] md:-right-10">
            <div className="relative aspect-square overflow-hidden border-[10px] border-paper">
              <Image src={images.paneerSizzler.src} alt={images.paneerSizzler.alt} fill sizes="22vw" className="object-cover" />
            </div>
          </div>
          <Watercolor tone="leaf" seed={41} className="-left-12 -top-10 w-36 opacity-70" />
        </div>

        <Reveal className="md:pt-6">
          <p className="label flex items-center gap-3">
            The Restaurant <span className="text-ink-soft">·</span>
            <span className="inline-flex items-center gap-2 text-[#1f8a3b]">
              <VegMark /> Pure Veg
            </span>
          </p>
          <h2 className="mt-4 font-display text-5xl tracking-[-0.025em] leading-[1.05] md:text-6xl">
            Cooked the way <em className="text-kumkum">ghar</em> food is cooked.
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">
            A pure-vegetarian kitchen: whole spices roasted every morning, rotis straight off the tawa, misal with a proper kick, paneer from the tandoor and a veg biryani given the time it needs.
            Families, friends, a quick plate before the show or a long Sunday lunch: there&rsquo;s a table for all of it.
          </p>
          <ArrowLink href={site.contact.phoneHref} className="mt-6 font-display text-xl italic text-kumkum">
            Reserve a table
          </ArrowLink>
          {/* Fills the space beside the taller photo column. */}
          <Cutout src={deco.cinnamon} rotate={-8} className="mt-16 ml-auto hidden w-64 md:block" />
        </Reveal>
      </div>

      <div id="menu" className="relative mx-auto mt-32 max-w-5xl px-6 md:mt-44">
        {/* Sits in the empty band beside the centred heading, above the menu columns. */}
        <Cutout src={deco.chillies} rotate={14} className="absolute left-0 top-0 hidden w-56 lg:block" />
        <Reveal className="text-center">
          <p className="font-display text-2xl italic text-kumkum">From the kitchen</p>
          <h3 className="mt-3 font-display text-4xl md:text-5xl">A few things we&rsquo;re known for</h3>
          <p className="label mt-4 inline-flex items-center gap-2 text-[#1f8a3b]">
            <VegMark /> 100% vegetarian kitchen
          </p>
          <span aria-hidden className="mx-auto mt-6 block h-px w-24 bg-ink/40" />
        </Reveal>
        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {menu.map((section, i) => (
            <Reveal key={section.category} delay={(i % 2) * 0.1}>
              <h4 className="border-b-2 border-ink pb-2 font-display text-2xl italic">{section.category}</h4>
              <ul>
                {section.items.map((item) => (
                  <li key={item.name} className="border-b border-ink/20 py-3.5">
                    <p className="flex items-center gap-2.5 text-[1.05rem] font-normal">
                      <VegMark className="text-[0.8rem]" />
                      {item.name}
                    </p>
                    <p className="pl-[1.35rem] text-[0.9rem] text-ink-soft">{item.note}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
