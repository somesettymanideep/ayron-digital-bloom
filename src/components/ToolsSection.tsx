import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
import mailchimpIcon from "@/assets/tools/mailchimp.svg";
import klaviyoIcon from "@/assets/tools/klaviyo.svg";
import vscodeIcon from "@/assets/tools/vscode.svg";
import githubIcon from "@/assets/tools/github.svg";
import awsIcon from "@/assets/tools/aws.svg";
import reactjsIcon from "@/assets/tools/reactjs.svg";
import djangoIcon from "@/assets/tools/django.svg";
import bootstrapIcon from "@/assets/tools/bootstrap.svg";
import pythonIcon from "@/assets/tools/python.svg";
import webflowIcon from "@/assets/tools/webflow.svg";
import adsLogo from "@/assets/ads-logo.png";

interface FloatingTool {
  name: string;
  icon: string;
  x: number; // percentage
  y: number; // percentage
  size: number; // px
  delay: number;
}

// Manually position icons scattered around the section
const floatingTools: FloatingTool[] = [
  { name: "Google Analytics", icon: googleAnalyticsIcon, x: 8, y: 10, size: 72, delay: 0 },
  { name: "Figma", icon: figmaIcon, x: 25, y: 5, size: 68, delay: 0.3 },
  { name: "Python", icon: pythonIcon, x: 45, y: 8, size: 76, delay: 0.6 },
  { name: "Meta Ads", icon: metaIcon, x: 70, y: 6, size: 70, delay: 0.15 },
  { name: "GitHub", icon: githubIcon, x: 88, y: 12, size: 74, delay: 0.45 },
  { name: "React.js", icon: reactjsIcon, x: 5, y: 35, size: 76, delay: 0.75 },
  { name: "Canva", icon: canvaIcon, x: 18, y: 55, size: 68, delay: 0.2 },
  { name: "Shopify", icon: shopifyIcon, x: 82, y: 30, size: 70, delay: 0.5 },
  { name: "Django", icon: djangoIcon, x: 90, y: 55, size: 72, delay: 0.35 },
  { name: "WordPress", icon: wordpressIcon, x: 12, y: 78, size: 70, delay: 0.65 },
  { name: "SEMrush", icon: semrushIcon, x: 30, y: 85, size: 68, delay: 0.1 },
  { name: "Photoshop", icon: photoshopIcon, x: 50, y: 82, size: 74, delay: 0.4 },
  { name: "AWS", icon: awsIcon, x: 68, y: 88, size: 72, delay: 0.7 },
  { name: "Bootstrap", icon: bootstrapIcon, x: 85, y: 80, size: 68, delay: 0.25 },
  { name: "Google Ads", icon: googleAdsIcon, x: 35, y: 28, size: 66, delay: 0.55 },
  { name: "LinkedIn", icon: linkedinIcon, x: 65, y: 25, size: 66, delay: 0.8 },
  { name: "Ahrefs", icon: ahrefsIcon, x: 22, y: 42, size: 64, delay: 0.15 },
  { name: "Webflow", icon: webflowIcon, x: 78, y: 68, size: 64, delay: 0.5 },
  { name: "Mailchimp", icon: mailchimpIcon, x: 55, y: 65, size: 66, delay: 0.35 },
  { name: "Klaviyo", icon: klaviyoIcon, x: 42, y: 70, size: 64, delay: 0.6 },
  { name: "VS Code", icon: vscodeIcon, x: 3, y: 60, size: 64, delay: 0.45 },
  { name: "Search Console", icon: searchConsoleIcon, x: 72, y: 50, size: 66, delay: 0.2 },
  { name: "Screaming Frog", icon: screamingFrogIcon, x: 92, y: 42, size: 62, delay: 0.7 },
];

const ToolsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setInView(true); return; }
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "#0a0a0a",
        minHeight: "700px",
        padding: "80px 24px",
      }}
    >
      {/* Floating Tool Icons */}
      {floatingTools.map((tool, i) => (
        <motion.div
          key={tool.name}
          className="absolute hidden md:flex items-center justify-center"
          style={{
            left: `${tool.x}%`,
            top: `${tool.y}%`,
            width: `${tool.size}px`,
            height: `${tool.size}px`,
            borderRadius: "12px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(4px)",
            zIndex: 1,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? {
            opacity: [0, 0.85, 0.65, 0.85],
            scale: 1,
            y: [0, -8, 0, 8, 0],
          } : {}}
          transition={{
            opacity: { delay: tool.delay, duration: 1.2 },
            scale: { delay: tool.delay, duration: 0.6, ease: "easeOut" },
            y: {
              delay: tool.delay + 1,
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <img
            src={tool.icon}
            alt={tool.name}
            className="w-10 h-10 object-contain"
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* Top Header */}
      <div className="relative z-10 text-center mb-6">
        <motion.span
          className="block font-body mb-3"
          style={{ color: "#f47c41", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          OUR TECH STACK
        </motion.span>
        <motion.h2
          className="font-display mb-4"
          style={{ color: "#ffffff", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Tools & Platforms We <span style={{ color: "#f47c41" }}>Master</span>
        </motion.h2>
        <motion.p
          className="font-body mx-auto"
          style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "460px", lineHeight: 1.7 }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.45 }}
        >
          We use industry-leading tools to deliver precision, performance, and real results for every client we work with.
        </motion.p>
      </div>

      {/* Mobile: simple grid of icons */}
      <div className="md:hidden grid grid-cols-5 gap-3 mb-6 px-2">
        {floatingTools.slice(0, 15).map((tool) => (
          <motion.div
            key={tool.name}
            className="flex items-center justify-center rounded-xl p-3"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 0.8, scale: 1 } : {}}
            transition={{ delay: tool.delay, duration: 0.5 }}
          >
            <img src={tool.icon} alt={tool.name} className="w-6 h-6 object-contain" loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* Center ADS Logo */}
      <motion.div
        className="relative z-10 mx-auto flex items-center justify-center"
        style={{ marginTop: "60px" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <div
          className="rounded-full flex items-center justify-center"
          style={{
            width: "140px",
            height: "140px",
            background: "rgba(255,255,255,0.07)",
            border: "2px solid rgba(244,124,65,0.3)",
            boxShadow: "0 0 60px rgba(244,124,65,0.15), 0 0 120px rgba(244,124,65,0.05)",
          }}
        >
          <img
            src={adsLogo}
            alt="Ayron Digital Solutions"
            className="w-20 h-20 object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ToolsSection;
