/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  Bot,
  Terminal,
  Code2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Layers,
  Workflow,
  Video,
  ArrowUpRight,
  Clock,
  Briefcase,
  Users,
  Compass,
  ArrowRight,
  FileCheck2,
  LineChart,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { timelineData, servicesData, projectsData, partnersData, processSteps } from './data';
import { ProjectItem } from './types';
import AICanvas from './components/AICanvas';
import CursorAura from './components/CursorAura';
import TiltCard from './components/TiltCard';
import GlitchText from './components/GlitchText';

export default function App() {
  const [activeService, setActiveService] = useState<string | null>('01');
  const [projectFilter, setProjectFilter] = useState<'ALL' | 'AI' | 'CASE_STUDY'>('ALL');
  const [liveSeoulTime, setLiveSeoulTime] = useState<string>('');
  const [typedCommand, setTypedCommand] = useState<string>('npm run dev --filter=ebsmath-helper');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ id: string | number; text: string; type: 'client' | 'info' | 'success' | 'warn' | 'header' }>>([
    { id: 1, text: 'npm run dev --filter=ebsmath-helper', type: 'header' },
    { id: 2, text: '[vite] local server running on port 3000', type: 'info' },
    { id: 3, text: '✓ Educational metadata and QA validation schemas loaded.', type: 'success' },
    { id: 4, text: '✓ Shared UI components & math LaTeX converter ready.', type: 'success' },
    { id: 5, text: 'Web application environment listening for developer commands.', type: 'info' }
  ]);
  const [isTerminalBuilding, setIsTerminalBuilding] = useState<boolean>(false);
  const [activeTerminalPreset, setActiveTerminalPreset] = useState<string>('lesson');

  // Main Horizontal Slide Navigation state (0 to 5)
  // 0: Home/About Intro, 1: QA Checklist, 2: SaaS Playground, 3: Works, 4: Timeline & Partners, 5: Contact
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 6;
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    setSlideDirection(idx > currentSlide ? 'right' : 'left');
    setCurrentSlide(idx);
  };

  const goToNextSlide = () => {
    setSlideDirection('right');
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Keyboard navigation support for premium horizontal deck layout
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate if user is in an active text area or input (if any are added)
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Slide 1: Interactive QA Checklist Simulator state
  const [qaStatus, setQaStatus] = useState<'idle' | 'running' | 'complete'>('idle');
  const [qaSteps, setQaSteps] = useState([
    { name: 'LaTeX 수학 식 표준 기호 탑재 및 파싱 적합도 판정', status: 'idle', desc: '표준 수식 변환 규칙 일치 여부' },
    { name: '대형 출판사 전임 단원 분류 메타데이터 매칭', status: 'idle', desc: '커리큘럼 맵핑 식별자 정밀도 100%' },
    { name: '크로스 브라우저 다중 플랫폼 스크린 오차 검수', status: 'idle', desc: '크롬/사파리/웨일 반응형 깨짐 및 여백 공차 검출' },
    { name: 'KWCAG 2.2 웹 접근성 준수 체크리스트 검사', status: 'idle', desc: '스크린 리더 태그 및 대체 텍스트 무결성 측정' }
  ]);

  const runQaSimulation = () => {
    if (qaStatus === 'running') return;
    setQaStatus('running');
    
    // Reset steps
    setQaSteps((prev) => prev.map((s, idx) => ({ ...s, status: idx === 0 ? 'running' : 'idle' })));
    
    let currentStepIndex = 0;
    const processSteps = () => {
      setQaSteps((prev) => {
        const next = [...prev];
        // Complete current step
        next[currentStepIndex] = { ...next[currentStepIndex], status: 'success' };
        // If there's a next, make it running
        if (currentStepIndex < 3) {
          next[currentStepIndex + 1] = { ...next[currentStepIndex + 1], status: 'running' };
        }
        return next;
      });
      
      currentStepIndex++;
      if (currentStepIndex < 4) {
        setTimeout(processSteps, 1200);
      } else {
        setQaStatus('complete');
      }
    };
    
    setTimeout(processSteps, 1200);
  };

  // Slide 2: Interactive Curriculum Block Customizer state
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>(['header', 'math', 'quiz']);
  const toggleBlock = (blockId: string) => {
    if (selectedBlocks.includes(blockId)) {
      if (selectedBlocks.length > 1) { // keep at least 1 block active
        setSelectedBlocks(selectedBlocks.filter((b) => b !== blockId));
      }
    } else {
      setSelectedBlocks([...selectedBlocks, blockId]);
    }
  };

  // Slide drawer state variables for full company details
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerTab, setDrawerTab] = useState<'about' | 'services' | 'timeline' | 'process'>('about');

  const openDrawer = (tab: 'about' | 'services' | 'timeline' | 'process') => {
    setDrawerTab(tab);
    setIsDrawerOpen(true);
  };

  // Close drawer with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Time ticker effect
  useEffect(() => {
    const updateSeoulTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Seoul',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setLiveSeoulTime(now.toLocaleTimeString('en-US', options));
    };
    updateSeoulTime();
    const interval = setInterval(updateSeoulTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Terminal process simulator trigger
  const runTerminalSimulation = (preset: string) => {
    if (isTerminalBuilding) return;
    setIsTerminalBuilding(true);
    setActiveTerminalPreset(preset);
    
    let commandText = '';
    let sequence: Array<{ text: string; type: 'client' | 'info' | 'success' | 'warn' | 'header' }> = [];

    switch (preset) {
      case 'lesson':
        commandText = 'npm run test --suite=math-parser';
        sequence = [
          { text: 'Analyzing math question layout and instruction standards...', type: 'info' },
          { text: 'Checking compatibility with EBSMath curriculum format databases...', type: 'info' },
          { text: '✓ Successfully verified LaTeX math formula parsing rules.', type: 'success' },
          { text: '✓ Verified HWPX math document metadata extraction.', type: 'success' },
          { text: '✓ Core math parser: Passed all 42 integrity checks.', type: 'success' }
        ];
        break;
      case 'evaluation':
        commandText = 'npm run compile:workbook';
        sequence = [
          { text: 'Converting digital design system to student print-ready workbook layout...', type: 'info' },
          { text: 'Synthesizing grid parameters, margins, and section headings...', type: 'info' },
          { text: '✓ Compiled 5 interactive workbook templates beautifully.', type: 'success' },
          { text: '✓ Validated PDF page breaks and responsive image rendering paths.', type: 'success' },
          { text: '✓ Web layout export checklist: 100% compliant.', type: 'success' }
        ];
        break;
      case 'visualize':
        commandText = 'npm run build:ui --preset=responsive';
        sequence = [
          { text: 'Compiling custom Tailwind components and interactive CSS layers...', type: 'info' },
          { text: 'Bundling web application bundles via Vite bundler...', type: 'info' },
          { text: '✓ CSS modules minified and asset path trees resolved.', type: 'success' },
          { text: '✓ Generated responsive visual components in /dist/assets/ smoothly.', type: 'success' },
          { text: '✓ UI/UX assets rendering validation complete.', type: 'success' }
        ];
        break;
      case 'integrate':
        commandText = 'npm run deploy --target=production';
        sequence = [
          { text: 'Running production build and performance audit pipeline...', type: 'info' },
          { text: 'Deploying secure static builds to public CDN networks...', type: 'info' },
          { text: '✓ Successfully synchronized build with target platform folders.', type: 'success' },
          { text: '✓ SSL cache purged and server routes updated gracefully.', type: 'success' },
          { text: '✓ Client-side and server-side assets are now live: v1.3.0 deployed!', type: 'success' }
        ];
        break;
      default:
        commandText = 'npm run optimize';
        sequence = [{ text: 'Asset tree optimization complete.', type: 'success' }];
    }

    setTypedCommand('');
    
    // Animate typing text
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedCommand((prev) => prev + commandText.charAt(index));
      index++;
      if (index >= commandText.length) {
        clearInterval(typingInterval);
        
        // Append sequences with slight delays
        let logIndex = 0;
        const logTimer = setInterval(() => {
          if (logIndex < sequence.length) {
            const currentLog = sequence[logIndex];
            setTerminalLogs((prev) => [
              ...prev.slice(-9), // Keep only last few logs to prevent overflow
              {
                id: `log-${Date.now()}-${logIndex}-${Math.random().toString(36).substring(2, 9)}`,
                text: currentLog.text,
                type: currentLog.type
              }
            ]);
            logIndex++;
          } else {
            clearInterval(logTimer);
            setIsTerminalBuilding(false);
          }
        }, 300);
      }
    }, 40);
  };

  // Filter projects depending on selected tag
  const filteredProjects = projectsData.filter((project) => {
    if (projectFilter === 'ALL') return true;
    if (projectFilter === 'AI') return project.id.startsWith('PRD') || project.tags.some(tag => tag.toLowerCase().includes('ai') || tag.toLowerCase().includes('osmu') || tag.toLowerCase().includes('saas'));
    if (projectFilter === 'CASE_STUDY') return project.status === 'CASE STUDY';
    return true;
  });

  // Slide names mapping for visual pagination & navigation indicators
  const slideTitles = [
    { label: '회사 소개', eng: 'HOME ABOUT' },
    { label: '검수 QA', eng: 'VERIFY QA' },
    { label: 'SaaS 저작', eng: 'SAAS TOOL' },
    { label: '주요 프로젝트', eng: 'WORKS' },
    { label: '파트너 / 연혁', eng: 'PARTNERS' },
    { label: '문의처', eng: 'CONTACT' }
  ];

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#07070a] text-slate-100 font-sans relative selection:bg-lime-400 selection:text-black flex flex-col">
      
      {/* Visual background overlays & interactive gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Neon blur ambient gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(91,139,255,0.1)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,255,58,0.05)_0%,transparent_70%)] blur-[100px]" />
        
        {/* Tech Grid overlay */}
        <div className="absolute inset-0 bg-grid-mesh opacity-30 animate-grid-move" />

        {/* Ambient floating tech points */}
        <div className="absolute top-[15%] left-[25%] w-1.5 h-1.5 rounded-full bg-lime-400/40 shadow-[0_0_10px_#d4ff3a] animate-pulse" />
        <div className="absolute top-[40%] right-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400/30 shadow-[0_0_10px_#22d3ee] animate-pulse delay-700" />
        <div className="absolute bottom-[35%] left-[10%] w-1 h-1 rounded-full bg-blue-400/20 shadow-[0_0_8px_#5b8bff]" />
      </div>

      {/* Modern Aura Cursor Follower with smooth inertia tracking */}
      <CursorAura />

      {/* FIXED NAVHEADER */}
      <header className="w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.04]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-md bg-lime-400 text-black font-mono font-black flex items-center justify-center text-lg shadow-[0_0_15px_rgba(212,255,58,0.3)] relative group cursor-pointer transition-transform"
              onClick={() => goToSlide(0)}
            >
              A
              <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-mono font-extrabold tracking-wider text-sm sm:text-base text-white leading-none">AVRO</span>
              <span className="text-[9px] text-zinc-500 font-mono tracking-widest leading-none mt-1">에이브로</span>
            </div>
          </div>

          {/* Desktop Navigation linked directly to the 6 Horizontal Slides */}
          <div className="hidden md:flex items-center gap-5 mr-1 font-sans text-xs">
            {slideTitles.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`font-semibold tracking-wider transition-all cursor-pointer bg-transparent border-none py-1.5 px-3 rounded-lg ${
                  currentSlide === idx 
                    ? 'text-lime-400 bg-white/[0.03] border border-white/[0.05]' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.01]'
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Live Seoul Time Clock */}
            <div className="hidden lg:flex items-center gap-2 border border-white/[0.06] rounded-full px-3 py-1 bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_#d4ff3a]" />
              <span className="text-[9px] font-mono text-zinc-400 tracking-wider">SEL CLOCK {liveSeoulTime || '15:20:00'}</span>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://avro-home.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Main Site</span>
              <span className="text-lime-400 font-sans text-xs">↗</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToSlide(5)}
              className="relative inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-blue-500 via-cyan-400 to-lime-400 text-black overflow-hidden shadow-[0_4px_15px_rgba(34,211,238,0.25)] group"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              <span>Contact</span>
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
                →
              </motion.span>
            </motion.button>
          </div>
        </nav>
      </header>

      {/* MAIN VIEWPORT - RESPONSIVE SLIDER CONTENT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center overflow-hidden">
        
        <div className="relative w-full h-[calc(100vh-160px)] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={slideDirection}>
            
            {/* SLIDE 0: INTRO */}
            {currentSlide === 0 && (
              <motion.div
                key="slide-0"
                custom={slideDirection}
                variants={{
                  enter: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '100vw' : '-100vw', opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '-100vw' : '100vw', opacity: 0 })
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                className="absolute inset-0 w-full h-full flex items-center grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 overflow-y-auto lg:overflow-visible py-4 custom-scrollbar"
              >
                {/* Left Column Content */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  <div className="inline-flex flex-wrap items-center gap-2 border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 rounded-full w-max text-[9px] font-mono tracking-widest text-cyan-400 uppercase mb-4 sm:mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>MISSION 01 : AI EDUTECH PIVOT</span>
                    <span className="text-zinc-600">|</span>
                    <span className="text-white">EST. 2016</span>
                  </div>

                  <h1 className="text-[1.5rem] xs:text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[2.4rem] xl:text-[2.8rem] font-sans font-black tracking-tight leading-[1.2] mb-4 sm:mb-5 text-zinc-100 break-keep">
                    10년의 교육 콘텐츠 노하우,<br/>
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-lime-400 bg-clip-text text-transparent">실용적 AI 기술</span>로 날개를 달다.
                  </h1>

                  <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed mb-5 sm:mb-6">
                    대형 출판 플랫폼 구축 운영에서 다져진 데이터 신뢰성을 수렴하며, 최적의 스마트 AI 학습 인터페이스 및 맞춤 에이전트를 실현해 나갑니다. 실용적인 교육적 성취를 위한 설계의 정수를 선보입니다.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="px-2.5 py-1 rounded-full border border-lime-400/30 bg-lime-400/5 text-lime-400 font-mono text-[8px] uppercase font-bold tracking-widest">
                      Educational Web App
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[8px] uppercase font-semibold tracking-wider">
                      AI Curation Engine
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[8px] uppercase font-semibold tracking-wider">
                      E-Learning Tools
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-white/[0.04]">
                    <button
                      onClick={() => openDrawer('about')}
                      className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-white/[0.02] hover:bg-neutral-900 border border-white/[0.08] hover:border-lime-400/40 text-left transition-all group max-w-sm cursor-pointer"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="text-white text-xs font-bold font-sans flex items-center gap-1.5 truncate">
                          회사 상세 안내서 확인
                          <ArrowRight className="w-3.5 h-3.5 text-lime-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </span>
                        <span className="text-zinc-500 font-mono text-[8px] uppercase tracking-wider mt-0.5">ABOUT AVRO INC</span>
                      </div>
                    </button>

                    <button
                      onClick={() => openDrawer('services')}
                      className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-[#d4ff3a]/5 hover:bg-[#d4ff3a]/10 border border-[#d4ff3a]/25 hover:border-lime-400/60 text-left transition-all group max-w-sm cursor-pointer"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="text-[#d4ff3a] text-xs font-bold font-sans flex items-center gap-1.5 truncate">
                          핵심 서비스 상세 보기
                          <ArrowRight className="w-3.5 h-3.5 text-lime-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </span>
                        <span className="text-lime-400/50 font-mono text-[8px] uppercase tracking-wider mt-0.5">AVRO SERVICES</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right Interactive Column (Terminal Widget) */}
                <div className="lg:col-span-5 w-full flex justify-center items-center">
                  <div className="w-full max-w-md h-[340px] md:h-[360px] glass-effect rounded-xl border border-white/[0.08] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                    <div className="px-3.5 py-2.5 bg-[#0d0d12]/90 border-b border-white/[0.06] flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                      </div>
                      <div className="text-[9px] font-mono text-zinc-500">avro@studio: ~/workspace</div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-wider">online</span>
                      </div>
                    </div>

                    <div className="flex-1 p-3 overflow-y-auto text-left font-mono text-[10px] leading-relaxed space-y-1 bg-[#07070a]/90 select-text custom-scrollbar">
                      <AnimatePresence>
                        {terminalLogs.map((log) => (
                          <motion.div 
                            key={log.id}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className={`flex gap-1.5 items-baseline ${
                              log.type === 'success' ? 'text-lime-400' :
                              log.type === 'info' ? 'text-cyan-400' :
                              log.type === 'warn' ? 'text-red-400' :
                              log.type === 'header' ? 'text-indigo-400' : 'text-zinc-500'
                            }`}
                          >
                            <span className="text-[8px] text-zinc-600">[{new Date().toLocaleTimeString('en-US', { hour12: false })}]</span>
                            <span>{log.type === 'header' ? '$' : '→'}</span>
                            <span className={log.type === 'success' ? 'text-zinc-200' : ''}>{log.text}</span>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      <div className="flex gap-1.5 items-center pt-1.5 border-t border-white/[0.04] mt-1.5">
                        <span className="text-[8px] text-zinc-600">[READY]</span>
                        <span className="text-lime-400">$</span>
                        <span className="text-zinc-200">{typedCommand}</span>
                        <span className="w-1 h-3 bg-lime-400 animate-pulse inline-block" />
                      </div>
                    </div>

                    <div className="p-2.5 bg-zinc-950/90 border-t border-white/[0.06]">
                      <div className="text-[8px] text-zinc-500 uppercase tracking-wider text-left mb-1.5 font-mono flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5 text-lime-400 animate-bounce" />
                        Developer Commands Simulator
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {['lesson', 'evaluation', 'visualize', 'integrate'].map((preset) => (
                          <button
                            key={preset}
                            onClick={() => runTerminalSimulation(preset)}
                            disabled={isTerminalBuilding}
                            className={`px-1 py-1 rounded text-[8px] font-mono font-bold uppercase border transition-all cursor-pointer ${
                              activeTerminalPreset === preset
                                ? 'bg-lime-400/10 border-lime-400/50 text-lime-400'
                                : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.12] hover:text-white'
                            }`}
                          >
                            {preset === 'lesson' ? 'Parser' :
                             preset === 'evaluation' ? 'Workbook' :
                             preset === 'visualize' ? 'UI Build' : 'Deploy'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SLIDE 1: QA SYSTEM */}
            {currentSlide === 1 && (
              <motion.div
                key="slide-1"
                custom={slideDirection}
                variants={{
                  enter: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '100vw' : '-100vw', opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '-100vw' : '100vw', opacity: 0 })
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                className="absolute inset-0 w-full h-full flex items-center grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 overflow-y-auto lg:overflow-visible py-4 custom-scrollbar"
              >
                {/* Left Column Content */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  <div className="inline-flex flex-wrap items-center gap-2 border border-lime-400/20 bg-lime-400/5 px-3 py-1 rounded-full w-max text-[9px] font-mono tracking-widest text-lime-400 uppercase mb-4 sm:mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_#d4ff3a]" />
                    <span>MISSION 02 : METICULOUS VERIFICATION</span>
                    <span className="text-zinc-600">|</span>
                    <span className="text-white">QUALITY CONTROL</span>
                  </div>

                  <h1 className="text-[1.5rem] xs:text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[2.4rem] xl:text-[2.8rem] font-sans font-black tracking-tight leading-[1.2] mb-4 sm:mb-5 text-zinc-100 break-keep">
                    수식 기오 오치 하나 없는<br/>
                    <span className="text-lime-400 underline underline-offset-4 decoration-lime-400/30">공교육 플랫폼 검수(QA)</span> 노하우.
                  </h1>

                  <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed mb-5 sm:mb-6">
                    EBSMath, 미래엔 등 최상위 지향 교육 플랫폼 규칙들을 정밀 설계하고 분석 지원해 왔습니다. 단순 확인 수준을 넘어, 수식 표준 파싱 설계 데이터와 크로스 브라우저 다중 플랫폼의 반응형 레이아웃 오차를 1:1 검토해냅니다.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="px-2.5 py-1 rounded-full border border-lime-400/30 bg-lime-400/5 text-lime-400 font-mono text-[8px] uppercase font-bold tracking-widest">
                      Perfect Quality Control
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[8px] uppercase font-semibold tracking-wider">
                      10 Years Legacy
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[8px] uppercase font-semibold tracking-wider">
                      Zero Error Limit
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-white/[0.04]">
                    <button
                      onClick={() => openDrawer('timeline')}
                      className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-white/[0.02] hover:bg-neutral-900 border border-white/[0.08] hover:border-lime-400/40 text-left transition-all group max-w-sm cursor-pointer"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="text-white text-xs font-bold font-sans flex items-center gap-1.5 truncate">
                          설립 연력 및 연대기 보기
                          <ArrowRight className="w-3.5 h-3.5 text-lime-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </span>
                        <span className="text-zinc-500 font-mono text-[8px] uppercase tracking-wider mt-0.5">AVRO ROADMAP HISTORY</span>
                      </div>
                    </button>

                    <button
                      onClick={() => goToSlide(5)}
                      className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-[#d4ff3a]/5 hover:bg-[#d4ff3a]/10 border border-[#d4ff3a]/25 hover:border-lime-400/60 text-left transition-all group max-w-sm cursor-pointer"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="text-[#d4ff3a] text-xs font-bold font-sans flex items-center gap-1.5 truncate">
                          검수 의뢰 도입 상담 접수
                          <ArrowRight className="w-3.5 h-3.5 text-lime-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </span>
                        <span className="text-lime-400/50 font-mono text-[8px] uppercase tracking-wider mt-0.5">QA CONSULTING</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right Interactive Column (Scoring / QA Simulator) */}
                <div className="lg:col-span-5 w-full flex justify-center items-center">
                  <div className="w-full max-w-md h-[340px] md:h-[360px] glass-effect rounded-xl border border-white/[0.08] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                    <div className="px-3.5 py-2.5 bg-[#0d0d12]/90 border-b border-white/[0.06] flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-lime-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                      </div>
                      <span className="text-[9px] font-mono text-lime-400 tracking-wider">QA_AUTOMATION v1.02</span>
                      <span className="text-[8px] font-mono text-zinc-500 uppercase">Interactive</span>
                    </div>

                    <div className="flex-1 p-3 bg-[#07070a]/90 overflow-y-auto space-y-2.5 text-left custom-scrollbar">
                      <div className="flex justify-between items-center pb-2 border-b border-white/[0.06]">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">// Verification Rules</span>
                        <button
                          onClick={runQaSimulation}
                          disabled={qaStatus === 'running'}
                          className={`px-2.5 py-1 rounded text-[9px] font-sans font-bold flex items-center gap-1 hover:brightness-110 active:scale-95 transition-all cursor-pointer ${
                            qaStatus === 'running'
                              ? 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                              : 'bg-lime-400 text-black font-extrabold'
                          }`}
                        >
                          {qaStatus === 'running' ? (
                            <>
                              <Loader2 className="w-2.5 h-2.5 animate-spin text-zinc-500" />
                              검출 중
                            </>
                          ) : qaStatus === 'complete' ? (
                            '재실행'
                          ) : (
                            '원클릭 검정'
                          )}
                        </button>
                      </div>

                      <div className="space-y-1.5">
                        {qaSteps.map((step, idx) => (
                          <div key={idx} className="p-2 rounded border border-white/[0.04] bg-white/[0.01] flex items-start gap-2">
                            <div className="mt-0.5 shrink-0">
                              {step.status === 'success' ? (
                                <div className="w-3.5 h-3.5 rounded-full bg-lime-400/15 border border-lime-400 flex items-center justify-center text-lime-400">
                                  <Check className="w-2 h-2" />
                                </div>
                              ) : step.status === 'running' ? (
                                <Loader2 className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                              ) : (
                                <span className="w-3.5 h-3.5 rounded-full border border-white/[0.12] bg-white/[0.02] inline-block" />
                              )}
                            </div>
                            <div className="flex flex-col min-w-0 text-left">
                              <span className={`text-[9px] font-sans font-bold truncate ${step.status === 'success' ? 'text-zinc-200' : step.status === 'running' ? 'text-cyan-400 animate-pulse' : 'text-zinc-500'}`}>
                                {step.name}
                              </span>
                              <span className="text-[8px] font-mono text-zinc-500 mt-0.5 truncate">{step.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 bg-zinc-950/90 border-t border-white/[0.06] flex items-center justify-between text-left font-mono">
                      <div className="flex flex-col">
                        <span className="text-[8px] text-zinc-500 uppercase tracking-widest leading-none">VERDICT</span>
                        <span className={`text-[9px] font-bold mt-1 ${qaStatus === 'complete' ? 'text-lime-400' : 'text-zinc-400'}`}>
                          {qaStatus === 'complete' ? 'VERIFIED: 100% SUCCESS ✓' : qaStatus === 'running' ? 'COMPILING CHECK...' : 'STATUS: READY TO TEST'}
                        </span>
                      </div>
                      <div className="w-20 bg-white/[0.06] h-1 rounded-full overflow-hidden">
                        <div 
                          className="bg-lime-400 h-full rounded-full transition-all duration-300"
                          style={{ 
                            width: qaStatus === 'complete' ? '100%' : 
                                   qaStatus === 'running' ? '50%' : '0%' 
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SLIDE 2: SAAS TOOL BUILDER */}
            {currentSlide === 2 && (
              <motion.div
                key="slide-2"
                custom={slideDirection}
                variants={{
                  enter: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '100vw' : '-100vw', opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '-100vw' : '100vw', opacity: 0 })
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                className="absolute inset-0 w-full h-full flex items-center grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 overflow-y-auto lg:overflow-visible py-4 custom-scrollbar"
              >
                {/* Left Column Content */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  <div className="inline-flex flex-wrap items-center gap-2 border border-purple-400/20 bg-purple-400/5 px-3 py-1 rounded-full w-max text-[9px] font-mono tracking-widest text-[#d8b4fe] uppercase mb-4 sm:mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc] animate-pulse" />
                    <span>MISSION 03 : EDUTECH SMART SAAS</span>
                    <span className="text-zinc-600">|</span>
                    <span className="text-white">LOW-CODE WORKBENCH</span>
                  </div>

                  <h1 className="text-[1.5rem] xs:text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[2.4rem] xl:text-[2.8rem] font-sans font-black tracking-tight leading-[1.2] mb-4 sm:mb-5 text-zinc-100 break-keep">
                    교사들의 교안 준비 부담을 비우는<br/>
                    <span className="bg-gradient-to-r from-[#c084fc] to-[#f472b6] bg-clip-text text-transparent">학습 보조 저작 도구 &amp; SaaS</span> 패키지.
                  </h1>

                  <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed mb-5 sm:mb-6">
                    복잡한 LaTeX 수학 기호 입력부터 반응형 수식 퀴즈 세팅, 구조화 학습 미디어 배치를 법령 표준 조건에 딱 맞게 배치하는 맞춤 교안 기획 SaaS 및 통계 보드를 정교하게 설계 빌드해 드립니다.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="px-2.5 py-1 rounded-full border border-indigo-400/30 bg-indigo-400/5 text-indigo-400 font-mono text-[8px] uppercase font-bold tracking-widest">
                      LMS Curriculum SaaS
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[8px] uppercase font-semibold tracking-wider">
                      Interactive Layouts
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[8px] uppercase font-semibold tracking-wider">
                      Math Sheet Widgets
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-white/[0.04]">
                    <button
                      onClick={() => openDrawer('process')}
                      className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-white/[0.02] hover:bg-neutral-900 border border-white/[0.08] hover:border-lime-400/40 text-left transition-all group max-w-sm cursor-pointer"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="text-white text-xs font-bold font-sans flex items-center gap-1.5 truncate">
                          에이브로 작업 프로세스 흐름
                          <ArrowRight className="w-3.5 h-3.5 text-lime-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </span>
                        <span className="text-zinc-500 font-mono text-[8px] uppercase tracking-wider mt-0.5">AVRO STRATEGY PROCESS</span>
                      </div>
                    </button>

                    <button
                      onClick={() => goToSlide(5)}
                      className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/25 hover:border-purple-400/60 text-left transition-all group max-w-sm cursor-pointer"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="text-purple-300 text-xs font-bold font-sans flex items-center gap-1.5 truncate">
                          맞춤 에듀테크 SaaS 빌딩 도입하기
                          <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </span>
                        <span className="text-purple-500/50 font-mono text-[8px] uppercase tracking-wider mt-0.5">LAUNCH PILOT SAAS</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right Interactive Column (Playground) */}
                <div className="lg:col-span-5 w-full flex justify-center items-center">
                  <div className="w-full max-w-md h-[340px] md:h-[360px] glass-effect rounded-xl border border-white/[0.08] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                    <div className="px-3.5 py-2.5 bg-[#0d0d12]/90 border-b border-white/[0.06] flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-pink-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
                      </div>
                      <span className="text-[9px] font-mono text-[#c084fc] tracking-wider">BLOCKS_PLAYGROUND v1.0</span>
                      <span className="text-[8px] font-mono text-zinc-500 uppercase">Live Preview</span>
                    </div>

                    <div className="p-2 bg-[#0d0d12]/80 border-b border-white/[0.04]">
                      <span className="text-[8px] font-mono text-zinc-400 block mb-1 text-left uppercase">// Toggle layout modules:</span>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { id: 'header', label: '교안 헤더' },
                          { id: 'math', label: 'LaTeX 수식' },
                          { id: 'quiz', label: '단원 퀴즈' },
                          { id: 'script', label: '수업 안내' }
                        ].map((block) => {
                          const isSel = selectedBlocks.includes(block.id);
                          return (
                            <button
                              key={block.id}
                              onClick={() => toggleBlock(block.id)}
                              className={`px-1 py-1 rounded text-[8px] font-sans font-bold border transition-all cursor-pointer ${
                                isSel
                                  ? 'bg-purple-500/10 border-purple-400/50 text-purple-300'
                                  : 'bg-white/[0.02] border-white/[0.06] text-zinc-500 hover:text-zinc-300'
                              }`}
                            >
                              {block.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex-1 p-3 bg-[#07070a]/90 overflow-y-auto space-y-2 text-left custom-scrollbar relative">
                      <span className="absolute right-2 top-1.5 text-[7px] font-mono text-zinc-600 bg-black/60 px-1.5 py-0.5 rounded border border-white/[0.04] select-none">
                        PREVIEW_SCREEN ✓
                      </span>

                      <div className="space-y-2 pt-2">
                        <AnimatePresence>
                          {selectedBlocks.includes('header') && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="p-2 bg-white/[0.01] border border-white/[0.04] rounded-lg text-left"
                            >
                              <span className="text-[7px] font-mono text-purple-400 select-none block">// MODULE : LESSON HEADER</span>
                              <h4 className="text-[10px] font-bold text-zinc-100 mt-0.5">EBSMath 대수 기본학습 [일차함수]</h4>
                              <span className="text-[7px] font-mono text-zinc-500">Curriculum Code: 중등수학 2-1</span>
                            </motion.div>
                          )}

                          {selectedBlocks.includes('math') && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="p-2 bg-white/[0.02] border border-[#d4ff3a]/15 rounded-lg font-mono text-left"
                            >
                              <span className="text-[7px] text-[#d4ff3a] block">// MODULE : LaTeX MATH FORMAT</span>
                              <div className="text-[9px] text-zinc-300 mt-1 py-1 text-center bg-black/50 border border-white/[0.04] rounded">
                                f(x) = ax + b \ (a \neq 0)
                              </div>
                            </motion.div>
                          )}

                          {selectedBlocks.includes('quiz') && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="p-2 bg-white/[0.01] border border-white/[0.04] rounded-lg text-left"
                            >
                              <span className="text-[7px] font-mono text-cyan-400 block">// MODULE : INTERACTIVE QUIZ</span>
                              <p className="text-[9px] font-semibold text-zinc-300 mt-0.5 leading-normal">다음 중 일차함수인 것을 모두 고르시오.</p>
                              <div className="grid grid-cols-2 gap-1 mt-1.5">
                                {['① y = 2x - 3', '② y = x²', '③ y = 3 / x', '④ y = 5'].map((opt, i) => (
                                  <div key={i} className={`p-1 border rounded text-[8px] cursor-pointer font-sans transition-all text-left ${i === 0 ? 'border-lime-400/30 bg-lime-400/[0.02] text-lime-400 font-bold' : 'border-white/[0.05] bg-white/[0.01] text-zinc-400'}`}>
                                    {opt}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {selectedBlocks.includes('script') && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="p-2 bg-white/[0.01] border border-dashed border-white/[0.08] rounded-lg text-zinc-400 text-[8px] leading-relaxed text-left"
                            >
                              <strong className="text-zinc-200 block mb-0.5 font-bold">💡 실무 설계 어드바이스:</strong>
                              도해 및 LaTeX 수식은 태블릿 모바일 비율에서도 잘림 없이 가단 자동 조절되도록 CSS 비율 레이어를 보존합니다.
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SLIDE 3: PORTFOLIO WORKS */}
            {currentSlide === 3 && (
              <motion.div
                key="slide-3"
                custom={slideDirection}
                variants={{
                  enter: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '100vw' : '-100vw', opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '-100vw' : '100vw', opacity: 0 })
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                className="absolute inset-0 w-full h-full flex flex-col justify-center overflow-y-auto py-4 custom-scrollbar text-left"
              >
                <div className="max-w-5xl mx-auto w-full">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase mb-1">
                        <span>03</span>
                        <span className="text-zinc-700">/</span>
                        <span>SELECTED PROJECTS</span>
                        <span className="text-zinc-700">↳</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-sans font-black text-white">
                        프로젝트 &amp; 제품군.
                      </h2>
                    </div>

                    {/* Filter categories directly interactive in horizontal slide layout */}
                    <div className="flex gap-1.5 border border-white/[0.08] p-1 rounded-lg bg-black/45 shrink-0">
                      {(['ALL', 'AI', 'CASE_STUDY'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setProjectFilter(filter)}
                          className={`px-3 py-1 text-[9px] font-mono font-bold tracking-wider rounded-md uppercase transition-all cursor-pointer ${
                            projectFilter === filter
                              ? 'bg-lime-400 text-black'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          {filter === 'ALL' ? '전체 보기' : filter === 'AI' ? '스마트 AI / SaaS' : '기획사례'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filtered portfolio case list within viewport height bounds */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[50vh] min-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                    <AnimatePresence mode="popLayout">
                      {filteredProjects.map((prj, idx) => (
                        <motion.div
                          key={prj.id}
                          layout
                          initial={{ opacity: 0, scale: 0.98, y: 15 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.98, y: -15 }}
                          transition={{ duration: 0.3 }}
                          className="w-full"
                        >
                          <div className={`p-4 sm:p-5 rounded-xl border flex flex-col justify-between h-full bg-[#0d0d12]/60 hover:bg-[#12121c]/70 transition-all ${
                            prj.isFeatured ? 'border-lime-400/[0.25]' : 'border-white/[0.05]'
                          } relative overflow-hidden group`}>
                            {prj.isFeatured && (
                              <div className="absolute top-0 right-0 px-2.5 py-0.5 bg-lime-400 text-black font-mono font-extrabold text-[8px] uppercase tracking-widest rounded-bl-md">
                                대표 혁신
                              </div>
                            )}

                            <div className="space-y-2.5">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-mono text-[9px] font-bold text-lime-400">{prj.id}</span>
                                <span className="text-zinc-700">•</span>
                                <span className={`font-mono text-[8px] px-2 py-0.5 rounded-full border ${
                                  prj.status === 'LIVE' ? 'border-lime-400/20 text-lime-400 bg-lime-400/5' : 'border-white/[0.08] text-zinc-400'
                                }`}>
                                  {prj.status}
                                </span>
                              </div>

                              <h3 className="text-base sm:text-lg font-sans font-extrabold text-white tracking-tight flex items-baseline gap-1.5 flex-wrap">
                                <span>{prj.name}</span>
                                <span className="text-[10px] font-mono text-zinc-500">— {prj.client}</span>
                              </h3>

                              <p className="text-zinc-400 text-[11px] leading-relaxed line-clamp-3">
                                {prj.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/[0.04]">
                              <div className="flex flex-wrap gap-1">
                                {prj.tags.slice(0, 3).map((tag, tIdx) => (
                                  <span key={`${tag}-${tIdx}`} className="px-1.5 py-0.5 rounded bg-zinc-950 font-mono text-[8px] text-zinc-500 border border-white/[0.04]">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              {prj.domain && (
                                <a 
                                  href={`https://${prj.domain}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-[9px] font-mono text-lime-400 font-bold hover:underline flex items-center gap-1 shrink-0 ml-2"
                                >
                                  {prj.domain} <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SLIDE 4: TIMELINE & PARTNERS */}
            {currentSlide === 4 && (
              <motion.div
                key="slide-4"
                custom={slideDirection}
                variants={{
                  enter: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '100vw' : '-100vw', opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '-100vw' : '100vw', opacity: 0 })
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                className="absolute inset-0 w-full h-full flex items-center grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 overflow-y-auto lg:overflow-visible py-4 custom-scrollbar"
              >
                {/* Left Column (Timeline roadmap chronology) */}
                <div className="lg:col-span-6 text-left flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase mb-2">
                    <span>04</span>
                    <span className="text-zinc-700">/</span>
                    <span>CHRONOLOGY ROADMAP</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-sans font-black text-white mb-4">10년의 발자취와 증명.</h2>
                  
                  <div className="border-l border-white/[0.08] pl-5 ml-1 space-y-5 max-h-[42vh] overflow-y-auto pr-2 custom-scrollbar text-zinc-300">
                    {timelineData.map((mile) => (
                      <div key={mile.year} className="relative text-left">
                        <div className="absolute -left-[26px] top-1 w-2 h-2 rounded-full bg-[#07070a] border-2 border-lime-400" />
                        <span className="font-mono text-sm font-extrabold text-lime-400 block mb-1">
                          {mile.year}
                        </span>
                        <ul className="space-y-1">
                          {mile.events.map((ev, idx) => (
                            <li
                              key={idx}
                              className={`text-[11px] leading-relaxed list-none pl-2.5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full ${
                                ev.isHighlight ? 'before:bg-lime-400 text-zinc-100 font-semibold' : 'before:bg-zinc-600 text-zinc-400'
                              }`}
                            >
                              {ev.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column (Partners Grid) */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-2">
                    <span>05</span>
                    <span className="text-zinc-700">/</span>
                    <span>TRUSTED PARTNERS</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-sans font-black text-white mb-4">함께 성과를 만들어간 파트너들.</h2>
                  
                  <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 max-h-[42vh] overflow-y-auto pr-1 custom-scrollbar">
                    {partnersData.map((part, pIdx) => (
                      <div
                        key={`${part.name}-${pIdx}`}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border text-center transition-colors ${
                          part.isHighlight
                            ? 'border-lime-400/20 bg-lime-400/[0.02] text-white'
                            : 'border-white/[0.04] bg-white/[0.01]'
                        }`}
                      >
                        <span className={`font-sans font-bold text-xs ${part.isHighlight ? 'text-lime-300' : 'text-zinc-300'}`}>
                          {part.name}
                        </span>
                        <span className="font-mono text-[7px] tracking-wider text-zinc-500 uppercase mt-0.5">
                          {part.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* SLIDE 5: CONTACT & CORPORATE PROFILE */}
            {currentSlide === 5 && (
              <motion.div
                key="slide-5"
                custom={slideDirection}
                variants={{
                  enter: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '100vw' : '-100vw', opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '-100vw' : '100vw', opacity: 0 })
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                className="absolute inset-0 w-full h-full flex items-center grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 overflow-y-auto lg:overflow-visible py-4 custom-scrollbar shadow-inner"
              >
                {/* Left Column Content */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-lime-400 uppercase mb-4">
                    <span className="text-lime-300 font-bold">$</span>
                    <span className="text-zinc-700">/</span>
                    <span>avro_studio_routine_start.cmd</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white mb-5 leading-none">
                    Together,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-cyan-300 to-emerald-300">함께 만들어갈까요?</span>
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ repeat: Infinity, duration: 1, step: 'end' }} 
                      className="inline-block w-2 sm:w-3 h-6 sm:h-7 bg-lime-400 align-middle ml-1 shadow-[0_0_8px_#d4ff3a]" 
                    />
                  </h2>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-lg mb-6 sm:mb-8">
                    에듀테크 서비스 기획·구축이 필요하시거나, 맞춤식 생성형 AI 결합 설계 및 웹 데이터 가공 자동화 시스템 자문이 필요하시다면 언제든 편하게 아래 대표 이메일로 의견을 남겨주세요.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.a 
                      href="mailto:ceo@avro.co.kr"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-mono font-black text-xs uppercase tracking-widest flex items-center justify-between gap-4 shadow-[0_4px_15px_rgba(34,211,238,0.3)] group cursor-pointer"
                    >
                      <span>ceo@avro.co.kr 메일 전송</span>
                      <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>

                {/* Right Column Content - Exquisite Corporate Board Details */}
                <div className="lg:col-span-5 flex justify-center items-center">
                  <div className="w-full glass-effect border border-white/[0.05] p-5 rounded-xl space-y-4 text-left shadow-lg">
                    <h3 className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest border-b border-white/[0.04] pb-2 flex justify-between items-center leading-none">
                      <span>// Corporate Specifications</span>
                      <span className="text-[8px] text-lime-400 font-bold uppercase flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-lime-400" />
                        Qualified
                      </span>
                    </h3>

                    <div className="space-y-3 font-mono text-[9px] text-zinc-400 leading-relaxed text-left">
                      <div className="border-b border-white/[0.02] pb-1.5 flex justify-between gap-3">
                        <span className="text-zinc-500 uppercase shrink-0">Company / 법인명</span>
                        <strong className="text-zinc-200 text-right">(주)에이브로 · AVRO INC.</strong>
                      </div>
                      <div className="border-b border-white/[0.02] pb-1.5 flex justify-between gap-3">
                        <span className="text-zinc-500 uppercase shrink-0">CEO / 대표자</span>
                        <strong className="text-zinc-200 text-right">박예준 대표</strong>
                      </div>
                      <div className="border-b border-white/[0.02] pb-1.5 flex justify-between gap-3">
                        <span className="text-zinc-500 uppercase shrink-0">Registration / 사업자</span>
                        <strong className="text-zinc-200 text-right">205-87-00590</strong>
                      </div>
                      <div className="border-b border-white/[0.02] pb-1.5 flex justify-between gap-3">
                        <span className="text-zinc-500 uppercase shrink-0">Established / 설립일</span>
                        <strong className="text-zinc-200 text-right">2016-07-18</strong>
                      </div>
                      <div className="flex justify-between gap-3">
                        <span className="text-zinc-500 uppercase shrink-0">Headquarters / 주소</span>
                        <strong className="text-zinc-200 text-right font-sans text-[10px]">인천광역시 서구 청라에메랄드로 99</strong>
                      </div>
                    </div>

                    <div className="border-t border-white/[0.04] pt-2.5 font-mono text-[8px] text-zinc-500 leading-normal">
                      * 본 검수 및 맞춤 SAAS PoC 시스템은 AI 에이전트 인프라 보안 수칙에 의거하여 암호화 통제 중입니다. 귀하가 수신하는 답변은 평균 4시간 안에 회신 대기열에서 해제됩니다.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>

      {/* CONTINUOUS GLOBAL BRAND MARQUEE TICKER ROW (Floats above the bottom navigation panel) */}
      <section className="fixed bottom-12 left-0 right-0 z-40 bg-[#d4ff3a] text-black font-mono font-black text-[9px] xs:text-[10px] uppercase tracking-wider border-y border-white/[0.04] py-1.5 overflow-hidden pointer-events-none select-none">
        <div className="flex whitespace-nowrap select-none overflow-hidden">
          <div className="flex gap-16 shrink-0 animate-tick">
            <span className="text-indigo-950 font-black">★ AVRO EDUTECH INTELLIGENCE</span>
            <span className="text-black/30">/</span>
            <span>DIGITAL CONTENT SOLUTION</span>
            <span className="text-black/30">/</span>
            <span className="text-indigo-950 font-black">AI EDUTECH SOLUTIONS</span>
            <span className="text-black/30">/</span>
            <span>VIDEO PRODUCTION EXPERT</span>
            <span className="text-black/30">/</span>
            <span className="text-red-700 font-bold">EBSMATH PARTNER</span>
            <span className="text-black/30">/</span>
            <span>SINCE 2016</span>
          </div>
          <div className="flex gap-16 shrink-0 animate-tick font-sans" aria-hidden="true">
            <span className="text-indigo-950 font-black">★ AVRO EDUTECH INTELLIGENCE</span>
            <span className="text-black/30">/</span>
            <span>DIGITAL CONTENT SOLUTION</span>
            <span className="text-black/30">/</span>
            <span className="text-indigo-950 font-black">AI EDUTECH SOLUTIONS</span>
            <span className="text-black/30">/</span>
            <span>VIDEO PRODUCTION EXPERT</span>
            <span className="text-black/30">/</span>
            <span className="text-red-700 font-bold">EBSMATH PARTNER</span>
            <span className="text-black/30">/</span>
            <span>SINCE 2016</span>
          </div>
        </div>
      </section>

      {/* FOOTER & DYNAMIC DECK PAGE POSITION CONTROLLERS */}
      <footer className="w-full h-12 bg-black border-t border-white/[0.04] z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        {/* Progress Bar built into bottom controller */}
        <div 
          className="absolute top-0 left-0 h-[1.5px] bg-gradient-to-r from-lime-400 via-cyan-400 to-indigo-500 shadow-[0_0_8px_rgba(212,255,58,0.5)] transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-mono text-[9px] text-zinc-500 uppercase">
            <button
              onClick={goToPrevSlide}
              className="w-6 h-6 rounded border border-white/[0.06] bg-white/[0.01] hover:border-lime-400/30 hover:text-lime-400 text-zinc-400 flex items-center justify-center transition-colors cursor-pointer"
              title="이전 슬라이드"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={goToNextSlide}
              className="w-6 h-6 rounded border border-white/[0.06] bg-white/[0.01] hover:border-lime-400/30 hover:text-lime-400 text-zinc-400 flex items-center justify-center transition-colors cursor-pointer"
              title="다음 슬라이드"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="hidden xs:flex gap-1.5">
            {slideTitles.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? 'w-5 bg-lime-400 shadow-[0_0_8px_rgba(212,255,58,0.4)]' : 'bg-white/[0.12] hover:bg-white/[0.25]'
                }`}
                title={`${idx + 1}번 슬라이드: ${slide.label}`}
              />
            ))}
          </div>
        </div>

        {/* Current status tag */}
        <span className="text-[8px] xs:text-[9px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5 leading-none select-none text-right">
          <span className="w-1 h-1 rounded-full bg-lime-400 animate-pulse" />
          <span>DECK : {currentSlide + 1} / {totalSlides} | Page: {slideTitles[currentSlide].eng}</span>
        </span>
      </footer>

      {/* SLIDE Drawer details overlay system */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-[9999] overflow-hidden" id="studio-drawer">
            {/* Backdrop blurring filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Sliding Drawer Pane */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-[540px] md:w-[640px] h-full bg-[#0a0a0f] border-l border-white/[0.08] shadow-[[-20px_0_60px_rgba(0,0,0,0.85)]] flex flex-col z-10"
            >
              <div className="px-6 py-5 border-b border-white/[0.06] flex items-center justify-between bg-[#111116] text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#d4ff3a] text-black font-mono font-black flex items-center justify-center text-sm shadow-[0_0_10px_rgba(212,255,58,0.3)]">
                    A
                  </div>
                  <div className="flex flex-col items-start leading-none gap-0.5">
                    <span className="font-mono font-extrabold tracking-wider text-xs text-white uppercase">AVRO INC. PLATFORM</span>
                    <span className="text-[8px] text-zinc-500 font-mono tracking-widest uppercase">에이브로 상세 가이드</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-3 py-1.5 rounded border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/[0.15] text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>

              {/* Tabs list */}
              <div className="px-6 py-3 border-b border-white/[0.04] bg-[#0c0c11] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                {([
                  { id: 'about', label: '회사 소개', num: '01' },
                  { id: 'services', label: '상세 서비스', num: '02' },
                  { id: 'timeline', label: '스튜디오 연혁', num: '03' },
                  { id: 'process', label: '작업 프로세스', num: '04' }
                ] as const).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setDrawerTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 whitespace-nowrap transition-all border cursor-pointer ${
                      drawerTab === tab.id
                        ? 'bg-[#d4ff3a]/10 border-[#d4ff3a]/30 text-[#d4ff3a]'
                        : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className="font-mono text-[9px] text-zinc-600 font-black">{tab.num}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Drawer inner container content scroll */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
                
                {drawerTab === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 text-left"
                  >
                    <div className="space-y-1 block">
                      <span className="font-mono text-[9px] tracking-widest text-[#d4ff3a] font-bold block uppercase">// CORPORATE GOAL</span>
                      <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight leading-normal">
                        10년의 견고한 레거시,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-indigo-400">인공지능</span>으로 날아오르다.
                      </h3>
                    </div>

                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      에이브로는 대형 교과서 출판사의 학습 플랫폼 운영 검수(QA) 및 수리 콘텐츠 설계를 10년간 대행하며, 교육 현장에 요구되는 세밀한 가이드라인과 기능 무결성을 다져왔습니다.
                    </p>

                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      이 실질적인 도메인 자산을 바탕으로, 교수자와 실무진이 필요로 하는 가장 직관적인 맞춤형 AI 에이전트와 에듀테크 저작 SaaS 및 맞춤 웹 솔루션을 신속하고 탄탄하게 기획·개발합니다.
                    </p>

                    <div className="border border-white/[0.08] bg-zinc-950/75 rounded-xl overflow-hidden font-mono text-[10px] mt-6">
                      <div className="bg-white/[0.02] border-b border-white/[0.06] p-3 text-zinc-500 flex justify-between items-center px-4">
                        <span>// FACT_SHEET_DATA</span>
                        <span className="text-[8px] text-lime-400 font-bold uppercase">Pivot Status: Verified ✓</span>
                      </div>
                      
                      <div className="divide-y divide-white/[0.05]">
                        <div className="grid grid-cols-3 p-3 px-4">
                          <span className="text-zinc-500">법인명</span>
                          <span className="col-span-2 text-zinc-200 font-semibold font-sans">주식회사 에이브로 (AVRO INC.)</span>
                        </div>
                        <div className="grid grid-cols-3 p-3 px-4">
                          <span className="text-zinc-500">설립 일자</span>
                          <span className="col-span-2 text-zinc-200 font-sans">2016년 7월 18일</span>
                        </div>
                        <div className="grid grid-cols-3 p-3 px-4">
                          <span className="text-zinc-500">주요 수행</span>
                          <span className="col-span-2 text-zinc-300 font-sans">교육용 학습 보조 웹 개발, 출판물 연계 스마트 저작 레이아웃 기획</span>
                        </div>
                        <div className="grid grid-cols-3 p-3 px-4">
                          <span className="text-zinc-500">대표이사</span>
                          <span className="col-span-2 text-zinc-200 font-sans">박예준</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {drawerTab === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 text-left"
                  >
                    <div className="space-y-1 block">
                      <span className="font-mono text-[9px] tracking-widest text-[#d4ff3a] font-bold block uppercase">// FOUR CAPABILITIES</span>
                      <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight">
                        AI로 극대화하는 네 가지 비즈니스 축.
                      </h3>
                    </div>

                    <div className="space-y-3.5">
                      {servicesData.map((svc) => (
                        <div key={svc.num} className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.01]">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="font-mono text-[9px] text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20 font-bold">
                              {svc.num}
                            </span>
                            <h4 className="font-sans font-bold text-sm sm:text-base text-white">{svc.title}</h4>
                          </div>
                          <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2 pl-7">{svc.englishTitle}</span>
                          <p className="text-zinc-400 text-xs leading-relaxed pl-7 mb-3">
                            {svc.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                            {svc.items.map((item, i) => (
                              <div key={i} className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 text-left">
                                <Check className="w-3 h-3 text-lime-400 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {drawerTab === 'timeline' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 text-left text-zinc-300"
                  >
                    <div className="space-y-1 block">
                      <span className="font-mono text-[9px] tracking-widest text-lime-400 font-bold uppercase block">// CHRONOLOGY</span>
                      <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight">
                        10년의 발자취와 도약 레거시.
                      </h3>
                    </div>

                    <div className="border-l border-white/[0.08] pl-5 ml-1 space-y-6 py-2">
                      {timelineData.map((mile) => (
                        <div key={mile.year} className="relative text-left">
                          <div className="absolute -left-[26px] top-1.5 w-2 h-2 rounded-full bg-[#07070a] border-2 border-lime-400 shadow-[0_0_8px_#d4ff3a]" />
                          <span className="font-mono text-base font-black text-lime-400 block mb-1.5 leading-none">
                            {mile.year}
                          </span>
                          <ul className="space-y-2">
                            {mile.events.map((ev, idx) => (
                              <li
                                key={idx}
                                className={`text-xs leading-relaxed list-none pl-2.5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full ${
                                  ev.isHighlight
                                    ? 'before:bg-lime-400 text-zinc-200 font-semibold'
                                    : 'before:bg-zinc-600 text-zinc-400'
                                }`}
                              >
                                {ev.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {drawerTab === 'process' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 text-left text-zinc-300"
                  >
                    <div className="space-y-1 block">
                      <span className="font-mono text-[9px] tracking-widest text-lime-400 font-bold uppercase block">// WORKFLOW</span>
                      <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight">
                        의뢰가 완결로 이루어지는 정밀 흐름.
                      </h3>
                    </div>

                    <div className="space-y-3 pt-1">
                      {processSteps.map((step) => (
                        <div key={step.step} className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] flex items-center gap-4 hover:border-lime-400/20 transition-all">
                          <div className="w-10 h-10 rounded-full bg-[#d4ff3a]/10 text-[#d4ff3a] border border-[#d4ff3a]/25 flex items-center justify-center font-mono font-black text-sm shrink-0">
                            {step.step}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-sans font-bold text-xs sm:text-sm text-zinc-200">{step.title}</span>
                            <span className="font-mono text-[7px] text-zinc-500 uppercase tracking-widest mt-0.5">{step.englishTitle}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
