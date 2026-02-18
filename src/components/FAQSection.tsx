import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Services", "Pricing", "Process", "Results"];

const faqs = [
  { q: "What services does Ayron Digital Solutions offer?", a: "We offer 8 core services: Digital Marketing, Website Design, Brand Identity, Email Marketing, Influencer Marketing, Ecommerce Listing, SEO Optimization, and Product Shoot — all designed to drive measurable growth.", cat: "Services" },
  { q: "How long before I start seeing results from SEO?", a: "Typically 3–6 months for organic ranking improvements. SEO is a long-term investment, but we provide monthly progress reports so you can track every milestone along the way.", cat: "Results" },
  { q: "Do you work with small businesses and startups?", a: "Yes! We have scalable packages from early-stage startups to enterprise brands. Every business deserves world-class digital marketing, and we tailor our approach to fit your budget.", cat: "Pricing" },
  { q: "What makes Ayron different from other agencies?", a: "Full-service capability, data-driven strategy, dedicated account managers, and transparent reporting. We don't just deliver reports — we deliver results you can measure.", cat: "Process" },
  { q: "How does the onboarding process work?", a: "It's simple: Discovery Call → Strategy Development → Execution → Reporting Cycle. We align on your goals first, then build a roadmap to get you there.", cat: "Process" },
  { q: "Can you manage our social media along with SEO?", a: "Absolutely. Integrated campaigns perform significantly better. We handle everything from content creation to community management alongside your SEO strategy.", cat: "Services" },
  { q: "Do you offer one-time services or only retainers?", a: "Both! We offer project-based services (like a website redesign or product shoot) as well as monthly retainers for ongoing marketing and growth.", cat: "Pricing" },
  { q: "How do I get a quote for my brand?", a: "Simply fill out our contact form or reach out via WhatsApp. We'll schedule a free consultation to understand your needs and share a custom proposal within 48 hours.", cat: "Process" },
];

const FAQSection = () => {
  const [activeCat, setActiveCat] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCat === "All" ? faqs : faqs.filter((f) => f.cat === activeCat);

  return (
    <section className="bg-secondary dot-grid-light relative" style={{ borderTop: "4px solid hsl(20,89%,56%)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT - Sticky */}
          <div className="lg:w-[40%] lg:sticky lg:top-24 lg:self-start">
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Got Questions?</span>
            <h2 className="font-display text-5xl md:text-[64px] text-secondary-foreground mt-2 leading-[0.95]">
              Frequently
            </h2>
            <p className="font-serif-accent italic text-primary text-3xl md:text-4xl">Asked.</p>
            <p className="font-body font-light text-muted-foreground text-base mt-4 max-w-sm">
              Everything you need to know before partnering with us.
            </p>
            <a href="#contact" className="inline-block bg-primary text-primary-foreground font-display text-lg px-8 py-3 mt-6 hover:bg-agency-orange-dark transition-colors">
              Talk to Our Team →
            </a>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[["200+", "Clients"], ["8", "Services"], ["98%", "Retention"], ["7+", "Years"]].map(([n, l]) => (
                <div key={l} className="border border-primary/20 p-3 text-center">
                  <p className="font-display text-2xl text-primary">{n}</p>
                  <p className="font-body text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Accordion */}
          <div className="lg:w-[60%]">
            {/* Category chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCat(cat); setOpenIndex(null); }}
                  className={`font-body text-sm px-4 py-1.5 border transition-colors ${
                    activeCat === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-secondary-foreground border-secondary-foreground/20 hover:border-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-0">
              {filtered.map((faq, i) => {
                const globalIndex = faqs.indexOf(faq);
                const num = String(globalIndex + 1).padStart(2, "0");
                const isOpen = openIndex === globalIndex;
                return (
                  <div
                    key={globalIndex}
                    className={`border-b border-primary/10 transition-colors ${isOpen ? "bg-primary/5" : ""}`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full flex items-center gap-4 py-5 px-2 text-left group"
                    >
                      <span className="font-display text-4xl text-primary/30">{num}</span>
                      <span className={`flex-1 font-body font-semibold text-[17px] transition-colors ${isOpen ? "text-primary" : "text-secondary-foreground"}`}>
                        {faq.q}
                      </span>
                      <span className={`w-8 h-8 flex items-center justify-center border text-lg font-body transition-all ${
                        isOpen ? "bg-primary text-primary-foreground border-primary rotate-45" : "border-secondary-foreground/30 text-secondary-foreground"
                      }`}>
                        +
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-body font-light text-muted-foreground text-sm leading-relaxed pb-5 px-2 pl-16">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
