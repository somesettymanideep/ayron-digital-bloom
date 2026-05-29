import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, MapPin, Star } from "lucide-react";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import servicesData from "@/data/servicesData";

export interface LocationPageProps {
  city: "Vijayawada" | "Guntur";
  neighborhoods: string[];
  intro: string;
  noTrailingSlash?: boolean;
}

const LocationPage = ({ city, neighborhoods, intro, noTrailingSlash }: LocationPageProps) => {
  const slug = city.toLowerCase();
  const title = `Digital Marketing Agency in ${city}`;
  const description = `Ayron Digital Solutions is a leading digital marketing agency in ${city} offering SEO, social media, branding, web design & influencer marketing. Grow your ${city} business with data-driven campaigns.`;

  return (
    <motion.main
      className="pt-16 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title={title}
        description={description}
        canonical={`/${slug}`}
        noTrailingSlash={noTrailingSlash}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Ayron Digital Solutions — ${city}`,
          description,
          url: `https://ayrondigitalsolutions.com/${slug}${noTrailingSlash ? "" : "/"}`,
          areaServed: { "@type": "City", name: city },
          address: { "@type": "PostalAddress", addressLocality: city, addressRegion: "Andhra Pradesh", addressCountry: "IN" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "100" },
        }}
      />

      {/* HERO */}
      <section className="relative grid-bg noise-overlay overflow-hidden py-20 md:py-28" data-animate="fade-in">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/[0.06] rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1 mb-6">
              <MapPin size={14} className="text-primary" />
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Serving {city}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] text-foreground">
              Digital Marketing
              <span className="block text-stroke-orange">Agency in</span>
              <span className="block text-primary">{city}.</span>
            </h1>
            <p className="font-serif-accent italic text-primary text-2xl sm:text-[28px] mt-3">Built for growth.</p>
            <p className="font-body text-muted-foreground text-[17px] max-w-[520px] mt-6 leading-relaxed">{intro}</p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground font-display text-lg px-9 py-4 hover:bg-agency-orange-dark transition-colors inline-flex items-center gap-2"
              >
                Start Your Journey <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="text-foreground font-body text-base hover:underline underline-offset-4 group"
              >
                View Our Services <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs font-body text-muted-foreground mt-8">
              <span><span className="text-primary">✓</span> 200+ Brands Scaled</span>
              <span><span className="text-primary">✓</span> Local {city} Experts</span>
              <span className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-primary text-primary" />)}
                <span className="ml-1">5.0 on Google</span>
              </span>
            </div>
          </div>

          {/* Side card */}
          <div className="border border-border/40 bg-card p-8 md:p-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">Why {city} Brands<br/>Choose Ayron.</h2>
            <p className="font-body text-muted-foreground text-sm mb-6">A digital marketing partner that understands the {city} market — its audience, language, and buying behaviour.</p>
            <ul className="space-y-3">
              {[
                `Hyperlocal SEO targeting ${city} searches`,
                `Regional creatives in Telugu & English`,
                `Performance ads tuned for ${city} buyers`,
                `Dedicated account manager, no agency runaround`,
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 font-body text-sm text-foreground">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-primary font-display text-lg hover:gap-3 transition-all"
            >
              Get a free strategy call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-background" data-animate="fade-up">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky intro */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Our Services in {city}</span>
              <h2 className="font-display text-5xl md:text-6xl text-foreground mt-3 leading-[0.95]">
                Full-stack <span className="text-stroke-orange">marketing</span> for {city}.
              </h2>
              <p className="font-body text-muted-foreground mt-5 text-[15px] leading-relaxed">
                Eight specialised services, one strategic team. Built to scale {city} businesses from local favourite to category leader.
              </p>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 font-display text-lg text-foreground border-b border-primary pb-1 hover:gap-3 transition-all"
              >
                Explore all services <ArrowRight size={18} className="text-primary" />
              </Link>
            </div>
          </div>

          {/* Numbered editorial list */}
          <ol className="lg:col-span-8 border-t border-border/40">
            {Object.values(servicesData).map((s, i) => (
              <li key={s.slug} className="border-b border-border/40 group">
                <Link
                  to={`/services/${s.slug}`}
                  className="grid grid-cols-12 gap-4 md:gap-6 items-start py-6 md:py-8 transition-colors hover:bg-foreground hover:text-background px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <span className="col-span-2 md:col-span-1 font-display text-2xl md:text-3xl text-primary pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 md:col-span-7">
                    <h3 className="font-display text-3xl md:text-4xl leading-none">{s.title}</h3>
                    <p className="font-body text-sm text-muted-foreground group-hover:text-background/70 mt-3 max-w-md line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                  <div className="hidden md:flex col-span-3 flex-wrap gap-2 pt-2">
                    {s.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="font-body text-[10px] tracking-widest uppercase border border-border/60 group-hover:border-background/40 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={28}
                    className="hidden md:block col-span-1 justify-self-end text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-2"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>


      {/* AREAS SERVED */}
      <section className="py-20 md:py-24 bg-foreground text-background" data-animate="fade-up">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Coverage</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">Areas we serve across {city}.</h2>
            <p className="font-body text-background/70 mt-4 max-w-md">Working with brands, startups and local businesses throughout {city} and surrounding areas.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {neighborhoods.map((n) => (
              <div key={n} className="border border-background/15 px-4 py-3 font-body text-sm">
                <MapPin size={12} className="inline text-primary mr-2" />{n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / WHY */}
      <section className="py-20 md:py-28 bg-background" data-animate="fade-up">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Our Process</span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mt-3">How we grow <span className="text-stroke-orange">{city}</span> brands.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-border/40">
            {[
              { n: "01", t: "Audit", d: `Deep-dive into your ${city} market, competitors and conversion gaps.` },
              { n: "02", t: "Strategy", d: "A clear roadmap mapped to revenue — not vanity metrics." },
              { n: "03", t: "Execute", d: "Creative, ads, SEO and content shipped on a weekly cadence." },
              { n: "04", t: "Scale", d: "Double down on winners. Kill the rest. Compound the growth." },
            ].map((step) => (
              <div key={step.n} className="bg-background p-8">
                <span className="font-display text-5xl text-primary">{step.n}</span>
                <h3 className="font-display text-2xl text-foreground mt-3">{step.t}</h3>
                <p className="font-body text-sm text-muted-foreground mt-2">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS BACK TO HERO CTAs */}
      <section className="py-16 bg-primary text-primary-foreground" data-animate="fade-up">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-6xl">Ready to grow your<br/>{city} brand?</h2>
            <p className="font-body mt-3 max-w-lg">Talk to the team that's scaled 200+ brands. Start with a free strategy call — no decks, no fluff.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-background text-foreground font-display text-lg px-9 py-4 hover:bg-foreground hover:text-background transition-colors inline-flex items-center gap-2">
              Start Your Journey <ArrowRight size={18} />
            </Link>
            <Link to="/" className="border border-background/60 font-display text-lg px-9 py-4 hover:bg-background hover:text-foreground transition-colors inline-flex items-center gap-2">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </motion.main>
  );
};

export default LocationPage;
