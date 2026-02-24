import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useFormModal } from "./FormModalContext";
import svgPaths from "../../imports/svg-scctuong69";
import { HoverSlideText } from "./ui/HoverSlideText";

export function FormModal() {
  const { isOpen, title, closeFormModal } = useFormModal();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({ fullName: "", email: "", phone: "", course: "" });
      setSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFormModal();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeFormModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      closeFormModal();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 font-['Roboto',sans-serif]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#141201]/60 backdrop-blur-sm"
            onClick={closeFormModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative rounded-[16px] w-full max-w-[520px] max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl transition-colors duration-500"
            style={{ backgroundColor: 'var(--t-card-bg)', color: 'var(--t-text)' }}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            {/* Close Button */}
            <button
              onClick={closeFormModal}
              aria-label="Close form"
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              style={{ backgroundColor: 'color-mix(in srgb, var(--t-text) 10%, transparent)' }}
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[300px] gap-5 text-center">
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
                <h3 className="text-[22px] md:text-[26px] font-medium leading-[32px] pr-8">
                  {title}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}