import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface WebNavbarProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function WebNavbar({ onOpenModal }: WebNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200'
            : 'bg-white/85 backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 cursor-pointer"
          >
            AVRO
          </button>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label="주요 메뉴"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
          >
            <button
              type="button"
              onClick={() => scrollTo('industry-ai')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              업종별 솔루션
            </button>
            <button
              type="button"
              onClick={() => scrollTo('portfolio')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              구축 사례
            </button>
            <button
              type="button"
              onClick={() => scrollTo('capabilities')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              핵심 기능
            </button>
            <button
              type="button"
              onClick={() => scrollTo('process')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              진행 절차
            </button>
            <button
              type="button"
              onClick={() => scrollTo('faq')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenModal('sample')}
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              무료 진단 신청
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 cursor-pointer"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-white border-b border-slate-200 px-5 py-5 md:hidden shadow-lg">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <button
              type="button"
              onClick={() => scrollTo('industry-ai')}
              className="text-left py-2 hover:text-[#2563EB] cursor-pointer"
            >
              업종별 솔루션
            </button>
            <button
              type="button"
              onClick={() => scrollTo('portfolio')}
              className="text-left py-2 hover:text-[#2563EB] cursor-pointer"
            >
              구축 사례
            </button>
            <button
              type="button"
              onClick={() => scrollTo('capabilities')}
              className="text-left py-2 hover:text-[#2563EB] cursor-pointer"
            >
              핵심 기능
            </button>
            <button
              type="button"
              onClick={() => scrollTo('process')}
              className="text-left py-2 hover:text-[#2563EB] cursor-pointer"
            >
              진행 절차
            </button>
            <button
              type="button"
              onClick={() => scrollTo('faq')}
              className="text-left py-2 hover:text-[#2563EB] cursor-pointer"
            >
              FAQ
            </button>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal('sample');
              }}
              className="mt-2 w-full py-2.5 rounded-lg bg-[#2563EB] text-white text-sm font-semibold text-center cursor-pointer"
            >
              무료 진단 신청
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
