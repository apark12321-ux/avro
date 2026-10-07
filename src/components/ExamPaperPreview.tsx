import { useState } from 'react';
import { Layers, FileCode, CheckCircle, ZoomIn, Eye, Sparkles } from 'lucide-react';

export default function ExamPaperPreview() {
  const [activeMode, setActiveMode] = useState<'typeset' | 'compare'>('typeset');

  return (
    <div className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-2xl overflow-hidden text-left">
      {/* HWP / Editorial Studio Top Bar */}
      <div className="bg-[#0e1626] border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-slate-400 font-mono text-[11px] border-l border-slate-700 pl-2.5 flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 font-bold border border-sky-800/60 text-[10px]">
              HWP
            </span>
            <span className="text-slate-200 font-semibold truncate max-w-[220px] sm:max-w-none">
              수학영역_심화모의고사_01회차_출판조판.hwp
            </span>
          </span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400 font-mono pr-2 border-r border-slate-800">
            <span>A4 2단 조판</span>
            <span>·</span>
            <span>한글 수식 11pt</span>
            <span>·</span>
            <span className="text-sky-400 font-medium">벡터 100%</span>
          </div>

          <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-700 text-[11px]">
            <button
              onClick={() => setActiveMode('typeset')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeMode === 'typeset'
                  ? 'bg-sky-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              조판 완성본
            </button>
            <button
              onClick={() => setActiveMode('compare')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeMode === 'compare'
                  ? 'bg-sky-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              스캔 원본 vs 조판 비교
            </button>
          </div>
        </div>
      </div>

      {/* Main Exam Paper Canvas Area */}
      <div className="p-4 sm:p-6 bg-[#0B0F19] relative">
        {/* Subtle grid background simulating millimetric layout rules */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        {/* Paper Sheet Container */}
        <div className="relative rounded-xl bg-[#FAFAFC] text-slate-900 p-5 sm:p-7 shadow-lg border border-slate-300 select-none">
          
          {/* Exam Header Bar */}
          <div className="border-b-2 border-slate-900 pb-3 mb-5 flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <span className="text-xl sm:text-2xl font-black font-serif tracking-tight text-slate-950">
                수학 영역
              </span>
              <span className="text-xs font-serif font-bold text-slate-700">
                [공통과목: 수학Ⅰ·수학Ⅱ]
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-serif">
              <span className="px-2 py-0.5 border border-slate-400 rounded text-slate-700 font-bold">
                제 2 교시
              </span>
              <span className="hidden sm:inline text-slate-500 font-mono text-[11px]">
                출판 인쇄 표준 2단 규격
              </span>
            </div>
          </div>

          {activeMode === 'typeset' ? (
            /* 2-Column Standard Korean Math Exam Layout */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Vertical Column Divider (Standard Korean CSAT / Academy Exam Layout) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2" />

              {/* Column 1: Equation / Calculus Problem */}
              <div className="space-y-5 pr-0 md:pr-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-1.5 leading-snug">
                    <span className="font-serif font-bold text-base text-slate-950">01.</span>
                    <p className="text-[13px] sm:text-sm font-serif leading-relaxed text-slate-900">
                      다항함수 <span className="italic font-serif">f(x)</span>가 모든 실수 <span className="italic font-serif">x</span>에 대하여{' '}
                      <span className="inline-block px-1 py-0.5 bg-slate-100 rounded font-serif text-[13px] border border-slate-200">
                        ∫<sub>1</sub><sup>x</sup> <span className="italic">f(t) dt</span> = <span className="italic">x³</span> - 2<span className="italic">x²</span> + <span className="italic">ax</span> + 1
                      </span>{' '}
                      을 만족시킬 때, 상수 <span className="italic font-serif">a</span>의 값과 <span className="italic font-serif">f(2)</span>의 합은? <span className="text-[11px] font-bold text-slate-500">[3점]</span>
                    </p>
                  </div>

                  {/* Multiple Choices */}
                  <div className="grid grid-cols-5 gap-1 text-xs font-serif pt-1 pl-5 text-slate-800">
                    <div>① 3</div>
                    <div>② 5</div>
                    <div>③ 7</div>
                    <div>④ 9</div>
                    <div>⑤ 11</div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 space-y-3">
                  <div className="flex items-start gap-1.5 leading-snug">
                    <span className="font-serif font-bold text-base text-slate-950">02.</span>
                    <p className="text-[13px] sm:text-sm font-serif leading-relaxed text-slate-900">
                      함수 <span className="italic font-serif">f(x)</span> = <span className="italic">x³</span> - 3<span className="italic">x</span> + 4 에 대하여 곡선 <span className="italic font-serif">y = f(x)</span> 위의 점 <span className="font-serif">(2, 6)</span>에서의 접선의 방정식을 <span className="italic font-serif">y = mx + n</span>이라 할 때, <span className="italic font-serif">m + n</span>의 값을 구하시오. <span className="text-[11px] font-bold text-slate-500">[4점]</span>
                    </p>
                  </div>
                  <div className="grid grid-cols-5 gap-1 text-xs font-serif pt-1 pl-5 text-slate-800">
                    <div>① -1</div>
                    <div>② 0</div>
                    <div>③ 1</div>
                    <div>④ 2</div>
                    <div>⑤ 3</div>
                  </div>
                </div>
              </div>

              {/* Column 2: Geometric Coordinate Problem with Vector SVG Diagram */}
              <div className="space-y-5 pl-0 md:pl-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start gap-1.5">
                        <span className="font-serif font-bold text-base text-slate-950">03.</span>
                        <p className="text-[13px] sm:text-sm font-serif leading-relaxed text-slate-900">
                          좌표평면에서 원 <span className="font-serif italic">x² + y² = 25</span> 위의 제1사분면에 있는 점 <span className="font-serif italic">P</span>에서의 접선이 <span className="font-serif italic">x</span>축, <span className="font-serif italic">y</span>축과 만나는 점을 각각 <span className="font-serif italic">A, B</span>라 하자. 삼각형 <span className="font-serif italic">OAB</span>의 넓이의 최솟값은? <span className="text-[11px] font-bold text-slate-500">[4점]</span>
                        </p>
                      </div>
                    </div>

                    {/* Precision Vector Diagram */}
                    <div className="w-28 h-28 bg-white border border-slate-300 rounded p-1.5 shrink-0 flex items-center justify-center shadow-xs">
                      <svg viewBox="0 0 100 100" className="w-full h-full stroke-slate-800 fill-none text-[8px] font-serif">
                        {/* Axes */}
                        <line x1="8" y1="80" x2="92" y2="80" strokeWidth="0.9" stroke="#334155" />
                        <line x1="20" y1="92" x2="20" y2="8" strokeWidth="0.9" stroke="#334155" />
                        <text x="88" y="76" stroke="none" fill="#334155" fontSize="8" fontStyle="italic">x</text>
                        <text x="24" y="14" stroke="none" fill="#334155" fontSize="8" fontStyle="italic">y</text>
                        <text x="12" y="88" stroke="none" fill="#334155" fontSize="8">O</text>
                        
                        {/* Circle arc */}
                        <path d="M 20 28 A 52 52 0 0 1 72 80" stroke="#0284c7" strokeWidth="1.2" />
                        
                        {/* Tangent line */}
                        <line x1="12" y1="18" x2="82" y2="88" stroke="#dc2626" strokeWidth="1.1" />
                        
                        {/* Tangent point P */}
                        <circle cx="48" cy="54" r="2" fill="#dc2626" stroke="none" />
                        <text x="52" y="52" stroke="none" fill="#0f172a" fontSize="7" fontStyle="italic">P</text>
                        
                        {/* Label A & B */}
                        <text x="76" y="90" stroke="none" fill="#0f172a" fontSize="7" fontStyle="italic">A</text>
                        <text x="8" y="24" stroke="none" fill="#0f172a" fontSize="7" fontStyle="italic">B</text>
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-1 text-xs font-serif pt-1 pl-5 text-slate-800">
                    <div>① 20</div>
                    <div>② 25</div>
                    <div>③ 30</div>
                    <div>④ 35</div>
                    <div>⑤ 40</div>
                  </div>
                </div>

                {/* HWP Formula Script Bar */}
                <div className="p-2.5 rounded bg-slate-100 border border-slate-300 font-mono text-[11px] text-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[10px] font-bold text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">
                      HWP SCRIPT
                    </span>
                    <span className="truncate">{`int _{1} ^{x} f(t)dt = x^3 - 2x^2 + ax + 1`}</span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-semibold shrink-0 ml-2">
                    ✓ 표준 수식 컴파일
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Compare Mode: Scan vs HWP Vector */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left: Blurred Scan */}
              <div className="rounded-lg border-2 border-dashed border-rose-300 bg-rose-50/40 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-rose-700 border-b border-rose-200 pb-2">
                  <span>[입력] 스캔본 원본 / 손글씨</span>
                  <span className="text-[10px] font-mono text-rose-500 font-normal">OCR 수식 인식 실패 상태</span>
                </div>
                <div className="h-40 flex flex-col items-center justify-center text-center p-3 filter blur-[0.4px] select-none text-slate-400 space-y-2">
                  <p className="font-serif italic text-sm text-slate-600 line-through decoration-rose-400">
                    f(x) = lim (x-&gt;2) [f(x)-4]/(x-2) = 5 ???
                  </p>
                  <div className="w-24 h-16 border border-slate-400 border-dashed rounded flex items-center justify-center text-[10px] text-slate-400">
                    도형 인쇄시 픽셀 뭉개짐
                  </div>
                  <p className="text-[11px] text-rose-600">※ 해상도 저하로 인쇄 시 글자 번짐 및 수식 누락</p>
                </div>
              </div>

              {/* Right: AVRO Crisp Output */}
              <div className="rounded-lg border-2 border-sky-400 bg-sky-50/40 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-sky-800 border-b border-sky-200 pb-2">
                  <span>[출력] 에이브로 표준 HWP 조판본</span>
                  <span className="text-[10px] font-mono text-sky-600 font-semibold">100% 출판 인쇄 규격</span>
                </div>
                <div className="h-40 flex flex-col justify-center space-y-2 p-3 font-serif">
                  <p className="text-xs sm:text-sm text-slate-900 leading-relaxed">
                    01. 함수 <span className="italic">f(x)</span>에 대하여{' '}
                    <span className="inline-block px-1.5 py-0.5 rounded bg-white border border-sky-300 font-serif font-bold text-sky-950 text-xs">
                      lim<sub>x→2</sub> &#123; f(x) - 4 &#125; / (x - 2) = 5
                    </span>{' '}
                    일 때, 접선의 방정식은?
                  </p>
                  <p className="text-[11px] text-sky-800 font-sans font-medium bg-white p-1.5 rounded border border-sky-200">
                    ✓ 한글 파일(HWP)로 납품되어 시험지 복사·편집 100% 가능
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Exam Paper Bottom Margin Marker */}
          <div className="mt-5 pt-3 border-t border-slate-300 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>[2025 모의고사] 수학 영역 (1 / 4)</span>
            <span>(주)에이브로 표준 조판 규격 준수</span>
          </div>

        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="bg-[#0B101D] border-t border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>표준 한글 수식 스크립트</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>고화질 무손실 벡터 작도</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>출판 인쇄용 2단 조판</span>
          </span>
        </div>
        <span className="font-mono text-[11px] text-sky-400 font-semibold">
          * 실제 원고 3문항 무상 선제작 지원
        </span>
      </div>
    </div>
  );
}
