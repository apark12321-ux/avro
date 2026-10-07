import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface TemplateNavbarProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function TemplateNavbar({ onOpenModal }: TemplateNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-[#060B19]/90 text-white border-b border-white/10 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent text-white py-4.5'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div className="w-7 h-7 bg-[#0066EE] text-white font-black flex items-center justify-center text-xs rounded-sm shadow-md">
              A
            </div>
            <div className="flex items-baseline gap-1.5 leading-none">
              <span className="font-extrabold tracking-tight text-lg">AVRO</span>
              <span className="text-[11px] text-zinc-400 font-medium hidden sm:inline">문서 변환 &amp; 수식 조판 센터</span>
            </div>
          </div>

          {/* Standard Web GNB Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-zinc-300">
            <button onClick={() => scrollTo('service-overview')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">
              서비스 소개
            </button>
            <button onClick={() => scrollTo('core-tech')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">
              수식 &amp; 이미지 업스케일
            </button>
            <button onClick={() => scrollTo('quality-data')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">
              품질 &amp; 데이터
            </button>
            <button onClick={() => scrollTo('client-reviews')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">
              고객 후기
            </button>
            <button onClick={() => scrollTo('work-process')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">
              진행 프로세스
            </button>
            <button onClick={() => scrollTo('faq-section')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">
              FAQ
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 text-xs font-bold">
            <button
              onClick={() => onOpenModal('inquiry')}
              className="px-3.5 py-1.5 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              외주 작업 문의
            </button>
            <button
              onClick={() => onOpenModal('sample')}
              className="px-4 py-2 rounded-full text-white bg-[#0066EE] hover:bg-[#0052cc] shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>샘플 3문항 무료 신청</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-zinc-300 hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-40 p-5 bg-[#060B19]/95 border-b border-white/10 shadow-2xl lg:hidden font-sans text-xs font-semibold backdrop-blur-xl">
          <div className="flex flex-col gap-3.5 text-zinc-300">
            <button onClick={() => scrollTo('service-overview')} className="text-left py-1 hover:text-[#38BDF8]">
              서비스 소개
            </button>
            <button onClick={() => scrollTo('core-tech')} className="text-left py-1 hover:text-[#38BDF8]">
              수식 &amp; 이미지 업스케일
            </button>
            <button onClick={() => scrollTo('quality-data')} className="text-left py-1 hover:text-[#38BDF8]">
              품질 &amp; 데이터
            </button>
            <button onClick={() => scrollTo('client-reviews')} className="text-left py-1 hover:text-[#38BDF8]">
              고객 후기
            </button>
            <button onClick={() => scrollTo('work-process')} className="text-left py-1 hover:text-[#38BDF8]">
              진행 프로세스
            </button>
            <button onClick={() => scrollTo('faq-section')} className="text-left py-1 hover:text-[#38BDF8]">
              자주 묻는 질문 (FAQ)
            </button>

            <div className="pt-3.5 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal('inquiry');
                }}
                className="w-full py-2.5 rounded-md border border-white/20 text-center text-white"
              >
                외주 작업 문의
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal('sample');
                }}
                className="w-full py-2.5 rounded-full bg-[#0066EE] text-white text-center font-bold"
              >
                샘플 3문항 무료 신청
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
