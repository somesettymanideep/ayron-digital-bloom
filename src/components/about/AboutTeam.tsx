import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

import tm1 from "@/assets/team-member-1.jpg";
import tm2 from "@/assets/team-member-2.jpg";
import tm3 from "@/assets/team-member-3.jpg";
import tm4 from "@/assets/team-member-4.jpg";
import tm5 from "@/assets/team-member-5.jpg";
import tm6 from "@/assets/team-member-6.jpg";
import tm7 from "@/assets/team-member-7.jpg";
import tm8 from "@/assets/team-member-8.jpg";

const members = [
  { name: "Ayush Rathore", role: "Founder & CEO", bio: "Visionary leader with 10+ years in digital marketing and brand strategy.", img: tm1 },
  { name: "Karan Verma", role: "Head of SEO", bio: "SEO expert driving organic growth and top rankings for 50+ brands.", img: tm2 },
  { name: "Meera Iyer", role: "Creative Director", bio: "Design thinker crafting brand identities that leave lasting impressions.", img: tm3 },
  { name: "Rohan Deshmukh", role: "Performance Marketing Lead", bio: "Paid ads specialist delivering high-ROAS campaigns across Meta and Google.", img: tm4 },
  { name: "Ananya Singh", role: "Web Design Lead", bio: "Full-stack designer building fast, beautiful, conversion-focused websites.", img: tm5 },
  { name: "Divya Nair", role: "Content Strategist", bio: "Storyteller turning brand messages into compelling content that converts.", img: tm6 },
  { name: "Arjun Bhatt", role: "Influencer Marketing Manager", bio: "Building authentic brand-creator partnerships that drive real reach and sales.", img: tm7 },
  { name: "Priya Sharma", role: "Client Success Manager", bio: "Dedicated to ensuring every client achieves their digital growth goals.", img: tm8 },
];

const AboutTeam = () => (
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
          style={{ color: "#f47c41", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12, display: "inline-block" }}
        >
          MEET THE TEAM
        </span>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 42, color: "#1a1a1a", marginBottom: 16 }}>
          The Minds Behind Your <span style={{ color: "#f47c41" }}>Growth</span>
        </h2>
        <p className="font-body" style={{ fontSize: 16, color: "#888888", maxWidth: 480, margin: "0 auto" }}>
          A passionate team of creative thinkers, digital strategists, and execution experts.
        </p>
      </motion.div>

      {/* Grid */}
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
      >
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #ede9e4",
              borderRadius: 20,
              overflow: "hidden",
              textAlign: "center",
              transition: "all 0.30s ease",
              cursor: "default",
              position: "relative",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 36px rgba(244,124,65,0.12)";
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Orange top bar */}
            <div style={{ height: 4, backgroundColor: "#f47c41" }} />
            {/* Photo */}
            <div style={{ height: 220, overflow: "hidden" }}>
              <img
                src={m.img}
                alt={m.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
            {/* Info */}
            <div style={{ padding: "20px 18px" }}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#1a1a1a", marginBottom: 4 }}>
                {m.name}
              </p>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 500, color: "#f47c41", marginBottom: 8 }}>
                {m.role}
              </p>
              <p className="font-body" style={{ fontSize: 13, color: "#888888", lineHeight: 1.6, marginBottom: 14 }}>
                {m.bio}
              </p>
              <div className="flex justify-center gap-2">
                {[Linkedin, Instagram].map((Icon, idx) => (
                  <button
                    key={idx}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "1px solid #ede9e4",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "transparent",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f47c41";
                      e.currentTarget.style.borderColor = "#f47c41";
                      const svg = e.currentTarget.querySelector("svg");
                      if (svg) svg.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "#ede9e4";
                      const svg = e.currentTarget.querySelector("svg");
                      if (svg) svg.style.color = "#666666";
                    }}
                  >
                    <Icon size={14} style={{ color: "#666666", transition: "color 0.3s ease" }} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutTeam;
