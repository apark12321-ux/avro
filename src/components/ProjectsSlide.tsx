import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';
import TiltCard from './TiltCard';

interface ProjectsSlideProps {
  projectFilter: 'ALL' | 'AI' | 'CASE_STUDY';
  setProjectFilter: (filter: 'ALL' | 'AI' | 'CASE_STUDY') => void;
  filteredProjects: ProjectItem[];
}

export default function ProjectsSlide({
  projectFilter,
  setProjectFilter,
  filteredProjects,
}: ProjectsSlideProps) {
  return (
    <div className="flex flex-col justify-center w-full h-full py-4 min-h-0 text-left">
      <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase mb-1 shrink-0 select-none">
        <span>SLIDE 02</span>
        <span className="text-zinc-700">/</span>
        <span>SELECTED PORTFOLIO</span>
        <span className="text-zinc-700">↳</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 mb-4 shrink-0">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-black tracking-tight text-white leading-none">
            대표 프로젝트 &amp; 제품사례
          </h2>
          <p className="text-zinc-500 font-mono text-[9.5px] mt-2">
            에이브로의 교육적 도메인 혁신과 수리적 무결성 및 AI 연동 기술을 수렴한 정예 포트폴리오 목록입니다.
          </p>
        </div>

        {/* Project Filter Controls */}
        <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.06] p-1 rounded-lg shrink-0 select-none">
          {(['ALL', 'AI', 'CASE_STUDY'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setProjectFilter(filter)}
              className={`px-3 py-1 rounded text-[8.5px] font-mono font-black transition-all cursor-pointer ${
                projectFilter === filter
                  ? 'bg-lime-400 text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              {filter === 'ALL' ? 'ALL PROJECTS' : filter === 'AI' ? 'AI & SaaS' : 'CASE STUDY'}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List with Local Y-Scroll */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-270px)] pr-2 space-y-3.5 custom-scrollbar min-h-0">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((prj) => (
            <motion.div
              key={prj.id}
              layout
              initial={{ opacity: 0, scale: 0.99, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.99, y: -10 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <TiltCard
                className={`glass-effect border rounded-xl p-5 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center relative overflow-hidden bg-[#0d0d12]/40 ${
                  prj.isFeatured
                    ? 'border-lime-400/[0.2] bg-gradient-to-r from-lime-400/[0.02] to-cyan-400/[0.01]'
                    : 'border-white/[0.04]'
                } glass-effect-hover w-full`}
              >
                {prj.isFeatured && (
                  <div className="absolute top-0 right-0 p-1 px-2.5 bg-lime-400 text-black font-mono font-black text-[7px] uppercase tracking-widest rounded-bl-md shadow-md select-none">
                    Featured
                  </div>
                )}

                <div className="space-y-2.5 max-w-3xl text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[9px] font-bold text-lime-400 tracking-wider">
                      {prj.id}
                    </span>
                    <span className="text-zinc-700 font-mono text-[9px]">•</span>
                    <span className={`font-mono text-[8.5px] px-2 py-0.5 rounded-full border ${
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
                        rel="noopener noreferrer" 
                        className="font-mono text-[9px] text-zinc-500 hover:text-white flex items-center gap-0.5 transition-colors"
                      >
                        {prj.domain} <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-sans font-black text-white tracking-tight flex items-baseline gap-2">
                      <span>{prj.name}</span>
                      <span className="text-[10px] font-mono text-zinc-500 font-normal"> — {prj.client}</span>
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed mt-1">
                      {prj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {prj.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-zinc-950 font-mono text-[8px] text-zinc-500 border border-white/[0.04]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {prj.domain && (
                  <motion.a
                    href={`https://${prj.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-lime-400/20 text-lime-400 bg-lime-400/5 flex items-center justify-center cursor-pointer shrink-0 mt-3 md:mt-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                )}
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
