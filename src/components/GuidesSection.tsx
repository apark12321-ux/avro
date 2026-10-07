import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Clock, ChevronRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { guidesData } from '../data';
import { GuideItem } from '../types';

interface GuidesSectionProps {
  onOpenSampleModal: () => void;
}

export default function GuidesSection({ onOpenSampleModal }: GuidesSectionProps) {
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null);

  return (
    <div className="space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 font-mono text-xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE &amp; SEO GUIDE HUB</span>
          </div>
          <h3 className="text-2xl sm:text-3.5xl font-bold text-white tracking-tight">
            에이브로 실전 노하우 가이드
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            수학 수식 입력 팁부터 시험지 스캔 변환, 학원 홈페이지 제작 견적 노하우까지 실무에 바로 쓰는 가이드입니다.
          </p>
        </div>

        <span className="text-xs font-mono text-zinc-500">
          매월 실무 가이드 지속 업데이트
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidesData.map((guide) => (
          <div
            key={guide.id}
            onClick={() => setSelectedGuide(guide)}
            className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan-400/30 transition-all cursor-pointer flex flex-col justify-between space-y-5 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-[10px] font-bold">
                  {guide.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                  <Clock className="w-3 h-3" />
                  {guide.readTime}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {guide.title}
              </h4>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {guide.summary}
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                <span className="text-[10px] font-mono text-zinc-500">
                  # {guide.keyword}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
              <span>핵심 팁 &amp; 체크리스트 열람</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Guide Detail Modal */}
      <AnimatePresence>
        {selectedGuide && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGuide(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#090d18] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl z-10 my-8 text-left"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] pb-4">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono text-[10px] font-bold">
                    {selectedGuide.category}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {selectedGuide.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedGuide.summary}
                </p>

                <div className="space-y-3 p-4 rounded-xl bg-black/50 border border-white/[0.06]">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                    // 핵심 실무 체크포인트 &amp; 팁:
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-200">
                    {selectedGuide.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-zinc-300">
                    <strong className="text-cyan-300">직접 하기 번거로우신가요?</strong> 에이브로가 전문 에디터의 손길로 정밀 작업해 드립니다.
                  </div>
                  <button
                    onClick={() => {
                      setSelectedGuide(null);
                      onOpenSampleModal();
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shrink-0 hover:brightness-110 cursor-pointer shadow-md flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>샘플 3문항 무료 신청</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
