import { 
  Clock, 
  Printer, 
  SlidersHorizontal, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

export default function WebWhyAndSolutions() {
  const personas = [
    {
      icon: <Clock className="w-6 h-6 text-[#0066EE]" />,
      role: '강사 · 학원장',
      headline: "강사의 시간은 '수식 입력' 대신 '강의와 연구'에",
      desc: '복잡한 수식과 재편집 부담을 덜고, 강의 준비와 학생 관리에만 집중하세요.'
    },
    {
      icon: <Printer className="w-6 h-6 text-[#0066EE]" />,
      role: '교재 연구소 · 기획팀',
      headline: "연구진의 핵심은 '포맷 교정'이 아닌 '킬러 문항 개발'",
      desc: '흐릿한 캡처본을 300dpi 고화질로 복원해 인쇄 규격에 부합하는 선명도를 확보합니다.'
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-[#0066EE]" />,
      role: '출판사 · 편집팀',
      headline: "편집팀의 목표는 '무한 서식 재작업' 없는 '즉시 납품'",
      desc: '지정 폰트와 2단 레이아웃 규격을 반영해 추가 편집 부담을 최소화합니다.'
    }
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Section Header */}
        <div className="text-left mb-10 max-w-3xl">
          <span className="text-xs sm:text-sm font-black text-[#0066EE] tracking-widest uppercase block mb-1">
            WHY AVRO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-900 mb-2">
            선생님과 연구진의 소중한 시간을 지켜드립니다
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm font-medium">
            반복 조판과 서식 정리는 맡기시고, 강의와 문항 개발에만 집중하세요.
          </p>
        </div>

        {/* 3 Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {personas.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 flex flex-col justify-between text-left"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <span className="text-xs font-bold text-[#0066EE] block mb-1">
                  {card.role}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 mb-2 leading-snug">
                  "{card.headline}"
                </h3>
                <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality & Security Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-bold text-zinc-800">
            <ShieldCheck className="w-4 h-4 text-[#0066EE] shrink-0" />
            <span>원고 비밀유지협약(NDA) 철저 준수 · 안전한 데이터 보안 관리</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>납품 후 수정 사항 신속 무상 케어</span>
          </div>
        </div>

      </div>
    </section>
  );
}
