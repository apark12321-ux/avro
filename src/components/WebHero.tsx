import { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sigma, 
  Clock, 
  Layers, 
  Lock, 
  ChevronRight
} from 'lucide-react';
import { BlueBloomTop, BlueBloomBottom } from './BlueBloomArtwork';

interface WebHeroProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function WebHero({ onOpenModal }: WebHeroProps) {
  const [activeColumn, setActiveColumn] = useState<number>(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const columns = [
    {
      stepNum: '01',
      tag: '수식·벡터 작도',
      title: '수식 & 도형 작도',
      points: [
        '수학·과학 복잡 수식 100% 한글 개체화',
        '뭉개진 도형·그래프 300dpi 벡터 작도'
      ],
      highlightChip: '한글 수식 1:1 입력 & 벡터 복원',
      theme: {
        accent: 'text-cyan-400',
        activeBorder: 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]',
        border: 'border-cyan-500/30',
        bg: 'from-cyan-500/20 via-[#0B1528] to-[#081020]',
        badge: 'bg-cyan-400/15 text-cyan-300 border-cyan-400/40',
      },
      icon: <Sigma className="w-5 h-5 text-cyan-400" />,
      actionText: '무료 샘플 테스트 신청',
      onAction: () => onOpenModal('sample'),
    },
    {
      stepNum: '02',
      tag: '신속 당일 출고',
      title: '신속 당일 납품',
      points: [
        '시험 직전 급한 원고 당일 4~8시간 출고',
        '100문항 이상 대량 작업 전문 분할 조판'
      ],
      highlightChip: '일정 준수율 99.8% · 긴급 야간 작업 가능',
      theme: {
        accent: 'text-[#38BDF8]',
        activeBorder: 'border-[#38BDF8] shadow-[0_0_30px_rgba(56,189,248,0.3)]',
        border: 'border-blue-500/30',
        bg: 'from-blue-500/20 via-[#0B1528] to-[#081020]',
        badge: 'bg-sky-400/15 text-sky-300 border-sky-400/40',
      },
      icon: <Clock className="w-5 h-5 text-[#38BDF8]" />,
      actionText: '긴급 외주 일정 문의',
      onAction: () => onOpenModal('inquiry'),
    },
    {
      stepNum: '03',
      tag: '공문서 표준 규격',
      title: '서식 & 복합 표',
      points: [
        '행정안전부 공문서 편람 규격 1:1 준수',
        '복합 표·들여쓰기·수능 2단 스타일 완성'
      ],
      highlightChip: '온-나라 시스템 및 인쇄소 즉시 호환',
      theme: {
        accent: 'text-emerald-400',
        activeBorder: 'border-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.3)]',
        border: 'border-emerald-500/30',
        bg: 'from-emerald-500/20 via-[#0B1528] to-[#081020]',
        badge: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/40',
      },
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      actionText: '공문서·교재 서식 상담',
      onAction: () => onOpenModal('inquiry'),
    },
    {
      stepNum: '04',
      tag: '보안·전수 검수',
      title: '보안 & 전수 검수',
      points: [
        '작업 완료 즉시 원본 데이터 영구 파기',
        '2단계 교차 전수 검수로 오탈자 제로'
      ],
      highlightChip: '표준 NDA 체결 · 폐쇄망 안전 작업',
      theme: {
        accent: 'text-purple-400',
        activeBorder: 'border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.3)]',
        border: 'border-purple-500/30',
        bg: 'from-purple-500/20 via-[#0B1528] to-[#081020]',
        badge: 'bg-purple-400/15 text-purple-300 border-purple-400/40',
      },
      icon: <Lock className="w-5 h-5 text-purple-400" />,
      actionText: '보안 정책 및 무료 샘플 신청',
      onAction: () => onOpenModal('sample'),
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 md:pt-32 pb-16 bg-[#060B19] text-white overflow-hidden font-sans">
      {/* 3D Electric Blue Fluid Petals */}
      <BlueBloomTop />
      <BlueBloomBottom />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center relative z-10 w-full">
        
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs sm:text-sm font-bold text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
          <span>PDF·스캔본 → 정품 한글(HWP) 정밀 전산화 전문</span>
        </div>

        {/* Main Headline: Bold, high contrast, punchy */}
        <h1 className="text-[2.2rem] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5rem] font-black tracking-tight leading-[1.12] mb-4 text-white drop-shadow-md">
          PDF·스캔 문서를 완벽한
          <br />
          <span className="text-[#38BDF8] drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]">
            한글(HWP) 파일로 복원
          </span>
        </h1>

        {/* Short, bold 1-line description: Exactly what this place does */}
        <p className="text-zinc-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-7 font-bold leading-relaxed">
          복잡한 수식, 뭉개진 도형, 깨진 표까지 원본 그대로 타이핑·조판해 드립니다.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <button
            onClick={() => onOpenModal('sample')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0066EE] hover:bg-[#0052cc] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#0066EE]/40 hover:shadow-[#0066EE]/60 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>무료 샘플 3쪽 받아보기</span>
          </button>

          <button
            onClick={() => onOpenModal('inquiry')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-sm sm:text-base active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>간편 외주 견적 문의</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* 3 Core Trust Badges: High contrast */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm font-semibold text-zinc-300 mb-10">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white">샘플 테스트 비용 0원</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white">수정 가능한 정품 HWP/HWPX</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white">비밀유지(NDA) 및 원본 즉시 파기</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4-COLUMN CORE FEATURE INTERACTIVE PANELS (High Contrast, Ultra-clean, Minimal Text) */}
        {/* ========================================================================= */}
        <div className="max-w-6xl mx-auto mb-8">
          
          {/* Desktop & Tablet: 4 Expandable Cards */}
          <div className="hidden md:flex gap-3.5 h-[360px] lg:h-[380px] w-full text-left">
            {columns.map((col, idx) => {
              const isActive = activeColumn === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveColumn(idx)}
                  onClick={() => setActiveColumn(idx)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 ease-out border backdrop-blur-md flex flex-col justify-between p-6 select-none ${
                    isActive
                      ? `flex-[2.6] bg-gradient-to-b ${col.theme.bg} ${col.theme.activeBorder}`
                      : `flex-1 bg-[#0A1324]/85 hover:bg-[#0D1A33] ${col.theme.border} hover:border-white/40`
                  }`}
                >
                  {/* Top Content */}
                  <div className="relative z-10">
                    {/* Header Row: Step Number & Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-black text-white">
                          {col.stepNum}
                        </span>
                        <span className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full border ${col.theme.badge}`}>
                          {col.tag}
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/10 border border-white/15">
                        {col.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl lg:text-2xl font-black tracking-tight mb-3 transition-colors ${
                      isActive ? col.theme.accent : 'text-white'
                    }`}>
                      {col.title}
                    </h3>

                    {/* Bullet Points: Ultra concise, highly readable */}
                    <ul className="space-y-1.5 text-xs lg:text-sm text-zinc-100 font-medium">
                      {col.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className={`shrink-0 mt-1 w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#38BDF8]' : 'bg-zinc-400'}`} />
                          <span className="leading-snug text-white font-semibold">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Active Panel: Highlight Chip & Quick Action Button */}
                  <div className={`relative z-10 transition-all duration-300 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none hidden'
                  }`}>
                    {/* Highlight Chip */}
                    <div className="mb-3 px-3 py-1.5 rounded-lg bg-black/40 border border-white/20 text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                      <span>{col.highlightChip}</span>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        col.onAction();
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer group"
                    >
                      <span>{col.actionText}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Inactive Panel Hint */}
                  {!isActive && (
                    <div className="relative z-10 flex items-center justify-between text-xs text-zinc-300 font-bold pt-3 border-t border-white/15">
                      <span>펼쳐보기</span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile View: 4 Clean Tabs + Active Card */}
          <div className="md:hidden text-left space-y-3">
            {/* 4 Tabs */}
            <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-white/10 border border-white/15">
              {columns.map((col, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveColumn(idx)}
                  className={`py-2 px-1 rounded-lg text-xs font-black transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                    activeColumn === idx
                      ? 'bg-[#0066EE] text-white shadow-md'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span className="font-mono text-xs font-black leading-none opacity-80">{col.stepNum}</span>
                  <span className="text-[11px] font-bold leading-none truncate max-w-full">
                    {col.title.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile Active Card */}
            {(() => {
              const activeCol = columns[activeColumn];
              return (
                <div className={`relative rounded-2xl overflow-hidden border p-5 bg-[#0B1528] ${activeCol.theme.activeBorder}`}>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-black text-white">
                          {activeCol.stepNum}
                        </span>
                        <span className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full border ${activeCol.theme.badge}`}>
                          {activeCol.tag}
                        </span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-white/10">
                        {activeCol.icon}
                      </div>
                    </div>

                    <h3 className={`text-xl font-black mb-3 ${activeCol.theme.accent}`}>
                      {activeCol.title}
                    </h3>

                    <ul className="space-y-1.5 text-xs text-white font-medium mb-4">
                      {activeCol.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                          <span className="leading-snug text-white font-semibold">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-3 px-3 py-1.5 rounded-lg bg-black/40 border border-white/20 text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                      <span>{activeCol.highlightChip}</span>
                    </div>

                    <button
                      onClick={activeCol.onAction}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#0066EE] hover:bg-[#0052cc] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>{activeCol.actionText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
