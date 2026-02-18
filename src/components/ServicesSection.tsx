import { motion } from "framer-motion";
import {
  Megaphone, Monitor, Diamond, Mail, Users,
  ShoppingBag, Search, Camera
} from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    desc: "Comprehensive digital strategies that drive traffic, engagement, and conversions across all channels.",
    icon: Megaphone,
    tags: ["SEO", "PPC", "Social"],
    featured: true,
    theme: "orange" as const,
  },
  {
    title: "Website Design",
    desc: "Modern, high-performance websites built to convert visitors into customers.",
    icon: Monitor,
    theme: "white" as const,
  },
  {
    title: "Brand Identity",
    desc: "Distinctive brand systems that set you apart and create lasting recognition.",
    icon: Diamond,
    theme: "black-border" as const,
  },
  {
    title: "Email Marketing",
    desc: "Automated email campaigns with high open rates and measurable ROI.",
    icon: Mail,
    theme: "white" as const,
  },
  {
    title: "Influencer Marketing",
    desc: "Strategic influencer partnerships that amplify your brand to the right audiences.",
    icon: Users,
    theme: "orange" as const,
  },
  {
    title: "Ecommerce Listing",
    desc: "Optimized product listings that rank higher and sell faster on every marketplace.",
    icon: ShoppingBag,
    theme: "black-border" as const,
  },
  {
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies that improve rankings and drive organic growth.",
    icon: Search,
    theme: "white" as const,
  },
  {
    title: "Product Shoot",
    desc: "Professional product photography that makes your brand look premium and trustworthy.",
    icon: Camera,
    theme: "black" as const,
  },
];

const themeClasses = {
  orange: "bg-primary text-primary-foreground",
  white: "bg-secondary text-secondary-foreground",
  "black-border": "bg-background text-foreground border border-primary/40",
  black: "bg-background text-foreground",
};

const iconColor = {
  orange: "text-secondary",
  white: "text-primary",
  "black-border": "text-primary",
  black: "text-primary",
};

const headingColor = {
  orange: "text-secondary",
  white: "text-secondary-foreground",
  "black-border": "text-foreground",
  black: "text-foreground",
};

const descColor = {
  orange: "text-secondary/80",
  white: "text-muted-foreground",
  "black-border": "text-muted-foreground",
  black: "text-muted-foreground",
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-20 relative overflow-hidden">
      {/* Ghost watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[200px] md:text-[300px] text-primary/[0.04] select-none pointer-events-none whitespace-nowrap">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">What We Do</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2">
            Services Built for
          </h2>
          <p className="font-serif-accent italic text-primary text-3xl md:text-4xl">Real Results</p>
          <p className="font-body font-light text-muted-foreground text-base mt-4 max-w-lg">
            Every service is designed to move the needle — not just look good on a report.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, i) => {
            const Icon = service.icon;
            const theme = service.theme;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={service.title}
                className={`relative p-10 group cursor-pointer transition-all duration-400 hover:-translate-y-1.5 ${themeClasses[theme]} ${
                  service.featured ? "md:col-span-2" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                {/* Ghost number */}
                <span className={`absolute top-4 right-6 font-display text-[60px] leading-none ${
                  theme === "orange" || theme === "black" || theme === "black-border"
                    ? "text-secondary/[0.05]"
                    : "text-secondary-foreground/[0.05]"
                }`}>
                  {num}
                </span>

                <div className={`mb-6 ${iconColor[theme]}`}>
                  <Icon size={service.featured ? 56 : 40} strokeWidth={1.5} />
                </div>

                <h3 className={`font-display ${service.featured ? "text-4xl" : "text-[28px]"} mb-3 ${headingColor[theme]}`}>
                  {service.title}
                </h3>

                <p className={`font-body font-light text-sm leading-relaxed mb-4 ${descColor[theme]}`}>
                  {service.desc}
                </p>

                {service.tags && (
                  <div className="flex gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span key={tag} className="border border-secondary/40 text-secondary font-body text-xs px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <span className={`text-primary font-body text-sm ${headingColor[theme]}`}>{num}</span>

                {/* Hover underbar */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
