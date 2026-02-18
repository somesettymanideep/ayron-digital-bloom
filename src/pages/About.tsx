import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutFounder from "@/components/about/AboutFounder";
import AboutTeam from "@/components/about/AboutTeam";
import AboutStats from "@/components/about/AboutStats";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutTools from "@/components/about/AboutTools";
import Footer from "@/components/Footer";

const About = () => (
  <main className="pt-16">
    <AboutHero />
    <AboutVisionMission />
    <AboutFounder />
    <AboutTeam />
    <AboutStats />
    <AboutTestimonials />
    <AboutTools />
    <Footer />
  </main>
);

export default About;
