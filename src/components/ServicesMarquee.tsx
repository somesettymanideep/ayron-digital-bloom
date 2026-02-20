import {
  Megaphone, Monitor, Diamond, Mail, Users,
  ShoppingBag, Search, Camera
} from "lucide-react";

const services = [
  { name: "Digital Marketing", icon: Megaphone },
  { name: "Website Design", icon: Monitor },
  { name: "Brand Identity", icon: Diamond },
  { name: "Email Marketing", icon: Mail },
  { name: "Influencer Marketing", icon: Users },
  { name: "Ecommerce Listing", icon: ShoppingBag },
  { name: "SEO Optimization", icon: Search },
  { name: "Product Shoot", icon: Camera },
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="overflow-hidden py-4">
    <div
      className={`flex gap-8 w-max ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}
      style={{ animationDuration: "40s" }}
    >
      {[...services, ...services].map((service, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-8 py-4 border border-border/40 bg-background hover:border-primary/60 transition-colors shrink-0 group cursor-pointer"
        >
          <service.icon
            size={22}
            className="text-primary group-hover:scale-110 transition-transform"
          />
          <span className="font-display text-xl tracking-wide text-foreground group-hover:text-primary transition-colors">
            {service.name}
          </span>
          <span className="text-primary/40 text-lg">✦</span>
        </div>
      ))}
    </div>
  </div>
);

const ServicesMarquee = () => {
  return (
    <section className="bg-background py-10 border-y border-border/20 overflow-hidden">
      <MarqueeRow />
      <MarqueeRow reverse />
    </section>
  );
};

export default ServicesMarquee;
