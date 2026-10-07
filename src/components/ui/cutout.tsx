import Image from "next/image";
import { cn } from "@/lib/utils";
import { Parallax } from "@/components/ui/parallax";

// Decorative still-life (shot on white) blended into the paper. The caller places it in a gap
// reserved by the layout; it only drifts a little, so it can never wander onto text.
export function Cutout({ src, className, rotate = 0, width = 400 }: { src: string; className?: string; rotate?: number; width?: number }) {
  return (
    <Parallax className={cn("pointer-events-none mix-blend-multiply", className)}>
      <Image
        src={src}
        alt=""
        width={width}
        height={Math.round(width * 0.67)}
        sizes={`${width}px`}
        className="cutout h-auto w-full"
        style={{ rotate: `${rotate}deg` }}
      />
    </Parallax>
  );
}
