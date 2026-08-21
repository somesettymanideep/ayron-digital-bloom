import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowUpRight, Monitor, Layout, Instagram, Image as ImageIcon } from "lucide-react";
import project4 from "@/assets/portfolio/project-4.jpg";

const websites = [
  {
    title: "Durga Hardware",
    category: "Hardware & Tools",
    image: project4,
    link: "#",
    description: "Full-scale e-commerce and inventory management system."
  },
  // Placeholders for more websites
  {
    title: "Eco Fresh",
    category: "FMCG",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "#",
    description: "Modern landing page for an organic produce brand."
  },
  {
    title: "Urban Style",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    link: "#",
    description: "High-end fashion boutique online store."
  }
];

const creatives = [
  {
    title: "Summer Collection",
    platform: "Instagram",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
  },
  {
    title: "Product Launch",
    platform: "Facebook",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80"
  },
  {
    title: "Flash Sale",
    platform: "LinkedIn",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80"
  },
  {
    title: "Brand Story",
    platform: "Instagram",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80"
  }
];

const Portfolio = () => {
  return (
    <motion.main
      className="pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <SEO
        title="Portfolio | Our Websites & Social Media Creatives"
        description="Explore Ayron Digital Solutions' portfolio of high-converting websites and engaging social media creatives designed for brands in Vijayawada."
        canonical="/portfolio"
      />

      {/* Hero Section */}
      <section className="bg-background py-24 px-6 md:px-12 border-b border-border/10">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Portfolio
          </motion.p>
          <motion.h1
            className="font-display text-6xl md:text-8xl text-foreground mb-8 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Digital <span className="text-stroke-orange">Showcase</span>
          </motion.h1>
          <motion.p
            className="font-body text-muted-foreground text-xl max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.
            <br /><br />
            create a portofilo page display our websites and social media creatives
          </motion.p>
        </div>
      </section>

      {/* Websites Section */}
      <section className="py-24 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Monitor className="text-primary" size={32} />
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Web Design & Development</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websites.map((web, idx) => (
              <motion.div
                key={web.title}
                className="group bg-background border border-border/40 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-900 flex flex-col items-center justify-center p-4">
                   <div className="w-full h-full bg-neutral-800 p-1.5 shadow-2xl relative">
                      <div className="flex items-center gap-1 px-1.5 py-1 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </div>
                      <div className="bg-white overflow-hidden h-[calc(100%-20px)]">
                        <img
                          src={web.image}
                          alt={web.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                </div>
                <div className="p-6">
                  <span className="text-primary text-xs font-body tracking-widest uppercase mb-2 block">{web.category}</span>
                  <h3 className="font-display text-2xl text-foreground mb-3">{web.title}</h3>
                  <p className="text-muted-foreground text-sm font-body mb-6">{web.description}</p>
                  <a href={web.link} className="inline-flex items-center gap-2 text-foreground font-body text-sm hover:text-primary transition-colors">
                    Visit Website <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Creatives */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Instagram className="text-primary" size={32} />
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Social Media Creatives</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {creatives.map((creative, idx) => (
              <motion.div
                key={creative.title}
                className="group relative aspect-square overflow-hidden bg-muted"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img
                  src={creative.image}
                  alt={creative.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-secondary text-[10px] tracking-widest uppercase mb-1">{creative.platform}</span>
                  <h4 className="text-secondary font-display text-lg">{creative.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
};

export default Portfolio;
