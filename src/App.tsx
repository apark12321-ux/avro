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
import CursorAura from './components/CursorAura';
import TiltCard from './components/TiltCard';
import GlitchText from './components/GlitchText';

export default function App() {
  const [activeService, setActiveService] = useState<string | null>('01');
  const [projectFilter, setProjectFilter] = useState<'ALL' | 'AI' | 'CASE_STUDY'>('ALL');
  const [liveSeoulTime, setLiveSeoulTime] = useState<string>('');
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [isNavHidden, setIsNavHidden] = useState<boolean>(false);
  const [brandRotation, setBrandRotation] = useState<number>(0);
  const [typedCommand, setTypedCommand] = useState<string>('edu-agent generate --grade=middle-3 --subject="math"');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ id: number; text: string; type: 'client' | 'info' | 'success' | 'warn' | 'header' }>>([
    { id: 1, text: 'edu-agent init --preset=curriculum_analysis', type: 'header' },
    { id: 2, text: 'Initializing AvroEdu Core Engine v2.0.1...', type: 'info' },
    { id: 3, text: '✓ 10-Year public & corporate educational contents QA database loaded.', type: 'success' },
    { id: 4, text: '✓ Adaptive learning math formula (LaTeX-HWPX) converter engine active.', type: 'success' },
    { id: 5, text: 'Ready to build high-precision pedagogical materials & visual assets below.', type: 'info' }
  ]);
  const [isTerminalBuilding, setIsTerminalBuilding] = useState<boolean>(false);
  const [activeTerminalPreset, setActiveTerminalPreset] = useState<string>('lesson');

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

  // Scroll depth, direction, and brand mark rotation tracking
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollPercentage((currentScrollY / scrollHeight) * 100);
      }

      // Hide nav when scrolling down past 100px, show when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsNavHidden(true);
        } else {
          setIsNavHidden(false);
        }
      } else {
        setIsNavHidden(false);
      }

      // Brand mark dynamic scroll rotation
      setBrandRotation(currentScrollY * 0.15);
      lastScrollY = currentScrollY;
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
      case 'lesson':
        commandText = 'edu-agent compose --type=lesson-plan --topic="중3 삼각비 실생활 활용"';
        sequence = [
          { text: 'Analyzing curriculum standards and pedagogic guidelines utilizing Google Gemini...', type: 'info' },
          { text: 'Aligning with EBSMath structure and national math guidelines database...', type: 'info' },
          { text: '✓ Generated optimized lesson plan structure, concept keys & rubric.', type: 'success' },
          { text: '✓ Created instructor lecture guide and interactive prompt triggers.', type: 'success' },
          { text: '✓ Pedagogical validation index: Excellent (98.6% structure rating).', type: 'success' }
        ];
        break;
      case 'evaluation':
        commandText = 'edu-agent evaluate --source=custom_assessment --questions=5';
        sequence = [
          { text: 'Extracting key evaluation concepts and diagnostic formula patterns...', type: 'info' },
          { text: 'Generating multi-level diagnostic math questions & descriptive feedback...', type: 'info' },
          { text: '✓ Styled study materials into 5 personalized adaptive assessment items.', type: 'success' },
          { text: '✓ Rendered math symbols via LaTeX-HWP compiler engine smoothly.', type: 'success' },
          { text: '✓ Concept coverage alignment & pedagogical difficulty checks passed.', type: 'success' }
        ];
        break;
      case 'visualize':
        commandText = 'edu-agent render --output=visual-deck --style=diagram';
        sequence = [
          { text: 'Pre-calculating instructional visual layout & geometric concept node shapes...', type: 'info' },
          { text: 'Configuring precise responsive coordinates for educational vector graphics...', type: 'info' },
          { text: '✓ Educational visual animation frame timeline mapped successfully.', type: 'success' },
          { text: '✓ Generated concept slide: /assets/edu-gen/geometry_triangle.svg outputted.', type: 'success' },
          { text: '✓ Created graphic visualizer widget for student delivery.', type: 'success' }
        ];
        break;
      case 'integrate':
        commandText = 'edu-agent deploy --platform=lms --release=production';
        sequence = [
          { text: 'Validating curricular content compatibility against standard LMS API...', type: 'info' },
          { text: 'Initiating automated data publishing engine and academic validator...', type: 'info' },
          { text: '✓ Successfully compiled and synced to School LMS platform database.', type: 'success' },
          { text: '✓ HWPX/LaTeX formula rendering parsed with absolute integrity.', type: 'success' },
          { text: '✓ Triggered evaluation callback tracker mapping for classroom students.', type: 'success' },
          { text: '✓ Compiled 1 Concept Core → Multiple adaptive pedagogical resources live!', type: 'success' }
        ];
        break;
      default:
        commandText = 'edu-agent optimize';
        sequence = [{ text: 'Workflow optimization completed.', type: 'success' }];
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
    if (projectFilter === 'AI') return project.id.startsWith('PRD') || project.tags.some(tag => tag.toLowerCase().includes('ai') || tag.toLowerCase().includes('osmu') || tag.toLowerCase().includes('saas'));
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

      {/* Modern Aura Cursor Follower from HTML template with smooth inertia tracking */}
      <CursorAura />

      {/* Floating scroll indicator progress bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-lime-400 via-cyan-400 to-indigo-500 z-[1000] shadow-[0_0_8px_rgba(212,255,58,0.5)] transition-all duration-75"
        style={{ width: `${scrollPercentage}%` }}
      />

      {/* STICKY NAV - direction-aware scroll toggle hide/show */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.04] transition-transform duration-300 ease-out"
        style={{
          transform: isNavHidden ? 'translateY(-110%)' : 'translateY(0)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-md bg-lime-400 text-black font-mono font-black flex items-center justify-center text-lg shadow-[0_0_15px_rgba(212,255,58,0.3)] relative group cursor-pointer transition-transform duration-100"
              style={{ transform: `rotate(${brandRotation}deg)` }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              A
              <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-extrabold tracking-wider text-sm sm:text-base text-white">AVRO</span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest hidden sm:inline-block">에이브로</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Live Synchronized clock */}
            <div className="hidden lg:flex items-center gap-2 border border-white/[0.06] rounded-full px-3.5 py-1 bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_#d4ff3a]" />
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">SEL CLOCK {liveSeoulTime || '15:20:00'}</span>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://avro-home.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
            >
              <span>Main Website</span>
              <span className="text-lime-400 font-sans">↗</span>
            </motion.a>

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
                  PIVOT_RELEASE_2026
                </span>
                <span className="text-zinc-600">|</span>
                <span>EST 2016.07.18</span>
                <span className="text-zinc-600">|</span>
                <span className="text-cyan-400 font-medium">AVRO EDUTECH INTELLIGENCE</span>
              </motion.div>

               {/* Title with staggered text rise and interactive glitch hovering */}
               <h1 className="text-[2.2rem] sm:text-5xl md:text-[4.4rem] font-sans font-black tracking-tight leading-[1.05] sm:leading-[0.95] mb-6 select-none text-left">
                 <span className="block overflow-hidden py-1">
                   <motion.span 
                     initial={{ y: '100%' }}
                     animate={{ y: 0 }}
                     transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                     className="block"
                   >
                     배우고 가르치는 <GlitchText text="모든 이" className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-fill-transparent text-transparent" />를 위한
                   </motion.span>
                 </span>
                 <span className="block overflow-hidden py-1">
                   <motion.span 
                     initial={{ y: '100%' }}
                     animate={{ y: 0 }}
                     transition={{ duration: 0.8, delay: 0.15, cubicBezier: [0.16, 1, 0.3, 1] }}
                     className="block"
                   >
                     가장 편리한 <span className="bg-lime-400 text-black px-3.5 py-1.5 rounded-lg inline-block mr-2 shadow-[0_0_25px_rgba(212,255,58,0.25)] hover:bg-lime-300">AI 에듀테크</span>
                   </motion.span>
                 </span>
                 <span className="block overflow-hidden py-1">
                   <motion.span 
                     initial={{ y: '100%' }}
                     animate={{ y: 0 }}
                     transition={{ duration: 0.8, delay: 0.28, cubicBezier: [0.16, 1, 0.3, 1] }}
                     className="inline-block relative fill-current"
                   >
                     교육 특화 AI 엔진, <GlitchText text="AvroEdu" className="font-mono text-lime-400 italic font-medium hover:text-lime-300" />
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
                에이브로는 지난 10년간 공교육 플랫폼과 대형 출판사의 교육 콘텐츠를 기획·검증해 왔습니다. 검증된 교육 도메인 전문성에 AI 기술을 매끄럽게 결합하여, 교수자에게는 생산적인 수업 저작 툴을 제공하고 학습자에게는 개인 맞춤형 교육 솔루션을 설계합니다.
              </motion.p>

              {/* Tag badges */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-2 text-left justify-start"
              >
                <span className="px-3.5 py-1.5 rounded-full border border-lime-400/40 bg-lime-400/5 text-lime-400 font-mono text-[10px] uppercase font-bold tracking-widest shadow-[0_0_15px_rgba(212,255,58,0.1)] hover:scale-105 transition-transform duration-200">
                  AvroEdu Platform
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[10px] uppercase font-semibold tracking-wider hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200">
                  Domain-Specific Math OCR & LaTeX
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 font-mono text-[10px] uppercase font-semibold tracking-wider hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200">
                  Adaptive Pedagogical AI
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
                      onClick={() => runTerminalSimulation('lesson')}
                      disabled={isTerminalBuilding}
                      className={`px-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-tight uppercase border transition-all duration-200 ${
                        activeTerminalPreset === 'lesson'
                          ? 'bg-lime-400/10 border-lime-400/50 text-lime-400'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.12] hover:text-white'
                      }`}
                    >
                      Lesson Plan
                    </button>
                    <button
                      onClick={() => runTerminalSimulation('evaluation')}
                      disabled={isTerminalBuilding}
                      className={`px-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-tight uppercase border transition-all duration-200 ${
                        activeTerminalPreset === 'evaluation'
                          ? 'bg-lime-400/10 border-lime-400/50 text-lime-400'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.12] hover:text-white'
                      }`}
                    >
                      Assessment
                    </button>
                    <button
                      onClick={() => runTerminalSimulation('visualize')}
                      disabled={isTerminalBuilding}
                      className={`px-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-tight uppercase border transition-all duration-200 ${
                        activeTerminalPreset === 'visualize'
                          ? 'bg-lime-400/10 border-lime-400/50 text-lime-400'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.12] hover:text-white'
                      }`}
                    >
                      Visual Deck
                    </button>
                    <button
                      onClick={() => runTerminalSimulation('integrate')}
                      disabled={isTerminalBuilding}
                      className={`px-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-tight uppercase border transition-all duration-200 ${
                        activeTerminalPreset === 'integrate'
                          ? 'bg-lime-400/10 border-lime-400/50 text-lime-400'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.12] hover:text-white'
                      }`}
                    >
                      LMS Sync
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
              <span>SITE OPERATION CRITICAL SYSTEMS</span>
              <span className="text-black/30">/</span>
              <span>SINCE 2016</span>
              <span className="text-black/30">/</span>
            </div>
            <div className="flex gap-16 shrink-0 animate-tick" aria-hidden="true">
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
                <span>ABOUT OUR JOURNEY</span>
                <span className="text-zinc-700">↳</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white mb-6">
                10년의 견고한 레거시,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-indigo-400">인공지능</span>으로 날아오르다.
              </h2>
              <div className="w-12 h-[1px] bg-white/[0.1] block mb-6" />
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-lime-400/20 transition-all duration-300">
                  <div className="font-mono text-lime-400 text-xs font-bold mb-1">LEGACY: 2016 - 2025</div>
                  <div className="text-zinc-400 text-[11px] leading-relaxed">
                    EBSMath, 미래엔 등 최고 수준의 엄격함이 요구되는 대형 에듀테크·공공 미디어 플랫폼들의 무결성 품질 검증(QA) 및 디지털 시각 제작물 대행 전념.
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-lime-400/30 bg-lime-400/[0.02] hover:border-lime-400/50 transition-all duration-300">
                  <div className="font-mono text-lime-400 text-xs font-bold mb-1">AI PIVOT NEXT: 2026 ~</div>
                  <div className="text-zinc-300 text-[11px] leading-relaxed">
                    교수자와 학습자를 돕는 맞춤형 에듀테크 지원 도구 및 교육 AI 솔루션을 필두로, 기존 비-AI 비즈니스의 실무적 한계를 첨단 기술로 해결해 나가는 신뢰받는 에듀테크 엔지니어링 파트너로 거듭납니다.
                  </div>
                </div>
              </div>
            </div>

            {/* Paragraph column & Factsheet */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xl font-sans font-medium text-white leading-relaxed">
                "우리는 일시적인 트렌드에 치우치지 않습니다. 지난 10년간 축적해 온 디지털 콘텐츠 분야의 실무 실행력이 에이브로의 핵심 역량입니다."
              </p>
              <div className="text-zinc-400 text-sm leading-relaxed space-y-4 text-left">
                <p>
                  에이브로는 지난 10년간 대형 교과서 출판사의 에듀테크 플랫폼 기능 검증(QA/QC)을 수행하고, 공교육 수학 자료를 기획·개발해 왔습니다. 교육 현장의 복잡한 데이터를 안정적으로 다루며 축적된 기획력이 에이브로의 핵심 신뢰도입니다.
                </p>
                <p>
                  이러한 교육 도메인 경험에 실용적인 AI 기술을 접목했습니다. 실제 가르치고 배우는 현장의 워크플로우를 분석하여 배움의 깊이를 더하고 교재 저작 속도를 올리는 특화된 AI 플랫폼 <strong className="text-cyan-300">AvroEdu</strong>를 연구·설계하며 신뢰받는 에듀테크 파트너로 나아가고 있습니다.
                </p>
              </div>

              {/* FACT SHEET TABLE */}
              <div className="border border-white/[0.08] lg:max-w-2xl bg-zinc-950/75 rounded-xl overflow-hidden font-mono text-xs mt-8 shadow-inner">
                <div className="bg-white/[0.02] border-b border-white/[0.06] p-3 text-zinc-500 flex justify-between items-center px-4">
                  <span>// FACT_SHEET_DATA</span>
                  <span className="text-[10px] text-lime-400 font-bold uppercase">Pivot Status: Dynamic Verified ✓</span>
                </div>
                
                <div className="divide-y divide-white/[0.05]">
                  <div className="grid grid-cols-3 p-3.5 px-4">
                    <span className="text-zinc-500">법인명</span>
                    <span className="col-span-2 text-zinc-200 font-semibold">주식회사 에이브로 (AVRO INC.)</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 px-4">
                    <span className="text-zinc-500">설립 일자</span>
                    <span className="col-span-2 text-zinc-200">2016년 7월 18일 (10년 차 우량 법인)</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 px-4">
                    <span className="text-zinc-500">트랜스포메이션</span>
                    <span className="col-span-2 text-lime-400 font-semibold flex items-center gap-1">
                      전통 플랫폼 대행사 → 교육 특화 AI 전문 패밀리 피벗
                    </span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 px-4">
                    <span className="text-zinc-500">핵심 포커스</span>
                    <span className="col-span-2 text-zinc-300">AvroEdu Platform (지능형 맞춤 학습 및 교육 저작 툴)</span>
                  </div>
                  <div className="grid grid-cols-3 p-3.5 px-4 col-span-3">
                    <span className="text-zinc-500">주요 기술 스택</span>
                    <span className="col-span-2 text-zinc-400">Education Domain AI · Math Custom Parser · User Interactive SaaS</span>
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
              <TiltCard
                key={svc.num}
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
              </TiltCard>
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
                  className="w-full h-full"
                >
                  <TiltCard
                    className={`glass-effect border rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center relative overflow-hidden ${
                      prj.isFeatured
                        ? 'border-lime-400/[0.25] bg-gradient-to-r from-lime-400/[0.04] to-cyan-400/[0.02]'
                        : 'border-white/[0.05]'
                    } glass-effect-hover w-full h-full`}
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
                  </TiltCard>
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
          className="py-12 md:py-16 my-8 px-6 sm:px-12 rounded-2xl border border-white/[0.08] bg-white/[0.01] flex flex-col justify-center items-start text-left relative overflow-hidden"
        >
          <div className="absolute top-4 left-6 sm:left-12 font-mono text-[9px] tracking-widest text-lime-400 uppercase font-black">
            ◆ AVRO_MANIFESTO // AUTOMATION
          </div>
          <p className="font-sans font-bold text-xl sm:text-3xl text-white tracking-tight leading-relaxed max-w-3xl mt-6">
            "대형 브랜드 및 기관의 다채로운 디지털 비주얼 콘텐츠 기획과 수작업 가공 구조, <br className="hidden sm:inline" />
            이제 <span className="bg-lime-400 text-black px-2 py-0.5 rounded shadow-sm text-[16px] sm:text-[22px] font-black align-middle mx-1">AI</span> 엔지니어링이 지능적으로 분석·조율하여 정밀한 <span className="text-lime-400 underline decoration-lime-500/60 decoration-2 underline-offset-4 font-black">자동화</span> 설계로 기획과 운영 프로세스를 지원합니다."
          </p>
          <div className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase mt-6">
            AVRO STUDIO MANIFESTO · FY 2026. ALL PROCESS VERIFIED.
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
                에이전틱 제품 제작이 필요하시거나, 도메인 특화 데이터 자동화 및 특수 콘텐츠 API 연동 가공이 필요하시다면 언제든 연락 주시기 바랍니다. 
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
              <a 
                href="https://avro-home.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-lime-400 hover:text-lime-300 tracking-wider uppercase mt-3.5 inline-flex items-center gap-1.5 transition-colors font-bold"
              >
                <span>Go to Main Website</span>
                <span className="text-xs">↗</span>
              </a>
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
