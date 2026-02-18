import { useState } from "react";
import { motion } from "framer-motion";
import adsLogo from "@/assets/ads-logo.png";

const navLinks = ["Services", "Work", "About", "Blog", "Contact"];

const services = [
  "SEO", "BRANDING", "INFLUENCER MARKETING", "WEB DESIGN",
  "EMAIL", "ECOMMERCE", "PRODUCT SHOOT", "DIGITAL MARKETING"
];

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="min-h-screen bg-background grid-bg noise-overlay relative overflow-hidden">
      {/* Orange blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-[40%] w-80 h-80 bg-primary/[0.06] rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[60%] flex flex-col px-6 md:px-12 lg:px-16">
          {/* Nav */}
          <nav className="flex items-center justify-between py-6">
            <div className="flex items-center gap-2">
              <img src={adsLogo} alt="Ayron Digital Solutions" className="h-10" />
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-foreground/80 hover:text-primary font-body text-[13px] tracking-widest uppercase transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden md:inline-block bg-primary text-primary-foreground font-display text-lg px-6 py-2 hover:bg-agency-orange-dark transition-colors"
            >
              Get Started
            </a>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden flex flex-col gap-4 pb-6">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-foreground/80 font-body text-sm tracking-widest uppercase">
                  {link}
                </a>
              ))}
              <a href="#contact" className="bg-primary text-primary-foreground font-display text-lg px-6 py-2 w-fit">
                Get Started
              </a>
            </div>
          )}

          {/* Hero content */}
          <div className="flex-1 flex flex-col justify-center py-12 lg:py-0">
            <div className="mb-8">
              <motion.h1
                className="font-display text-[60px] sm:text-[80px] lg:text-[100px] leading-[0.95] tracking-tight"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                <motion.span
                  className="block text-foreground"
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                >
                  We Grow
                </motion.span>
                <motion.span
                  className="block text-stroke-orange"
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                >
                  Brands
                </motion.span>
                <motion.span
                  className="block text-foreground"
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                >
                  That Matter.
                </motion.span>
              </motion.h1>
              <motion.p
                className="font-serif-accent italic text-primary text-2xl sm:text-[32px] mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Digitally
              </motion.p>
            </div>

            <motion.p
              className="font-body font-light text-muted-foreground text-[17px] max-w-[480px] mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              From SEO to Influencer Marketing, Ayron Digital Solutions turns your vision into measurable growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="bg-primary text-primary-foreground font-display text-lg px-9 py-4 hover:bg-agency-orange-dark transition-colors inline-block"
              >
                Start Your Journey
              </a>
              <a
                href="#work"
                className="text-foreground font-body text-base hover:underline underline-offset-4 transition-all group"
              >
                View Our Work <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 text-xs font-body text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <span><span className="text-primary">✓</span> 200+ Brands Scaled</span>
              <span><span className="text-primary">✓</span> 8 Services</span>
              <span><span className="text-primary">✓</span> Pan-India</span>
            </motion.div>
          </div>

          {/* Ticker */}
          <div className="border-t border-border/30 py-4 overflow-hidden">
            <div className="animate-ticker whitespace-nowrap flex">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-primary text-[11px] tracking-[0.3em] uppercase font-body mr-0">
                  {services.map((s) => s + " · ").join("")}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden lg:flex w-[40%] bg-primary relative overflow-hidden items-center justify-center">
          {/* Dot grid overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }} />

          {/* 360 text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
            <span className="font-display text-[180px] text-secondary/90 leading-none block animate-float">
              360°
            </span>
          </div>

          {/* Geometric shapes */}
          <div className="absolute top-16 right-12 w-32 h-32 border-4 border-background/20 animate-float-slow" />
          <div className="absolute bottom-24 left-8 w-24 h-24 bg-background/10 animate-float" />
          <div className="absolute top-1/3 left-12 w-16 h-1 bg-secondary/40" />
          <div className="absolute bottom-1/3 right-16 w-1 h-20 bg-secondary/40" />

          {/* Service chips */}
          <div className="absolute top-20 left-8 bg-background text-foreground font-body text-xs px-4 py-2 animate-float-slow">
            SEO
          </div>
          <div className="absolute top-40 right-10 bg-background text-foreground font-body text-xs px-4 py-2 animate-float" style={{ animationDelay: "1s" }}>
            Branding
          </div>
          <div className="absolute bottom-40 left-16 bg-background text-foreground font-body text-xs px-4 py-2 animate-float-slow" style={{ animationDelay: "2s" }}>
            Email
          </div>
          <div className="absolute bottom-20 right-20 bg-background text-foreground font-body text-xs px-4 py-2 animate-float" style={{ animationDelay: "0.5s" }}>
            Influencer
          </div>

          {/* Stats bubble */}
          <div className="absolute bottom-8 right-8 bg-secondary text-secondary-foreground p-4 z-10">
            <p className="font-display text-lg">200+ Happy Clients</p>
            <div className="flex gap-1 text-primary text-sm">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
