import { useEffect, useRef, useState } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import svgPaths from "../../imports/svg-scctuong69";
import { useFormModal } from "./FormModalContext";
import { HoverSlideText } from "./ui/HoverSlideText";

const steps = [
  {
    number: "01",
    subtitle: "QUICK INQUIRY & CHAT",
    title: "Say Hello to Your Future",
    desc: "Submit your inquiry and verify your email to get started. A Senior Counselor will review your profile and reach out for a short, friendly chat to guide you toward your ideal design path.",
  },
  {
    number: "02",
    subtitle: "QUICK INQUIRY & CHAT",
    title: "Show Your Spark",
    desc: "Visit us at HKV or Kamla Nagar for a 1-on-1 consultation. We'll review your creative interests, discuss your career goals, and help you choose the right specialization. Can't visit? We can host this session via a video call.",
  },
  {
    number: "03",
    subtitle: "QUICK INQUIRY & CHAT",
    title: "Claim Your Space",
    desc: "Clear the GAT to unlock your registration. Simply pay the booking fee to secure your seat, and we'll guide you through a smooth onboarding process just in time for the batch launch!",
  },
];

export function AdmissionSteps() {
  const { openFormModal } = useFormModal();
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        { threshold: 0.6, rootMargin: "-10% 0px -30% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="admissions-process" aria-label="3-Step Admission Process at JD Institute" className="max-w-[1392px] mx-auto px-5 md:px-8 py-12 md:py-20 font-['Roboto',sans-serif]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Info Card */}
        <AnimateOnScroll direction="left" className="lg:w-[330px] shrink-0">
          <div className="flex flex-col gap-6">
            <h2 className="text-[24px] leading-[32px]">
              Everything You Need to Launch a Design Career. Our alumni aren't just part of the industry, they lead it.
            </h2>
            {/* Desktop CTA */}
            <button onClick={() => openFormModal("Get My Enrollment Map")} className="group/slide btn-cta rounded-[8px] px-6 py-3 hidden lg:flex items-center justify-between gap-2.5 text-[14px] font-medium leading-[20px] tracking-[0.1px] w-full cursor-pointer">
              <HoverSlideText>Get My Enrollment Map</HoverSlideText>
              <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                <path d="M10 10L24 10M24 10V24M24 10L10 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
              </svg>
            </button>
          </div>
        </AnimateOnScroll>

        {/* Right Steps */}
        <div className="flex-1 flex flex-col gap-6">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} direction="up" delay={i * 0.15}>
              <div
                ref={(el) => { cardRefs.current[i] = el; }}
                className="relative rounded-[10px] p-5 md:p-6 overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-[10px] transition-colors duration-500"
                  style={{ background: "linear-gradient(to bottom, var(--t-grad-light-from), var(--t-grad-light-to))" }}
                />
                <div
                  className="absolute inset-0 rounded-[10px]"
                  style={{
                    background: "linear-gradient(to bottom, var(--t-grad-from), var(--t-grad-to))",
                    opacity: i === activeIndex ? 1 : 0,
                    transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <p className="text-[40px] md:text-[57px] leading-[64px] tracking-[-0.25px] shrink-0">
                      {step.number}
                    </p>
                    <div className="hidden md:block w-[100px] shrink-0" />
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 flex-1">
                      <div className="md:w-[329px] shrink-0">
                        <span className="text-[14px] font-medium leading-[20px] tracking-[0.1px] block uppercase">
                          {step.subtitle}
                        </span>
                        <h3 className="text-[28px] md:text-[32px] leading-[40px]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[16px] leading-[24px] tracking-[0.5px] max-w-[424px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Button after cards - Mobile/Tablet only */}
      <AnimateOnScroll direction="up" delay={0.3} className="lg:hidden">
        <button onClick={() => openFormModal("Get My Enrollment Map")} className="group/slide btn-cta rounded-[8px] px-6 py-3 flex items-center justify-center gap-2.5 text-[14px] font-medium leading-[20px] tracking-[0.1px] w-full cursor-pointer mt-8">
          <HoverSlideText>Get My Enrollment Map</HoverSlideText>
          <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
            <path d="M10 10L24 10M24 10V24M24 10L10 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </svg>
        </button>
      </AnimateOnScroll>
    </section>
  );
}