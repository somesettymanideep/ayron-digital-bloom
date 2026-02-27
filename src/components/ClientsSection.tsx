import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// import actual logo images from assets
import vijayaLogo from "../assets/clients/vijaya.png";
import sanghaviCarLogo from "../assets/clients/sanghavi car.png";
import saiRajendraLogo from "../assets/clients/sai rajendra.png";
import metroCarsLogo from "../assets/clients/metro cars.png";
import ferticareLogo from "../assets/clients/ferticare.png";
import bspLogo from "../assets/clients/bsp.png";
import bombayLogo from "../assets/clients/bombay.png";
import amaLogo from "../assets/clients/ama.png";
import adityaLogo from "../assets/clients/aditya.png";
import namolightsLogo from "../assets/clients/namolights.png";
import blossomsLogo from "../assets/clients/blossoms.png";

// list of client logos to show in carousel
const clients = [
  { name: "Vijaya", logo: vijayaLogo },
  { name: "Sanghavi Car", logo: sanghaviCarLogo },
  { name: "Sai Rajendra", logo: saiRajendraLogo },
  { name: "Metro Cars", logo: metroCarsLogo },
  { name: "Ferticare", logo: ferticareLogo },
  { name: "BSP", logo: bspLogo },
  { name: "Bombay", logo: bombayLogo },
  { name: "AMA", logo: amaLogo },
  { name: "Aditya", logo: adityaLogo },
  { name: "Namo Lights", logo: namolightsLogo },
  { name: "Blossoms", logo: blossomsLogo },
];

const ClientsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-secondary py-20 relative" style={{ borderTop: "1px solid rgba(244,124,65,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Trusted By</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground">
              Brands We've <span className="text-primary">Grown</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground text-sm font-body mr-4 hidden md:block">200+ Clients Across India</p>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-10 h-10 border border-secondary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary text-secondary-foreground transition-colors disabled:opacity-30"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-10 h-10 border border-secondary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary text-secondary-foreground transition-colors disabled:opacity-30"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          className="overflow-hidden" ref={emblaRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 px-2"
              >
                <div className="group border border-secondary-foreground/10 bg-secondary p-6 h-32 flex items-center justify-center hover:border-primary/60 transition-all cursor-pointer relative overflow-hidden">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-body text-muted-foreground text-sm mb-2">
            Join 200+ brands that chose growth over guesswork.
          </p>
          <a href="#contact" className="text-primary font-body text-sm hover:underline underline-offset-4">
            Become a Client →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
