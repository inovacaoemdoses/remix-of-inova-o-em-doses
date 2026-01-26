import { MegaphoneIcon, LightbulbGearsIcon, RocketCompassIcon, TargetIcon, UsersIcon } from "@/components/decorative/SketchIcons";
import { InkSplatter } from "@/components/decorative/InkSplatter";
import { HandDrawnArrow } from "@/components/decorative/HandDrawnArrow";
import { StarDoodle, SparkleDoodle } from "@/components/decorative/Doodles";
import workshopBg from "@/assets/hellen-3.png";

interface Service {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  accent: "yellow" | "cyan" | "magenta";
  rotate: string;
  featured?: boolean;
  fullWidth?: boolean;
}

const services: Service[] = [
  {
    icon: MegaphoneIcon,
    title: "Palestras Inspiradoras",
    description: "Incorporando Inovação ao DNA, Criatividade como Ferramenta e Segredos da Inovação para Líderes.",
    accent: "yellow",
    rotate: "-rotate-1",
    fullWidth: true,
  },
  {
    icon: LightbulbGearsIcon,
    title: "Workshops de Alto Nível",
    description: "Sessões práticas para gerar ideias significativas e impulsionar resultados reais hoje mesmo.",
    accent: "cyan",
    rotate: "rotate-1",
    featured: true,
  },
];

const mentoriaServices: Service[] = [
  {
    icon: RocketCompassIcon,
    title: "Mentoria Estratégica (Profissionais)",
    description: "Desenvolvimento 1:1 focado em Liderança, Projetos e Intraempreendedorismo. Plano de alavancagem personalizado após rastreamento de perfil e objetivos.",
    accent: "magenta",
    rotate: "-rotate-0.5",
  },
  {
    icon: UsersIcon,
    title: "Mentoria Corporativa (Empresas)",
    description: "Processo de aceleração organizacional para instaurar cultura de inovação, gestão ágil (Scrum) e liderança de alta performance.",
    accent: "cyan",
    rotate: "rotate-0.5",
  },
  {
    icon: TargetIcon,
    title: "Pitch Deck e Funding",
    description: "Como organizar e vender suas ideias para captar recursos e acelerar a transformação.",
    accent: "yellow",
    rotate: "rotate-0.5",
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="relative py-28 overflow-hidden">
      {/* Background decorative elements */}
      <InkSplatter className="top-20 right-20 opacity-30" variant="cyan" size="xl" />
      <InkSplatter className="bottom-40 left-10 opacity-20" variant="yellow" size="lg" />
      <StarDoodle className="absolute top-32 left-1/4 animate-float" color="yellow" />
      <SparkleDoodle className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 relative z-10">
          <span className="font-handwritten text-cyan-neon text-2xl mb-2 block">O que eu ofereço</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            Soluções em{" "}
            <span className="relative inline-block">
              Doses
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-neon/50 -skew-x-3 -z-10" />
            </span>
            {" "}de{" "}
            <span className="relative inline-block">
              Inovação
              <InkSplatter className="-top-8 -left-8 opacity-40" variant="cyan" size="sm" />
            </span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isFeatured = service.featured;
            const isFullWidth = service.fullWidth;
            
            return (
              <div
                key={index}
                className={`sketch-card p-8 ${service.rotate} hover:rotate-0 transition-all duration-300 group relative h-full ${
                  isFeatured || isFullWidth ? 'md:col-span-2' : ''
                }`}
              >
                {/* Featured card with background image */}
                {isFeatured && (
                  <div className="absolute inset-0 rounded-[8px_12px_10px_14px] overflow-hidden -z-10">
                    <img
                      src={workshopBg}
                      alt="Workshop"
                      className="w-full h-full object-cover"
                    />
                    {/* Purple transparency overlay */}
                    <div className="absolute inset-0 bg-purple-900/85" />
                  </div>
                )}

                <div className={`flex ${isFeatured || isFullWidth ? 'flex-col md:flex-row md:items-center' : 'flex-col'} gap-6 h-full`}>
                  {/* Icon */}
                  <div className={`flex-shrink-0 ${isFeatured || isFullWidth ? 'md:w-1/4' : ''}`}>
                    <div className="w-20 h-20 rounded-[12px_16px_14px_18px] bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-16 h-16" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isFeatured || isFullWidth ? 'md:w-3/4' : ''}`}>
                    <h3 className={`text-xl font-bold text-foreground mb-3 ${
                      service.accent === 'yellow' ? 'group-hover:text-yellow-neon' :
                      service.accent === 'cyan' ? 'group-hover:text-cyan-neon' :
                      'group-hover:text-magenta'
                    } transition-colors`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA for featured card */}
                    {isFeatured && (
                      <button
                        onClick={scrollToContact}
                        className="mt-6 btn-cyan px-6 py-3 text-sm rounded-[6px_10px_8px_12px] font-bold inline-flex items-center gap-2 group/btn"
                      >
                        Quero participar
                        <HandDrawnArrow direction="right" color="yellow" className="w-12 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 ${
                  service.accent === 'yellow' ? 'bg-yellow-neon' :
                  service.accent === 'cyan' ? 'bg-cyan-neon' :
                  'bg-magenta'
                } rounded-full opacity-80`} />
              </div>
            );
          })}
        </div>

        {/* Mentoria Services - 3 cards alinhados */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10 mt-8">
          {mentoriaServices.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className={`sketch-card p-6 ${service.rotate} hover:rotate-0 transition-all duration-300 group relative h-full flex flex-col`}
              >
                <div className="flex flex-col gap-4 h-full">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-[12px_16px_14px_18px] bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-12 h-12" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className={`text-lg font-bold text-foreground mb-2 ${
                      service.accent === 'yellow' ? 'group-hover:text-yellow-neon' :
                      service.accent === 'cyan' ? 'group-hover:text-cyan-neon' :
                      'group-hover:text-magenta'
                    } transition-colors`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -top-2 -right-2 w-5 h-5 ${
                  service.accent === 'yellow' ? 'bg-yellow-neon' :
                  service.accent === 'cyan' ? 'bg-cyan-neon' :
                  'bg-magenta'
                } rounded-full opacity-80`} />
              </div>
            );
          })}
        </div>

        {/* Arrow pointing to CTA */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <HandDrawnArrow direction="down" color="yellow" className="w-8 h-16" />
            <span className="font-handwritten text-yellow-neon text-xl">Veja mais abaixo!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
