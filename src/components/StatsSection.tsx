import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 200, suffix: "+", label: "Brands Scaled", sub: "Across 10+ industries", orange: true },
  { number: 8, suffix: "", label: "Core Services", sub: "Full-stack digital solutions", orange: false },
  { number: 5, suffix: "M+", label: "Leads Generated", sub: "For clients nationwide", orange: true },
  { number: 98, suffix: "%", label: "Client Retention", sub: "They stay because results show", orange: false },
  { number: 7, suffix: "+", label: "Years of Excellence", sub: "In the digital marketing space", orange: true },
];

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

const StatBlock = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(stat.number, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="flex-1 text-center py-8 px-4 min-w-[180px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <p className={`font-display text-[60px] md:text-[80px] leading-none animate-num-glow ${stat.orange ? "text-primary" : "text-foreground"}`}>
        {count}{stat.suffix}
      </p>
      <p className={`font-body font-medium text-[13px] mt-2 ${stat.orange ? "text-foreground" : "text-primary"}`}>
        {stat.label}
      </p>
      <p className="font-body text-[11px] text-muted-foreground mt-1">{stat.sub}</p>
    </motion.div>
  );
};

const StatsSection = () => (
  <section className="bg-background relative overflow-hidden" style={{ borderTop: "2px solid hsl(20,89%,56%)", borderBottom: "2px solid hsl(20,89%,56%)" }}>
    {/* Ghost text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[150px] md:text-[250px] text-primary/[0.03] select-none pointer-events-none whitespace-nowrap">
      NUMBERS
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
      {/* Label */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="w-12 h-[1px] bg-primary" />
        <span className="text-primary text-[11px] tracking-[0.3em] uppercase font-body">By The Numbers</span>
        <div className="w-12 h-[1px] bg-primary" />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center">
            <StatBlock stat={stat} index={i} />
            {i < stats.length - 1 && (
              <div className="hidden md:block w-[1px] h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent mx-2 rotate-12" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
