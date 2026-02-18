import { useParams, Link } from "react-router-dom";
import servicesData from "@/data/servicesData";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import ServiceOverviewStrip from "@/components/ServiceOverviewStrip";
import ServiceDescription from "@/components/ServiceDescription";
import ServiceApproach from "@/components/ServiceApproach";
import ServiceResults from "@/components/ServiceResults";
import ServiceRelated from "@/components/ServiceRelated";
import ServiceDetailCTA from "@/components/ServiceDetailCTA";
import Footer from "@/components/Footer";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center" style={{ background: "#ffffff" }}>
        <div className="text-center">
          <h1 className="font-display text-5xl mb-4" style={{ color: "#1a1a1a" }}>Service Not Found</h1>
          <Link to="/services" className="font-body hover:underline" style={{ color: "#f47c41" }}>← Back to Services</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16">
      <ServiceDetailHero service={service} />
      <ServiceOverviewStrip service={service} />
      <ServiceDescription service={service} />
      <ServiceApproach service={service} />
      <ServiceResults service={service} />
      <ServiceRelated service={service} />
      <ServiceDetailCTA service={service} />
      <Footer />
    </main>
  );
};

export default ServiceDetail;
