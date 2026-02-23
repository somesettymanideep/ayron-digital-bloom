import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

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
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
      dragFree: false,
      containScroll: false,
      duration: 30,
    },
    [autoplayPlugin.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-28">
      {/* Background elements */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
          <motion.div
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

          {/* Nav arrows */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 border border-border/40 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 border border-border/40 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-6 touch-pan-y">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-6"
              >
                <div className="h-full">
                  <motion.div
                    className="relative h-full p-8 md:p-10 border border-border/30 bg-background/60 hover:bg-background hover:border-primary/40 shadow-sm hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.15)] transition-all duration-400 group hover:-translate-y-2 flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                  >
                    {/* Quote icon */}
                    <Quote
                      className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors"
                      size={48}
                      strokeWidth={1}
                    />

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 h-[3px] bg-primary transition-all duration-500 w-0 group-hover:w-full" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <Star key={si} size={14} className="fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Body text */}
                    <p className="font-body font-light text-muted-foreground text-[15px] leading-[1.85] mb-8 grow">
                      "{t.text}"
                    </p>

                    {/* Divider */}
                    <div className="h-px w-full bg-border/40 mb-6" />

                    {/* Client info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 object-cover border-2 border-primary/40"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-base text-secondary-foreground">
                          {t.name}
                        </p>
                        <p className="font-body text-xs text-primary font-medium">
                          {t.role}
                        </p>
                      </div>
                      <span className="font-body text-[11px] font-semibold text-primary border border-primary/30 px-3 py-1 uppercase tracking-wider shrink-0">
                        {t.tag}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2 rounded-full transition-all duration-350"
              style={{
                width: i === selectedIndex ? 28 : 8,
                backgroundColor:
                  i === selectedIndex
                    ? "hsl(var(--primary))"
                    : "hsl(var(--border))",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
