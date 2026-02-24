import { useState, useRef } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-scctuong69";
import { useFormModal } from "./FormModalContext";
import { HoverSlideText } from "./ui/HoverSlideText";

const courses = [
  {
    id: "bdes",
    label: "B.Des in Fashion Design (4 Years)",
    title: "B.Des in Fashion Design (4 Years)",
    department: "DEPARTMENT OF FASHION",
    description:
      "A comprehensive undergraduate program focusing on creative conceptualization, technical draping, and digital fashion illustration.",
    idealFor: "Ideal for 12th Pass Students.",
    image: "./images/course-bdes.webp",
    imageAlt: "Fashion design undergraduate course",
    universityLogo: "./images/university-bdes.webp",
  },
  {
    id: "mdes",
    label: "M.Des in Fashion Design (2 Years)",
    title: "M.Des in Fashion Design (2 Years)",
    department: "DEPARTMENT OF FASHION",
    description:
      "An advanced postgraduate program emphasizing research-driven design thinking, sustainable fashion practices, and industry leadership.",
    idealFor: "Ideal for Graduates & Working Professionals.",
    image: "./images/course-mdes.webp",
    imageAlt: "Fashion design postgraduate course",
    universityLogo: "./images/university-mdes.webp",
  },
];

export function CoursesSection() {
  const { openFormModal } = useFormModal();
  const [activeIndex, setActiveIndex] = useState(0);
  const directionRef = useRef(1);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    directionRef.current = index > activeIndex ? 1 : -1;
    setActiveIndex(index);
  };

  const active = courses[activeIndex];

  return (
    <section id="our-courses" aria-label="Fashion Design Courses at JD Institute" className="max-w-[1392px] mx-auto px-5 md:px-8 py-12 md:py-20 font-['Roboto',sans-serif]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        {/* Left Side - Title and Course Buttons */}
        <AnimateOnScroll direction="left" className="flex flex-col lg:w-[418px] shrink-0 gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-[14px] font-medium leading-[20px] tracking-[0.1px] uppercase">
              Our Courses
            </span>
            <h2 className="text-[36px] md:text-[48px] lg:text-[57px] font-medium leading-[1.1] tracking-[-0.25px]">
              Find Your Professional Design Path
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {courses.map((course, i) => (
              <button
                key={course.id}
                onClick={() => handleSelect(i)}
                className="h-[68px] rounded-[8px] px-[30px] py-[15px] flex items-center justify-between w-full cursor-pointer transition-colors duration-300"
                style={{
                  backgroundColor: i === activeIndex ? 'var(--t-badge)' : 'var(--t-banner)',
                }}
              >
                <p className="text-[16px] font-medium leading-[24px] tracking-[0.15px]">
                  {course.label}
                </p>
                <svg width="14" height="14" viewBox="0 0 34 34" fill="none">
                  <path d={svgPaths.p3ae1ac00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Right Side - Course Card */}
        <AnimateOnScroll direction="right" delay={0.2} className="flex-1 overflow-hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={directionRef.current}>
              <motion.div
                key={active.id}
                custom={directionRef.current}
                initial="enter"
                animate="center"
                exit="exit"
                variants={{
                  enter: (dir: number) => ({ x: `${dir * 100}%`, opacity: 0.5 }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir: number) => ({ x: `${dir * -100}%`, opacity: 0.5, position: "absolute" as const, top: 0, left: 0, right: 0 }),
                }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-[8px] p-5 md:p-6 lg:p-8 flex flex-col gap-5 transition-colors duration-500"
                style={{ background: 'linear-gradient(to bottom, var(--t-grad-from), var(--t-grad-to))' }}
              >
                <div className="flex flex-col lg:flex-row lg:gap-8 gap-5 flex-1">
                  {/* Text Column */}
                  <div className="flex flex-col gap-4 lg:w-[38%] shrink-0 lg:justify-between lg:py-2">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[28px] md:text-[32px] font-bold leading-[40px]">
                        {active.title}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <span className="text-[12px] font-medium leading-[16px] tracking-[0.5px] uppercase">
                          {active.department}
                        </span>
                        <p className="text-[16px] leading-[24px] tracking-[0.5px]">
                          {active.description}
                        </p>
                      </div>
                      <div className="inline-flex items-center self-start px-3 py-2 rounded-[5px] transition-colors duration-500" style={{ backgroundColor: 'var(--t-banner)' }}>
                        <p className="text-[14px] font-medium leading-[20px] tracking-[0.1px]">
                          {active.idealFor}
                        </p>
                      </div>

                      {/* Degree Awarded By Section */}
                      <div className="flex flex-col gap-2 mt-2">
                        <span className="text-[12px] font-medium leading-[16px] tracking-[0.5px] uppercase">
                          Degree Awarded By
                        </span>
                        <div className="flex items-center">
                          <img src={active.universityLogo} alt="University Logo" className="h-[64px] w-auto object-contain" />
                        </div>
                      </div>
                    </div>
                    {/* CTA - desktop only (before image) */}
                    <button onClick={() => openFormModal("Get Full Curriculum Details")} className="group/slide btn-cta rounded-[5px] px-4 py-3 hidden lg:flex items-center justify-between w-full cursor-pointer">
                      <HoverSlideText>Get Full Curriculum Details</HoverSlideText>
                      <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                        <path d={svgPaths.p3ae1ac00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                      </svg>
                    </button>
                  </div>
                  {/* Image Column */}
                  <div className="w-full lg:w-[62%] h-[360px] sm:h-[400px] lg:h-[460px] rounded-[8px] overflow-hidden" style={{ boxShadow: '0px -8px 61.9px 0px var(--t-shadow)' }}>
                    <img
                      src={active.image}
                      alt={active.imageAlt}
                      className="w-full h-full object-cover rounded-[8px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                {/* CTA - mobile only (after image) */}
                <button onClick={() => openFormModal("Get Full Curriculum Details")} className="group/slide btn-cta rounded-[5px] px-4 py-3 flex lg:hidden items-center justify-between w-full cursor-pointer">
                  <HoverSlideText>Get Full Curriculum Details</HoverSlideText>
                  <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                    <path d={svgPaths.p3ae1ac00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}