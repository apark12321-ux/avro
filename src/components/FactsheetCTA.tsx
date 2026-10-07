import { ArrowRight, Sparkles } from 'lucide-react';

interface FactsheetCTAProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function FactsheetCTA({ onOpenModal }: FactsheetCTAProps) {
  return (
    <section
      data-navbar-theme="dark"
      className="py-14 md:py-20 bg-[#050B1A] text-white relative font-sans border-t border-white/10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center relative z-10">
        
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 tracking-tight">
          PDF → HWP 완벽 변환 및 맞춤 템플릿 제작 외주
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mb-6 font-medium">
          수학·과학 수식 오차 0% · 도판 고화질 벡터 업스케일 · 고객 지정 템플릿 1:1 출력
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <button
            onClick={() => onOpenModal('inquiry')}
            className="w-full sm:w-1/2 h-[48px] bg-[#008CFF] hover:bg-[#0070cc] text-white font-bold rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
          >
            <span>문서 변환 외주 문의</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenModal('sample')}
            className="w-full sm:w-1/2 h-[48px] bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
          >
            <Sparkles className="w-4 h-4 text-[#008CFF]" />
            <span>샘플 3문항 무료 테스트</span>
          </button>
        </div>

      </div>
    </section>
  );
}
