import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import rahulImg from "@/assets/team/rahul.jpg";
import priyaImg from "@/assets/team/priya.jpg";
import arjunImg from "@/assets/team/arjun.jpg";
import snehaImg from "@/assets/team/sneha.jpg";
import vikramImg from "@/assets/team/vikram.jpg";
import ananyaImg from "@/assets/team/ananya.jpg";
const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Creative Director",
    bio: "10+ years crafting brand identities and visual experiences for top Indian brands.",
    image: rahulImg,
  },
  {
    name: "Priya Patel",
    role: "Head of Digital Marketing",
    bio: "Performance marketing expert who has managed ₹10Cr+ in ad spend across platforms.",
    image: priyaImg,
  },
  {
    name: "Arjun Reddy",
    role: "SEO Lead",
    bio: "Helped 50+ brands reach page 1 on Google with data-driven SEO strategies.",
    image: arjunImg,
  },
  {
    name: "Sneha Gupta",
    role: "Content Strategist",
    bio: "Storyteller at heart, turning brand narratives into engaging digital content.",
    image: snehaImg,
  },
  {
    name: "Vikram Singh",
    role: "Web Development Lead",
    bio: "Full-stack developer specializing in high-performance, conversion-focused websites.",
    image: vikramImg,
  },
  {
    name: "Ananya Desai",
    role: "Social Media Manager",
    bio: "Built communities of 1M+ followers across Instagram, LinkedIn, and Facebook.",
    image: ananyaImg,
  },
];

const TeamCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-background py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">
              The People Behind ADS
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2">
              Our <span className="font-serif-accent italic text-primary">Team</span>
            </h2>
          </motion.div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 border border-border/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 border border-border/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex" style={{ gap: 24 }}>
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)] min-w-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              >
                <div className="group border border-border/30 bg-background hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                  {/* Photo placeholder */}
                  <div className="relative overflow-hidden h-64">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/40" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h4 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>
                    <p className="font-body text-sm text-primary font-medium mt-1">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {teamMembers.map((_, i) => (
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

export default TeamCarousel;
