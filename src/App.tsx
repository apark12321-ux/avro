/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Layers,
  Loader2,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import AICanvas from './components/AICanvas';
import CursorAura from './components/CursorAura';
import { partnersData, processSteps, projectsData, servicesData, timelineData } from './data';
import { ProjectItem } from './types';

type SlideIndex = 0 | 1 | 2 | 3;
type SlideDirection = 'left' | 'right';
type ProjectFilter = 'ALL' | 'AI' | 'CASE_STUDY';
type DrawerTab = 'about' | 'services' | 'timeline' | 'process';
type TerminalLog = { id: string | number; text: string; type: 'header' | 'info' | 'success' | 'warn' };

const slideTitles: Array<{ label: string; eng: string }> = [
  { label: '회사 소개', eng: 'COSMIC HOME' },
  { label: '주요 프로젝트', eng: 'SELECTED WORKS' },
  { label: '파트너 / 연혁', eng: 'TRUST MAP' },
  { label: '문의처', eng: 'CONTACT GATE' },
];

const terminalPresets: Record<string, { label: string; command: string; logs: Array<Omit<TerminalLog, 'id'>> }> = {
  parser: {
    label: 'Parser',
    command: 'npm run test --suite=math-parser',
    logs: [
      { text: 'Analyzing Korean math layout and symbol integrity...', type: 'info' },
      { text: 'Checking LaTeX, HWPX and curriculum metadata paths...', type: 'info' },
      { text: '✓ Formula parser passed typography and spacing rules.', type: 'success' },
      { text: '✓ Responsive educational content viewport verified.', type: 'success' },
    ],
  },
  qa: {
    label: 'QA',
    command: 'npm run verify --target=edutech-suite',
    logs: [
      { text: 'Loading AVRO quality-control matrix...', type: 'info' },
      { text: '✓ UI component state tree synchronized.', type: 'success' },
      { text: '✓ Workbook export and LMS assembly checks complete.', type: 'success' },
    ],
  },
  build: {
    label: 'Build',
    command: 'npm run build --theme=sky-184',
    logs: [
      { text: 'Compiling cosmic gradient surfaces and motion intervals...', type: 'info' },
      { text: '✓ Cyan-indigo tokens resolved.', type: 'success' },
      { text: '✓ Production bundle ready for Vercel deployment.', type: 'success' },
    ],
  },
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<SlideIndex>(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>('right');
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('ALL');
  const [liveSeoulTime, setLiveSeoulTime] = useState('');
  const [drawerTab, setDrawerTab] = useState<DrawerTab>('about');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activePreset, setActivePreset] = useState('parser');
  const [isTerminalRunning, setIsTerminalRunning] = useState(false);
  const [typedCommand, setTypedCommand] = useState(terminalPresets.parser.command);
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    { id: 'init-1', text: 'sky-184 interface boot sequence initialized.', type: 'header' },
    { id: 'init-2', text: '✓ AVRO education domain knowledge base loaded.', type: 'success' },
    { id: 'init-3', text: '✓ Interactive QA canvas and portfolio modules online.', type: 'success' },
  ]);

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'ALL') return projectsData;
    if (projectFilter === 'AI') {
      return projectsData.filter((project) =>
        project.tags.some((tag) => /ai|saas|스마트|저작|개발/i.test(tag)) || project.name.toLowerCase().includes('blogstudio'),
      );
    }
    return projectsData.filter((project) => project.status === 'CASE STUDY');
  }, [projectFilter]);

  const goToSlide = (idx: SlideIndex) => {
    if (idx === currentSlide) return;
    setSlideDirection(idx > currentSlide ? 'right' : 'left');
    setCurrentSlide(idx);
  };

  const goToNextSlide = () => {
    setSlideDirection('right');
    setCurrentSlide((prev) => ((prev + 1) % slideTitles.length) as SlideIndex);
  };

  const goToPrevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide((prev) => ((prev - 1 + slideTitles.length) % slideTitles.length) as SlideIndex);
  };

  const openDrawer = (tab: DrawerTab) => {
    setDrawerTab(tab);
    setIsDrawerOpen(true);
  };

  const runTerminalSimulation = (presetKey: string) => {
    if (isTerminalRunning) return;
    const preset = terminalPresets[presetKey] || terminalPresets.parser;
    setActivePreset(presetKey);
    setIsTerminalRunning(true);
    setTypedCommand('');
    setTerminalLogs([{ id: `head-${Date.now()}`, text: preset.command, type: 'header' }]);

    let charIndex = 0;
    const typeTimer = window.setInterval(() => {
      setTypedCommand((prev) => prev + preset.command.charAt(charIndex));
      charIndex += 1;
      if (charIndex >= preset.command.length) {
        window.clearInterval(typeTimer);
        preset.logs.forEach((log, idx) => {
          window.setTimeout(() => {
            setTerminalLogs((prev) => [...prev.slice(-5), { ...log, id: `${Date.now()}-${idx}` }]);
            if (idx === preset.logs.length - 1) setIsTerminalRunning(false);
          }, 260 * (idx + 1));
        });
      }
    }, 28);
  };

  useEffect(() => {
    const updateSeoulTime = () => {
      setLiveSeoulTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Seoul',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date()),
      );
    };
    updateSeoulTime();
    const timer = window.setInterval(updateSeoulTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
      if (event.key === 'ArrowRight' || event.key === ' ') goToNextSlide();
      if (event.key === 'ArrowLeft') goToPrevSlide();
      if (event.key === 'Escape') setIsDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#020616] via-[#05102a] to-[#01030e] text-slate-100 font-sans selection:bg-cyan-300 selection:text-[#020616]">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_45%)]" />
        <div className="absolute -top-40 -left-28 h-[420px] w-[420px] rounded-full bg-cyan-400/24 blur-[130px] animate-aurora-pulse" />
        <div className="absolute top-[16%] -right-24 h-[460px] w-[460px] rounded-full bg-indigo-500/22 blur-[150px] animate-slow-float" />
        <div className="absolute -bottom-36 left-[24%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/14 blur-[155px]" />
        <div className="absolute inset-0 bg-grid-mesh opacity-60 animate-grid-move" />
        <div className="absolute inset-0 bg-noise opacity-[0.025]" />
        <AICanvas />
      </div>

      <CursorAura />

      <header className="relative z-50 border-b border-white/10 bg-[#020616]/58 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button onClick={() => goToSlide(0)} className="group flex items-center gap-3 text-left" aria-label="AVRO 홈으로 이동">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00ffd5] via-cyan-400 to-violet-500 font-mono text-lg font-black text-[#020616] shadow-[0_0_34px_rgba(0,255,213,0.36)] transition-transform group-hover:scale-105">
              A
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(0,255,213,0.9)]" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-mono text-sm font-extrabold tracking-[0.32em] text-white">AVRO</span>
              <span className="mt-1 text-[9px] font-semibold tracking-[0.3em] text-cyan-200/70">AI ENGINEERING STUDIO</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
            {slideTitles.map((slide, idx) => (
              <button
                key={slide.eng}
                onClick={() => goToSlide(idx as SlideIndex)}
                className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-tight transition-all ${
                  currentSlide === idx
                    ? 'bg-white/10 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.12)]'
                    : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.055] px-3 py-1.5 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00ffd5] shadow-[0_0_10px_rgba(0,255,213,0.95)]" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-100/80">SEOUL LIVE : {liveSeoulTime || '00:00:00'}</span>
            </div>
            <button
              onClick={() => goToSlide(3)}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00ffd5] via-cyan-400 to-blue-500 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#020616] shadow-[0_4px_24px_rgba(6,182,212,0.38)] transition-all hover:scale-[1.03]"
            >
              Contact
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex h-[calc(100vh-7rem)] max-w-7xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait" custom={slideDirection}>
            {currentSlide === 0 && (
              <SlideShell key="intro" direction={slideDirection}>
                <section className="grid h-full w-full grid-cols-1 items-center gap-6 overflow-y-auto py-4 pr-1 custom-scrollbar lg:grid-cols-12 lg:overflow-visible lg:py-0">
                  <div className="mx-auto flex max-w-4xl flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-cyan-100">
                      <Sparkles className="h-3.5 w-3.5 text-[#00ffd5]" />
                      The Sky 184 · AVRO Reframed
                    </div>

                    <h1 className="max-w-5xl text-4xl font-black leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                      함께 여는<br />
                      <span className="sky-gradient-text text-glow-cyan">새로운 연결</span>
                    </h1>

                    <p className="mt-5 max-w-2xl break-keep text-sm leading-7 text-slate-300 sm:text-base">
                      사람과 지식이 하나로 이어지는 공간, AVRO. 10년의 공교육 콘텐츠 검수 경험과 AI 엔지니어링을 결합해 교육·콘텐츠·업무 자동화가 실제로 작동하는 인터페이스를 설계합니다.
                    </p>

                    <div className="mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                      <button
                        onClick={() => openDrawer('about')}
                        className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.055] px-5 py-3 text-sm font-extrabold text-white backdrop-blur-xl transition-all hover:border-cyan-200/50 hover:bg-white/[0.09]"
                      >
                        <BookOpen className="h-4 w-4 text-cyan-200" />
                        에이브로 소개서
                        <ArrowRight className="h-4 w-4 text-cyan-200 transition-transform group-hover:translate-x-1" />
                      </button>
                      <button
                        onClick={() => goToSlide(1)}
                        className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00ffd5] via-cyan-400 to-blue-500 px-5 py-3 text-sm font-black text-[#020616] shadow-[0_4px_26px_rgba(6,182,212,0.42)] transition-all hover:scale-[1.02]"
                      >
                        <Sparkles className="h-4 w-4" />
                        프로젝트 탐색
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                      {['AI SaaS', 'Edu QA', 'LMS Builder', 'Digital Legacy'].map((tag) => (
                        <span key={tag} className="rounded-full border border-cyan-300/14 bg-cyan-300/[0.04] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/75">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <SimulatorPanel
                      typedCommand={typedCommand}
                      terminalLogs={terminalLogs}
                      isTerminalRunning={isTerminalRunning}
                      activePreset={activePreset}
                      runTerminalSimulation={runTerminalSimulation}
                    />
                  </div>
                </section>
              </SlideShell>
            )}

            {currentSlide === 1 && (
              <SlideShell key="projects" direction={slideDirection}>
                <section className="flex h-full w-full flex-col overflow-y-auto py-4 custom-scrollbar">
                  <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="font-mono text-[10px] font-black uppercase tracking-[0.32em] text-cyan-200">02 / Selected Projects</p>
                      <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">검증된 프로젝트와 제품군.</h2>
                    </div>
                    <div className="flex shrink-0 gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1">
                      {(['ALL', 'AI', 'CASE_STUDY'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setProjectFilter(filter)}
                          className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] transition-all ${
                            projectFilter === filter
                              ? 'bg-gradient-to-r from-[#00ffd5] to-cyan-400 text-[#020616] shadow-[0_0_18px_rgba(0,255,213,0.22)]'
                              : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                          }`}
                        >
                          {filter === 'ALL' ? '전체' : filter === 'AI' ? 'AI/SaaS' : '기획사례'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid flex-1 grid-cols-1 gap-4 overflow-y-auto pr-1 custom-scrollbar md:grid-cols-2">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </section>
              </SlideShell>
            )}

            {currentSlide === 2 && (
              <SlideShell key="timeline" direction={slideDirection}>
                <section className="grid h-full w-full grid-cols-1 gap-6 overflow-y-auto py-4 custom-scrollbar lg:grid-cols-12 lg:items-center lg:overflow-visible lg:py-0">
                  <div className="lg:col-span-6">
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.32em] text-cyan-200">03 / Chronology Roadmap</p>
                    <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">10년의 발자취와 증명.</h2>
                    <div className="mt-6 max-h-[48vh] space-y-6 overflow-y-auto border-l border-cyan-200/14 pl-6 pr-2 custom-scrollbar">
                      {timelineData.map((mile) => (
                        <div key={mile.year} className="relative">
                          <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-cyan-200 bg-[#020616] shadow-[0_0_18px_rgba(34,211,238,0.46)]" />
                          <h3 className="font-mono text-base font-black text-[#00ffd5]">{mile.year}</h3>
                          <ul className="mt-2 space-y-2">
                            {mile.events.map((event, idx) => (
                              <li key={`${mile.year}-${idx}`} className={`break-keep text-sm leading-6 ${event.isHighlight ? 'font-semibold text-white' : 'text-slate-400'}`}>
                                {event.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.32em] text-violet-200">04 / Trusted Partners</p>
                    <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">함께 성과를 만든 파트너.</h2>
                    <div className="mt-6 grid max-h-[48vh] grid-cols-2 gap-3 overflow-y-auto pr-1 custom-scrollbar sm:grid-cols-3">
                      {partnersData.map((partner) => (
                        <div key={partner.name} className={`sky-card rounded-2xl p-4 text-center ${partner.isHighlight ? 'border-cyan-300/28 bg-cyan-300/[0.045]' : ''}`}>
                          <div className={`text-sm font-black ${partner.isHighlight ? 'text-cyan-100' : 'text-slate-200'}`}>{partner.name}</div>
                          <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-slate-500">{partner.type}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </SlideShell>
            )}

            {currentSlide === 3 && (
              <SlideShell key="contact" direction={slideDirection}>
                <section className="grid h-full w-full grid-cols-1 gap-7 overflow-y-auto py-4 custom-scrollbar lg:grid-cols-12 lg:items-center lg:overflow-visible lg:py-0">
                  <div className="lg:col-span-7">
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.32em] text-cyan-200">$ avro_connection_gate.open()</p>
                    <h2 className="mt-3 text-4xl font-black leading-[1.03] tracking-[-0.055em] text-white sm:text-6xl">
                      Together,<br />
                      <span className="sky-gradient-text">함께 만들어갈까요?</span>
                    </h2>
                    <p className="mt-5 max-w-2xl break-keep text-sm leading-7 text-slate-300 sm:text-base">
                      에듀테크 서비스 기획·구축, 맞춤형 생성형 AI 결합 설계, 웹 데이터 자동화 시스템 자문이 필요하다면 아래 대표 이메일로 문의를 남겨주세요.
                    </p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <a href="mailto:ceo@avro.co.kr" className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#00ffd5] via-cyan-400 to-blue-500 px-6 py-3 text-sm font-black text-[#020616] shadow-[0_4px_26px_rgba(6,182,212,0.42)] transition-all hover:scale-[1.02]">
                        <Mail className="h-4 w-4" />
                        ceo@avro.co.kr 메일 전송
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                      <button onClick={() => openDrawer('process')} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.055] px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all hover:border-cyan-200/50 hover:bg-white/[0.09]">
                        <Layers className="h-4 w-4 text-cyan-200" />
                        작업 프로세스 보기
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="sky-card rounded-3xl p-6">
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Corporate Specifications</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200/18 bg-cyan-200/[0.06] px-2.5 py-1 font-mono text-[9px] font-black uppercase text-cyan-100">
                          <ShieldCheck className="h-3 w-3" /> Qualified
                        </span>
                      </div>
                      <div className="mt-4 space-y-3 text-sm">
                        <Spec label="Company" value="(주)에이브로 · AVRO INC." />
                        <Spec label="CEO" value="박예준 대표" />
                        <Spec label="Registration" value="205-87-00590" />
                        <Spec label="Established" value="2016-07-18" />
                        <Spec label="HQ" value="인천광역시 서구 청라에메랄드로 99" />
                      </div>
                      <div className="mt-5 rounded-2xl border border-cyan-200/12 bg-cyan-200/[0.035] p-4 text-xs leading-6 text-slate-400">
                        평균 회신 대기열은 업무일 기준으로 순차 처리합니다. 프로젝트 범위·데이터 형태·목표 산출물을 함께 전달하면 더 빠르게 검토할 수 있습니다.
                      </div>
                    </div>
                  </div>
                </section>
              </SlideShell>
            )}
          </AnimatePresence>
        </div>
      </main>

      <section className="pointer-events-none fixed bottom-12 left-0 right-0 z-40 overflow-hidden border-y border-cyan-200/12 bg-cyan-200/[0.055] py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.28em] text-cyan-100/80 backdrop-blur-md sm:text-[10px]">
        <div className="flex whitespace-nowrap">
          {[0, 1].map((item) => (
            <div key={item} className="flex shrink-0 animate-tick gap-14 pr-14">
              <span>✦ AVRO EDUTECH INTELLIGENCE</span>
              <span className="text-cyan-200/25">/</span>
              <span>AI ENGINEERING STUDIO</span>
              <span className="text-cyan-200/25">/</span>
              <span>INTERACTIVE QA SYSTEM</span>
              <span className="text-cyan-200/25">/</span>
              <span>SINCE 2016</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-50 flex h-12 items-center justify-between border-t border-white/10 bg-[#020616]/78 px-4 backdrop-blur-2xl sm:px-6 lg:px-8">
        <div className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-[#00ffd5] via-cyan-400 to-violet-500 shadow-[0_0_14px_rgba(34,211,238,0.58)] transition-all duration-500" style={{ width: `${((currentSlide + 1) / slideTitles.length) * 100}%` }} />
        <div className="flex items-center gap-3">
          <button onClick={goToPrevSlide} className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-slate-400 transition-colors hover:border-cyan-200/40 hover:text-cyan-100" aria-label="이전 슬라이드">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={goToNextSlide} className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-slate-400 transition-colors hover:border-cyan-200/40 hover:text-cyan-100" aria-label="다음 슬라이드">
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="hidden gap-1.5 sm:flex">
            {slideTitles.map((slide, idx) => (
              <button key={slide.eng} onClick={() => goToSlide(idx as SlideIndex)} className={`h-2 rounded-full transition-all ${currentSlide === idx ? 'w-6 bg-[#00ffd5] shadow-[0_0_12px_rgba(0,255,213,0.6)]' : 'w-2 bg-white/15 hover:bg-white/30'}`} aria-label={`${slide.label} 슬라이드로 이동`} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-right font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00ffd5] shadow-[0_0_10px_rgba(0,255,213,0.8)]" />
          DECK {currentSlide + 1}/{slideTitles.length} · {slideTitles[currentSlide].eng}
        </div>
      </footer>

      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-[9999] overflow-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.74 }} exit={{ opacity: 0 }} onClick={() => setIsDrawerOpen(false)} className="absolute inset-0 cursor-pointer bg-[#020616] backdrop-blur-md" />
            <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 220 }} className="absolute bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-cyan-200/14 bg-[#030819]/96 shadow-[-24px_0_80px_rgba(0,0,0,0.55)] sm:w-[560px] md:w-[680px]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00ffd5] to-violet-500 font-mono font-black text-[#020616]">A</span>
                  <div>
                    <div className="font-mono text-xs font-black uppercase tracking-[0.24em] text-white">AVRO Platform Guide</div>
                    <div className="mt-0.5 text-[10px] font-semibold text-slate-500">상세 정보 패널</div>
                  </div>
                </div>
                <button onClick={() => setIsDrawerOpen(false)} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-white">Close</button>
              </div>

              <div className="flex gap-1 overflow-x-auto border-b border-white/10 px-5 py-3 scrollbar-none">
                {([
                  { id: 'about', label: '회사 소개' },
                  { id: 'services', label: '상세 서비스' },
                  { id: 'timeline', label: '스튜디오 연혁' },
                  { id: 'process', label: '작업 프로세스' },
                ] as Array<{ id: DrawerTab; label: string }>).map((tab) => (
                  <button key={tab.id} onClick={() => setDrawerTab(tab.id)} className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all ${drawerTab === tab.id ? 'border-cyan-200/30 bg-cyan-200/[0.08] text-cyan-100' : 'border-transparent text-slate-500 hover:bg-white/[0.035] hover:text-slate-200'}`}>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-5 custom-scrollbar sm:p-7">
                {drawerTab === 'about' && <AboutDrawer />}
                {drawerTab === 'services' && <ServicesDrawer />}
                {drawerTab === 'timeline' && <TimelineDrawer />}
                {drawerTab === 'process' && <ProcessDrawer />}
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SlideShell({ children, direction }: { children: React.ReactNode; direction: SlideDirection }) {
  return (
    <motion.div
      custom={direction}
      variants={{
        enter: (dir: SlideDirection) => ({ x: dir === 'right' ? '7vw' : '-7vw', opacity: 0, filter: 'blur(10px)' }),
        center: { x: 0, opacity: 1, filter: 'blur(0px)' },
        exit: (dir: SlideDirection) => ({ x: dir === 'right' ? '-7vw' : '7vw', opacity: 0, filter: 'blur(10px)' }),
      }}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}

function SimulatorPanel({ typedCommand, terminalLogs, isTerminalRunning, activePreset, runTerminalSimulation }: { typedCommand: string; terminalLogs: TerminalLog[]; isTerminalRunning: boolean; activePreset: string; runTerminalSimulation: (preset: string) => void }) {
  return (
    <div className="glass-effect overflow-hidden rounded-3xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#020616]/55 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/80" />
        </div>
        <div className="font-mono text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">AVRO_SIMULATOR</div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] font-black uppercase tracking-[0.16em] text-cyan-200">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00ffd5] shadow-[0_0_10px_rgba(0,255,213,0.8)]" /> Online
        </div>
      </div>

      <div className="p-4">
        <div className="rounded-2xl border border-cyan-200/10 bg-[#020616]/60 p-4 font-mono text-[11px] leading-6 text-slate-300">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-slate-500">// interactive CLI / QA validation</span>
            <span className="rounded-full bg-cyan-300/[0.08] px-2 py-0.5 text-[9px] font-black uppercase text-cyan-100">Active</span>
          </div>
          <div className="min-h-[196px] space-y-2">
            <div className="text-cyan-100"><span className="text-[#00ffd5]">$</span> {typedCommand}<span className="ml-1 inline-block h-3 w-1 bg-[#00ffd5] align-middle shadow-[0_0_10px_rgba(0,255,213,0.8)]" /></div>
            {terminalLogs.map((log) => (
              <div key={log.id} className={log.type === 'success' ? 'text-cyan-100' : log.type === 'warn' ? 'text-amber-200' : log.type === 'header' ? 'text-violet-200' : 'text-sky-300'}>
                {log.type === 'success' ? '✓' : log.type === 'header' ? '>' : '→'} {log.text}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {Object.entries(terminalPresets).map(([key, preset]) => (
            <button key={key} onClick={() => runTerminalSimulation(key)} disabled={isTerminalRunning} className={`rounded-full border px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.14em] transition-all ${activePreset === key ? 'border-cyan-200/35 bg-cyan-200/[0.1] text-cyan-100' : 'border-white/10 bg-white/[0.035] text-slate-400 hover:border-cyan-200/24 hover:text-white'}`}>
              {isTerminalRunning && activePreset === key ? <Loader2 className="mx-auto h-3.5 w-3.5 animate-spin" /> : preset.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="sky-card sky-card-hover relative flex min-h-[245px] flex-col justify-between overflow-hidden rounded-3xl p-5">
      {project.isFeatured && (
        <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-[#00ffd5] to-cyan-400 px-3 py-1 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-[#020616]">대표 혁신</div>
      )}
      <div>
        <div className="flex flex-wrap items-center gap-2 pr-24">
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#00ffd5]">{project.id}</span>
          <span className="rounded-full border border-cyan-200/14 bg-cyan-200/[0.04] px-2 py-0.5 font-mono text-[8px] font-black uppercase tracking-[0.16em] text-cyan-100/80">{project.status}</span>
        </div>
        <h3 className="mt-4 break-keep text-xl font-black tracking-[-0.025em] text-white">{project.name}</h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">{project.client}</p>
        <p className="mt-4 break-keep text-sm leading-6 text-slate-400">{project.description}</p>
      </div>
      <div className="mt-5 border-t border-white/10 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full border border-white/8 bg-white/[0.035] px-2 py-0.5 text-[10px] font-semibold text-slate-400">#{tag}</span>
          ))}
        </div>
        {project.domain && (
          <a href={`https://${project.domain}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] font-black uppercase tracking-[0.14em] text-cyan-200 hover:text-white">
            {project.domain} <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/[0.06] pb-2 last:border-b-0">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{label}</span>
      <strong className="break-keep text-right text-slate-200">{value}</strong>
    </div>
  );
}

function AboutDrawer() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.26em] text-cyan-200">// Corporate Goal</p>
        <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">10년의 견고한 레거시,<br /><span className="sky-gradient-text">인공지능으로 연결되다.</span></h3>
      </div>
      <p className="break-keep text-sm leading-7 text-slate-300">에이브로는 대형 교과서 출판사의 학습 플랫폼 운영 검수(QA) 및 수리 콘텐츠 설계를 10년간 대행하며, 교육 현장에 요구되는 세밀한 가이드라인과 기능 무결성을 다져왔습니다.</p>
      <p className="break-keep text-sm leading-7 text-slate-300">이 도메인 자산을 바탕으로 교수자와 실무진이 필요로 하는 맞춤형 AI 에이전트, 에듀테크 저작 SaaS, 업무 자동화 웹 솔루션을 빠르고 탄탄하게 기획·개발합니다.</p>
      <div className="sky-card rounded-2xl p-4">
        <Spec label="법인명" value="주식회사 에이브로 (AVRO INC.)" />
        <Spec label="설립" value="2016년 7월 18일" />
        <Spec label="대표이사" value="박예준" />
      </div>
    </div>
  );
}

function ServicesDrawer() {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.26em] text-cyan-200">// Four Capabilities</p>
        <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">AI로 확장하는 네 가지 비즈니스 축.</h3>
      </div>
      {servicesData.map((service) => (
        <div key={service.num} className="sky-card rounded-2xl p-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-cyan-200/20 bg-cyan-200/[0.08] px-2 py-0.5 font-mono text-[10px] font-black text-cyan-100">{service.num}</span>
            <h4 className="font-black text-white">{service.title}</h4>
          </div>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">{service.englishTitle}</p>
          <p className="mt-3 break-keep text-sm leading-6 text-slate-400">{service.description}</p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {service.items.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-slate-300"><Check className="h-3.5 w-3.5 shrink-0 text-cyan-200" /> {item}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TimelineDrawer() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.26em] text-cyan-200">// Chronology</p>
        <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">10년의 발자취와 도약 레거시.</h3>
      </div>
      <div className="space-y-5 border-l border-cyan-200/14 pl-5">
        {timelineData.map((mile) => (
          <div key={mile.year} className="relative">
            <span className="absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full border-2 border-cyan-200 bg-[#020616]" />
            <h4 className="font-mono text-sm font-black text-[#00ffd5]">{mile.year}</h4>
            <ul className="mt-2 space-y-1.5">
              {mile.events.map((event, idx) => <li key={idx} className="break-keep text-sm leading-6 text-slate-400">{event.description}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessDrawer() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.26em] text-cyan-200">// Workflow</p>
        <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">의뢰가 완결로 이어지는 정밀 흐름.</h3>
      </div>
      <div className="space-y-3">
        {processSteps.map((step) => (
          <div key={step.step} className="sky-card flex items-center gap-4 rounded-2xl p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-200/24 bg-cyan-200/[0.08] font-mono text-sm font-black text-cyan-100">{step.step}</div>
            <div>
              <h4 className="font-black text-white">{step.title}</h4>
              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">{step.englishTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-cyan-200/12 bg-cyan-200/[0.035] p-4 text-sm leading-7 text-slate-400">
        <Clock className="mr-2 inline h-4 w-4 text-cyan-200" /> 범위 확정 → PoC → 검증 → 배포 순서로 산출물을 단계별로 확인합니다.
      </div>
    </div>
  );
}
