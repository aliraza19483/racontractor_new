import Hero from "@/components/sections/Hero";
import AboutStudio from "@/components/sections/AboutStudio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import InteriorCategories from "@/components/sections/InteriorCategories";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import DesignProcess from "@/components/sections/DesignProcess";
import Testimonials from "@/components/sections/Testimonials";
import MaterialPartners from "@/components/sections/MaterialPartners";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStudio />
      <WhyChooseUs />
      <InteriorCategories />
      <FeaturedProjects />
      <DesignProcess />
      <Testimonials />
      <MaterialPartners />
      <ContactCTA />
    </>
  );
}
