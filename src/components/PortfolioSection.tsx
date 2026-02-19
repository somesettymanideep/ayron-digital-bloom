import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import project1 from "@/assets/portfolio/project-1.jpg";
import project2 from "@/assets/portfolio/project-2.jpg";
import project3 from "@/assets/portfolio/project-3.jpg";
import project4 from "@/assets/portfolio/project-4.jpg";
import project5 from "@/assets/portfolio/project-5.jpg";
import project6 from "@/assets/portfolio/project-6.jpg";

const projects = [
  { image: project1, title: "Fashion Brand Campaign", category: "Branding", result: "3x Revenue Growth" },
  { image: project2, title: "Analytics Dashboard", category: "Digital Marketing", result: "248% ROAS" },
  { image: project3, title: "Cosmetics Product Shoot", category: "Product Photography", result: "40% Higher CTR" },
  { image: project4, title: "Food Delivery Platform", category: "Web Design", result: "2x Conversions" },
  { image: project5, title: "Influencer Campaign", category: "Influencer Marketing", result: "5M+ Reach" },
  { image: project6, title: "SEO & Content Strategy", category: "SEO", result: "Page 1 Rankings" },
];

const PortfolioSection = () => {
  return (
    <section className="bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid-light pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <motion.p
              className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Work
            </motion.p>
            <motion.h2
              className="font-display text-foreground text-5xl md:text-7xl leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Selected <span className="text-stroke-orange">Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/services"
              className="font-body text-muted-foreground hover:text-primary transition-colors text-sm group inline-flex items-center gap-1"
            >
              View all projects <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden bg-muted cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="font-body text-primary text-xs tracking-[0.2em] uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-foreground text-2xl mb-1">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {project.result}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-body">
                    View Project <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Bottom category label (visible by default) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <p className="font-body text-foreground/80 text-xs tracking-wider uppercase">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
