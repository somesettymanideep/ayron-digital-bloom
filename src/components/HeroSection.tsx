import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import heroGrowth from "@/assets/hero-3d-growth.jpg";



const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background grid-bg noise-overlay relative overflow-hidden pt-16">
      {/* Orange blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-[40%] w-80 h-80 bg-primary/[0.06] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[60%] flex flex-col px-6 md:px-12 lg:px-20 xl:px-24">

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

        </div>

        {/* RIGHT PANEL — Mobile */}
        <div className="flex lg:hidden w-full py-12 px-6 bg-background relative overflow-hidden items-center justify-center">
          <div className="relative w-full max-w-sm">
            <img src={heroGrowth} alt="Business growth" className="w-full h-auto object-cover" />
            {/* Google rating overlay */}
            <motion.div
              className="absolute -bottom-4 -left-2 z-20 bg-background border border-border/30 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl text-foreground">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="font-body text-[10px] text-muted-foreground">on Google</p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANEL — Desktop */}
        <div className="hidden lg:flex w-[40%] relative overflow-hidden items-center justify-center p-10">


          {/* Main image */}
          <motion.div
            className="relative z-10 w-[90%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={heroGrowth}
              alt="Business growth and digital marketing team"
              className="w-full h-auto object-cover shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />

            {/* Orange border accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary/20 -z-10" />
          </motion.div>

          {/* Google Rating Card — bottom left */}
          <motion.div
            className="absolute bottom-[12%] left-6 z-20 bg-background border border-border/30 px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl text-foreground">5.0</span>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-body text-xs text-muted-foreground">on Google</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 100+ Ratings Card — top right */}
          <motion.div
            className="absolute top-[8%] right-8 z-20 bg-primary px-5 py-4 shadow-[0_8px_30px_rgba(244,124,65,0.3)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-display text-3xl text-primary-foreground">100+</span>
              <p className="font-body text-xs text-primary-foreground/80">5-Star Ratings</p>
            </motion.div>
          </motion.div>

          {/* Corner accents */}
          <div className="absolute bottom-0 left-0 w-20 h-[3px] bg-primary" />
          <div className="absolute bottom-0 left-0 w-[3px] h-20 bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
