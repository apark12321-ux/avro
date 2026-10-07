import { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ZoomIn, 
  FileText, 
  CheckCircle2
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
        
        {/* Top Label */}
        <div className="mb-4">
          <span className="text-sm md:text-base font-bold text-[#38BDF8] tracking-wider uppercase">
            문서 변환 &amp; 수식 조판 솔루션
          </span>
        </div>

        {/* Main Giant Title */}
        <h1 className="text-[2.2rem] sm:text-[3.5rem] md:text-[4.8rem] lg:text-[5.4rem] font-extrabold tracking-tight leading-[1.12] mb-5 text-white">
          PDF → HWP 완벽 변환.
          <br />
          <span className="text-[#38BDF8]">모든 문서를 원하는 형식과 템플릿으로.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-300 text-sm sm:text-lg md:text-2xl font-semibold max-w-3xl mx-auto mb-8 tracking-tight">
          수식 정밀 타이핑 · 캡처 사진/저화질 이미지 고화질 업스케일 · 맞춤 템플릿 완결
        </p>

        {/* Pill Button Badges */}
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
            <span>외주 작업 문의</span>
            <ArrowRight className="w-4 h-4 text-zinc-300" />
          </button>
        </div>

        {/* Interactive Workstation Display (Reflecting [선별 원본] -> [빈출 유형 1회]) */}
        <div className="relative mx-auto max-w-5xl text-left">
          <div className="bg-[#0D1527] border border-blue-500/30 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md">
            
            {/* Top Toolbar */}
            <div className="bg-[#09101F] px-4 py-3 border-b border-blue-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[#38BDF8] font-bold font-mono ml-2">INPUT: 교재 문항 선별본 (스캔/캡처)</span>
                <span className="text-zinc-500">→</span>
                <span className="text-white font-bold font-mono">OUTPUT: 중1-2_1단원_01_빈출유형_1회.hwp</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-[#131D33] p-0.5 rounded-full flex text-[11px] font-semibold border border-white/10">
                  <button
                    onClick={() => setActiveTab('hwp')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeTab === 'hwp' ? 'bg-[#0066EE] text-white shadow' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    최종 HWP 완성본 (빈출유형 1회)
                  </button>
                  <button
                    onClick={() => setActiveTab('compare')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeTab === 'compare' ? 'bg-[#0066EE] text-white shadow' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    선별 원본 캡처 ↔ 최종 HWP 비교
                  </button>
                </div>

                <button
                  onClick={() => setZoomLevel(zoomLevel === '100%' ? '200%' : '100%')}
                  className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#131D33] text-zinc-300 text-[11px] hover:bg-[#1A2644] cursor-pointer"
                >
                  <ZoomIn className="w-3 h-3 text-[#38BDF8]" />
                  <span>{zoomLevel}</span>
                </button>
              </div>
            </div>

            {/* Content Display */}
            <div className="p-4 sm:p-7 bg-[#080E1C] min-h-[300px]">
              {activeTab === 'hwp' ? (
                /* Tab 1: Real Final Test Paper (빈출 유형 1회) */
                <div className="max-w-3xl mx-auto bg-white text-zinc-900 rounded-lg p-6 sm:p-8 shadow-2xl border border-zinc-200 font-serif">
                  
                  {/* Test Sheet Title & Score Box */}
                  <div className="relative border-b-2 border-black pb-3 mb-5 font-sans">
                    <div className="text-center">
                      <span className="text-xs font-semibold text-zinc-600 block tracking-tight">
                        2026년 2학기 중간고사 대비
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mt-0.5">
                        빈출 유형 1회
                      </h2>
                    </div>

                    {/* Score Box on Right */}
                    <div className="absolute right-0 top-0 border border-black text-[11px] w-20 text-center font-bold">
                      <div className="bg-zinc-100 py-0.5 border-b border-black text-[10px]">점수(개)</div>
                      <div className="py-2 text-sm font-black text-[#0066EE]">/ 15</div>
                    </div>

                    {/* Student Info Bar */}
                    <div className="grid grid-cols-4 border border-black mt-3 text-xs text-center font-bold">
                      <div className="py-1 border-r border-black bg-zinc-50">학년: 중1</div>
                      <div className="py-1 border-r border-black bg-zinc-50">단원명: Ⅰ. 기본도형</div>
                      <div className="py-1 border-r border-black">학교명:</div>
                      <div className="py-1">성명:</div>
                    </div>
                  </div>

                  {/* 2-Column Test Layout faithfully matching PDF Page 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs sm:text-sm">
                    
                    {/* Column 1 */}
                    <div className="space-y-6">
                      
                      {/* Problem 01 */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="font-black text-black text-sm shrink-0">01</span>
                          <p className="text-zinc-900 leading-snug">
                            오른쪽 그림과 같은 입체도형에서 교점의 개수를 <span className="font-serif italic font-bold">a</span>개, 교선의 개수를 <span className="font-serif italic font-bold">b</span>개라 할 때, <span className="font-serif italic font-bold">a + b</span>의 값은?
                          </p>
                        </div>

                        {/* 3D Prism Diagram (오각기둥 입체도형 고화질 벡터 업스케일) */}
                        <div className="flex justify-end pr-2 pt-1">
                          <div className="w-32 h-24 bg-zinc-50 rounded border border-zinc-200 p-1 flex items-center justify-center">
                            <svg className="w-full h-full max-w-[120px]" viewBox="0 0 120 90" fill="none">
                              {/* 3D prism facets */}
                              <polygon points="40,15 75,10 95,22 80,35 35,30" fill="#E0F2FE" stroke="#1E293B" strokeWidth="1.2" />
                              <polygon points="40,15 35,30 35,70 40,55" fill="#BAE6FD" stroke="#1E293B" strokeWidth="1.2" />
                              <polygon points="35,30 80,35 80,75 35,70" fill="#93C5FD" fillOpacity="0.4" stroke="#1E293B" strokeWidth="1.2" />
                              <polygon points="80,35 95,22 95,62 80,75" fill="#60A5FA" fillOpacity="0.4" stroke="#1E293B" strokeWidth="1.2" />
                              {/* Hidden dashed lines */}
                              <line x1="75" y1="10" x2="75" y2="50" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
                              <line x1="40" y1="55" x2="75" y2="50" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
                              <line x1="95" y1="62" x2="75" y2="50" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
                              {/* Bottom base lines */}
                              <line x1="40" y1="55" x2="35" y2="70" stroke="#1E293B" strokeWidth="1.2" />
                              <line x1="35" y1="70" x2="80" y2="75" stroke="#1E293B" strokeWidth="1.2" />
                              <line x1="80" y1="75" x2="95" y2="62" stroke="#1E293B" strokeWidth="1.2" />
                            </svg>
                          </div>
                        </div>

                        {/* Choices */}
                        <div className="grid grid-cols-5 text-[11px] pt-1">
                          <div>① 16</div>
                          <div>② 18</div>
                          <div>③ 20</div>
                          <div>④ 22</div>
                          <div>⑤ 24</div>
                        </div>
                      </div>

                      {/* Problem 02 */}
                      <div className="space-y-2 pt-2 border-t border-zinc-100">
                        <div className="flex items-start gap-2">
                          <span className="font-black text-black text-sm shrink-0">02</span>
                          <p className="text-zinc-900 leading-snug">
                            아래 그림과 같이 직선 <span className="font-serif italic font-bold">l</span> 위에 네 점 A, B, C, D가 있을 때, 다음 중 옳지 않은 것은?
                          </p>
                        </div>

                        {/* Line diagram */}
                        <div className="py-2 px-3 bg-zinc-50 rounded border border-zinc-200">
                          <svg className="w-full h-8" viewBox="0 0 240 30" fill="none">
                            <line x1="10" y1="15" x2="230" y2="15" stroke="#1E293B" strokeWidth="1.5" />
                            <polygon points="10,12 4,15 10,18" fill="#1E293B" />
                            <polygon points="230,12 236,15 230,18" fill="#1E293B" />
                            {/* Points A, B, C, D */}
                            <circle cx="45" cy="15" r="2.5" fill="#1E293B" />
                            <text x="42" y="27" fontSize="10" fontWeight="bold" fill="#1E293B">A</text>
                            <circle cx="95" cy="15" r="2.5" fill="#1E293B" />
                            <text x="92" y="27" fontSize="10" fontWeight="bold" fill="#1E293B">B</text>
                            <circle cx="145" cy="15" r="2.5" fill="#1E293B" />
                            <text x="142" y="27" fontSize="10" fontWeight="bold" fill="#1E293B">C</text>
                            <circle cx="195" cy="15" r="2.5" fill="#1E293B" />
                            <text x="192" y="27" fontSize="10" fontWeight="bold" fill="#1E293B">D</text>
                            <text x="228" y="10" fontSize="10" fontStyle="italic" fontWeight="bold" fill="#0066EE">l</text>
                          </svg>
                        </div>

                        {/* Choices with math symbol representation */}
                        <div className="space-y-1 text-[11px] font-sans">
                          <div className="flex justify-between">
                            <span>① 직선 AB = 직선 CD</span>
                            <span>② 선분 AD = 선분 DA</span>
                          </div>
                          <div className="flex justify-between">
                            <span>③ 반직선 BC = 반직선 BD</span>
                            <span>④ 반직선 AC = 반직선 BC</span>
                          </div>
                          <div>⑤ 직선 AB = 직선 CA</div>
                        </div>
                      </div>

                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                      
                      {/* Problem 06 */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="font-black text-black text-sm shrink-0">06</span>
                          <p className="text-zinc-900 leading-snug">
                            아래 그림에서 점 M은 <span className="font-serif">선분 AB</span>의 중점이고, 점 N은 <span className="font-serif">선분 AM</span>의 중점이다. 다음 중 옳지 않은 것은?
                          </p>
                        </div>

                        {/* Midpoint diagram */}
                        <div className="py-2 px-3 bg-zinc-50 rounded border border-zinc-200">
                          <svg className="w-full h-8" viewBox="0 0 240 30" fill="none">
                            <line x1="25" y1="15" x2="215" y2="15" stroke="#1E293B" strokeWidth="1.5" />
                            <circle cx="25" cy="15" r="2.5" fill="#1E293B" />
                            <text x="22" y="27" fontSize="10" fontWeight="bold" fill="#1E293B">A</text>
                            <circle cx="72" cy="15" r="2.5" fill="#0066EE" />
                            <text x="69" y="27" fontSize="10" fontWeight="bold" fill="#0066EE">N</text>
                            <circle cx="120" cy="15" r="2.5" fill="#0066EE" />
                            <text x="117" y="27" fontSize="10" fontWeight="bold" fill="#0066EE">M</text>
                            <circle cx="215" cy="15" r="2.5" fill="#1E293B" />
                            <text x="212" y="27" fontSize="10" fontWeight="bold" fill="#1E293B">B</text>
                          </svg>
                        </div>

                        {/* Choices with fractions */}
                        <div className="space-y-1 text-[11px]">
                          <div className="flex justify-between">
                            <span>① AB = 2 MB</span>
                            <span>② NM = 1/2 AM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>③ AN = 1/4 AB</span>
                            <span>④ AB = 3/2 NB</span>
                          </div>
                          <div>⑤ NM = 1/3 NB</div>
                        </div>
                      </div>

                      {/* Problem 07 */}
                      <div className="space-y-2 pt-2 border-t border-zinc-100">
                        <div className="flex items-start gap-2">
                          <span className="font-black text-black text-sm shrink-0">07</span>
                          <p className="text-zinc-900 leading-snug">
                            다음 그림에서 점 M은 <span className="font-serif">선분 AB</span>의 중점이고, 점 N은 <span className="font-serif">선분 MB</span>의 중점이다. <span className="font-serif font-bold">AB = 40cm</span>일 때, <span className="font-serif">선분 AN</span>의 길이는?
                          </p>
                        </div>

                        {/* 40cm bracket diagram */}
                        <div className="py-2 px-3 bg-zinc-50 rounded border border-zinc-200">
                          <svg className="w-full h-11" viewBox="0 0 240 40" fill="none">
                            <line x1="25" y1="26" x2="215" y2="26" stroke="#1E293B" strokeWidth="1.5" />
                            {/* Dimension bracket */}
                            <path d="M 25 18 C 60 12, 100 12, 120 6 C 140 12, 180 12, 215 18" stroke="#0066EE" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                            <text x="108" y="14" fontSize="10" fontWeight="bold" fill="#0066EE">40 cm</text>
                            {/* Points */}
                            <circle cx="25" cy="26" r="2.5" fill="#1E293B" />
                            <text x="22" y="37" fontSize="9" fontWeight="bold" fill="#1E293B">A</text>
                            <circle cx="120" cy="26" r="2.5" fill="#1E293B" />
                            <text x="117" y="37" fontSize="9" fontWeight="bold" fill="#1E293B">M</text>
                            <circle cx="168" cy="26" r="2.5" fill="#1E293B" />
                            <text x="165" y="37" fontSize="9" fontWeight="bold" fill="#1E293B">N</text>
                            <circle cx="215" cy="26" r="2.5" fill="#1E293B" />
                            <text x="212" y="37" fontSize="9" fontWeight="bold" fill="#1E293B">B</text>
                          </svg>
                        </div>

                        {/* Choices */}
                        <div className="grid grid-cols-5 text-[11px] pt-1">
                          <div>① 26cm</div>
                          <div>② 28cm</div>
                          <div className="font-bold text-[#0066EE]">③ 30cm</div>
                          <div>④ 32cm</div>
                          <div>⑤ 34cm</div>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Footnote */}
                  <div className="mt-6 pt-3 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-500 font-sans">
                    <span>- 1 -</span>
                    <span className="font-bold text-[#0066EE]">스마트 올백 시험지 서식 1:1 완결본</span>
                  </div>

                </div>
              ) : (
                /* Tab 2: Comparison [선별 원본 캡처] vs [빈출유형 1회 최종 HWP] */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs font-sans text-left">
                  
                  {/* Left: Input Selection Crops */}
                  <div className="bg-[#121B30] p-5 rounded-xl border border-red-500/30">
                    <div className="font-bold text-red-400 mb-3 pb-2 border-b border-white/10 flex items-center justify-between">
                      <span className="text-sm font-black">INPUT: 교재 문항 선별본</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/60 border border-red-500/40">스캔 캡처본</span>
                    </div>

                    <div className="space-y-3 text-zinc-300 text-[11px] leading-relaxed">
                      <div className="p-3 bg-black/40 rounded border border-white/5 font-mono text-[10px] space-y-1">
                        <div className="text-zinc-400">• 백발백중 8p 1번 / 하 (교점과 교선 입체도형 캡처)</div>
                        <div className="text-zinc-400">• 내신콘서트 19p 24번 / 중 (직선, 반직선, 선분)</div>
                        <div className="text-zinc-400">• 백발백중 11p 6번 / 중 (선분의 중점 계산)</div>
                        <div className="text-zinc-400">• 내신콘서트 18p 13번 / 중 (각의 크기 구하기)</div>
                      </div>

                      <ul className="space-y-1.5 text-zinc-400">
                        <li>• 출판사마다 서체, 글자 크기, 줄 간격이 제각각</li>
                        <li>• 스캔 캡처 시 책 모서리 그림자와 비트맵 계단 현상</li>
                        <li>• 문제 번호(1번, 24번, 6번)가 섞여 있어 학생 시험지로 배포 불가</li>
                        <li>• 학원 자체 템플릿(점수표, 학년, 성명란) 없음</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right: Finalized Standardized Test Sheet */}
                  <div className="bg-[#0F1E38] p-5 rounded-xl border border-[#0066EE]/60 shadow-lg">
                    <div className="font-bold text-[#38BDF8] mb-3 pb-2 border-b border-white/10 flex items-center justify-between">
                      <span className="text-sm font-black">OUTPUT: 빈출 유형 1회 최종본</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#0066EE]/30 border border-[#38BDF8]/40 text-[#38BDF8]">
                        정품 HWP 완결본
                      </span>
                    </div>

                    <div className="space-y-3 text-zinc-200 text-[11px] leading-relaxed">
                      <div className="p-3 bg-blue-950/40 rounded border border-blue-500/30 font-mono text-[10px] space-y-1 text-blue-100">
                        <div className="text-[#38BDF8] font-bold">시험지명: 중1-2_1단원_01_빈출유형_1회.hwp</div>
                        <div>✓ 단일 2단 시험지 규격 (중1 Ⅰ. 기본도형)</div>
                        <div>✓ 01번부터 순차 재배열 &amp; 점수표(15점) 통합</div>
                        <div>✓ 캡처 도판 고화질 300dpi급 클린 업스케일</div>
                      </div>

                      <ul className="space-y-1.5 text-zinc-300">
                        <li>• 한글 수식 편집기로 분수, 선분 기호 100% 표준 입력</li>
                        <li>• 흐릿했던 캡처 입체도형과 선분을 선명한 고화질로 변환</li>
                        <li>• 학원 전용 스타일 시트(장평/자간/단구분) 1:1 완벽 정합</li>
                        <li>• 수령 즉시 출력하여 인쇄 및 중간고사 시험 현장 바로 투입!</li>
                      </ul>
                    </div>
                  </div>

                </div>
              )}

              {/* Status bar */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-zinc-400 font-sans">
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold">작업 완료 사양:</span>
                  <span>교재 선별본 HWP 통합</span>
                  <span>|</span>
                  <span>수식 100% 전산화</span>
                  <span>|</span>
                  <span>캡처 도판 고화질 업스케일</span>
                  <span>|</span>
                  <span>지정 템플릿 1:1 매칭</span>
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
