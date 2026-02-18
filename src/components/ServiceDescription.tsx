import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { ServiceData } from "@/data/servicesData";

const ServiceDescription = ({ service }: { service: ServiceData }) => (
  <section className="py-20 px-6 md:px-12" style={{ background: "#ffffff" }}>
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* LEFT — About */}
      <div>
        <span className="font-body text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "#f47c41" }}>
          ABOUT THIS SERVICE
        </span>
        <h2 className="font-display text-[52px] leading-[1] mt-3">
          <span style={{ color: "#1a1a1a" }}>What is </span>
          <span className="font-serif-accent italic" style={{ color: "#f47c41" }}>{service.title}?</span>
        </h2>

        <div className="mt-8 space-y-5">
          {service.longDesc.map((p, i) => (
            <motion.p
              key={i}
              className="font-body font-light text-base leading-relaxed"
              style={{ color: "#555" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Pull quote */}
        <motion.blockquote
          className="mt-10 py-5 px-6 font-serif-accent italic text-lg leading-relaxed"
          style={{ color: "#333", borderLeft: "4px solid #f47c41", background: "rgba(244,124,65,0.06)" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          "{service.quote}"
          <span className="block font-body not-italic text-sm mt-3" style={{ color: "#999" }}>— Team Ayron</span>
        </motion.blockquote>
      </div>

      {/* RIGHT — What's Included */}
      <div>
        <span className="font-body text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "#f47c41" }}>
          WHAT'S INCLUDED
        </span>

        <motion.div
          className="mt-6"
          style={{ border: "1.5px solid #f47c41" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {service.checklist.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3.5"
              style={{
                background: i % 2 === 0 ? "#ffffff" : "rgba(244,124,65,0.04)",
                borderBottom: i < service.checklist.length - 1 ? "1px solid rgba(244,124,65,0.15)" : "none",
              }}
            >
              <div className="w-5 h-5 flex items-center justify-center shrink-0" style={{ background: "#f47c41" }}>
                <Check size={14} className="text-white" />
              </div>
              <span className="font-body font-medium text-[15px]" style={{ color: "#333" }}>{item}</span>
            </div>
          ))}

          {/* CTA inside box */}
          <div className="p-5" style={{ borderTop: "1.5px solid #f47c41" }}>
            <Link
              to="/contact"
              className="block text-center font-display text-lg py-3 transition-all hover:opacity-90"
              style={{ background: "#f47c41", color: "#ffffff" }}
            >
              Get This Service →
            </Link>
            <p className="font-body font-light text-[13px] text-center mt-2" style={{ color: "#999" }}>
              Starting from {service.pricing}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServiceDescription;
