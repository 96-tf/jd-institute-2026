import { AnimateOnScroll } from "./AnimateOnScroll";
import svgPaths from "../../imports/svg-scctuong69";
import { useFormModal } from "./FormModalContext";

const stats = [
  { value: "36+", label: "Year of Design Legacy" },
  { value: "50k+", label: "Alumni Network" },
  { value: "500+", label: "Placement Partners" },
];

const logosRow1 = [
  { src: "./images/logos/manishmalhotra.webp", alt: "Manish Malhotra", h: 30, w: 72 },
  { src: "./images/logos/m&s.webp", alt: "Marks & Spencer", h: 51, w: 51 },
  { src: "./images/logos/satyapaul.webp", alt: "Satya Paul", h: 17, w: 92 },
  { src: "./images/logos/ritukumar.webp", alt: "Ritu Kumar", h: 40, w: 80 },
  { src: "./images/logos/zara.webp", alt: "Zara", h: 30, w: 60 },
];

const logosRow2 = [
  { src: "./images/logos/biba.webp", alt: "Biba", h: 68, w: 68 },
  { src: "./images/logos/clavinklein.webp", alt: "Calvin Klein", h: 45, w: 80 },
  { src: "./images/logos/gap.webp", alt: "Gap", h: 40, w: 70 },
  { src: "./images/logos/h&m.webp", alt: "H&M", h: 37, w: 55 },
  { src: "./images/logos/tommyhilfiger.webp", alt: "Tommy Hilfiger", h: 40, w: 80 },
];

export function StatsSection() {
  const { openFormModal } = useFormModal();
  return (
    <>
      {/* Section 1: 2x2 Bento Grid */}
      <section id="stats" aria-label="JD Institute Key Statistics" className="max-w-[1392px] mx-auto px-5 md:px-8 pb-10 md:pb-16 font-['Roboto',sans-serif]">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-1 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-[8px] p-6 md:p-[30px] lg:p-6 xl:p-[30px] flex flex-col items-center justify-center text-center gap-2 aspect-square md:aspect-auto md:py-6 lg:py-10 overflow-hidden transition-colors duration-500"
                style={{ backgroundColor: 'var(--t-card-bg)' }}
              >
                <p className="text-[48px] md:text-[56px] xl:text-[72px] font-bold leading-[1.1] tracking-[-0.25px] shrink-0">
                  {stat.value}
                </p>
                <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[20px] font-medium leading-[1.4] tracking-[0.1px]">
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Download Report */}
            <div
              onClick={() => openFormModal("Download 2024-25 Placement Report")}
              className="rounded-[8px] p-6 md:p-[30px] lg:p-6 xl:p-[30px] flex flex-col items-center justify-center text-center gap-2 aspect-square md:aspect-auto md:col-start-2 md:row-start-1 md:row-span-3 lg:col-auto lg:row-auto lg:row-span-1 lg:py-10 overflow-hidden cursor-pointer transition-colors duration-500"
              style={{ background: 'linear-gradient(to bottom, var(--t-grad-from), var(--t-grad-to))' }}
            >
              <svg width="56" height="56" viewBox="0 0 47 47" fill="none" className="lg:w-[40px] lg:h-[40px] xl:w-[56px] xl:h-[56px]">
                <path d={svgPaths.pebcec80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
              </svg>
              <div className="text-[16px] md:text-[20px] lg:text-[16px] xl:text-[20px] font-medium leading-[1.4] tracking-[0.1px]">
                <p>Download</p>
                <p>2024-25 Placement Report</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Section 2: Dual-Row Logo Marquee */}
      <section aria-label="Our placement partners" className="max-w-[1392px] mx-auto font-['Roboto',sans-serif] px-[20px] py-[40px]">
        <AnimateOnScroll direction="none">
          <div className="flex flex-col gap-6 opacity-65">
            {/* Row 1: Left to Right */}
            <div className="overflow-hidden py-3">
              <div className="flex animate-marquee items-center" style={{ width: "max-content" }}>
                {[...logosRow1, ...logosRow1, ...logosRow1].map((logo, i) => (
                  <img
                    key={`r1-${i}`}
                    src={logo.src}
                    alt={`${logo.alt} - JD Institute placement partner`}
                    style={{ height: logo.h * 1.0, width: "auto", filter: 'var(--t-logo-filter)' }}
                    className="shrink-0 object-contain mx-6 md:mx-10"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="overflow-hidden py-3">
              <div className="flex animate-marquee-reverse items-center" style={{ width: "max-content" }}>
                {[...logosRow2, ...logosRow2, ...logosRow2].map((logo, i) => (
                  <img
                    key={`r2-${i}`}
                    src={logo.src}
                    alt={`${logo.alt} - JD Institute placement partner`}
                    style={{ height: logo.h * 1.0, width: "auto", filter: 'var(--t-logo-filter)' }}
                    className="shrink-0 object-contain mx-6 md:mx-10"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}