import { useState } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import svgPaths from "../../imports/svg-scctuong69";
import { HoverSlideText } from "./ui/HoverSlideText";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" aria-label="Free Career Consultation Form" className="max-w-[1392px] mx-auto px-5 md:px-8 py-12 md:py-20 font-['Roboto',sans-serif]">
      <AnimateOnScroll>
        <div className="rounded-[16px] p-6 md:p-10 lg:p-[56px] flex flex-col lg:flex-row gap-10 lg:gap-16 mx-auto transition-colors duration-500" style={{ background: 'linear-gradient(to bottom, var(--t-grad-from), var(--t-grad-to))' }}>
          {/* Left Side - Info */}
          <div className="flex flex-col gap-8 lg:w-[500px] shrink-0">
            <div>
              <span className="text-[14px] font-medium leading-[20px] tracking-[0.1px] mb-3 block uppercase">
                Admissions &gt; Free Career Consultation
              </span>
              <h2 className="text-[36px] md:text-[48px] lg:text-[57px] font-medium leading-[1.1] tracking-[-0.25px] mb-6">
                Talk to Someone Who Knows
              </h2>
              <p className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] max-w-[546px]">
                Our senior career counselors at Hauz Khas Village are ready to help you choose the right degree for your goals.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 rounded-[16px] p-6 md:p-10 transition-colors duration-500" style={{ backgroundColor: 'var(--t-card-bg)' }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-5 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center btn-cta">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" stroke="currentColor" />
                  </svg>
                </div>
                <p className="text-[24px] font-medium">Thank you!</p>
                <p className="text-[16px] leading-[24px] max-w-[320px]">
                  We've received your inquiry. A counselor will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="text-[22px] md:text-[26px] font-medium leading-[32px] mb-1">
                  Get a Free Career Consultation
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium tracking-[0.4px]">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="input-themed border rounded-[10px] px-4 py-3.5 text-[15px] outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium tracking-[0.4px]">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="input-themed border rounded-[10px] px-4 py-3.5 text-[15px] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium tracking-[0.4px]">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="input-themed border rounded-[10px] px-4 py-3.5 text-[15px] outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium tracking-[0.4px]">Interested Course *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="input-themed border rounded-[10px] px-4 py-3.5 text-[15px] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a course</option>
                      <option value="bdes">B.Des in Fashion Design (4 Years)</option>
                      <option value="mdes">M.Des in Fashion Design (2 Years)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group/slide btn-cta rounded-[10px] px-6 py-4 flex items-center justify-center gap-2.5 text-[16px] font-medium leading-[20px] tracking-[0.1px] w-full cursor-pointer mt-1"
                >
                  <HoverSlideText slideHeight="1.25em">Submit My Inquiry</HoverSlideText>
                  <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                    <path d="M10 10L24 10M24 10V24M24 10L10 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                  </svg>
                </button>

                <p className="text-[13px] leading-[18px] text-center" style={{ color: 'color-mix(in srgb, var(--t-text) 60%, transparent)' }}>
                  By submitting, you agree to be contacted by a counselor. Your data is secure and will not be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}