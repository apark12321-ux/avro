export default function WebEnterpriseTrust() {
  const steps = [
    {
      step: '01',
      title: '무료 업무 진단',
      desc: '현재 불편한 업무를 듣고 자동화 범위를 정리합니다.',
    },
    {
      step: '02',
      title: '화면 시안 확인',
      desc: '실제 사용할 화면과 견적·일정을 투명하게 확정합니다.',
    },
    {
      step: '03',
      title: '맞춤 개발·연동',
      desc: '카톡·POS·캘린더 등 기존 도구와 매끄럽게 연결합니다.',
    },
    {
      step: '04',
      title: '현장 배포·교육',
      desc: '직원 누구나 바로 쓰도록 세팅하고 운영을 지원합니다.',
    },
  ];

  const guarantees = [
    {
      label: '보안 준수',
      title: '비밀유지(NDA) 체결',
      desc: '고객 DB와 매출·상담 데이터를 안전하게 보호합니다.',
    },
    {
      label: '소유권 보장',
      title: '자체 솔루션 100% 귀속',
      desc: '완료된 프로그램과 데이터는 고객사 자산으로 귀속됩니다.',
    },
    {
      label: '행정 지원',
      title: '세금계산서 · 지원사업 대응',
      desc: '전자세금계산서 및 소상공인 스마트상점·바우처 서류를 지원합니다.',
    },
  ];

  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-[#F7F8FA] border-t border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="text-xs font-medium text-[#2563EB] mb-2.5">진행 절차</div>
          <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold tracking-tight text-slate-900 leading-tight text-balance">
            IT 지식이 없어도, 4단계면 충분합니다
          </h2>
        </div>

        {/* 4-Step Clean Horizontal Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-14 border-b border-slate-200">
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono tabular-nums text-xs font-bold text-[#2563EB]">
                  {item.step}
                </span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 3-Column Trust Row */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((g, idx) => (
            <div key={idx}>
              <div className="text-xs font-medium text-slate-500 mb-1.5">{g.label}</div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">{g.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
