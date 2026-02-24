import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { navLinks } from "./Navbar";
import { useTheme, themeAccents } from "./ThemeContext";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { theme, isDark, setTheme, toggleDark } = useTheme();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const navHeight = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 350);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 z-[100] bg-[#141201] flex flex-col font-['Roboto',sans-serif]"
          initial={{ clipPath: "circle(0% at 40px calc(100% - 40px))" }}
          animate={{ clipPath: "circle(150% at 40px calc(100% - 40px))" }}
          exit={{ clipPath: "circle(0% at 40px calc(100% - 40px))" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Header with logo */}
          <div className="flex items-center justify-between px-6 pt-8 pb-4">
            <img
              src="/images/logo-dark.webp"
              alt="JD Institute"
              className="h-[48px] object-contain"
            />
          </div>

          {/* Nav links */}
          <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center px-8 gap-0 pb-24">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-[24px] tracking-[-0.5px] py-3.5 border-b border-[#ffffff]/10 transition-colors cursor-pointer"
                style={{ color: 'var(--t-page-bg)' }}
                whileHover={{ color: 'var(--t-accent)' }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Theme Switcher */}
            <motion.div
              className="flex items-center gap-4 pt-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + navLinks.length * 0.07, duration: 0.4 }}
            >
              <span className="text-[14px] tracking-[0.1px] uppercase" style={{ color: 'var(--t-page-bg)', opacity: 0.5 }}>
                Vibe
              </span>
              <div className="flex items-center gap-3" aria-label="Theme color switcher">
                {themeAccents.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setTheme(t.name)}
                    aria-label={`Switch to ${t.name} theme`}
                    className="w-[28px] h-[28px] rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: t.color,
                      boxShadow: theme === t.name
                        ? `0 0 0 2px #141201, 0 0 0 4px ${t.color}`
                        : 'none',
                      transform: theme === t.name ? 'scale(1.15)' : 'scale(1)',
                    }}
                  />
                ))}

                {/* Divider */}
                <div className="w-[1px] h-[20px] bg-white/20 mx-0.5" />

                {/* Dark mode toggle */}
                <button
                  onClick={toggleDark}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  className="relative w-[48px] h-[26px] rounded-full cursor-pointer transition-colors duration-500 shrink-0"
                  style={{ backgroundColor: isDark ? 'var(--t-accent)' : 'rgba(255,255,255,0.15)' }}
                >
                  <div
                    className="absolute top-[3px] w-[20px] h-[20px] rounded-full shadow-sm flex items-center justify-center transition-all duration-300"
                    style={{
                      left: isDark ? '25px' : '3px',
                      backgroundColor: isDark ? '#141201' : 'rgba(255,255,255,0.9)',
                      color: isDark ? 'var(--t-accent)' : '#555',
                    }}
                  >
                    {isDark ? <Moon size={11} /> : <Sun size={11} />}
                  </div>
                </button>
              </div>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
