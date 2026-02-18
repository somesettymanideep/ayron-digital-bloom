import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, FreshBite Foods",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    tag: "SEO",
    stars: 5,
    text: "Ayron Digital Solutions transformed our online presence completely. Within three months, our organic traffic grew by 280% and we started ranking on the first page for all our target keywords. Their team is incredibly responsive and data-driven.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, StyleCraft",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    tag: "Branding",
    stars: 5,
    text: "The branding overhaul they did for us was phenomenal. From logo design to complete brand guidelines, everything was executed with precision. Our brand recognition increased significantly and customers love the new identity.",
  },
  {
    name: "Arjun Patel",
    role: "Director, TechNova",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    tag: "PPC",
    stars: 5,
    text: "We saw a 4.5x return on our ad spend within the first quarter of working with Ayron. Their PPC strategies are sharp, well-researched, and constantly optimized. They truly understand performance marketing at scale.",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Head, GreenLeaf",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    tag: "Social Media",
    stars: 5,
    text: "Our social media engagement tripled after partnering with Ayron Digital. Their content strategies are creative and aligned with our brand voice. The team goes above and beyond to deliver results every single month.",
  },
  {
    name: "Vikram Singh",
    role: "Owner, UrbanNest Realty",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    tag: "Web Design",
    stars: 5,
    text: "The website they built for us is stunning and converts like crazy. Our lead generation increased by 200% since launch. Their design sense combined with technical expertise is truly unmatched in the industry.",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      {/* Top-right orange blob */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 700,
          height: 700,
          top: -200,
          right: -200,
          borderRadius: "50%",
          background: "rgba(244,124,65,0.06)",
          filter: "blur(120px)",
        }}
      />
      {/* Bottom-left orange blob */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 500,
          height: 500,
          bottom: -150,
          left: -150,
          borderRadius: "50%",
          background: "rgba(244,124,65,0.05)",
          filter: "blur(100px)",
        }}
      />
      {/* Dot grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(244,124,65,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <span
              className="inline-block font-body font-bold uppercase mb-4"
              style={{
                backgroundColor: "#f47c41",
                color: "#ffffff",
                fontSize: 11,
                letterSpacing: 3,
                borderRadius: 50,
                padding: "6px 18px",
              }}
            >
              Our Happy Clients
            </span>
            <h2
              className="font-display"
              style={{
                color: "#1a1a1a",
                fontSize: 42,
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              What Our{" "}
              <span style={{ color: "#f47c41" }}>Clients</span> Are
              Saying
            </h2>
            <p
              className="font-body mt-3"
              style={{ color: "#888888", fontSize: 16 }}
            >
              Real results. Real businesses. Real growth.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="flex items-center justify-center transition-all duration-300 group"
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                border: "2px solid #f0ece8",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f47c41";
                e.currentTarget.style.borderColor = "#f47c41";
                const svg = e.currentTarget.querySelector("svg");
                if (svg) svg.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.borderColor = "#f0ece8";
                const svg = e.currentTarget.querySelector("svg");
                if (svg) svg.style.color = "#1a1a1a";
              }}
            >
              <ArrowLeft size={20} style={{ color: "#1a1a1a" }} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="flex items-center justify-center transition-all duration-300 group"
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                border: "2px solid #f0ece8",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f47c41";
                e.currentTarget.style.borderColor = "#f47c41";
                const svg = e.currentTarget.querySelector("svg");
                if (svg) svg.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.borderColor = "#f0ece8";
                const svg = e.currentTarget.querySelector("svg");
                if (svg) svg.style.color = "#1a1a1a";
              }}
            >
              <ArrowRight size={20} style={{ color: "#1a1a1a" }} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex" style={{ marginLeft: -12 }}>
            {testimonials.map((t, i) => {
              const isActive = i === selectedIndex;
              return (
                <div
                  key={i}
                  className="shrink-0 min-w-0 grow-0"
                  style={{
                    flexBasis: 400,
                    maxWidth: "85vw",
                    paddingLeft: 12,
                    transform: isActive ? "scale(1.03)" : "scale(0.97)",
                    opacity: isActive ? 1 : 0.8,
                    transition: "all 0.30s ease",
                  }}
                >
                  <div
                    className="relative h-full group"
                    style={{
                      backgroundColor: isActive ? "#ffffff" : "#faf8f6",
                      border: isActive
                        ? "1.5px solid rgba(244,124,65,0.40)"
                        : "1px solid #f0ece8",
                      borderRadius: 24,
                      padding: 40,
                      boxShadow: isActive
                        ? "0 16px 48px rgba(244,124,65,0.18)"
                        : "0 4px 24px rgba(244,124,65,0.06)",
                      transition: "all 0.30s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.border = "1.5px solid #f47c41";
                      el.style.boxShadow = "0 12px 40px rgba(244,124,65,0.16)";
                      el.style.transform = "translateY(-8px)";
                      const q = el.querySelector<HTMLSpanElement>(".quote-mark");
                      if (q) q.style.opacity = "0.35";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.border = isActive
                        ? "1.5px solid rgba(244,124,65,0.40)"
                        : "1px solid #f0ece8";
                      el.style.boxShadow = isActive
                        ? "0 16px 48px rgba(244,124,65,0.18)"
                        : "0 4px 24px rgba(244,124,65,0.06)";
                      el.style.transform = "translateY(0)";
                      const q = el.querySelector<HTMLSpanElement>(".quote-mark");
                      if (q) q.style.opacity = "0.2";
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <Star
                          key={si}
                          size={16}
                          fill="#f47c41"
                          color="#f47c41"
                        />
                      ))}
                    </div>

                    {/* Decorative quote */}
                    <span
                      className="absolute font-display select-none quote-mark"
                      style={{
                        top: 16,
                        right: 32,
                        fontSize: 72,
                        color: "#f47c41",
                        opacity: 0.2,
                        lineHeight: 1,
                        transition: "opacity 0.30s ease",
                      }}
                    >
                      "
                    </span>

                    {/* Body text */}
                    <p
                      className="font-body"
                      style={{
                        color: "#444444",
                        fontSize: 16,
                        lineHeight: 1.85,
                        fontWeight: 400,
                      }}
                    >
                      {t.text}
                    </p>

                    {/* Divider */}
                    <div
                      style={{
                        height: 1,
                        backgroundColor: "#f0ece8",
                        margin: "24px 0",
                      }}
                    />

                    {/* Client row */}
                    <div className="flex items-center gap-3.5">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="shrink-0"
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: "50%",
                          border: "2.5px solid #f47c41",
                          objectFit: "cover",
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-display"
                          style={{
                            color: "#1a1a1a",
                            fontSize: 15,
                            fontWeight: 700,
                          }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="font-body"
                          style={{
                            color: "#f47c41",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {t.role}
                        </p>
                      </div>
                      <span
                        className="font-body shrink-0"
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1.5px solid #f47c41",
                          color: "#f47c41",
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "4px 12px",
                          borderRadius: 20,
                        }}
                      >
                        {t.tag}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
