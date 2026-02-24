import { AnimateOnScroll } from "./AnimateOnScroll";
import { useTheme } from "./ThemeContext";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  "Placements 2025",
  "Industry Mentors",
  "Scholarship Schemes",
  "Book a Campus Tour",
  "South Delhi Design Hub",
];

const programLinks = [
  "B.Des Fashion Design",
  "M.Des Fashion Design",
  "UGC Approved Degrees",
  "Entrance Exam (GAT)",
  "Download Prospectus",
];

export function Footer() {
  const { isDark } = useTheme();
  return (
    <footer className="font-['Roboto',sans-serif] transition-colors duration-500" style={{ background: 'linear-gradient(to bottom, var(--t-grad-light-from), var(--t-grad-light-to))' }}>
      <div className="max-w-[1392px] mx-auto px-5 md:px-8 pt-16 pb-8">
        {/* Top Section */}
        <AnimateOnScroll>
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-16">
            {/* Left - Logo + Address + Contact */}
            <div className="flex flex-col gap-8 max-w-[446px]">
              <a href="/" aria-label="JD Institute - Home">
                <img src={isDark ? './images/logo-dark.webp' : './images/logo.webp'} alt="JD Institute of Fashion Technology" className="h-[60px] md:h-[72px] object-contain w-fit transition-all duration-500" loading="lazy" decoding="async" />
              </a>
              <address className="not-italic flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.1px] uppercase">
                    Address
                  </h3>
                  <p className="text-[15px] leading-[24px] tracking-[0.25px]">
                    #39, Daryacha Building, Hauz Khas Village,<br />
                    New Delhi, Delhi 110016, (Near Hauz Khas Fort)
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.1px] uppercase">
                    Contact
                  </h3>
                  <a href="tel:+917042630100" className="text-[15px] leading-[24px] tracking-[0.25px] hover:underline no-underline">
                    +91 70426 30100
                  </a>
                  <a href="mailto:admissions@jdinstitute.co" className="text-[15px] leading-[24px] tracking-[0.25px] underline">
                    admissions@jdinstitute.co
                  </a>
                </div>
              </address>

              {/* Social circles - mobile only */}
              <div className="flex lg:hidden gap-3.5" aria-label="Social media links">
                {[
                  { platform: "Instagram", icon: <Instagram size={20} /> },
                  { platform: "Facebook", icon: <Facebook size={20} /> },
                  { platform: "YouTube", icon: <Youtube size={20} /> },
                  { platform: "LinkedIn", icon: <Linkedin size={20} /> },
                ].map(({ platform, icon }) => (
                  <a
                    key={platform}
                    href="#"
                    aria-label={`Follow JD Institute on ${platform}`}
                    className="w-[42px] h-[42px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--t-social-bg)', color: 'var(--t-page-bg)' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Links Grid + Social */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-2">
                <nav aria-label="Quick links">
                  <h3 className="text-[13px] lg:text-[16px] font-medium leading-[18px] tracking-[0.1px] uppercase mb-3">
                    Quick Links
                  </h3>
                  <ul className="flex flex-col gap-2 lg:gap-3 list-none p-0 m-0">
                    {quickLinks.map((link, i) => (
                      <li key={`quick-${i}`}>
                        <a
                          href="#"
                          className="text-[13px] lg:text-[16px] leading-[20px] tracking-[0.25px] hover:underline no-underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <nav aria-label="Programs">
                  <h3 className="text-[13px] lg:text-[16px] font-medium leading-[18px] tracking-[0.1px] uppercase mb-3">
                    Programs
                  </h3>
                  <ul className="flex flex-col gap-2 lg:gap-3 list-none p-0 m-0">
                    {programLinks.map((link, i) => (
                      <li key={`prog-${i}`}>
                        <a
                          href="#"
                          className="text-[13px] lg:text-[16px] leading-[20px] tracking-[0.25px] hover:underline no-underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Social circles - desktop only, right-aligned */}
              <div className="hidden lg:flex gap-3.5 justify-end" aria-label="Social media links">
                {[
                  { platform: "Instagram", icon: <Instagram size={20} /> },
                  { platform: "Facebook", icon: <Facebook size={20} /> },
                  { platform: "YouTube", icon: <Youtube size={20} /> },
                  { platform: "LinkedIn", icon: <Linkedin size={20} /> },
                ].map(({ platform, icon }) => (
                  <a
                    key={platform}
                    href="#"
                    aria-label={`Follow JD Institute on ${platform}`}
                    className="w-[42px] h-[42px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--t-social-bg)', color: 'var(--t-page-bg)' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Big Text */}
        <AnimateOnScroll>
          <div className="w-full overflow-hidden flex justify-center items-center">
            <svg
              viewBox="0 0 1400 220"
              className="transition-all duration-500 w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="footerTextGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--t-footer-grad-start)' }} />
                  <stop offset="100%" style={{ stopColor: 'var(--t-footer-grad-end)' }} />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-medium"
                style={{
                  fontSize: '218px',
                  letterSpacing: '-0.25px',
                  fill: 'url(#footerTextGradient)',
                }}
              >
                JD INSTITUTE
              </text>
            </svg>
          </div>
        </AnimateOnScroll>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 pb-20 md:pb-0" style={{ borderTop: '1px solid color-mix(in srgb, var(--t-text) 20%, transparent)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-[14px] leading-[20px] tracking-[0.25px]">
            <p className="text-center md:text-left">&copy; 2026 JD Institute of Fashion Technology. All rights reserved.</p>
            <nav className="flex gap-6 justify-center md:justify-start" aria-label="Legal links">
              <a href="#" className="hover:underline no-underline">Privacy Policy</a>
              <a href="#" className="hover:underline no-underline">Terms of Service</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}