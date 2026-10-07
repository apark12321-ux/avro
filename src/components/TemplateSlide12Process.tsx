import { ChevronRight } from 'lucide-react';

export default function TemplateSlide12Process() {
  const steps = [
    { code: 'STEP 01', title: '원고 접수', desc: 'PDF·스캔본·초안 전달' },
    { code: 'STEP 02', title: '수식 전산화', desc: '수학·과학 수식 정밀 타이핑' },
    { code: 'STEP 03', title: '이미지 업스케일', desc: '캡처본·저화질 이미지 고화질 변환' },
    { code: 'STEP 04', title: '템플릿 조판', desc: '고객 지정 양식·단 구분 반영' },
    { code: 'STEP 05', title: '최종 납품', desc: '정품 HWP & 고해상도 PDF 납품' },
  ];

  return (
    <section id="work-process" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Category Header */}
        <div className="text-left mb-12">
          <span className="text-sm md:text-base font-extrabold text-[#0066EE] tracking-tight block mb-2">
            WORK PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            5단계 완결 프로세스.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium mt-2">
            원고 접수부터 최종 인쇄본 납품까지의 체계적인 작업 흐름
          </p>
        </div>

        {/* 5 Connecting Process Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-6xl mx-auto mb-14">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 shadow-sm border border-zinc-200 hover:border-[#0066EE] transition-all flex flex-col justify-between text-left"
            >
              <div>
                {/* Blue Header Tag */}
                <div className="px-3 py-1.5 rounded-lg bg-[#0066EE] text-white text-xs font-black text-center mb-3">
                  {st.code}
                </div>
                <h3 className="text-base font-black text-zinc-900 mb-1">
                  {st.title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-[#0066EE] font-bold">
                <span>PHASE 0{idx + 1}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Key Point Box */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-7 sm:p-9 shadow-md border border-zinc-200 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black text-[#0066EE] uppercase tracking-wider">
              Key Point
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl font-black text-zinc-900 mb-3">
            “ 추가 재편집 부담 없이, 수령 즉시 시험 및 인쇄 현장 즉시 투입 ”
          </h4>

          <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-4xl">
            에이브로 조판의 핵심 포인트는 문항 오류를 0%로 만들고, 인쇄 시 칼선 선명도를 100% 보장하는 것입니다. 
            학원과 출판사의 마감 일정을 최우선으로 준수하며, 납품 후 검수 과정에서 발생한 수정 사항은 담당 에디터가 신속하고 꼼꼼하게 반영해 드립니다.
          </p>
        </div>

      </div>
    </section>
  );
}
