import { cn } from "@/lib/utils";

interface InkSplatterProps {
  className?: string;
  variant?: "cyan" | "yellow" | "magenta" | "purple";
  size?: "sm" | "md" | "lg" | "xl";
}

export const InkSplatter = ({ className, variant = "cyan", size = "md" }: InkSplatterProps) => {
  const colors = {
    cyan: "fill-cyan-neon/30",
    yellow: "fill-yellow-neon/30",
    magenta: "fill-magenta/30",
    purple: "fill-purple-electric/30",
  };

  const sizes = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
  };

  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("absolute pointer-events-none", sizes[size], colors[variant], className)}
    >
      <path
        d="M40,-62.6C52.2,-55.5,62.5,-44.6,69.3,-31.6C76.2,-18.6,79.6,-3.5,77.6,10.8C75.6,25.1,68.2,38.5,57.5,48.8C46.8,59.1,32.8,66.3,17.8,70.1C2.8,73.9,-13.2,74.3,-27.8,69.7C-42.3,65.1,-55.4,55.5,-64.3,43C-73.2,30.4,-77.9,15.2,-77.2,0.4C-76.5,-14.4,-70.4,-28.8,-61.2,-40.4C-52,-52,-39.6,-60.8,-26.2,-67.3C-12.8,-73.8,1.6,-78,15.3,-75.5C29,-73,40.5,-63.8,40,-62.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};
