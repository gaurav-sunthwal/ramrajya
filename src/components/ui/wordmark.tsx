import { site } from "@/config/site";
import { cn } from "@/lib/utils";

// No logo exists — the name set in Cormorant is the mark.
export function Wordmark({ size = "md", className }: { size?: "md" | "xl"; className?: string }) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none", className)}>
      <span className={cn("font-display font-normal", size === "md" ? "text-[1.55rem] tracking-[0.02em]" : "text-[22vw] tracking-[-0.03em] md:text-[18vw]")}>
        {site.name}
      </span>
      <span className={cn("label text-ink-soft", size === "md" ? "mt-1 text-[0.5rem] tracking-[0.34em]" : "mt-[3.5vw] text-[0.7rem] md:mt-[2.5vw] md:text-sm")}>
        cineplex &amp; restaurant
      </span>
    </span>
  );
}
