const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Skype", href: "#" },
  { label: "Telegram", href: "#" },
];

const serviceLinks = [
  { label: "Startseite", href: "#" },
  { label: "Gebäudereinigung", href: "#" },
  { label: "AI Solutions", href: "#" },
  { label: "Brandschutz", href: "#" },
];

const companyLinks = [
  "Über uns",
  "Kontakt",
  "Datenschutz",
  "Careers",
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
  <div className="max-w-[1320px] mx-auto border-b border-[#ffffff14]">
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
          />

          <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#CDD4EF] text-[15px] leading-[28px]">
            Wir sind Ihr Partner für moderne Dienstleistungen rund um
            Gebäude, Betrieb und Unternehmensprozesse.
          </p>

          <div className="flex flex-col gap-5">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#CDD4EF] text-[22px]">
              Comany Information
            </h3>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-8">
                <span className="text-[#CDD4EF] text-[14px] min-w-[40px]">
                  Office:
                </span>

                <p className="text-[#CDD4EF] text-[14px]">
                  Schnieglinger Straße 264 90427 Nürnberg
                </p>
              </div>

              <div className="flex items-start gap-8">
                <span className="text-[#CDD4EF] text-[14px] min-w-[40px]">
                  Email:
                </span>

                <a
                  href="mailto:info@enorm-brandschutz.de"
                  className="text-[#CDD4EF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  info@enorm-brandschutz.de
                </a>
              </div>

              <div className="flex items-start gap-8">
                <span className="text-[#CDD4EF] text-[14px] min-w-[40px]">
                  Call us:
                </span>

                <a
                  href="tel:091147899960"
                  className="text-[#CDD4EF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  0911 478 999 60
                </a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-6 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
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
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          
          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#CDD4EF] text-[22px] font-medium">
              Navigation
            </h3>

            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#CDD4EF] text-[15px] hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#CDD4EF] text-[22px] font-medium">
              Company
            </h3>

            <ul className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#CDD4EF] text-[15px] hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
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

            <p className="text-[#CDD4EF] text-[15px] leading-[28px] max-w-[700px]">
              Sie haben ein Projekt oder benötigen ein individuelles Angebot?
              Wir sind für Sie da
            </p>
          </div>

          {/* input */}
          <div className="flex items-center justify-between bg-[#1B2955] rounded-[8px] h-[60px] px-6">
            <input
              type="email"
              placeholder="Don't miss the laster news from us..."
              className="bg-transparent outline-none border-none text-[#CDD4EF] placeholder:text-[#CDD4EF] w-full text-[14px]"
            />

            <button
              type="submit"
              className="text-[#CDD4EF] text-[20px] hover:translate-x-1 transition-transform"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div 
  className=" mx-auto px-6 md:px-12 lg:px-[60px] h-[70px] flex flex-col md:flex-row items-center justify-between gap-4"
  style={{borderTop: '1px solid #293451', paddingLeft: '18%', paddingRight: '18%'}}
  >
    
    <p className="text-[#CDD4EF] text-[14px] text-center md:text-left">
      Copyright © 2026 Enorm Services by MetaKreativ.de . All Rights
      Reserved.
    </p>

    <a
      href="#"
      className="text-[#CDD4EF] text-[14px] hover:text-white transition-colors"
    >
      Impressum
    </a>
  </div>
</footer>
  );
};

export default FooterContactSection;