import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background grid-bg noise-overlay relative overflow-hidden pt-16">
      {/* Orange blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-[40%] w-80 h-80 bg-primary/[0.06] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[50%] flex flex-col px-6 md:px-12 lg:px-16 xl:px-20">

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
              Vijayawada &amp; Guntur's trusted digital marketing agency. From SEO to Influencer Marketing, we turn your vision into measurable growth.
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
        <div className="flex lg:hidden w-full py-12 px-6  relative overflow-hidden items-center justify-center">
          <div className="relative w-full max-w-lg">
            <motion.div className="w-full h-auto drop-shadow-[0_20px_40px_rgba(244,124,65,0.2)] rounded-2xl overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
              <DotLottieReact src="https://lottie.host/b1106e82-fb34-409f-b536-ae70c7e1de9c/NY1FASEsO6.json" loop autoplay />
            </motion.div>
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
        <div className="hidden lg:flex w-[50%] relative overflow-hidden items-center justify-center">


          {/* Main 3D character */}
          <motion.div
            className="relative z-10 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            <div className="w-full h-auto rounded-2xl overflow-hidden">
              <DotLottieReact src="https://lottie.host/b1106e82-fb34-409f-b536-ae70c7e1de9c/NY1FASEsO6.json" loop autoplay />
            </div>
          </motion.div>

          {/* Google Rating Card — bottom left */}
          <motion.div
            className="absolute bottom-[12%] left-6 z-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="bg-background/90 backdrop-blur-md border border-border/40 shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-2xl px-5 py-4 min-w-[170px]"
            >
              {/* Header row: G logo + label */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm border border-border/20">
                  <svg width="14" height="14" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                </div>
                <span className="font-body text-[11px] text-muted-foreground tracking-wide uppercase">Google Review</span>
              </div>
              {/* Score + stars */}
              <div className="flex items-end gap-2 mb-1.5">
                <span className="font-display text-[2.2rem] leading-none text-foreground">5.0</span>
                <div className="pb-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-body text-[11px] text-muted-foreground">Based on <span className="text-foreground font-medium">100+</span> reviews</p>
            </motion.div>
          </motion.div>

          {/* Target Icon — top right */}
          <motion.div
            className="absolute top-[8%] right-6 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, 360] }}
              transition={{ 
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "linear" }
              }}
            >
              <img src={targetIcon} alt="Target" className="w-20 h-20 drop-shadow-lg" />
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
