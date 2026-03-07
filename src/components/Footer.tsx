import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import adsLogo from "@/assets/ads-white-logo-footer.png";
import footerCharacter from "@/assets/footer-character-orange.png";

const footerLinks = {
  Services: [
    { label: "Digital Marketing", href: "/#/services/digital-marketing" },
    { label: "Website Design", href: "/#/services/website-design" },
    { label: "Brand Identity", href: "/#/services/brand-identity" },
    { label: "Email Marketing", href: "/#/services/email-marketing" },
    { label: "Influencer Marketing", href: "/#/services/influencer-marketing" },
    { label: "SEO Optimization", href: "/#/services/seo-optimization" },
  ],
  "Quick Links": [
    { label: "About Us", href: "/#/about" },
    { label: "Our Work", href: "/#/services" },
    { label: "Blog", href: "/#/blog" },
    { label: "Contact", href: "/#/contact" },
  ],
};

const Footer = () => (
  <footer className="bg-background border-t border-border/30 relative">
    {/* Animated character */}
    <div className="flex justify-end max-w-7xl mx-auto px-6 md:px-12 -mb-4">
      <motion.img
        src={footerCharacter}
        alt="Digital marketing illustration"
        className="w-28 md:w-36 relative z-10 animate-float drop-shadow-[0_0_25px_hsl(var(--primary)/0.5)]"
        style={{ filter: "drop-shadow(0 0 20px hsl(24 90% 60% / 0.4)) drop-shadow(0 8px 30px hsl(24 90% 60% / 0.25))" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {/* Brand */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <img src={adsLogo} alt="Ayron Digital Solutions" width="160" height="80" style={{ height: "5rem", width: "auto" }} className=" p-2 mb-4" />
          <p className="font-body font-light text-muted-foreground text-sm leading-relaxed max-w-xs">
            Full-service digital marketing agency helping brands grow with data-driven strategies and creative execution.
          </p>
        </motion.div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <motion.div key={title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h4 className="font-display text-xl text-foreground mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Contact Us */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h4 className="font-display text-xl text-foreground mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
              <span className="font-body text-sm text-muted-foreground leading-relaxed">
                Kongara Sai Building, Sai Nagar,<br />Kala Nagar, Acharya Ranga Nagar,<br />Vijayawada – 520010
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary shrink-0" strokeWidth={1.5} />
              <a href="tel:+919550860545" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                +91 9550860545
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary shrink-0" strokeWidth={1.5} />
              <a href="mailto:info@ayrondigital.in" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                info@ayrondigital.in
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom bar */}
    <div className="bg-primary py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-primary-foreground">
          © 2026 Ayron Digital Solutions. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
            <a key={link} href="#" className="font-body text-xs text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
