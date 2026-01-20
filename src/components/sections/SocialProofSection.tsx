import { ScribbleUnderline, StarDoodle } from "@/components/decorative/Doodles";

// Placeholder logos - in a real scenario, these would be actual client logos
const clients = [
  { name: "UFPR", color: "cyan" },
  { name: "Rede Gazeta", color: "yellow" },
  { name: "Castrolanda", color: "magenta" },
  { name: "FINEP", color: "cyan" },
  { name: "Tecnoparque", color: "yellow" },
  { name: "SEBRAE", color: "magenta" },
];

const SocialProofSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-muted/30">
      {/* Floating stars */}
      <StarDoodle className="absolute top-8 left-20 animate-float opacity-60" color="yellow" />
      <StarDoodle className="absolute bottom-8 right-20 animate-float opacity-60" color="cyan" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="font-handwritten text-cyan-neon text-xl">Quem já confiou em mim</span>
          <h3 className="text-2xl font-bold text-foreground mt-2">
            Parceiros de{" "}
            <span className="relative inline-block">
              Inovação
              <ScribbleUnderline color="yellow" className="absolute -bottom-1 left-0 w-full" />
            </span>
          </h3>
        </div>

        {/* Logo carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling logos */}
          <div className="flex animate-scroll-logos">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-8 py-4 rounded-[10px_14px_12px_16px] border-2 border-dashed transition-all hover:scale-105"
                style={{
                  borderColor: client.color === 'cyan' ? 'hsl(186 94% 51% / 0.5)' :
                               client.color === 'yellow' ? 'hsl(48 97% 53% / 0.5)' :
                               'hsl(292 84% 61% / 0.5)'
                }}
              >
                <span className={`font-bold text-lg ${
                  client.color === 'cyan' ? 'text-cyan-neon' :
                  client.color === 'yellow' ? 'text-yellow-neon' :
                  'text-magenta'
                }`}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
