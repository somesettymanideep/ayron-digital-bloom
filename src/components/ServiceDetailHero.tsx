import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ServiceData } from "@/data/servicesData";

interface Props {
  service: ServiceData;
}

const ServiceDetailHero = ({ service }: Props) => {
  const Icon = service.icon;

  return (
    <section className="relative w-full min-h-[60vh] overflow-hidden" style={{ background: "#ffffff" }}>
      {/* Orange radial gradient */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(244,124,65,0.10) 0%, transparent 70%)" }} />
      {/* Faint dot grid */}
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(244,124,65,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6">
            <Link to="/" className="font-body text-xs" style={{ color: "#999" }}>Home</Link>
            <span className="font-body text-xs" style={{ color: "#f47c41" }}>→</span>
            <Link to="/services" className="font-body text-xs" style={{ color: "#999" }}>Services</Link>
            <span className="font-body text-xs" style={{ color: "#f47c41" }}>→</span>
            <span className="font-body text-xs" style={{ color: "#f47c41" }}>{service.title}</span>
          </nav>

          {/* Category badge */}
          <span className="inline-block font-body text-xs font-medium px-3 py-1.5 mb-5 text-white" style={{ background: "#f47c41" }}>
            {service.category}
          </span>

          {/* Heading */}
          <motion.h1
            className="font-display leading-[0.95]"
            style={{ fontSize: "clamp(56px, 6.5vw, 84px)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: "#f47c41" }}>{service.titleLine1}</span>
            <br />
            <span style={{ color: "#1a1a1a" }}>{service.titleLine2}</span>
            <br />
            <span style={{ WebkitTextStroke: "2px #f47c41", color: "transparent" }}>{service.strokeLine}</span>
            <br />
            <span style={{ color: "#1a1a1a" }}>{service.titleLine4}</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="font-body font-light text-[17px] mt-6 max-w-md leading-relaxed"
            style={{ color: "#777" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {service.desc}
          </motion.p>

          {/* Metrics row */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {service.metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-4">
                <div>
                  <span className="font-display text-2xl" style={{ color: "#f47c41" }}>{m.value}</span>
                  <span className="font-body text-xs block" style={{ color: "#999" }}>{m.label}</span>
                </div>
                {i < service.metrics.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#f47c41" }} />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Row */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/contact"
              className="font-display text-lg px-8 py-3.5 transition-all duration-300 hover:opacity-90"
              style={{ background: "#f47c41", color: "#1a1a1a" }}
            >
              Get Free Audit
            </Link>
            <Link
              to="/contact"
              className="font-body text-sm font-semibold hover:underline"
              style={{ color: "#f47c41" }}
            >
              See Case Studies →
            </Link>
          </motion.div>
        </div>

        {/* RIGHT - 3D Illustration Area */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center min-h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Glow */}
          <div className="absolute w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(244,124,65,0.12) 0%, transparent 70%)" }} />

          {/* Large icon */}
          <div className="w-40 h-40 flex items-center justify-center relative z-10" style={{ background: "#f47c41", boxShadow: "0 20px 60px rgba(244,124,65,0.3)" }}>
            <Icon size={72} strokeWidth={1.2} className="text-white" />
          </div>

          {/* Floating keyword bubbles */}
          {service.tags.map((tag, i) => {
            const positions = [
              { top: "10%", left: "5%" },
              { top: "20%", right: "5%" },
              { bottom: "15%", left: "10%" },
            ];
            return (
              <motion.span
                key={tag}
                className="absolute font-body text-xs px-3 py-1.5 bg-white z-10"
                style={{ color: "#f47c41", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", ...positions[i % 3] }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
              >
                {tag}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
