import { cn } from "@/lib/utils";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 12" fill="none" aria-hidden className={cn("h-3 w-9 shrink-0 text-kumkum", className)}>
      <path d="M0 6h36M30.5 1 36 6l-5.5 5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function ArrowLink({ className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn("group inline-flex items-center gap-3", className)} {...props}>
      {children}
      <span className="transition-transform duration-500 group-hover:translate-x-1.5">
        <Arrow />
      </span>
    </a>
  );
}

export function BlockButton({
  variant = "ink",
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "ink" | "paper" | "outline" }) {
  return (
    <a
      className={cn(
        "label inline-flex items-center justify-center px-7 py-4 transition-colors duration-300",
        variant === "ink" && "bg-ink text-paper hover:bg-kumkum",
        variant === "paper" && "bg-paper text-ink hover:bg-marigold",
        variant === "outline" && "border border-ink/70 hover:bg-ink hover:text-paper",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
