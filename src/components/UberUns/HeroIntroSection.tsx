import { motion } from "framer-motion";
import { useState, useRef } from "react";
import enormteamicon from "../../assets/images/enorm-team.webp";
import marker from "../../assets/svgs/Marker.svg"

const stats = [
  {
    value: "420",
    label: "Engagierte Mitarbeiter",
  },
  {
    value: "20+",
    label: "Jahre Branchenerfahrung",
  },
  {
    value: "500+",
    label: "Erfolgreiches Projekte",
  },
  {
    value: "92%",
    label: "Kundenzufriedenheit",
  },
];

const timelineItems = [
  {
    id:1,
    period: "Since 2005",
    title: "A Memorable Start",
    description:
      "Aufbau unserer Infrastruktur und Gewinnung von Vertrauen durch zuverlässige Services. Expansion in mehrere deutsche Regionen mit wachsendem Kundenstamm.",
  },
  {
    id:2,
    period: "2012 - 2016",
    title: "Foundation & Growth",
    description:
      "Aufbau unserer Infrastruktur und Gewinnung von Vertrauen durch zuverlässige Services. Expansion in mehrere deutsche Regionen mit wachsendem Kundenstamm.",
  },
  {
    id:3,
    period: "2016 - 2020",
    title: "Digital Innovation",
    description:
      "Integration AI-gestützter Prozessoptimierung unserer Serviceabläufe. Modernisierung für Effizienz und Qualität in Gebäudereinigung und Facilitymanagement.",
  },
  {
    id:4,
    period: "2020 - 2023",
    title: "Service Expansion",
    description:
      "Einführung von Brandschutzlösungen und Facility-Management-Services. Stärkung unserer Position als vertrauensvoller Vollservice-Anbieter mit innovativen Lösungen.",
  },
  {
    id:5,
    period: "2023 - 2026",
    title: "Strategic Vision",
    description:
      "Strategische Partnerschaften mit Unternehmen zur Erschließung neuer Chancen. Positionierung als Partner für zukunftsgerichtete Lösungen.",
  },
  {
    id:6,
    period: "Since 2005",
    title: "A Memorable Start",
    description:
      "Aufbau unserer Infrastruktur und Gewinnung von Vertrauen durch zuverlässige Services. Expansion in mehrere deutsche Regionen mit wachsendem Kundenstamm.",
  },
  {
    id:7,
    period: "2012 - 2016",
    title: "Foundation & Growth",
    description:
      "Aufbau unserer Infrastruktur und Gewinnung von Vertrauen durch zuverlässige Services. Expansion in mehrere deutsche Regionen mit wachsendem Kundenstamm.",
  },
  {
    id:8,
    period: "2016 - 2020",
    title: "Digital Innovation",
    description:
      "Integration AI-gestützter Prozessoptimierung unserer Serviceabläufe. Modernisierung für Effizienz und Qualität in Gebäudereinigung und Facilitymanagement.",
  },
];

const progressItems = [
  {
    label: "Professionelle Expertise",
    value: "85%",
    fillPercent: "w-[76.56%]",
  },
  {
    label: "Kundenzufriedenheit",
    value: "92%",
    fillPercent: "w-[89.06%]",
  },
];

const fadeUp:any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const HeroIntroSection = () => {
  const [timelineIndex, setTimelineIndex] = useState(0);
  const swiperRef = useRef<any>(null);
const [activeIndex, setActiveIndex] = useState(0);

  // Responsive: show 1 on mobile, 2 on sm, 3 on lg, but we'll handle via CSS
  const visibleItems = 4;
  const totalItems = timelineItems.length;


const handleNext = () => {
  setTimelineIndex((prev) => {
    const next = prev + 1;
    return next >= totalItems ? 0 : next;
  });
};

const handlePrev = () => {
  setTimelineIndex((prev) => {
    const next = prev - 1;
    return next < 0 ? totalItems - 1 : next;
  });
};

  return (
    <section aria-label="Über Enorm Service" className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-b-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/vYykJZog/img/background.png)",
          }}
        />
        <div className="absolute inset-0 bg-[#081022e6] opacity-0" />
        
      </div>

      {/* About Section (two columns) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full flex flex-col lg:flex-row"
      >
        {/* Left - Dark panel */}
        <motion.div
  variants={fadeUp}
  className="w-full lg:w-1/2 flex items-center justify-center bg-[linear-gradient(180deg,rgba(6,23,65,1)_0%,rgba(3,32,104,1)_100%)] px-6 sm:px-10 md:px-16 lg:px-[80px] xl:px-[120px] py-16 md:py-20 lg:py-24"
>
          <div className="max-w-[640px]">
            <div className="flex w-fit h-[30px] items-center justify-center px-5 py-2.5 bg-[#1272E8] rounded-[8px] mb-6">
              <span className="[font-family:'Google_Sans',Helvetica] font-normal text-[white] text-[10px] text-center tracking-[2px] leading-5 whitespace-nowrap">
                WILLKOMMEN BEI ENORM
              </span>
            </div>
            <h2 className="[font-family:'Google_Sans',Helvetica] font-medium text-transparent text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-[1.3] mb-8">
              <span className="text-[white]">Mit über 20 Jahren Expertise. </span>
              <span className="text-[#1172e7]">Ihr Partner,</span>
              <span className="text-[white]"> für nachhaltige Lösungen.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                type="button"
                className="px-8 py-3.5 bg-[#1172e7] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <span className="[font-family:'Google_Sans',Helvetica] font-medium text-[white] text-sm tracking-[0.6px]">
                  Zusammenarbeit starten
                </span>
              </button>
              <button
                type="button"
                className="px-6 py-3.5 border-2 border-solid border-[white] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <span className="[font-family:'Google_Sans',Helvetica] font-medium text-[white] text-sm tracking-[0.6px] whitespace-nowrap">
                  Alle Services ansehen
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right - White panel */}
        <motion.div
          variants={fadeUp}
          className="w-full lg:w-1/2 bg-[white] px-6 sm:px-10 md:px-16 lg:px-[80px] xl:px-[120px] py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-[640px]">
            <p className="[font-family:'Google_Sans',Helvetica] font-normal text-[#787a7e] text-base tracking-[0] leading-[26px] mb-4">
              Als führender Dienstleister im Gebäudemanagement bieten wir
              umfassende Lösungen für Reinigung, Facility Management,
              AI-gestützte Optimierung und Brandschutz. Wir verstehen die
              Anforderungen moderner Unternehmen und liefern maßgeschneiderte
              Services, die Effizienz steigern und Kosten senken.
            </p>
            <p className="[font-family:'Google_Sans',Helvetica] font-normal text-[#787a7e] text-base tracking-[0] leading-[26px] mb-10">
              Unser Team aus erfahrenen Fachleuten arbeitet eng mit unseren
              Partnern zusammen, um höchste Qualitätsstandards zu gewährleisten
              und nachhaltige Ergebnisse zu erzielen.
            </p>
            <div className="border-t border-[#d4d6db] pt-8" style={{borderTop: '1px solid #D4D6DB'}}>
              <h3 className="[font-family:'Google_Sans',Helvetica] font-medium text-[#0a1119] text-3xl md:text-4xl tracking-[0] leading-[60px] mb-6">
                Our Mission.
              </h3>
              <p className="[font-family:'Google_Sans',Helvetica] font-normal text-[#42464f] text-base tracking-[0] leading-[26px] mb-6">
                Wir schaffen sichere, saubere und effiziente Arbeitsumgebungen,
                die Unternehmen ermöglichen, sich auf ihr Kerngeschäft zu
                konzentrieren. Durch Innovation, Zuverlässigkeit und Engagement
                sind wir der vertrauensvolle Partner für zukunftsorientierte
                Lösungen im Gebäudemanagement.
              </p>
              <img
                alt="Mission signature graphic"
                src="https://c.animaapp.com/vYykJZog/img/frame-5.svg"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Full-width image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[860px] overflow-hidden"
      >
        <img
          className="w-full h-full object-cover mt-[-100px]"
          alt="ENORM Team"
          src={enormteamicon}
        />
      </motion.div>

      {/* Timeline Carousel Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-[linear-gradient(180deg,rgba(6,23,65,1)_0%,rgba(3,11,29,1)_100%)] rounded-t-[30px] py-16 md:py-20 lg:py-24 px-6 sm:px-10 md:px-16 relative mt-[-200px]"
      >
        <div className=" mx-auto flex items-center gap-4">
          <button
            type="button"
            aria-label="Vorherige Zeitleiste"
            onClick={handlePrev}
            className="cursor-pointer hidden md:flex flex-shrink-0 items-center justify-center w-[50px] h-[50px] rounded-[8px] transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#ffffff10] "
          >
            <img
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
              alt="Vorherige"
              src="https://c.animaapp.com/vYykJZog/img/component-2.svg"
            />
          </button>
          <div className="flex-1 overflow-hidden">
           <motion.div
  className="flex"
  animate={{
    x: `-${(timelineIndex * 100) / visibleItems}%`,
  }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
  style={{
    width: `${(totalItems * 100) / visibleItems}%`,
  }}
>
              {timelineItems.map((item) => (
                <motion.div
                  key={`${item.period}-${item.title}`}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center px-4 py-6 border-l border-[#e1e6ef1a] first:border-l-0"
                  style={{ width: `${100 / totalItems}%` }}
                >
                  <span className="[font-family:'Google_Sans',Helvetica] font-normal text-[white] text-sm leading-5 mb-4">
                    {item.period}
                  </span>
                  <span className="[font-family:'Google_Sans',Helvetica] font-semibold text-[white] text-xl md:text-2xl leading-6 mb-6">
                    {item.title}
                  </span>
                  <p className="[font-family:'Google_Sans',Helvetica] font-normal text-[#adb5c6] text-sm leading-5">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <button
            type="button"
            aria-label="Nächste Zeitleiste"
            onClick={handleNext}
            className="cursor-pointer hidden md:flex flex-shrink-0 items-center justify-center w-[50px] h-[50px] rounded-[8px] transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#ffffff10]"
          >
            <img
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
              alt="Nächste"
              src="https://c.animaapp.com/vYykJZog/img/component-3.svg"
            />
          </button>
        </div>
        {/* Mobile dots indicator */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {timelineItems.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Gehe zu Zeitleiste ${idx + 1}`}
              onClick={() => setTimelineIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === timelineIndex ? "bg-[#1172e7]" : "bg-[#e1e6ef33]"}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Why Choose Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full flex flex-col lg:flex-row items-center py-16 md:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-[100px] xl:px-[200px] gap-12 lg:gap-16"
      >
        {/* Left image */}
        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-[500px] lg:max-w-none lg:w-1/2 aspect-square sm:aspect-[4/5]"
        >
          <div
            className="w-full h-full bg-cover bg-center rounded-lg overflow-hidden"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/vYykJZog/img/image-1.png)",
            }}
          >
            <div className="absolute bottom-6 left-6 w-[200px] sm:w-[220px] bg-[#1172e7] rounded-lg p-6 sm:p-8 flex flex-col items-center gap-3">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20"
                alt="Kunden Icon"
                src="https://c.animaapp.com/vYykJZog/img/fi-9307879.svg"
              />
              <div className="text-center">
                <div className="[font-family:'Google_Sans',Helvetica] font-normal text-[white] text-5xl sm:text-6xl leading-tight">
                  500+
                </div>
                <div className="[font-family:'Google_Sans',Helvetica] font-normal text-[white] text-sm sm:text-base leading-7 mt-2">
                  Zufriedene Kunden
                  <br />
                  seit 2005
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div variants={fadeUp} className="w-full lg:w-1/2 max-w-[640px]">
          <div className="flex w-fit h-[30px] items-center justify-center px-5 py-2.5 bg-[#1172e7] rounded-lg mb-5">
            <span className="[font-family:'Google_Sans',Helvetica] font-normal text-[white] text-[10px] text-center tracking-[2px] leading-5 whitespace-nowrap">
              WHY CHOOSE ENORM SERVICES
            </span>
          </div>
          <h2 className="[font-family:'Google_Sans',Helvetica] font-medium text-[#0a1119] text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-[1.3] mb-5">
            Lösungen die Wachstum für Ihr Unternehmen schaffen
          </h2>
          <p className="[font-family:'Google_Sans',Helvetica] font-normal text-[#787A7E] text-base tracking-[0] leading-[26px] mb-10">
            Unsere Experten bieten umfassende Beratung und technische
            Unterstützung auf höchstem Niveau. Wir analysieren Ihre
            Anforderungen gründlich und entwickeln nachhaltige Lösungen, die
            perfekt zu Ihrer Organisation passen und langfristige Ergebnisse
            liefern.
          </p>
          <div className="border-t border-[#d4d6db] pt-8 flex flex-col gap-8">
           {progressItems.map((item) => {
  const percent = parseInt(item.value); // 85, 92

  return (
    <div key={item.label} className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <span className="font-normal text-[#42464f] text-base leading-[26px]">
          {item.label}
        </span>
        <span className="font-normal text-[#42464f] text-base leading-[26px]">
          {item.value}
        </span>
      </div>

      <div
        className="relative w-full h-3 sm:h-4"
        role="progressbar"
        aria-label={item.label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        {/* background */}
        <div className="absolute w-full h-[40%] top-[30%] left-0 bg-gray-200 rounded-full" />

        {/* fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: item.value }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="absolute h-[40%] top-[30%] left-0 bg-[#1172e7] rounded-full"
        />

        {/* marker */}
        <motion.img
          src={marker}
          className="absolute w-4 h-4 top-1/2 -translate-y-1/2"
          style={{ left: `calc(${percent}% - 8px)` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        />
      </div>
    </div>
  );
})}
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full px-6 sm:px-10 md:px-16 lg:px-[50px]"
      >
        <div className="w-full max-w-[1820px] mx-auto rounded-[30px] overflow-hidden bg-[linear-gradient(180deg,rgba(219,230,252,1)_0%,rgba(250,252,255,1)_100%)] py-16 md:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-[150px]">
          <motion.div
            variants={fadeUp}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10"
          >
            <div className="max-w-[840px]">
              <div className="flex w-fit h-[30px] items-center justify-center px-5 py-2.5 bg-[#1172e7] rounded-lg mb-4">
                <span className="[font-family:'Google_Sans',Helvetica] font-normal text-[white] text-[10px] text-center tracking-[2px] leading-5 whitespace-nowrap">
                  THE TEAM MEMBER
                </span>
              </div>
              <h2 className="[font-family:'Google_Sans',Helvetica] font-medium text-[#0a1119] text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-[1.3]">
                Lernen Sie die talentierten Menschen hinter ENORM Services
                kennen.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                type="button"
                className="px-8 py-3.5 bg-[#1172e7] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <span className="[font-family:'Google_Sans',Helvetica] font-medium text-[white] text-sm tracking-[0.6px] whitespace-nowrap">
                  Mehr über unser Team
                </span>
              </button>
              <button
                type="button"
                className="px-6 py-3.5 border-2 border-solid border-[#1172e7] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <span className="[font-family:'Google_Sans',Helvetica] font-medium text-[#1172e7] text-sm tracking-[0.6px] whitespace-nowrap">
                  Teil unseres Teams werden
                </span>
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden border border-solid border-[#d0d6e5]"
          >
            {stats.map((stat, index) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="flex items-center gap-4 px-6 sm:px-8 py-8 sm:py-10 border-b sm:border-b lg:border-b-0 border-r-0 sm:odd:border-r lg:border-r border-[#d0d6e5] last:border-r-0 last:border-b-0"
               style={
      index === stats.length - 1
        ? { borderRight: "none" }
        : { borderRight: "1px solid #d0d6e5" }
    }
              >
                <div className="w-10 h-10 sm:w-[46px] sm:h-[46px] bg-[#1172e7] rounded-full flex-shrink-0" />
                <div className="flex items-center gap-2">
                  <span className="[font-family:'Google_Sans',Helvetica] font-normal text-[#0a1119] text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight">
                    {stat.value}
                  </span>
                  <span className="[font-family:'Google_Sans',Helvetica] font-normal text-[#0a1119] text-sm sm:text-base leading-[22px]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Team Photo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full px-6 sm:px-10 md:px-16 lg:px-[50px] mt-8 mb-8"
      >
        <div className="w-full max-w-[1820px] mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] rounded-[30px] overflow-hidden bg-[linear-gradient(180deg,rgba(13,38,101,1)_0%,rgba(3,43,141,1)_100%)]">
          <img
            className="w-full h-full object-cover"
            alt="Team collage"
            src="https://c.animaapp.com/vYykJZog/img/image.png"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroIntroSection;