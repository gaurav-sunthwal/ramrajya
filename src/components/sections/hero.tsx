"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { heroFilms, site } from "@/config/site";
import { cn } from "@/lib/utils";

// Full-bleed film with one small caption: the cinema hall, then the restaurant, crossfading in a loop.
export function Hero() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Play only the active film, from the start; hold the poster when reduced motion is requested.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && !reduceMotion) {
        video.currentTime = 0;
        video.play().catch(() => {}); // Autoplay can be refused (e.g. low-power mode); the poster stays.
      } else {
        video.pause();
      }
    });
  }, [active, reduceMotion]);

  // Don't keep decoding video once the hero has scrolled out of view.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduceMotion) return;
    const observer = new IntersectionObserver(([entry]) => {
      const video = videoRefs.current[active];
      if (!video) return;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, [active, reduceMotion]);

  return (
    <section id="top" ref={sectionRef} className="relative mt-16 h-[calc(100svh-4rem)] min-h-[480px] overflow-hidden bg-night">
      {heroFilms.map((film, i) => (
        <video
          key={film.src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          poster={film.poster}
          aria-hidden
          onEnded={() => setActive((n) => (n + 1) % heroFilms.length)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out",
            i === active ? "opacity-100" : "opacity-0",
          )}
        >
          <source src={film.srcSmall} type="video/mp4" media="(max-width: 768px)" />
          <source src={film.src} type="video/mp4" />
        </video>
      ))}

      {/* A single quiet caption, bottom-left; the gradient only darkens the strip it sits on. */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night/75 via-night/25 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-24 left-6 right-6 text-paper md:bottom-14 md:left-12"
      >
        <p className="label text-[0.6rem] tracking-[0.2em] text-paper/80 md:text-[0.68rem] md:tracking-[0.3em]">
          {site.contact.city} · Cinema · Pure Veg
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-light italic leading-[1.05] md:text-6xl">
          Dinner first. Then the film.
        </h1>
      </motion.div>
    </section>
  );
}
