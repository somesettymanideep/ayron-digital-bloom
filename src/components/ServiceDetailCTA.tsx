import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ServiceData } from "@/data/servicesData";

const ServiceDetailCTA = ({ service }: { service: ServiceData }) => (
  <section className="relative py-24 px-6 md:px-12 overflow-hidden" style={{ background: "#ffffff" }}>
    {/* Ghost text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display select-none pointer-events-none whitespace-nowrap" style={{ fontSize: "clamp(120px, 18vw, 280px)", color: "rgba(244,124,65,0.03)" }}>
      GROW
    </div>

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      {/* Label */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-6 h-[1px]" style={{ background: "#f47c41" }} />
        <span className="font-body text-[11px] tracking-[0.2em] uppercase" style={{ color: "#f47c41" }}>READY TO START?</span>
        <div className="w-6 h-[1px]" style={{ background: "#f47c41" }} />
      </div>

      {/* Heading */}
      <motion.h2
        className="font-display leading-[0.95]"
        style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span style={{ color: "#1a1a1a" }}>{service.ctaHeadingLine1}</span>
        <br />
        <span style={{ color: "#f47c41" }}>{service.ctaHeadingLine2}</span>
        <br />
        <span style={{ color: "#1a1a1a" }}>Today.</span>
      </motion.h2>

      {/* Subline */}
      <p className="font-body font-light text-[17px] mt-6 max-w-lg mx-auto" style={{ color: "#777" }}>
        {service.ctaOffer}
      </p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/contact"
          className="font-display text-lg px-12 py-5 transition-all hover:opacity-90"
          style={{ background: "#f47c41", color: "#1a1a1a" }}
        >
          Claim Free Audit Now
        </Link>
        <Link
          to="/contact"
          className="font-display text-lg px-12 py-5 transition-all hover:bg-[rgba(244,124,65,0.06)]"
          style={{ border: "2px solid #f47c41", color: "#f47c41" }}
        >
          Talk to an Expert
        </Link>
      </motion.div>

      {/* Trust row */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {["No Credit Card", "24hr Response", "100% Free Audit"].map((t) => (
          <span key={t} className="flex items-center gap-1.5 font-body text-xs" style={{ color: "#999" }}>
            <span style={{ color: "#f47c41" }}>✓</span> {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceDetailCTA;
