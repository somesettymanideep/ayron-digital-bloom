import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import googleAnalyticsIcon from "@/assets/tools/google-analytics.svg";
import searchConsoleIcon from "@/assets/tools/search-console.svg";
import canvaIcon from "@/assets/tools/canva.svg";
import figmaIcon from "@/assets/tools/figma.svg";
import photoshopIcon from "@/assets/tools/photoshop.svg";
import metaIcon from "@/assets/tools/meta.svg";
import googleAdsIcon from "@/assets/tools/google-ads.svg";
import linkedinIcon from "@/assets/tools/linkedin.svg";
import ahrefsIcon from "@/assets/tools/ahrefs.svg";
import semrushIcon from "@/assets/tools/semrush.svg";
import screamingFrogIcon from "@/assets/tools/screaming-frog.svg";
import wordpressIcon from "@/assets/tools/wordpress.svg";
import shopifyIcon from "@/assets/tools/shopify.svg";
import webflowIcon from "@/assets/tools/webflow.svg";
import mailchimpIcon from "@/assets/tools/mailchimp.svg";
import klaviyoIcon from "@/assets/tools/klaviyo.svg";
import vscodeIcon from "@/assets/tools/vscode.svg";
import githubIcon from "@/assets/tools/github.svg";
import awsIcon from "@/assets/tools/aws.svg";
import reactjsIcon from "@/assets/tools/reactjs.svg";
import djangoIcon from "@/assets/tools/django.svg";
import bootstrapIcon from "@/assets/tools/bootstrap.svg";
import pythonIcon from "@/assets/tools/python.svg";

const categories = ["All", "Analytics", "Design", "Advertising", "SEO", "CMS", "Email", "Development"] as const;
type Category = (typeof categories)[number];

interface Tool {
  name: string;
  category: Exclude<Category, "All">;
  icon: string;
}

const tools: Tool[] = [
  { name: "Google Analytics", category: "Analytics", icon: googleAnalyticsIcon },
  { name: "Search Console", category: "Analytics", icon: searchConsoleIcon },
  { name: "Canva", category: "Design", icon: canvaIcon },
  { name: "Figma", category: "Design", icon: figmaIcon },
  { name: "Photoshop", category: "Design", icon: photoshopIcon },
  { name: "Meta Ads", category: "Advertising", icon: metaIcon },
  { name: "Google Ads", category: "Advertising", icon: googleAdsIcon },
  { name: "LinkedIn Ads", category: "Advertising", icon: linkedinIcon },
  { name: "Ahrefs", category: "SEO", icon: ahrefsIcon },
  { name: "SEMrush", category: "SEO", icon: semrushIcon },
  { name: "Screaming Frog", category: "SEO", icon: screamingFrogIcon },
  { name: "WordPress", category: "CMS", icon: wordpressIcon },
  { name: "Shopify", category: "CMS", icon: shopifyIcon },
  { name: "Webflow", category: "CMS", icon: webflowIcon },
  { name: "Mailchimp", category: "Email", icon: mailchimpIcon },
  { name: "Klaviyo", category: "Email", icon: klaviyoIcon },
  { name: "VS Code", category: "Development", icon: vscodeIcon },
  { name: "GitHub", category: "Development", icon: githubIcon },
  { name: "AWS", category: "Development", icon: awsIcon },
  { name: "React.js", category: "Development", icon: reactjsIcon },
  { name: "Django", category: "Development", icon: djangoIcon },
  { name: "Bootstrap", category: "Development", icon: bootstrapIcon },
  { name: "Python", category: "Development", icon: pythonIcon },
];

const ToolCard = ({ tool, index }: { tool: Tool; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.35, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center gap-3 min-h-[110px] cursor-pointer"
      style={{
        background: hovered ? "#fffaf7" : "#ffffff",
        border: hovered ? "1px solid rgba(244,124,65,0.35)" : "1px solid #ede9e4",
        boxShadow: hovered ? "0 8px 28px rgba(244,124,65,0.12)" : "0 2px 10px rgba(0,0,0,0.04)",
        padding: "24px 16px",
        borderRadius: "16px",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.28s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        className="hidden md:block absolute left-1/2 pointer-events-none"
        style={{
          top: "-36px",
          transform: "translateX(-50%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.20s ease",
          zIndex: 10,
        }}
      >
        <div
          className="relative"
          style={{
            background: "#ffffff",
            border: "1px solid #ede9e4",
            boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
            padding: "5px 12px",
            borderRadius: "8px",
            fontSize: "11px",
            fontWeight: 600,
            color: "#1a1a1a",
            whiteSpace: "nowrap",
          }}
        >
          {tool.name}
          <div
            style={{
              position: "absolute",
              bottom: "-5px",
              left: "50%",
              transform: "translateX(-50%) rotate(45deg)",
              width: "8px",
              height: "8px",
              background: "#ffffff",
              border: "1px solid #ede9e4",
              borderTop: "none",
              borderLeft: "none",
            }}
          />
        </div>
      </div>

      {/* Icon - color by default, grayscale on hover */}
      <img
        src={tool.icon}
        alt={tool.name}
        loading="lazy"
        style={{
          width: "48px",
          height: "48px",
          objectFit: "contain",
          filter: hovered ? "grayscale(100%) opacity(0.55)" : "grayscale(0%) opacity(1)",
          transform: hovered ? "scale(1.10)" : "scale(1)",
          transition: "filter 0.28s ease, transform 0.28s ease",
        }}
      />

      {/* Name */}
      <span
        className="text-center leading-snug font-body"
        style={{
          fontSize: "12px",
          fontWeight: 500,
          color: hovered ? "#f47c41" : "#999999",
          transition: "color 0.28s ease",
        }}
      >
        {tool.name}
      </span>

      {/* Category badge */}
      <span
        className="hidden md:inline-block absolute font-body"
        style={{
          bottom: "10px",
          right: "10px",
          background: "rgba(244,124,65,0.08)",
          border: "1px solid rgba(244,124,65,0.20)",
          color: "#f47c41",
          fontSize: "9px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          padding: "2px 7px",
          borderRadius: "10px",
        }}
      >
        {tool.category}
      </span>
    </motion.div>
  );
};

const ToolsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setInView(true); return; }
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = active === "All" ? tools : tools.filter((t) => t.category === active);

  return (
    <section ref={sectionRef} className="px-6 md:px-12 lg:py-[90px] md:py-[70px] py-[50px]" style={{ background: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span
            className="block font-body"
            style={{ color: "#f47c41", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "12px" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            OUR TECH STACK
          </motion.span>
          <motion.h2
            className="font-display"
            style={{ color: "#1a1a1a", fontSize: "42px", marginBottom: "16px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Tools & Platforms We <span style={{ color: "#f47c41" }}>Master</span>
          </motion.h2>
          <motion.p
            className="font-body mx-auto"
            style={{ color: "#888888", fontSize: "16px", maxWidth: "500px", marginBottom: "40px" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.45 }}
          >
            We use industry-leading tools to deliver precision, performance, and real results for every client we work with.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto tools-scrollbar-hide" style={{ gap: "10px" }}>
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className="shrink-0 font-body cursor-pointer"
              style={{
                background: active === cat ? "#f47c41" : "#ffffff",
                border: active === cat ? "1.5px solid #f47c41" : "1.5px solid #ede9e4",
                color: active === cat ? "#ffffff" : "#666666",
                fontSize: "13px",
                fontWeight: 500,
                padding: "8px 22px",
                borderRadius: "50px",
                boxShadow: active === cat ? "0 4px 16px rgba(244,124,65,0.30)" : "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (active !== cat) {
                  (e.currentTarget).style.borderColor = "#f47c41";
                  (e.currentTarget).style.color = "#f47c41";
                  (e.currentTarget).style.background = "rgba(244,124,65,0.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== cat) {
                  (e.currentTarget).style.borderColor = "#ede9e4";
                  (e.currentTarget).style.color = "#666666";
                  (e.currentTarget).style.background = "#ffffff";
                }
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 + i * 0.05, duration: 0.3 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="tools-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Trust Strip */}
        <div className="text-center" style={{ marginTop: "48px" }}>
          <div style={{ maxWidth: "200px", margin: "0 auto 24px", height: "1px", background: "#ede9e4" }} />
          <p className="font-body" style={{ fontSize: "14px", color: "#aaaaaa", fontWeight: 400 }}>
            + More tools added regularly as we evolve with the industry
          </p>
          <span
            className="inline-block font-body"
            style={{
              marginTop: "10px",
              background: "rgba(244,124,65,0.10)",
              border: "1px solid rgba(244,124,65,0.25)",
              color: "#f47c41",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              padding: "5px 14px",
              borderRadius: "20px",
            }}
          >
            Always Upgrading
          </span>
        </div>
      </div>

      <style>{`
        .tools-scrollbar-hide::-webkit-scrollbar { display: none; }
        .tools-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 16px;
        }
        @media (max-width: 768px) {
          .tools-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .tools-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default ToolsSection;
