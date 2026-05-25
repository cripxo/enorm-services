import FooterContactSection from "../components/Home/sections/FooterContactSection";
import TopNavigationSection from "../components/Home/sections/TopNavigationSection"
import HeroIntroSection from "../components/UberUns/HeroIntroSection";

const UberUns = () =>{
    return <div className="bg-white w-full min-h-screen relative overflow-x-hidden">
           <section className="absolute w-full">
                 <TopNavigationSection className="bg-[#091022B2]"/>
                     </section>
           <HeroIntroSection/>
   <footer >
             <FooterContactSection />
           </footer>
       </div>
}

export default UberUns;