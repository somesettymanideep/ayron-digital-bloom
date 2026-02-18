import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Analytics", "Design", "Advertising", "SEO", "CMS", "Email"];

const tools = [
  { name: "Google Analytics", category: "Analytics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Search Console", category: "Analytics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Canva", category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Figma", category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop", category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Meta Ads", category: "Advertising", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
  { name: "Google Ads", category: "Advertising", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "LinkedIn Ads", category: "Advertising", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
  { name: "Ahrefs", category: "SEO", logo: "" },
  { name: "SEMrush", category: "SEO", logo: "" },
  { name: "Screaming Frog", category: "SEO", logo: "" },
  { name: "WordPress", category: "CMS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Shopify", category: "CMS", logo: "" },
  { name: "Webflow", category: "CMS", logo: "" },
  { name: "Mailchimp", category: "Email", logo: "" },
  { name: "HubSpot", category: "Email", logo: "" },
];

const getInitial = (name: string) => name.split(" ").map(w => w[0]).join("").slice(0, 2);

const AboutTools = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? tools : tools.filter((t) => t.category === activeTab);

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "90px 0" }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <motion.div
          className="text-center"
          style={{ marginBottom: 50 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-body" style={{ color: "#f47c41", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12, display: "inline-block" }}>
            OUR TECH STACK
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 42, color: "#1a1a1a", marginBottom: 16 }}>
            Tools & Platforms We Master
          </h2>
          <p className="font-body" style={{ fontSize: 16, color: "#888888", maxWidth: 500, margin: "0 auto" }}>
            We use industry-leading tools to deliver precision, performance, and results for every client.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2"
          style={{ marginBottom: 36 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              className="font-body"
              onClick={() => setActiveTab(cat)}
              style={{
                fontSize: 13,
                fontWeight: 500,
                padding: "8px 20px",
                borderRadius: 50,
                border: activeTab === cat ? "1.5px solid #f47c41" : "1.5px solid #ede9e4",
                backgroundColor: activeTab === cat ? "#f47c41" : "#ffffff",
                color: activeTab === cat ? "#ffffff" : "#666666",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.35 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Tools grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="flex flex-col items-center gap-2.5 group"
              style={{
                minWidth: 100,
                backgroundColor: "#ffffff",
                border: "1px solid #ede9e4",
                borderRadius: 16,
                padding: "20px 16px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                transition: "all 0.28s ease",
                cursor: "default",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(244,124,65,0.14)";
                e.currentTarget.style.borderColor = "rgba(244,124,65,0.30)";
                const img = e.currentTarget.querySelector("img");
                if (img) { img.style.filter = "grayscale(0%) opacity(1)"; }
                const fb = e.currentTarget.querySelector<HTMLDivElement>(".tool-fallback");
                if (fb) { fb.style.backgroundColor = "#f47c41"; fb.style.color = "#fff"; }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "#ede9e4";
                const img = e.currentTarget.querySelector("img");
                if (img) { img.style.filter = "grayscale(100%) opacity(0.6)"; }
                const fb = e.currentTarget.querySelector<HTMLDivElement>(".tool-fallback");
                if (fb) { fb.style.backgroundColor = "#f5f0eb"; fb.style.color = "#888"; }
              }}
            >
              {tool.logo ? (
                <img
                  src={tool.logo}
                  alt={tool.name}
                  style={{
                    width: 48,
                    height: 48,
                    objectFit: "contain",
                    filter: "grayscale(100%) opacity(0.6)",
                    transition: "filter 0.28s ease",
                  }}
                />
              ) : (
                <div
                  className="tool-fallback font-body"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: "#f5f0eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#888",
                    transition: "all 0.28s ease",
                  }}
                >
                  {getInitial(tool.name)}
                </div>
              )}
              <span className="font-body" style={{ fontSize: 12, fontWeight: 500, color: "#888888", textAlign: "center" }}>
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTools;
