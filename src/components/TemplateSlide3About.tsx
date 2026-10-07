import { CheckCircle2, FileText, Sparkles } from 'lucide-react';

interface TemplateSlide3AboutProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function TemplateSlide3About({ onOpenModal }: TemplateSlide3AboutProps) {
  return (
    <section id="service-overview" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 text-left">
            <span className="text-sm md:text-base font-extrabold text-[#0066EE] tracking-tight mb-3 inline-block">
              SERVICE OVERVIEW
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.18] text-zinc-900 mb-6">
              간결하고 완벽한
              <br />
              출판 인쇄 규격 HWP.
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-6">
              스캔 PDF, 시험지 사진, 기존 HWP 등 어떤 형식의 원본이든 100% 수정 가능한 정품 HWP/HWPX로 완벽 전산화합니다. 
              고단가의 신규 드로잉 대신, 캡처 사진이나 저화질 원본 이미지를 고화질로 업스케일하여 선명하고 깔끔하게 변환해 드립니다.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-zinc-700 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066EE] shrink-0" />
                <span>PDF → HWP / HWPX 100% 편집 가능한 원본 납품</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066EE] shrink-0" />
                <span>수학·과학 전문 에디터의 수식 정밀 타이핑 (오탈자 0%)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066EE] shrink-0" />
                <span>캡처본·저화질 이미지 고화질 업스케일 (신규 드로잉X / 원본 필수)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066EE] shrink-0" />
                <span>고객사 지정 템플릿(장평/자간/2단) 1:1 맞춤 레이아웃</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenModal('sample')}
              className="px-6 py-2.5 rounded-full bg-[#0066EE] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>샘플 3문항 무료 신청</span>
            </button>
          </div>

          {/* Right Visual Graphic Container */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] rounded-full bg-gradient-to-tr from-[#D1FAE5]/60 via-[#E0F2FE] to-[#EFF6FF] flex items-center justify-center p-8 shadow-inner">
              
              {/* Decorative soft orbiting circles */}
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-white shadow-sm opacity-90" />
              <div className="absolute bottom-12 left-10 w-6 h-6 rounded-full bg-emerald-200/50" />

              {/* Central Card Container */}
              <div className="w-56 sm:w-72 bg-white rounded-2xl shadow-xl p-6 border border-blue-100 flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#0066EE]/10 flex items-center justify-center text-[#0066EE] mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-[#0066EE] uppercase tracking-wider mb-1">
                  Typesetting Suite
                </span>
                <h3 className="text-base sm:text-lg font-black text-zinc-900 mb-1">
                  출판 인쇄 규격 HWP
                </h3>
                <p className="text-[11px] text-zinc-500 font-medium">
                  단락, 수식, 도판, 표가 모두 살아있는 정품 한글 원본
                </p>

                <div className="mt-4 pt-3 border-t border-zinc-100 w-full flex items-center justify-between text-[11px] font-bold text-zinc-600">
                  <span>해상도: 300dpi+</span>
                  <span className="text-emerald-600">검수 PASS</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
