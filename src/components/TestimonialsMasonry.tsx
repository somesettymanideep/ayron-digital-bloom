import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ankit Mehta",
    role: "CEO, FreshBite Foods",
    text: "Ayron completely transformed our digital presence. Our online orders went up 3x within 4 months of working with them. The team is incredibly responsive and strategic.",
    rating: 5,
  },
  {
    name: "Priya Joshi",
    role: "Founder, StyleCraft",
    text: "Best agency we've ever worked with. Period. They understand both data and design.",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    role: "Marketing Head, TechNova",
    text: "The SEO results were outstanding. We went from page 5 to page 1 for our top keywords in just 3 months. Their transparent reporting keeps us in the loop at all times.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Co-founder, GlowUp Beauty",
    text: "Their influencer marketing strategy helped us reach 2M+ people organically. Incredible ROI.",
    rating: 5,
  },
  {
    name: "Vikram Desai",
    role: "Director, BuildRight Infra",
    text: "We were skeptical about digital marketing for real estate, but Ayron proved us wrong. 40+ qualified leads in the first month alone. Their ad strategy is razor-sharp and they genuinely care about our growth.",
    rating: 5,
  },
  {
    name: "Meera Nair",
    role: "Brand Manager, PureLeaf Tea",
    text: "From brand identity to social media — they handled everything beautifully. Our brand feels premium now.",
    rating: 4,
  },
];

const TestimonialsMasonry = () => (
  <section className="bg-secondary py-20 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">
          Client Testimonials
        </span>
        <h2 className="font-display text-5xl md:text-6xl text-secondary-foreground mt-2">
          What Our Clients <span className="font-serif-accent italic text-primary">Say</span>
        </h2>
      </motion.div>

      {/* Masonry grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="break-inside-avoid group border border-primary/10 bg-secondary p-7 relative hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(244,124,65,0.12)] hover:border-primary/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
          >
            {/* Quote icon */}
            <Quote
              className="text-primary/15 group-hover:text-primary/30 transition-colors duration-300 mb-4"
              size={32}
              strokeWidth={1}
            />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, si) => (
                <Star key={si} size={14} className="text-primary fill-primary" />
              ))}
            </div>

            {/* Text */}
            <p className="font-body font-light text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
              <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-display text-lg shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-body text-sm font-medium text-secondary-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>

            {/* Hover underbar */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsMasonry;
