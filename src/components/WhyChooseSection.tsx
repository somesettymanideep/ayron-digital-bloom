import { motion } from "framer-motion";
import { BarChart3, Layers, UserCheck, LineChart, Wallet, Globe } from "lucide-react";

const reasons = [
  { icon: BarChart3, title: "Data-Driven Strategy", desc: "We don't guess. Every campaign is backed by analytics, audience insights, and market research." },
  { icon: Layers, title: "Full-Service Under One Roof", desc: "From brand identity to product shoots — handle everything with one trusted agency." },
  { icon: UserCheck, title: "Dedicated Account Manager", desc: "You get a single point of contact who knows your brand inside out." },
  { icon: LineChart, title: "Transparent Reporting", desc: "Live dashboards and monthly reports. No fluff, just real numbers." },
  { icon: Wallet, title: "Scalable for Every Budget", desc: "Whether you're a startup or an enterprise, we have a plan that fits." },
  { icon: Globe, title: "Pan-India Reach", desc: "Offices and client networks spanning across all major Indian cities." },
];

const WhyChooseSection = () => {
  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row min-h-[700px]">
        {/* LEFT - Orange */}
        <div className="w-full lg:w-[45%] bg-primary relative overflow-hidden flex flex-col justify-center px-8 md:px-16 py-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[70px] md:text-[90px] leading-[0.95]">
              <span className="block text-primary-foreground">WHY</span>
              <span className="block text-stroke-white">CHOOSE</span>
              <span className="block text-primary-foreground">ADS?</span>
            </h2>
            <p className="font-serif-accent italic text-secondary text-xl mt-4">
              Because results speak louder.
            </p>
          </motion.div>

          {/* Decoration */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-foreground/20" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />

          {/* Badge */}
          <div className="absolute top-8 right-8 bg-secondary text-secondary-foreground px-4 py-2 font-body text-sm">
            ★ 4.9 / 5 Client Rating
          </div>
        </div>

        {/* RIGHT - White grid */}
        <div className="w-full lg:w-[55%] bg-secondary dot-grid-light">
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  className="p-8 border-b border-r border-primary/10 group hover:border-l-[3px] hover:border-l-primary transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="w-12 h-12 border border-secondary-foreground/20 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-body font-semibold text-secondary-foreground text-lg mb-2">{reason.title}</h4>
                  <p className="font-body font-light text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="bg-background py-6 px-8 flex flex-col sm:flex-row items-center justify-center gap-6">
        <p className="text-foreground font-body text-lg">Ready to scale? Let's talk.</p>
        <a href="#contact" className="bg-primary text-primary-foreground font-display text-lg px-8 py-3 hover:bg-agency-orange-dark transition-colors">
          Book Free Consultation
        </a>
      </div>
    </section>
  );
};

export default WhyChooseSection;
