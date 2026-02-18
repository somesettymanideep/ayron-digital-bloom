import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    stars: 5,
    quote: "Ayron Digital Solutions completely transformed our online presence. Within 3 months their SEO strategy grew our organic traffic by 280% and leads doubled. They don't just talk results — they deliver.",
    name: "Rahul Mehta",
    role: "Founder & CEO",
    company: "TechNova Pvt. Ltd.",
    tag: "SEO Optimization",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    stars: 5,
    quote: "Our brand identity was scattered before Ayron. They redesigned our entire visual system and now we look like a premium brand. Customers compliment our look every single day now.",
    name: "Sneha Kapoor",
    role: "Marketing Head",
    company: "Bloom Organics",
    tag: "Brand Identity",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    stars: 5,
    quote: "The product photography Ayron delivered was jaw-dropping. Ecommerce sales jumped 60% after switching to their images. Professional, fast, and they understood our vision perfectly.",
    name: "Arjun Sharma",
    role: "E-commerce Director",
    company: "StyleHive India",
    tag: "Product Shoot",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    stars: 5,
    quote: "We tried 3 agencies before Ayron. None came close. Their Meta Ads campaigns gave us 4.8x ROAS in the first month. Transparent reporting, zero fluff, pure results. Our long-term digital partners now.",
    name: "Priya Nair",
    role: "Business Owner",
    company: "GlowCart Beauty",
    tag: "Digital Marketing",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    stars: 5,
    quote: "Ayron built our website from scratch and it looks world-class. Bounce rate dropped 45% and conversions went up significantly. Smooth, clear, and completely stress-free process from start to finish.",
    name: "Vikram Joshi",
    role: "Co-Founder",
    company: "BuildRight Consultancy",
    tag: "Website Design",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    stars: 5,
    quote: "Their influencer campaign for our product launch was phenomenal. They matched us with perfect creators and our launch video hit 2 million views in 72 hours. Truly world-class team and outstanding results.",
    name: "Ananya Desai",
    role: "Brand Manager",
    company: "PureZest Foods",
    tag: "Influencer Marketing",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const AboutTestimonials = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", loop: true, slidesToScroll: 1, containScroll: false, duration: 30 },
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
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section style={{ backgroundColor: "#f5f0eb", padding: "100px 0" }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="font-body" style={{ color: "#f47c41", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, display: "inline-block", marginBottom: 12 }}>
              CLIENT LOVE
            </span>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 42, color: "#1a1a1a" }}>
              What Our <span style={{ color: "#f47c41" }}>Clients</span> Are Saying
            </h2>
            <p className="font-body mt-2" style={{ color: "#888888", fontSize: 16 }}>
              Real results. Real businesses. Real growth.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            {[
              { icon: ArrowLeft, action: () => emblaApi?.scrollPrev() },
              { icon: ArrowRight, action: () => emblaApi?.scrollNext() },
            ].map(({ icon: Icon, action }, idx) => (
              <button
                key={idx}
                onClick={action}
                className="flex items-center justify-center"
                style={{
                  width: 52, height: 52, borderRadius: "50%",
                  backgroundColor: "#ffffff", border: "2px solid #ede9e4",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease", cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f47c41";
                  e.currentTarget.style.borderColor = "#f47c41";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(244,124,65,0.30)";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.borderColor = "#ede9e4";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.style.color = "#1a1a1a";
                }}
              >
                <Icon size={20} style={{ color: "#1a1a1a", transition: "color 0.3s ease" }} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex" style={{ marginLeft: -12 }}>
              {testimonials.map((t, i) => {
                const isActive = i === selectedIndex;
                return (
                  <div
                    key={i}
                    className="min-w-0 shrink-0 grow-0 about-testimonial-slide"
                    style={{
                      flexBasis: "calc(33.333% - 16px)",
                      paddingLeft: 24,
                      transform: isActive ? "scale(1.03)" : "scale(0.97)",
                      opacity: isActive ? 1 : 0.8,
                      transition: "all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <div
                      className="relative h-full"
                      style={{
                        backgroundColor: isActive ? "#ffffff" : "#faf8f6",
                        border: isActive ? "1.5px solid rgba(244,124,65,0.35)" : "1px solid #ede9e4",
                        borderRadius: 24,
                        padding: "36px 32px",
                        boxShadow: isActive ? "0 16px 48px rgba(244,124,65,0.15)" : "0 4px 20px rgba(0,0,0,0.05)",
                        transition: "all 0.30s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.border = "1.5px solid rgba(244,124,65,0.40)";
                        el.style.boxShadow = "0 12px 40px rgba(244,124,65,0.14)";
                        el.style.transform = "translateY(-6px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.border = isActive ? "1.5px solid rgba(244,124,65,0.35)" : "1px solid #ede9e4";
                        el.style.boxShadow = isActive ? "0 16px 48px rgba(244,124,65,0.15)" : "0 4px 20px rgba(0,0,0,0.05)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Stars */}
                      <div className="flex gap-1 mb-5">
                        {Array.from({ length: t.stars }).map((_, si) => (
                          <Star key={si} size={16} fill="#f47c41" color="#f47c41" />
                        ))}
                      </div>
                      {/* Quote mark */}
                      <span className="absolute select-none" style={{ top: 16, right: 28, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 72, color: "#f47c41", opacity: 0.12, lineHeight: 1 }}>
                        "
                      </span>
                      {/* Body */}
                      <p className="font-body" style={{ color: "#444444", fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
                        {t.quote}
                      </p>
                      {/* Divider */}
                      <div style={{ height: 1, backgroundColor: "#f0ece8", marginBottom: 20 }} />
                      {/* Client row */}
                      <div className="flex items-center gap-3.5">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          style={{ width: 52, height: 52, borderRadius: "50%", border: "2.5px solid #f47c41", objectFit: "cover", flexShrink: 0 }}
                        />
                        <div className="flex-1 min-w-0">
                          <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: "#1a1a1a" }}>{t.name}</p>
                          <p className="font-body" style={{ color: "#f47c41", fontSize: 12, fontWeight: 500 }}>{t.role}, {t.company}</p>
                        </div>
                        <span className="font-body shrink-0" style={{ backgroundColor: "#ffffff", border: "1.5px solid #f47c41", color: "#f47c41", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>
                          {t.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2" style={{ marginTop: 40 }}>
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === selectedIndex ? 28 : 8,
                  height: 8, borderRadius: 50,
                  backgroundColor: i === selectedIndex ? "#f47c41" : "#ede9e4",
                  border: i === selectedIndex ? "none" : "1px solid #e0dbd5",
                  transition: "width 0.35s ease, background-color 0.35s ease",
                  cursor: "pointer", padding: 0,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1279px) and (min-width: 1024px) {
          .about-testimonial-slide { flex-basis: calc(45.45% - 16px) !important; }
        }
        @media (max-width: 1023px) and (min-width: 768px) {
          .about-testimonial-slide { flex-basis: calc(76.92% - 16px) !important; }
        }
        @media (max-width: 767px) {
          .about-testimonial-slide { flex-basis: calc(100% - 16px) !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutTestimonials;
