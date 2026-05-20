import HeroSection from "../components/BuldingCleaning/HeroSection";
import QualityAssuranceSection from "../components/BuldingCleaning/QualityAssuranceSection";
import ServicesSection from "../components/BuldingCleaning/ServicesSection";
import ValuePropositionSection from "../components/BuldingCleaning/ValuePropositionSection";
import FooterContactSection from "../components/Home/sections/FooterContactSection";
import TopNavigationSection from "../components/Home/sections/TopNavigationSection";

const BuldingCleaning = () => {
return (
     <div className="bg-white w-full min-h-screen relative overflow-x-hidden">
      <section className="absolute w-full">
      <TopNavigationSection className="bg-[#091022B2]"/>
          </section>
      <HeroSection />
      <ServicesSection />
      <ValuePropositionSection />
      <QualityAssuranceSection />
      <footer>
                <FooterContactSection />
              </footer>
    </div>
)
}

export default BuldingCleaning;