import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, FreshBite Foods",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    tag: "SEO",
    stars: 5,
    text: "Ayron Digital Solutions transformed our online presence completely. Within three months, our organic traffic grew by 280% and we started ranking on the first page for all our target keywords.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, StyleCraft",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    tag: "Branding",
    stars: 5,
    text: "The branding overhaul they did for us was phenomenal. From logo design to complete brand guidelines, everything was executed with precision. Our brand recognition increased significantly.",
  },
  {
    name: "Arjun Patel",
    role: "Director, TechNova",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    tag: "PPC",
    stars: 5,
    text: "We saw a 4.5x return on our ad spend within the first quarter of working with Ayron. Their PPC strategies are sharp, well-researched, and constantly optimized for scale.",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Head, GreenLeaf",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    tag: "Social Media",
    stars: 5,
    text: "Our social media engagement tripled after partnering with Ayron Digital. Their content strategies are creative and aligned with our brand voice. Above and beyond every month.",
  },
  {
    name: "Vikram Singh",
    role: "Owner, UrbanNest Realty",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    tag: "Web Design",
    stars: 5,
    text: "The website they built for us is stunning and converts like crazy. Our lead generation increased by 200% since launch. Design sense combined with technical expertise is unmatched.",
  },
  {
    name: "Anita Desai",
    role: "COO, PureGlow Beauty",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    tag: "Email",
    stars: 5,
    text: "Their email marketing campaigns have been a game changer for us. Open rates increased by 65% and our revenue from email alone tripled. They truly understand our audience.",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">
            Our Happy Clients
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-secondary-foreground mt-2">
            What Our{" "}
            <span className="font-serif-accent italic text-primary">Clients</span>{" "}
            Say
          </h2>
          <p className="font-body font-light text-muted-foreground text-lg mt-3">
            Real results. Real businesses. Real growth.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll container – full bleed */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pl-6 md:pl-16 lg:pl-[calc((100vw-72rem)/2+6rem)] pr-6 pb-4 no-scrollbar"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[340px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div className="relative h-full p-8 md:p-10 border border-border/30 bg-background/60 group hover:border-primary/40 hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.12)] transition-all duration-300">
              {/* Quote */}
              <Quote
                className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors"
                size={48}
                strokeWidth={1}
              />

              {/* Accent line */}
              <div className="absolute top-0 left-0 h-[3px] bg-primary w-0 group-hover:w-full transition-all duration-500" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body font-light text-muted-foreground text-[15px] leading-[1.85] mb-8">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="h-px bg-border/40 mb-6" />

              {/* Client */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 object-cover border-2 border-primary/40"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-base text-secondary-foreground">{t.name}</p>
                  <p className="font-body text-xs text-primary font-medium">{t.role}</p>
                </div>
                <span className="font-body text-[11px] font-semibold text-primary border border-primary/30 px-3 py-1 uppercase tracking-wider shrink-0">
                  {t.tag}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
