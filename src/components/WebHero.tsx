import { ArrowRight, Sparkles, ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BlueBloomTop, BlueBloomBottom } from './BlueBloomArtwork';

interface WebHeroProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function WebHero({ onOpenModal }: WebHeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 md:pt-36 pb-20 bg-[#060B19] text-white overflow-hidden font-sans">
      {/* 3D Electric Blue Fluid Petals matching MangoBoard Template */}
      <BlueBloomTop />
      <BlueBloomBottom />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center relative z-10 w-full">
        
        {/* Top Company Badge & Category */}
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-[#0066EE]/25 border border-[#38BDF8]/40 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-black text-[#38BDF8] tracking-wider uppercase">
            수학·과학 시험지 &amp; 교재 조판 전문 기업
          </span>
        </div>

        {/* Main Title - Crystal Clear What We Do */}
        <h1 className="text-[2.2rem] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5rem] font-black tracking-tight leading-[1.14] mb-6 text-white">
          PDF·시험지 사진을
          <br />
          <span className="text-[#38BDF8]">
            한글(HWP) 교재 완성본으로 완벽하게 변환해 드립니다.
          </span>
        </h1>

        {/* Subtitle - Exactly what is done */}
        <p className="text-zinc-200 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          깨지는 자동 변환기 대신, <strong className="text-white font-extrabold">전문 조판 에디터가 수학·과학 수식을 100% 한글 수식 편집기로 직접 타이핑</strong>하고,
          저화질 캡처 이미지를 <strong className="text-[#38BDF8] font-extrabold">선명하게 고화질 업스케일</strong>하여 귀사의 <strong className="text-white font-extrabold">전용 템플릿 양식</strong>에 딱 맞춰 편집·납품합니다.
        </p>

        {/* 3 Core What We Do Value Cards in Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/15 hover:border-[#38BDF8]/50 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black text-[#38BDF8] font-mono uppercase tracking-wider">01 수식 타이핑</span>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
              복잡한 수식 100% 표준 규격 입력
            </h3>
            <p className="text-xs sm:text-xs text-zinc-300 leading-normal font-normal">
              분수, 근호, 극한, 행렬, 적분 등 난이도 높은 수식도 글자처럼 완벽히 수정 가능하도록 입력합니다.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/15 hover:border-[#38BDF8]/50 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black text-[#38BDF8] font-mono uppercase tracking-wider">02 도판 최적화</span>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
              캡처·저화질 사진 고화질 업스케일
            </h3>
            <p className="text-xs sm:text-xs text-zinc-300 leading-normal font-normal">
              단가 높은 신규 드로잉 대신, 전달해주신 캡처본/도판을 인쇄 가능한 선명한 해상도로 깔끔하게 변환합니다.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/15 hover:border-[#38BDF8]/50 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black text-[#38BDF8] font-mono uppercase tracking-wider">03 맞춤 템플릿</span>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
              학원·출판사 양식에 1:1 완결 납품
            </h3>
            <p className="text-xs sm:text-xs text-zinc-300 leading-normal font-normal">
              귀사의 폰트, 자간, 2단/1단 여백 스타일에 맞춰 바로 수업 및 시험에 투입할 수 있는 완성본을 제공합니다.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <button
            onClick={() => onOpenModal('sample')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0066EE] hover:bg-[#0052cc] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#0066EE]/40 hover:shadow-[#0066EE]/60 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>샘플 3문항 무료 변환 테스트 신청</span>
          </button>

          <button
            onClick={() => onOpenModal('inquiry')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-sm sm:text-base active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>정기 외주·견적 상담 문의</span>
            <ArrowRight className="w-4 h-4 text-zinc-300" />
          </button>
        </div>

        {/* Assurance badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400 mb-8">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>샘플 테스트 비용 0원</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>정품 HWP/HWPX 원본 파일 납품</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>미공개 원고 보안 &amp; NDA 준수</span>
          </div>
        </div>

        {/* Fast jump to Conversion Sample Button */}
        <div>
          <button
            onClick={() => scrollTo('conversion-sample')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors cursor-pointer group py-2.5 px-5 rounded-full bg-blue-950/60 border border-blue-500/40 hover:bg-blue-900/50"
          >
            <span>실제 납품 퀄리티: 선별 원고 ➔ 빈출유형 1회 변환 결과물 비교 보기</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
