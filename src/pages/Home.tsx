import BrandProtectionSection from "../components/Home/sections/BrandProtectionSection";
import FooterContactSection from "../components/Home/sections/FooterContactSection";
import HeroBannerSection from "../components/Home/sections/HeroBannerSection";
import IndustrySegmentsSection from "../components/Home/sections/IndustrySegmentsSection";
import IntelligentProcessesSection from "../components/Home/sections/IntelligentProcessesSection";
import ServicesGridSection from "../components/Home/sections/ServicesGridSection";
import SolutionsHighlightSection from "../components/Home/sections/SolutionsHighlightSection";
import TopNavigationSection from "../components/Home/sections/TopNavigationSection";

const pageSections = [
  { id: "hero-banner", component: HeroBannerSection },
  { id: "top-navigation", component: TopNavigationSection },
  { id: "services-grid", component: ServicesGridSection },
  { id: "solutions-highlight", component: SolutionsHighlightSection },
  { id: "industry-segments", component: IndustrySegmentsSection },
  { id: "intelligent-processes", component: IntelligentProcessesSection },
  { id: "brand-protection", component: BrandProtectionSection },
] as const;

export const Home = () => {
  return (
    <main
      className="bg-white w-full min-h-screen flex flex-col overflow-x-hidden"
      data-model-id="5:1410"
    >
      <div className="flex-1 flex flex-col">
        {pageSections.map(({ id, component: SectionComponent }) => (
          <section key={id} aria-label={id}>
            <SectionComponent />
          </section>
        ))}
        <footer>
          <FooterContactSection />
        </footer>
      </div>
    </main>
  );
};

export default Home;
