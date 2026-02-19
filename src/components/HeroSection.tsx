import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart3, Search, Globe, Mail, Camera, ShoppingCart, Users, Star } from "lucide-react";
import heroCharacter from "@/assets/hero-character.png";

const services = [
  "SEO", "BRANDING", "INFLUENCER MARKETING", "WEB DESIGN",
  "EMAIL", "ECOMMERCE", "PRODUCT SHOOT", "DIGITAL MARKETING"
];

const floatingIcons = [
  { icon: BarChart3, label: "Analytics", pos: "top-[12%] left-[8%]", bg: "bg-background", iconColor: "text-foreground", delay: 0 },
  { icon: Search, label: "SEO", pos: "top-[10%] right-[12%]", bg: "bg-secondary", iconColor: "text-primary", delay: 0.5 },
  { icon: Globe, label: "Web", pos: "top-[40%] left-[4%]", bg: "bg-primary", iconColor: "text-secondary", delay: 1 },
  { icon: Mail, label: "Email", pos: "top-[42%] right-[6%]", bg: "bg-secondary", iconColor: "text-background", delay: 1.5 },
  { icon: Camera, label: "Brand", pos: "bottom-[28%] left-[10%]", bg: "bg-background", iconColor: "text-primary", delay: 2 },
  { icon: ShoppingCart, label: "Ecom", pos: "bottom-[24%] right-[10%]", bg: "bg-primary", iconColor: "text-secondary", delay: 0.8 },
  { icon: Users, label: "Influencer", pos: "top-[4%] left-[40%]", bg: "bg-background", iconColor: "text-primary", delay: 1.2, large: true },
  { icon: Star, label: "5★", pos: "bottom-[44%] right-[18%]", bg: "bg-secondary", iconColor: "text-primary", delay: 0.3 },
];

const MobileRightPanel = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
    <motion.img
      src={heroCharacter}
      alt="3D digital marketer character"
      className="w-[260px] h-auto drop-shadow-2xl relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background grid-bg noise-overlay relative overflow-hidden pt-16">
      {/* Orange blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-[40%] w-80 h-80 bg-primary/[0.06] rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[60%] flex flex-col px-6 md:px-12 lg:px-16">

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
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground font-display text-lg px-9 py-4 hover:bg-agency-orange-dark transition-colors inline-block"
              >
                Start Your Journey
              </Link>
              <Link
                to="/services"
                className="text-foreground font-body text-base hover:underline underline-offset-4 transition-all group"
              >
                View Our Work <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Link>
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

        {/* RIGHT PANEL — Mobile */}
        <div className="flex lg:hidden w-full h-[50vh] bg-background relative overflow-hidden items-center justify-center">
          <MobileRightPanel />
        </div>

        {/* RIGHT PANEL — Desktop */}
        <div className="hidden lg:flex w-[40%] bg-background relative overflow-hidden items-center justify-center">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />

          {/* Large orange accent block */}
          <motion.div
            className="absolute top-[15%] right-[10%] w-[280px] h-[360px] bg-primary/[0.08]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          {/* Thin frame outline */}
          <motion.div
            className="absolute top-[12%] right-[7%] w-[300px] h-[380px] border border-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/[0.06] blur-[100px]" />

          {/* 3D Character — main visual */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            <motion.img
              src={heroCharacter}
              alt="3D digital marketer character"
              className="w-[360px] h-auto drop-shadow-[0_20px_60px_rgba(244,124,65,0.25)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Floating service icons — compact orbit */}
          {floatingIcons.slice(0, 6).map((item, i) => {
            const positions = [
              "top-[8%] left-[12%]",
              "top-[6%] right-[18%]",
              "top-[38%] left-[2%]",
              "top-[45%] right-[3%]",
              "bottom-[22%] left-[8%]",
              "bottom-[18%] right-[8%]",
            ];
            return (
              <motion.div
                key={i}
                className={`absolute ${positions[i]} z-20`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.4, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="bg-background border border-border/30 w-11 h-11 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
                  animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <item.icon className="w-[18px] h-[18px] text-primary" />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Stat card — top left */}
          <motion.div
            className="absolute top-20 left-4 z-20 bg-background border border-border/30 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-500 animate-pulse" />
                <span className="font-display text-sm text-foreground">Campaign Live</span>
              </div>
              <span className="font-body text-[10px] text-muted-foreground">3 Active · Running</span>
            </motion.div>
          </motion.div>

          {/* Stat card — bottom right */}
          <motion.div
            className="absolute bottom-20 right-4 z-20 bg-primary px-4 py-3 shadow-[0_8px_30px_rgba(244,124,65,0.3)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <BarChart3 className="w-4 h-4 text-primary-foreground" />
                <span className="font-display text-sm text-primary-foreground">+127%</span>
              </div>
              <span className="font-body text-[10px] text-primary-foreground/70">Organic Traffic ↑</span>
            </motion.div>
          </motion.div>

          {/* Corner accent lines */}
          <div className="absolute bottom-0 left-0 w-24 h-[3px] bg-primary" />
          <div className="absolute bottom-0 left-0 w-[3px] h-24 bg-primary" />
          <div className="absolute top-0 right-0 w-16 h-[2px] bg-primary/40" />
          <div className="absolute top-0 right-0 w-[2px] h-16 bg-primary/40" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
