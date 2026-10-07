import { ExternalLink, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface MathHwpNoticeProps {
  onOpenSampleModal: () => void;
}

export default function MathHwpNotice({ onOpenSampleModal }: MathHwpNoticeProps) {
  return (
    <div className="w-full rounded-2xl border border-sky-900/50 bg-gradient-to-r from-slate-900 via-sky-950/30 to-slate-900 p-6 sm:p-8 text-left relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs">
            <Zap className="w-3.5 h-3.5" />
            <span>수학 조판 셀프 변환 vs 대량 외주 가이드</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            1~2문항은 <span className="text-sky-400 underline underline-offset-4">mathhwp.com</span>에서 무료 셀프 변환, <br className="hidden sm:block" />
            시험지·교재 대량 외주는 <span className="text-white font-extrabold">에이브로</span>에 맡기세요.
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            급하게 1~2문항만 수식으로 바꾸고 싶으시다면 에이브로가 운영하는 무료 웹 변환기 <strong>mathhwp.com</strong>을 바로 이용하세요. 
            시험지 전체나 교재 단위의 대량 문항 및 정밀 기하 도형 재작도는 에이브로 전문 에디터가 일괄 납품합니다.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              <span>mathhwp.com: 로그인 없이 1문항 즉시 변환</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              <span>에이브로: 300문항 대량 조판 & 교재 일괄 인쇄 규격 HWP</span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="https://mathhwp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
          >
            <span>mathhwp.com 바로가기</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <button
            onClick={onOpenSampleModal}
            className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow"
          >
            <span>에이브로 대량 외주 3문항 샘플 신청</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
