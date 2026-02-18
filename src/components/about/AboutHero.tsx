import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import aboutTeamHero from "@/assets/about-team-hero.jpg";

const AboutHero = () => (
  <section style={{ backgroundColor: "#f5f0eb", padding: "100px 0" }}>
    <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
      <div className="grid md:grid-cols-2 items-center" style={{ gap: 60 }}>
        {/* Left */}
        <div>
          <motion.span
            className="inline-block font-body"
            style={{
              color: "#f47c41",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 14,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ABOUT US
          </motion.span>

          <motion.h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 52,
              lineHeight: 1.15,
              color: "#1a1a1a",
              maxWidth: 480,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            We Are Your Digital{" "}
            <span style={{ color: "#f47c41" }}>Growth</span> Partners
          </motion.h1>

          <motion.p
            className="font-body"
            style={{
              fontWeight: 400,
              fontSize: 16,
              color: "#666666",
              lineHeight: 1.8,
              maxWidth: 460,
              marginBottom: 32,
              marginTop: 20,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ayron Digital Solutions is a full-service digital marketing agency
            helping brands grow online through creative strategies, data-driven
            campaigns, and powerful digital experiences. Founded with a mission
            to make premium digital marketing accessible to every business.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span
              className="font-body"
              style={{
                backgroundColor: "#f47c41",
                color: "#ffffff",
                fontSize: 12,
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: 50,
              }}
            >
              150+ Clients Served
            </span>
            <span
              className="font-body"
              style={{
                backgroundColor: "#ffffff",
                color: "#f47c41",
                fontSize: 12,
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: 50,
                border: "1.5px solid #f47c41",
              }}
            >
              5+ Years Experience
            </span>
          </motion.div>
        </div>

        {/* Right — Image with floating card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src={aboutTeamHero}
            alt="Ayron Digital Solutions team"
            style={{
              width: "100%",
              borderRadius: 24,
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Floating card */}
          <motion.div
            className="absolute"
            style={{
              bottom: 20,
              left: 20,
              backgroundColor: "#ffffff",
              borderRadius: 14,
              padding: "16px 20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0.34, 1.56, 0.64, 1.0],
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                backgroundColor: "rgba(244,124,65,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Trophy size={20} color="#f47c41" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#1a1a1a",
                  lineHeight: 1,
                }}
              >
                98%
              </p>
              <p
                className="font-body"
                style={{ fontSize: 13, color: "#666666" }}
              >
                Client Retention Rate
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutHero;
