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
      author: '정○우 주무관',
      role: '기획조정실 자치법규팀',
      inst: '수도권 지방자치단체',
      quote: '스캔된 과거 30년치 조례·규칙집을 행정 표준 HWP로 완결',
      detail: '다단 표와 들여쓰기가 깨져 수작업으로 막막했던 규정집 12권 분량을 공문서 규격에 맞춰 온-나라 시스템에 즉시 등록했습니다.'
    },
    {
      author: '이○준 수석연구원',
      role: '토목구조설계팀',
      inst: '종합 엔지니어링 연구소',
      quote: '복잡한 공학 수식과 설계 도판의 인쇄 규격 무결성 확보',
      detail: '시방서와 구조계산서의 그리스 문자, 위/아래 첨자가 한글 표준 수식 코드로 정확히 입력되어 기술 심의에 지체 없이 통과했습니다.'
    },
    {
      author: '박○영 변리사',
      role: '기계·특허 출원부',
      inst: '지식재산권 전문 법률사무소',
      quote: '특허명세서 부호 지시선과 300dpi 도면 복원으로 출원 성공',
      detail: '스캔 도면의 선 굵기를 특허청 출원 기준에 맞춰 벡터 복원해 주셨고, 철저한 NDA 보안 준수 덕분에 안심하고 맡겼습니다.'
    },
    {
      author: '김○환 원장',
      role: '고등부 수능 총괄',
      inst: '대치동 S수학학원',
      quote: '스캔 시험지 20회분을 기하 벡터 도판과 함께 HWP 완결본으로 납품',
      detail: '기하 도형의 계단 현상 없이 300dpi로 작도되었고, 수식 편집기 코드로 납품되어 학원 전용 양식으로 즉시 수업에 배부했습니다.'
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
