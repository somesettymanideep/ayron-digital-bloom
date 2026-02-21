import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lokeshImg from "@/assets/team/lokesh.jpg";
import mouliImg from "@/assets/team/mouli.jpg";
import salmanImg from "@/assets/team/salman.jpg";
import kiranImg from "@/assets/team/kiran.jpg";
import manideepImg from "@/assets/team/manideep.jpg";
import sandeepImg from "@/assets/team/sandeep.jpg";
import naveenImg from "@/assets/team/naveen.jpg";
import nareshImg from "@/assets/team/naresh.jpg";
import prabhatImg from "@/assets/team/prabhat.jpg";
import saikumarImg from "@/assets/team/saikumar.jpg";
import manikantaImg from "@/assets/team/manikanta.jpg";

const teamMembers = [
  { name: "Lokesh Vaddineni", role: "Sr. Social Media Manager", bio: "Drives social strategy and engagement for top brands across all platforms.", image: lokeshImg },
  { name: "Mouli Reddy", role: "Sr. Social Media Manager", bio: "Builds high-impact social campaigns that amplify brand reach and loyalty.", image: mouliImg },
  { name: "Sk. Salman", role: "Social Media Manager", bio: "Creates and manages engaging social content that resonates with target audiences.", image: salmanImg },
  { name: "Ch. Kiran Kumar", role: "Social Media Manager", bio: "Executes data-driven social strategies to grow brand presence and engagement.", image: kiranImg },
  { name: "S. Manideep", role: "Sr. Developer", bio: "Builds scalable, high-performance web applications with modern tech stacks.", image: manideepImg },
  { name: "R. Sai Sandeep", role: "Marketing Head", bio: "Leads marketing strategy and execution, driving growth across all channels.", image: sandeepImg },
  { name: "K. Naveen Babu", role: "Sr. Graphic Designer", bio: "Crafts stunning visuals and brand assets that captivate and convert.", image: naveenImg },
  { name: "N. Naresh", role: "Video Editor", bio: "Transforms raw footage into polished, engaging video content for brands.", image: nareshImg },
  { name: "A. Prabhat Sai", role: "Video Editor", bio: "Edits compelling video stories that drive views and audience engagement.", image: prabhatImg },
  { name: "Sai Kumar", role: "Video Content Creator", bio: "Conceptualizes and produces creative video content for digital platforms.", image: saikumarImg },
  { name: "R. Manikanta", role: "Sr. Video Editor", bio: "Expert video editor delivering cinematic-quality content for brand campaigns.", image: manikantaImg },
];

const TeamCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
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
          <div className="flex -ml-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-6"
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
