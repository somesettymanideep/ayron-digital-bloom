import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Briefcase, Star, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: 150, suffix: "+", label: "Clients Served" },
  { icon: Briefcase, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: Star, value: 98, suffix: "%", label: "Client Retention Rate" },
  { icon: Calendar, value: 5, suffix: "+", label: "Years of Excellence" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutStats = () => (
  <section
    className="relative overflow-hidden"
    style={{ backgroundColor: "#f47c41", padding: "80px 0" }}
  >
    {/* Diagonal line grid texture */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)",
        backgroundSize: "28px 28px",
      }}
    />

    <div className="relative z-10 mx-auto px-6" style={{ maxWidth: 1200 }}>
      {/* Header */}
      <motion.div
        className="text-center"
        style={{ marginBottom: 50 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="font-body"
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            marginBottom: 12,
            display: "inline-block",
          }}
        >
          OUR NUMBERS
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 40,
            color: "#ffffff",
          }}
        >
          Results That Speak for Themselves
        </h2>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              className="text-center"
              style={{
                padding: "0 20px",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.20)"
                    : "none",
              }}
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.45 }}
            >
              <Icon
                size={36}
                color="#ffffff"
                strokeWidth={1.5}
                style={{ margin: "0 auto 16px" }}
              />
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 64,
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.80)",
                  marginTop: 8,
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Mobile: remove right border on 2nd and 4th */}
    <style>{`
      @media (max-width: 767px) {
        .grid-cols-2 > div:nth-child(2n) {
          border-right: none !important;
        }
        .grid-cols-2 > div {
          padding-top: 24px !important;
          padding-bottom: 24px !important;
        }
      }
    `}</style>
  </section>
);

export default AboutStats;
