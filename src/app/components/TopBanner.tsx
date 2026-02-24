import { X } from "lucide-react";
import { useState } from "react";
import { useFormModal } from "./FormModalContext";

export function TopBanner() {
  const [visible, setVisible] = useState(true);
  const { openFormModal } = useFormModal();
  if (!visible) return null;

  return (
    <div role="alert" className="w-full py-3 px-4 flex items-center justify-center relative font-['Roboto',sans-serif] transition-colors duration-500" style={{ backgroundColor: 'var(--t-banner)', color: 'var(--t-text)' }}>
      <p className="text-[13px] md:text-[14px] leading-[20px] tracking-[0.25px] text-center">
        <span className="font-bold">&#x26A0;&#xFE0F; URGENT: Next GAT is April 12th 2026</span>{" "}
        <span className="hidden sm:inline">Register now for limited seats and download your{" "}
        <span className="underline cursor-pointer" onClick={() => openFormModal("Official Exam Guide")}>Official Exam Guide</span>.</span>
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss alert banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        style={{ color: 'var(--t-text)' }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
