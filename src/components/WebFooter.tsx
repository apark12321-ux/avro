import { ArrowRight } from 'lucide-react';

interface WebFooterProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export default function WebFooter({
  onOpenModal,
  onOpenTerms,
  onOpenPrivacy,
}: WebFooterProps) {
  return (
    <footer
      id="contact-section"
      className="bg-[#0F172A] text-white border-t border-slate-800"
    >
      {/* Closing Conversion Strip */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-20 md:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-slate-800">
          <div className="max-w-xl">
            <div className="text-xs font-medium text-blue-400 mb-3">
              무료 업무 진단 · 맞춤 견적
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight text-balance text-white mb-3">
              우리 가게·사무실에 필요한 AI,
              <br />
              부담 없이 먼저 진단받아 보세요
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              업종과 고민만 남겨주시면 실제 적용 가능한 화면과 견적을 안내해 드립니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onOpenModal('sample')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>무료 업무 진단 신청</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onOpenModal('inquiry')}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              프로젝트 문의
            </button>
          </div>
        </div>

        {/* Quiet Corporate Info */}
        <div className="pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-slate-400">
          <div className="space-y-1.5">
            <div className="text-sm font-bold text-white">AVRO</div>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span>주식회사 에이브로</span>
              <span aria-hidden="true">·</span>
              <span>대표 박예준</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">사업자등록번호 205-87-00590</span>
              <span aria-hidden="true">·</span>
              <span>ceo@avro.co.kr</span>
            </div>
            <div className="text-slate-500">인천광역시 서구 청라에메랄드로 99</div>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenTerms}
                className="hover:text-white transition-colors cursor-pointer"
              >
                이용약관
              </button>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="hover:text-white transition-colors cursor-pointer"
              >
                개인정보처리방침
              </button>
            </div>
            <div className="text-slate-500">
              © {new Date().getFullYear()} AVRO Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
