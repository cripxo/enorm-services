import { motion } from "framer-motion";
import { useScrollAnimation } from "../GlobalComponents/useScrollAnimation";
import CardIcon from "../GlobalComponents/CardIcon";
import photo01 from "../../assets/images/building-clean-2.webp";
import photo02 from "../../assets/images/building-clean-3.webp";
import photo03 from "../../assets/images/building-clean-4.webp";
import photo04 from "../../assets/images/building-clean-5.webp";
import photo05 from "../../assets/images/building-clean-6.webp";
import photo06 from "../../assets/images/building-clean-7.webp";
import svg01 from "../../assets/svgs/hand_icon.svg";
import svg02 from "../../assets/svgs/ai_solution_icon.svg";
import svg03 from "../../assets/svgs/flare_guard_icon.svg";

type ServiceCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  iconAlt?: string;
};

const services: ServiceCard[] = [
  {
    title: "Unterhaltsreinigung",
    description:
      "Regelmäßige Reinigung für saubere und gepflegte Arbeitsumgebungen.",
    imageSrc: photo01,
    imageAlt: "Unterhaltsreinigung",
    iconSrc: svg01,
  },
  {
    title: "Büro & Gewerbeflächen",
    description:
      "Reinigungslösungen für Bürogebäude und gewerbliche Immobilien, flexibel und zuverlässig.",
    imageSrc: photo02,
    imageAlt: "Büro und Gewerbeflächen",
    iconAlt: "Reinigungsservice Symbol",
    iconSrc: svg02,
  },
  {
    title: "Messe & Eventflächen",
    description:
      "Flexible Reinigungskonzepte für Veranstaltungen, Messen und Hallen.",
    imageSrc: photo03,
    imageAlt: "Messe und Eventflächen",
    iconSrc: svg03,
  },
  {
    title: "Glas & Flächenreinigung",
    description:
      "Professionelle Reinigung von Glasflächen, Fassaden und Innenbereichen.",
    imageSrc: photo04,
    imageAlt: "Glas und Flächenreinigung",
    iconSrc: svg03,
  },
  {
    title: "Sonderreinigung",
    description:
      "Spezielle Reinigungsleistungen nach Bedarf, gründlich, sorgfältig und effizient.",
    imageSrc: photo05,
    imageAlt: "Sonderreinigung",
    iconSrc: svg03,
  },
  {
    title: "Individuelle Konzepte",
    description:
      "Angepasste Lösungen für Ihre Anforderungen und betriebliche Abläufe.",
    imageSrc: photo06,
    imageAlt: "Individuelle Konzepte",
    iconSrc: svg03,
  },
];

const ServiceCardComponent = ({
  service,
  index,
}: {
  service: ServiceCard;
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      aria-label={service.title}
      className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-8px)] rounded-[16px] overflow-hidden border border-[#e1e6ef] flex flex-col pb-10"
      style={{border: '1px solid #E1E6EF'}}
    >
      <div className="relative w-full h-48 sm:h-56 lg:h-60 overflow-hidden group">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${service.imageSrc})` }}
            role="img"
            aria-label={service.imageAlt}
          >
          </div>
      </div>
      <div className="relative"><CardIcon icon={service.iconSrc} className="bottom-[-60px] left-[40px]"/></div>
      <div className="flex flex-col items-start px-6 sm:px-8 lg:px-10 py-6 sm:py-8 flex-1 mt-12">
        <h3 className="[font-family:'Google_Sans',Helvetica] font-medium text-[#111111] text-xl sm:text-2xl leading-[1.4] mb-3">
          {service.title}
        </h3>
        <p className="[font-family:'Google_Sans',Helvetica] font-normal text-[#666666] text-sm sm:text-base leading-[26px]">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
};

export const ServicesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section
      aria-labelledby="services-section-description"
      className="w-full max-w-[1520px] mx-auto px-5 md:px-10 lg:px-0 py-16 md:py-24 lg:py-[100px]"
    >
      <motion.p
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        id="services-section-description"
        className="max-w-[1100px] mx-auto text-center [font-family:'Google_Sans',Helvetica] font-normal text-[#666666] text-base sm:text-lg leading-[30px] mb-12 md:mb-16 lg:mb-[100px]"
      >
        Wir sorgen für gepflegte, und repräsentative Arbeitsumgebunden -
        zuverlässig, flexibel und mit höchsten Qualitätsstandards.
      </motion.p>
      <div className="flex flex-wrap gap-3 justify-center">
        {services.map((service, i) => (
          <ServiceCardComponent
            key={service.title}
            service={service}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;