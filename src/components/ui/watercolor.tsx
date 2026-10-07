import { cn } from "@/lib/utils";

const palette = {
  marigold: "#e98a12",
  turmeric: "#e8b92c",
  kumkum: "#c9361f",
  rose: "#d9607a",
  leaf: "#7fa33d",
  teal: "#2f9aa6",
} as const;

// A watercolour bloom: displaced disc with pooled pigment at the rim and paper grain.
export function Watercolor({
  tone = "marigold",
  seed = 1,
  className,
}: {
  tone?: keyof typeof palette;
  seed?: number;
  className?: string;
}) {
  const color = palette[tone];
  const id = `wc-${tone}-${seed}`;
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={cn("pointer-events-none absolute mix-blend-multiply", className)}>
      <defs>
        <filter id={`${id}-f`} x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="3" seed={seed} result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="46" xChannelSelector="R" yChannelSelector="G" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="0.8" result="soft" />
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed={seed + 11} result="grain" />
          <feColorMatrix in="grain" type="saturate" values="0" result="grainMono" />
          <feComposite in="soft" in2="grainMono" operator="arithmetic" k1="0.55" k2="0.75" k3="0" k4="-0.04" />
        </filter>
        <radialGradient id={`${id}-g`} cx="46%" cy="44%" r="52%">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="62%" stopColor={color} stopOpacity="0.45" />
          <stop offset="90%" stopColor={color} stopOpacity="0.85" />
          <stop offset="100%" stopColor={color} stopOpacity="0.15" />
        </radialGradient>
      </defs>
      <g filter={`url(#${id}-f)`}>
        <circle cx="100" cy="100" r="64" fill={`url(#${id}-g)`} />
      </g>
    </svg>
  );
}
