import { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Calculator, 
  ShieldCheck, 
  Check,
  FileCheck
} from 'lucide-react';
import QuickQuoteModal from './QuickQuoteModal';
import SampleBeforeAfterViewer from './SampleBeforeAfterViewer';

interface ConversionWorkstationProps {
  onOpenSampleModal?: () => void;
}

export default function ConversionWorkstation({ onOpenSampleModal }: ConversionWorkstationProps) {
  const [isQuickQuoteOpen, setIsQuickQuoteOpen] = useState(false);

  return (
    <section id="conversion-sample" className="py-16 md:py-24 bg-[#091024] text-white font-sans relative overflow-hidden border-t border-blue-900/40">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0066EE]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
            <span>PRECISION CONVERSION WORKSTATION</span>
            <span aria-hidden="true">·</span>
            <span>실물 원고 전산화 검증소</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
            불규칙한 스캔본·도면을 <span className="text-[#38BDF8]">완성형 HWP 문서</span>로
          </h2>

          <p className="text-zinc-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            교육 기하 수식(실제 검증 샘플)부터 공공 조례 표, 엔지니어링 계산서까지 슬라이더를 드래그하여 원고 대비 HWP 완결본 품질을 직접 확인하세요.
          </p>

          {/* Quick Action Bar including Quick Quote & Sample Request */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsQuickQuoteOpen(true)}
              className="px-6 py-2.5 rounded-full bg-[#0066EE] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Calculator className="w-4 h-4 text-[#38BDF8]" />
              <span>간편 견적 (Quick Quote)</span>
            </button>

            {onOpenSampleModal && (
              <button
                onClick={onOpenSampleModal}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>3문항 / 3페이지 무료 샘플 신청</span>
              </button>
            )}
          </div>
        </div>

        {/* Real Interactive Before vs After Viewer (4 Industry Cases + Uploaded Screenshots) */}
        <div className="max-w-5xl mx-auto mb-10">
          <SampleBeforeAfterViewer onOpenSampleModal={onOpenSampleModal} />
        </div>

        {/* Reassurance Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>표준 비밀유지서약(NDA) 준수</span>
          </div>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <div className="flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>고객사 상호 및 원본 정보 비노출 원칙</span>
          </div>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
            <span>작업 완료 후 원본 데이터 영구 파기 보장</span>
          </div>
        </div>

      </div>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuickQuoteOpen}
        onClose={() => setIsQuickQuoteOpen(false)}
      />
    </section>
  );
}
