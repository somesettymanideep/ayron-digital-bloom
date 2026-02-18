import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Megaphone, Monitor, Diamond, Mail, Users,
  ShoppingBag, Search, Camera
} from "lucide-react";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const servicesData: Record<string, { title: string; icon: any; desc: string; details: string[]; tags: string[] }> = {
  "digital-marketing": {
    title: "Digital Marketing",
    icon: Megaphone,
    desc: "Comprehensive digital strategies that drive traffic, engagement, and conversions across all channels.",
    details: [
      "Multi-channel campaign strategy & execution",
      "Performance marketing with real-time optimization",
      "Social media management & content creation",
      "Google Ads, Meta Ads, and programmatic advertising",
    ],
    tags: ["SEO", "PPC", "Social Media", "Content"],
  },
  "website-design": {
    title: "Website Design",
    icon: Monitor,
    desc: "Modern, high-performance websites built to convert visitors into customers.",
    details: [
      "Custom UI/UX design tailored to your brand",
      "Mobile-first responsive development",
      "Speed-optimized for Core Web Vitals",
      "CMS integration & ongoing maintenance",
    ],
    tags: ["UI/UX", "Responsive", "CMS", "Speed"],
  },
  "brand-identity": {
    title: "Brand Identity",
    icon: Diamond,
    desc: "Distinctive brand systems that set you apart and create lasting recognition.",
    details: [
      "Logo design & visual identity systems",
      "Brand guidelines & style documentation",
      "Packaging & print collateral design",
      "Brand strategy & positioning",
    ],
    tags: ["Logo", "Guidelines", "Strategy", "Packaging"],
  },
  "email-marketing": {
    title: "Email Marketing",
    icon: Mail,
    desc: "Automated email campaigns with high open rates and measurable ROI.",
    details: [
      "Automated drip campaigns & sequences",
      "Newsletter design & copywriting",
      "A/B testing & deliverability optimization",
      "CRM integration & list management",
    ],
    tags: ["Automation", "A/B Testing", "CRM", "Newsletters"],
  },
  "influencer-marketing": {
    title: "Influencer Marketing",
    icon: Users,
    desc: "Strategic influencer partnerships that amplify your brand to the right audiences.",
    details: [
      "Influencer discovery & vetting",
      "Campaign planning & brief creation",
      "Content collaboration & approval workflows",
      "Performance tracking & ROI reporting",
    ],
    tags: ["Micro", "Macro", "UGC", "Campaigns"],
  },
  "ecommerce-listing": {
    title: "Ecommerce Listing",
    icon: ShoppingBag,
    desc: "Optimized product listings that rank higher and sell faster on every marketplace.",
    details: [
      "Amazon, Flipkart & marketplace optimization",
      "Product title, description & keyword strategy",
      "A+ content & enhanced brand content",
      "Review management & competitive analysis",
    ],
    tags: ["Amazon", "Flipkart", "A+ Content", "Keywords"],
  },
  "seo-optimization": {
    title: "SEO Optimization",
    icon: Search,
    desc: "Data-driven SEO strategies that improve rankings and drive organic growth.",
    details: [
      "Technical SEO audit & implementation",
      "On-page optimization & content strategy",
      "Link building & authority development",
      "Local SEO & Google Business Profile",
    ],
    tags: ["Technical", "On-Page", "Link Building", "Local"],
  },
  "product-shoot": {
    title: "Product Shoot",
    icon: Camera,
    desc: "Professional product photography that makes your brand look premium and trustworthy.",
    details: [
      "Studio & lifestyle product photography",
      "360° product views & video content",
      "Post-production editing & retouching",
      "E-commerce ready image formats",
    ],
    tags: ["Studio", "Lifestyle", "360°", "Video"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <main className="pt-16 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-5xl text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary font-body hover:underline">← Back to Services</Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="pt-16">
      <section className="bg-background grid-bg noise-overlay relative overflow-hidden py-24 md:py-32">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/[0.06] rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
          <Link to="/services" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-6 inline-block">
            ← All Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center shrink-0">
              <Icon size={32} className="text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <motion.h1
                className="font-display text-5xl md:text-7xl text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {service.title}
              </motion.h1>
              <motion.p
                className="font-body font-light text-muted-foreground text-lg mt-4 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {service.desc}
              </motion.p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {service.tags.map((tag) => (
              <span key={tag} className="border border-primary/40 text-primary font-body text-xs px-4 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl text-secondary-foreground mb-10">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.details.map((detail, i) => (
              <motion.div
                key={i}
                className="border border-secondary-foreground/10 p-6 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="font-display text-3xl text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-body text-secondary-foreground/80 text-base">{detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground font-display text-xl px-10 py-4 hover:bg-agency-orange-dark transition-colors inline-block"
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default ServiceDetail;
