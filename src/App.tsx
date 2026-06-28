import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  Bookmark
} from 'lucide-react';

// Components
import AICanvas from './components/AICanvas';
import CursorAura from './components/CursorAura';
import IntroSlide from './components/IntroSlide';
import ProjectsSlide from './components/ProjectsSlide';
import TimelineSlide from './components/TimelineSlide';
import ContactSlide from './components/ContactSlide';
import GlitchText from './components/GlitchText';

// Data
import { 
  timelineData, 
  partnersData, 
  projectsData, 
  servicesData, 
  processSteps 
} from './data';

export default function App() {
  // Navigation states
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [activeDrawer, setActiveDrawer] = useState<'about' | 'services' | 'timeline' | 'process' | null>(null);

  // Filter state for portfolios
  const [projectFilter, setProjectFilter] = useState<'ALL' | 'AI' | 'CASE_STUDY'>('ALL');

  // Interactive Live Seoul clock
  const [seoulTime, setSeoulTime] = useState('');

  // Sandbox - CLI Simulation states
  const [typedCommand, setTypedCommand] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ id: number; text: string; type: 'client' | 'info' | 'success' | 'warn' | 'header' }>>([]);
  const [isTerminalBuilding, setIsTerminalBuilding] = useState(false);
  const [activeTerminalPreset, setActiveTerminalPreset] = useState('');

  // Sandbox - QA Verification stats
  const [qaStatus, setQaStatus] = useState<'idle' | 'running' | 'complete'>('idle');
  const [qaSteps, setQaSteps] = useState([
    { name: 'LaTeX Syntax & Parsing Compliance', status: 'idle', desc: 'MathML mapping validation for public education systems.' },
    { name: 'Cross-Device Viewport Responsiveness', status: 'idle', desc: 'Auto-detection of formula layout and viewport overflow constraints.' },
    { name: 'KWCAG 2.2 Accessibility Audit', status: 'idle', desc: 'Ensuring rich descriptive replacement headers for screen readers.' },
    { name: 'Public Education Syllabus Code Tag Match', status: 'idle', desc: 'Matching national math syllabus curriculum standards.' },
  ]);

  // Sandbox - LMS modules selected
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>(['header', 'math']);

  // Clock tick effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Seoul',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setSeoulTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeDrawer) {
        if (e.key === 'Escape') setActiveDrawer(null);
        return;
      }
      if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDrawer, currentSlide]);

  // Navigate handlers
  const goToNextSlide = () => {
    if (currentSlide < 3) {
      setSlideDirection('right');
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setSlideDirection('left');
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleSelectSlide = (idx: number) => {
    if (idx === currentSlide) return;
    setSlideDirection(idx > currentSlide ? 'right' : 'left');
    setCurrentSlide(idx);
  };

  // Run CLI simulation helper
  const runTerminalSimulation = (preset: string) => {
    if (isTerminalBuilding) return;
    setIsTerminalBuilding(true);
    setActiveTerminalPreset(preset);

    let command = '';
    let logs: Array<{ id: number; text: string; type: 'client' | 'info' | 'success' | 'warn' | 'header' }> = [];

    if (preset === 'lesson') {
      command = 'avro-qa-engine init --preset=math_parser';
      logs = [
        { id: 1, text: 'Initializing AVRO LaTeX Compilation Engine v2.1.0...', type: 'info' },
        { id: 2, text: '✓ MathML responsive mapping tables loaded.', type: 'success' },
        { id: 3, text: '✓ EBSMath national standard curriculum metadata synced.', type: 'success' },
        { id: 4, text: 'Ready to translate interactive web formula assets.', type: 'info' },
      ];
    } else if (preset === 'evaluation') {
      command = 'avro-qa-engine audit --target=latex_compliance';
      logs = [
        { id: 1, text: 'Running KWCAG 2.2 contrast and screen-reader descriptive compliance check...', type: 'info' },
        { id: 2, text: 'Analyzing formula structure "f(x) = ax + b" over multiple window viewports...', type: 'info' },
        { id: 3, text: '✓ No responsive layout overflow or rendering collision detected.', type: 'success' },
        { id: 4, text: 'Audit score: 100% compliant. Output syntax secure.', type: 'success' },
      ];
    } else if (preset === 'visualize') {
      command = 'avro-qa-engine test --flow=lms_hydration';
      logs = [
        { id: 1, text: 'Simulating textbook workbook hydrations across major web architectures...', type: 'info' },
        { id: 2, text: 'Hydrating text header + active quiz blocks into Canvas frame...', type: 'info' },
        { id: 3, text: '✓ Textbook module preview hydrated dynamically (0.04s)', type: 'success' },
      ];
    } else {
      command = 'avro-qa-engine deploy --env=ebs_production';
      logs = [
        { id: 1, text: 'Packaging verified MathML package files into production LMS endpoint...', type: 'info' },
        { id: 2, text: '✓ Distributing secure metadata payloads directly via national network API...', type: 'success' },
        { id: 3, text: '✓ DEPLOYMENT COMPLETED (201) | CONTENT SYNC COMPLETE.', type: 'success' },
      ];
    }

    setTypedCommand('');
    setTerminalLogs([]);

    let charIdx = 0;
    const typeInterval = setInterval(() => {
      if (charIdx < command.length) {
        setTypedCommand((prev) => prev + command.charAt(charIdx));
        charIdx++;
      } else {
        clearInterval(typeInterval);
        
        let logIdx = 0;
        const logInterval = setInterval(() => {
          if (logIdx < logs.length) {
            setTerminalLogs((prev) => [...prev, logs[logIdx]]);
            logIdx++;
          } else {
            clearInterval(logInterval);
            setIsTerminalBuilding(false);
          }
        }, 300);
      }
    }, 25);
  };

  // Run QA sim helper
  const runQaSimulation = () => {
    if (qaStatus === 'running') return;
    setQaStatus('running');

    setQaSteps((prev) => prev.map((s) => ({ ...s, status: 'idle' })));

    let currentStep = 0;
    const stepInterval = setInterval(() => {
      if (currentStep < qaSteps.length) {
        setQaSteps((prev) => {
          const next = [...prev];
          if (currentStep > 0) {
            next[currentStep - 1].status = 'success';
          }
          next[currentStep].status = 'running';
          return next;
        });
        currentStep++;
      } else {
        clearInterval(stepInterval);
        setQaSteps((prev) => {
          const next = [...prev];
          next[next.length - 1].status = 'success';
          return next;
        });
        setQaStatus('complete');
      }
    }, 800);
  };

  // LMS block toggle helper
  const toggleBlock = (blockId: string) => {
    setSelectedBlocks((prev) =>
      prev.includes(blockId) ? prev.filter((b) => b !== blockId) : [...prev, blockId]
    );
  };

  // Filtered project list
  const filteredProjects = projectsData.filter((p) => {
    if (projectFilter === 'ALL') return true;
    if (projectFilter === 'AI') {
      return p.tags.some(t => t.includes('AI') || t.includes('SaaS') || t.includes('에디터') || t.includes('저작'));
    }
    return p.status === 'CASE STUDY';
  });

  // Slide transition layout variants
  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '120vw' : '-120vw',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { x: { type: 'spring', stiffness: 220, damping: 24 }, opacity: { duration: 0.25 } }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-120vw' : '120vw',
      opacity: 0,
      transition: { x: { type: 'spring', stiffness: 220, damping: 24 }, opacity: { duration: 0.2 } }
    })
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#020616] via-[#05102a] to-[#01030e] text-zinc-100 font-sans relative flex flex-col justify-between overflow-hidden py-6 px-4 sm:px-10 md:px-16 lg:px-24 select-none">
      
      {/* Immersive ambient glows for premium "The Sky 184" feel */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] right-[15%] w-[450px] h-[450px] rounded-full bg-[#5200ff]/10 blur-[150px] pointer-events-none z-0" />

      {/* Background Interactive Particles Canvas */}
      <AICanvas />

      {/* Ambient Radial Cursor Aura Tracking Layer */}
      <CursorAura />

      {/* Grid Mesh Canvas Background Layer */}
      <div className="absolute inset-0 bg-grid-mesh opacity-10 pointer-events-none z-0 animate-grid-move" />

      {/* THE HEADER ZONE */}
      <header className="w-full flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00ffd5] via-[#00aaff] to-[#6a00ff] text-white font-sans font-black flex items-center justify-center text-lg shadow-[0_0_20px_rgba(0,255,213,0.35)]">
            A
          </span>
          <div className="flex flex-col text-left leading-none">
            <span className="font-sans font-black tracking-widest text-lg text-white">
              <GlitchText text="AVRO" />
            </span>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono font-bold mt-1">
              quality verification house
            </span>
          </div>
        </div>

        {/* Dynamic slide jump controls */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-1.5 font-mono text-[9px] tracking-wider">
            {[0, 1, 2, 3].map((idx) => {
              const label = idx === 0 ? 'INTRO' : idx === 1 ? 'PORTFOLIO' : idx === 2 ? 'ROADMAP' : 'CONTACT';
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectSlide(idx)}
                  className={`px-3 py-1.5 rounded-lg border font-black transition-all cursor-pointer ${
                    currentSlide === idx
                      ? 'bg-cyan-400/10 border-cyan-400/40 text-white text-glow-cyan shadow-[0_0_8px_rgba(34,211,238,0.2)]'
                      : 'border-transparent text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.02]'
                  }`}
                >
                  0{idx + 1}. {label}
                </button>
              );
            })}
          </div>

          {/* Clock Display */}
          <div className="flex items-center gap-2 border border-white/[0.08] rounded-full px-3 py-1 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
              SEOUL UTC : {seoulTime || '15:20:00'}
            </span>
          </div>
        </div>
      </header>

      {/* THE SLIDER CONTAINER SCREEN */}
      <main className="w-full flex-1 flex items-center justify-center relative min-h-0 py-6 z-10">
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={currentSlide}
            custom={slideDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex items-center justify-center min-h-0 absolute"
          >
            {currentSlide === 0 && (
              <IntroSlide
                openDrawer={(tab) => setActiveDrawer(tab)}
                goToNextSlide={goToNextSlide}
                typedCommand={typedCommand}
                terminalLogs={terminalLogs}
                isTerminalBuilding={isTerminalBuilding}
                activeTerminalPreset={activeTerminalPreset}
                runTerminalSimulation={runTerminalSimulation}
                qaStatus={qaStatus}
                qaSteps={qaSteps}
                runQaSimulation={runQaSimulation}
                selectedBlocks={selectedBlocks}
                toggleBlock={toggleBlock}
              />
            )}
            {currentSlide === 1 && (
              <ProjectsSlide
                projectFilter={projectFilter}
                setProjectFilter={setProjectFilter}
                filteredProjects={filteredProjects}
              />
            )}
            {currentSlide === 2 && (
              <TimelineSlide
                timelineData={timelineData}
                partnersData={partnersData}
              />
            )}
            {currentSlide === 3 && (
              <ContactSlide />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* THE FOOTER ZONE */}
      <footer className="w-full flex items-center justify-between border-t border-white/[0.06] pt-4 z-10 shrink-0 text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-zinc-550 text-[9px] font-mono uppercase tracking-wider">
          <span>© {new Date().getFullYear()} AVRO Studio.</span>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span>공교육 웹 및 LaTeX 수식 검증 전문 기술 기업</span>
        </div>

        {/* Slide Counter & Arrow Indicators */}
        <div className="flex items-center gap-5">
          <span className="font-mono text-[10px] font-bold text-zinc-500 tracking-widest">
            <span className="text-white font-black">0{currentSlide + 1}</span> / 04
          </span>

          <div className="flex items-center gap-1">
            <button
              onClick={goToPrevSlide}
              disabled={currentSlide === 0}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                currentSlide === 0
                  ? 'border-white/[0.03] text-zinc-750'
                  : 'border-white/[0.08] hover:border-cyan-400 text-zinc-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNextSlide}
              disabled={currentSlide === 3}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                currentSlide === 3
                  ? 'border-white/[0.03] text-zinc-750'
                  : 'border-white/[0.08] hover:border-cyan-400 text-zinc-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* DRAWER MODAL OVERLAYS */}
      <AnimatePresence>
        {activeDrawer && (
          <>
            {/* Dark glass backdrop layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDrawer(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[90] cursor-pointer"
            />

            {/* Sidebar panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 150 }}
              className="fixed top-0 right-0 h-screen w-full max-w-lg bg-[#090a0f] border-l border-white/[0.08] p-8 sm:p-10 z-[100] overflow-y-auto custom-scrollbar text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center border-b border-white/[0.08] pb-4 mb-6">
                  <span className="font-mono text-[9px] text-cyan-400 tracking-widest uppercase font-black">
                    // AVRO SYSTEM SPECULATION :: {activeDrawer}
                  </span>
                  <button
                    onClick={() => setActiveDrawer(null)}
                    className="text-zinc-500 hover:text-white font-mono text-[9px] cursor-pointer border border-white/[0.08] px-2.5 py-1.5 rounded-lg bg-white/[0.01] hover:bg-white/[0.04] transition-colors uppercase font-bold"
                  >
                    Close [ESC]
                  </button>
                </div>

                <div className="space-y-6">
                  {activeDrawer === 'about' && (
                    <div className="space-y-4 leading-relaxed text-xs sm:text-sm text-zinc-350">
                      <h3 className="text-lg font-bold font-sans text-white flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-cyan-400" />
                        에이브로 공식 소개 및 기업 이념
                      </h3>
                      <p>
                        에이브로는 대형 러닝 매니지먼트 시스템(LMS), 전국단위 수학 수식 빌더 구축 및 크로스 미디어 검정 품질 관리(QC)를 공급하는 에듀테크 전문 기술 기업입니다.
                      </p>
                      <p>
                        한 픽셀의 오차나 불규칙한 레이아웃 전위 현상을 용납하지 않으며, 공교육과 대형 출판 인프라를 연결하는 수리적 가교를 만듭니다.
                      </p>
                      <div className="border-t border-white/[0.06] pt-5 mt-6 text-xs text-zinc-500 space-y-2.5 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/[0.02]">
                        <div className="flex justify-between">
                          <span className="font-mono uppercase">// Operations Role</span>
                          <span className="text-zinc-300 font-bold">AVRO Executive Management</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-mono uppercase">// Technical Focus</span>
                          <span className="text-zinc-300">EduTech Core Systems (10+ Years Expertise)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-mono uppercase">// Major Engine</span>
                          <span className="text-zinc-350">가변식 MathML 렌더링 검정 자동화 기술</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDrawer === 'services' && (
                    <div className="space-y-5">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Bookmark className="w-5 h-5 text-cyan-400" />
                        주요 서비스 라인업
                      </h3>
                      <div className="space-y-4">
                        {servicesData.map((service) => (
                          <div key={service.num} className="p-4 rounded-xl border border-white/[0.04] bg-[#0c0c11]">
                            <div className="flex gap-3 justify-between items-baseline mb-2">
                              <span className="text-xs font-mono font-bold text-cyan-400">{service.num}</span>
                              <h4 className="text-sm font-bold text-white flex-1 text-left select-text">{service.title}</h4>
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-relaxed mb-3">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {service.items.map((it, idx) => (
                                <span key={idx} className="bg-black/40 border border-white/[0.04] px-1.5 py-0.5 rounded text-[8.5px] text-zinc-500">
                                  {it}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeDrawer === 'timeline' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold text-white">Milestones Chronology</h3>
                      <div className="border-l border-white/[0.06] pl-5 space-y-6 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                        {timelineData.map((mile) => (
                          <div key={mile.year} className="relative text-left">
                            <div className="absolute -left-[26.5px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                            <span className="font-mono text-sm font-black text-cyan-400 block mb-1">{mile.year}</span>
                            <ul className="space-y-1 list-none m-0 p-0 text-[11px] text-zinc-400">
                              {mile.events.map((ev, idx) => (
                                <li key={idx} className={ev.isHighlight ? 'text-zinc-200 font-semibold' : ''}>
                                  - {ev.description}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeDrawer === 'process' && (
                    <div className="space-y-5">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-cyan-400" />
                        품질 완성 및 보증 절차
                      </h3>
                      <div className="space-y-3.5">
                        {processSteps.map((proc) => (
                          <div key={proc.step} className="p-4 border border-white/[0.04] rounded-xl bg-white/[0.01]">
                            <span className="font-mono text-[9px] text-cyan-400 block mb-1">STAGE {proc.step} — {proc.englishTitle}</span>
                            <h4 className="text-xs font-black text-white">{proc.title}</h4>
                            <p className="text-[11px] text-zinc-400 leading-relaxed mt-2">
                              {proc.step === '01' ? '의뢰사의 실제 학습 문항 시편 및 연동 수식을 취합 분석하여 레이아웃 어긋남이 예상되는 조건들을 전수 도출합니다.' :
                               proc.step === '02' ? '가변 해상도, 장치별 브라우저 렌더러 파싱 규칙을 조율하여 수식이 깨지지 않도록 정확한 UI 프레임을 설계 적용합니다.' :
                               '테스팅 자동화 체크리스트와 교차 검사를 완료한 후 최종 승인 릴리즈를 배포 및 인도해 드립니다.'}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-white/[0.04] pt-4 mt-8 text-[9px] font-mono text-zinc-650 flex justify-between">
                <span>AVRO QA ENGINE</span>
                <span>STATE: CONFIDENTIAL</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
