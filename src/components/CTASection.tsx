import { motion } from "framer-motion";

const servicePills = ["SEO", "Branding", "Email", "Web Design", "Influencer", "Ecommerce", "Product Shoot"];

const CTASection = () => (
  <section className="bg-background relative overflow-hidden grid-bg noise-overlay" style={{ minHeight: "70vh" }}>
    {/* Ghost text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[200px] md:text-[350px] text-primary/[0.05] select-none pointer-events-none whitespace-nowrap">
      GROW
    </div>

    {/* Orange glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />

    <div className="relative z-10 flex flex-col items-center justify-center py-24 px-6 text-center">
      {/* Label */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-[1px] bg-primary" />
        <span className="text-primary text-[11px] tracking-[0.3em] uppercase font-body">Ready to Scale?</span>
        <div className="w-8 h-[1px] bg-primary" />
      </div>

      {/* Heading */}
      <motion.h2
        className="font-display text-[60px] sm:text-[75px] md:text-[90px] leading-[0.95] mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.span
          className="block text-foreground"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          Let's Build
        </motion.span>
        <motion.span
          className="block text-stroke-orange"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          Something
        </motion.span>
        <motion.span
          className="block text-foreground"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          Great Together.
        </motion.span>
      </motion.h2>

      <p className="font-body font-light text-muted-foreground text-[17px] max-w-[560px] mb-10 leading-relaxed">
        Stop losing leads to competitors. Let Ayron Digital Solutions craft a strategy that gets you seen, clicked, and chosen.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
        <a
          href="#contact"
          className="bg-primary text-primary-foreground font-display text-xl px-11 py-5 hover:bg-agency-orange-dark transition-colors"
        >
          Book Free Consultation
        </a>
        <a
          href="#services"
          className="border border-foreground text-foreground font-display text-xl px-11 py-5 hover:bg-foreground hover:text-background transition-colors"
        >
          View Our Services
        </a>
      </div>

      <p className="font-body italic text-xs text-muted-foreground mb-10">
        No commitment. No fluff. Just results.
      </p>

      {/* Service pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {servicePills.map((s) => (
          <span key={s} className="border border-primary/40 text-primary font-body text-xs px-4 py-1.5">
            {s}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default CTASection;
