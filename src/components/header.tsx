"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { images, site } from "@/config/site";
import { Wordmark } from "@/components/ui/wordmark";
import { cn } from "@/lib/utils";

const cell = "flex items-center border-r border-ink/15 px-5";

export function Header() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const toggle = (next: boolean) => {
    setOpen(next);
    if (next) lenis?.stop();
    else lenis?.start();
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 border-b border-ink/15 bg-paper/95 backdrop-blur-sm">
        <button
          type="button"
          onClick={() => toggle(!open)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(cell, "w-16 justify-center")}
        >
          <span className="relative block h-3 w-6">
            <span className={cn("absolute left-0 h-px w-full bg-ink transition-all duration-500", open ? "top-1.5 rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 top-1.5 h-px w-full bg-ink transition-opacity", open && "opacity-0")} />
            <span className={cn("absolute left-0 h-px w-full bg-ink transition-all duration-500", open ? "top-1.5 -rotate-45" : "top-3")} />
          </span>
        </button>

        <div className={cn(cell, "hidden flex-col items-start justify-center text-[0.8rem] leading-snug text-ink-soft lg:flex")}>
          <span>{site.contact.street.split(",")[0]}, {site.contact.city}</span>
          <a href={site.contact.phoneHref} className="hover:text-kumkum">
            {site.contact.phoneLocal}
          </a>
        </div>

        <a href="#top" onClick={() => toggle(false)} aria-label={`${site.legalName}, home`} className="flex flex-1 items-center justify-center">
          <Wordmark />
        </a>

        <a href="#cineplex" className={cn(cell, "hidden border-l text-[0.9rem] font-normal hover:text-kumkum md:flex")}>
          Cineplex
        </a>
        <a href="#restaurant" className={cn(cell, "hidden text-[0.9rem] font-normal hover:text-kumkum md:flex")}>
          Restaurant
        </a>
        <a href={site.contact.phoneHref} className="flex items-center bg-ink px-5 text-[0.9rem] font-normal text-paper transition-colors hover:bg-kumkum md:px-7">
          <span className="hidden sm:inline">Book a Table</span>
          <span className="sm:hidden">Book</span>
        </a>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-16 z-40 grid bg-paper md:grid-cols-2"
          >
            <nav aria-label="Site" className="flex flex-col justify-center px-8 md:px-16">
              {site.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => toggle(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  className="border-b border-ink/15 py-4 font-display text-4xl transition-colors hover:text-kumkum md:text-5xl"
                >
                  {item.label}
                </motion.a>
              ))}
              <p className="mt-10 leading-relaxed text-ink-soft">
                {site.contact.street}, {site.contact.city}
                <br />
                <a href={site.contact.phoneHref} className="text-ink hover:text-kumkum">
                  {site.contact.phoneLocal}
                </a>
              </p>
            </nav>
            <div className="relative hidden md:block">
              <Image src={images.marigoldHeap.src} alt={images.marigoldHeap.alt} fill sizes="50vw" className="object-cover" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
