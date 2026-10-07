import Image from "next/image";
import { deco, images } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { Watercolor } from "@/components/ui/watercolor";
import { Cutout } from "@/components/ui/cutout";

const moments = [
  {
    when: "Before the show",
    photo: images.thaliVeg,
    copy: "A proper sit-down dinner, not a samosa wolfed in the queue. Order early, eat slowly, we'll keep an eye on the clock.",
    offset: "",
  },
  {
    when: "At the interval",
    photo: images.popcornMachine,
    copy: "Popcorn scooped hot from the machine, cold drinks, and five minutes to argue about who the villain really is.",
    offset: "",
  },
  {
    when: "After the credits",
    photo: images.chaiKulhad,
    copy: "Cutting chai in a kulhad, a plate of hot jalebi, and the long walk home still humming the songs.",
    offset: "",
  },
];

export function Evening() {
  return (
    <section id="evening" className="relative overflow-hidden py-28 md:py-40">
      <Watercolor tone="kumkum" seed={31} className="right-[6%] top-16 w-32 opacity-60" />
      <Watercolor tone="turmeric" seed={17} className="right-[14%] top-36 w-16 opacity-80" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-10">
          <Reveal className="max-w-xl">
            <p className="font-display text-2xl italic text-kumkum">An evening at Ramrajya</p>
            <h2 className="mt-3 font-display text-5xl tracking-[-0.025em] leading-[1.05] md:text-6xl">Dinner and a movie, the way it should go.</h2>
          </Reveal>
          <Cutout src={deco.popcorn} rotate={12} className="mr-[8%] hidden w-44 shrink-0 md:block" />
        </div>

        <ol className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
          {moments.map((m, i) => (
            <li key={m.when} className={m.offset}>
              <Reveal delay={i * 0.12}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={m.photo.src} alt={m.photo.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                </div>
                <p className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-xl italic text-kumkum">{["i.", "ii.", "iii."][i]}</span>
                  <span className="label">{m.when}</span>
                </p>
                <p className="mt-2 leading-relaxed text-ink-soft">{m.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
