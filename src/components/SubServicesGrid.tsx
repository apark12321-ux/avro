import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SubServiceItem } from '../types';
import { subServices } from '../data';
import { ArrowRight, Check, Clock, Sparkles } from 'lucide-react';

interface SubServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export default function SubServicesGrid({ onSelectService }: SubServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'munhang' | 'homepage' | 'youtube'>('ALL');

  const filtered = activeCategory === 'ALL' 
    ? subServices 
    : subServices.filter((s) => s.category === activeCategory);

  return (
    <div className="space-y-8 text-left">
      
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'ALL', label: '전체 서비스 (9종)' },
            { id: 'munhang', label: '수학 문항 조판 & 교재 외주 (5종)' },
            { id: 'homepage', label: '학원·공부방 전문 웹사이트 (2종)' },
            { id: 'youtube', label: '강사·시니어 유튜브 세팅 (2종)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-white/[0.02] border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <span className="text-xs font-mono text-cyan-400">
          * 모든 문항 조판 서비스는 <strong className="text-white">샘플 3문항 무료</strong> 제공
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.025] hover:border-cyan-400/30 transition-all flex flex-col justify-between space-y-6 group relative overflow-hidden"
            >
              {service.badge && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-[9px] uppercase tracking-wider rounded-bl-xl shadow-md border-l border-b border-cyan-400/20">
                  {service.badge}
                </div>
              )}

              <div className="space-y-4">
                {/* Search Keywords Tags */}
                <div className="flex flex-wrap gap-1 pr-12">
                  {service.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-black/40 border border-white/[0.06] font-mono text-[9px] text-zinc-400"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-xs font-medium text-cyan-400 mt-1 leading-snug">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-1.5 pt-2 border-t border-white/[0.04] text-xs text-zinc-300">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer action and turnaround */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>납기: {service.turnaroundTime}</span>
                  </span>
                  {service.priceNote && (
                    <span className="text-cyan-400 font-bold">{service.priceNote}</span>
                  )}
                </div>

                <button
                  onClick={() => onSelectService(service.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 hover:text-white font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {service.category === 'munhang' ? '3문항 무료 샘플 신청하기' : '상담 문의하기'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
