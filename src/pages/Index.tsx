import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <b>Teste<b/>
        <HeroSection />
        <SocialProofSection />
        <AboutSection />
        <ServicesSection />
        <AuthoritySection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
