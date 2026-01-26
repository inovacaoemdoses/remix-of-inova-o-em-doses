import { InkSplatter } from "@/components/decorative/InkSplatter";
import { StarDoodle, SparkleDoodle } from "@/components/decorative/Doodles";
import { Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open('https://wa.me/5541987859393?text=Olá! Vim do site e gostaria de saber mais sobre os serviços de inovação.', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:hellenborges@inovacaoemdoses.com.br?subject=Contato pelo Site';
  };

  const socialLinks = [
    { 
      name: "Instagram", 
      url: "https://instagram.com/inovacaoemdoses", 
      icon: Instagram 
    },
    { 
      name: "YouTube", 
      url: "https://youtube.com/@Inovacaoemdoses", 
      icon: Youtube 
    },
    { 
      name: "TikTok", 
      url: "https://tiktok.com/@inovacaoemdoses", 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    { 
      name: "Spotify", 
      url: "https://open.spotify.com/show/inovacaoemdoses", 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    },
  ];

  return (
    <footer id="contato" className="relative py-28 overflow-hidden bg-muted/20">
      {/* Background decorative elements */}
      <InkSplatter className="top-10 left-10 opacity-20" variant="magenta" size="xl" />
      <InkSplatter className="bottom-20 right-20 opacity-30" variant="cyan" size="lg" />
      <StarDoodle className="absolute top-16 right-1/4 animate-float" color="yellow" />
      <SparkleDoodle className="absolute bottom-40 left-1/3 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-handwritten text-cyan-neon text-2xl mb-4 block">Vamos conversar?</span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Vamos transformar sua{" "}
            <span className="relative inline-block">
              ideia visionária
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-cyan-neon/40 -skew-x-3 -z-10" />
            </span>
            {" "}em um projeto de{" "}
            <span className="relative inline-block">
              impacto tangível
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-neon/40 skew-x-2 -z-10" />
            </span>
            ?
          </h2>

          {/* CTA Buttons - sem ícones de raio */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            {/* WhatsApp button */}
            <button
              onClick={openWhatsApp}
              className="btn-neon px-8 py-4 text-lg rounded-[8px_14px_10px_16px] flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Fale no WhatsApp
            </button>

            {/* Email button */}
            <button
              onClick={openEmail}
              className="btn-cyan px-8 py-4 text-lg rounded-[10px_14px_12px_16px] flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar E-mail
            </button>
          </div>
        </div>

        {/* Contact info, social and logo */}
        <div className="border-t border-border/30 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Inovação em Doses"
                className="w-16 h-16 rounded-full object-cover border-2 border-cyan-neon"
              />
              <div>
                <h4 className="font-bold text-foreground text-lg">Inovação em Doses</h4>
                <p className="text-muted-foreground text-sm">Transformando ideias em impacto</p>
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
              <div>
                <span className="font-handwritten text-cyan-neon text-lg">E-mail</span>
                <p className="text-foreground">hellenborges@inovacaoemdoses.com.br</p>
              </div>
              <div>
                <span className="font-handwritten text-yellow-neon text-lg">WhatsApp</span>
                <p className="text-foreground">+55 41 98785.9393</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-cyan-neon hover:bg-cyan-neon/20 transition-all"
                    title={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-12 text-muted-foreground text-sm">
            <p>© {currentYear} Inovação em Doses. Todos os direitos reservados.</p>
            <p className="mt-2 font-handwritten text-lg">
              Feito com <span className="text-magenta">♥</span> e muita <span className="text-cyan-neon">inovação</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
