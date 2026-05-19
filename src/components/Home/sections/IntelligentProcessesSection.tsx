import { useScrollAnimation } from "../../GlobalComponents/useScrollAnimation";

export const IntelligentProcessesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="w-full px-6 md:px-12 lg:px-[50px] py-8 md:py-12"
      aria-labelledby="intelligent-processes-heading"
    >
      <div className="max-w-[1820px] mx-auto rounded-[20px] md:rounded-[30px] bg-[linear-gradient(180deg,rgba(13,38,101,1)_0%,rgba(3,43,141,1)_100%)] overflow-hidden relative">
        <img
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          alt=""
          src="https://c.animaapp.com/afwsxCsF/img/image-2.png"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-0 p-8 md:p-12 lg:p-0">
          {/* Left image */}
          <div
            className={`w-full lg:w-1/2 lg:p-[60px] xl:p-[100px] transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div
              className="w-full h-[250px] md:h-[350px] lg:h-[500px] rounded-[20px] bg-cover bg-center"
              role="img"
              aria-label="Visualisierung digitaler AI-Lösungen in einem Arbeitsumfeld"
              style={{
                backgroundImage:
                  "url(https://c.animaapp.com/afwsxCsF/img/frame-2.png)",
              }}
            />
          </div>

          {/* Right content */}
          <div
            className={`w-full lg:w-1/2 flex flex-col gap-6 lg:pr-[100px] xl:pr-[140px] transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="inline-flex self-start px-6 py-2 bg-[#164ac8] rounded-lg">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[white] text-sm tracking-[2.00px] leading-[22px] whitespace-nowrap">
                AI SOLUTIONS
              </span>
            </span>
            <h2
              id="intelligent-processes-heading"
              className="[font-family:'Google_Sans',Helvetica] font-medium text-[white] text-[28px] md:text-[34px] lg:text-[40px] leading-[1.3]"
            >
              Intelligente Prozesse. Bessere Entscheidungen. Nachhaltige
              Ergebnisse.
            </h2>
            <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-base md:text-lg leading-[30px]">
              Mit unseren digitalen Lösungen optimieren wir Abläufe, analysieren
              Daten in Echtzeit und schaffen Transparenz in allen Bereichen.
            </p>
            <button
              type="button"
              className="inline-flex self-start h-12 px-8 md:px-[42px] bg-white items-center justify-center rounded-lg overflow-hidden cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              aria-label="Mehr erfahren über intelligente Prozesse"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#111111] text-[14.2px] text-center tracking-[0.60px] whitespace-nowrap">
                Mehr erfahren
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentProcessesSection; 