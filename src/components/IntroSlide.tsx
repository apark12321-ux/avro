import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Loader2,
  Check,
} from 'lucide-react';

interface IntroSlideProps {
  openDrawer: (tab: 'about' | 'services' | 'timeline' | 'process') => void;
  goToNextSlide: () => void;
  typedCommand: string;
  terminalLogs: Array<{ id: string | number; text: string; type: 'client' | 'info' | 'success' | 'warn' | 'header' }>;
  isTerminalBuilding: boolean;
  activeTerminalPreset: string;
  runTerminalSimulation: (preset: string) => void;
  qaStatus: 'idle' | 'running' | 'complete';
  qaSteps: Array<{ name: string; status: string; desc: string }>;
  runQaSimulation: () => void;
  selectedBlocks: string[];
  toggleBlock: (blockId: string) => void;
}

export default function IntroSlide({
  openDrawer,
  goToNextSlide,
  typedCommand,
  terminalLogs,
  isTerminalBuilding,
  activeTerminalPreset,
  runTerminalSimulation,
  qaStatus,
  qaSteps,
  runQaSimulation,
  selectedBlocks,
  toggleBlock,
}: IntroSlideProps) {
  const [activeDemoTab, setActiveDemoTab] = useState<'cli' | 'qa' | 'saas'>('cli');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full h-full py-4 min-h-0">
      {/* Left Column: Brand Copy & CTAs */}
      <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center text-left min-h-0 overflow-y-auto max-h-full pr-2 custom-scrollbar">
        <div className="inline-flex flex-wrap items-center gap-2 border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-1 rounded-full w-max text-[9px] font-mono tracking-widest text-cyan-400 uppercase mb-4 sm:mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>MISSION : AI EDUTECH PIVOT &amp; INTEGRITY</span>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4.5xl font-sans font-black tracking-tight leading-[1.25] mb-4 sm:mb-5 text-left break-keep text-zinc-100">
          10년의 교육 콘텐츠 노하우,<br/>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-lime-400 bg-clip-text text-transparent">실용적 AI 검증 기술</span>로 완성되다.
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed text-left mb-5 sm:mb-6">
          에이브로(AVRO)는 대형 교육 기관의 단원 메타데이터 정밀 분석과 수리 표준 LaTeX 변환 파싱을 10년간 운영 완료한 도메인 강점을 지니고 있습니다. 교육 현장에서 최고 신뢰도로 보증되는 지능형 교안 빌더 및 AI 에이전트 설계 통합 솔루션을 제시합니다.
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
          <span className="px-3.5 py-1 rounded-full border border-lime-400/30 bg-lime-400/5 text-lime-400 font-mono text-[9px] uppercase font-bold tracking-widest">
            Educational Web App
          </span>
          <span className="px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[9px] uppercase font-semibold tracking-wider">
            AI Curation Engine
          </span>
          <span className="px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[9px] uppercase font-semibold tracking-wider">
            QA Automation Suite
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full pr-4 pt-4 border-t border-white/[0.04]">
          <button
            onClick={() => openDrawer('about')}
            className="flex-1 flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-white/[0.02] hover:bg-neutral-900 border border-white/[0.08] hover:border-lime-400/40 text-left transition-all duration-300 group shadow-lg cursor-pointer max-w-sm"
          >
            <div className="flex flex-col">
              <span className="text-white text-xs font-bold font-sans flex items-center gap-1">
                에이브로 상세 소개서
                <ArrowRight className="w-3.5 h-3.5 text-lime-400 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-zinc-500 font-mono text-[8px] uppercase tracking-wider mt-0.5">About AVRO Studio</span>
            </div>
          </button>

          <button
            onClick={goToNextSlide}
            className="flex-1 flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-[#d4ff3a]/5 hover:bg-[#d4ff3a]/10 border border-[#d4ff3a]/25 hover:border-lime-400/60 text-left transition-all duration-300 group shadow-lg cursor-pointer max-w-sm"
          >
            <div className="flex flex-col">
              <span className="text-[#d4ff3a] text-xs font-bold font-sans flex items-center gap-1">
                선정 프로젝트 보러가기
                <ArrowRight className="w-3.5 h-3.5 text-lime-400 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-lime-400/50 font-mono text-[8px] uppercase tracking-wider mt-0.5">Explore Selected Projects</span>
            </div>
          </button>
        </div>
      </div>

      {/* Right Column: Multi-Tab Interactive Sandbox Card */}
      <div className="lg:col-span-6 xl:col-span-5 h-[410px] max-h-full flex flex-col justify-center min-h-0">
        <div className="w-full max-w-md h-full glass-effect rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-0 bg-[#0d0d12]/60">
          
          <div className="px-3 py-2 bg-[#09090d] border-b border-white/[0.06] flex items-center justify-between shrink-0 select-none">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
            </div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black">AVRO_SIMULATOR_SANDBOX v1.2</span>
          </div>

          <div className="px-2 py-1.5 bg-[#121217] border-b border-white/[0.04] flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0 justify-around select-none">
            <button
              onClick={() => setActiveDemoTab('cli')}
              className={`px-3 py-1 rounded text-[10px] font-mono font-bold border transition-all cursor-pointer ${
                activeDemoTab === 'cli'
                  ? 'bg-lime-400/10 border-lime-400/30 text-lime-400'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              CLI 빌더
            </button>
            <button
              onClick={() => setActiveDemoTab('qa')}
              className={`px-3 py-1 rounded text-[10px] font-mono font-bold border transition-all cursor-pointer ${
                activeDemoTab === 'qa'
                  ? 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              QA 검증기
            </button>
            <button
              onClick={() => setActiveDemoTab('saas')}
              className={`px-3 py-1 rounded text-[10px] font-mono font-bold border transition-all cursor-pointer ${
                activeDemoTab === 'saas'
                  ? 'bg-purple-400/10 border-purple-400/30 text-[#c084fc]'
                  : 'border-transparent text-zinc-500 hover:text-zinc-310'
              }`}
            >
              LMS 저작기
            </button>
          </div>

          <div className="flex-1 p-3.5 bg-[#07070a]/95 overflow-y-auto min-h-0 text-left custom-scrollbar flex flex-col justify-between">
            {/* Terminal CLI Tab */}
            {activeDemoTab === 'cli' && (
              <div className="flex-1 flex flex-col justify-between h-full space-y-3 min-h-0">
                <div className="min-h-0 flex flex-col">
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-2 shrink-0">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">// Terminal Dev Automation (npm run dev)</span>
                    <span className="text-[9px] bg-lime-400/10 text-lime-400 font-mono px-1.5 rounded">Active</span>
                  </div>
                  
                  <div className="mt-2.5 bg-black/40 border border-white/[0.04] p-3 rounded font-mono text-[10px] space-y-2 h-[190px] overflow-y-auto custom-scrollbar flex-1">
                    <div className="text-zinc-300">$ {typedCommand || 'npm run dev --filter=ebsmath-helper'}<span className="inline-block w-1 h-3 bg-lime-400 animate-pulse ml-0.5" /></div>
                    {terminalLogs.map((log) => (
                      <div key={log.id} className={`leading-relaxed ${
                        log.type === 'success' ? 'text-lime-400' :
                        log.type === 'info' ? 'text-cyan-400' :
                        log.type === 'warn' ? 'text-amber-400 font-semibold' : 'text-zinc-400'
                      }`}>
                        {log.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-1 shrink-0 pt-2 border-t border-white/[0.04]">
                  {['lesson', 'evaluation', 'visualize', 'integrate'].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => runTerminalSimulation(preset)}
                      disabled={isTerminalBuilding}
                      className={`flex-1 py-1.5 rounded text-[8px] font-mono transition-all uppercase tracking-widest text-center cursor-pointer ${
                        activeTerminalPreset === preset && isTerminalBuilding
                          ? 'bg-lime-400 text-black font-black border-transparent'
                          : 'border border-white/[0.06] bg-white/[0.01] text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      {preset === 'lesson' ? 'Math Parser' :
                       preset === 'evaluation' ? 'Workbook' :
                       preset === 'visualize' ? 'Build UI' : 'Deploy'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* QA Checklist Tab */}
            {activeDemoTab === 'qa' && (
              <div className="flex-1 flex flex-col justify-between h-full space-y-3 min-h-0">
                <div className="min-h-0 flex flex-col">
                  <div className="flex justify-between items-center pb-2 border-b border-white/[0.05] shrink-0">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">// Verification Checklists</span>
                    <button
                      onClick={runQaSimulation}
                      disabled={qaStatus === 'running'}
                      className={`px-2.5 py-1 rounded text-[9px] font-sans font-black flex items-center gap-1 transition-all shadow-md cursor-pointer ${
                        qaStatus === 'running'
                          ? 'bg-zinc-805 text-zinc-550 border border-zinc-700'
                          : 'bg-lime-400 text-black hover:bg-lime-300'
                      }`}
                    >
                      {qaStatus === 'running' ? '검수 진행 중' : qaStatus === 'complete' ? '재검정 시작' : '원클릭 검수'}
                    </button>
                  </div>

                  <div className="space-y-1.5 mt-2.5 max-h-[180px] overflow-y-auto custom-scrollbar flex-1">
                    {qaSteps.map((step, idx) => (
                      <div key={idx} className="p-2 rounded border border-white/[0.04] bg-white/[0.01] flex items-start gap-2">
                        <div className="mt-0.5 shrink-0">
                          {step.status === 'success' ? (
                            <div className="w-3.5 h-3.5 rounded-full bg-lime-400/15 border border-lime-400 flex items-center justify-center text-lime-400 shadow-[0_0_8px_rgba(212,255,58,0.2)]">
                              <Check className="w-2 h-2" />
                            </div>
                          ) : step.status === 'running' ? (
                            <Loader2 className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-white/[0.12] bg-white/[0.02] inline-block" />
                          )}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className={`text-[9px] font-sans font-bold truncate ${step.status === 'success' ? 'text-zinc-200' : step.status === 'running' ? 'text-cyan-400 animate-pulse' : 'text-zinc-500'}`}>
                            {step.name}
                          </span>
                          <span className="text-[7.5px] font-mono text-zinc-500 truncate leading-none mt-0.5">{step.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-2 bg-zinc-950/80 border border-white/[0.04] rounded-lg flex items-center justify-between text-left font-mono shrink-0">
                  <div className="flex flex-col">
                    <span className="text-[7.5px] text-zinc-500 uppercase tracking-widest leading-none">OPERATION INDEX</span>
                    <span className={`text-[9.5px] font-bold mt-1 ${qaStatus === 'complete' ? 'text-lime-400 animate-pulse' : 'text-zinc-405'}`}>
                      {qaStatus === 'complete' ? 'VERIFIED: 100% SUCCESS ✓' : qaStatus === 'running' ? 'AUDITING...' : 'STATUS: READY TO TEST'}
                    </span>
                  </div>
                  <div className="w-20 bg-white/[0.06] h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-lime-400 h-full rounded-full transition-all duration-300"
                      style={{ width: qaStatus === 'complete' ? '100%' : qaStatus === 'running' ? '50%' : '0%' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* LMS SaaS Builder Tab */}
            {activeDemoTab === 'saas' && (
              <div className="flex-1 flex flex-col justify-between h-full space-y-3 min-h-0">
                <div className="min-h-0 flex flex-col">
                  <div className="p-1 px-1.5 bg-[#0d0d12]/80 border border-white/[0.05] rounded shrink-0">
                    <span className="text-[8px] font-mono text-zinc-500 block mb-1 text-left uppercase">// Click to toggle block elements:</span>
                    <div className="grid grid-cols-4 gap-1">
                      {[
                        { id: 'header', label: '텍스트 헤더' },
                        { id: 'math', label: 'LaTeX 수식' },
                        { id: 'quiz', label: '단원 퀴즈' },
                        { id: 'script', label: '수업 노트' }
                      ].map((block) => {
                        const isSel = selectedBlocks.includes(block.id);
                        return (
                          <button
                            key={block.id}
                            onClick={() => toggleBlock(block.id)}
                            className={`px-1 py-1 rounded text-[8px] font-sans font-bold border transition-all cursor-pointer ${
                              isSel
                                ? 'bg-purple-500/10 border-purple-400/50 text-purple-300'
                                : 'bg-white/[0.02] border-white/[0.06] text-zinc-500 hover:text-zinc-350'
                            }`}
                          >
                            {block.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-2 text-left bg-[#09090d] border border-white/[0.04] p-2 rounded h-[180px] overflow-y-auto custom-scrollbar flex-1 relative">
                    <span className="absolute right-2 top-1 text-[7px] font-mono text-zinc-650 bg-black/60 px-1.5 py-0.5 rounded border border-white/[0.04]">
                      PREVIEW
                    </span>

                    <div className="space-y-1.5 pt-4">
                      <AnimatePresence>
                        {selectedBlocks.includes('header') && (
                          <motion.div
                            key="demo-header"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-1.5 bg-white/[0.01] border border-white/[0.04] rounded"
                          >
                            <span className="text-[6.5px] font-mono text-purple-400 block">// MODULE: LESSON HEADER</span>
                            <h4 className="text-[9.5px] font-bold text-zinc-100 mt-0.5">EBSMath 대수 기본학습 [일차함수]</h4>
                          </motion.div>
                        )}

                        {selectedBlocks.includes('math') && (
                          <motion.div
                            key="demo-math"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-1.5 bg-white/[0.02] border border-[#d4ff3a]/15 rounded font-mono"
                          >
                            <span className="text-[6.5px] text-[#d4ff3a] block">// MODULE: LaTeX MATH FORMAT</span>
                            <div className="text-[8.5px] text-zinc-300 mt-1 py-1 text-center bg-black/50 border border-white/[0.04] rounded">
                              f(x) = ax + b \ (a \neq 0)
                            </div>
                          </motion.div>
                        )}

                        {selectedBlocks.includes('quiz') && (
                          <motion.div
                            key="demo-quiz"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-1.5 bg-white/[0.01] border border-white/[0.04] rounded"
                          >
                            <span className="text-[6.5px] font-mono text-cyan-400 block">// MODULE: INTERACTIVE QUIZ UNIT</span>
                            <p className="text-[8.5px] font-black text-zinc-300">다음 식 중에서 일차함수인 것은?</p>
                            <div className="grid grid-cols-2 gap-1 mt-1">
                              {['① y = 2x - 3', '② y = x²'].map((opt, i) => (
                                <div key={i} className={`p-1 border rounded text-[7.5px] font-sans ${i === 0 ? 'border-lime-400/30 bg-lime-400/[0.02] text-lime-400 font-bold' : 'border-white/[0.05] bg-white/[0.01] text-zinc-400'}`}>
                                  {opt}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {selectedBlocks.includes('script') && (
                          <motion.div
                            key="demo-script"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-1.5 bg-white/[0.01] border border-dashed border-white/[0.08] rounded text-zinc-500 font-sans text-[7.5px] leading-relaxed"
                          >
                            수식과 도해는 모바일 가변 배치 수리에 적합하게 패싱 처리됩니다.
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="text-[8px] text-zinc-500 font-mono text-right shrink-0 select-none">
                  * Click to assemble modules interactively
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
