import Slider from "react-slick";
import { AnimateOnScroll } from "./AnimateOnScroll";
import svgPaths from "../../imports/svg-scctuong69";
import { useFormModal } from "./FormModalContext";
import { HoverSlideText } from "./ui/HoverSlideText";

const studentWorks = [
  { img: "./images/student-work-1.webp", name: "Priya Sharma", batch: "Fashion Design 2024", height: "h-[340px] md:h-[497px]" },
  { img: "./images/student-work-2.webp", name: "Ananya Singh", batch: "Fashion Design 2023", height: "h-[220px] md:h-[300px]" },
  { img: "./images/student-work-3.webp", name: "Ritu Verma", batch: "Fashion Design 2024", height: "h-[280px] md:h-[400px]" },
];

export function StudentWork() {
  const { openFormModal } = useFormModal();

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="!bottom-[-30px]">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full opacity-30 [.slick-active_&]:opacity-100 transition-all" style={{ backgroundColor: 'var(--t-text)' }} />
    ),
  };

  return (
    <section id="student-work" aria-label="Student Fashion Design Portfolio" className="max-w-[1392px] mx-auto px-5 md:px-8 py-12 md:py-20 font-['Roboto',sans-serif]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left - Description */}
        <AnimateOnScroll direction="left" className="lg:w-[342px] shrink-0">
          <div className="flex flex-col gap-4">
            <span className="text-[14px] font-medium leading-[20px] tracking-[0.1px] uppercase">
              Students Work
            </span>
            <p className="text-[24px] leading-[32px]">
              <span>Our classrooms are incubation labs where ideas are tested, </span>
              <span className="transition-colors duration-500" style={{ color: 'var(--t-muted)' }}>torn apart, and rebuilt until they are market-ready.</span>
            </p>
            {/* Desktop CTA */}
            <button onClick={() => openFormModal("View Student Creations")} className="group/slide btn-cta rounded-[5px] px-4 py-3 hidden lg:flex items-center justify-between w-full cursor-pointer mt-4">
              <HoverSlideText>View Student Creations</HoverSlideText>
              <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                <path d={svgPaths.p3ae1ac00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
              </svg>
            </button>
          </div>
        </AnimateOnScroll>

        {/* Right - Student Work Grid/Carousel */}
        <AnimateOnScroll direction="right" delay={0.2} className="flex-1 min-w-0">
          {/* Desktop Grid */}
          <div className="hidden md:flex gap-6 items-start">
            {studentWorks.map((work, i) => (
              <div key={i} className="flex-1 min-w-0">
                <div className={`${work.height} rounded-[8px] overflow-hidden`}>
                  <img src={work.img} alt={`${work.name} - ${work.batch} fashion design student work at JD Institute`} className="w-full h-full object-cover object-top rounded-[8px]" loading="lazy" decoding="async" />
                </div>
                <div className="py-2.5">
                  <p className="text-[14px] font-medium leading-[20px] tracking-[0.1px]">{work.name}</p>
                  <p className="text-[14px] leading-[20px] tracking-[0.1px]">{work.batch}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden pb-10">
            <Slider {...slickSettings}>
              {studentWorks.map((work, i) => (
                <div key={i} className="px-1">
                  <div className="h-[350px] rounded-[8px] overflow-hidden">
                    <img src={work.img} alt={`${work.name} - ${work.batch} fashion design student work at JD Institute`} className="w-full h-full object-cover object-top rounded-[8px]" loading="lazy" decoding="async" />
                  </div>
                  <div className="py-2.5">
                    <p className="text-[14px] font-medium leading-[20px] tracking-[0.1px]">{work.name}</p>
                    <p className="text-[14px] leading-[20px] tracking-[0.1px]">{work.batch}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* View Student Creations Button - Mobile/Tablet only */}
          <button onClick={() => openFormModal("View Student Creations")} className="group/slide btn-cta rounded-[5px] px-4 py-3 flex lg:hidden items-center justify-between w-full cursor-pointer mt-4">
            <HoverSlideText>View Student Creations</HoverSlideText>
            <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
              <path d={svgPaths.p3ae1ac00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
            </svg>
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}