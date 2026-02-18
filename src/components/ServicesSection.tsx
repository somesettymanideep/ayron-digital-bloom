import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Megaphone, Monitor, Diamond, Mail, Users,
  ShoppingBag, Search, Camera, ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    desc: "Comprehensive digital strategies that drive traffic, engagement, and conversions across all channels.",
    icon: Megaphone,
    slug: "digital-marketing",
  },
  {
    title: "Website Design",
    desc: "Modern, high-performance websites built to convert visitors into customers.",
    icon: Monitor,
    slug: "website-design",
  },
  {
    title: "Brand Identity",
    desc: "Distinctive brand systems that set you apart and create lasting recognition.",
    icon: Diamond,
    slug: "brand-identity",
  },
  {
    title: "Email Marketing",
    desc: "Automated email campaigns with high open rates and measurable ROI.",
    icon: Mail,
    slug: "email-marketing",
  },
  {
    title: "Influencer Marketing",
    desc: "Strategic influencer partnerships that amplify your brand to the right audiences.",
    icon: Users,
    slug: "influencer-marketing",
  },
  {
    title: "Ecommerce Listing",
    desc: "Optimized product listings that rank higher and sell faster on every marketplace.",
    icon: ShoppingBag,
    slug: "ecommerce-listing",
  },
  {
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies that improve rankings and drive organic growth.",
    icon: Search,
    slug: "seo-optimization",
  },
  {
    title: "Product Shoot",
    desc: "Professional product photography that makes your brand look premium and trustworthy.",
    icon: Camera,
    slug: "product-shoot",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">
              What We Do
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2">
              Our Services
            </h2>
            <p className="font-body font-light text-muted-foreground text-base mt-4 max-w-lg">
              Every service is designed to move the needle — not just look good on a report.
            </p>
          </div>
          <Link
            to="/services"
            className="font-body text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group shrink-0"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {services.map((service, i) => {
            const Icon = service.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={service.title}
                className="bg-background p-8 group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Number */}
                  <span className="font-display text-xs text-muted-foreground/50 mb-6 block">
                    {num}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body font-light text-sm text-muted-foreground leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* Arrow link */}
                  <div className="flex items-center gap-1 text-primary text-sm font-body opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
