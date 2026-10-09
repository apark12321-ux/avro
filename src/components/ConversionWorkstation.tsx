import { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  FileCheck,
  Calculator,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import QuickQuoteModal from './QuickQuoteModal';

interface ConversionWorkstationProps {
  onOpenSampleModal?: () => void;
}

export default function ConversionWorkstation({ onOpenSampleModal }: ConversionWorkstationProps) {
  const [isQuickQuoteOpen, setIsQuickQuoteOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      title: '입체도형 & 교점',
      before: '저해상도 비트맵으로 서체·점선 왜곡',
      after: '300dpi 선명 복원 및 한글 수식 1:1 조판'
    },
    {
      title: '직선·선분 기호',
      before: '특수기호 뭉개짐 및 출처 번호 혼재',
      after: '한글 수식 표준 입력 및 문항 순번 재정렬'
    },
    {
      title: '분수식 & 중점',
      before: '분수식 깨짐 및 영문 이탤릭 불일치',
      after: '공식 분수(over) 정밀 조판 및 수직선 최적화'
    },
    {
      title: '치수선 길이 계산',
      before: '지시선 스캔 노이즈 및 단위 표기 뭉개짐',
      after: '노이즈 완전 제거 및 풀이 공간 규격 배치'
    }
  ];

  return (
    <section id="conversion-sample" className="py-16 md:py-24 bg-[#091024] text-white font-sans relative overflow-hidden border-t border-blue-900/40">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0066EE]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066EE]/20 border border-[#0066EE]/40 text-[#38BDF8] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>정밀 변환 워크스테이션</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
            불규칙한 교재 캡처 원고를 <span className="text-[#38BDF8]">완성형 HWP 교재</span>로
          </h2>

          <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            수식 한글 표준 입력, 300dpi 도판 업스케일, 고객사 전용 양식 일치까지 한 번에 완성합니다.
          </p>

          {/* Quick Action Bar including Quick Quote & Sample Request */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsQuickQuoteOpen(true)}
              className="px-6 py-2.5 rounded-full bg-[#0066EE] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Calculator className="w-4 h-4 text-[#38BDF8]" />
              <span>간편 견적 (Quick Quote)</span>
            </button>

            {onOpenSampleModal && (
              <button
                onClick={onOpenSampleModal}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>3문항 무료 샘플 신청</span>
              </button>
            )}
          </div>
        </div>

        {/* Visual Before vs After Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-10 text-left">
          
          {/* Before */}
          <div className="bg-[#0D1527] rounded-2xl border border-amber-500/30 p-5 sm:p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-black text-amber-300 tracking-wider uppercase">
                  BEFORE: 접수 원고 상태
                </span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-amber-950/50 text-amber-200 border border-amber-500/30 font-semibold">
                재편집 불가
              </span>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>분수·근호 등 복잡 수식의 비트맵 뭉개짐</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>도판 해상도 저하 및 책 접힘 그림자 노이즈</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>출처별 폰트 불일치 및 기존 문항 번호 혼재</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-[#0A1633] rounded-2xl border border-blue-500/40 p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-400/20">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-xs font-black text-[#38BDF8] tracking-wider uppercase">
                  AFTER: 1:1 완결 납품본
                </span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#0066EE] text-white font-bold">
                정품 HWP 납품
              </span>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>한글 공식 수식 코드로 1:1 정밀 변환 (자유로운 수정·재활용)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>도판 300dpi 인쇄용 고화질 업스케일 &amp; 노이즈 제거</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>고객사 전용 템플릿(글꼴·배점·2단 레이아웃) 맞춤 반영</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Case Studies (Compact Selector) */}
        <div className="max-w-5xl mx-auto bg-[#0F1A34] rounded-2xl border border-blue-500/20 p-5 sm:p-6 text-left">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
              대표 문항 변환 사례 4선
            </span>
            <span className="text-[11px] text-zinc-400">
              클릭하여 유형별 해결 결과 확인
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedCase(i)}
                className={`p-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                  selectedCase === i
                    ? 'bg-[#0066EE] text-white shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                0{i + 1}. {c.title}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-black/30 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[11px] text-amber-400 font-bold block mb-1">원고 문제점:</span>
              <p className="text-zinc-300">{cases[selectedCase].before}</p>
            </div>
            <div>
              <span className="text-[11px] text-[#38BDF8] font-bold block mb-1">조판 해결:</span>
              <p className="text-zinc-200">{cases[selectedCase].after}</p>
            </div>
          </div>
        </div>

        {/* Reassurance Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
          <span>보안 서약(NDA) 준수 · 고객사 상호 및 원본 정보 비노출 원칙</span>
        </div>

      </div>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuickQuoteOpen}
        onClose={() => setIsQuickQuoteOpen(false)}
      />
    </section>
  );
}
