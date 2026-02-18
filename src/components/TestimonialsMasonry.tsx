import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

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
    text: "We were skeptical about digital marketing for real estate, but Ayron proved us wrong. 40+ qualified leads in the first month alone.",
    rating: 5,
  },
  {
    name: "Meera Nair",
    role: "Brand Manager, PureLeaf Tea",
    text: "From brand identity to social media — they handled everything beautifully. Our brand feels premium now.",
    rating: 4,
  },
];

const TestimonialsMasonry = () => {
  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayPlugin.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-secondary py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <motion.div
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

          <div className="flex gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 border border-secondary-foreground/20 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 border border-secondary-foreground/20 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex" style={{ gap: 24 }}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
              >
                <div className="group border border-primary/10 bg-secondary p-7 relative hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(244,124,65,0.12)] hover:border-primary/30 transition-all duration-300 h-full">
                  <Quote
                    className="text-primary/15 group-hover:text-primary/30 transition-colors duration-300 mb-4"
                    size={32}
                    strokeWidth={1}
                  />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="font-body font-light text-secondary-foreground/80 text-sm leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/10 mt-auto">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-display text-lg shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-secondary-foreground">{t.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className="h-2 rounded-full transition-all duration-350"
              style={{
                width: i === selectedIndex ? 28 : 8,
                backgroundColor: i === selectedIndex ? "hsl(var(--primary))" : "hsl(var(--border))",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMasonry;
