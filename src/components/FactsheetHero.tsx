import { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ZoomIn, 
  ArrowRightLeft,
  CheckCircle2
} from 'lucide-react';

interface FactsheetHeroProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function FactsheetHero({ onOpenModal }: FactsheetHeroProps) {
  const [activeTab, setActiveTab] = useState<'hwp' | 'compare'>('hwp');
  const [zoomLevel, setZoomLevel] = useState<'100%' | '200%'>('100%');

  return (
    <section className="relative pt-24 md:pt-32 pb-10 md:pb-16 bg-[#212121] text-white overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center relative z-10">
        
        {/* Top Fact Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 text-zinc-200 text-xs font-semibold mb-5">
          <span className="w-1.5 h-1.5 bg-[#008CFF]" />
          <span>문서 포맷 완벽 변환 &amp; 수식·도판 고화질 조판 솔루션</span>
        </div>

        {/* Main Title (Cold Facts) */}
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.4rem] font-extrabold tracking-tight leading-[1.15] mb-4 text-white">
          PDF → HWP 완벽 변환
          <br />
          <span className="text-[#008CFF]">모든 문서를 원하는 형식과 템플릿으로</span>
        </h1>

        {/* Core Fact Summary */}
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-semibold max-w-3xl mx-auto mb-7 tracking-tight text-center">
          PDF를 편집 가능한 정품 HWP로 완벽 변환 · 수학/과학 수식 정밀 타이핑 · 원본 도판 고화질 업스케일 · 맞춤 템플릿 출력
        </p>

        {/* Quick Format Conversion Matrix Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-8 text-xs font-mono font-bold">
          <span className="px-2.5 py-1 bg-zinc-800 text-[#008CFF] border border-[#008CFF]/60">PDF → HWP / HWPX (메인)</span>
          <span className="px-2.5 py-1 bg-zinc-800 text-zinc-200 border border-zinc-700">스캔본 / 이미지 → HWP 전산화</span>
          <span className="px-2.5 py-1 bg-zinc-800 text-zinc-200 border border-zinc-700">수학·과학 수식 오차 0%</span>
          <span className="px-2.5 py-1 bg-zinc-800 text-[#008CFF] border border-[#008CFF]/60">도판 1:1 고화질 벡터 업스케일</span>
          <span className="px-2.5 py-1 bg-zinc-800 text-zinc-200 border border-zinc-700">학원·출판사 지정 양식 1:1 완결</span>
        </div>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => onOpenModal('inquiry')}
            className="w-full sm:w-auto min-w-[220px] sm:min-w-[240px] h-[48px] md:h-[56px] bg-[#f9f9f9] text-black rounded-sm font-bold shadow-md hover:bg-zinc-100 active:scale-[0.98] transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>문서 변환 외주 문의</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
          <button
            onClick={() => onOpenModal('sample')}
            className="w-full sm:w-auto min-w-[220px] sm:min-w-[240px] h-[48px] md:h-[56px] bg-[#111111] text-white rounded-sm font-bold border border-zinc-700 shadow-md hover:bg-zinc-800 active:scale-[0.98] transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#008CFF]" />
            <span>샘플 3문항 무료 테스트</span>
          </button>
        </div>

        {/* Workstation Frame */}
        <div className="relative mx-auto max-w-5xl text-left">
          <div className="bg-[#18181b] border border-zinc-700 shadow-2xl overflow-hidden">
            
            {/* Top Bar */}
            <div className="bg-[#121214] px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#008CFF] font-bold">[ENGINE]</span>
                <span className="font-mono text-zinc-300">
                  INPUT: 원본.pdf / 원본.jpg → OUTPUT: 최종_출판양식.hwp
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-zinc-800 p-0.5 rounded-xs flex font-semibold">
                  <button
                    onClick={() => setActiveTab('hwp')}
                    className={`px-3 py-1 transition-all ${
                      activeTab === 'hwp' ? 'bg-[#008CFF] text-white' : 'text-zinc-400'
                    }`}
                  >
                    최종 HWP 완성본
                  </button>
                  <button
                    onClick={() => setActiveTab('compare')}
                    className={`px-3 py-1 transition-all ${
                      activeTab === 'compare' ? 'bg-[#008CFF] text-white' : 'text-zinc-400'
                    }`}
                  >
                    단순 OCR 추출본 ↔ 정밀 조판 완성본
                  </button>
                </div>

                <button
                  onClick={() => setZoomLevel(zoomLevel === '100%' ? '200%' : '100%')}
                  className="hidden md:flex items-center gap-1 px-2 py-1 bg-zinc-800 text-zinc-300 text-[11px]"
                >
                  <ZoomIn className="w-3 h-3 text-[#008CFF]" />
                  <span>{zoomLevel}</span>
                </button>
              </div>
            </div>

            {/* Content Display */}
            <div className="p-4 sm:p-6 bg-[#0e1014] min-h-[300px]">
              {activeTab === 'hwp' ? (
                <div className="max-w-3xl mx-auto bg-white text-zinc-900 p-6 shadow-md border border-zinc-300 font-serif">
                  
                  <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4 font-sans text-xs">
                    <span className="font-bold text-black text-sm">[PDF → HWP 정밀 변환 결과물]</span>
                    <span className="font-bold text-[#008CFF]">수식 오탈자 0% · 도판 벡터 업스케일 · 템플릿 매칭</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-black text-white text-xs font-bold flex items-center justify-center shrink-0 font-sans">
                        01
                      </span>
                      <div className="text-sm leading-relaxed text-zinc-900 font-sans">
                        양의 실수 <span className="font-serif italic font-bold">t</span>에 대하여 곡선{' '}
                        <span className="font-serif italic font-bold">y = t³ ln(x - t)</span>와 곡선{' '}
                        <span className="font-serif italic font-bold">y = 2e^(x - 1)</span>이 오직 한 점에서 만날 때, 정적분의 값을 구하시오.
                      </div>
                    </div>

                    {/* Formula */}
                    <div className="p-2.5 bg-zinc-50 border border-zinc-200 text-center font-mono text-sm text-zinc-900">
                      <span className="font-serif">
                        I = ∫ <sub className="text-xs">0</sub><sup className="text-xs">1</sup>{' '}
                        <span className="border-b border-zinc-900 px-1">ln(1 + x)</span> / (1 + x²){' '}
                        dx = <span className="font-bold text-[#008CFF]">π / 8 · ln(2)</span>
                      </span>
                    </div>

                    {/* Plot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-1 font-sans">
                      <div className="h-32 bg-zinc-50 border border-zinc-200 flex flex-col items-center justify-center p-2">
                        <svg className="w-full h-full max-w-[170px]" viewBox="0 0 200 120" fill="none">
                          <line x1="20" y1="100" x2="190" y2="100" stroke="#3f3f46" strokeWidth="1.5" />
                          <line x1="30" y1="110" x2="30" y2="10" stroke="#3f3f46" strokeWidth="1.5" />
                          <path d="M 35 90 C 60 80, 90 60, 150 20" stroke="#008CFF" strokeWidth="2" />
                          <circle cx="118" cy="55" r="3.5" fill="#ef4444" />
                          <text x="126" y="55" fontSize="10" fill="#18181b" fontWeight="bold">접점 P</text>
                        </svg>
                        <span className="text-[10px] font-bold text-[#008CFF] mt-1">
                          [원본 도판 기반 1:1 고화질 벡터 업스케일링]
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>① e / 2</div>
                        <div>② e</div>
                        <div>③ 2e</div>
                        <div>④ e² / 2</div>
                        <div className="font-bold text-[#008CFF]">⑤ e² (정답)</div>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-sans">
                  <div className="bg-[#181a20] p-4 border border-zinc-700">
                    <div className="font-bold text-red-400 mb-2 pb-1 border-b border-zinc-700 flex justify-between">
                      <span>단순 자동 변환기 (기계적 OCR)</span>
                      <span>미완성 산출물</span>
                    </div>
                    <ul className="space-y-1.5 text-zinc-400 text-[11px]">
                      <li>• 복잡 수식 및 극한/적분 기호 인식 오류 빈발</li>
                      <li>• 도판을 저화질 비트맵으로 단순 캡처 (인쇄 번짐)</li>
                      <li>• 고객사 양식 미적용 (수식 폰트·크기 제각각)</li>
                      <li>• 사용자가 일일이 수작업 재편집해야 하는 미완성본</li>
                    </ul>
                  </div>

                  <div className="bg-[#142033] p-4 border border-[#008CFF]/50">
                    <div className="font-bold text-[#008CFF] mb-2 pb-1 border-b border-zinc-700 flex justify-between">
                      <span>전문 조판 솔루션 (본 서비스)</span>
                      <span>100% 완결형 산출물</span>
                    </div>
                    <ul className="space-y-1.5 text-zinc-200 text-[11px]">
                      <li>• 수학·과학 전문 에디터 검수로 수식 오류 0%</li>
                      <li>• 원본 도판 1:1 고화질 무손실 벡터 업스케일링</li>
                      <li>• 고객사 지정 전용 템플릿(장평/자간/단구분) 완벽 매칭</li>
                      <li>• 추가 수정 없이 시험 및 교재 인쇄 즉시 투입 가능</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Status bar */}
              <div className="mt-4 pt-2.5 border-t border-zinc-800 flex flex-wrap items-center justify-between text-xs text-zinc-400 font-sans">
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold">사양:</span>
                  <span>PDF → HWP 메인 변환</span>
                  <span>|</span>
                  <span>수식 100% 전산화</span>
                  <span>|</span>
                  <span>도판 벡터 업스케일</span>
                  <span>|</span>
                  <span>고객 템플릿 매칭</span>
                </div>
                <div className="text-[#008CFF] font-bold">철저한 검수 · 마감 일정 맞춤 신속 납품</div>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Core Facts Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-8 max-w-4xl mx-auto pt-6 border-t border-zinc-800 font-sans text-left">
          <div className="p-3 bg-white/5 border border-white/10">
            <div className="text-xs text-zinc-400 font-medium">메인 업무</div>
            <div className="text-sm font-bold text-[#008CFF] mt-1">PDF → HWP 100% 변환</div>
          </div>
          <div className="p-3 bg-white/5 border border-white/10">
            <div className="text-xs text-zinc-400 font-medium">수식 입력</div>
            <div className="text-sm font-bold text-white mt-1">수학·과학 수식 오차 0%</div>
          </div>
          <div className="p-3 bg-white/5 border border-white/10">
            <div className="text-xs text-zinc-400 font-medium">도판 복원</div>
            <div className="text-sm font-bold text-[#008CFF] mt-1">원본 기반 고화질 업스케일</div>
          </div>
          <div className="p-3 bg-white/5 border border-white/10">
            <div className="text-xs text-zinc-400 font-medium">최종 산출물</div>
            <div className="text-sm font-bold text-white mt-1">지정 템플릿 완결본 납품</div>
          </div>
        </div>

      </div>
    </section>
  );
}
