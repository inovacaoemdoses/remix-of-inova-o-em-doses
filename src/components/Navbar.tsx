import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Reconhecimento", href: "#reconhecimento" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Inovação em Doses"
              className="w-12 h-12 rounded-full object-cover border-2 border-cyan-neon group-hover:border-yellow-neon transition-colors"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-foreground text-lg">Inovação</span>
              <span className="font-handwritten text-cyan-neon text-lg ml-1">em Doses</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-cyan-neon transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-neon group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            
            {/* CTA Button - sem ícone de estrela */}
            <button
              onClick={() => scrollToSection("#contato")}
              className="btn-neon px-6 py-2 text-sm rounded-[6px_10px_8px_12px]"
            >
              Fale Comigo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-cyan-neon transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground hover:text-cyan-neon transition-colors font-medium text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contato")}
                className="btn-neon px-6 py-3 text-sm rounded-[6px_10px_8px_12px] mt-2"
              >
                Fale Comigo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
