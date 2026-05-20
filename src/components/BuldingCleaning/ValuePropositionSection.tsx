import { motion } from "framer-motion";
import { useScrollAnimation } from "../GlobalComponents/useScrollAnimation";

const content = {
  heading: "Sauberkeit ist mehr als Eindruck.",
  subheading: "Sie schafft Struktur, Vertrauen und Werterhalt.",
};

export const ValuePropositionSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section
      ref={ref}
      aria-labelledby="value-proposition-heading"
      className="w-full py-16 md:py-24 lg:py-[100px] px-5 md:px-10 lg:px-[200px] rounded-[30px] overflow-hidden bg-[linear-gradient(180deg,#DBE6FC_0%,#FAFCFF_100%)]"
    >
      <div className="max-w-[1520px] mx-auto flex flex-col items-center justify-center text-center mt-20 mb-20">
        <motion.h2
          id="value-proposition-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[730px] [font-family:'Google_Sans',Helvetica] font-medium text-[#0a1119] text-3xl sm:text-4xl md:text-5xl leading-[1.2] md:leading-[60px] mb-10"
        >
          {content.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="[font-family:'Google_Sans',Helvetica] font-normal text-[#666666] text-lg sm:text-xl md:text-2xl leading-[30px]"
        >
          {content.subheading}
        </motion.p>
      </div>
    </section>
  );
};

export default ValuePropositionSection;