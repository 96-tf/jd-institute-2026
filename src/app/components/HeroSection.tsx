import { useEffect, useRef, useState } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import svgPaths from "../../imports/svg-scctuong69";
import { useFormModal } from "./FormModalContext";
import { HoverSlideText } from "./ui/HoverSlideText";

export function HeroSection() {
  const { openFormModal } = useFormModal();
  const heroImgRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroImgRef.current) return;
      const rect = heroImgRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Only calculate when image is in or near viewport
      if (rect.bottom > 0 && rect.top < windowH) {
        // How far the center of the element is from center of viewport
        const center = rect.top + rect.height / 2;
        const viewCenter = windowH / 2;
        const diff = center - viewCenter;
        setOffset(diff * 0.15); // 15% parallax intensity
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" aria-label="Hero - UGC Recognised Fashion Design Degrees" className="max-w-[1392px] mx-auto px-5 md:px-8 pt-8 md:pt-16 font-['Roboto',sans-serif]">
      {/* Top area: heading, description, exam card */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8 md:mb-10">
        {/* Heading */}
        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="max-w-[616px]">
            <h1 className="text-[40px] md:text-[56px] lg:text-[68px] leading-[1.1] tracking-[-0.25px]">
              <span className="font-medium">UGC Recognised B.Des & M.Des Degrees in Fashion Design</span>
              <br />
              <span className="font-normal">Hauz Khas Village</span>
            </h1>
          </div>
        </AnimateOnScroll>

        {/* Description + Download */}
        <AnimateOnScroll direction="up" delay={0.2} className="max-w-[287px]">
          <p className="text-[16px] leading-[24px] tracking-[0.5px] mb-2">
            Launch your career in India's creative capital. Secure your future with an industry-integrated degree in collaboration with Subharti University.
          </p>
          <a href="#" onClick={(e) => { e.preventDefault(); openFormModal("Download 2026 Prospectus"); }} className="group/slide inline-flex items-center gap-2.5 text-[14px] font-bold leading-[20px] tracking-[0.25px] underline">
            <HoverSlideText>Download 2026 Prospectus</HoverSlideText>
            <svg width="10" height="10" viewBox="0 0 34 34" fill="none">
              <path d={svgPaths.p3ae1ac00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </a>
        </AnimateOnScroll>

        {/* Exam Card */}
        <AnimateOnScroll direction="up" delay={0.3}>
          <div className="rounded-[8px] p-5 w-full sm:w-[328px] flex flex-col gap-3 transition-colors duration-500" style={{ background: 'linear-gradient(to bottom, var(--t-grad-from), var(--t-grad-to))' }}>
            <p className="text-[14px] font-bold leading-[20px] tracking-[0.1px]">
              Entrance Exam (GAT) Required for Degree Programs
            </p>
            <p className="text-[12px] font-medium leading-[16px] tracking-[0.5px]">
              Next Exam Date
            </p>
            <p className="text-[28px] md:text-[32px] font-bold leading-[40px]">
              Sunday, 15th March 2026
            </p>
            <button onClick={() => openFormModal("Start Your Application")} className="group/slide btn-cta rounded-[5px] px-4 py-2 flex items-center justify-center gap-2.5 text-[14px] font-medium leading-[20px] tracking-[0.1px] w-full cursor-pointer">
              <HoverSlideText>Start Your Application</HoverSlideText>
              <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                <path d={svgPaths.p3ae1ac00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
              </svg>
            </button>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Hero Image */}
      <AnimateOnScroll direction="up" delay={0.2}>
        <div
          ref={heroImgRef}
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] rounded-[12px] overflow-hidden"
        >
          <img
            src="./images/hero.webp"
            alt="Fashion design students collaborating in a creative studio at JD Institute, Hauz Khas Village, New Delhi"
            className="w-full h-full object-cover will-change-transform"
            fetchPriority="high"
            decoding="async"
            style={{
              transform: `translateY(${offset}px) scale(1.15)`,
            }}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
}