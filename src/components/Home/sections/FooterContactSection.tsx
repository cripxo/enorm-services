import { Link } from "react-router-dom";
import left_arrow from "../../../assets/svgs/left-arrow-icon.svg"

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/enorm_services/" },
  { label: "Linkedin", href: "#" },
];

const serviceLinks = [
  { label: "Startseite", href: "/" },
  { label: "Gebäudereinigung", href: "/gebaudereinigung" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Brandschutz", href: "/brandschutz" },
];

const companyLinks = [
  { label: "Über uns", href: "/uber-uns" },
  { label: "Kontakts", href: "/uber-uns" },
  { label: "Datenschutz", href: "/uber-uns" },
];

const legalLinks = [
  "Confidentiality & Privacy",
  "Legal Information",
  "Return and Refund Policy",
];

export const FooterContactSection = () => {
  return (
    <footer className="w-full bg-[#03113A] overflow-hidden">
  {/* Main footer */}
  <div className="max-w-[1600px] mx-auto border-b border-[#ffffff14]">
    <div className="flex flex-col lg:flex-row">
      
      {/* LEFT SIDE */}
      <div 
      className="w-full lg:w-1/2 px-6 md:px-12 lg:px-[60px] py-16 md:py-24 border-b lg:border-b-0 lg:border-r border-[#ffffff14]"
      style={{borderRight: '1px solid #293451'}}
      >
        <div className="max-w-[520px] flex flex-col gap-10">
          <img
            alt="BNOME"
            width={170}
            src="https://c.animaapp.com/afwsxCsF/img/container.svg"
            className="mx-auto sm:mx-0 pl-10 sm:pl-0"
          />

          <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#CDD4EF] text-[15px] leading-[28px] text-center sm:text-left">
            Wir sind Ihr Partner für moderne Dienstleistungen rund um
            Gebäude, Betrieb und Unternehmensprozesse.
          </p>

          <div className="flex flex-col gap-5">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#CDD4EF] text-[20px] text-center sm:text-left">
              Info & Kontakt
            </h3>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-8">
                <span className="text-[#CDD4EF] text-[14px] min-w-[40px]">
                  Office:
                </span>

                <p className="text-[#CDD4EF] text-[16px]">
                  Löffelholzstraße 20 / Haus 6   |   90441 Nürnberg
                </p>
              </div>

              <div className="flex items-start gap-8">
                <span className="text-[#CDD4EF] text-[14px] min-w-[40px]">
                  Email:
                </span>

                <a
                  href="mailto:info@enorm-services.de"
                  className="text-[#CDD4EF] text-[16px] hover:opacity-80 transition-opacity"
                >
                  info@enorm-services.de
                </a>
              </div>

              <div className="flex items-start gap-8">
                <span className="text-[#CDD4EF] text-[14px] min-w-[40px]">
                  Telefon:
                </span>

                <a
                  href="tel:09119405530"
                  className="text-[#CDD4EF] text-[16px] hover:opacity-80 transition-opacity"
                >
                  + 49 (0) 911 94 055 30
                </a>
              </div>
              <div className="flex items-start gap-8">
                <span className="text-[#CDD4EF] text-[14px] min-w-[40px]">
                  Fax:
                </span>

                <a
                  href="tel:09119405531"
                  className="text-[#CDD4EF] text-[16px] hover:opacity-80 transition-opacity"
                >
                  + 49 (0) 911 94 055 31
                </a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-6 pt-4 justify-center sm:justify-left">
            {socialLinks.map((link) => (
              <a
      key={link.label}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#CDD4EF] text-[14px] hover:text-[#CDD4EF] transition-colors duration-300"
    >
      {link.label}
    </a>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 px-6 md:px-12 lg:px-[60px] py-16 md:py-24 flex flex-col justify-between">
        
        {/* top links */}
        <div className="flex flex-row gap-12 sm:gap-24 justify-center sm:justify-left">
          
          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#fff] text-[20px] font-medium">
              Navigation
            </h3>

            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-[#CDD4EF] text-[16px] hover:text-[white] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#fff] text-[20px] font-medium">
              Company
            </h3>

            <ul className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <Link
                    to={item.href}
                    className="text-[#CDD4EF] text-[16px] hover:text-[white] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom callout */}
        <div className="mt-16 flex flex-col gap-6">
          
          <div className="flex items-start gap-4">
            <div className="flex w-10 h-10 items-center justify-center bg-[#1272E8] rounded-full shrink-0">
              <div className="w-3.5 h-4 bg-[url(https://c.animaapp.com/afwsxCsF/img/vector-1.svg)] bg-[100%_100%]" />
            </div>

            <p className="text-[#CDD4EF] text-[16px] leading-[28px] max-w-[700px]">
              Sie haben ein Projekt oder benötigen ein individuelles Angebot? Wir sind für Sie da
            </p>
          </div>

          {/* input */}
          <div className="flex items-center justify-between bg-[#1B2955] rounded-[8px] h-[56px] pl-6 pr-[2px] w-[270px] ml-7 sm:ml-0">
            <input
              type="email"
              placeholder="Jetzt anfragen"
              className="bg-transparent outline-none border-none text-[#CDD4EF] placeholder:text-[#CDD4EF] w-full text-[14px]"
            />

            <button
              type="submit"
              className="text-[#CDD4EF] text-[20px] hover:translate-x-1 transition-transform bg-[#04113266] py-[20px] px-[30px] rounded-[6px]"
            >
              {left_arrow ? <img src={left_arrow}/> : '→'}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div  style={{borderTop: '1px solid #293451'}}>
  <div 
  className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[60px] h-[70px] flex flex-col md:flex-row items-center justify-between gap-4">
    
    <p className="text-[#CDD4EF] text-[14px] text-center md:text-left">
      Copyright © 2026 Enorm Services by <text className="text-[#EFF2FF]">MetaKreativ.de</text> . All Rights
      Reserved.
    </p>

    <a
      href="#"
      className="hidden sm:block text-[#CDD4EF] text-[14px] hover:text-[white] transition-colors"
    >
      Impressum
    </a>
  </div>

  </div>
</footer>
  );
};

export default FooterContactSection;