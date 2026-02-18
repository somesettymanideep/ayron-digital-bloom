import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servicesData, { ServiceData } from "@/data/servicesData";

const ServiceRelated = ({ service }: { service: ServiceData }) => {
  const related = service.relatedSlugs
    .map((slug) => servicesData[slug])
    .filter(Boolean);

  return (
    <section className="py-20 px-6 md:px-12" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[44px] mb-2" style={{ color: "#1a1a1a" }}>You Might Also Need</h2>
        <div className="w-10 h-[3px] mb-10" style={{ background: "#f47c41" }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {related.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-start gap-4 p-5 bg-white transition-all duration-300 hover:bg-[rgba(244,124,65,0.06)]"
                style={{ borderLeft: "3px solid #f47c41" }}
              >
                <div className="w-11 h-11 flex items-center justify-center shrink-0" style={{ background: "#f47c41" }}>
                  <Icon size={22} strokeWidth={1.5} className="text-white" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-base transition-colors duration-300 group-hover:text-[#f47c41]" style={{ color: "#1a1a1a" }}>
                    {s.title}
                  </h4>
                  <p className="font-body font-light text-[13px] mt-1" style={{ color: "#999" }}>{s.desc.slice(0, 60)}…</p>
                  <span className="inline-flex items-center gap-1 font-body text-xs font-semibold mt-2" style={{ color: "#f47c41" }}>
                    View <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceRelated;
