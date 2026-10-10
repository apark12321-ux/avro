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
        
        {/* Top Company Badge & Category with zero-pill unboxed styling */}
        <div className="flex items-center justify-center gap-2 mb-5 text-xs sm:text-sm font-bold text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
          <span>DOCUMENT ENGINEERING</span>
          <span aria-hidden="true" className="text-zinc-500">·</span>
          <span>공문서·업무서식·시험지 HWP 정밀 조판</span>
        </div>

        {/* Main Title - Crystal Clear What We Do */}
        <h1 className="text-[2.2rem] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5rem] font-black tracking-tight leading-[1.14] mb-6 text-white">
          스캔 PDF·복잡 서식·수식을
          <br />
          <span className="text-[#38BDF8]">
            편집 가능한 한글(HWP)로 정밀 복원
          </span>
        </h1>

        {/* Subtitle - Punchy benefit summary */}
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
          공공기관 조례·규정집부터 기업 사내 매뉴얼, 계약서·사규, 교육·출판 시험지까지
          <br className="hidden sm:inline" />
          깨지는 웹 OCR 대신 규격을 준수하는 완성형 HWP/HWPX 문서로 납품합니다.
        </p>

        {/* 3 Core Highlights (Benefit-focused across practical documents) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-4xl mx-auto mb-8 text-left">
          <div className="p-4 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/10">
            <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
              01 공공 · 행정 표준
            </span>
            <h3 className="text-sm font-bold text-white mb-1">공문서·조례 규정집 전산화</h3>
            <p className="text-xs text-zinc-400">행정안전부 공문서 편람 규격 1:1 준수, 복합 표 및 들여쓰기 체계 완결</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/10">
            <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
              02 기업 · 업무 서식
            </span>
            <h3 className="text-sm font-bold text-white mb-1">사내 매뉴얼 &amp; 업무 흐름도</h3>
            <p className="text-xs text-zinc-400">프로세스 순서도·도형·화살표 개체화, 다단 결재선 및 사내 서식 1:1 전산화</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/10">
            <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
              03 교육 · 출판 조판
            </span>
            <h3 className="text-sm font-bold text-white mb-1">수식 타이핑 &amp; 기하 작도</h3>
            <p className="text-xs text-zinc-400">초·중·고 시험지 및 교재의 기하 벡터 작도와 한글 수식 1:1 완결 (실제 검증본)</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <button
            onClick={() => onOpenModal('sample')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0066EE] hover:bg-[#0052cc] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#0066EE]/40 hover:shadow-[#0066EE]/60 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>무료 샘플 변환 테스트 (3쪽/3문항)</span>
          </button>

          <button
            onClick={() => onOpenModal('inquiry')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-sm sm:text-base active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>외주 견적 · 프로젝트 상담</span>
            <ArrowRight className="w-4 h-4 text-zinc-300" />
          </button>
        </div>

        {/* Assurance badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400 mb-8">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>샘플 비용 0원</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>정품 HWP/HWPX 납품</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>원고 비밀유지(NDA) 준수</span>
          </div>
        </div>

        {/* Fast jump to Conversion Sample Button */}
        <div>
          <button
            onClick={() => scrollTo('conversion-sample')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors cursor-pointer group py-2.5 px-5 rounded-full bg-blue-950/60 border border-blue-500/40 hover:bg-blue-900/50"
          >
            <span>실제 변환 전·후 결과물 직접 비교하기</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
