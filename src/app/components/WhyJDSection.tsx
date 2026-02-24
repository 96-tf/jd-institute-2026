import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../../imports/svg-scctuong69";
import { useFormModal } from "./FormModalContext";
import { HoverSlideText } from "./ui/HoverSlideText";

const features = [
  {
    title: "Studio Access",
    description: "Get hands-on experience in fully equipped fashion studios with industrial-grade machines, draping tools, and textile labs.",
    hasButton: false,
    image: "./images/why-jd-studio.webp",
  },
  {
    title: "Life at Hauz Khas Village",
    description: "Surround yourself with art galleries, boutiques, and the creative pulse of Hauz Khas.",
    hasButton: true,
    buttonText: "Plan My Move to Delhi",
    image: "./images/why-jd-hauz-khas.webp",
  },
  {
    title: "Design Library",
    description: "Access a curated collection of design books, fabric swatches, and trend archives to fuel your creative research.",
    hasButton: false,
    image: "./images/why-jd-library.webp",
  },
  {
    title: "Live Site Visits",
    description: "Visit fashion houses, textile mills, and production units to understand the real-world design pipeline.",
    hasButton: false,
    image: "./images/why-jd-site-visit.webp",
  },
  {
    title: "Industry Faculties",
    description: "Learn from professionals who are actively working in fashion, branding, and design industries.",
    hasButton: false,
    image: "./images/why-jd-faculty.webp",
  },
  {
    title: "Safe Campus",
    description: "A secure, inclusive environment with 24/7 surveillance, counselling support, and well-maintained facilities.",
    hasButton: false,
    image: "./images/why-jd-campus.webp",
  },
];

function generateRotations(count: number) {
  const rotations = [-7, 5, -4, 8, -6, 3];
  return rotations.slice(0, count);
}

export function WhyJDSection() {
  const { openFormModal } = useFormModal();
  const [openIndex, setOpenIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageOffsetY, setImageOffsetY] = useState(0);
  const accordionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rotations = useMemo(() => generateRotations(features.length), []);

  const activeImageIndex = hoveredIndex !== null ? hoveredIndex : openIndex >= 0 ? openIndex : null;

  const updateImagePosition = useCallback((index: number) => {
    const listEl = accordionRef.current;
    const itemEl = itemRefs.current[index];
    if (listEl && itemEl) {
      const listRect = listEl.getBoundingClientRect();
      const itemRect = itemEl.getBoundingClientRect();
      const itemCenterY = itemRect.top - listRect.top + itemRect.height / 2;
      const listHeight = listRect.height;
      const imageHeight = 360; // 340px image + 20px padding
      const halfImage = imageHeight / 2;
      // Clamp so image stays within the accordion bounds
      const clamped = Math.max(halfImage, Math.min(itemCenterY, listHeight - halfImage));
      setImageOffsetY(clamped);
    }
  }, []);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
    updateImagePosition(index);
  };

  const handleClick = (index: number) => {
    const newIndex = openIndex === index ? -1 : index;
    setOpenIndex(newIndex);
    if (newIndex >= 0) {
      setTimeout(() => updateImagePosition(newIndex), 50);
    }
  };

  useEffect(() => {
    if (activeImageIndex !== null) {
      const timer = setTimeout(() => updateImagePosition(activeImageIndex), 10);
      return () => clearTimeout(timer);
    }
  }, [activeImageIndex, updateImagePosition]);

  return (
    <section id="why-jd" aria-label="Why Choose JD Institute - Campus Features" className="max-w-[1392px] mx-auto px-5 md:px-8 py-12 md:py-20 font-['Roboto',sans-serif] overflow-hidden">
      {/* Header */}
      <AnimateOnScroll>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12">
          <span className="text-[14px] font-medium leading-[20px] tracking-[0.1px] shrink-0 uppercase">
            Why JD Institute
          </span>
          <p className="text-[20px] leading-[28px] md:text-[24px] md:leading-[32px] max-w-[1042px]">
            <span className="transition-colors duration-500" style={{ color: 'var(--t-muted)' }}>Everything You Need to Launch a Design Career, </span>
            <span>
              From technical labs to safe campuses and expert faculty, we give you the tools to turn your talent into a global career.
            </span>
          </p>
        </div>
      </AnimateOnScroll>

      {/* Features with inline image */}
      <div className="flex flex-row relative">
        {/* Image area */}
        <div className="hidden lg:block relative w-[320px] shrink-0">
          <div className="relative h-full">
            <AnimatePresence mode="wait">
              {activeImageIndex !== null && (
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: imageOffsetY - 180,
                  }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute left-0"
                  style={{
                    rotate: `${rotations[activeImageIndex]}deg`,
                  }}
                >
                  <div className="p-2.5 rounded-[6px] shadow-2xl transition-colors duration-500" style={{ backgroundColor: 'var(--t-body-bg)' }}>
                    <ImageWithFallback
                      src={features[activeImageIndex].image}
                      alt={features[activeImageIndex].title}
                      className="w-[280px] h-[340px] object-cover rounded-[4px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Accordion */}
        <AnimateOnScroll direction="left" className="flex-1">
          <div className="flex flex-col" ref={accordionRef}>
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="px-5 py-4 cursor-pointer relative overflow-hidden rounded-[20px]"
                  onClick={() => handleClick(i)}
                >
                  <div
                    className="absolute inset-0 rounded-[20px] transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to bottom, var(--t-grad-from), var(--t-grad-to))",
                      opacity: i === openIndex ? 1 : 0,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[24px] md:text-[28px] leading-[36px]">{feature.title}</h3>
                      <div className="shrink-0 relative w-[40px] h-[40px]">
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            backgroundColor: "var(--t-circle-bg)",
                            opacity: openIndex === i ? 0 : 1,
                            transition: "opacity 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)",
                          }}
                        />
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            backgroundColor: "var(--t-body-bg)",
                            opacity: openIndex === i ? 1 : 0,
                            transition: "opacity 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)",
                          }}
                        />
                        <svg
                          className="absolute inset-0"
                          width="40" height="40" viewBox="0 0 34 34" fill="none"
                          style={{
                            transform: openIndex === i ? "rotate(0deg)" : "rotate(90deg)",
                            transition: "transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)",
                          }}
                        >
                          <path d={svgPaths.p3ae1ac00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pb-2">
                            <p className="text-[16px] leading-[24px] tracking-[0.5px] mb-3">
                              {feature.description}
                            </p>
                            {feature.hasButton && (
                              <button onClick={() => openFormModal(feature.buttonText!)} className="group/slide btn-cta rounded-[8px] px-6 py-3 flex items-center gap-2.5 text-[14px] font-medium leading-[20px] tracking-[0.1px] cursor-pointer">
                                <HoverSlideText>{feature.buttonText!}</HoverSlideText>
                                <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                                  <path d="M10 10L24 10M24 10V24M24 10L10 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {i < features.length - 1 && i !== openIndex && openIndex !== i + 1 && (
                  <div className="h-[1px] mx-5" style={{ backgroundColor: 'color-mix(in srgb, var(--t-text) 10%, transparent)' }} />
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}