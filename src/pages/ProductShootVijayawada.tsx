import SEO from "@/components/SEO";
import ServiceBanner from "@/components/ServiceBanner";
import ServiceDetailCTA from "@/components/ServiceDetailCTA";
import Footer from "@/components/Footer";
import servicesData from "@/data/servicesData";

const ProductShootVijayawada = () => {
  const service = servicesData["product-shoot"];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main className="pt-16">
      <SEO
        title="Best Product Shoot Services in Vijayawada | Professional Photography"
        description="Capture stunning product visuals with creative photography services for brands, eCommerce stores, and businesses in Vijayawada."
        keywords="best product shoot services in vijayawada, best product shoot photography in vijayawada"
        canonical="/services/product-shoot-vijayawada"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Product Shoot Services in Vijayawada",
          provider: { "@type": "Organization", name: "Ayron Digital Solutions" },
          description: "Professional product photography and shoot services for brands in Vijayawada",
          areaServed: "Vijayawada",
        }}
      />
      <ServiceBanner service={service} />
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Product Shoot Services in Vijayawada</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Ayron Digital Solutions, we specialize in professional product photography and shoot services tailored for brands, eCommerce stores, and businesses in Vijayawada. Whether you need stunning product visuals for your online store, social media campaigns, or marketing materials, our experienced photographers deliver high-quality, conversion-focused imagery.
          </p>
          <p className="text-lg text-gray-700">
            We serve businesses across Vijayawada including Benz Circle, MG Road, Governorpet, and surrounding areas. Our product shoot services help your brand stand out in competitive markets with professional, engaging visuals.
          </p>
        </div>
      </section>
      <ServiceDetailCTA service={service} />
      <Footer />
    </main>
  );
};

export default ProductShootVijayawada;
