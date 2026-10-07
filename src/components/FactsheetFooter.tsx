interface FactsheetFooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export default function FactsheetFooter({ onOpenTerms, onOpenPrivacy }: FactsheetFooterProps) {
  return (
    <footer className="py-5 bg-[#18181b] text-zinc-400 text-xs font-sans border-t border-zinc-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        
        {/* Left: Essential Corporate Details in one compact row */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-zinc-400">
          <span className="font-bold text-white tracking-tight">(주)에이브로</span>
          <span className="text-zinc-600">|</span>
          <span>대표: 박아론</span>
          <span className="text-zinc-600">|</span>
          <span>소재지: 인천광역시 서구 청라에메랄드로 99</span>
          <span className="text-zinc-600">|</span>
          <span>사업자번호: 539-81-03099</span>
          <span className="text-zinc-600">|</span>
          <span>통신판매: 제2024-인천서구-1982호</span>
          <span className="text-zinc-600">|</span>
          <span>이메일: ceo@avro.co.kr</span>
          <span className="text-zinc-600">|</span>
          <span>TEL: 032-567-2480</span>
        </div>

        {/* Right: Policy Links & Copyright */}
        <div className="flex items-center gap-3 shrink-0 text-zinc-500">
          <button
            onClick={onOpenTerms}
            className="hover:text-zinc-300 transition-colors cursor-pointer"
          >
            이용약관
          </button>
          <span>|</span>
          <button
            onClick={onOpenPrivacy}
            className="hover:text-zinc-300 transition-colors cursor-pointer"
          >
            개인정보처리방침
          </button>
          <span>|</span>
          <span>© AVRO Inc.</span>
        </div>

      </div>
    </footer>
  );
}
