const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Skype", href: "#" },
  { label: "Telegram", href: "#" },
];

const serviceLinks = [
  "Online Business Consulting",
  "Portfolio Management",
  "Search Engine Optimization",
  "Managed IT Services",
  "Conversion Optimization",
];

const companyLinks = [
  "About us",
  "Leadership Member",
  "Our Services",
  "Careers",
  "Case Studies",
];

const legalLinks = [
  "Confidentiality & Privacy",
  "Legal Information",
  "Return and Refund Policy",
];

export const FooterContactSection = () => {
  return (
    <footer className="w-full bg-[#0b1d4b]">
      {/* Main footer */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-[60px] py-16 md:py-24 border-b border-[#ffffff26]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-6">
            <a href="#" aria-label="Safebyte home">
              <div className="w-[180px] md:w-[211px] h-[42px] bg-[url(https://c.animaapp.com/afwsxCsF/img/logo-full-white-png@2x.png)] bg-cover bg-center" />
            </a>
            <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-sm md:text-base leading-[25px] max-w-[400px]">
              We understand that business can be chaotic. That&#39;s where we
              come in. We&#39;re focused on adding some much-needed balance to
              the mix.
            </p>
            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-[white] text-lg md:text-[21px] leading-[33px] mb-3">
                Company Information
              </h3>
              <address className="not-italic flex flex-col gap-2">
                <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-[14px] md:text-[15px] leading-[25px]">
                  Office: 2220 Plymouth Rd #302, Hopkins, Minnesota(MN), 55305
                </p>
                <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-[14px] md:text-[15px] leading-[25px]">
                  Send mail:{" "}
                  <a
                    href="mailto:Safebytecompany@gmail.com"
                    className="hover:text-[white] transition-colors"
                  >
                    Safebytecompany@gmail.com
                  </a>
                </p>
                <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-[14px] md:text-[15px] leading-[25px]">
                  Call us:{" "}
                  <a
                    href="tel:2341096666"
                    className="hover:text-[white] transition-colors"
                  >
                    (234) 109-6666
                  </a>
                </p>
              </address>
            </div>
            <nav aria-label="Social media" className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-normal text-[#cdd4ef] text-[14px] md:text-[14.5px] leading-[18px] hover:text-[white] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-[white] text-lg md:text-[20px] leading-[33px]">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-sm md:text-base leading-[26px] hover:text-[white] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-[white] text-lg md:text-[20px] leading-[33px]">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-sm md:text-base leading-[26px] hover:text-[white] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  placeholder="Don&#39;t miss the latest news..."
                  aria-label="Email address"
                  className="w-full h-[50px] md:h-[55px] px-5 bg-white rounded-lg [font-family:'Public_Sans',Helvetica] text-[#111111] text-[14px] md:text-[15px] placeholder:text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#164ac8]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 hover:opacity-70 transition-opacity"
                >
                  <img
                    className="w-4 h-4"
                    alt=""
                    src="https://c.animaapp.com/afwsxCsF/img/vector.svg"
                  />
                </button>
              </div>
            </form>
            <div className="flex items-start gap-3 mt-3">
              <div className="flex w-10 h-10 items-center justify-center bg-[#164ac8] rounded-full shrink-0">
                <div className="w-3.5 h-4 bg-[url(https://c.animaapp.com/afwsxCsF/img/vector-1.svg)] bg-[100%_100%]" />
              </div>
              <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-sm md:text-base leading-[25px]">
                Please sign up to follow the latest news and events from us, we
                promise not to spam your inbox.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-[60px] py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-sm md:text-base leading-[26px] text-center md:text-left">
            Copyright © 2025 Safebyte by{" "}
            <a href="#" className="text-[white] hover:underline">
              Case-Themes
            </a>
            . All Rights Reserved.
          </p>
          <nav
            aria-label="Legal links"
            className="flex flex-wrap items-center justify-center gap-2 md:gap-0"
          >
            {legalLinks.map((item, index) => (
              <div key={item} className="flex items-center">
                <a
                  href="#"
                  className="[font-family:'Public_Sans',Helvetica] font-normal text-[#cdd4ef] text-sm md:text-base leading-[26px] hover:text-[white] transition-colors duration-300 px-2"
                >
                  {item}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="hidden md:block w-px h-4 bg-white" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterContactSection;