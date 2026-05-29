import LocationPage from "./LocationPage";

const Guntur = () => (
  <LocationPage
    city="Guntur"
    intro="Ayron Digital Solutions is the digital marketing agency Guntur businesses choose to scale. From Brodipet boutiques to Lakshmipuram clinics and agri-export brands across Guntur district, we deliver SEO, social media, branding, website design and ad campaigns engineered for real, measurable ROI."
    neighborhoods={[
      "Brodipet", "Arundelpet", "Lakshmipuram", "Pattabhipuram", "Kothapet",
      "Sankar Vilas", "Nallapadu", "Gorantla", "Etukuru", "Chandramouli Nagar",
      "Amaravati Road", "Mangalagiri",
    ]}
    noTrailingSlash
  />
);

export default Guntur;
