import { motion } from "framer-motion";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsMasonry from "@/components/TestimonialsMasonry";
import StatsSection from "@/components/StatsSection";
import FounderMessage from "@/components/FounderMessage";
import TeamCarousel from "@/components/TeamCarousel";
import ToolsSection from "@/components/ToolsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const About = () => (
  <main className="pt-16">
    {/* Hero */}
    <section className="bg-background grid-bg noise-overlay relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.06] rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">About Us</span>
        <motion.h1
          className="font-display text-6xl md:text-8xl text-foreground mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We Are Ayron
        </motion.h1>
        <motion.p
          className="font-serif-accent italic text-primary text-3xl md:text-4xl mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Digital Solutions
        </motion.p>
        <motion.p
          className="font-body font-light text-muted-foreground text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          A full-service digital marketing agency that blends strategy, creativity, and data to help brands grow across India and beyond.
        </motion.p>
      </div>
    </section>

    {/* Story */}
    <section className="bg-secondary py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Our Story</span>
          <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground mt-3 mb-6">
            Built on Passion,<br />Driven by <span className="text-primary">Results</span>
          </h2>
          <div className="space-y-4 font-body font-light text-secondary-foreground/70 text-base leading-relaxed">
            <p>
              Ayron Digital Solutions was born from the belief that every brand — no matter how small — deserves world-class marketing. We started with a simple mission: deliver measurable growth, not vanity metrics.
            </p>
            <p>
              Over 7+ years, we've scaled 200+ brands across industries including FMCG, fashion, tech, real estate, and healthcare. Our team of strategists, designers, and marketers works as an extension of your business.
            </p>
          </div>
        </div>
        <div className="bg-primary p-10 relative">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }} />
          <div className="relative z-10">
            <span className="font-display text-[120px] text-secondary/90 leading-none block">7+</span>
            <p className="font-display text-2xl text-secondary mt-2">Years of Excellence</p>
            <p className="font-body text-secondary/70 text-sm mt-2">In the digital marketing space</p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="bg-background py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          {
            label: "Our Mission",
            heading: "Drive Real Growth",
            text: "To empower businesses with data-driven digital strategies that generate leads, build brand loyalty, and deliver measurable ROI — not just impressions."
          },
          {
            label: "Our Vision",
            heading: "India's Most Trusted Agency",
            text: "To become the go-to growth partner for brands across India, known for transparency, creativity, and relentless results."
          }
        ].map((item) => (
          <motion.div
            key={item.label}
            className="border border-border/40 p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">{item.label}</span>
            <h3 className="font-display text-3xl text-foreground mt-3 mb-4">{item.heading}</h3>
            <p className="font-body font-light text-muted-foreground text-base leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <FounderMessage />
    <TeamCarousel />
    <WhyChooseSection />
    <StatsSection />
    <TestimonialsMasonry />
    <ToolsSection />
    <CTASection />
    <Footer />
  </main>
);

export default About;
