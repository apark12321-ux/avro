import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function WebQualityAndReviews() {
  const chartData = [
    { label: '수식 정확도 및 검수 통과율', code: 'ACCURACY', percent: '100.0%', width: 'w-full' },
    { label: '도판 이미지 해상도 (300dpi 인쇄 규격)', code: 'RESOLUTION', percent: '100.0%', width: 'w-full' },
    { label: '외주 긴급 납기 준수율', code: 'ON-TIME', percent: '99.8%', width: 'w-[99.8%]' },
    { label: '고객사 재편집 소요 시간 절감율', code: 'EFFICIENCY', percent: '95.4%', width: 'w-[95.4%]' },
  ];

  const keywords = [
    { text: 'PDF to HWP 완벽 변환', type: 'blue' },
    { text: '수학 수식 정밀 타이핑', type: 'white' },
    { text: '캡처본 고화질 업스케일', type: 'blue' },
    { text: '무손실 300dpi+', type: 'white' },
    { text: '오탈자 0% 3단계 검수', type: 'blue' },
    { text: '출판 인쇄 맞춤 템플릿', type: 'white' },
    { text: '과학 물리·화학식', type: 'blue' },
    { text: '비밀유지협약 NDA', type: 'white' },
    { text: 'HWPX 정품 원본', type: 'blue' },
  ];

  const reviews = [
    {
      author: '김○환 원장',
      role: '고등부 수능 총괄',
      inst: '대치동 S수학학원',
      quote: '스캔 PDF 시험지 20회분을 완벽한 HWP 원본으로 변환.',
      detail: '수식 편집기 수식 입력 완료. 표와 단 나누기까지 원본과 동일하게 복원하여 인쇄에 바로 사용했습니다.'
    },
    {
      author: '이○준 실장',
      role: '콘텐츠 개발팀장',
      inst: '모의고사 전문 연구소',
      quote: '물리·화학 복잡 기호 및 반응식 누락 없이 100% 전산화.',
      detail: '일반 변환기로 안 되던 특수 과학 기호까지 한글 파일로 정확히 변환 납품받았습니다.'
    },
    {
      author: '박○영 편집장',
      role: '기획편집실',
      inst: '수학 전문 교재 출판사',
      quote: '전달한 원본 도판을 고화질로 업스케일하여 인쇄 감리 통과.',
      detail: '스캔본의 흐릿한 도판을 선명하게 고화질 업스케일하여 옵셋 인쇄 감리를 무수정으로 통과했습니다.'
    },
    {
      author: '최○호 대표강사',
      role: '고3 킬러문항반',
      inst: '분당 입시학원',
      quote: '학원 자체 교재 템플릿 양식에 맞춰 최종 문서 1:1 완결 출력.',
      detail: '지정한 자간, 장평, 2단 레이아웃 그대로 납품받아 강의실에서 번거로운 양식 수정 없이 바로 활용했습니다.'
    },
    {
      author: '정○우 소장',
      role: '논술 집필진',
      inst: '대입 수리논술 연구소',
      quote: '대학교 기출 다중 적분·행렬식 기호 100% 표준 규격 입력.',
      detail: '이공계 전공자 크로스 검수로 수식 왜곡 없이 정밀 디지털화 완료되었습니다.'
    }
  ];

  return (
    <section id="quality-reviews" className="font-sans">
      
      {/* PART 1: QUALITY & DATA (Light Gray Background) */}
      <div className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 border-t border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
          
          <div className="text-left mb-14 max-w-3xl">
            <span className="text-xs sm:text-sm font-black text-[#0066EE] tracking-widest uppercase block mb-2">
              VERIFIED QUALITY &amp; BENCHMARK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-3">
              데이터로 증명하는 조판 품질.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">
              수치로 입증된 납기 준수율과 수식 정확도로 고객사의 재편집 시간을 제로로 단축합니다.
            </p>
          </div>

          {/* Gauge + Bars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
            
            {/* Gauge Card (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-zinc-200 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-bold text-[#0066EE] uppercase tracking-wider mb-1">
                품질 지표 분석
              </span>
              <h3 className="text-base font-bold text-zinc-600 mb-6">
                납기 준수 및 완결 품질
              </h3>

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
                  <span className="text-3xl sm:text-4xl font-black text-zinc-900 font-mono">
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
              <div className="text-[11px] text-zinc-400 mt-1 font-mono">
                ※ 60+ 협력 학원 및 출판사 실제 납품 기준
              </div>
            </div>

            {/* Benchmark Bars (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 shadow-sm border border-zinc-200 text-left">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-100">
                <h4 className="text-lg font-black text-zinc-900">작업 효율 벤치마크</h4>
                <span className="text-xs text-zinc-400 font-medium">정량 지표</span>
              </div>

              <div className="space-y-5">
                {chartData.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="sm:w-52 shrink-0">
                      <span className="text-[10px] font-mono text-[#0066EE] font-bold block">{item.code}</span>
                      <span className="text-xs sm:text-sm font-bold text-zinc-800">{item.label}</span>
                    </div>

                    <div className="grow bg-zinc-100 h-5 sm:h-6 rounded-full overflow-hidden p-0.5 flex items-center">
                      <div className={`h-full bg-[#0066EE] rounded-full transition-all duration-700 ${item.width}`} />
                    </div>

                    <div className="w-16 text-right shrink-0">
                      <span className="text-xs sm:text-sm font-black text-zinc-900 font-mono">
                        {item.percent}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 text-right">
                <span className="text-[11px] text-zinc-400 font-mono">
                  ※ 실제 납품 고객사 사후 감리 및 피드백 종합 집계
                </span>
              </div>
            </div>

          </div>

          {/* Keywords Cloud */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
            {keywords.map((kw, idx) => (
              <span
                key={idx}
                className={`px-4 sm:px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-xs select-none ${
                  kw.type === 'blue'
                    ? 'bg-[#0066EE] text-white'
                    : 'bg-white text-zinc-800 border border-zinc-200'
                }`}
              >
                {kw.text}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* PART 2: CLIENT REVIEWS (Vivid Cobalt Blue Screen matching MangoBoard Slide 9) */}
      <div className="py-20 md:py-28 bg-[#0066EE] text-white overflow-hidden text-center">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
          
          <div className="mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-200 uppercase block mb-2">
              CLIENT REVIEWS
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              “ 실제 고객 현장 검증 평가 ”
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm md:text-base font-medium mt-2">
              학원장 · 출판 기획자 · 연구진이 직접 경험한 완결형 조판 품질
            </p>
          </div>

          {/* 3 Cards Top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-5 text-left">
            {reviews.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-zinc-900 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <Quote className="w-4 h-4 fill-amber-500" />
                    </div>
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <h4 className="text-sm font-black text-zinc-900 mb-2 leading-snug">
                    "{item.quote}"
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-zinc-900">{item.author}</span>{' '}
                    <span className="text-zinc-400 text-[11px]">({item.role})</span>
                  </div>
                  <span className="text-[#0066EE] font-bold text-[11px]">{item.inst}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 2 Cards Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
            {reviews.slice(3, 5).map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-zinc-900 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <Quote className="w-4 h-4 fill-amber-500" />
                    </div>
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <h4 className="text-sm font-black text-zinc-900 mb-2 leading-snug">
                    "{item.quote}"
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
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
