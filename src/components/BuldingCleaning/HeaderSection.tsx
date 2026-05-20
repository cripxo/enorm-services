import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { label: "Startsite", href: "#", active: false },
  { label: "Gebäudereinigung", href: "#", active: true },
  { label: "AI Solutions", href: "#", active: false },
  { label: "Brandschutz", href: "#", active: false },
  { label: "Über uns", href: "#", active: false },
];

export const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#15181d33] backdrop-blur-[25px]">
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-[200px] h-[70px] lg:h-[100px]">
        <a href="#" aria-label="Enorm homepage" className="shrink-0">
          <img
            className="w-[180px] md:w-[240px] lg:w-[300px]"
            alt="Enorm"
            src="https://c.animaapp.com/wGG3c8sC/img/container-7.svg"
          />
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-8 xl:gap-[50px]"
        >
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`whitespace-nowrap [font-family:'Google_Sans',Helvetica] text-base leading-[100px] tracking-[0] ${item.active ? "font-semibold text-white border-b-2 border-[#1172e7]" : "font-normal text-[#a4b2c4]"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Phone - desktop */}
        <a
          href="tel:071187999960"
          aria-label="Call 0711 879 999 60"
          className="hidden lg:flex items-center gap-4"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1172e7]">
            <img
              className="w-5 h-5"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/wGG3c8sC/img/component-2.svg"
            />
          </span>
          <span className="[font-family:'Google_Sans',Helvetica] text-base font-medium text-white">
            0711 879 999 60
          </span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#15181dee] backdrop-blur-[25px]"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`[font-family:'Google_Sans',Helvetica] text-lg ${item.active ? "font-semibold text-white" : "font-normal text-[#a4b2c4]"}`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:071187999960"
                className="flex items-center gap-3 mt-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1172e7]">
                  <img
                    className="w-4 h-4"
                    alt=""
                    src="https://c.animaapp.com/wGG3c8sC/img/component-2.svg"
                  />
                </span>
                <span className="[font-family:'Google_Sans',Helvetica] text-base font-medium text-white">
                  0711 879 999 60
                </span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderSection;