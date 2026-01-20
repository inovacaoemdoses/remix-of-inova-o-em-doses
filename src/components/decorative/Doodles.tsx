import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  color?: "cyan" | "yellow" | "white" | "magenta";
  style?: CSSProperties;
}

// Stars scattered around
export const StarDoodle = ({ className, color = "yellow", style }: DoodleProps) => {
  const colors = {
    cyan: "stroke-cyan-neon fill-cyan-neon/20",
    yellow: "stroke-yellow-neon fill-yellow-neon/20",
    white: "stroke-white fill-white/20",
    magenta: "stroke-magenta fill-magenta/20",
  };

  return (
    <svg viewBox="0 0 50 50" className={cn("w-8 h-8", colors[color], className)} style={style}>
      <path
        d="M25,2 L28,20 L46,20 L31,31 L36,48 L25,38 L14,48 L19,31 L4,20 L22,20 Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Sparkle/burst effect
export const SparkleDoodle = ({ className, color = "cyan", style }: DoodleProps) => {
  const colors = {
    cyan: "stroke-cyan-neon",
    yellow: "stroke-yellow-neon",
    white: "stroke-white",
    magenta: "stroke-magenta",
  };

  return (
    <svg viewBox="0 0 40 40" className={cn("w-6 h-6", colors[color], className)} fill="none" style={style}>
      <line x1="20" y1="5" x2="20" y2="15" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="25" x2="20" y2="35" strokeWidth="2" strokeLinecap="round" />
      <line x1="5" y1="20" x2="15" y2="20" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="20" x2="35" y2="20" strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="9" x2="15" y2="15" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="25" x2="31" y2="31" strokeWidth="2" strokeLinecap="round" />
      <line x1="31" y1="9" x2="25" y2="15" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="25" x2="9" y2="31" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

// Underline scribble
export const ScribbleUnderline = ({ className, color = "yellow" }: DoodleProps) => {
  const colors = {
    cyan: "stroke-cyan-neon",
    yellow: "stroke-yellow-neon",
    white: "stroke-white",
    magenta: "stroke-magenta",
  };

  return (
    <svg viewBox="0 0 200 20" className={cn("w-full h-3", colors[color], className)} fill="none">
      <path
        d="M0,10 Q30,5 60,12 T120,8 T180,14 T200,10"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Circle highlight
export const CircleHighlight = ({ className, color = "cyan" }: DoodleProps) => {
  const colors = {
    cyan: "stroke-cyan-neon",
    yellow: "stroke-yellow-neon",
    white: "stroke-white",
    magenta: "stroke-magenta",
  };

  return (
    <svg viewBox="0 0 120 60" className={cn("w-full h-full absolute inset-0", colors[color], className)} fill="none">
      <ellipse
        cx="60"
        cy="30"
        rx="55"
        ry="25"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 4"
        transform="rotate(-2 60 30)"
      />
    </svg>
  );
};

// Lightning bolt
export const LightningDoodle = ({ className, color = "yellow" }: DoodleProps) => {
  const colors = {
    cyan: "stroke-cyan-neon fill-cyan-neon",
    yellow: "stroke-yellow-neon fill-yellow-neon",
    white: "stroke-white fill-white",
    magenta: "stroke-magenta fill-magenta",
  };

  return (
    <svg viewBox="0 0 30 50" className={cn("w-6 h-10", colors[color], className)}>
      <path
        d="M20,0 L8,22 L16,22 L10,50 L22,25 L14,25 Z"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
