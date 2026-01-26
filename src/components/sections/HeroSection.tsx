import hellenImage from "@/assets/hellen-1.jpg";
import { InkSplatter } from "@/components/decorative/InkSplatter";
import { StarDoodle, SparkleDoodle } from "@/components/decorative/Doodles";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Background decorative elements */}
      <InkSplatter className="top-20 right-10 opacity-40" variant="cyan" size="xl" />
      <InkSplatter className="bottom-20 left-5 opacity-30" variant="magenta" size="lg" />
      
      {/* Floating doodles - mantidos mas reduzidos */}
      <StarDoodle className="absolute top-32 right-1/4 animate-float" color="yellow" />
      <SparkleDoodle className="absolute top-48 left-20 animate-float" style={{ animationDelay: '1s' }} />
      <StarDoodle className="absolute bottom-32 left-1/3 animate-float opacity-60" color="cyan" style={{ animationDelay: '0.5s' }} />

      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              {/* Purple overlay effect on image container */}
              <div className="relative rounded-[20px_30px_25px_35px] overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={hellenImage}
                  alt="Hellen Borges - Estrategista de Inovação"
                  className="w-full h-auto object-cover"
                />
                {/* Duotone overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-600/30 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Decorative border - traço mais fino e cor sólida */}
              <div className="absolute -inset-4 border-2 border-cyan-neon/40 rounded-[25px_35px_30px_40px] -z-10 transform rotate-1" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-secondary text-secondary-foreground px-6 py-3 rounded-[10px_15px_12px_18px] transform rotate-3 shadow-lg z-20">
              <span className="font-handwritten text-2xl font-bold">+10 anos</span>
              <span className="block text-sm font-semibold">de experiência</span>
            </div>
          </div>

          {/* Text content side */}
          <div className="order-1 lg:order-2 relative z-10">
            {/* Main headline - sem "Olá, eu sou" */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
              <span className="relative inline-block">
                Inovação
                {/* Sublinhado mais fino e elegante */}
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-yellow-neon/50 -skew-x-3 -z-10" />
              </span>
              {" "}não é sobre o que você faz,
              <br />
              <span className="text-cyan-neon">é sobre como você </span>
              <span className="relative inline-block">
                pensa
                <span className="absolute -bottom-0.5 left-0 w-full h-1 bg-cyan-neon/50 skew-x-2 -z-10" />
              </span>
              .
            </h1>

            {/* Subtitle - sem redundância do nome */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Estrategista de inovação e futuros. 
              Ajudo indivíduos e organizações a <span className="text-cyan-neon font-semibold">desbloquear potenciais latentes</span> para 
              construir um amanhã mais justo, sustentável e próspero.
            </p>

            {/* CTA - sem ícones de raio */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={scrollToContact}
                className="btn-neon px-8 py-4 text-lg rounded-[8px_14px_10px_16px]"
              >
                Descubra o Poder da Inovação
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24 fill-muted/30">
          <path d="M0,60 Q300,120 600,60 T1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
