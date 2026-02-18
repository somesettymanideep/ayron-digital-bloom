import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";

import CTASection from "@/components/CTASection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WhyChooseSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
      
      <Footer />
    </main>
  );
};

export default Index;
