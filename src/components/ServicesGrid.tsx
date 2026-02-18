import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Megaphone, Monitor, Diamond, Mail, Users,
  ShoppingBag, Search, Camera, ArrowRight
} from "lucide-react";

const services = [
  {
    num: "01",
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Comprehensive digital strategies that drive traffic, engagement, and conversions across all channels.",
    icon: Megaphone,
    tags: ["Paid Ads", "Social Media", "Analytics"],
    category: "Marketing",
    stat: "200+ Campaigns | ₹5Cr+ Ad Spend Managed",
    featured: true,
  },
  {
    num: "02",
    title: "Website Design",
    slug: "website-design",
    desc: "Modern, high-performance websites built to convert visitors into customers.",
    icon: Monitor,
    tags: ["UI/UX", "Responsive"],
    category: "Design",
  },
  {
    num: "03",
    title: "Brand Identity",
    slug: "brand-identity",
    desc: "Distinctive brand systems that set you apart and create lasting recognition.",
    icon: Diamond,
    tags: ["Logo", "Colors"],
    category: "Design",
  },
  {
    num: "04",
    title: "Email Marketing",
    slug: "email-marketing",
    desc: "Automated email campaigns with high open rates and measurable ROI.",
    icon: Mail,
    tags: ["Campaigns", "Automation"],
    category: "Marketing",
  },
  {
    num: "05",
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    desc: "Strategic influencer partnerships that amplify your brand to the right audiences.",
    icon: Users,
    tags: ["Instagram", "YouTube"],
    category: "Content",
  },
  {
    num: "06",
    title: "Ecommerce Listing",
    slug: "ecommerce-listing",
    desc: "Optimized product listings that rank higher and sell faster on every marketplace.",
    icon: ShoppingBag,
    tags: ["Amazon", "Flipkart"],
    category: "Ecommerce",
  },
  {
    num: "07",
    title: "SEO Optimization",
    slug: "seo-optimization",
    desc: "Data-driven SEO strategies that improve rankings and drive organic growth.",
    icon: Search,
    tags: ["On-page", "Technical"],
    category: "SEO",
  },
  {
    num: "08",
    title: "Product Shoot",
    slug: "product-shoot",
    desc: "Professional product photography that makes your brand look premium and trustworthy.",
    icon: Camera,
    tags: ["Studio", "Lifestyle"],
    category: "Content",
  },
];

interface ServicesGridProps {
  activeFilter: string;
  searchQuery: string;
}

const ServicesGrid = ({ activeFilter, searchQuery }: ServicesGridProps) => {
  const filtered = services.filter((s) => {
    const matchFilter = activeFilter === "All" || s.category === activeFilter;
    const matchSearch = !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <section className="py-20 px-6 md:px-[5%]" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-body text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "#f47c41" }}>
            ALL SERVICES
          </span>
          <span
            className="font-body text-xs px-3 py-1"
            style={{ color: "#f47c41", border: "1.5px solid #f47c41" }}
          >
            {String(filtered.length).padStart(2, "0")} Services
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]" style={{ background: "rgba(244,124,65,0.15)" }}>
          {filtered.map((service, i) => {
            const Icon = service.icon;
            const isTypeC = !service.featured && (i % 3 === 2);

            if (service.featured) {
              // CARD TYPE A — Featured wide
              return (
                <motion.div
                  key={service.slug}
                  className="md:col-span-2 relative group cursor-pointer overflow-hidden"
                  style={{ background: "#f47c41" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-10 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                    {/* Ghost number */}
                    <span className="absolute top-4 right-6 font-display text-[80px] leading-none text-white/10 select-none">
                      {service.num}
                    </span>

                    <div className="relative z-10">
                      <span className="inline-block font-body text-xs px-3 py-1 mb-4 text-white" style={{ border: "1px solid rgba(255,255,255,0.5)" }}>
                        FEATURED
                      </span>
                      <h3 className="font-display text-[38px] text-white mb-3">{service.title}</h3>
                      <p className="font-body font-light text-[15px] text-white/85 mb-5 leading-relaxed">{service.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.map((tag) => (
                          <span key={tag} className="font-body text-xs px-3 py-1 text-white" style={{ border: "1px solid rgba(255,255,255,0.5)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 font-body text-sm px-5 py-2.5 text-white transition-all duration-300 hover:bg-white hover:text-[#f47c41] group/btn"
                        style={{ border: "1.5px solid rgba(255,255,255,0.7)" }}
                      >
                        Explore Service
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                      {service.stat && (
                        <p className="font-body text-[11px] tracking-[0.15em] text-white/70 mt-6 uppercase">{service.stat}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-28 h-28 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                        <Icon size={56} strokeWidth={1.5} className="text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Hover underbar */}
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-white group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            }

            // CARD TYPE B & C
            return (
              <motion.div
                key={service.slug}
                className="relative group cursor-pointer overflow-hidden transition-all duration-[350ms]"
                style={{
                  background: isTypeC ? "rgba(244,124,65,0.06)" : "#ffffff",
                  borderLeft: isTypeC ? "3px solid #f47c41" : "none",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <div className="p-8 md:p-10 relative">
                  {/* Ghost number */}
                  <span className="absolute top-4 right-6 font-display text-[64px] leading-none select-none" style={{ color: "rgba(244,124,65,0.06)" }}>
                    {service.num}
                  </span>

                  {/* Icon container */}
                  <div
                    className="w-[72px] h-[72px] flex items-center justify-center mb-6 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(244,124,65,0.3)]"
                    style={{ background: "#f47c41" }}
                  >
                    <Icon size={36} strokeWidth={1.5} className="text-white" />
                  </div>

                  <h3
                    className="font-display text-[30px] mb-2 transition-colors duration-300 group-hover:text-[#f47c41]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {service.title}
                  </h3>

                  <p className="font-body font-light text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "#777" }}>
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-xs px-3 py-1"
                        style={{ color: "#f47c41", border: "1px solid rgba(244,124,65,0.4)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 font-body font-semibold text-sm group/link"
                    style={{ color: "#f47c41" }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                  </Link>
                </div>

                {/* Hover underbar */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] transition-all duration-500 group-hover:w-full" style={{ background: "#f47c41" }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
