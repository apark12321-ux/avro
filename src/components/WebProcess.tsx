import { ChevronRight, ShieldCheck } from 'lucide-react';

export default function WebProcess() {
  const steps = [
    { code: 'STEP 01', title: '원고 접수', desc: 'PDF·스캔본·캡처 사진' },
    { code: 'STEP 02', title: '수식 전산화', desc: '한글 표준 수식 코드 변환' },
    { code: 'STEP 03', title: '이미지 업스케일', desc: '300dpi 인쇄용 고화질 복원' },
    { code: 'STEP 04', title: '템플릿 조판', desc: '고객 지정 양식·2단 반영' },
    { code: 'STEP 05', title: '최종 납품', desc: '정품 HWP 완결본 납품' },
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
            원고 접수부터 정품 HWP 납품까지 전담 에디터가 책임 진행합니다.
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

        {/* Support & Quality Assurance */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-5 shadow-sm border border-zinc-200 text-center">
          <p className="text-xs sm:text-sm text-zinc-700 font-semibold">
            “ 철저한 납기 준수와 신속한 무상 AS로 안전하게 완결합니다. ”
          </p>
        </div>

      </div>
    </section>
  );
}
