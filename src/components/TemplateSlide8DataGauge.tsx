import { CheckCircle2 } from 'lucide-react';

export default function TemplateSlide8DataGauge() {
  return (
    <section id="quality-data" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Category Header */}
        <div className="text-left mb-12">
          <span className="text-sm md:text-base font-extrabold text-[#0066EE] tracking-tight block mb-2">
            VERIFIED METRICS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            데이터로 증명하는 조판 품질.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium mt-2">
            수치로 검증된 납기 준수율과 수식 정확도
          </p>
        </div>

        {/* Gauge Chart Card & Text Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left White Gauge Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-zinc-100 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold text-[#0066EE] uppercase tracking-wider mb-1">
              품질 지표 분석
            </span>
            <h3 className="text-base font-bold text-zinc-600 mb-6">
              납기 준수 및 완결 품질
            </h3>

            {/* Circular Gauge Ring (SVG) */}
            <div className="relative w-44 h-44 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="text-zinc-100"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="text-[#0066EE]"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset="1.2"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-zinc-900">
                  99.8%
                </span>
                <span className="text-[11px] font-bold text-[#0066EE]">
                  납기 준수율
                </span>
              </div>
            </div>

            {/* Bottom mini stats */}
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-700">
              <CheckCircle2 className="w-4 h-4 text-[#0066EE]" />
              <span>누적 조판 문항: <strong className="text-[#0066EE]">48,000+</strong></span>
            </div>
            <div className="text-[11px] text-zinc-400 mt-1 font-mono">
              ※ 60+ 협력 학원 및 출판사 실제 납품 기준
            </div>
          </div>

          {/* Right Text Description Block */}
          <div className="lg:col-span-7 text-left pl-0 lg:pl-4 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 leading-snug">
              철저한 검증으로 완성되는 표준 품질
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-medium">
              첫 번째, 3단계 크로스 검수 시스템을 통해 누적 조판 48,000문항 동안 수식 오탈자 0%를 기록하고 있습니다. 
              수학교육 및 이공계 전공 검수원이 괄호 쌍과 위/아래첨자를 전수 확인합니다.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-medium">
              두 번째, 야간 및 주말 집중 전담팀 운영으로 시험 직전 300문항 이상 대량 작업에 대해서도 99.8%의 엄격한 납기 준수율을 입증했습니다.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-medium">
              세 번째, 모든 도판은 전달된 원본 그림을 기반으로 300dpi급 무손실 벡터 그래픽으로 고화질 업스케일되어 옵셋 인쇄 감리를 무수정으로 통과합니다.
            </p>
          </div>

        </div>

        {/* Overview Box */}
        <div className="bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-zinc-200 text-left">
          <span className="text-xs font-black text-[#0066EE] uppercase tracking-wider block mb-1">
            Core Value
          </span>
          <h4 className="text-base sm:text-lg font-black text-zinc-900 mb-2">
            어떻게 하면 교재 제작 시간을 90% 이상 절감할 수 있을까?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
            스캔 PDF 및 이미지 시험지를 에이브로의 전문 조판 서비스를 통해 한 번에 정품 HWP로 전산화하세요. 
            수식 타이핑과 흐릿한 이미지 보정 공수를 없애고 오직 핵심인 강의와 교재 기획에만 집중할 수 있습니다.
          </p>
        </div>

      </div>
    </section>
  );
}
