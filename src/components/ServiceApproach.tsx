import { motion } from "framer-motion";
import { ServiceData } from "@/data/servicesData";

const ServiceApproach = ({ service }: { service: ServiceData }) => (
  <section className="py-20 px-6 md:px-12 relative" style={{ background: "#ffffff" }}>
    {/* Faint dot grid */}
    <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(244,124,65,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

    <div className="relative z-10 max-w-4xl mx-auto">
      {/* Header */}
      <span className="font-body text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "#f47c41" }}>
        HOW WE DO IT
      </span>
      <h2 className="font-display text-[56px] leading-[1] mt-3 mb-14">
        <span style={{ color: "#1a1a1a" }}>Our {service.titleLine1} </span>
        <span style={{ color: "#f47c41" }}>Process</span>
      </h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical dashed line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-0 border-l-2 border-dashed" style={{ borderColor: "rgba(244,124,65,0.3)" }} />

        <div className="space-y-10">
          {service.steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Number circle */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 relative z-10 bg-white" style={{ border: "2px solid #f47c41" }}>
                <span className="font-display text-sm" style={{ color: "#f47c41" }}>{String(i + 1).padStart(2, "0")}</span>
              </div>

              {/* Card */}
              <div className="flex-1 bg-white p-6" style={{ borderTop: "3px solid #f47c41", boxShadow: "0 4px 20px rgba(244,124,65,0.08)" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-body font-semibold text-lg" style={{ color: "#1a1a1a" }}>{step.title}</h3>
                  <span className="font-body text-xs px-3 py-1 shrink-0" style={{ background: "#f47c41", color: "#ffffff" }}>
                    {step.duration}
                  </span>
                </div>
                <p className="font-body font-light text-sm" style={{ color: "#777" }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServiceApproach;
