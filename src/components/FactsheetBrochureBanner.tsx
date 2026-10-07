import { Phone, Mail, FileDown, ShieldCheck } from 'lucide-react';

interface FactsheetBrochureBannerProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function FactsheetBrochureBanner({ onOpenModal }: FactsheetBrochureBannerProps) {
  return (
    <div className="bg-[#121214] text-white border-y border-zinc-800 py-4 px-4 sm:px-8 font-sans">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        
        {/* Left */}
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#008CFF]" />
          <span className="font-bold text-white">긴급 작업 및 대량 외주 상담</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">평일/주말 09:00 ~ 22:00 전담 매니저 응대</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a
            href="tel:032-567-2480"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#008CFF]" />
            <span>032-567-2480</span>
          </a>

          <a
            href="mailto:ceo@avro.co.kr"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#008CFF]" />
            <span>ceo@avro.co.kr</span>
          </a>

          <button
            onClick={() => onOpenModal('sample')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#008CFF] hover:bg-[#0070cc] text-white transition-colors cursor-pointer font-bold"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>샘플 의뢰</span>
          </button>
        </div>

      </div>
    </div>
  );
}
