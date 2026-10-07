import { UserCheck, ShieldAlert } from 'lucide-react';

export default function TemplateSlide5PainPoints() {
  const problems = [
    {
      role: '강사 · 학원장',
      quoteHeadline: "강사의 본업은 '수식 타이핑'이 아닌 '강의와 연구'",
      painDesc: '시험지 전산화와 흐릿한 캡처 이미지 보정에 밤샘 작업을 반복하여 정작 중요한 문항 연구와 강의 준비 시간이 부족해지는 현실.',
      tags: ['수식 깨짐', '흐릿한 캡처본', '파일 파편화', '타이핑 피로', '버전 혼선']
    },
    {
      role: '교재 편집팀 · 연구소',
      quoteHeadline: "연구진의 핵심은 '단순 포맷 교정'이 아닌 '킬러 문항 개발'",
      painDesc: '외주사마다 다른 장평·자간 규격과 저화질 캡처로 인해 납품 후 전면 재작업과 인쇄소 사고가 발생하는 문제.',
      tags: ['서식 불일치', '인쇄 뭉개짐', '오탈자 리스크', '대량 마감 한계', '재편집 공수']
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Category Header */}
        <div className="text-left mb-12">
          <span className="text-sm md:text-base font-extrabold text-[#0066EE] tracking-tight block mb-2">
            PAIN POINTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            현장의 상세 Pain Point 분석.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium mt-2">
            실제 현장에서 발생하는 치명적인 조판 리스크를 정밀 진단합니다.
          </p>
        </div>

        {/* 2 Comparative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-9 shadow-md border border-zinc-100 flex flex-col justify-between"
            >
              <div>
                {/* Persona Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#0066EE]/10 flex items-center justify-center text-[#0066EE]">
                    {idx === 0 ? <UserCheck className="w-6 h-6" /> : <ShieldAlert className="w-6 h-6" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0066EE] uppercase tracking-wider block">
                      Target Analysis
                    </span>
                    <h3 className="text-lg font-black text-zinc-900">
                      {item.role}
                    </h3>
                  </div>
                </div>

                {/* Highlighted Headline */}
                <h4 className="text-xl sm:text-2xl font-black text-zinc-900 leading-snug mb-3">
                  {item.quoteHeadline}
                </h4>

                {/* Description */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#0066EE] block mb-1">
                    핵심 애로사항
                  </span>
                  <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                    {item.painDesc}
                  </p>
                </div>
              </div>

              {/* Tag Bubble Pills */}
              <div className="pt-6 border-t border-zinc-100">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 text-[#0066EE] text-xs font-semibold hover:bg-[#0066EE] hover:text-white transition-colors select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
