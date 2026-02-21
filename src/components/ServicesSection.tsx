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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">
            What We Do
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2">
            Our Services
          </h2>
          <p className="font-body font-light text-muted-foreground text-base mt-4 max-w-lg mx-auto">
            Every service is designed to move the needle — not just look good on a report.
          </p>
        </div>

        {/* Zigzag list */}
        <div className="space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const num = String(i + 1).padStart(2, "0");
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className={`group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-6 md:p-8 border border-border/40 hover:border-primary/40 transition-all relative overflow-hidden ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Hover bg */}
                  <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon block */}
                  <div className="relative z-10 shrink-0 flex items-center gap-5">
                    <span className="font-display text-3xl text-muted-foreground/30 select-none">
                      {num}
                    </span>
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`relative z-10 flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-body font-light text-sm text-muted-foreground leading-relaxed mt-2 max-w-md inline-block">
                      {service.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="relative z-10 shrink-0 w-10 h-10 border border-border/40 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
