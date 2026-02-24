import svgPaths from "../../imports/svg-scctuong69";
import { useFormModal } from "./FormModalContext";
import { useTheme, themeAccents } from "./ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { HoverSlideText } from "./ui/HoverSlideText";

const navLinks = [
  { label: "About", href: "#jd-advantage" },
  { label: "Courses", href: "#our-courses" },
  { label: "Campus Life", href: "#why-jd" },
  { label: "Alumni", href: "#our-alumni" },
  { label: "Admissions", href: "#admissions-process" },
  { label: "Contact", href: "#contact" },
];

export { navLinks };

export function Navbar() {
  const { openFormModal } = useFormModal();
  const { theme, isDark, setTheme, toggleDark } = useTheme();
  const logoRef = useRef<HTMLImageElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    const progress = Math.min(y / 200, 1);
    const scale = 1 - progress * 0.25;
    const translateY = progress * -4;

    if (logoRef.current) {
      logoRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    }

    setIsScrolled(y > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Main navigation"
      className="w-full sticky top-0 z-50 font-['Roboto',sans-serif] transition-colors duration-500"
      style={{ backgroundColor: 'var(--t-body-bg)', borderBottom: '1px solid var(--t-banner)' }}
    >
      <div className="max-w-[1392px] mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <a href="/" aria-label="JD Institute - Home">
          <img
            ref={logoRef}
            src={isDark ? '/images/logo-dark.webp' : '/images/logo.webp'}
            alt="JD Institute of Fashion Technology Logo"
            className="h-[72px] md:h-[46px] lg:h-[66px] object-contain transition-all duration-500"
            fetchPriority="high"
            decoding="async"
            width={200}
            height={66}
            style={{ transformOrigin: 'left center' }}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group/slide text-[14px] leading-[20px] tracking-[0.1px] transition-opacity cursor-pointer whitespace-nowrap"
              style={{ color: 'var(--t-text)' }}
            >
              <HoverSlideText>{link.label}</HoverSlideText>
            </a>
          ))}
        </div>

        {/* Theme Switcher + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Circles */}
          <div
            ref={themeRef}
            className="flex items-center gap-1.5 transition-all duration-400 py-1 px-[6px]"
            aria-label="Theme color switcher"
            style={{
              opacity: isScrolled ? 0 : 1,
              maxWidth: isScrolled ? '0px' : '300px',
              overflow: 'visible',
              visibility: isScrolled ? 'hidden' as const : 'visible' as const,
              pointerEvents: isScrolled ? 'none' : 'auto',
            }}
          >
            {themeAccents.map((t) => (
              <button
                key={t.name}
                onClick={() => setTheme(t.name)}
                aria-label={`Switch to ${t.name} theme`}
                className="w-[22px] h-[22px] rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: t.color,
                  boxShadow: theme === t.name
                    ? `0 0 0 2px var(--t-body-bg), 0 0 0 4px ${t.color}`
                    : 'none',
                  transform: theme === t.name ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="relative w-[38px] h-[20px] rounded-full cursor-pointer transition-colors duration-500 ml-1 shrink-0"
              style={{ backgroundColor: isDark ? 'var(--t-accent)' : 'var(--t-circle-bg)' }}
            >
              <div
                className="absolute top-[2px] w-[16px] h-[16px] rounded-full shadow-sm flex items-center justify-center transition-all duration-300"
                style={{
                  left: isDark ? '20px' : '2px',
                  backgroundColor: isDark ? '#141201' : '#fff',
                  color: isDark ? 'var(--t-accent)' : '#888',
                }}
              >
                {isDark ? <Moon size={9} /> : <Sun size={9} />}
              </div>
            </button>
          </div>

          {/* Desktop CTA Button */}
          <button
            onClick={() => openFormModal("Call to Counsel")}
            className="group/slide btn-cta rounded-[8px] px-6 py-3 flex items-center gap-2.5 text-[14px] font-medium leading-[20px] tracking-[0.1px] cursor-pointer whitespace-nowrap"
          >
            <HoverSlideText>Call to Counsel</HoverSlideText>
            <svg width="16" height="16" viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <path d={svgPaths.p3ae1ac00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}