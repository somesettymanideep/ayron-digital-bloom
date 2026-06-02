import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ } from "@/data/serviceFaqs";

interface Props {
  serviceTitle: string;
  faqs: FAQ[];
}

const ServiceFAQs = ({ serviceTitle, faqs }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 px-6 md:px-12" style={{ background: "#fafafa" }} data-animate="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px]" style={{ background: "#f47c41" }} />
            <span className="font-body text-[11px] tracking-[0.2em] uppercase" style={{ color: "#f47c41" }}>
              Frequently Asked
            </span>
            <div className="w-6 h-[1px]" style={{ background: "#f47c41" }} />
          </div>
          <h2 className="font-display leading-[0.95]" style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "#1a1a1a" }}>
            {serviceTitle} <span style={{ color: "#f47c41" }}>FAQs</span>
          </h2>
          <p className="font-body font-light text-base mt-4 max-w-xl mx-auto" style={{ color: "#777" }}>
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={i}
                className="border-b transition-colors"
                style={{
                  borderColor: "rgba(244,124,65,0.15)",
                  background: isOpen ? "rgba(244,124,65,0.04)" : "transparent",
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 py-5 px-2 text-left group"
                >
                  <span className="font-display text-3xl" style={{ color: "rgba(244,124,65,0.4)" }}>
                    {num}
                  </span>
                  <span
                    className="flex-1 font-body font-semibold text-[16px] md:text-[17px]"
                    style={{ color: isOpen ? "#f47c41" : "#1a1a1a" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="w-8 h-8 flex items-center justify-center border text-lg font-body transition-all"
                    style={{
                      borderColor: isOpen ? "#f47c41" : "rgba(26,26,26,0.3)",
                      background: isOpen ? "#f47c41" : "transparent",
                      color: isOpen ? "#fff" : "#1a1a1a",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-body font-light text-sm md:text-base leading-relaxed pb-5 pl-16 pr-2" style={{ color: "#555" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQs;
