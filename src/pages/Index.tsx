import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main>
      <SEO
        title="We Grow Brands That Matter"
        description="From SEO to Influencer Marketing, Ayron Digital Solutions turns your vision into measurable growth. 200+ brands scaled across India."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ayron Digital Solutions",
          url: "https://ayron-digital-bloom.lovable.app",
          description: "Full-service digital marketing agency specializing in SEO, brand identity, web design, and influencer marketing.",
          sameAs: [],
        }}
      />
      <HeroSection />
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
