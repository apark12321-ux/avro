import { Sparkles, ArrowRight } from 'lucide-react';
import { BlueBloomTop, BlueBloomBottom } from './BlueBloomArtwork';

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
    <footer id="contact-section" className="relative bg-[#060B19] text-white font-sans overflow-hidden pt-24 pb-12 border-t border-blue-900/40">
      {/* 3D Electric Blue Fluid Petals from Template Styling */}
      <BlueBloomTop />
      <BlueBloomBottom />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 text-center relative z-10">
        
        {/* Top Brand Label */}
        <div className="mb-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#38BDF8] uppercase">
            AVRO TYPESETTING SUITE
          </span>
        </div>

        {/* Closing Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-4 text-white">
          문서 변환과 수식 조판의 완결,
          <br />
          <span className="text-[#38BDF8]">지금 전문가와 함께하세요.</span>
        </h2>

        {/* Subtitle in Brackets */}
        <p className="text-sm sm:text-lg md:text-xl font-bold text-blue-200 tracking-wide mb-10">
          [ PDF to HWP 전산화 · 수식 타이핑 · 캡처 이미지 고화질 업스케일 ]
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-20">
          <button
            onClick={() => onOpenModal('sample')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0066EE] hover:bg-[#0052cc] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#0066EE]/40 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>샘플 3문항 무료 테스트</span>
          </button>

          <button
            onClick={() => onOpenModal('inquiry')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>외주 작업 문의</span>
            <ArrowRight className="w-4 h-4 text-zinc-300" />
          </button>
        </div>

        {/* Bottom Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-white/15 text-left text-xs text-zinc-400">
          <div>
            <span className="text-white font-bold block mb-1">상호 및 대표</span>
            <span>주식회사 에이브로 · 대표 박예준</span>
          </div>
          <div>
            <span className="text-white font-bold block mb-1">이메일 문의</span>
            <span>ceo@avro.co.kr</span>
          </div>
          <div>
            <span className="text-white font-bold block mb-1">사업자 정보</span>
            <span>등록번호: 205-87-00590</span>
          </div>
        </div>

        {/* Minimal Footer Row */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            인천광역시 서구 청라에메랄드로 99
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
            <button onClick={onOpenTerms} className="hover:text-white transition-colors cursor-pointer">
              이용약관
            </button>
            <span>|</span>
            <button onClick={onOpenPrivacy} className="hover:text-white transition-colors cursor-pointer">
              개인정보처리방침
            </button>
            <span>|</span>
            <span>Copyright © AVRO Inc. All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
