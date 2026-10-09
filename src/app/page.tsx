import Hero from "@/components/sections/Hero";
import AboutStudio from "@/components/sections/AboutStudio";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import InteriorCategories from "@/components/sections/InteriorCategories";
import DesignProcess from "@/components/sections/DesignProcess";
import Testimonials from "@/components/sections/Testimonials";
import MaterialPartners from "@/components/sections/MaterialPartners";
import HomeFAQ from "@/components/sections/HomeFAQ";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStudio />
      <FeaturedProjects />
      <WhyChooseUs />
      <InteriorCategories />
      <DesignProcess />
      <Testimonials />
      <MaterialPartners />
      <HomeFAQ />
      <ContactCTA />
    </>
  );
}
