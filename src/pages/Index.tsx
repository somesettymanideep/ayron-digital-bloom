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
        title="Best Digital Marketing Agency in Vijayawada & Guntur"
        description="Ayron Digital Solutions is the best digital marketing agency in Vijayawada and Guntur. From SEO to Influencer Marketing, we turn your vision into measurable growth. 200+ brands scaled."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ayron Digital Solutions",
          url: "https://ayrondigitalsolutions.com",
          description: "Best digital marketing agency in Vijayawada and Guntur specializing in SEO, brand identity, web design, and influencer marketing.",
          areaServed: ["Vijayawada", "Guntur"],
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
