import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Services = () => (
  <main className="pt-16">
    {/* Hero */}
    <section className="bg-background grid-bg noise-overlay relative overflow-hidden py-24 md:py-32">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/[0.06] rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Our Services</span>
        <motion.h1
          className="font-display text-6xl md:text-8xl text-foreground mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h1>
        <motion.p
          className="font-serif-accent italic text-primary text-3xl md:text-4xl mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Best In Class
        </motion.p>
        <motion.p
          className="font-body font-light text-muted-foreground text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          From SEO to product photography, we offer 8 core services designed to move the needle for your brand.
        </motion.p>
      </div>
    </section>

    <ServicesSection />
    <StatsSection />
    <FAQSection />
    <CTASection />
    <Footer />
  </main>
);

export default Services;
