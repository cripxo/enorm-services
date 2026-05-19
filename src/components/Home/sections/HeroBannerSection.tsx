import { useScrollAnimation } from "../../GlobalComponents/useScrollAnimation";

const ctaButtons = [
  {
    label: "Lösungen entdecken",
    variant: "primary" as const,
    type: "button" as const,
  },
  {
    label: "Kontakt aufnehmen",
    variant: "secondary" as const,
    type: "button" as const,
  },
];

export const HeroBannerSection = ()=> {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      aria-label="Hero banner"
      className="relative flex min-h-[100vh] md:min-h-[700px] lg:min-h-[1000px] w-full items-center rounded-[8px_0px_0px_8px] bg-[url(https://c.animaapp.com/afwsxCsF/img/background.png)] bg-cover bg-center"
    >
      <div className="relative flex w-full flex-col items-start px-6 md:px-12 lg:px-[200px] py-32 md:py-40 lg:py-[280px]">
        <div
          className={`flex flex-col items-start gap-6 max-w-[620px] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="flex h-5 items-center whitespace-nowrap [font-family:'Inter',Helvetica] text-[12px] md:text-[13.8px] font-medium tracking-[5.00px] text-[#1172e7]">
            DAMIT ALLES LÄUFT.
          </p>
          <h1 className="[font-family:'FONTSPRING_DEMO_-_Tactic_Sans_Exd_Reg-Regular',Helvetica] text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-[1] tracking-[0] text-[white]">
            ENORM
            <br />
            SERVICES
          </h1>
          <p
            className={`[font-family:'Google_Sans',Helvetica] text-[15px] md:text-[17px] font-normal leading-[27px] tracking-[0] text-[white] max-w-[600px] transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Wir arbeichen sich modernen Lösungen für Gebäude-, Betriebsabläufe
            und Unternehmenprozesse.
            <br />
            Zuverlässig. Flexibel. Individuell.
          </p>
          <div
            className={`flex flex-wrap items-center gap-4 md:gap-5 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {ctaButtons.map((button) => {
              const isPrimary = button.variant === "primary";

              return (
                <button
                  key={button.label}
                  type={button.type}
                  className={
                    isPrimary
                      ? "inline-flex h-[48px] md:h-[52px] items-center justify-center overflow-hidden rounded-lg bg-[#1272E8] px-6 md:px-10 hover:bg-[#1a56e0] transition-all duration-300 hover:scale-105"
                      : "inline-flex h-[48px] md:h-[52px] items-center justify-center overflow-hidden rounded-lg border-2 border-solid border-[white] px-5 md:px-[30px] hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  }
                  aria-label={button.label}
                >
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-center text-[13px] md:text-sm font-medium leading-[normal] tracking-[0.60px] text-[white] whitespace-nowrap">
                    {button.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerSection;