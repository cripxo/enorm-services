import { useScrollAnimation } from "../../GlobalComponents/useScrollAnimation";
import peopleIcon from "../../../assets/svgs/people_icon.svg";
import guardIcon from "../../../assets/svgs/guard_icon.svg";
import clockIcon from "../../../assets/svgs/clock_icon.svg";
import achievmentIcon from "../../../assets/svgs/achievment_icon.svg";

const solutionItems = [
  {
    title: "Individuelle Lösungen",
    iconSrc: peopleIcon,
  },
  {
    title: "Zuverlässig & Verantwortungsvoll",
    iconSrc: guardIcon,
  },
  {
    title: "Flexibel & Schnell",
    iconSrc: clockIcon,
  },
  {
    title: "Höchste Qualitätsstandards",
    iconSrc: achievmentIcon,
  },
];

export const SolutionsHighlightSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      aria-labelledby="solutions-highlight-heading"
      className="w-full max-w-[1520px] mx-auto px-6 md:px-12 lg:px-0 py-16 md:py-24"
    >
      <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-0">
        {/* Left content */}
        <div
          className={`p-4 pr-20 flex flex-col w-full lg:w-1/2 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <h2
            id="solutions-highlight-heading"
            className="[font-family:'Google_Sans',Helvetica] font-medium text-[#0a1119] text-[32px] md:text-[40px] lg:text-5xl leading-[1.25]"
          >
            Moderne Lösungen für
            <br />
            moderne Gebäude und
            <br />
            Betriebsabläufe.
          </h2>

          <div className="h-px w-full bg-[#d3d5d6]" />

          <p className="[font-family:'Google_Sans',Helvetica] font-normal text-[#666666] text-base leading-[26px] max-w-[700px]">
            Wir verbinden Menschen, Technik und Prozesse, um den Betrieb von
            Immobilien, Unternehmen und Veranstaltungen effizienter, sicher und
            nachhaltig zu gestalten.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {solutionItems.map((item, index) => (
              <article
                key={item.title}
                className="flex flex-col items-center justify-between gap-3 relative transition-all duration-500 pl-2 pr-2"
                style={{ transitionDelay: `${index * 100 + 300}ms`, borderRight: '2px solid #edf0f5' }}
              >
                <div
                  className={`flex w-[60px] h-[60px] md:w-[70px] md:h-[70px] items-center justify-center rounded-full transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <img
                    className="md:w-9 md:h-9"
                    width={40}
                    height={40}
                    alt=""
                    aria-hidden="true"
                    src={item.iconSrc}
                  />
                </div>
                <span className="[font-family:'Google_Sans',Helvetica] font-semibold text-[#111111] text-xs md:text-sm text-center leading-5">
                  {item.title}
                </span>
                {index < solutionItems.length - 1 && (
                  <div className="hidden md:block absolute right-[-4px] top-[30px] w-[6px] h-[6px] bg-[#1272E8] rounded-full" />
                )}
              </article>
            ))}
          </div>

          <div className="mt-4">
            <a
              href="#"
              className="inline-flex h-12 px-8 md:px-[42px] bg-[#164ac8] items-center justify-center rounded-lg overflow-hidden hover:bg-[#1a56e0] transition-all duration-300 hover:scale-105"
              aria-label="Mehr über uns"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-[white] text-[13.9px] text-center tracking-[0.60px] whitespace-nowrap">
                Mehr über uns
              </span>
            </a>
          </div>
        </div>

        {/* Right image */}
        <div
          className={`w-full lg:w-1/2 relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <div className="relative">
            <img
              className="w-full h-[400px] md:h-[500px] lg:h-[700px] object-cover rounded-lg"
              alt="Modernes Gebäude bei Nacht"
              src="https://c.animaapp.com/afwsxCsF/img/image-1.png"
            />
            {/* Stats card */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col items-center justify-center p-8 md:p-12 bg-[#1272E8] rounded-lg shadow-2xl gap-[10px] p-[52px]">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/afwsxCsF/img/component-5.svg"
              />
              <div className="[font-family:'Public_Sans',Helvetica] font-normal text-[white] text-[50px] md:text-[70px] text-center leading-[70px]">
                17+
              </div>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[white] text-sm md:text-[17px] text-center leading-[28px] mt-2">
                years of experience
                <br />
                since at 1996
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHighlightSection;   