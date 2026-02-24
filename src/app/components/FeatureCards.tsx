import { AnimateOnScroll } from "./AnimateOnScroll";
import { useTheme } from "./ThemeContext";
import svgPaths from "../../imports/svg-scctuong69";

export function FeatureCards() {
  const { isDark } = useTheme();
  return (
    <section id="features" aria-label="Why Choose JD Institute" className="max-w-[1392px] mx-auto px-5 md:px-8 py-12 md:py-20 font-['Roboto',sans-serif]">
      <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch lg:h-[360px]">
        {/* Dark Card */}
        <AnimateOnScroll direction="left" delay={0} className="lg:w-[329px] shrink-0">
          <div className="rounded-[8px] p-[30px] flex flex-col justify-between w-full h-full min-h-[320px] transition-colors duration-500" style={{ backgroundColor: isDark ? 'var(--t-card-bg)' : '#141201' }}>
            <svg width="33" height="31" viewBox="0 0 35 33" fill="none" aria-hidden="true">
              <path d={svgPaths.p214ce640} style={{ stroke: 'var(--t-card-text)' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <h2 className="text-[28px] md:text-[32px] leading-[40px] mt-6 transition-colors duration-500" style={{ color: 'var(--t-card-text)' }}>
              Launch Your Designer Label
            </h2>
            <p className="text-[14px] leading-[20px] tracking-[0.25px] mt-4 transition-colors duration-500" style={{ color: 'var(--t-card-text)' }}>
              We don't just teach design; we build entrepreneurs. Get the business mentorship needed to start your own studio or brand.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Image */}
        <AnimateOnScroll direction="up" delay={0.1} className="flex-1">
          <div className="h-[400px] md:h-full rounded-[8px] overflow-hidden" style={{ boxShadow: '0px -8px 61.9px 0px var(--t-shadow)' }}>
            <img
              src="/images/feature.webp"
              alt="JD Institute fashion design lab with students working on garments"
              className="w-full h-full object-cover rounded-[8px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </AnimateOnScroll>

        {/* Stats Card */}
        <AnimateOnScroll direction="right" delay={0.2} className="lg:w-[330px] shrink-0">
          <div className="rounded-[8px] p-[30px] w-full h-full min-h-[320px] flex flex-col justify-center gap-8 transition-colors duration-500" style={{ background: 'linear-gradient(to bottom, var(--t-grad-light-from), var(--t-grad-light-to))' }}>
            <h2 className="text-[20px] md:text-[24px] leading-[32px] transition-colors duration-500" style={{ color: 'var(--t-muted)' }}>
              The Fashion industry is currently valued at approximately
            </h2>
            <div>
              <p className="text-[38px] md:text-[45px] font-bold leading-[52px] mb-0">&#x20B9;10.88</p>
              <p className="text-[38px] md:text-[45px] font-bold leading-[52px]">Lakh Crore</p>
            </div>
            <div className="flex items-end gap-3">
              <div className="flex items-end gap-2">
                <div className="w-[14px] h-[30px] transition-colors duration-500" style={{ background: 'linear-gradient(to bottom, var(--t-grad-from), var(--t-grad-to))' }} />
                <div className="w-[14px] h-[43px] transition-colors duration-500" style={{ background: 'linear-gradient(to bottom, var(--t-grad-from), var(--t-grad-to))' }} />
                <div className="w-[14px] h-[56px] transition-colors duration-500" style={{ background: 'linear-gradient(to bottom, var(--t-grad-from), var(--t-grad-to))' }} />
              </div>
              <p className="text-[14px] leading-[20px] tracking-[0.25px] max-w-[174px]">
                Projected &#x20B9;17.23 Lakh Crore by the end of 2026.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}