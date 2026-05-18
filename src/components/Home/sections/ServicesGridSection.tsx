import { useScrollAnimation } from "../../GlobalComponents/useScrollAnimation";

const services = [
  {
    title: "Gebäudereinigung",
    description:
      "Sauberkeit schafft Werte. Wir sorgen für hygeinische und reprasentative Umgebungen.",
    image: "https://c.animaapp.com/afwsxCsF/img/container-1@2x.png",
    icon: "https://c.animaapp.com/afwsxCsF/img/component-2-3.svg",
  },
  {
    title: "Ai Solutions",
    description:
      "Sauberkeit schafft Werte. Wir sorgen für hygeinische und reprasentative Umgebungen.",
    image: "https://c.animaapp.com/afwsxCsF/img/container-2@2x.png",
    icon: "https://c.animaapp.com/afwsxCsF/img/component-2-3.svg",
  },
  {
    title: "Brandschutz",
    description:
      "Sauberkeit schafft Werte. Wir sorgen für hygeinische und reprasentative Umgebungen.",
    image: "https://c.animaapp.com/afwsxCsF/img/container-3@2x.png",
    icon: "https://c.animaapp.com/afwsxCsF/img/component-2-3.svg",
  },
];

export const ServicesGridSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      aria-label="Services grid"
      className="w-full max-w-[1520px] mx-auto px-6 md:px-12 lg:px-0 py-16 md:py-24"
    >
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left panel */}
        <div
          className={`flex flex-col items-start justify-between p-8 md:p-12 border border-[#dcdcdc] rounded-lg lg:rounded-[8px_0px_0px_8px] lg:w-[380px] transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div>
            <h2 className="[font-family:'Google_Sans',Helvetica] font-medium text-[#02142c] text-[28px] md:text-[35px] leading-[44.8px]">
              Unsere
            </h2>
            <h2 className="[font-family:'Google_Sans',Helvetica] font-medium text-[#02142c] text-[28px] md:text-[35px] leading-[44.8px] opacity-60">
              Leistungen
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex px-8 md:px-10 py-3 bg-[#164ac8] items-center justify-center rounded-lg overflow-hidden hover:bg-[#1a56e0] transition-all duration-300 hover:scale-105 mt-8"
            aria-label="View all services"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[13.7px] text-center tracking-[0.60px] whitespace-nowrap">
              View All Services
            </span>
          </a>
        </div>

        {/* Service cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 border border-[#cdcdcd] rounded-lg lg:rounded-[0px_8px_8px_0px] border-l-0 lg:border-l-0">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`flex flex-col items-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#dcdcdc] last:border-r-0 last:border-b-0 transition-all duration-700 delay-${(index + 1) * 150} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              aria-label={service.title}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div
                className="relative w-full h-48 md:h-60 rounded-lg bg-cover bg-center mb-6"
                style={{ backgroundImage: `url(${service.image})` }}
                aria-hidden="true"
              >
                <div className="absolute bottom-[-28px] left-6 w-[80px] h-[80px] flex items-center justify-center bg-white rounded-[20px] shadow-lg">
                  <img
                    className="w-[54px] h-[54px]"
                    alt=""
                    src={service.icon}
                  />
                </div>
              </div>
              <div className="w-full pt-12">
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
                    Read More
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