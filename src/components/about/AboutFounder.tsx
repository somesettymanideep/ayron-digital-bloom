import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.jpg";

const AboutFounder = () => (
  <section style={{ backgroundColor: "#f5f0eb", padding: "90px 0" }}>
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
          }}
        >
          FROM THE FOUNDER
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 42,
            color: "#1a1a1a",
            marginTop: 12,
          }}
        >
          A Message From Our Founder
        </h2>
      </motion.div>

      {/* 2-col */}
      <div
        className="grid items-center"
        style={{
          gridTemplateColumns: "35% 1fr",
          gap: 60,
        }}
      >
        {/* Left — photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          <div style={{ borderRadius: 20, overflow: "hidden" }}>
            <img
              src={founderPortrait}
              alt="Founder"
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px 24px",
              borderRadius: "0 0 20px 20px",
              border: "1px solid #ede9e4",
              borderTop: "none",
            }}
          >
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#1a1a1a",
              }}
            >
              Ayush Rathore
            </p>
            <p
              className="font-body"
              style={{ color: "#f47c41", fontSize: 13, fontWeight: 500 }}
            >
              Founder & CEO
            </p>
            <p
              className="font-body"
              style={{ color: "#888888", fontSize: 12, marginBottom: 12 }}
            >
              Ayron Digital Solutions
            </p>
            <div className="flex gap-2">
              {[Linkedin, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1.5px solid #ede9e4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#f47c41";
                    const svg = e.currentTarget.querySelector("svg");
                    if (svg) svg.style.color = "#f47c41";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ede9e4";
                    const svg = e.currentTarget.querySelector("svg");
                    if (svg) svg.style.color = "#666666";
                  }}
                >
                  <Icon size={16} style={{ color: "#666666", transition: "color 0.3s ease" }} />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — message */}
        <div className="relative">
          <motion.span
            className="select-none block"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 120,
              color: "#f47c41",
              opacity: 0.15,
              lineHeight: 0.8,
              marginBottom: -20,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            "
          </motion.span>

          <motion.p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: 22,
              color: "#1a1a1a",
              lineHeight: 1.5,
              marginBottom: 20,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            At Ayron, we don't just run campaigns — we build digital empires for
            brands that dare to dream big.
          </motion.p>

          <motion.p
            className="font-body"
            style={{
              fontWeight: 400,
              fontSize: 16,
              color: "#555555",
              lineHeight: 1.85,
              marginBottom: 20,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.55 }}
          >
            When I started Ayron Digital Solutions, I had one goal — to create
            an agency that actually cares about client results, not just
            retainers. Every strategy we build, every campaign we run, every
            design we create is done with your growth in mind. We measure our
            success by your success. That is the Ayron promise — and we deliver
            it every single day.
          </motion.p>

          <motion.p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: 28,
              color: "#1a1a1a",
              marginTop: 8,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.55 }}
          >
            Ayush Rathore
          </motion.p>

          <motion.p
            className="font-body"
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "#888888",
              marginTop: 16,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.48, duration: 0.55 }}
          >
            10+ Years Experience{" "}
            <span style={{ color: "#f47c41", margin: "0 8px" }}>·</span>
            150+ Brands Served{" "}
            <span style={{ color: "#f47c41", margin: "0 8px" }}>·</span>
            98% Client Retention
          </motion.p>
        </div>
      </div>
    </div>

    {/* Mobile stack */}
    <style>{`
      @media (max-width: 768px) {
        section > div > div[style*="grid-template-columns"] {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

export default AboutFounder;
