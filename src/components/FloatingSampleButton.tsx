import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ChevronUp } from 'lucide-react';

interface FloatingSampleButtonProps {
  onOpenSampleModal: () => void;
}

export default function FloatingSampleButton({ onOpenSampleModal }: FloatingSampleButtonProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="빠른 신청 플로팅 메뉴"
      className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-40 flex flex-col items-end gap-2.5 print:hidden pointer-events-auto select-none"
    >
      {/* Scroll to Top button (Appears when scrolled down) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="페이지 맨 위로 이동"
          title="맨 위로 이동"
          className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-zinc-700 hover:text-zinc-950 border border-zinc-200/80 shadow-md hover:shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer group"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Main Free Sample Request FAB */}
      <div className="relative group">
        {/* Glow backdrop effect */}
        <div 
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0066EE] to-[#38BDF8] opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 animate-pulse" 
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={onOpenSampleModal}
          aria-label="샘플 3문항 무료 변환 신청 모달 열기"
          className="relative flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-[#060B19]/95 hover:bg-[#060B19] text-white border border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:scale-[1.03] active:scale-95 cursor-pointer text-left"
        >
          {/* Sparkle Icon Container with Electric Blue Gradient */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0066EE] to-[#0044BB] border border-[#38BDF8]/30 flex items-center justify-center shrink-0 shadow-inner group-hover:rotate-6 transition-transform">
            <Sparkles className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#38BDF8] animate-pulse" />
            
            {/* Live active dot indicator */}
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-[#060B19]"></span>
            </span>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="inline-block px-1.5 py-0.2 rounded text-[10px] font-black uppercase tracking-wider bg-[#0066EE]/30 text-[#38BDF8] border border-[#38BDF8]/30">
                무료 체험
              </span>
              <span className="text-[11px] font-medium text-zinc-300 hidden sm:inline">
                선착순 즉시 확인
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                무료 샘플 신청
              </span>
              <ArrowRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
            </div>

            <p className="text-[11px] text-zinc-300 font-normal hidden sm:block">
              3문항 HWP 정밀 변환 테스트
            </p>
          </div>
        </button>
      </div>
    </aside>
  );
}
