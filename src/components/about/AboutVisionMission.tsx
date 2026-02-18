import { motion } from "framer-motion";
import { Eye, Rocket } from "lucide-react";

const cards = [
  {
    label: "OUR VISION",
    icon: Eye,
    heading:
      "To Be the Most Trusted Digital Growth Partner for Ambitious Brands Worldwide.",
    body: "We envision a world where every business — no matter its size — has access to world-class digital marketing that drives real, sustainable growth. We aim to be the agency that makes that possible.",
    animX: -40,
  },
  {
    label: "OUR MISSION",
    icon: Rocket,
    heading:
      "To Deliver Creative, Data-Driven Digital Solutions That Generate Measurable Business Growth.",
    body: "Our mission is to empower businesses with innovative digital strategies — from SEO and social media to branding and web design — that generate real leads, real revenue, and real results. We treat every client's brand as our own.",
    animX: 40,
  },
];

const AboutVisionMission = () => (
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
        <span
          className="font-body"
          style={{
            color: "#f47c41",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            marginBottom: 12,
            display: "inline-block",
          }}
        >
          WHAT DRIVES US
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 42,
            color: "#1a1a1a",
            marginBottom: 16,
          }}
        >
          Our Vision & Mission
        </h2>
        <p
          className="font-body"
          style={{
            fontSize: 16,
            color: "#888888",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          Everything we do is guided by a clear purpose and a bold vision for
          the future of digital marketing.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2" style={{ gap: 24 }}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              style={{
                backgroundColor: "#f5f0eb",
                borderRadius: 24,
                padding: "48px 40px",
                border: "1.5px solid #ede9e4",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                transition: "all 0.30s ease",
                cursor: "default",
              }}
              initial={{ opacity: 0, x: card.animX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.animX < 0 ? 0.15 : 0.25, duration: 0.55 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.border = "1.5px solid rgba(244,124,65,0.35)";
                el.style.boxShadow = "0 12px 40px rgba(244,124,65,0.10)";
                el.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.border = "1.5px solid #ede9e4";
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.04)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  backgroundColor: "#f47c41",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <Icon size={28} color="#ffffff" />
              </div>

              {/* Pill label */}
              <span
                className="font-body inline-block"
                style={{
                  backgroundColor: "#f47c41",
                  color: "#ffffff",
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  padding: "5px 14px",
                  borderRadius: 20,
                  marginBottom: 16,
                }}
              >
                {card.label}
              </span>

              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#1a1a1a",
                  lineHeight: 1.3,
                  marginBottom: 16,
                }}
              >
                {card.heading}
              </h3>

              <p
                className="font-body"
                style={{
                  fontWeight: 400,
                  fontSize: 15,
                  color: "#666666",
                  lineHeight: 1.8,
                }}
              >
                {card.body}
              </p>

              {/* Orange decorative line */}
              <div
                style={{
                  width: 48,
                  height: 3,
                  borderRadius: 10,
                  backgroundColor: "#f47c41",
                  marginTop: 28,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AboutVisionMission;
