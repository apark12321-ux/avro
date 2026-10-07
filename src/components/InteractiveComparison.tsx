import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, RefreshCw, FileText, Activity } from 'lucide-react';

export default function InteractiveComparison() {
  const [activeTab, setActiveTab] = useState<'equation' | 'figure' | 'layout' | 'playground'>('equation');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedEquation, setSelectedEquation] = useState<number>(0);

  const equationPresets = [
    {
      name: '미적분 극한 & 분수식',
      rawText: 'lim_{x->0} (e^{2x} - 1) / sin(3x) = 2/3',
      hwpCommand: 'lim _{x -> 0} {{e^{2x} - 1} over {sin (3x)}} = {2 over 3}',
      mathDisplay: 'lim_{x \\to 0} \\frac{e^{2x}-1}{\\sin(3x)} = \\frac{2}{3}',
      notes: '한글 수식 편집기 `over` 명령어 정밀 행간 보정'
    },
    {
      name: '이차방정식 근의 공식 & 루트',
      rawText: 'x = (-b +- sqrt(b^2 - 4ac)) / (2a)',
      hwpCommand: 'x = {-b +- sqrt{b^2 - 4ac}} over {2a}',
      mathDisplay: 'x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}',
      notes: '루트 상단 가로줄 길이 및 분모 중앙 정렬 보정'
    },
    {
      name: '연립방정식 및 행렬 정렬',
      rawText: 'cases: 2x + 3y = 7, 4x - y = 5',
      hwpCommand: 'cases{2x + 3y = 7 # 4x - y = 5}',
      mathDisplay: '\\begin{cases} 2x + 3y = 7 \\\\ 4x - y = 5 \\end{cases}',
      notes: '`#` 구분자를 통한 중괄호 연립 방정식 수평/수직 균형'
    }
  ];

  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#090d18]/70 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left">
      
      {/* Title & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>INTERACTIVE QUALITY ENGINE PREVIEW</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            스캔 원본 vs 에이브로 무결성 HWP 조판 비교
          </h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1 rounded-xl shrink-0 overflow-x-auto">
          {[
            { id: 'equation', label: '수학 수식 비교' },
            { id: 'figure', label: '벡터 그래프 작도' },
            { id: 'layout', label: '2단 시험지 조판' },
            { id: 'playground', label: '수식 명령어 샌드박스' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Display based on activeTab */}
      <div>
        {activeTab === 'equation' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left: Raw / Scan input (Before) */}
            <div className="p-5 rounded-xl border border-red-500/20 bg-red-950/[0.08] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    BEFORE: 스캔본 / 손글씨 원본
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">가독성 저하 · 인쇄 불가</span>
                </div>
                
                {/* Visual Representation of blurry scan */}
                <div className="p-4 rounded-lg bg-zinc-900/90 border border-white/[0.06] font-mono text-zinc-400 space-y-2 select-none filter blur-[0.4px]">
                  <p className="text-xs text-zinc-500">// 손글씨 및 저해상도 모의고사 캡처본 상태:</p>
                  <div className="p-3 bg-black/50 rounded text-center text-sm font-serif italic text-zinc-300 border border-white/[0.03] tracking-widest line-through decoration-red-500/50">
                    {equationPresets[selectedEquation].rawText}
                  </div>
                  <ul className="text-[11px] text-zinc-400 list-disc list-inside space-y-0.5 pt-1">
                    <li>인쇄 시 수식 분수선이 번지거나 끊김</li>
                    <li>지수와 밑의 크기 구분이 모호하여 학생 오답 유발</li>
                    <li>수학 기호(루트, 인테그랄) 확대 시 심한 계단 현상</li>
                  </ul>
                </div>
              </div>

              <div className="text-[10px] text-zinc-500 font-mono">
                ⚠ 일반 OCR 프로그램 사용 시 80% 이상 특수문자로 오인식됩니다.
              </div>
            </div>

            {/* Right: AVRO Precision HWP (After) */}
            <div className="p-5 rounded-xl border border-cyan-500/30 bg-cyan-950/[0.12] flex flex-col justify-between space-y-4 shadow-[0_0_25px_rgba(6,182,212,0.1)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    AFTER: 에이브로 표준 HWP 수식 조판
                  </span>
                  <span className="text-[10px] text-cyan-400 font-mono font-bold">출판 규격 100% 무결성</span>
                </div>

                <div className="p-4 rounded-lg bg-[#040814] border border-cyan-500/20 text-white space-y-3">
                  <div className="text-[10px] font-mono text-cyan-400 flex justify-between">
                    <span>// HWP EQUATION SCRIPT</span>
                    <span className="text-emerald-400">STATUS: VALIDATED ✓</span>
                  </div>

                  {/* Clean Formatted Equation Render Simulator */}
                  <div className="py-4 px-3 bg-black/60 rounded-lg text-center border border-cyan-500/30 shadow-inner flex items-center justify-center min-h-[60px]">
                    <span className="text-lg sm:text-xl font-serif font-bold text-cyan-200 tracking-wider">
                      {equationPresets[selectedEquation].mathDisplay}
                    </span>
                  </div>

                  <div className="p-2 rounded bg-black/40 border border-white/[0.04] font-mono text-[11px] text-zinc-300">
                    <span className="text-zinc-500">명령어: </span>
                    <span className="text-cyan-300 font-bold">{equationPresets[selectedEquation].hwpCommand}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-300 pt-1">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{equationPresets[selectedEquation].notes}</span>
                  </div>
                </div>
              </div>

              {/* Equation switcher buttons */}
              <div className="flex gap-1.5 pt-1">
                {equationPresets.map((eq, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedEquation(idx)}
                    className={`flex-1 py-1.5 px-2 rounded text-[10px] font-mono transition-all cursor-pointer truncate ${
                      selectedEquation === idx
                        ? 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-bold'
                        : 'border border-white/[0.06] bg-white/[0.01] text-zinc-400 hover:text-white'
                    }`}
                  >
                    예제 {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'figure' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Figure Before */}
            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] space-y-3">
              <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider block">
                [BEFORE] 원본 교재 스캔 캡처본
              </span>
              <div className="h-44 rounded-lg bg-zinc-900/80 border border-white/[0.05] flex flex-col items-center justify-center p-4 text-center filter blur-[0.5px]">
                <div className="w-24 h-24 border-2 border-dashed border-zinc-600 rounded-full flex items-center justify-center relative">
                  <div className="w-16 h-16 border border-zinc-600 transform rotate-45" />
                  <span className="absolute top-1 right-2 text-[10px] text-zinc-500 font-mono">P(x,y)?</span>
                </div>
                <span className="text-[10px] text-zinc-500 mt-2 font-mono">흐릿한 축, 라벨 뭉개짐, 확대 시 깨짐</span>
              </div>
            </div>

            {/* Figure After */}
            <div className="p-5 rounded-xl border border-cyan-500/30 bg-cyan-950/[0.1] space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider flex items-center justify-between">
                <span>[AFTER] 에이브로 벡터 고해상도 재작도</span>
                <span className="text-emerald-400 text-[10px]">인쇄 고화질 대응</span>
              </span>
              <div className="h-44 rounded-lg bg-[#040814] border border-cyan-500/25 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                {/* Simulated crisp geometric vector */}
                <svg className="w-40 h-28" viewBox="0 0 200 140">
                  <line x1="20" y1="70" x2="180" y2="70" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <line x1="100" y1="120" x2="100" y2="20" stroke="#38bdf8" strokeWidth="1.5" />
                  <circle cx="100" cy="70" r="40" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" />
                  <polygon points="100,70 128,42 128,70" fill="rgba(6,182,212,0.25)" stroke="#06b6d4" strokeWidth="1.5" />
                  <text x="185" y="74" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">x</text>
                  <text x="96" y="15" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">y</text>
                  <text x="132" y="55" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">P(r, θ)</text>
                  <text x="88" y="85" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">O</text>
                </svg>
                <span className="text-[10px] text-cyan-300 mt-1 font-mono font-bold">지오지브라/일러스트레이터 벡터 작도 100% 매칭</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'layout' && (
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#050914] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                // 2단 시험지 레이아웃 &amp; 배점 박스 가이드
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">
                좌우 2단 대칭 · 쪽번호 자동 연동 · 문항 번호 정렬
              </span>
            </div>

            {/* Interactive Column Simulation */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/60 border border-white/[0.06] text-xs font-sans">
              <div className="space-y-3 p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                <div className="flex justify-between items-center border-b border-white/[0.06] pb-1.5">
                  <span className="font-bold text-white">01. [3.5점] 수능 기출 변형</span>
                  <span className="text-[10px] font-mono text-cyan-400">단원: 미적분</span>
                </div>
                <p className="text-zinc-300 leading-relaxed text-[11px]">
                  함수 <span className="text-cyan-300 font-serif font-bold">f(x) = x³ - 3x + 1</span>에 대하여 닫힌구간 [0, 2]에서 최댓값과 최솟값의 합을 구하시오.
                </p>
                <div className="grid grid-cols-2 gap-1 text-[10px] text-zinc-400 pt-1">
                  <span>① 1</span>
                  <span>② 2</span>
                  <span>③ 3</span>
                  <span>④ 4</span>
                </div>
              </div>

              <div className="space-y-3 p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                <div className="flex justify-between items-center border-b border-white/[0.06] pb-1.5">
                  <span className="font-bold text-white">02. [4.0점] 고난도 빈출 문항</span>
                  <span className="text-[10px] font-mono text-cyan-400">단원: 확률과 통계</span>
                </div>
                <p className="text-zinc-300 leading-relaxed text-[11px]">
                  그림과 같이 흰 공 4개와 검은 공 3개가 들어 있는 주머니에서 임의로 2개의 공을 동시에 꺼낼 때, 서로 같은 색일 확률은?
                </p>
                <div className="grid grid-cols-2 gap-1 text-[10px] text-zinc-400 pt-1">
                  <span>① 1/7</span>
                  <span>② 2/7</span>
                  <span>③ 3/7</span>
                  <span>④ 4/7</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'playground' && (
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#050914] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                // HWP 수식 명령어 실시간 프리셋 테스트
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">클릭하여 실시간 변환 테스트</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: '분수 표현', code: '{a} over {b}', desc: '분자와 분모를 깔끔한 수평선으로 분할' },
                { title: '거듭제곱근', code: 'root {n} of {x + y}', desc: 'n차 제곱근 기호와 밑수 확장' },
                { title: '정적분 구간', code: 'int _{0} ^{pi} sin x dx', desc: '적분 기호와 상하한 첨자 자동 정렬' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-white/[0.06] bg-white/[0.01] hover:border-cyan-400/30 transition-all space-y-1.5"
                >
                  <span className="text-xs font-bold text-white">{item.title}</span>
                  <code className="block text-[11px] font-mono text-cyan-300 bg-black/60 p-1.5 rounded border border-white/[0.04]">
                    {item.code}
                  </code>
                  <p className="text-[10px] text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
