import { useState } from "react";
import ServicesHero from "@/components/ServicesHero";
import SEO from "@/components/SEO";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessStrip from "@/components/ProcessStrip";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
     <main className="pt-16">
      <SEO
        title="Our Services"
        description="Explore Ayron Digital Solutions' full range of services — SEO, web design, brand identity, email marketing, influencer marketing, and more."
        canonical="/services"
      />
      <ServicesHero
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ServicesGrid activeFilter={activeFilter} searchQuery={searchQuery} />
      <ProcessStrip />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Services;
