import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Startsite", href: "/" },
  { label: "Gebäudereinigung", href: "/gebaudereinigung" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Brandschutz", href: "/brandschutz" },
  { label: "Über uns", href: "/uber-uns" },
];

export const TopNavigationSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 flex h-[80px] lg:h-[100px] w-full items-center justify-center px-6 md:px-12 lg:px-[200px] py-0 animate-fade-in backdrop-blur-[50px]">
      <div className="flex w-full items-center justify-center">
        <div className="flex w-full max-w-[1510px] items-center justify-between gap-4">
          <Link
            to="/"
            aria-label="Homepage"
            className="relative block w-[200px] lg:w-[300px] shrink-0 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <img
              className="w-full"
              alt="BNOME"
              src="https://c.animaapp.com/afwsxCsF/img/container.svg"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-1.5 p-2 text-[white]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Desktop nav */}
          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex gap-[30px] xl:gap-[50px] items-stretch h-[100px]"
          >
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
  key={item.label}
  to={item.href}
  className={`inline-flex items-center font-medium text-[15px] xl:text-[16.6px] tracking-[0] whitespace-nowrap transition-colors duration-300 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
    isActive ? "text-[white] link-active" : "text-[#A4B3C4] hover:text-[white]"
  }`}
>
  {item.label}
</Link>
              );
            })}
          </nav>

          <a
            href="tel:071187999960"
            aria-label="Rufen Sie uns an unter 0711 879 999 60"
            className="hidden md:flex h-[50px] items-center gap-4 hover:opacity-80 transition-opacity duration-300 focus-visible:rounded-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-[48px] bg-[#1272E8]">
              <span className="flex h-[32.5px] w-5 flex-col items-start px-0 pb-[6.5px] pt-1.5">
                <img
                  className="h-5 w-5"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/afwsxCsF/img/component-2.svg"
                />
              </span>
            </span>

            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-normal leading-5 tracking-[0] text-[white] whitespace-nowrap">
              0711 879 999 60
            </span>
          </a>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#15181dee] backdrop-blur-md p-6 flex flex-col gap-4 lg:hidden animate-fade-in">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`[font-family:'Inter',Helvetica] text-base font-medium py-2 border-b border-white/10 transition-colors duration-300 ${
                  isActive ? "text-[white] link-active" : "text-[#A4B3C4] hover:text-[white]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}

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