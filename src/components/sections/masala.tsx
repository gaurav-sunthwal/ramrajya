"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { deco, images } from "@/config/site";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Watercolor } from "@/components/ui/watercolor";
import { Cutout } from "@/components/ui/cutout";
import { Reveal } from "@/components/ui/reveal";

// Where each letter of MASALA starts before settling into the word (x, y in em; r in deg).
// Kept within ±0.32em vertically so the scatter never reaches the lines above or below.
const scatter = [
  { x: -0.55, y: 0.28, r: -12 },
  { x: -0.25, y: -0.3, r: 8 },
  { x: 0.05, y: 0.32, r: -6 },
  { x: 0.2, y: -0.26, r: 11 },
  { x: 0.42, y: 0.22, r: -9 },
  { x: 0.6, y: -0.12, r: 6 },
];

function Letter({ char, i, progress }: { char: string; i: number; progress: MotionValue<number> }) {
  const s = scatter[i];
  const x = useTransform(progress, [0, 1], [`${s.x}em`, "0em"]);
  const y = useTransform(progress, [0, 1], [`${s.y}em`, "0em"]);
  const rotate = useTransform(progress, [0, 1], [s.r, 0]);
  return (
    <motion.span style={{ x, y, rotate }} className="inline-block">
      {char}
    </motion.span>
  );
}

const choices = [
  { label: "The Cineplex", href: "#cineplex" },
  { label: "The Restaurant", href: "#restaurant" },
  { label: "Dinner and a show", href: "#evening" },
  { label: "Our menu", href: "#menu" },
  { label: "Finding us", href: "#visit" },
];

export function Masala() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "start 0.35"] });

  return (
    <section className="relative overflow-hidden pb-16 pt-20 md:pb-20 md:pt-28">
      <Watercolor tone="marigold" seed={3} className="-left-16 top-40 w-64 opacity-80" />
      <Watercolor tone="teal" seed={8} className="left-24 top-[26rem] w-28 opacity-70" />
      <Watercolor tone="rose" seed={5} className="-left-6 top-[34rem] w-20 opacity-70" />
      <Cutout src={deco.spices} className="absolute -right-24 top-4 hidden w-[400px] md:block" />

      <div ref={ref} className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="font-display text-2xl font-light italic text-ink-soft md:text-3xl">Discover a world of pure</p>
        <p aria-label="masala" className="py-[0.42em] font-display text-[17vw] font-light leading-none tracking-[0.14em] md:text-[8.5rem]">
          {"MASALA".split("").map((c, i) => (
            <Letter key={i} char={c} i={i} progress={scrollYProgress} />
          ))}
        </p>
      </div>

      <div className="relative mx-auto mt-6 grid max-w-6xl gap-16 px-6 md:mt-10 md:grid-cols-2 md:gap-20">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.15] md:text-[2.1rem]">A film and a feast, under one roof in Karanja Lad.</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
            <p>
              In India, a film with a little of everything (songs, a love story, a family drama, a fight in the rain) is called a{" "}
              <em className="text-ink">masala</em> film. We think a night out should be made the same way.
            </p>
            <p>
              At Ramrajya, the cineplex and our pure-vegetarian restaurant sit side by side, so dinner and a show is one easy plan rather than two. Eat well,
              walk a few steps, find your seat.
            </p>
            <p>Where will tonight take you?</p>
          </div>
          <p className="mt-8 font-display text-2xl italic text-kumkum">Choose your evening</p>
          <ul className="mt-3 border-t-2 border-ink">
            {choices.map((c) => (
              <li key={c.href} className="border-b-2 border-ink">
                <ArrowLink href={c.href} className="flex w-full justify-between py-3 text-lg hover:text-kumkum">
                  <span>{c.label}</span>
                </ArrowLink>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="relative md:pt-24">
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image src={images.paneerCurry.src} alt={images.paneerCurry.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
          <Watercolor tone="turmeric" seed={12} className="-bottom-16 -right-10 w-48 opacity-80" />
        </div>
      </div>
    </section>
  );
}
