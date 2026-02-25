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

interface OrbitTool {
  name: string;
  icon: string;
}

const marketingTools: OrbitTool[] = [
  { name: "Google Analytics", icon: googleAnalyticsIcon },
  { name: "Google Ads", icon: googleAdsIcon },
  { name: "Meta Ads", icon: metaIcon },
  { name: "SEMrush", icon: semrushIcon },
  { name: "Ahrefs", icon: ahrefsIcon },
  { name: "Mailchimp", icon: mailchimpIcon },
  { name: "Klaviyo", icon: klaviyoIcon },
  { name: "LinkedIn", icon: linkedinIcon },
];

const designTools: OrbitTool[] = [
  { name: "Figma", icon: figmaIcon },
  { name: "Canva", icon: canvaIcon },
  { name: "Photoshop", icon: photoshopIcon },
  { name: "Webflow", icon: webflowIcon },
  { name: "Search Console", icon: searchConsoleIcon },
  { name: "Screaming Frog", icon: screamingFrogIcon },
];

const devTools: OrbitTool[] = [
  { name: "React.js", icon: reactjsIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Django", icon: djangoIcon },
  { name: "WordPress", icon: wordpressIcon },
  { name: "Shopify", icon: shopifyIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "AWS", icon: awsIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
];

const OrbitRing = ({
  tools,
  radius,
  duration,
  reverse,
  iconSize,
  inView,
}: {
  tools: OrbitTool[];
  radius: number;
  duration: number;
  reverse?: boolean;
  iconSize: number;
  inView: boolean;
}) => {
  const count = tools.length;
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: radius * 2,
        height: radius * 2,
        top: "50%",
        left: "50%",
        marginTop: -radius,
        marginLeft: -radius,
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Spinning wrapper */}
      <div
        className="w-full h-full relative"
        style={{
          animation: `${reverse ? "spin-reverse" : "spin-forward"} ${duration}s linear infinite`,
          animationPlayState: inView ? "running" : "paused",
        }}
      >
        {tools.map((tool, i) => {
          const angle = (360 / count) * i;
          const rad = (angle * Math.PI) / 180;
          const x = radius + radius * Math.cos(rad) - iconSize / 2;
          const y = radius + radius * Math.sin(rad) - iconSize / 2;
          return (
            <div
              key={tool.name}
              className="absolute flex items-center justify-center group"
              style={{
                width: iconSize,
                height: iconSize,
                left: x,
                top: y,
                animation: `${reverse ? "spin-forward" : "spin-reverse"} ${duration}s linear infinite`,
                animationPlayState: inView ? "running" : "paused",
              }}
            >
              <div
                className="w-full h-full rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-125"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="object-contain"
                  style={{ width: iconSize * 0.55, height: iconSize * 0.55 }}
                  loading="lazy"
                />
              </div>
              {/* Tooltip */}
              <span
                className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-body text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
              >
                {tool.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

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
      style={{ background: "#0a0a0a" }}
    >
      {/* Header */}
      <div className="relative z-10 text-center pt-20 pb-4 px-6">
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
          style={{ color: "#ffffff", fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Tools & Platforms We <span style={{ color: "#f47c41" }}>Master</span>
        </motion.h2>
        <motion.p
          className="font-body mx-auto"
          style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "480px", lineHeight: 1.7 }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.45 }}
        >
          Industry-leading tools powering precision, performance, and real results for every client.
        </motion.p>
      </div>

      {/* Orbit system — desktop */}
      <div className="hidden md:block relative mx-auto" style={{ width: "780px", height: "780px" }}>
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(244,124,65,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Orbit labels */}
        {[
          { label: "MARKETING", radius: 180, color: "rgba(244,124,65,0.25)" },
          { label: "DESIGN", radius: 265, color: "rgba(255,255,255,0.12)" },
          { label: "DEVELOPMENT", radius: 350, color: "rgba(255,255,255,0.08)" },
        ].map((ring) => (
          <motion.div
            key={ring.label}
            className="absolute rounded-full"
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
              top: "50%",
              left: "50%",
              marginTop: -ring.radius,
              marginLeft: -ring.radius,
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <span
              className="absolute font-body font-medium tracking-[0.15em] uppercase"
              style={{
                fontSize: "9px",
                color: ring.color,
                top: -14,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {ring.label}
            </span>
          </motion.div>
        ))}

        {/* 3 orbit rings */}
        <OrbitRing tools={marketingTools} radius={180} duration={25} iconSize={52} inView={inView} />
        <OrbitRing tools={designTools} radius={265} duration={35} reverse iconSize={48} inView={inView} />
        <OrbitRing tools={devTools} radius={350} duration={45} iconSize={46} inView={inView} />

        {/* Center logo */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full flex items-center justify-center"
          style={{
            width: 120,
            height: 120,
            background: "rgba(255,255,255,0.05)",
            border: "2px solid rgba(244,124,65,0.3)",
            boxShadow: "0 0 60px rgba(244,124,65,0.12), 0 0 120px rgba(244,124,65,0.04)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <img src={adsLogo} alt="Ayron Digital Solutions" className="w-16 h-16 object-contain" />
        </motion.div>
      </div>

      {/* Mobile: categorized grid */}
      <div className="md:hidden px-6 pb-16 pt-6 space-y-8">
        {[
          { label: "Marketing", tools: marketingTools },
          { label: "Design", tools: designTools },
          { label: "Development", tools: devTools },
        ].map((group) => (
          <div key={group.label}>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-white/30 mb-3">{group.label}</p>
            <div className="grid grid-cols-4 gap-3">
              {group.tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  className="flex items-center justify-center rounded-xl p-3"
                  style={{ background: "rgba(255,255,255,0.95)" }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <img src={tool.icon} alt={tool.name} className="w-7 h-7 object-contain" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        {/* Center logo mobile */}
        <div className="flex justify-center pt-4">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: 90,
              height: 90,
              background: "rgba(255,255,255,0.05)",
              border: "2px solid rgba(244,124,65,0.3)",
              boxShadow: "0 0 40px rgba(244,124,65,0.1)",
            }}
          >
            <img src={adsLogo} alt="Ayron Digital Solutions" className="w-12 h-12 object-contain" />
          </div>
        </div>
      </div>

      {/* Bottom padding for desktop */}
      <div className="hidden md:block h-12" />
    </section>
  );
};

export default ToolsSection;
