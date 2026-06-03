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

export default function App() {
  const [activeService, setActiveService] = useState<string | null>('01');
  const [projectFilter, setProjectFilter] = useState<'ALL' | 'AI' | 'CASE_STUDY'>('ALL');
  const [liveSeoulTime, setLiveSeoulTime] = useState<string>('');
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [typedCommand, setTypedCommand] = useState<string>('avro agent --optimize');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ id: number; text: string; type: 'client' | 'info' | 'success' | 'warn' | 'header' }>>([
    { id: 1, text: 'avro init --studio-preset=future', type: 'header' },
    { id: 2, text: 'Initializing AVRO AI Core Engine v2.6.4...', type: 'info' },
    { id: 3, text: '✓ Core Neural Bridge connected. AI models calibrated.', type: 'success' },
    { id: 4, text: '✓ Full-stack Next.js/Tailwind workspace ready.', type: 'success' },
    { id: 5, text: 'Ready to build high-performance software.', type: 'info' }
  ]);
  const [isTerminalBuilding, setIsTerminalBuilding] = useState<boolean>(false);
  const [activeTerminalPreset, setActiveTerminalPreset] = useState<string>('agent');

  // Mouse coordinate tracking for spotlight effects
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorOpacity, setCursorOpacity] = useState(0);

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

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollPercentage((window.scrollY / scrollHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interactive mouse spotlight tracking for desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setCursorOpacity(1);
    };
    const handleMouseLeave = () => {
      setCursorOpacity(0);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Terminal process simulator trigger
  const runTerminalSimulation = (preset: string) => {
    if (isTerminalBuilding) return;
    setIsTerminalBuilding(true);
    setActiveTerminalPreset(preset);
    
    let commandText = '';
    let sequence: Array<{ text: string; type: 'client' | 'info' | 'success' | 'warn' | 'header' }> = [];

    switch (preset) {
      case 'agent':
        commandText = 'avro agent --spin-up=marketing-crew';
        sequence = [
          { text: 'Starting multi-agent RAG workflow...', type: 'info' },
          { text: 'Connecting with DeepResearch capabilities...', type: 'info' },
          { text: '✓ Agent [Content Planner] loaded context from db.', type: 'success' },
          { text: '✓ Agent [Copywriter] generated SEO social copies.', type: 'success' },
          { text: '✓ Completed automatic newsletter in 850ms.', type: 'success' }
        ];
        break;
      case 'mathhwp':
        commandText = 'npx mathhwp transform --src=exam_2026.pdf';
        sequence = [
          { text: 'Analyzing math PDF layout structure via Gemini AI...', type: 'info' },
          { text: 'Extracting Mathpix OCR 수식 객체 145개...', type: 'info' },
          { text: 'Writing formatted HWPX document model...', type: 'info' },
          { text: '✓ Successfully converted 14 pages of math formulae.', type: 'success' },
          { text: '✓ Source: exam_2026.docx/hwpx generated in 1.2s.', type: 'success' }
        ];
        break;
      case 'automation':
        commandText = 'avro workflow --trigger=daily-sync-reports';
        sequence = [
          { text: 'Triggering scheduled SaaS integrations...', type: 'info' },
          { text: 'Importing metrics: Google Analytics, Slack, Mailchimp...', type: 'info' },
          { text: '✓ Consolidated weekly marketing conversion report.', type: 'success' },
          { text: '✓ PDF summary dispatched to slack channel #avro-marketing.', type: 'success' }
        ];
        break;
      case 'saas':
        commandText = 'avro deploy --platform=blogstudio --env=production';
        sequence = [
          { text: 'Triggering zero-downtime Vercel edge build...', type: 'info' },
          { text: 'Optimizing static chunks & bundler cache...', type: 'info' },
          { text: '✓ deployed to cloud run edge (tokyo/seoul shards).', type: 'success' },
          { text: '✓ Service live: https://blogstudio.live [SSL: OK]', type: 'success' }
        ];
        break;
      default:
        commandText = 'avro optimize';
        sequence = [{ text: 'Optimization completed.', type: 'success' }];
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
                id: Date.now() + logIndex,
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
    if (projectFilter === 'AI') return project.tags.includes('AI') || project.tags.includes('OSMU');
    if (projectFilter === 'CASE_STUDY') return project.status === 'CASE STUDY';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#07070a] text-slate-100 font-sans relative selection:bg-lime-400 selection:text-black">
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

      {/* Modern Mouse Spotlight Backdrop Glow on desktop */}
      <div
        className="fixed pointer-events-none z-50 w-[400px] h-[400px] rounded-full hidden md:block bg-[radial-gradient(circle_at_center,rgba(212,255,58,0.04)_0%,rgba(34,211,238,0.01)_40%,transparent_70%)]"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: cursorOpacity,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Floating scroll indicator progress bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-lime-400 via-cyan-400 to-indigo-500 z-[1000] shadow-[0_0_8px_rgba(212,255,58,0.5)] transition-all duration-75"
        style={{ width: `${scrollPercentage}%` }}
      />

      {/* STICKY NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.04] transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-8 h-8 rounded-md bg-lime-400 text-black font-mono font-black flex items-center justify-center text-lg shadow-[0_0_15px_rgba(212,255,58,0.3)] relative group cursor-pointer"
              whileHover={{ rotate: -10, scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              A
              <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-mono font-extrabold tracking-wider text-sm sm:text-base text-white">AVRO</span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest hidden sm:inline-block">에이브로</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Live Synchronized clock */}
            <div className="hidden md:flex items-center gap-2 border border-white/[0.06] rounded-full px-3.5 py-1 bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_#d4ff3a]" />
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">SEL CLOCK {liveSeoulTime || '15:20:00'}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-blue-500 via-cyan-400 to-lime-400 text-black overflow-hidden shadow-[0_4px_20px_rgba(34,211,238,0.25)] group"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              <span>Contact Studio</span>
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
                →
              </motion.span>
            </motion.button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center py-12 md:py-20 relative overflow-hidden">
          {/* Ambient AI Background Connective Graph */}
          <div className="absolute inset-0 z-0">
            <AICanvas />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Hero text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Status capsule */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex flex-wrap items-center gap-2 border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 rounded-full w-max text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-8"
              >
                <span className="text-lime-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
                  SHIPPING_v.2026
                </span>
                <span className="text-zinc-600">|</span>
                <span>EST 2016.07.18</span>
                <span className="text-zinc-600">|</span>
                <span className="text-cyan-400 font-medium">AI ENGINEERING STUDIO</span>
              </motion.div>

              {/* Title with staggered text rise */}
              <h1 className="text-4xl sm:text-6xl md:text-[5.4rem] font-sans font-black tracking-tight leading-[0.95] mb-6 select-none text-left">
                <span className="block overflow-hidden py-1">
                  <motion.span 
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    우리는 <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-fill-transparent text-transparent">AI</span>로
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span 
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    <span className="bg-lime-400 text-black px-4 py-1.5 rounded-lg inline-block mr-2 shadow-[0_0_25px_rgba(212,255,58,0.2)]">소프트웨어</span>를
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span 
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.28, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="inline-block relative"
                  >
                    <span className="font-mono italic font-light tracking-wide text-zinc-300">만듭니다</span>
                    <span className="text-lime-400 animate-pulse">.</span>
                    <span className="absolute left-0 bottom-1 w-full h-[3px] bg-red-500 roundedScale" />
                  </motion.span>
                </span>
              </h1>

              {/* Tagline */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed text-left mb-8"
              >
                <strong className="text-white font-semibold">(주)에이브로</strong>는 LLM · AI 에이전트 · 워크플로우 자동화를 코어 역량으로, 웹/앱/플랫폼/SaaS를 처음부터 끝까지 빠르고 지독하게 구축하는 <span className="text-lime-400 font-medium">전천후 AI 엔지니어링 스튜디오</span>입니다. 
              </motion.p>

              {/* Tag badges */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-2 text-left justify-start"
              >
                <span className="px-3.5 py-1.5 rounded-full border border-lime-400/40 bg-lime-400/5 text-lime-400 font-mono text-[10px] uppercase font-bold tracking-widest shadow-[0_0_15px_rgba(212,255,58,0.1)] hover:scale-105 transition-transform duration-200">
                  AI Engineering
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[10px] uppercase font-semibold tracking-wider hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200">
                  LLM & Agent Systems
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[10px] uppercase font-semibold tracking-wider hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200">
                  Full-stack Product Build
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[10px] uppercase font-semibold tracking-wider hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200">
                  Workflow Automation
                </span>
              </motion.div>
            </div>

            {/* AI Interactive Terminal Column */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-md h-[380px] glass-effect rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative group"
              >
                {/* Terminal top header */}
                <div className="px-4 py-3 bg-[#0d0d12]/90 border-b border-white/[0.06] flex items-center justify-between">
                  {/* Fake buttons */}
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500">avro@studio: ~/workspace</div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider">online</span>
                  </div>
                </div>

                {/* Console Log Area */}
                <div className="flex-1 p-4 overflow-y-auto text-left font-mono text-[11px] leading-relaxed space-y-1 bg-[#07070a]/90 select-text">
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
                        <span className="text-[9px] text-zinc-600">[{new Date().toLocaleTimeString('en-US', { hour12: false })}]</span>
                        <span>{log.type === 'header' ? '$' : '→'}</span>
                        <span className={log.type === 'success' ? 'text-zinc-200' : ''}>{log.text}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Input line */}
                  <div className="flex gap-1.5 items-center pt-2 border-t border-white/[0.04] mt-2">
                    <span className="text-[9px] text-zinc-600">[PROMPT]</span>
                    <span className="text-lime-400">$</span>
                    <span className="text-zinc-200">{typedCommand}</span>
                    <span className="w-[6px] h-[12px] bg-lime-400 animate-pulse inline-block" />
                  </div>
                </div>

                {/* Terminal Actions/Presets interactive tray */}
                <div className="p-3 bg-zinc-950/90 border-t border-white/[0.06]">
                  <div className="text-[9px] text-zinc-500 uppercase tracking-wider text-left mb-2 font-mono flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-lime-400" />
                    Interactive Simulator — Click to test AI workflow
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    <button
                      onClick={() => runTerminalSimulation('agent')}
                      disabled={isTerminalBuilding}
                      className={`px-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-tight uppercase border transition-all duration-200 ${
                        activeTerminalPreset === 'agent'
                          ? 'bg-lime-400/10 border-lime-400/50 text-lime-400'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.12] hover:text-white'
                      }`}
                    >
                      AI Agent
                    </button>
                    <button
                      onClick={() => runTerminalSimulation('mathhwp')}
                      disabled={isTerminalBuilding}
                      className={`px-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-tight uppercase border transition-all duration-200 ${
                        activeTerminalPreset === 'mathhwp'
                          ? 'bg-lime-400/10 border-lime-400/50 text-lime-400'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.12] hover:text-white'
                      }`}
                    >
                      MathHWP
                    </button>
                    <button
                      onClick={() => runTerminalSimulation('automation')}
                      disabled={isTerminalBuilding}
                      className={`px-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-tight uppercase border transition-all duration-200 ${
                        activeTerminalPreset === 'automation'
                          ? 'bg-lime-400/10 border-lime-400/50 text-lime-400'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.12] hover:text-white'
                      }`}
                    >
                      Autopilot
                    </button>
                    <button
                      onClick={() => runTerminalSimulation('saas')}
                      disabled={isTerminalBuilding}
                      className={`px-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-tight uppercase border transition-all duration-200 ${
                        activeTerminalPreset === 'saas'
                          ? 'bg-lime-400/10 border-lime-400/50 text-lime-400'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.12] hover:text-white'
                      }`}
                    >
                      SaaS Deploy
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Hero Bottom statistics/credits indicator */}
          <div className="mt-16 md:mt-24 border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row justify-between gap-6 font-mono text-[10px] text-zinc-500 uppercase tracking-widest text-left">
            <div>
              <span className="text-zinc-600 block mb-1">HQ ADDRESS & INFO</span>
              <strong className="text-zinc-300 font-semibold">(주) 에이브로 · AVRO INC.</strong>
            </div>
            <div>
              <span className="text-zinc-600 block mb-1">CORE METHOD</span>
              <strong className="text-zinc-300 font-semibold">LLM + RAG + MULTI-AGENT AUTOPILOT</strong>
            </div>
            <div>
              <span className="text-zinc-600 block mb-1">SUCCESS STATISTICS</span>
              <strong className="text-zinc-300 font-semibold text-lime-400">10 YEARS EXPERIENCE ✓</strong>
            </div>
          </div>
        </section>

        {/* CONTINUOUS MARQUEE TICKER ROW */}
        <section className="py-4 overflow-hidden border-y border-white/[0.08] bg-[#d4ff3a] text-black font-mono font-black text-xs uppercase tracking-widest mb-16 relative z-10">
          <div className="flex whitespace-nowrap select-none overflow-hidden">
            <div className="flex gap-16 shrink-0 animate-tick">
              <span>★ MATHHWP.COM</span>
              <span className="text-black/30">/</span>
              <span>DIGITAL CONTENT SOLUTION</span>
              <span className="text-black/30">/</span>
              <span className="text-indigo-950 font-black">AI MARKETING AUTOMATION</span>
              <span className="text-black/30">/</span>
              <span>VIDEO PRODUCTION EXPERT</span>
              <span className="text-black/30">/</span>
              <span className="text-red-700 font-bold">EBSMATH PARTNER</span>
              <span className="text-black/30">/</span>
              <span>SITE OPERATION CRITICAL SYSTEMS</span>
              <span className="text-black/30">/</span>
              <span>SINCE 2016</span>
              <span className="text-black/30">/</span>
            </div>
            <div className="flex gap-16 shrink-0 animate-tick" aria-hidden="true">
              <span>★ MATHHWP.COM</span>
              <span className="text-black/30">/</span>
              <span>DIGITAL CONTENT SOLUTION</span>
              <span className="text-black/30">/</span>
              <span className="text-indigo-950 font-black">AI MARKETING AUTOMATION</span>
              <span className="text-black/30">/</span>
              <span>VIDEO PRODUCTION EXPERT</span>
              <span className="text-black/30">/</span>
              <span className="text-red-700 font-bold">EBSMATH PARTNER</span>
              <span className="text-black/30">/</span>
              <span>SITE OPERATION CRITICAL SYSTEMS</span>
              <span className="text-black/30">/</span>
              <span>SINCE 2016</span>
              <span className="text-black/30">/</span>
            </div>
          </div>
        </section>

        {/* SECTION 1: ABOUT */}
        <section id="about" className="py-16 md:py-24 text-left scroll-mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            
            {/* Title column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase mb-4">
                <span>01</span>
                <span className="text-zinc-700">/</span>
                <span>ABOUT THE STUDIO</span>
                <span className="text-zinc-700">↳</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white mb-6">
                우리는 <span className="text-lime-400">AI</span>로<br/>소프트웨어를 만듭니다.
              </h2>
              <div className="w-12 h-[1px] bg-white/[0.1] block" />
            </div>

            {/* Paragraph column & Factsheet */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xl font-sans font-medium text-white leading-relaxed">
                "이전의 방식을 파괴하고 고품질의 생성형 AI 기반 오토메이션 시스템을 실시간 배포합니다."
              </p>
              <p className="text-zinc-400 text-base leading-relaxed space-y-4">
                오랜 세월 동안 EBSMath, 미래엔, 윌비스 등 주요 에듀테크 전문 그룹 및 미디어 기업들과 쌓아온 <strong>10년 간의 공장형 개발/지속 품질 검증 (QA) 노하우</strong>를 가지고 있습니다.
                여기에 최신의 대형언어모델(LLMs) 비즈니스 전개 기획을 주입하여 기획에서 정식 런칭까지 걸리는 타임라인을 압도적으로 단축시켰습니다.
              </p>

              {/* FACT SHEET TABLE */}
              <div className="border border-white/[0.08] lg:max-w-2xl bg-zinc-950/75 rounded-xl overflow-hidden font-mono text-xs mt-8 shadow-inner">
                <div className="bg-white/[0.02] border-b border-white/[0.06] p-3 text-zinc-500 flex justify-between items-center px-4">
                  <span>// FACT_SHEET_DATA</span>
                  <span className="text-[10px] text-lime-400 font-bold uppercase">Avro Inc. Verified ✓</span>
                </div>
                
                <div className="divide-y divide-white/[0.05]">
                  <div className="grid grid-cols-3 p-3.5 px-4">
                    <span className="text-zinc-500">법인명</span>
                    <span className="col-span-2 text-zinc-200 font-semibold">주식회사 에이브로 (AVRO INC.)</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 px-4">
                    <span className="text-zinc-500">설립 일자</span>
                    <span className="col-span-2 text-zinc-200">2016년 7월 18일</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 px-4">
                    <span className="text-zinc-500">핵심 기술</span>
                    <span className="col-span-2 text-lime-400 font-semibold flex items-center gap-1">
                      LLM 통합 · 에이전틱 자동화 · 풀스택 클라우드
                    </span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 px-4">
                    <span className="text-zinc-500">주요 스택</span>
                    <span className="col-span-2 text-zinc-300">Claude · GPT · Gemini · Next.js · React · Node · Python · AWS</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 px-4 col-span-3">
                    <span className="text-zinc-500">소재지</span>
                    <span className="col-span-2 text-zinc-400">인천 서구 청라에메랄드로 99</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </section>

        {/* SECTION 2: SERVICES (ACCORDIONS) */}
        <section id="services" className="py-16 md:py-24 text-left border-t border-white/[0.04] scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase mb-4">
                <span>02</span>
                <span className="text-zinc-700">/</span>
                <span>CORE CAPABILITIES</span>
                <span className="text-zinc-700">↳</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white">
                AI로 극대화하는<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-cyan-300">네 가지</span> 비즈니스 축.
              </h2>
            </div>
            <div className="max-w-xs font-mono text-xs text-zinc-500">
              * 각 항목을 클릭하여 구체적인 제공 사항과 핵심 태스크를 펼쳐보실 수 있습니다.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-5xl">
            {servicesData.map((svc) => (
              <motion.div
                key={svc.num}
                layout="position"
                onClick={() => setActiveService(activeService === svc.num ? null : svc.num)}
                className={`glass-effect border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeService === svc.num
                    ? 'border-lime-400/40 bg-zinc-900/60 shadow-[0_4px_30px_rgba(212,255,58,0.05)]'
                    : 'border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.01]'
                }`}
              >
                {/* Accordion header */}
                <div className="p-6 flex justify-between items-center gap-4">
                  <div className="flex items-center gap-5 sm:gap-7">
                    <span className="font-mono text-xs sm:text-sm text-lime-400 bg-lime-400/10 px-3 py-1 rounded border border-lime-400/20 font-bold">
                      {svc.num}
                    </span>
                    <div className="flex flex-col">
                      <h3 className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight">{svc.title}</h3>
                      <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-widest mt-0.5">{svc.englishTitle}</span>
                    </div>
                  </div>
                  <motion.div 
                    animate={{ rotate: activeService === svc.num ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-zinc-400 bg-white/[0.02]"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Accordion content */}
                <AnimatePresence initial={false}>
                  {activeService === svc.num && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="border-t border-white/[0.06] bg-black/40 overflow-hidden"
                    >
                      <div className="p-6 space-y-6">
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                          {svc.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {svc.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 font-mono text-[11px] text-zinc-400">
                              <Check className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </section>

        {/* SECTION 3: WORKS (FILTERED PORTFOLIO) */}
        <section id="works" className="py-16 md:py-24 text-left border-t border-white/[0.04] scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col justify-start mb-12">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase mb-4">
              <span>03</span>
              <span className="text-zinc-700">/</span>
              <span>SELECTED PROJECTS</span>
              <span className="text-zinc-700">↳</span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white mb-4">
                  프로젝트 &amp; 제품군.
                </h2>
                <p className="text-zinc-400 font-mono text-xs max-w-md">
                  에이브로가 자랑스럽게 독점 배포하거나, 유수한 파트너십으로 극대화시킨 주요 제품 사례입니다.
                </p>
              </div>

              {/* Dynamic Tabs/Filters */}
              <div className="flex items-center gap-1.5 bg-zinc-950 p-1 rounded-full border border-white/[0.06] self-start md:self-auto shrink-0">
                <button
                  onClick={() => setProjectFilter('ALL')}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all duration-200 ${
                    projectFilter === 'ALL'
                      ? 'bg-lime-400 text-black shadow-[0_2px_8px_rgba(212,255,58,0.25)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => setProjectFilter('AI')}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all duration-200 ${
                    projectFilter === 'AI'
                      ? 'bg-lime-400 text-black shadow-[0_2px_8px_rgba(212,255,58,0.25)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  AI SaaS
                </button>
                <button
                  onClick={() => setProjectFilter('CASE_STUDY')}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all duration-200 ${
                    projectFilter === 'CASE_STUDY'
                      ? 'bg-lime-400 text-black shadow-[0_2px_8px_rgba(212,255,58,0.25)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Case Studies
                </button>
              </div>
            </div>
          </div>

          {/* Project List/Grid Layout */}
          <div className="grid grid-cols-1 gap-6 max-w-5xl">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((prj) => (
                <motion.div
                  key={prj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className={`glass-effect border rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center relative overflow-hidden ${
                    prj.isFeatured
                      ? 'border-lime-400/[0.25] bg-gradient-to-r from-lime-400/[0.04] to-cyan-400/[0.02]'
                      : 'border-white/[0.05]'
                  } glass-effect-hover`}
                >
                  {/* Glowing tag for featured badge */}
                  {prj.isFeatured && (
                    <div className="absolute top-0 right-0 p-1 px-3 bg-lime-400 text-black font-mono font-black text-[8px] uppercase tracking-widest rounded-bl-lg shadow-md animate-pulse">
                      Featured SaaS
                    </div>
                  )}

                  {/* Left detail area */}
                  <div className="space-y-4 max-w-2xl text-left">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[10px] font-bold text-lime-400 tracking-wider">
                        {prj.id}
                      </span>
                      <span className="text-zinc-600 font-mono text-[10px]">•</span>
                      <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border ${
                        prj.status === 'LAUNCHING SOON' 
                          ? 'bg-cyan-400/10 border-cyan-400/25 text-cyan-400 animate-pulse' 
                          : prj.status === 'LIVE' 
                          ? 'bg-lime-400/10 border-lime-400/25 text-lime-400' 
                          : 'bg-white/[0.02] border-white/[0.08] text-zinc-400'
                      }`}>
                        {prj.status}
                      </span>
                      {prj.domain && (
                        <a 
                          href={`https://${prj.domain}`} 
                          target="_blank" 
                          rel="noopener" 
                          className="font-mono text-[10px] text-zinc-500 hover:text-white flex items-center gap-0.5 transition-colors duration-150"
                        >
                          {prj.domain} <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight flex items-center gap-2">
                        {prj.name}
                        <span className="text-xs font-mono font-medium text-zinc-500"> — {prj.client}</span>
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2.5">
                        {prj.description}
                      </p>
                    </div>

                    {/* Chips list */}
                    <div className="flex flex-wrap gap-1.5">
                      {prj.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded bg-zinc-950 font-mono text-[9px] text-zinc-500 border border-white/[0.04]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Operational redirection link icon */}
                  {prj.domain && (
                    <motion.a
                      href={`https://${prj.domain}`}
                      target="_blank"
                      rel="noopener"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full border border-lime-400/30 text-lime-400 bg-lime-400/10 flex items-center justify-center cursor-pointer shrink-0"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          </motion.div>
        </section>

        {/* SECTION 4: HISTORY TIMELINE */}
        <section id="history" className="py-16 md:py-24 text-left border-t border-white/[0.04] scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            
            {/* Left title card sticky scope */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 h-max">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase mb-4">
                <span>04</span>
                <span className="text-zinc-700">/</span>
                <span>CHRONOLOGICAL MILESTONES</span>
                <span className="text-zinc-700">↳</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white mb-6">
                10년의<br/><span className="text-lime-400">발자취</span>와 증명.
              </h2>
              <p className="text-zinc-500 font-mono text-xs max-w-xs leading-relaxed">
                에이브로는 반짝 뜨고 사라지는 유행성 개발팀이 아닙니다. 비즈니스 가치에 복종하고 실행 무결성을 확보해 온 연대기입니다.
              </p>
            </div>

            {/* Right timeline path */}
            <div className="lg:col-span-7 border-l border-white/[0.08] pl-6 sm:pl-8 space-y-12">
              {timelineData.map((mile) => (
                <div key={mile.year} className="relative group">
                  {/* Circle locator target node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#07070a] border-2 border-lime-400 shadow-[0_0_8px_#d4ff3a] group-hover:scale-125 transition-transform duration-200" />
                  
                  {/* Year text badge */}
                  <span className="font-mono text-sm sm:text-lg font-black text-lime-400 tracking-tight leading-none mb-4 block">
                    {mile.year}
                  </span>

                  {/* Events list */}
                  <ul className="space-y-4">
                    {mile.events.map((ev, idx) => (
                      <li 
                        key={idx} 
                        className={`text-xs sm:text-sm text-zinc-400 leading-relaxed list-none relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full ${
                          ev.isHighlight 
                            ? 'before:bg-lime-400 text-zinc-100 font-medium' 
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
        </section>

        {/* SECTION 5: PARTNERS (LOGO GRID) */}
        <section id="partners" className="py-16 md:py-24 text-left border-t border-white/[0.04]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-3 mb-10">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase">
              <span>05</span>
              <span className="text-zinc-700">/</span>
              <span>CLIENT PARTNERS</span>
              <span className="text-zinc-700">↳</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-sans font-black text-white">
              함께 혁신을 고도화한 파트너들.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {partnersData.map((part) => (
              <motion.div
                key={part.name}
                whileHover={{ y: -3, borderFull: true, borderColor: 'rgba(212,255,58,0.2)' }}
                className={`flex flex-col items-center justify-center p-5 rounded-lg border text-center relative overflow-hidden transition-colors duration-300 ${
                  part.isHighlight
                    ? 'border-lime-400/20 bg-lime-400/[0.02] text-white hover:bg-lime-400/[0.05]'
                    : 'border-white/[0.04] bg-white/[0.01] hover:bg-neutral-900/40 hover:border-white/[0.12]'
                }`}
              >
                {part.isHighlight && (
                  <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-lime-400 shadow-[0_0_5px_#d4ff3a]" />
                )}
                <span className={`font-sans font-bold text-sm sm:text-base ${part.isHighlight ? 'text-lime-300' : 'text-zinc-200'}`}>
                  {part.name}
                </span>
                <span className="font-mono text-[8px] tracking-wider text-zinc-500 uppercase mt-1">
                  {part.type}
                </span>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </section>

        {/* SECTION 6: HOW WE WORK (PROCESS) */}
        <section id="process" className="py-16 md:py-24 text-left border-t border-white/[0.04]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-3 mb-12">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase">
              <span>06</span>
              <span className="text-zinc-700">/</span>
              <span>METICULOUS WORKFLOW</span>
              <span className="text-zinc-700">↳</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-sans font-black text-white">
              의뢰가 완결로 이루어지는 정밀 흐름.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step) => (
              <div 
                key={step.step} 
                className="p-6 rounded-xl border border-white/[0.04] bg-white/[0.01] flex items-center gap-4 relative overflow-hidden group hover:border-lime-400/30 hover:bg-[#0c0c10] transition-colors duration-200"
              >
                {/* Static indicator badge inside card decoration */}
                <div className="w-10 h-10 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 flex items-center justify-center font-mono font-bold text-sm shrink-0 flex-none shadow-sm shadow-lime-400/20">
                  {step.step}
                </div>
                
                <div className="flex flex-col text-left justify-center min-w-0">
                  <span className="font-sans font-bold text-[14px] text-zinc-100 truncate">{step.title}</span>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest truncate mt-0.5">{step.englishTitle}</span>
                </div>
              </div>
            ))}
          </div>
          </motion.div>
        </section>

        {/* METICULOUS MANIFESTO HIGHLIGHT BANNER */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="py-12 md:py-16 my-8 px-6 sm:px-12 rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-950/10 to-transparent flex flex-col justify-center items-start text-left relative overflow-hidden"
        >
          <div className="absolute top-4 left-6 sm:left-12 font-mono text-[9px] tracking-widest text-red-500 uppercase font-black">
            ◆ AVRO_MANIFESTO // METRICS
          </div>
          <p className="font-sans font-bold text-xl sm:text-3xl text-white tracking-tight leading-relaxed max-w-3xl mt-6">
            "감으로만 짐작하고 주먹구구로 운영하던 마케팅과 데이터, <br className="hidden sm:inline" />
            이제 <span className="bg-lime-400 text-black px-2 py-0.5 rounded shadow-sm text-[16px] sm:text-[22px] font-black align-middle mx-1">AI</span>가 지능적으로 분석·이해하고 정형화된 <span className="text-red-400 underline decoration-red-500/60 decoration-2 underline-offset-4 font-black">자동화</span> 수치로 증명해 보입니다."
          </p>
          <div className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase mt-6">
            AVRO STUDIO MANIFESTO · FY 2026. ALL METRICS VERIFIED INC.
          </div>
        </motion.section>

        {/* SECTION 7: CONTACT / CTA */}
        <section id="contact" className="py-16 md:py-24 text-left border-t border-white/[0.04] scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            
            {/* CTA action copy column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-lime-400 uppercase mb-4">
                <span className="text-lime-300 font-bold">$</span>
                <span className="text-zinc-700">/</span>
                <span>avro_studio_routine_start.cmd</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tight text-white mb-6 leading-none">
                Together,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-cyan-300 to-emerald-300">함께 만들어갈까요?</span>
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ repeat: Infinity, duration: 1, step: 'end' }} 
                  className="inline-block w-3 h-8 bg-lime-400 align-middle ml-1 shadow-[0_0_8px_#d4ff3a]" 
                />
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                에이전틱 제품 제작이 필요하시거나, mathhwp.com과 같은 PDF OCR 기반 HWP API 특수 가공이 필요하시다면 언제든 연락 주시기 바랍니다. 
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href="mailto:ceo@avro.co.kr"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-mono font-black text-xs uppercase tracking-widest flex items-center justify-between gap-4 shadow-[0_4px_15px_rgba(34,211,238,0.3)] group"
                >
                  <span>ceo@avro.co.kr 이메일 전송</span>
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform duration-200" />
                </motion.a>
              </div>
            </div>

            {/* Practical corporate info list column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="glass-effect border border-white/[0.05] p-6 rounded-2xl space-y-6">
                <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest border-b border-white/[0.04] pb-3 text-left">
                  // Contact Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">email support</span>
                      <a href="mailto:ceo@avro.co.kr" className="text-zinc-200 font-bold hover:text-lime-400 transition-colors duration-150">
                        ceo@avro.co.kr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">web link</span>
                      <a href="https://www.avro.co.kr" target="_blank" rel="noopener" className="text-zinc-200 font-bold hover:text-cyan-400 transition-colors duration-150 flex items-center gap-1">
                        www.avro.co.kr <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-1" />
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">headquarters location</span>
                      <span className="text-zinc-300 font-sans text-xs">
                        인천광역시 서구 청라에메랄드로 99
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/[0.04] pt-4 font-mono text-[9px] text-zinc-500 leading-relaxed text-left">
                  * 귀하가 전송해주시는 이메일은 대표 계정으로 직접 송신되며, 영업일 기준 평균 4시간 안에 담당 본부장급이 연락을 드립니다.
                </div>
              </div>
            </div>

          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-black/90 py-12 relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8 border-b border-white/[0.04] pb-8">
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-lime-400 text-black font-mono font-black flex items-center justify-center text-xs">A</span>
                <span className="font-sans font-extrabold text-white tracking-widest">AVRO</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase mt-1">
                DIGITAL CONTENT × AI ENGINEERING SOLUTION
              </span>
            </div>

            {/* Corp legal info box */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/[0.01] border border-white/[0.04] p-4 rounded-xl font-mono text-[9px] text-zinc-500 leading-relaxed text-left">
              <div>
                <span className="text-zinc-600 uppercase block mb-0.5">CEO / 대표자</span>
                <span className="text-zinc-300">박예준 대표</span>
              </div>
              <div>
                <span className="text-zinc-600 uppercase block mb-0.5">설립 일자</span>
                <span className="text-zinc-300">2016-07-18</span>
              </div>
              <div>
                <span className="text-zinc-600 uppercase block mb-0.5">사업자등록번호</span>
                <span className="text-zinc-300 font-medium">205-87-00590</span>
              </div>
              <div>
                <span className="text-zinc-600 uppercase block mb-0.5">LOC CODE</span>
                <span className="text-zinc-300">CHEONGNA, KOR</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 font-mono text-[10px] text-zinc-500">
            <span>© 2026 (주)에이브로 · AVRO INC. ALL RIGHTS RESERVED.</span>
            <span className="text-lime-400 font-extrabold flex items-center gap-1.5 self-start sm:self-auto">
              <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
              SECURED WITH ADVANCED AI WORKSPACE
            </span>
          </div>

        </div>
      </footer>
    </div>
  );
}
