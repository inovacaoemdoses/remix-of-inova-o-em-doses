import { ScribbleUnderline } from "@/components/decorative/Doodles";
import logoId from "@/assets/logo-id.jpg";

const companies = [
  { name: "BRMALLS", color: "cyan" },
  { name: "LIGGA TELECOM", color: "yellow" },
  { name: "SOPRANO", color: "magenta" },
  { name: "BANCO VOLKSWAGEN", color: "cyan" },
  { name: "AMERICAN TRUCKS ARGENTINA", color: "yellow" },
  { name: "CDL CAXIAS", color: "magenta" },
];

const ExecutiveExperienceSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-muted/10">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="font-handwritten text-cyan-neon text-xl">Experiência Executiva</span>
          <h3 className="text-2xl font-bold text-foreground mt-2">
            Empresas onde{" "}
            <span className="relative inline-block">
              atuei
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
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 flex items-center gap-3 px-6 py-3 rounded-lg border transition-all hover:scale-105 bg-card/50"
                style={{
                  borderColor: company.color === 'cyan' ? 'hsl(186 94% 51% / 0.4)' :
                               company.color === 'yellow' ? 'hsl(48 97% 53% / 0.4)' :
                               'hsl(292 84% 61% / 0.4)'
                }}
              >
                <img src={logoId} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
                <span className={`font-bold text-lg whitespace-nowrap ${
                  company.color === 'cyan' ? 'text-cyan-neon' :
                  company.color === 'yellow' ? 'text-yellow-neon' :
                  'text-magenta'
                }`}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveExperienceSection;
