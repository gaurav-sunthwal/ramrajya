import { cn } from "@/lib/utils";

// The green square-and-dot vegetarian symbol used on Indian food labels and menus.
export function VegMark({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Vegetarian"
      className={cn("inline-flex size-[0.85em] shrink-0 items-center justify-center border-[1.5px] border-[#1f8a3b]", className)}
    >
      <span className="size-[0.4em] rounded-full bg-[#1f8a3b]" />
    </span>
  );
}
