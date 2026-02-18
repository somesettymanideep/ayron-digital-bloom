import { motion } from "framer-motion";
import { ServiceData } from "@/data/servicesData";

const ServiceResults = ({ service }: { service: ServiceData }) => (
  <section className="w-full py-20 px-6 md:px-12" style={{ background: "#f47c41" }}>
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="font-body text-xs tracking-[0.2em] uppercase font-medium text-white/70">REAL RESULTS</span>
        <h2 className="font-display text-[52px] text-white mt-2">What We've Achieved</h2>
        <p className="font-body font-light text-base text-white/80 mt-2">Numbers from actual client campaigns.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {service.caseStudies.map((cs, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 relative"
            style={{ borderTop: "3px solid #f47c41" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="font-body font-semibold text-sm" style={{ color: "#f47c41" }}>{cs.brand}</p>
            <span className="inline-block font-body text-xs px-2 py-0.5 mt-2 mb-4" style={{ color: "#f47c41", border: "1px solid rgba(244,124,65,0.4)" }}>
              {cs.industry}
            </span>
            <h3 className="font-display text-4xl mb-2" style={{ color: "#1a1a1a" }}>{cs.result}</h3>
            <p className="font-body font-light text-[13px]" style={{ color: "#999" }}>{cs.timeline}</p>

            {/* Simple bar chart */}
            <div className="flex items-end gap-2 mt-6 h-12">
              <div className="w-8 rounded-none" style={{ height: "30%", background: "rgba(244,124,65,0.2)" }} />
              <div className="w-8 rounded-none" style={{ height: "100%", background: "#f47c41" }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceResults;
