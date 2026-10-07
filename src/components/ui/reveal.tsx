"use client";

import { useEffect, useRef } from "react";

// Fades content up as it enters the viewport. Content renders visible by default and is only
// hidden after mount if it starts below the fold, so nothing stays invisible if JS is slow or fails.
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.transition = `opacity 1.1s cubic-bezier(.22,1,.36,1) ${delay}s, transform 1.3s cubic-bezier(.22,1,.36,1) ${delay}s`;
        el.style.opacity = "1";
        el.style.transform = "none";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
