import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function WebQualityAndReviews() {
  const chartData = [
    { label: '수식 검수 합격률', code: 'ACCURACY', percent: '99.6%', width: 'w-[99.6%]' },
    { label: '도판 인쇄 규격 적합도', code: 'RESOLUTION', percent: '99.2%', width: 'w-[99.2%]' },
    { label: '외주 납기 준수율', code: 'ON-TIME', percent: '99.8%', width: 'w-[99.8%]' },
    { label: '재편집 소요 시간 절감', code: 'EFFICIENCY', percent: '95.4%', width: 'w-[95.4%]' },
  ];

  const reviews = [
    {
      author: '김○환 원장',
      role: '고등부 수능 총괄',
      inst: '대치동 S수학학원',
      quote: '스캔 시험지 20회분을 깔끔한 HWP 원본으로 변환',
      detail: '수식 편집기로 꼼꼼하게 입력 완료. 표와 단 나누기까지 원본과 동일해 인쇄에 즉시 투입했습니다.'
    },
    {
      author: '이○준 실장',
      role: '콘텐츠 개발팀장',
      inst: '모의고사 전문 연구소',
      quote: '물리·화학 복잡 기호와 반응식까지 누락 없이 전산화',
      detail: '일반 자동 변환기로 깨지던 특수 과학 기호까지 표준 한글 코드로 깔끔하게 납품받았습니다.'
    },
    {
      author: '박○영 편집장',
      role: '기획편집실',
      inst: '수학 전문 교재 출판사',
      quote: '도판 고화질 업스케일로 인쇄 감리 무수정 통과',
      detail: '스캔본의 흐릿한 도판을 300dpi로 복원해 옵셋 인쇄 감리 시 문제없이 인쇄를 마쳤습니다.'
    }
  ];

  return (
    <section id="quality-reviews" className="font-sans">
      
      {/* PART 1: QUALITY & DATA */}
      <div className="py-16 md:py-24 bg-[#F4F6F9] text-zinc-900 border-t border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
          
          <div className="text-left mb-10 max-w-3xl">
            <span className="text-xs sm:text-sm font-black text-[#0066EE] tracking-widest uppercase block mb-1">
              BENCHMARK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-900 mb-2">
              데이터로 증명하는 조판 품질
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm font-medium">
              수치로 입증된 납기 준수율과 수식 정확도로 재작업 부담을 덜어드립니다.
            </p>
          </div>

          {/* Gauge + Bars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Gauge Card (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-7 shadow-sm border border-zinc-200 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-bold text-[#0066EE] uppercase tracking-wider mb-4">
                납기 준수 및 완결 품질
              </span>

              <div className="relative w-40 h-40 flex items-center justify-center mb-5">
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
                  <span className="text-3xl font-black text-zinc-900 font-mono">
                    99.8%
                  </span>
                  <span className="text-[11px] font-bold text-[#0066EE]">
                    납기 준수율
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-[#0066EE]" />
                <span>누적 조판 문항: <strong className="text-[#0066EE]">48,000+</strong></span>
              </div>
            </div>

            {/* Benchmark Bars (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-zinc-200 text-left">
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-zinc-100">
                <h4 className="text-base font-bold text-zinc-900">작업 효율 벤치마크</h4>
                <span className="text-xs text-zinc-400 font-medium">정량 지표</span>
              </div>

              <div className="space-y-4">
                {chartData.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="sm:w-52 shrink-0">
                      <span className="text-[10px] font-mono text-[#0066EE] font-bold block">{item.code}</span>
                      <span className="text-xs font-bold text-zinc-800">{item.label}</span>
                    </div>

                    <div className="grow bg-zinc-100 h-4 rounded-full overflow-hidden p-0.5 flex items-center">
                      <div className={`h-full bg-[#0066EE] rounded-full transition-all duration-700 ${item.width}`} />
                    </div>

                    <div className="w-14 text-right shrink-0">
                      <span className="text-xs font-black text-zinc-900 font-mono">
                        {item.percent}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* PART 2: CLIENT REVIEWS */}
      <div className="py-16 md:py-24 bg-[#0066EE] text-white overflow-hidden text-center">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
          
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-blue-200 uppercase block mb-1">
              CLIENT REVIEWS
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              현장에서 검증된 조판 만족도
            </h3>
          </div>

          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto text-left">
            {reviews.map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-zinc-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <Quote className="w-3.5 h-3.5 fill-amber-500" />
                    </div>
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 mb-2 leading-snug">
                    "{item.quote}"
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-zinc-900">{item.author}</span>{' '}
                    <span className="text-zinc-400 text-[11px]">({item.role})</span>
                  </div>
                  <span className="text-[#0066EE] font-bold text-[11px]">{item.inst}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
