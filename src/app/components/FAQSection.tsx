import { useFormModal } from "./FormModalContext";
import { HoverSlideText } from "./ui/HoverSlideText";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import svgPaths from "../../imports/svg-scctuong69";

const faqs = [
  {
    question: "Is the degree recognized?",
    answer: "Yes. JD Institute diplomas are recognized by the National Board of Accreditation. Our graduates work at H&M, Zara, Pantaloons, and Amazon. That's the real credential.",
    hasButton: true,
  },
  {
    question: "What about placement?",
    answer: "We have a dedicated placement cell with 500+ industry partners. Our placement rate is over 95% with top brands in fashion, retail, and luxury.",
    hasButton: false,
  },
  {
    question: "Is hostel available?",
    answer: "Yes, we provide hostel facilities for outstation students with modern amenities, 24/7 security, and proximity to the campus.",
    hasButton: false,
  },
  {
    question: "What's the minimum eligibility?",
    answer: "For B.Des: 12th pass from any stream. For M.Des: Graduate in any discipline. No prior design experience is required.",
    hasButton: false,
  },
  {
    question: "Can I work while studying?",
    answer: "Yes! Our flexible schedule and industry partnerships allow you to take up internships and freelance projects alongside your studies.",
    hasButton: false,
  },
];

export function FAQSection() {
  const { openFormModal } = useFormModal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" aria-label="Frequently Asked Questions about JD Institute" className="max-w-[732px] mx-auto px-5 md:px-8 py-16 md:py-24 font-['Roboto',sans-serif]">
      {/* Header */}
      <AnimateOnScroll className="text-center mb-12 md:mb-14">
        <h2 className="text-[36px] md:text-[48px] lg:text-[57px] font-medium leading-[1.1] tracking-[-0.25px]">
          Questions
        </h2>
        <p className="text-[16px] leading-[24px] tracking-[0.5px] mt-1">
          Here's what you should know before applying
        </p>
      </AnimateOnScroll>

      {/* FAQ Items */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <AnimateOnScroll key={i} direction="up" delay={i * 0.1}>
            <div>
              {/* Separator */}
              <div className="h-[1px] mb-5" style={{ backgroundColor: 'color-mix(in srgb, var(--t-text) 20%, transparent)' }} />

              {/* Question */}
              <div
                className="flex items-start justify-between gap-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <div className="flex-1">
                  <h3 className="text-[20px] md:text-[24px] leading-[32px]">
                    {faq.question}
                  </h3>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4">
                          <p className="text-[16px] leading-[24px] tracking-[0.5px] mb-4">
                            {faq.answer}
                          </p>
                          {faq.hasButton && (
                            <button onClick={() => openFormModal("Send Me Fee Structure")} className="group/slide btn-cta rounded-[8px] px-6 py-3 flex items-center gap-2.5 text-[14px] font-medium leading-[20px] tracking-[0.1px] cursor-pointer">
                              <HoverSlideText>Send Me Fee Structure</HoverSlideText>
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

                {/* Toggle Icon */}
                <button className="shrink-0 cursor-pointer relative w-[40px] h-[40px]">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: "var(--t-circle-bg)",
                      opacity: openIndex === i ? 0 : 1,
                      transition: "opacity 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    }}
                  />
                  <svg className="absolute inset-0" width="40" height="40" viewBox="0 0 34 34" fill="none">
                    <defs>
                      <linearGradient id={`faqGrad${i}`} x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                        <stop style={{ stopColor: 'var(--t-grad-from)' }} />
                        <stop offset="1" style={{ stopColor: 'var(--t-grad-to)' }} />
                      </linearGradient>
                    </defs>
                    <rect width="34" height="34" rx="17" fill={`url(#faqGrad${i})`}
                      style={{
                        opacity: openIndex === i ? 1 : 0,
                        transition: "opacity 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)",
                      }}
                    />
                  </svg>
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
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}