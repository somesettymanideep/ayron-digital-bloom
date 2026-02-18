import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FounderMessage = () => (
  <section className="bg-secondary py-20 px-6 md:px-12">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        {/* Photo */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="bg-background aspect-[3/4] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(244,124,65,0.05) 20px, rgba(244,124,65,0.05) 40px)",
                }}
              />
              <div className="absolute inset-0 flex items-end justify-center">
                <span className="font-display text-[200px] text-primary/10 leading-none">A</span>
              </div>
            </div>
            {/* Name card */}
            <div className="bg-primary px-5 py-3 absolute -bottom-4 -right-4">
              <p className="font-display text-xl text-primary-foreground">Founder & CEO</p>
              <p className="font-body text-sm text-primary-foreground/80">Ayron Digital Solutions</p>
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">
            A Word From Our Founder
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground mt-3 mb-6">
            Message From The <span className="text-primary">Founder</span>
          </h2>

          <div className="relative">
            <Quote className="text-primary/15 absolute -top-2 -left-2" size={48} strokeWidth={1} />
            <div className="space-y-4 font-body font-light text-secondary-foreground/70 text-base leading-relaxed pl-6 border-l-[3px] border-primary/30">
              <p>
                When I started Ayron Digital Solutions, I had one simple belief — that great marketing should be accessible to every brand, not just the ones with massive budgets.
              </p>
              <p>
                Over the years, we've grown from a small team into a full-service agency serving 200+ brands. But what hasn't changed is our commitment to transparency, creativity, and real results.
              </p>
              <p>
                Every campaign we run, every design we create, and every strategy we build is rooted in data and driven by the desire to see our clients succeed. Your growth is our growth.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-primary" />
            <div>
              <p className="font-display text-xl text-secondary-foreground">The Founder</p>
              <p className="font-body text-sm text-muted-foreground">Ayron Digital Solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FounderMessage;
