import { ExternalLink, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { mathHwpInfo } from '../data';

interface MathHwpBannerProps {
  onOpenSampleModal: () => void;
}

export default function MathHwpBanner({ onOpenSampleModal }: MathHwpBannerProps) {
  return (
    <div className="w-full rounded-2xl border border-blue-500/25 bg-gradient-to-r from-[#070e24] via-[#08153b] to-[#0d1e4a] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-left relative overflow-hidden">
      
      {/* Ambient glow decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ECOSYSTEM INTEGRATION : mathhwp.com</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {mathHwpInfo.title}
          </h3>

          <p className="text-base sm:text-lg text-cyan-200 font-semibold">
            {mathHwpInfo.tagline}
          </p>

          <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
            {mathHwpInfo.description}
          </p>

          <div className="space-y-2 pt-2 text-xs text-zinc-200">
            {mathHwpInfo.features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: CTA Dual Action */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
          
          <a
            href={mathHwpInfo.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white flex items-center justify-between transition-all group shadow-sm"
          >
            <div className="text-left">
              <span className="text-[11px] text-zinc-400 font-mono block">1~2문항 무료 셀프 변환</span>
              <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                mathhwp.com 바로가기
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400" />
              </span>
            </div>
            <span className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
              무료 WEB
            </span>
          </a>

          <button
            onClick={onOpenSampleModal}
            className="p-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:brightness-110 text-white flex items-center justify-between transition-all shadow-[0_4px_20px_rgba(6,182,212,0.3)] cursor-pointer"
          >
            <div className="text-left">
              <span className="text-[11px] text-cyan-100 font-mono block">대량 발주 및 맞춤 교재 제작</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5">
                에이브로에 대량 외주 의뢰하기
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
            <span className="px-3 py-1 rounded-lg bg-white/20 text-white text-xs font-mono font-bold">
              샘플 3문항 무료
            </span>
          </button>

        </div>

      </div>

    </div>
  );
}
