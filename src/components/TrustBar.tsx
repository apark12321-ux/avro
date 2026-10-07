import { ShieldCheck, Sparkles, Layers, Award } from 'lucide-react';

export default function TrustBar() {
  const points = [
    {
      icon: Sparkles,
      title: '3문항 무료 샘플 선제작',
      desc: '의뢰 전 가장 까다로운 3문항을 먼저 HWP로 작업해 드립니다. 직접 퀄리티를 보시고 발주를 결정하세요.',
      badge: '0원 테스트',
    },
    {
      icon: ShieldCheck,
      title: '원고 보안 NDA 100% 체결',
      desc: '시험 출제 전 중요한 시험지 원고의 유출을 엄격히 방지합니다. 원하시는 경우 전자서명 NDA를 선발행합니다.',
      badge: '보안 철저',
    },
    {
      icon: Layers,
      title: '300문항 이상 대량 신속 출고',
      desc: '시즌별 대량 시험지·모의고사도 일정 밀림 없이 완벽 납품합니다. 3단계 교차 검수로 오탈자 0%를 지향합니다.',
      badge: '납기 보증',
    },
    {
      icon: Award,
      title: '3단계 교차 무결성 검수',
      desc: '전문 에디터가 수식 폰트, 자간, 도형 좌표를 3단계에 걸쳐 정밀 교차 검수하여 오탈자 제로를 지향합니다.',
      badge: '품질 검증',
    },
  ];

  return (
    <div className="space-y-6 text-left">
      <div className="border-l-4 border-sky-400 pl-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          망설임 없는 선택, 에이브로 4대 안심 보증
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          조판 외주는 약속된 품질과 철저한 보안이 핵심입니다. 에이브로는 투명하게 원칙을 지킵니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {points.map((pt, idx) => {
          const Icon = pt.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-900/40">
                    {pt.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                PROMISE 0{idx + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
