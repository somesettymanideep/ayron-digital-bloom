import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kalyan Tella",
    role: "E-commerce Business Owner",
    avatar: "https://ui-avatars.com/api/?name=Kalyan+Tella&background=f47c41&color=fff&size=128",
    tag: "E-commerce",
    stars: 5,
    text: "I like their personalised approach and attentive client service ensure a seamless collaboration and outstanding campaign outcomes for my personal e-commerce website.",
  },
  {
    name: "Uday Bhaskar",
    role: "Business Owner",
    avatar: "https://ui-avatars.com/api/?name=Uday+Bhaskar&background=f47c41&color=fff&size=128",
    tag: "Strategy",
    stars: 5,
    text: "I wanted to expand my business online. With the collaboration of this company, I am doing good in online business also. They always amaze me with their fruitful strategies. I am very grateful to them and continue my business relationship with them for the long term.",
  },
  {
    name: "Royal Car Accessories",
    role: "Automotive Retail",
    avatar: "https://ui-avatars.com/api/?name=Royal+Car&background=f47c41&color=fff&size=128",
    tag: "Digital Marketing",
    stars: 5,
    text: "One of the best digital marketing companies in Vijayawada, with affordable service charges. I would definitely recommend.",
  },
  {
    name: "Zameer Basha Shaik",
    role: "Client",
    avatar: "https://ui-avatars.com/api/?name=Zameer+Basha&background=f47c41&color=fff&size=128",
    tag: "Social Media",
    stars: 5,
    text: "Best company for digital promotions i.e. social media advertising & handling of all social media platforms.",
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
    <section className="relative overflow-hidden bg-secondary py-24 md:py-28" data-animate="fade-up">
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
        <motion.div
          ref={emblaRef}
          className="overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex -ml-6 touch-pan-y">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-6"
              >
                <div className="h-full">
                  <div
                    className="relative h-full p-8 md:p-10 border border-border/30 bg-background hover:border-primary/40 shadow-sm hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.15)] transition-all duration-400 group hover:-translate-y-2 flex flex-col"
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

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
