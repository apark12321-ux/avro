import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface FactsheetNavbarProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function FactsheetNavbar({ onOpenModal }: FactsheetNavbarProps) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const lightSections = document.querySelectorAll('[data-navbar-theme="light"]');
      let inLight = false;

      lightSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom >= 60) {
          inLight = true;
        }
      });

      setIsLightMode(inLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isLightMode
            ? 'bg-[#f5f5f5]/95 text-black border-b border-black/10 backdrop-blur-md'
            : 'bg-[#212121]/95 text-white border-b border-white/5 backdrop-blur-md'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between font-sans">
          
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="w-6 h-6 bg-[#008CFF] text-white font-black flex items-center justify-center text-xs">
              A
            </div>
            <div className="flex items-baseline gap-1.5 leading-none">
              <span className="font-extrabold tracking-tight text-sm sm:text-base">AVRO</span>
              <span className="text-[11px] text-zinc-400">문서 변환 &amp; 수식 조판 솔루션</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold">
            <button
              onClick={() => scrollTo('pain-points')}
              className={`hover:text-[#008CFF] transition-colors cursor-pointer ${
                isLightMode ? 'text-zinc-700' : 'text-zinc-300'
              }`}
            >
              변환 기술 팩트
            </button>
            <button
              onClick={() => scrollTo('wow-section')}
              className={`hover:text-[#008CFF] transition-colors cursor-pointer ${
                isLightMode ? 'text-zinc-700' : 'text-zinc-300'
              }`}
            >
              핵심 작업 기준
            </button>
            <button
              onClick={() => scrollTo('reviews-section')}
              className={`hover:text-[#008CFF] transition-colors cursor-pointer ${
                isLightMode ? 'text-zinc-700' : 'text-zinc-300'
              }`}
            >
              납품 사례
            </button>
            <button
              onClick={() => scrollTo('features-section')}
              className={`hover:text-[#008CFF] transition-colors cursor-pointer ${
                isLightMode ? 'text-zinc-700' : 'text-zinc-300'
              }`}
            >
              서비스 스펙
            </button>
            <button
              onClick={() => scrollTo('faq-section')}
              className={`hover:text-[#008CFF] transition-colors cursor-pointer ${
                isLightMode ? 'text-zinc-700' : 'text-zinc-300'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2 text-xs font-bold">
            <button
              onClick={() => onOpenModal('inquiry')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                isLightMode
                  ? 'text-zinc-800 hover:bg-black/5'
                  : 'text-zinc-300 hover:bg-white/10'
              }`}
            >
              외주 문의
            </button>
            <button
              onClick={() => onOpenModal('sample')}
              className="px-3.5 py-1.5 text-white bg-[#008CFF] hover:bg-[#0070cc] active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>샘플 3문항 무료 변환</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-1.5 cursor-pointer ${
              isLightMode ? 'text-zinc-800' : 'text-zinc-200'
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-x-0 top-[48px] z-40 p-4 shadow-xl lg:hidden font-sans text-xs font-bold ${
            isLightMode ? 'bg-[#f5f5f5] text-black border-b border-black/10' : 'bg-[#212121] text-white border-b border-zinc-800'
          }`}
        >
          <div className="flex flex-col gap-2.5">
            <button onClick={() => scrollTo('pain-points')} className="text-left py-1 hover:text-[#008CFF]">
              변환 기술 팩트
            </button>
            <button onClick={() => scrollTo('wow-section')} className="text-left py-1 hover:text-[#008CFF]">
              핵심 작업 기준
            </button>
            <button onClick={() => scrollTo('reviews-section')} className="text-left py-1 hover:text-[#008CFF]">
              납품 사례
            </button>
            <button onClick={() => scrollTo('features-section')} className="text-left py-1 hover:text-[#008CFF]">
              서비스 스펙
            </button>
            <button onClick={() => scrollTo('faq-section')} className="text-left py-1 hover:text-[#008CFF]">
              FAQ
            </button>

            <div className="pt-2.5 border-t border-zinc-700/40 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal('inquiry');
                }}
                className="w-full py-2 border border-zinc-500/40 text-center"
              >
                외주 문의
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal('sample');
                }}
                className="w-full py-2 bg-[#008CFF] text-white text-center"
              >
                샘플 3문항 무료 변환
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
