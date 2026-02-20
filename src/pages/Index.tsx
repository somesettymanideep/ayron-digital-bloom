import HeroSection from "@/components/HeroSection";
import ServicesMarquee from "@/components/ServicesMarquee";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ServicesMarquee />
      <ClientsSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
