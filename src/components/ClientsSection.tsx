import { useState } from "react";

const categories = ["All", "FMCG", "Fashion", "Tech", "Real Estate", "F&B", "Healthcare"];

const clientNames = [
  "FreshBite Foods", "StyleCraft", "TechNova", "GreenLeaf Organics",
  "UrbanNest Realty", "PureGlow Beauty", "CloudSync Tech", "SpiceRoute",
  "MetroFit Gym", "BlueOcean Logistics", "CraftBrew Co.", "SilkLine Fashion",
  "DataPulse AI", "SunRise Solar", "PixelForge Studios", "AquaPure Water",
];

const ClientsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="bg-secondary py-20 relative" style={{ borderTop: "1px solid rgba(244,124,65,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Trusted By</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground text-center">
            Brands We've <span className="text-primary">Grown</span>
          </h2>

          <p className="text-muted-foreground text-sm font-body">200+ Clients Across India</p>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm px-5 py-2 border transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-secondary-foreground border-secondary-foreground/30 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Marquee rows */}
        <div className="space-y-4 overflow-hidden mb-10">
          {/* Row 1 - left */}
          <div className="overflow-hidden">
            <div className="animate-marquee-left flex gap-4 w-max">
              {[...clientNames, ...clientNames].map((name, i) => (
                <div
                  key={i}
                  className="w-40 h-16 flex items-center justify-center border border-primary/20 bg-secondary text-muted-foreground font-body text-sm hover:border-b-2 hover:border-b-primary hover:text-primary transition-all shrink-0 cursor-pointer"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - right */}
          <div className="overflow-hidden">
            <div className="animate-marquee-right flex gap-4 w-max">
              {[...clientNames.slice().reverse(), ...clientNames.slice().reverse()].map((name, i) => (
                <div
                  key={i}
                  className="w-40 h-16 flex items-center justify-center border border-primary/20 bg-secondary text-muted-foreground font-body text-sm hover:border-b-2 hover:border-b-primary hover:text-primary transition-all shrink-0 cursor-pointer"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center">
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
