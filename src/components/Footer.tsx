import adsLogo from "@/assets/ads-logo.png";

const footerLinks = {
  Services: ["Digital Marketing", "Website Design", "Brand Identity", "Email Marketing", "Influencer Marketing", "SEO Optimization"],
  Company: ["About Us", "Our Work", "Blog", "Careers", "Contact"],
  Resources: ["Case Studies", "Free Audit", "Marketing Guide", "FAQ"],
};

const Footer = () => (
  <footer className="bg-background border-t border-border/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={adsLogo} alt="Ayron Digital Solutions" className="h-10 mb-4" />
          <p className="font-body font-light text-muted-foreground text-sm leading-relaxed max-w-xs">
            Full-service digital marketing agency helping brands grow with data-driven strategies and creative execution.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display text-xl text-foreground mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border/30 py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Ayron Digital Solutions. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
            <a key={link} href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
