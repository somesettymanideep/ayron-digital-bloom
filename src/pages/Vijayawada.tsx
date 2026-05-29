import LocationPage from "./LocationPage";

const Vijayawada = () => (
  <LocationPage
    city="Vijayawada"
    intro="Ayron Digital Solutions is the digital marketing agency Vijayawada brands trust to grow online. From Benz Circle startups to MG Road retailers and e-commerce sellers across Krishna district, we build SEO, social media, branding and performance ad campaigns that turn local searches into paying customers."
    neighborhoods={[
      "Benz Circle", "MG Road", "Governorpet", "Patamata", "Auto Nagar",
      "Labbipet", "Bhavanipuram", "Gunadala", "Moghalrajpuram", "Ramavarappadu",
      "Kanuru", "Tadepalli",
    ]}
    noTrailingSlash
  />
);

export default Vijayawada;
