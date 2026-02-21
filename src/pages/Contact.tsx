import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Contact = () => (
  <main className="pt-16">
    <SEO
      title="Contact Us"
      description="Get in touch with Ayron Digital Solutions. Let's discuss your digital marketing goals and create a strategy for measurable growth."
      canonical="/contact"
    />
    <ContactSection />
    <Footer />
  </main>
);

export default Contact;
