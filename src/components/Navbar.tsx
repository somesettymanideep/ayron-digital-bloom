import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Megaphone, Monitor, Diamond, Mail, Users,
  ShoppingBag, Search, Camera, ChevronDown
} from "lucide-react";
import adsLogo from "@/assets/ads-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone },
      { label: "Website Design", href: "/services/website-design", icon: Monitor },
      { label: "Brand Identity", href: "/services/brand-identity", icon: Diamond },
      { label: "Email Marketing", href: "/services/email-marketing", icon: Mail },
      { label: "Influencer Marketing", href: "/services/influencer-marketing", icon: Users },
      { label: "Ecommerce Listing", href: "/services/ecommerce-listing", icon: ShoppingBag },
      { label: "SEO Optimization", href: "/services/seo-optimization", icon: Search },
      { label: "Product Shoot", href: "/services/product-shoot", icon: Camera },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Services marquee top bar */}
      <div className="bg-primary overflow-hidden h-8 flex items-center">
        <div className="flex w-max animate-marquee-left" style={{ animationDuration: "30s" }}>
          {[...Array(2)].flatMap((_, dupeIdx) =>
            [
              { icon: Megaphone, name: "Digital Marketing" },
              { icon: Monitor, name: "Website Design" },
              { icon: Diamond, name: "Brand Identity" },
              { icon: Mail, name: "Email Marketing" },
              { icon: Users, name: "Influencer Marketing" },
              { icon: ShoppingBag, name: "Ecommerce Listing" },
              { icon: Search, name: "SEO Optimization" },
              { icon: Camera, name: "Product Shoot" },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <span
                  key={`${dupeIdx}-${i}`}
                  className="flex items-center gap-1.5 px-5 text-primary-foreground font-body text-xs tracking-wide whitespace-nowrap"
                >
                  <Icon size={13} strokeWidth={1.5} />
                  {s.name}
                  <span className="mx-3 opacity-40">✦</span>
                </span>
              );
            })
          )}
        </div>
      </div>
      <div className="bg-secondary/95 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={adsLogo} alt="Ayron Digital Solutions" className="h-9" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 font-body text-[13px] tracking-widest uppercase transition-colors ${
                    isActive(link.href) ? "text-primary" : "text-secondary-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-secondary border border-border/40 shadow-xl z-50">
                    <div className="py-2">
                      <Link
                        to="/services"
                        className="block px-5 py-2.5 font-body text-sm text-primary hover:bg-muted/50 transition-colors border-b border-border/20 font-medium"
                      >
                        All Services
                      </Link>
                      {link.dropdown.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="flex items-center gap-3 px-5 py-2.5 font-body text-sm text-secondary-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            <Icon size={16} strokeWidth={1.5} className="text-primary shrink-0" />
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-[13px] tracking-widest uppercase transition-colors ${
                  isActive(link.href) ? "text-primary" : "text-secondary-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-primary text-primary-foreground font-display text-lg px-6 py-2 hover:bg-agency-orange-dark transition-colors"
        >
          Get Started
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-border/20 px-6 py-4 space-y-3">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full font-body text-sm tracking-widest uppercase text-secondary-foreground/80"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link to="/services" className="block font-body text-sm text-primary">
                      All Services
                    </Link>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block font-body text-sm text-secondary-foreground/70 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="block font-body text-sm tracking-widest uppercase text-secondary-foreground/80 hover:text-primary"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="block bg-primary text-primary-foreground font-display text-lg px-6 py-2 w-fit mt-2"
          >
            Get Started
          </Link>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
