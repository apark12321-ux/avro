export default function TemplateSlide10BarChart() {
  const chartData = [
    { label: '수식 정확도 및 검수 통과율', code: 'ACCURACY', percent: '100.0%', width: 'w-full' },
    { label: '도판 이미지 해상도 (300dpi 인쇄 규격)', code: 'RESOLUTION', percent: '100.0%', width: 'w-full' },
    { label: '외주 긴급 납기 준수율', code: 'ON-TIME', percent: '99.8%', width: 'w-[99.8%]' },
    { label: '고객사 재편집 소요 시간 절감율', code: 'EFFICIENCY', percent: '95.4%', width: 'w-[95.4%]' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Category Header */}
        <div className="text-left mb-10 max-w-3xl">
          <span className="text-sm md:text-base font-extrabold text-[#0066EE] tracking-tight block mb-2">
            EFFICIENCY BENCHMARK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
            정밀도와 효율성의 수치화.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">
            시각적으로 데이터를 표현하면 보다 객관적으로 작업 결과물의 품질을 파악할 수 있습니다. 
            에이브로가 제공하는 출판 인쇄 표준 조판은 재편집 공수를 제로로 만듭니다.
          </p>
        </div>

        {/* White Card with Bar Chart */}
        <div className="max-w-4xl bg-white rounded-2xl p-7 sm:p-10 shadow-md border border-zinc-100 text-left">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-100">
            <h3 className="text-lg font-black text-zinc-900">작업 효율 벤치마크</h3>
            <span className="text-xs text-zinc-400 font-medium">정량 지표 분석</span>
          </div>

          <div className="space-y-6">
            {chartData.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                <div className="sm:w-56 shrink-0">
                  <span className="text-[11px] font-mono text-[#0066EE] font-bold block">{item.code}</span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-800">{item.label}</span>
                </div>

                {/* Progress Track & Blue Bar */}
                <div className="grow bg-zinc-100 h-6 sm:h-7 rounded-full overflow-hidden p-1 flex items-center">
                  <div className={`h-full bg-[#0066EE] rounded-full transition-all duration-700 ${item.width}`} />
                </div>

                <div className="w-16 text-right shrink-0">
                  <span className="text-sm sm:text-base font-black text-zinc-900 font-mono">
                    {item.percent}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-100 text-right">
            <span className="text-[11px] text-zinc-400 font-mono">
              ※ 실제 납품 고객사 사후 감리 및 만족도 설문 종합 집계
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
