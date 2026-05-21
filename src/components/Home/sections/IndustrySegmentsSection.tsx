import { useScrollAnimation } from "../../GlobalComponents/useScrollAnimation";

const industrySegments = [
  {
    label: "Bürogebäude",
    imageUrl: "https://c.animaapp.com/afwsxCsF/img/layer-3-jpg@2x.png",
  },
  {
    label: "Gesundheitswesen",
    imageUrl: "https://c.animaapp.com/afwsxCsF/img/layer-2-1-jpg@2x.png",
  },
  {
    label: "Industrie",
    imageUrl: "https://c.animaapp.com/afwsxCsF/img/layer-4-jpg@2x.png",
  },
  {
    label: "Finanzsektor",
    imageUrl: "https://c.animaapp.com/afwsxCsF/img/layer-7-jpg@2x.png",
  },
  {
    label: "Hospitality",
    imageUrl: "https://c.animaapp.com/afwsxCsF/img/id14-500x500-1-jpg@2x.png",
  },
  {
    label: "Bildung",
    imageUrl: "https://c.animaapp.com/afwsxCsF/img/layer-5-jpg@2x.png",
  },
  {
    label: "Einzelhandel",
    imageUrl: "https://c.animaapp.com/afwsxCsF/img/layer-8-jpg@2x.png",
  },
  {
    label: "Immobilienverwaltung",
    imageUrl: "https://c.animaapp.com/afwsxCsF/img/layer-9-jpg@2x.png",
  },
  {
    label: "Logistik",
    imageUrl: "https://c.animaapp.com/afwsxCsF/img/layer-111-jpg@2x.png",
  },
];

export const IndustrySegmentsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      aria-labelledby="industry-segments-heading"
      className="w-full px-0 md:px-12 lg:px-[50px] py-6 md:py-24"
    >
      <div className="max-w-[2000px] mx-auto flex flex-col items-center justify-center py-12 md:py-[90px] px-6 md:px-12 lg:px-[250px] rounded-[30px] bg-[linear-gradient(180deg,#DBE6FC_0%,#FAFCFF_100%)]">
        <header
          className={`flex flex-col items-center gap-4 mb-8 md:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-flex items-center justify-center px-6 py-2 bg-[#1272E8] rounded-[8px]">
            <span className="[font-family:'Google_Sans',Helvetica] font-normal text-[white] text-xs text-center tracking-[2.00px] leading-5 whitespace-nowrap">
              BEREICHE UNSERER EXPERTISE
            </span>
          </span>
          <h2
            id="industry-segments-heading"
            className="[font-family:'Google_Sans',Helvetica] font-medium text-[#0a1119] text-[20px] md:text-[36px] lg:text-5xl text-left sm:text-center leading-[1.25] max-w-[700px]"
          >
            Lösungen für verschiedene
            <br />
            Branchen und Gebäudetypen
          </h2>
          <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#666666] text-base text-sm md:text-lg text-center leading-[30px]">
            Von modernen Bürogebäuden bis hin zu Industrieeinrichtungen - wir bieten umfassende Services für alle Anforderungen.
          </p>
        </header>

        <ul className="flex flex-wrap justify-center gap-0 md:gap-5 mt-6">
          {industrySegments.map((segment, index) => (
            <li
              key={segment.label}
              className={`inline-flex h-[55px] md:h-[65px] items-center gap-3 md:gap-4 pl-[7px] pr-6 md:pr-[35px] bg-[white] rounded-[32px] border border-solid border-[#dcdcdc] list-none hover:shadow-md hover:border-[#164ac8] transition-all duration-300 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} scale-[.8] sm:scale-[1]`}
              style={{ transitionDelay: `${index * 60 + 200}ms` }}
            >
              <div className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] rounded-full overflow-hidden shrink-0">
                <div
                  className="w-full h-full rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${segment.imageUrl})` }}
                  role="img"
                  aria-label={segment.label}
                />
              </div>
              <span className="[font-family:'Inter',Helvetica] text-[#0a1119] text-[14px] md:text-base leading-[26px] whitespace-nowrap font-normal">
                {segment.label}
              </span>
            </li>
          ))}

          <li className="flex w-14 h-14 md:w-16 md:h-16 items-center justify-center bg-[#1272E8] rounded-full list-none hover:bg-[#1a56e0] transition-colors duration-300 scale-[.8] sm:scale-[1]">
            <button
              type="button"
              aria-label="Weitere Branchen anzeigen"
              className="flex items-center justify-center gap-[7px] w-full h-full rounded-full cursor-pointer"
            >
              <span className="w-[5px] h-[5px] bg-[white] rounded-full" />
              <span className="w-[5px] h-[5px] bg-[white] rounded-full" />
              <span className="w-[5px] h-[5px] bg-[white] rounded-full" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IndustrySegmentsSection;