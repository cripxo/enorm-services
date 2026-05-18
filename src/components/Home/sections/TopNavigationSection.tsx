import { useState } from "react";

const navigationItems = [
  { label: "Startsite", href: "#" },
  { label: "Gebäudereinigung", href: "#" },
  { label: "AI Solutions", href: "#" },
  { label: "Brandschutz", href: "#" },
  { label: "Über uns", href: "#" },
];

export const TopNavigationSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-[80px] lg:h-[100px] w-full items-center justify-center bg-[#15181d33] px-6 md:px-12 lg:px-[200px] py-0 backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] animate-fade-in">
      <div className="flex w-full items-center justify-center">
        <div className="flex w-full max-w-[1510px] items-center justify-between gap-4">
          <a
            href="#"
            aria-label="Homepage"
            className="relative block w-[200px] lg:w-[300px] shrink-0 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <img
              className="w-full"
              alt="BNOME"
              src="https://c.animaapp.com/afwsxCsF/img/container.svg"
            />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
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

          {/* Desktop nav */}
          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex gap-[30px] xl:gap-[50px] items-center"
          >
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center hover:text-blue-300 transition-colors duration-300 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <span className="[font-family:'Inter',Helvetica] text-[15px] xl:text-[16.6px] font-medium leading-[100px] tracking-[0] text-white whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <a
            href="tel:071187999960"
            aria-label="Rufen Sie uns an unter 0711 879 999 60"
            className="hidden md:flex h-[50px] items-center gap-4 hover:opacity-80 transition-opacity duration-300 focus-visible:rounded-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-[48px] bg-[#0d2665]">
              <span className="flex h-[32.5px] w-5 flex-col items-start px-0 pb-[6.5px] pt-1.5">
                <img
                  className="h-5 w-5"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/afwsxCsF/img/component-2.svg"
                />
              </span>
            </span>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-normal leading-5 tracking-[0] text-white whitespace-nowrap">
              0711 879 999 60
            </span>
          </a>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#15181dee] backdrop-blur-md p-6 flex flex-col gap-4 lg:hidden animate-fade-in">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="[font-family:'Inter',Helvetica] text-base font-medium text-white py-2 border-b border-white/10 hover:text-blue-300 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:071187999960"
            className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-normal text-white mt-2"
          >
            📞 0711 879 999 60
          </a>
        </nav>
      )}
    </header>
  );
};

export default TopNavigationSection;