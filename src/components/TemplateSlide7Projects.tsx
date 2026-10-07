import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function TemplateSlide7Projects() {
  return (
    <section id="core-tech" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 text-left">
            <span className="text-sm md:text-base font-extrabold text-[#0066EE] tracking-tight mb-3 inline-block">
              CORE TECHNOLOGY
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.18] text-zinc-900 mb-6">
              캡처 사진 &amp; 저화질 이미지
              <br />
              고화질 클린 업스케일.
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-6">
              그림을 처음부터 새로 그리는 작업은 외주 단가가 매우 높고 시간 소모가 큽니다. 
              에이브로는 합리적인 비용과 빠른 납품을 위해 <strong>신규 드로잉은 진행하지 않으며, 
              고객이 전달해주신 캡처 사진이나 퀄리티 낮은 이미지를 고화질로 업스케일하여 깔끔하게 변환</strong>해 드리는 서비스만 집중 제공합니다.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-[#0066EE] shrink-0 mt-0.5" />
                <span>신규 드로잉 배제 → 합리적인 최적 단가와 신속 납품 실현</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-[#0066EE] shrink-0 mt-0.5" />
                <span>흐릿한 캡처 사진 및 스캔본의 노이즈 제거 및 고화질 업스케일</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-[#0066EE] shrink-0 mt-0.5" />
                <span>인쇄 시 테두리 뭉개짐 방지 및 선명하고 깨끗한 그래픽 출력</span>
              </div>
            </div>

            {/* Clear Policy Banner */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>안내:</strong> 무(無)에서 새 도안을 직접 그려주는 서비스가 아닙니다. 
                반드시 시험지 캡처본, 사진, 스캔본 등 <strong>원본 그림 이미지가 있어야 업스케일 변환이 가능</strong>합니다.
              </span>
            </div>
          </div>

          {/* Right Solid Blue Graphic Container */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-md bg-[#0066EE] rounded-3xl p-8 sm:p-10 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between min-h-[360px]">
              
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase mb-4">
                  IMAGE UPSCALE ONLY
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                  저화질 캡처본
                  <br />
                  고화질 정밀 업스케일
                </h3>
              </div>

              {/* Before vs After demonstration inside Card */}
              <div className="my-6 bg-white/10 rounded-2xl p-4 border border-white/20 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2.5 bg-black/20 rounded-lg border border-white/10">
                    <span className="text-red-300 font-bold block mb-1">전달 원본 (필수)</span>
                    <span className="text-[11px] text-zinc-300">캡처 사진 / 스캔본<br />(흐릿하고 뭉개진 상태)</span>
                  </div>
                  <div className="p-2.5 bg-white/20 rounded-lg border border-white/30">
                    <span className="text-[#38BDF8] font-bold block mb-1">에이브로 변환본</span>
                    <span className="text-[11px] text-white font-bold">고화질 업스케일<br />(외곽선 보정 및 선명화)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-blue-100 pt-3 mt-3 border-t border-white/10">
                  <span>INPUT: 캡처본/사진</span>
                  <span className="text-[#38BDF8] font-bold">OUTPUT: 고화질 인쇄본</span>
                </div>
              </div>

              <div className="text-xs text-blue-100/90 font-medium">
                단가를 올리는 신규 드로잉 없이, 원본 이미지만 깔끔하게 업스케일 변환합니다.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
