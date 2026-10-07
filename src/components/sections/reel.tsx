import Image from "next/image";
import { images } from "@/config/site";

const frames = [
  images.projectorsVintage,
  images.misalTop,
  images.seatsRow,
  images.vadaPav,
  images.oldHall,
  images.roti,
  images.filmReels,
  images.seatsAisle,
  images.streetChef,
  images.pakora,
  images.choleBhature,
  images.dosa,
  images.jalebi,
  images.dal,
];

function Sprockets() {
  return (
    <div aria-hidden className="flex h-7 items-center gap-[14px] px-2">
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className="h-3.5 w-5 shrink-0 rounded-[3px] bg-paper/90" />
      ))}
    </div>
  );
}

// The gallery as a strip of 35mm film, edge markings included.
export function Reel() {
  const strip = [...frames, ...frames];
  return (
    <section aria-label="Gallery" className="overflow-hidden bg-night py-20 text-paper md:py-28">
      <p className="mb-10 px-6 text-center font-display text-3xl italic text-paper/80 md:text-4xl">Frames from an evening out</p>
      <div className="animate-reel flex w-max">
        {strip.map((f, i) => (
          <figure key={`${f.src}-${i}`} className="w-[300px] shrink-0 bg-[#1a1410] md:w-[380px]">
            <Sprockets />
            <div className="px-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={f.src} alt={i < frames.length ? f.alt : ""} fill sizes="380px" className="object-cover saturate-[0.9]" />
              </div>
            </div>
            <figcaption aria-hidden className="flex justify-between px-3 pt-1 font-mono text-[0.6rem] tracking-[0.2em] text-marigold/80">
              <span>RAMRAJYA 400</span>
              <span>▸ {String((i % frames.length) + 1).padStart(2, "0")}A</span>
            </figcaption>
            <Sprockets />
          </figure>
        ))}
      </div>
    </section>
  );
}
