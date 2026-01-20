import { cn } from "@/lib/utils";

interface SketchIconProps {
  className?: string;
}

// Megaphone with sparks - for Palestras
export const MegaphoneIcon = ({ className }: SketchIconProps) => (
  <svg viewBox="0 0 80 80" className={cn("w-16 h-16", className)} fill="none">
    {/* Main megaphone body */}
    <path
      d="M20,35 L35,25 L55,15 L55,55 L35,45 L20,35 Z"
      className="stroke-yellow-neon fill-yellow-neon/20"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Handle */}
    <path
      d="M20,35 L10,38 L10,42 L20,45"
      className="stroke-yellow-neon"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Sparks coming out */}
    <line x1="58" y1="30" x2="68" y2="25" className="stroke-cyan-neon" strokeWidth="2" strokeLinecap="round" />
    <line x1="58" y1="35" x2="72" y2="35" className="stroke-cyan-neon" strokeWidth="2" strokeLinecap="round" />
    <line x1="58" y1="40" x2="68" y2="45" className="stroke-cyan-neon" strokeWidth="2" strokeLinecap="round" />
    {/* Brain sparkle */}
    <circle cx="65" cy="20" r="3" className="fill-magenta" />
    <circle cx="72" cy="28" r="2" className="fill-yellow-neon" />
  </svg>
);

// Lightbulb with gears - for Workshops
export const LightbulbGearsIcon = ({ className }: SketchIconProps) => (
  <svg viewBox="0 0 80 80" className={cn("w-16 h-16", className)} fill="none">
    {/* Lightbulb */}
    <path
      d="M40,10 C28,10 20,22 20,32 C20,42 28,48 32,52 L48,52 C52,48 60,42 60,32 C60,22 52,10 40,10 Z"
      className="stroke-yellow-neon fill-yellow-neon/20"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Bulb base */}
    <rect x="32" y="52" width="16" height="8" rx="2" className="stroke-yellow-neon" strokeWidth="2" />
    <line x1="34" y1="56" x2="46" y2="56" className="stroke-yellow-neon" strokeWidth="2" />
    {/* Gear 1 */}
    <circle cx="15" cy="45" r="8" className="stroke-cyan-neon" strokeWidth="2" strokeDasharray="4 2" />
    <circle cx="15" cy="45" r="3" className="fill-cyan-neon" />
    {/* Gear 2 */}
    <circle cx="65" cy="45" r="6" className="stroke-magenta" strokeWidth="2" strokeDasharray="3 2" />
    <circle cx="65" cy="45" r="2" className="fill-magenta" />
    {/* Motion arrows */}
    <path d="M8,38 Q12,35 16,38" className="stroke-cyan-neon" strokeWidth="2" fill="none" />
    <path d="M58,38 Q62,35 66,38" className="stroke-magenta" strokeWidth="2" fill="none" />
  </svg>
);

// Compass/Rocket - for Consultoria
export const RocketCompassIcon = ({ className }: SketchIconProps) => (
  <svg viewBox="0 0 80 80" className={cn("w-16 h-16", className)} fill="none">
    {/* Rocket body */}
    <path
      d="M40,8 C35,20 30,35 30,50 L40,58 L50,50 C50,35 45,20 40,8 Z"
      className="stroke-cyan-neon fill-cyan-neon/20"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Window */}
    <circle cx="40" cy="30" r="6" className="stroke-yellow-neon fill-yellow-neon/30" strokeWidth="2" />
    {/* Fins */}
    <path d="M30,45 L22,55 L30,52" className="stroke-magenta fill-magenta/30" strokeWidth="2" />
    <path d="M50,45 L58,55 L50,52" className="stroke-magenta fill-magenta/30" strokeWidth="2" />
    {/* Fire/exhaust */}
    <path d="M35,58 Q40,72 45,58" className="stroke-yellow-neon fill-yellow-neon/50" strokeWidth="2" />
    <path d="M37,58 Q40,68 43,58" className="stroke-orange-500 fill-orange-400/50" strokeWidth="2" />
    {/* Stars around */}
    <circle cx="20" cy="15" r="2" className="fill-yellow-neon" />
    <circle cx="60" cy="20" r="1.5" className="fill-cyan-neon" />
    <circle cx="65" cy="35" r="1" className="fill-magenta" />
  </svg>
);

// Target with arrow - for Pitch Deck
export const TargetIcon = ({ className }: SketchIconProps) => (
  <svg viewBox="0 0 80 80" className={cn("w-16 h-16", className)} fill="none">
    {/* Target circles */}
    <circle cx="40" cy="40" r="28" className="stroke-cyan-neon" strokeWidth="3" />
    <circle cx="40" cy="40" r="18" className="stroke-magenta" strokeWidth="3" />
    <circle cx="40" cy="40" r="8" className="stroke-yellow-neon fill-yellow-neon" strokeWidth="3" />
    {/* Arrow */}
    <line x1="8" y1="72" x2="36" y2="44" className="stroke-yellow-neon" strokeWidth="3" strokeLinecap="round" />
    <path d="M32,48 L36,44 L40,48" className="stroke-yellow-neon" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Feathers on arrow */}
    <line x1="8" y1="72" x2="12" y2="65" className="stroke-cyan-neon" strokeWidth="2" />
    <line x1="8" y1="72" x2="15" y2="68" className="stroke-cyan-neon" strokeWidth="2" />
    {/* Success sparkle */}
    <circle cx="40" cy="40" r="2" className="fill-white" />
  </svg>
);
