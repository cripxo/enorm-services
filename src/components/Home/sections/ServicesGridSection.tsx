import { useScrollAnimation } from "../../GlobalComponents/useScrollAnimation";
import handIcon from "../../../assets/svgs/hand_icon.svg";
import aiSolutionIcon from "../../../assets/svgs/ai_solution_icon.svg";
import flareIcon from "../../../assets/svgs/flare_icon.svg";
import CardIcon from "../../GlobalComponents/CardIcon";

const services = [
  {
    title: "Gebäudereinigung",
    description:
      "Sauberkeit schafft Werte. Wir sorgen für hygeinische und reprasentative Umgebungen.",
    image: "https://c.animaapp.com/afwsxCsF/img/container-1@2x.png",
    icon: handIcon,
  },
  {
    title: "Ai Solutions",
    description:
      "Sauberkeit schafft Werte. Wir sorgen für hygeinische und reprasentative Umgebungen.",
    image: "https://c.animaapp.com/afwsxCsF/img/container-2@2x.png",
    icon: aiSolutionIcon,
  },
  {
    title: "Brandschutz",
    description:
      "Sauberkeit schafft Werte. Wir sorgen für hygeinische und reprasentative Umgebungen.",
    image: "https://c.animaapp.com/afwsxCsF/img/container-3@2x.png",
    icon: flareIcon,
  },
];

export const ServicesGridSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      aria-label="Services grid"
      className="w-full max-w-[1520px] mx-auto px-6 md:px-12 lg:px-0"
      style={{border: '1px solid #E1E6EF', marginTop: 150, marginBottom: 50,}}
    >
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left panel */}
        <div
          className={`flex flex-col items-start justify-between p-8 md:p-12 lg:w-[380px] transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div>
            <h2 className="[font-family:'Google_Sans',Helvetica] font-medium text-[#02142c] text-[28px] md:text-[35px] leading-[44.8px]">
              Unsere
            </h2>
            <h2 className="[font-family:'Google_Sans',Helvetica] font-medium text-[#02142c] text-[28px] md:text-[35px] leading-[44.8px]">
  <span className="opacity-60">Leis</span>
  <span className="opacity-40">tun</span>
  <span className="opacity-30">gen</span>
</h2>
          </div>
          <a
            href="#"
            className="inline-flex px-8 md:px-10 py-4 bg-[#1272E8] items-center justify-center rounded-lg overflow-hidden hover:bg-[#1a56e0] transition-all duration-300 hover:scale-105 mt-8"
            aria-label="View all services"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-[white] text-[13.7px] text-center tracking-[0.60px] whitespace-nowrap">
              Alle Dienstleistungen anzeigen
            </span>
          </a>
        </div>

        {/* Service cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 border border-[#cdcdcd] border-l-0 lg:border-l-0">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`flex flex-col items-center border-b md:border-b-0 md:border-r border-[#dcdcdc] last:border-r-0 last:border-b-0 transition-all duration-700 delay-${(index + 1) * 150} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              aria-label={service.title}
              style={{ transitionDelay: `${(index + 1) * 150}ms`, border: '1px solid #E1E6EF', borderBottom: 'none' }}
            >
              <div
                className="relative w-full h-48 md:h-60 bg-cover bg-center mb-6"
                style={{ backgroundImage: `url(${service.image})` }}
                aria-hidden="true"
              >
                {/* <div className="absolute bottom-[-60px] left-10 w-[100px] h-[100px] flex items-center justify-center bg-[white] rounded-[20px] p-[30px]">
                  <img
                    className="w-[48px] h-[48px]"
                    alt=""
                    src={service.icon}
                  />
                </div> */}
                <CardIcon icon={service.icon} className="bottom-[-60px] left-[40px]"/>
              </div>
              <div className="w-full p-12">
                <h3 className="[font-family:'Google_Sans',Helvetica] font-medium text-[#111111] text-xl md:text-2xl leading-[45px]">
                  {service.title}
                </h3>
                <p className="[font-family:'Google_Sans',Helvetica] font-normal text-[#666666] text-sm md:text-base leading-[26px] mt-2">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 mt-4 group"
                  aria-label={`Read more about ${service.title}`}
                >
                  <span className="[font-family:'Google_Sans',Helvetica] font-medium text-[#111111] text-base tracking-[0.60px] group-hover:text-[#164ac8] transition-colors duration-300">
                    Mehr lesen
                  </span>
                  <img
                    className="w-8 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    alt=""
                    src="https://c.animaapp.com/afwsxCsF/img/vector-4.svg"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;