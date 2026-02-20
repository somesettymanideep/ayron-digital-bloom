import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  { icon: Facebook, label: "Facebook", href: "#", bg: "bg-[hsl(221,44%,41%)]" },
  { icon: Instagram, label: "Instagram", href: "#", bg: "bg-gradient-to-br from-[hsl(37,97%,70%)] via-[hsl(333,69%,52%)] to-[hsl(270,70%,55%)]" },
  { icon: Linkedin, label: "LinkedIn", href: "#", bg: "bg-[hsl(210,80%,42%)]" },
  { icon: Youtube, label: "YouTube", href: "#", bg: "bg-[hsl(0,100%,50%)]" },
];

const SocialSidebar = () => (
  <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col hidden md:flex">
    {socials.map((s) => {
      const Icon = s.icon;
      return (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center ${s.bg} text-white transition-all duration-300 overflow-hidden`}
          style={{ width: "48px" }}
          onMouseEnter={(e) => (e.currentTarget.style.width = "160px")}
          onMouseLeave={(e) => (e.currentTarget.style.width = "48px")}
        >
          <span className="w-12 h-12 flex items-center justify-center shrink-0">
            <Icon size={20} strokeWidth={1.5} />
          </span>
          <span className="font-body text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-4">
            {s.label}
          </span>
        </a>
      );
    })}
  </div>
);

export default SocialSidebar;
