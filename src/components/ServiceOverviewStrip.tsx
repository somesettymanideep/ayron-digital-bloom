import { motion } from "framer-motion";
import { Clock, CheckSquare, TrendingUp, Wifi } from "lucide-react";
import { ServiceData } from "@/data/servicesData";

const icons = [Clock, CheckSquare, TrendingUp, Wifi];

const ServiceOverviewStrip = ({ service }: { service: ServiceData }) => (
  <section className="w-full py-16 px-6 md:px-12" style={{ background: "#f47c41" }}>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {service.overviewStats.map((stat, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Icon size={28} strokeWidth={1.5} className="mx-auto mb-3 text-white" />
            <p className="font-display text-4xl text-white">{stat.value}</p>
            <p className="font-body font-light text-sm text-white/80 mt-1">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default ServiceOverviewStrip;
