import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const clients = [
  { name: "FreshBite Foods", category: "FMCG" },
  { name: "StyleCraft", category: "Fashion" },
  { name: "TechNova", category: "Tech" },
  { name: "GreenLeaf Organics", category: "FMCG" },
  { name: "UrbanNest Realty", category: "Real Estate" },
  { name: "PureGlow Beauty", category: "Healthcare" },
  { name: "CloudSync Tech", category: "Tech" },
  { name: "SpiceRoute", category: "F&B" },
  { name: "MetroFit Gym", category: "Healthcare" },
  { name: "BlueOcean Logistics", category: "Tech" },
  { name: "CraftBrew Co.", category: "F&B" },
  { name: "SilkLine Fashion", category: "Fashion" },
  { name: "DataPulse AI", category: "Tech" },
  { name: "SunRise Solar", category: "Tech" },
  { name: "PixelForge Studios", category: "Tech" },
  { name: "AquaPure Water", category: "FMCG" },
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
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Trusted By</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground">
              Brands We've <span className="text-primary">Grown</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
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
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 px-2"
              >
                <div className="group border border-secondary-foreground/10 bg-secondary p-6 h-28 flex flex-col items-center justify-center text-center hover:border-primary/60 transition-all cursor-pointer relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="font-body text-sm font-medium text-secondary-foreground group-hover:text-primary transition-colors">
                    {client.name}
                  </span>
                  <span className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1.5">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-10">
          <p className="font-body text-muted-foreground text-sm mb-2">
            Join 200+ brands that chose growth over guesswork.
          </p>
          <a href="#contact" className="text-primary font-body text-sm hover:underline underline-offset-4">
            Become a Client →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
