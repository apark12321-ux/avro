import { useState, useEffect } from 'react';
import { ChevronUp, MessageSquare } from 'lucide-react';

interface FloatingSampleButtonProps {
  onOpenSampleModal: () => void;
}

export default function FloatingSampleButton({ onOpenSampleModal }: FloatingSampleButtonProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 360);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="빠른 메뉴"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 print:hidden"
    >
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
          className="w-10 h-10 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

      <button
        type="button"
        onClick={onOpenSampleModal}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
      >
        <MessageSquare className="w-4 h-4" />
        <span>무료 진단</span>
      </button>
    </aside>
  );
}
