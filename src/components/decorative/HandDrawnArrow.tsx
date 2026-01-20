import { cn } from "@/lib/utils";

interface HandDrawnArrowProps {
  className?: string;
  direction?: "right" | "down" | "up" | "left";
  color?: "cyan" | "yellow" | "white";
}

export const HandDrawnArrow = ({ 
  className, 
  direction = "right", 
  color = "yellow" 
}: HandDrawnArrowProps) => {
  const colors = {
    cyan: "stroke-cyan-neon",
    yellow: "stroke-yellow-neon",
    white: "stroke-white",
  };

  const rotations = {
    right: "rotate-0",
    down: "rotate-90",
    left: "rotate-180",
    up: "-rotate-90",
  };

  return (
    <svg
      viewBox="0 0 100 40"
      className={cn(
        "w-20 h-8 pointer-events-none",
        colors[color],
        rotations[direction],
        className
      )}
      fill="none"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Wavy arrow line */}
      <path d="M5,20 Q25,15 35,22 Q45,28 55,18 Q65,10 75,20 L85,20" />
      {/* Arrow head */}
      <path d="M75,12 L88,20 L75,28" />
    </svg>
  );
};
