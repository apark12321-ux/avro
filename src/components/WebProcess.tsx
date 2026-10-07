import { ChevronRight, ShieldCheck } from 'lucide-react';

export default function WebProcess() {
  const steps = [
    { code: 'STEP 01', title: '원고 접수', desc: 'PDF·스캔본·캡처 사진 전달' },
    { code: 'STEP 02', title: '수식 전산화', desc: '수학·과학 수식 100% 정밀 타이핑' },
    { code: 'STEP 03', title: '이미지 업스케일', desc: '캡처본·저화질 이미지 고화질 변환' },
    { code: 'STEP 04', title: '템플릿 조판', desc: '고객 지정 양식·단 구분 반영' },
    { code: 'STEP 05', title: '최종 납품', desc: '정품 HWP & 인쇄용 PDF 납품' },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Category Header */}
        <div className="text-left mb-14 max-w-3xl">
          <span className="text-xs sm:text-sm font-black text-[#0066EE] tracking-widest uppercase block mb-2">
            WORK PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-3">
            5단계 완결 프로세스
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">
            원고 접수부터 인쇄본 납품까지 빈틈없는 전담 에디터 케어로 진행됩니다.
          </p>
        </div>

        {/* 5 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 shadow-sm border border-zinc-200 hover:border-[#0066EE] transition-all flex flex-col justify-between text-left"
            >
              <div>
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

        {/* Realistic Support & Quality Box (User Request #7: 현실적인 멘트) */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-7 sm:p-9 shadow-sm border border-zinc-200 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black text-[#0066EE] uppercase tracking-wider">
              Quality Assurance
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl font-black text-zinc-900 mb-2">
            “ 번거로운 양식 수정 없이, 수령 즉시 수업 및 인쇄 현장 투입 ”
          </h4>

          <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
            납기 일정을 최우선으로 엄수하며, 납품 후 검수 과정에서 확인된 수정 사항은 
            담당 에디터가 신속하고 꼼꼼하게 반영해 드립니다. 
            학원 및 출판사의 업무 일정에 지장이 없도록 실질적이고 책임감 있는 검수 케어를 약속드립니다.
          </p>
        </div>

      </div>
    </section>
  );
}
