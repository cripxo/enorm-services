import { motion } from "framer-motion";
import { useScrollAnimation } from "../GlobalComponents/useScrollAnimation";

const qualityFeatures = [
  {
    title: "Meisterbetrieb",
    description:
      "Fachkompetenz auf höchstem Niveau, geführt von einem Meister der Gebäudereinigung.",
    iconSrc: "https://c.animaapp.com/wGG3c8sC/img/fi-10513691.svg",
    iconAlt: "Icon für Meisterbetrieb",
  },
  {
    title: "Zuverlässig",
    description:
      "Verbindliche Absprachen, eingehaltene Termine und transparente Kommunikation.",
    iconSrc: "https://c.animaapp.com/wGG3c8sC/img/background.svg",
    iconAlt: "Icon für Zuverlässigkeit",
  },
  {
    title: "Höchste Qualität",
    description:
      "Sorgfältige Arbeitsweise, moderne Standards und kontinuierliche Kontrolle.",
    iconSrc: "https://c.animaapp.com/wGG3c8sC/img/background-1.svg",
    iconAlt: "Icon für höchste Qualität",
  },
  {
    title: "Individuell & flexibel",
    description:
      "Maßgeschneiderte Lösungen für Ihre Anforderungen – flexibel und anpassbar.",
    iconSrc: "https://c.animaapp.com/wGG3c8sC/img/background-2.svg",
    iconAlt: "Icon für individuelle und flexible Lösungen",
  },
];

export const QualityAssuranceSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      ref={ref}
      aria-labelledby="quality-assurance-heading"
      className="w-full relative overflow-hidden rounded-tl-[30px] rounded-tr-[30px]"
    >
      <div className="relative w-full py-16 md:py-24 lg:py-[100px] px-5 md:px-10 lg:px-[200px] bg-[linear-gradient(180deg,rgba(6,23,65,1)_0%,rgba(3,11,29,1)_100%)]">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/wGG3c8sC/img/frame-4.svg"
        />
        <div className="relative z-10 max-w-[1520px] mx-auto pb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-1.5 bg-[#1272E8] rounded-[8px] mb-6"
          >
            <span className="[font-family:'Google_Sans',Helvetica] font-normal text-[white] text-xs tracking-[2px] leading-5 whitespace-nowrap">
              WARUM ENORM SERVICES?
            </span>
          </motion.div>

          <motion.h2
            id="quality-assurance-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-[700px] [font-family:'Google_Sans',Helvetica] font-medium text-[white] text-3xl sm:text-4xl md:text-5xl leading-[1.2] md:leading-[60px] mb-6 md:mb-8"
          >
            Qualität, auf die Sie sich verlassen können.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[830px] [font-family:'Google_Sans',Helvetica] font-normal text-[#adb5c6] text-sm sm:text-base leading-[26px] mb-10 md:mb-16"
          >
            Als Meisterbetrieb in der Gebäudereinigung stehen wir für höchste
            Qualitätsstandards, strukturierte Prozesse und verlässliche
            Ergebnisse. Ihr Partner für Sauberkeit, die überzeugt.
          </motion.p>

          <div
            className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-0"
            role="list"
            aria-label="Qualitätsmerkmale von Enorm Services"
          >
            {qualityFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                role="listitem"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center text-center relative py-4 md:py-0 md:border-r md:last:border-r-0 border-[#e1e6ef1a]"
                style={{borderRight: '2px solid #1a2540'}}
              >
                <div className="hidden md:block absolute top-[22%] right-[-4px] w-[6px] h-[6px] bg-[#1172e7] rounded-[3px]" />
                <div className="w-[70px] h-[70px] flex items-center justify-center mb-3">
                  <img
                    className="w-10 h-10"
                    alt={feature.iconAlt}
                    src={feature.iconSrc}
                  />
                </div>
                <h3 className="[font-family:'Google_Sans',Helvetica] font-semibold text-[white] text-sm sm:text-base leading-5 mb-2">
                  {feature.title}
                </h3>
                <p className="max-w-[200px] [font-family:'Google_Sans',Helvetica] font-normal text-[#adb5c6] text-xs leading-5">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssuranceSection;