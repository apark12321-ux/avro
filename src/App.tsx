import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  MapPin, 
  ExternalLink,
  Clock,
  ArrowUpRight
} from 'lucide-react';

// Components
import AICanvas from './components/AICanvas';
import CursorAura from './components/CursorAura';
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
  // Interactive Live Seoul clock
  const [seoulTime, setSeoulTime] = useState('');

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

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 font-sans relative overflow-x-hidden select-none">
      
      {/* Immersive ambient glows for premium "The Sky 184" feel */}
      <div className="absolute top-[5%] left-[15%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#5200ff]/5 blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[160px] pointer-events-none z-0" />

      {/* Background Interactive Particles Canvas */}
      <AICanvas />

      {/* Ambient Radial Cursor Aura Tracking Layer */}
      <CursorAura />

      {/* Grid Mesh Canvas Background Layer */}
      <div className="absolute inset-0 bg-grid-mesh opacity-5 pointer-events-none z-0" />

      {/* THE HEADER ZONE (Sticky & Frosted) */}
      <header className="sticky top-0 w-full bg-[#030712]/80 backdrop-blur-md border-b border-white/[0.05] z-50 py-4 px-6 sm:px-12 md:px-20 lg:px-32 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00ffd5] via-[#00aaff] to-[#6a00ff] text-white font-sans font-bold flex items-center justify-center text-xl shadow-[0_0_20px_rgba(0,255,213,0.3)]">
            A
          </span>
          <div className="flex flex-col text-left leading-none">
            <span className="font-sans font-extrabold tracking-widest text-xl text-white">
              <GlitchText text="AVRO" />
            </span>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono font-bold mt-1">
              EDUTECH TECH AGENCY
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { id: 'about', label: '회사 소개' },
            { id: 'services', label: '핵심 서비스' },
            { id: 'projects', label: '대표 프로젝트' },
            { id: 'process', label: '품질 프로세스' },
            { id: 'timeline', label: '주요 연혁' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-zinc-400 hover:text-white font-sans font-medium text-[15px] transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Info & Contact Trigger */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-2 border border-white/[0.08] rounded-full px-4 py-1.5 bg-white/[0.02]">
            <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400 tracking-wider">
              SEOUL : {seoulTime || '09:00:00'}
            </span>
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white font-sans font-bold text-xs transition-all shadow-[0_2px_15px_rgba(6,182,212,0.2)]"
          >
            문의하기
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 py-16 sm:py-24 space-y-32 sm:space-y-40">
        
        {/* HERO SECTION: 회사 소개 (About) */}
        <section id="about" className="scroll-mt-28 flex flex-col items-start text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen Edtech Enterprise</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl">
            에듀테크와 AI 기술로<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] via-[#00aaff] to-[#a855f7]">
              교육의 미래를 설계합니다.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl leading-relaxed font-normal">
            주식회사 에이브로(AVRO)는 대형 러닝 매니지먼트 시스템(LMS), 클라우드 기반 스마트 저작 엔진 개발, 그리고 가변 장치 최적화 지능형 멀티모달 솔루션을 구축하는 차세대 에듀테크 전문 기술 기업입니다.
          </p>

          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed font-normal">
            한 픽셀의 오차나 불규칙한 레이아웃 왜곡 현상을 완벽하게 해소하고, 복잡한 지식 리소스를 어떠한 기기에서든 완벽하게 렌더링하도록 지원하는 최첨단 지식 아키텍처를 제공합니다.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 font-sans font-bold text-sm tracking-wide transition-all shadow-lg cursor-pointer flex items-center gap-2"
            >
              <span>제공 솔루션 확인</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-sans font-bold text-sm tracking-wide transition-all cursor-pointer"
            >
              비즈니스 파트너십 제안
            </button>
          </div>
        </section>

        {/* CAPABILITIES SECTION: 핵심 서비스 (Services) */}
        <section id="services" className="scroll-mt-28 space-y-12">
          <div className="space-y-4 text-left">
            <div className="inline-block border-l-4 border-cyan-400 pl-4">
              <h2 className="text-2xl sm:text-3.5xl font-sans font-extrabold tracking-tight text-white leading-none">
                핵심 역량 및 서비스 라인업
              </h2>
            </div>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal">
              에이브로가 보유한 10여 년간의 탄탄한 도메인 노하우와 독자적인 기술력을 기반으로 가장 안정적이고 혁신적인 에듀테크 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {servicesData.map((service) => {
              // Custom icons based on num
              const Icon = service.num === '01' ? Cpu : 
                           service.num === '02' ? Layers : 
                           service.num === '03' ? ShieldCheck : Sparkles;

              return (
                <div 
                  key={service.num} 
                  className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.02] hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between space-y-8 group"
                >
                  <div className="space-y-4 text-left">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-zinc-500 tracking-widest">{service.num} // {service.englishTitle}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base text-zinc-400 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.items.map((it, idx) => (
                      <span 
                        key={idx} 
                        className="bg-black/40 border border-white/[0.06] px-3 py-1 rounded-md text-xs text-zinc-400 font-medium"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION: 대표 프로젝트 (Projects) */}
        <section id="projects" className="scroll-mt-28 space-y-12">
          <div className="space-y-4 text-left">
            <div className="inline-block border-l-4 border-cyan-400 pl-4">
              <h2 className="text-2xl sm:text-3.5xl font-sans font-extrabold tracking-tight text-white leading-none">
                대표 프로젝트 &amp; 제품사례
              </h2>
            </div>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal">
              공교육 인프라와 상용 에이전트 서비스 분야를 관통하는 축적된 신뢰성의 결과물입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className="relative overflow-hidden p-8 rounded-2xl border border-white/[0.05] bg-gradient-to-br from-white/[0.01] to-white/[0.03] hover:border-cyan-400/30 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between space-y-8 text-left"
              >
                {project.isFeatured && (
                  <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-bl-xl shadow-md border-l border-b border-cyan-400/20 select-none">
                    FEATURED PORTFOLIO
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-2.5 py-0.5 rounded text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-baseline gap-2 pt-1">
                    <span>{project.name}</span>
                  </h3>
                  
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    CLIENT : {project.client}
                  </div>

                  <p className="text-base text-zinc-300 leading-relaxed font-normal pt-2">
                    {project.description}
                  </p>
                </div>

                {project.domain && (
                  <a 
                    href={project.domain.startsWith('http') ? project.domain : `https://${project.domain}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors w-fit pt-2"
                  >
                    <span>{project.domain}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* PARTNERS LOGO CLOUD */}
          <div className="pt-12 border-t border-white/[0.04] space-y-6">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest text-left">
              TRUSTED BY LEADING BRANDS &amp; ORGANIZATIONS
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {partnersData.map((partner) => (
                <div 
                  key={partner.name}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                    partner.isHighlight 
                      ? 'border-cyan-500/25 bg-cyan-500/[0.02] text-white' 
                      : 'border-white/[0.04] bg-white/[0.01] text-zinc-400'
                  }`}
                >
                  <span className="text-sm font-bold tracking-tight">{partner.name}</span>
                  <span className="text-[9px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">{partner.type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION: 품질 완성 및 보증 절차 (Process) */}
        <section id="process" className="scroll-mt-28 space-y-12">
          <div className="space-y-4 text-left">
            <div className="inline-block border-l-4 border-cyan-400 pl-4">
              <h2 className="text-2xl sm:text-3.5xl font-sans font-extrabold tracking-tight text-white leading-none">
                품질 관리 및 보증 절차
              </h2>
            </div>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal">
              오차 없는 설계와 정밀한 검증 단계를 거쳐, 어떠한 환경에서도 완벽히 가동되는 무결성의 지식 플랫폼을 구현합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            {processSteps.map((proc) => (
              <div 
                key={proc.step} 
                className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] relative overflow-hidden flex flex-col justify-between min-h-[220px]"
              >
                <div className="absolute top-4 right-6 text-6xl font-mono font-extrabold text-white/[0.02] select-none">
                  {proc.step}
                </div>
                
                <div className="space-y-4">
                  <span className="font-mono text-xs font-bold text-cyan-400 block tracking-widest">
                    STAGE {proc.step} — {proc.englishTitle}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {proc.title}
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                    {proc.step === '01' ? '의뢰사의 실제 지식 학습 리소스 및 멀티모달 원본 문항들을 분석하여 가변형 레이아웃 오차가 예상되는 지점들을 완벽하게 진단합니다.' :
                     proc.step === '02' ? '가변 해상도 및 장치별 렌더러 파싱 규칙을 자동 보정하여 다양한 객체 데이터가 깨지지 않도록 반응형 뼈대 설계를 적용합니다.' :
                     '지능형 자동화 검증 프레임워크와 정합성 교차 테스트를 거친 후 최종 릴리즈를 무결성 상태로 배포 및 인도해 드립니다.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE SECTION: 주요 연혁 (Timeline) */}
        <section id="timeline" className="scroll-mt-28 space-y-12">
          <div className="space-y-4 text-left">
            <div className="inline-block border-l-4 border-cyan-400 pl-4">
              <h2 className="text-2xl sm:text-3.5xl font-sans font-extrabold tracking-tight text-white leading-none">
                주요 성장 연혁
              </h2>
            </div>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal">
              에이브로가 걸어온 길은 지식 자원의 지속 가능한 가치를 향한 끊임없는 연구와 정교한 구현의 역사입니다.
            </p>
          </div>

          <div className="border-l-2 border-white/[0.08] ml-2 pl-6 sm:pl-10 space-y-12 pt-4 relative">
            {timelineData.map((mile) => (
              <div key={mile.year} className="relative text-left space-y-3">
                {/* Visual node locator */}
                <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-3 h-3 rounded-full bg-[#030712] border-2 border-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                
                <span className="font-mono text-xl sm:text-2xl font-bold text-cyan-400 block tracking-tight">
                  {mile.year}
                </span>
                
                <ul className="space-y-3 list-none m-0 p-0 max-w-3xl">
                  {mile.events.map((ev, idx) => (
                    <li 
                      key={idx} 
                      className={`text-base sm:text-lg leading-relaxed flex items-start gap-2.5 ${
                        ev.isHighlight ? 'text-zinc-100 font-semibold' : 'text-zinc-400 font-normal'
                      }`}
                    >
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-1.5" />
                      <span>{ev.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION: 문의하기 (Contact) */}
        <section id="contact" className="scroll-mt-28">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.01] via-white/[0.03] to-cyan-500/[0.02] text-left relative overflow-hidden flex flex-col md:flex-row gap-10 items-start justify-between">
            
            {/* Subtle light decor */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

            <div className="space-y-6 max-w-xl z-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-cyan-400 uppercase">
                <span>$ avro_partnership_routine.sh</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
                에듀테크의 혁신,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] via-[#00aaff] to-[#a855f7]">함께 시작하겠습니다.</span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                가장 완벽한 디지털 지식 저작 솔루션과 최첨단 AI 기술 트렌드를 결합한 에듀테크 비즈니스 플랫폼 개발 협력이 필요하시다면 아래 대표 이메일로 제안서 혹은 문의사항을 전달해 주시기 바랍니다.
              </p>

              <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row gap-6 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:ceo@avro.co.kr" className="text-zinc-200 hover:text-cyan-400 font-bold transition-colors">
                    ceo@avro.co.kr
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-zinc-200">
                    인천광역시 서구 청라에메랄드로 99, 법인 기술연구소
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 z-10">
              <a 
                href="mailto:ceo@avro.co.kr"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:brightness-110 text-white font-sans font-bold text-base transition-all shadow-[0_4px_25px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                <span>이메일로 문의 송신하기</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#02050f] border-t border-white/[0.05] py-8 px-6 sm:px-12 md:px-20 lg:px-32 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <span>© {new Date().getFullYear()} AVRO Studio. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-4">
            <span>차세대 에듀테크 및 멀티모달 콘텐츠 변환 전문 기술 기업</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
