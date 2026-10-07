import { useState } from 'react';
import { Check, Sparkles, FileText, ZoomIn } from 'lucide-react';

export default function QualityShowcase() {
  const [activeTab, setActiveTab] = useState<'equation' | 'geometry'>('equation');

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10 text-left space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>조판 품질 직접 확인하기</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            스캔본 원본 vs 에이브로 정밀 HWP 조판
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            일반 OCR로는 깨져버리는 복잡한 수식과 기하 도형을 출판 규격 HWP로 완벽하게 복원합니다.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveTab('equation')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'equation'
                ? 'bg-sky-500 text-white font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            복합 분수·적분 수식
          </button>
          <button
            onClick={() => setActiveTab('geometry')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'geometry'
                ? 'bg-sky-500 text-white font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            기하·함수 벡터 도형
          </button>
        </div>
      </div>

      {/* Comparison Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Before: Raw Scan */}
        <div className="rounded-xl border border-rose-900/40 bg-slate-950/90 p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-rose-900/30 pb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              원본 스캔본 / 손글씨 (OCR 인식 불가)
            </span>
            <span className="text-[11px] text-slate-500 font-mono">해상도 저하 · 서식 왜곡</span>
          </div>

          <div className="min-h-[220px] rounded-lg bg-slate-900/60 p-5 flex flex-col justify-center items-center text-center space-y-3 font-serif border border-dashed border-rose-900/30">
            {activeTab === 'equation' ? (
              <div className="text-slate-400 opacity-70 filter blur-[0.3px] select-none space-y-2">
                <p className="text-xs text-rose-300/80">[흐릿한 인쇄물 스캔 원본]</p>
                <p className="text-base sm:text-lg italic line-through decoration-rose-500/50">
                  f(x) = ∫ (3x² - 2x + 1) / √(x²+4) dx  (※ 글자 뭉개짐)
                </p>
                <p className="text-xs text-slate-500">기존 자동 OCR 변환기 사용 시 기호 깨짐 및 누락 발생</p>
              </div>
            ) : (
              <div className="text-slate-400 opacity-70 select-none space-y-2">
                <p className="text-xs text-rose-300/80">[삐뚤빼뚤한 손그림 / 스캔 도판]</p>
                <div className="w-32 h-24 border-2 border-dashed border-slate-600 rounded flex items-center justify-center text-xs text-slate-500 mx-auto">
                  타원 & 접선 (해상도 깨짐)
                </div>
                <p className="text-xs text-slate-500">확대 인쇄 시 격자 번짐 및 각도 오차 발생</p>
              </div>
            )}
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-mono">
            ※ 스캔 이미지 단순 삽입 시 파일 용량 급증 및 인쇄 번짐이 발생하며, 한글 수식 표준 타이핑을 거쳐야 원고 수정과 2단 조판 배치가 가능합니다.
          </p>
        </div>

        {/* After: AVRO Precision HWP */}
        <div className="rounded-xl border border-sky-500/40 bg-sky-950/20 p-5 space-y-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-sky-500/20 pb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              에이브로 정밀 HWP 조판 결과물
            </span>
            <span className="text-[11px] text-sky-300 font-mono font-semibold">100% 한글 수식 표준 규격</span>
          </div>

          <div className="min-h-[220px] rounded-lg bg-white text-slate-900 p-6 flex flex-col justify-center space-y-3 shadow-inner">
            {activeTab === 'equation' ? (
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="font-bold font-serif text-sm text-sky-900 shrink-0">12.</span>
                  <div className="text-sm font-serif leading-relaxed text-slate-900">
                    함수 <span className="italic font-serif">f(x)</span>에 대하여{' '}
                    <span className="inline-block px-2 py-0.5 rounded bg-sky-50 border border-sky-200 font-serif font-semibold text-sky-950 text-sm">
                      lim<sub>x→2</sub> &#123; f(x) - 4 &#125; / (x - 2) = 5
                    </span>{' '}
                    일 때, 곡선 <span className="italic font-serif">y = f(x)</span> 위의 점{' '}
                    <span className="font-serif">(2, 4)</span>에서의 접선의 방정식은?
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-serif pt-2 text-slate-700 border-t border-slate-200">
                  <div>① y = 5x - 6</div>
                  <div>② y = 5x - 4</div>
                  <div>③ y = 4x - 3</div>
                  <div>④ y = 3x - 2</div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-slate-900">
                    <span className="font-bold text-sky-900 mr-2">08.</span>
                    좌표평면에서 타원 <span className="italic font-serif">x²/16 + y²/9 = 1</span>과 
                    직선 <span className="italic font-serif">y = 2x + k</span>가 접할 때의 양수 <span className="italic font-serif">k</span>의 값은?
                  </div>
                  {/* Clean SVG Vector Illustration */}
                  <div className="w-28 h-20 bg-slate-50 rounded border border-slate-300 flex items-center justify-center p-2 shrink-0">
                    <svg viewBox="0 0 100 70" className="w-full h-full stroke-slate-800 fill-none text-[8px]">
                      <line x1="5" y1="35" x2="95" y2="35" strokeWidth="0.8" stroke="#94a3b8" />
                      <line x1="50" y1="5" x2="50" y2="65" strokeWidth="0.8" stroke="#94a3b8" />
                      <ellipse cx="50" cy="35" rx="36" ry="22" strokeWidth="1.2" stroke="#0284c7" />
                      <line x1="15" y1="62" x2="85" y2="12" strokeWidth="1.2" stroke="#e11d48" />
                    </svg>
                  </div>
                </div>
                <div className="text-[11px] text-sky-800 font-sans font-medium bg-sky-50 px-2.5 py-1 rounded">
                  ✓ 지오지브라 & 일러스트레이터 고화질 인쇄용 무손실 벡터 재작도
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-sky-300 font-medium pt-1 font-mono">
            <Check className="w-4 h-4 text-sky-400 shrink-0" />
            <span>한글(HWP) 파일 원본 납품 · 글꼴/자간/행간 수정 및 시험지 문제 재배열 100% 가능</span>
          </div>
        </div>
      </div>
    </div>
  );
}
