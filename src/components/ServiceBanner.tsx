import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ServiceData } from "@/data/servicesData";

interface Props {
  service: ServiceData;
}

const ServiceBanner = ({ service }: Props) => {
  const Icon = service.icon;

  return (
    <section className="relative bg-background grid-bg noise-overlay overflow-hidden">
      {/* Orange glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 md:py-28">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <span className="font-body text-xs text-primary">→</span>
          <Link to="/services" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <span className="font-body text-xs text-primary">→</span>
          <span className="font-body text-xs text-primary">{service.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          {/* Left — Title */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-14 h-14 bg-primary flex items-center justify-center">
                <Icon size={28} strokeWidth={1.5} className="text-primary-foreground" />
              </div>
              <span className="font-body text-xs font-medium text-primary uppercase tracking-[0.2em]">
                {service.category}
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              className="font-body font-light text-muted-foreground text-lg mt-4 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {service.desc}
            </motion.p>
          </div>

          {/* Right — Metrics */}
          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {service.metrics.slice(0, 3).map((m, i) => (
              <div key={i} className="text-center">
                <span className="font-display text-3xl md:text-4xl text-primary block">{m.value}</span>
                <span className="font-body text-xs text-muted-foreground mt-1 block">{m.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-12 h-[2px] bg-primary/20 relative overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ transformOrigin: "left" }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full w-1/3 bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: "400%" }}
            transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBanner;
