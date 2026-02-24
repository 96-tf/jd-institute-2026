import { Phone, Menu, X, ArrowUp } from "lucide-react";
import { useFormModal } from "./FormModalContext";
import { useState, useEffect } from "react";

export function MobileStickyButton({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  const { openFormModal } = useFormModal();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      
      // Show button when within 100px of the bottom
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setShowScrollTop(isNearBottom);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[110] p-4 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent pointer-events-none">
      <div className="flex items-center gap-3 pointer-events-auto">
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="bg-[#141201] rounded-[12px] p-4 flex items-center justify-center shadow-lg active:scale-[0.95] transition-transform cursor-pointer shrink-0"
          style={{ color: 'var(--t-page-bg)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <button
          onClick={() => openFormModal("Call to Counsel")}
          className="rounded-[12px] px-6 py-4 flex items-center justify-center gap-2.5 text-[16px] font-medium tracking-[0.1px] shadow-lg active:scale-[0.98] transition-all duration-300 cursor-pointer"
          style={{ 
            backgroundColor: 'var(--t-accent)', 
            color: '#141201',
            flex: showScrollTop ? '1' : '1 1 auto',
            minWidth: showScrollTop ? '0' : 'auto'
          }}
        >
          <Phone size={18} />
          Call to Counsel
        </button>
        <div 
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ 
            width: showScrollTop ? '56px' : '0px',
            opacity: showScrollTop ? 1 : 0
          }}
        >
          <button
            aria-label="Scroll to top"
            className="bg-[#141201] rounded-[12px] p-4 flex items-center justify-center shadow-lg active:scale-[0.95] transition-transform cursor-pointer shrink-0 w-[56px]"
            style={{ color: 'var(--t-page-bg)' }}
            onClick={scrollToTop}
          >
            <ArrowUp size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}