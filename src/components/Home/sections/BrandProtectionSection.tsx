import { useScrollAnimation } from "../../GlobalComponents/useScrollAnimation";

const brandProtectionContent = {
  title: "BRANDSCHUTZ",
  description:
    "Für umfassende Leistungen im baulichen Brandschutz arbeiten wir mit unserem Partnerunternehmen ENORM BRANDSCHUTZ zusammen.",
  image: {
    src: "https://c.animaapp.com/afwsxCsF/img/image-3@2x.png",
    alt: "Mitarbeiter bei Arbeiten im Bereich Brandschutz",
  },
  cta: {
    label: "Zur Website von ENORM BRANDSCHUTZ",
    href: "https://www.enorm-brandschutz.de",
  },
};

export const BrandProtectionSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      aria-labelledby="brand-protection-title"
      className="w-full px-6 md:px-12 lg:px-[200px] py-16 md:py-24"
    >
      <div
        className={`flex flex-col lg:flex-row gap-6 max-w-[1520px] mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Left card */}
        <div className="flex-1 flex flex-col md:flex-row items-center gap-6 p-8 md:p-10 rounded-[25px] bg-[linear-gradient(270deg,rgba(13,37,101,1)_0%,rgba(32,74,176,1)_100%)]">
          <div className="w-full md:w-60 h-[180px] md:h-[200px] rounded-[15px] overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              alt={brandProtectionContent.image.alt}
              src={brandProtectionContent.image.src}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2
              id="brand-protection-title"
              className="[font-family:'Inter',Helvetica] font-medium text-[white] text-[22px] md:text-[28px] leading-[38px]"
            >
              {brandProtectionContent.title}
            </h2>
            <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-sm md:text-base leading-[26px] max-w-[480px]">
              {brandProtectionContent.description}
            </p>
          </div>
        </div>

        {/* Right card */}
        <div className="flex items-center justify-center p-8 md:p-12 bg-[#edf0f6] rounded-[25px] lg:w-[400px] xl:w-[510px]">
          <a
            href={brandProtectionContent.cta.href}
            target="_blank"
            rel="noreferrer"
            aria-label={brandProtectionContent.cta.label}
            className="inline-flex px-6 md:px-[35px] py-3 bg-[#164ac8] items-center justify-center rounded-lg overflow-hidden hover:bg-[#1a56e0] transition-all duration-300 hover:scale-105"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-[white] text-[13px] md:text-[14.2px] text-center tracking-[0.60px] whitespace-nowrap">
              {brandProtectionContent.cta.label}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandProtectionSection;