import { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ZoomIn, 
  FileText, 
  Layers
} from 'lucide-react';
import { BlueBloomTop, BlueBloomBottom } from './BlueBloomArtwork';

interface TemplateSlide1HeroProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function TemplateSlide1Hero({ onOpenModal }: TemplateSlide1HeroProps) {
  const [activeTab, setActiveTab] = useState<'hwp' | 'compare'>('hwp');
  const [zoomLevel, setZoomLevel] = useState<'100%' | '200%'>('100%');

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 md:pt-36 pb-16 bg-[#060B19] text-white overflow-hidden font-sans">
      {/* 3D Electric Blue Fluid Petals from Template Slide 1 */}
      <BlueBloomTop />
      <BlueBloomBottom />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center relative z-10 w-full">
        
        {/* Top Label (Matches MangoBoard top label) */}
        <div className="mb-4">
          <span className="text-sm md:text-base font-bold text-[#38BDF8] tracking-wider uppercase">
            문서 변환 &amp; 수식 조판 솔루션
          </span>
        </div>

        {/* Main Giant Title (Matches Slide 1 "PPT 디자인을 하다.") */}
        <h1 className="text-[2.2rem] sm:text-[3.5rem] md:text-[4.8rem] lg:text-[5.4rem] font-extrabold tracking-tight leading-[1.12] mb-5 text-white">
          PDF → HWP 완벽 변환.
          <br />
          <span className="text-[#38BDF8]">모든 문서를 원하는 형식과 템플릿으로.</span>
        </h1>

        {/* Subtitle (Matches Slide 1 "전에 없던 스타일. 이것은 혁신.") */}
        <p className="text-zinc-300 text-sm sm:text-lg md:text-2xl font-semibold max-w-3xl mx-auto mb-8 tracking-tight">
          수식 정밀 타이핑 · 캡처 사진/저화질 이미지 고화질 업스케일 · 맞춤 템플릿 완결
        </p>

        {/* Pill Button Badges (Matches Slide 1 "발표 김리아" pill shape) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14">
          <button
            onClick={() => onOpenModal('sample')}
            className="px-7 py-3 rounded-full bg-[#0066EE] hover:bg-[#0052cc] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#0066EE]/40 hover:shadow-[#0066EE]/60 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>샘플 3문항 무료 테스트</span>
          </button>

          <button
            onClick={() => onOpenModal('inquiry')}
            className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>외주 도입 문의</span>
            <ArrowRight className="w-4 h-4 text-zinc-300" />
          </button>
        </div>

        {/* Interactive Workstation Display (Full Content Preserved) */}
        <div className="relative mx-auto max-w-5xl text-left">
          <div className="bg-[#0D1527] border border-blue-500/30 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md">
            
            {/* Top Toolbar */}
            <div className="bg-[#09101F] px-4 py-3 border-b border-blue-500/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[#38BDF8] font-bold font-mono ml-2">INPUT: 원본.pdf</span>
                <span className="text-zinc-500">→</span>
                <span className="text-white font-bold font-mono">OUTPUT: 최종_출판양식.hwp</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-[#131D33] p-0.5 rounded-full flex text-[11px] font-semibold border border-white/10">
                  <button
                    onClick={() => setActiveTab('hwp')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeTab === 'hwp' ? 'bg-[#0066EE] text-white shadow' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    최종 HWP 완성본
                  </button>
                  <button
                    onClick={() => setActiveTab('compare')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeTab === 'compare' ? 'bg-[#0066EE] text-white shadow' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    단순 OCR 추출본 ↔ 정밀 조판 비교
                  </button>
                </div>

                <button
                  onClick={() => setZoomLevel(zoomLevel === '100%' ? '200%' : '100%')}
                  className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#131D33] text-zinc-300 text-[11px] hover:bg-[#1A2644]"
                >
                  <ZoomIn className="w-3 h-3 text-[#38BDF8]" />
                  <span>{zoomLevel}</span>
                </button>
              </div>
            </div>

            {/* Content Display */}
            <div className="p-4 sm:p-7 bg-[#080E1C] min-h-[300px]">
              {activeTab === 'hwp' ? (
                <div className="max-w-3xl mx-auto bg-white text-zinc-900 rounded-lg p-6 sm:p-7 shadow-xl border border-zinc-200 font-serif">
                  
                  <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4 font-sans text-xs">
                    <span className="font-bold text-black text-sm">[PDF → HWP 정밀 변환 결과물]</span>
                    <span className="font-bold text-[#0066EE]">수식 오탈자 0% · 도판 벡터 업스케일 · 템플릿 매칭</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-black text-white text-xs font-bold flex items-center justify-center shrink-0 font-sans rounded-xs">
                        01
                      </span>
                      <div className="text-sm sm:text-base leading-relaxed text-zinc-900 font-sans">
                        양의 실수 <span className="font-serif italic font-bold">t</span>에 대하여 곡선{' '}
                        <span className="font-serif italic font-bold">y = t³ ln(x - t)</span>와 곡선{' '}
                        <span className="font-serif italic font-bold">y = 2e^(x - 1)</span>이 오직 한 점에서 만날 때, 정적분의 값을 구하시오.
                      </div>
                    </div>

                    {/* Formula */}
                    <div className="p-2.5 rounded-sm bg-zinc-50 border border-zinc-200 text-center font-mono text-sm sm:text-base text-zinc-900">
                      <span className="font-serif">
                        I = ∫ <sub className="text-xs">0</sub><sup className="text-xs">1</sup>{' '}
                        <span className="border-b border-zinc-900 px-1">ln(1 + x)</span> / (1 + x²){' '}
                        dx = <span className="font-bold text-[#0066EE]">π / 8 · ln(2)</span>
                      </span>
                    </div>

                    {/* Vector Plot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-1 font-sans">
                      <div className="h-32 rounded-sm bg-zinc-50 border border-zinc-200 flex flex-col items-center justify-center p-2">
                        <svg className="w-full h-full max-w-[170px]" viewBox="0 0 200 120" fill="none">
                          <line x1="20" y1="100" x2="190" y2="100" stroke="#3f3f46" strokeWidth="1.5" />
                          <line x1="30" y1="110" x2="30" y2="10" stroke="#3f3f46" strokeWidth="1.5" />
                          <path d="M 35 90 C 60 80, 90 60, 150 20" stroke="#0066EE" strokeWidth="2.5" />
                          <path d="M 50 98 C 90 95, 120 75, 175 35" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                          <circle cx="118" cy="55" r="3.5" fill="#ef4444" />
                          <text x="126" y="55" fontSize="10" fill="#18181b" fontWeight="bold">접점 P</text>
                        </svg>
                        <span className="text-[10px] font-bold text-[#0066EE] mt-1">
                          [캡처 사진/저화질 원본 이미지 1:1 고화질 업스케일링]
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm pl-2">
                        <div>① e / 2</div>
                        <div>② e</div>
                        <div>③ 2e</div>
                        <div>④ e² / 2</div>
                        <div className="font-bold text-[#0066EE]">⑤ e² (정답)</div>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="bg-[#121B30] p-4 rounded-lg border border-red-500/30">
                    <div className="font-bold text-red-400 mb-2 pb-1.5 border-b border-white/10 flex justify-between">
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

                  <div className="bg-[#101D38] p-4 rounded-lg border border-[#0066EE]/60">
                    <div className="font-bold text-[#38BDF8] mb-2 pb-1.5 border-b border-white/10 flex justify-between">
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
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-zinc-400 font-sans">
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
                <div className="text-[#38BDF8] font-bold">철저한 검수 · 마감 일정 맞춤 신속 납품</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
