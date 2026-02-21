import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import { addSubmission } from "@/lib/submissions";
import { toast } from "@/hooks/use-toast";

const serviceOptions = [
  "Digital Marketing", "Website Design", "Brand Identity", "Email Marketing",
  "Influencer Marketing", "Ecommerce Listing", "SEO Optimization", "Product Shoot",
];
const budgetOptions = ["Under ₹10K", "₹10K–₹30K", "₹30K–₹1L", "₹1L+"];

const ContactSection = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      toast({ title: "Required fields", description: "Please fill in your name and email.", variant: "destructive" });
      return;
    }
    addSubmission({ ...formData, services: selectedServices, budget: selectedBudget });
    toast({ title: "Enquiry sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ fullName: "", email: "", phone: "", company: "", message: "" });
    setSelectedServices([]);
    setSelectedBudget("");
  };

  const toggleService = (s: string) => {
    setSelectedServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  return (
    <section id="contact" className="relative">
      {/* Header */}
      <div className="bg-background py-16 px-6 md:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Get In Touch</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-2">
            Let's Start Your
          </h2>
          <p className="font-serif-accent italic text-primary text-4xl md:text-6xl">Growth Story</p>
          <p className="font-body font-light text-muted-foreground text-base mt-4">
            Fill in the form and our team will get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Two column */}
      <div className="bg-secondary">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* LEFT - Form */}
        <div className="w-full lg:w-[60%] bg-secondary p-8 md:p-16 border-r border-border/10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              { label: "Full Name*", type: "text", placeholder: "Your full name", name: "fullName" },
              { label: "Email Address*", type: "email", placeholder: "you@example.com", name: "email" },
              { label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX", name: "phone" },
              { label: "Company / Brand Name", type: "text", placeholder: "Your brand", name: "company" },
            ].map((field) => (
              <div key={field.label}>
                <label className="font-body text-sm text-secondary-foreground font-medium block mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm px-4 py-3 outline-none focus:border-primary focus:shadow-[0_0_0_1px_hsl(20,89%,56%)] transition-all"
                />
              </div>
            ))}

            {/* Services chips */}
            <div>
              <label className="font-body text-sm text-secondary-foreground font-medium block mb-2">Services Interested In</label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={`font-body text-xs px-4 py-2 border transition-colors ${
                      selectedServices.includes(s)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-secondary-foreground border-secondary-foreground/30 hover:border-primary"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="font-body text-sm text-secondary-foreground font-medium block mb-2">Budget Range</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetOptions.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setSelectedBudget(b)}
                    className={`font-body text-xs px-4 py-3 border text-center transition-colors ${
                      selectedBudget === b
                        ? "border-primary text-primary"
                        : "border-secondary-foreground/20 text-secondary-foreground hover:border-primary"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="font-body text-sm text-secondary-foreground font-medium block mb-2">Message / Tell us about your project</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your goals, challenges, or questions..."
                className="w-full bg-transparent border border-secondary-foreground/20 text-secondary-foreground font-body text-sm px-4 py-3 outline-none focus:border-primary focus:shadow-[0_0_0_1px_hsl(20,89%,56%)] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-display text-xl py-4 hover:bg-agency-orange-dark transition-colors group"
            >
              Send My Enquiry <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <p className="font-body text-xs text-muted-foreground text-center">
              🔒 Your details are 100% private and secure.
            </p>
          </form>
        </div>

        {/* RIGHT - Info */}
        <div className="w-full lg:w-[40%] bg-primary p-8 md:p-12 flex flex-col">
          <div>
            <h3 className="font-display text-4xl text-secondary mb-2">Reach Us</h3>
            <p className="font-body text-secondary/80 text-sm mb-8">Prefer to talk? We're just a call away.</p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Kongara Sai Building, Sai Nagar,\nKala Nagar, Acharya Ranga Nagar,\nVijayawada – 520010" },
                { icon: Phone, label: "+91 9550860545\nMon–Sat, 10AM–7PM IST" },
                { icon: Mail, label: "hello@ayrondigital.com" },
                { icon: Globe, label: "www.ayrondigital.com" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <Icon className="text-secondary mt-1 shrink-0" size={20} strokeWidth={1.5} />
                    <p className="font-body text-secondary text-sm whitespace-pre-line">{item.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-secondary/40 flex items-center justify-center text-secondary hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Office hours - moved below social icons */}
          <div className="bg-secondary text-secondary-foreground p-6 mt-8">
            <h4 className="font-display text-xl text-primary mb-3">Office Hours</h4>
            <div className="font-body text-sm space-y-1">
              <p>Mon – Fri: 9:00 AM – 7:00 PM</p>
              <p>Saturday: 9:00 AM – 7:00 PM</p>
              <p>Sunday: Closed (we rest too 😄)</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-secondary py-10 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Our Location</span>
          <h3 className="font-display text-4xl md:text-5xl text-secondary-foreground mt-2">Find Us On The Map</h3>
        </div>
      </div>
      <div className="relative h-72 overflow-hidden bg-secondary">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7651.038902739213!2d80.653851!3d16.499853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fbb039b07825%3A0xdab65771832e6eac!2sAyron%20Digital%20Solutions!5e0!3m2!1sen!2sin!4v1771394661827!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ayron Digital Solutions Location"
        />
      </div>
    </section>
  );
};

export default ContactSection;
