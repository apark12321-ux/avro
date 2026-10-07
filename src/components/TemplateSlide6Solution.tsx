import { CheckCircle2, Sparkles, PenTool, LayoutTemplate } from 'lucide-react';

export default function TemplateSlide6Solution() {
  const solutions = [
    {
      num: '솔루션 01',
      title: '수식 오탈자 0% 3단계 교차 검수',
      desc: '수학교육 및 이공계 전공 검수원을 1:1 전담 배치하여, 괄호 쌍 매칭, 위/아래첨자, 적분·기하 수식 명령어를 100% 전수 크로스 검증합니다.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#0066EE]" />
    },
    {
      num: '솔루션 02',
      title: '캡처본·저화질 이미지 고화질 클린 업스케일',
      desc: '고단가의 신규 드로잉 대신, 고객이 전달해주신 캡처 사진이나 퀄리티 낮은 원본 이미지를 노이즈 없이 선명하고 깔끔하게 고화질 업스케일 변환합니다. (원본 이미지 필수)',
      icon: <PenTool className="w-5 h-5 text-[#0066EE]" />
    },
    {
      num: '솔루션 03',
      title: '학원·출판사 지정 템플릿 1:1 완결 출력',
      desc: '고객사 전용 스타일 시트(글꼴, 장평, 자간, 수능 2단/내신 1단)를 100% 반영하여 수령 즉시 재편집 없이 시험 및 교재 인쇄 현장 즉시 투입이 가능합니다.',
      icon: <LayoutTemplate className="w-5 h-5 text-[#008CFF]" />
    }
  ];

  return (
    <section id="our-solution" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Category Header */}
        <div className="text-left mb-12">
          <span className="text-sm md:text-base font-extrabold text-[#0066EE] tracking-tight block mb-2">
            OUR SOLUTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            에이브로 3대 완결 솔루션.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium mt-2">
            단순 파일 변환을 넘어 출판 인쇄 규격의 완결형 문서를 완성합니다.
          </p>
        </div>

        {/* 3 Solution Rows */}
        <div className="space-y-4 max-w-4xl mx-auto mb-10">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow border border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left"
            >
              <div className="flex items-center gap-3 sm:w-60 shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0066EE] uppercase block">
                    {item.num}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-zinc-900 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium grow pl-0 sm:pl-4 border-l-0 sm:border-l border-zinc-100">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Wide Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 rounded-2xl p-7 border border-blue-200/80 shadow-sm text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066EE] text-white text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key Summary</span>
          </div>
          <h4 className="text-lg sm:text-xl font-black text-zinc-900 mb-2">
            솔루션 핵심 요약: 고객사의 교재 편집 및 수식 재작업 부담을 획기적으로 경감
          </h4>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed">
            미공개 시험지 및 연구 원고에 대한 비밀유지협약(NDA)을 철저히 준수하며, 납품 후 오탈자나 수정 사항 확인 시 담당 에디터가 신속하고 책임감 있게 피드백을 반영해 드립니다.
          </p>
        </div>

      </div>
    </section>
  );
}
