import hellenImage2 from "@/assets/hellen-2.png";
import { InkSplatter } from "@/components/decorative/InkSplatter";
import { StarDoodle, ScribbleUnderline } from "@/components/decorative/Doodles";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden bg-muted/20">
      {/* Background decorative elements */}
      <InkSplatter className="top-10 left-10 opacity-20" variant="purple" size="lg" />
      <StarDoodle className="absolute top-20 right-20 animate-float" color="yellow" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            {/* Section label */}
            <span className="font-handwritten text-cyan-neon text-2xl mb-2 block">Quem sou eu?</span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
              A{" "}
              <span className="relative inline-block">
                Estrategista
                <ScribbleUnderline color="yellow" className="absolute -bottom-2 left-0" />
              </span>
              {" "}por trás da{" "}
              <span className="text-cyan-neon">Transformação</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Minha missão é <strong className="text-foreground">catalisar a mudança</strong>. 
              Com background como <span className="text-cyan-neon">chefe escoteira</span> e experiência 
              internacional na <span className="text-yellow-neon font-semibold">União Mundial dos Escoteiros em Londres</span>, 
              trago uma visão humana e global para o mundo corporativo.
            </p>

            {/* Academic highlight card */}
            <div className="sketch-card p-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-neon/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    Destaque Acadêmico
                  </h3>
                  <p className="text-muted-foreground">
                    <strong className="text-cyan-neon">Pesquisadora e Mestranda</strong> em Administração pela UFPR, 
                    focada em soluções sustentáveis e proteínas alternativas. 
                    Unindo o <span className="text-yellow-neon">rigor científico</span> à criatividade prática.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main image with sketch border */}
              <div className="relative rounded-[25px_35px_30px_40px] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={hellenImage2}
                  alt="Hellen Borges apresentando"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-4 border-4 border-dotted border-yellow-neon/30 rounded-[30px_40px_35px_45px] -z-10 transform -rotate-1" />
            </div>

            {/* Stats floating badges */}
            <div className="absolute -top-4 -left-4 bg-cyan-neon text-purple-dark px-4 py-2 rounded-[8px_12px_10px_14px] transform -rotate-6 shadow-lg">
              <span className="font-handwritten text-xl font-bold block">UFPR</span>
              <span className="text-xs font-bold">Mestrado</span>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-yellow-neon text-purple-dark px-4 py-2 rounded-[10px_14px_12px_16px] transform rotate-3 shadow-lg">
              <span className="font-handwritten text-xl font-bold block">Global</span>
              <span className="text-xs font-bold">Experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
