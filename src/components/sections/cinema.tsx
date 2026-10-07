import Image from "next/image";
import { images, site, ticketsHref } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { Ticket } from "@/components/ui/ticket";
import { Parallax } from "@/components/ui/parallax";

export function Cinema() {
  return (
    <section id="cineplex" className="relative overflow-hidden bg-night text-paper">
      <Parallax range={60} className="absolute inset-[-10%_0]">
        <Image src={images.audience.src} alt={images.audience.alt} fill sizes="100vw" className="object-cover opacity-60" />
      </Parallax>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,13,10,0.92)_0%,rgba(16,13,10,0.55)_55%,rgba(16,13,10,0.3)_100%)]" />

      <div className="relative mx-auto grid min-h-[92vh] max-w-6xl items-center gap-16 px-6 py-28 md:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <p className="label text-marigold">The Cineplex</p>
          <h2 className="mt-5 font-display text-5xl tracking-[-0.025em] leading-[1.05] md:text-7xl">
            When the lights go down, the whole town goes quiet.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-paper/75">
            New releases on the big screen, seats you can sink into, and fresh popcorn at the interval. Some films are still best watched
            with a full house, whistles and all.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href={ticketsHref} className="bg-paper px-6 py-3 text-lg text-ink transition-colors hover:bg-marigold">
              Book Tickets
            </a>
            <a href={site.contact.phoneHref} className="border-b border-paper/50 pb-0.5 font-display text-xl italic hover:text-marigold">
              Call {site.contact.phoneLocal}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <Ticket />
        </Reveal>
      </div>
    </section>
  );
}
