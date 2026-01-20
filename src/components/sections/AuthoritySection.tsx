import { InkSplatter } from "@/components/decorative/InkSplatter";
import { StarDoodle, SparkleDoodle, ScribbleUnderline } from "@/components/decorative/Doodles";
import hellenImage4 from "@/assets/hellen-4.png";

const awards = [
  {
    year: "2022",
    title: "Prêmio Tele Síntese de Inovação",
    description: "Reconhecimento nacional por projetos inovadores",
    color: "yellow",
  },
  {
    year: "2024",
    title: "Empresa Inovadora",
    description: "Premiação por liderança em inovação corporativa",
    color: "cyan",
  },
];

const AuthoritySection = () => {
  return (
    <section id="reconhecimento" className="relative py-24 overflow-hidden">
      {/* Full-width background with duotone */}
      <div className="absolute inset-0 z-0">
        <img
          src={hellenImage4}
          alt="Hellen Borges background"
          className="w-full h-full object-cover"
        />
        {/* Duotone purple/blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/85 to-indigo-900/90" />
      </div>

      {/* Decorative elements */}
      <InkSplatter className="top-10 right-20 opacity-30" variant="cyan" size="lg" />
      <StarDoodle className="absolute top-20 left-20 animate-float" color="yellow" />
      <SparkleDoodle className="absolute bottom-32 right-1/4 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-handwritten text-cyan-neon text-2xl mb-2 block">Provas de Impacto</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
              Projetos que Geram{" "}
              <span className="relative inline-block">
                Valor
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-neon/50 -skew-x-3 -z-10" />
              </span>
            </h2>
          </div>

          {/* Awards grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`sketch-card p-8 ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-all duration-300 group`}
              >
                {/* Year badge */}
                <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 ${
                  award.color === 'yellow' 
                    ? 'bg-yellow-neon text-purple-dark' 
                    : 'bg-cyan-neon text-purple-dark'
                }`}>
                  {award.year}
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  award.color === 'yellow' ? 'text-yellow-neon' : 'text-cyan-neon'
                }`}>
                  {award.title}
                </h3>
                <p className="text-muted-foreground">
                  {award.description}
                </p>
              </div>
            ))}
          </div>

          {/* FINEP & Tecnoparque highlight */}
          <div className="sketch-card p-8 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Já gerenciei projetos aprovados pela{" "}
              <span className="relative inline-block">
                <strong className="text-cyan-neon">FINEP</strong>
                <ScribbleUnderline color="cyan" className="absolute -bottom-1 left-0 w-full h-2" />
              </span>
              {" "}e{" "}
              <span className="relative inline-block">
                <strong className="text-yellow-neon">Tecnoparque</strong>
                <ScribbleUnderline color="yellow" className="absolute -bottom-1 left-0 w-full h-2" />
              </span>
              , captando recursos estratégicos para inovação.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-[8px_12px_10px_14px]">
                <SparkleDoodle color="cyan" className="w-5 h-5" />
                <span className="font-semibold text-foreground">Captação de Recursos</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-[10px_14px_12px_16px]">
                <SparkleDoodle color="yellow" className="w-5 h-5" />
                <span className="font-semibold text-foreground">Projetos Estratégicos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
