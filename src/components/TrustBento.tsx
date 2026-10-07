import { ShieldCheck, FileCheck, Layers, Award } from 'lucide-react';
import { trustGuarantees } from '../data';

export default function TrustBento() {
  const icons = [FileCheck, ShieldCheck, Layers, Award];

  return (
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 font-mono text-xs">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ZERO-RISK GUARANTEE &amp; SECURITY</span>
        </div>
        <h3 className="text-2xl sm:text-3.5xl font-bold text-white tracking-tight">
          망설임 없는 신뢰, 4대 무결성 보증
        </h3>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
          시험 출제 전 보안부터 대량 납기 준수까지, 에이브로는 고객사의 신뢰를 최우선 가치로 두고 작업을 진행합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {trustGuarantees.map((item, idx) => {
          const Icon = icons[idx] || ShieldCheck;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                GUARANTEE 0{idx + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
