import { motion } from "framer-motion";
import cleaning_image from "../../assets/images/cleaning-image.webp";

export const HeroSection = () => {
  return (
    <section
      aria-label="Hero section"
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center rounded-none lg:rounded-[8px_0px_0px_8px]"
      style={{
        backgroundImage:`url(${cleaning_image})`,
      }}
    >
      <div className="absolute inset-0 flex items-end pb-10 sm:pb-16 md:pb-20 lg:pb-[100px] px-5 md:px-10 lg:px-[200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[620px]"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block [font-family:'Google_Sans',Helvetica] text-xs sm:text-[13px] font-medium tracking-[5px] text-[#1172e7] mb-4 sm:mb-5"
          >
            GEBÄUDEREINIGUNG
          </motion.span>
          <h1 className="[font-family:'TacticSans-Med-Regular',Helvetica] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[1.2px]">
            <span className="text-[white]">
              SAUBERKEIT
              <br />
              SCHAFFT{" "}
            </span>
            <span className="text-[#1172e7]">WERTE.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;