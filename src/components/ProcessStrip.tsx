import { motion } from "framer-motion";
import { Search, Target, Rocket, SlidersHorizontal, ClipboardList } from "lucide-react";

const steps = [
  { num: "01", title: "Discovery", desc: "We learn your brand, goals, and audience.", icon: Search },
  { num: "02", title: "Strategy", desc: "Custom digital roadmap built for your market.", icon: Target },
  { num: "03", title: "Execution", desc: "We launch campaigns, builds, and content.", icon: Rocket },
  { num: "04", title: "Optimize", desc: "A/B testing and real-time performance tuning.", icon: SlidersHorizontal },
  { num: "05", title: "Report", desc: "Transparent results delivered monthly to you.", icon: ClipboardList },
];

const ProcessStrip = () => {
  return (
    <section className="w-full py-[70px] px-6 md:px-12 relative overflow-hidden" style={{ background: "#f47c41" }}>
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.h2
          className="font-display text-[52px] text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How We Work
        </motion.h2>
        <p className="font-body font-light text-base text-white/80 mt-2">
          Simple process. Powerful results.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-[36px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-white/40 z-0">
          {/* Animated pulse dot */}
          <motion.div
            className="absolute top-[-4px] w-2.5 h-2.5 rounded-full bg-white"
            animate={{ left: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
        </div>

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.num}
              className="flex flex-col items-center text-center relative z-10 flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Icon box */}
              <div className="w-[72px] h-[72px] bg-white flex items-center justify-center mb-4 relative">
                <Icon size={32} strokeWidth={1.5} style={{ color: "#f47c41" }} />
                {/* Number badge */}
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center font-body text-[11px] font-bold text-white rounded-full"
                  style={{ background: "#f47c41", border: "2px solid white" }}
                >
                  {step.num}
                </span>
              </div>

              <h3 className="font-display text-[22px] text-white mb-1">{step.title}</h3>
              <p className="font-body font-light text-[13px] text-white/80 max-w-[180px] leading-relaxed">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessStrip;
