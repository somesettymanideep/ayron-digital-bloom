import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = ["All", "Marketing", "Design", "SEO", "Content", "Ecommerce"];
const floatingPills = ["SEO", "Branding", "Email", "Ads", "UX", "Content"];

interface ServicesHeroProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const ServicesHero = ({ activeFilter, onFilterChange, searchQuery, onSearchChange }: ServicesHeroProps) => {
  return (
    <section className="relative w-full min-h-[60vh] overflow-hidden" style={{ background: "#ffffff" }}>
      {/* Orange radial gradient blob top-right */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(244,124,65,0.12) 0%, transparent 70%)" }} />

      {/* Dot grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(244,124,65,0.04) 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <Link to="/" className="font-body text-xs" style={{ color: "#999" }}>Home</Link>
            <span className="font-body text-xs" style={{ color: "#999" }}>→</span>
            <span className="font-body text-xs" style={{ color: "#f47c41" }}>Services</span>
          </nav>

          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px]" style={{ background: "#f47c41" }} />
            <span className="font-body font-medium text-xs tracking-[0.2em] uppercase" style={{ color: "#f47c41" }}>
              WHAT WE OFFER
            </span>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display leading-[0.95]" style={{ fontSize: "clamp(56px, 7vw, 86px)" }}>
              <span style={{ color: "#1a1a1a" }}>Our</span>
              <br />
              <span style={{ color: "#f47c41" }}>Services</span>
              <br />
              <span style={{ color: "#1a1a1a" }}>That Deliver</span>
              <br />
              <span className="text-stroke-orange" style={{ WebkitTextStroke: "2px #f47c41", color: "transparent" }}>
                Real Results.
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="font-body font-light text-[17px] mt-6 max-w-md leading-relaxed"
            style={{ color: "#777" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            8 specialized services crafted to grow your brand digitally — from visibility to conversion.
          </motion.p>

          {/* Search bar */}
          <motion.div
            className="mt-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search a service..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-12 px-4 pr-12 font-body text-sm bg-white outline-none"
                style={{ border: "1.5px solid #f47c41", color: "#1a1a1a" }}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#f47c41" }} />
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onFilterChange(cat)}
                  className="font-body text-xs px-4 py-2 transition-all duration-300"
                  style={
                    activeFilter === cat
                      ? { background: "#f47c41", color: "#ffffff", border: "1.5px solid #f47c41" }
                      : { background: "#ffffff", color: "#f47c41", border: "1.5px solid #f47c41" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center min-h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Large outlined "8" */}
          <span
            className="absolute font-display select-none"
            style={{
              fontSize: "220px",
              WebkitTextStroke: "3px #f47c41",
              color: "transparent",
              opacity: 0.25,
              transform: "rotate(-8deg)",
              top: "10%",
              right: "5%",
            }}
          >
            8
          </span>

          {/* Overlapping orange rectangles */}
          <div className="absolute w-48 h-64 rotate-6" style={{ background: "rgba(244,124,65,0.30)", top: "15%", left: "20%" }} />
          <div className="absolute w-40 h-56 -rotate-3" style={{ background: "rgba(244,124,65,0.60)", top: "20%", left: "30%" }} />
          <div className="absolute w-36 h-52 rotate-12" style={{ background: "#f47c41", top: "10%", left: "40%", boxShadow: "0 20px 60px rgba(244,124,65,0.3)" }} />

          {/* Floating service pills */}
          {floatingPills.map((pill, i) => {
            const positions = [
              { top: "5%", left: "5%" },
              { top: "15%", right: "0%" },
              { top: "55%", left: "0%" },
              { top: "70%", right: "5%" },
              { top: "85%", left: "20%" },
              { top: "40%", right: "10%" },
            ];
            return (
              <motion.span
                key={pill}
                className="absolute font-body text-xs px-3 py-1.5 bg-white z-10"
                style={{
                  color: "#f47c41",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  ...positions[i],
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
              >
                {pill}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
