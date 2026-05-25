import FooterContactSection from "../components/Home/sections/FooterContactSection";
import TopNavigationSection from "../components/Home/sections/TopNavigationSection"
import HeroIntroSection from "../components/UberUns/HeroIntroSection";

const UberUns = () =>{
    return <main
         className="bg-white w-full min-h-screen flex flex-col overflow-x-hidden"
         data-model-id="5:1410"
       >
           <TopNavigationSection className="bg-[black]"/>
           <HeroIntroSection/>
   <footer className="mt-auto">
             <FooterContactSection />
           </footer>
       </main>
}

export default UberUns;