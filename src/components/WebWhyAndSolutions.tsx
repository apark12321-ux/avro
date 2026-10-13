import { 
  Building2, 
  Briefcase, 
  Scale, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

export default function WebWhyAndSolutions() {
  const personas = [
    {
      icon: <Building2 className="w-5 h-5 text-[#0066EE]" />,
      role: '공공기관 · 지자체 담당관',
      headline: "서식 재작업 대신 본연의 행정 업무에 집중",
      desc: '조례·지침서의 깨진 표를 행정 표준 규격에 맞게 복원해 전자결재에 즉시 등록합니다.'
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#0066EE]" />,
      role: '기업 경영지원 · 인사총무팀',
      headline: "매뉴얼 재작업 대신 핵심 사내 업무 운영",
      desc: '업무 매뉴얼, 순서도, 결재 양식을 한글 표준 도형과 표로 말끔하게 복원합니다.'
    },
    {
      icon: <Scale className="w-5 h-5 text-[#0066EE]" />,
      role: '법무 · 계약 · 사규 관리자',
      headline: "오탈자 교정 대신 실질적 리스크 검토",
      desc: '계약서와 사규집의 조항 체계와 표를 2단계 교차 검수로 오차 없이 복원합니다.'
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#0066EE]" />,
      role: '학원장 · 교재 출판사',
      headline: "수식 타이핑 대신 강의와 문항 개발",
      desc: '시험지 스캔본을 한글 수식과 기하 벡터 도판이 완비된 학원 교재로 완성합니다.'
    }
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Section Header */}
        <div className="text-left mb-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0066EE] uppercase tracking-wider mb-2 font-bold">
            <span>BUSINESS VALUE &amp; IMPACT</span>
            <span aria-hidden="true">·</span>
            <span>도입 효과</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-900 mb-2">
            반복 편집 작업 대신, <span className="text-[#0066EE]">본업에 집중하세요</span>
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm font-medium">
            깨진 표 복원과 수식 타이핑은 맡기시고, 핵심 가치 창출에만 몰입하세요.
          </p>
        </div>

        {/* 4 Persona Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {personas.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <span className="text-xs font-bold text-[#0066EE] block mb-1">
                  {card.role}
                </span>
                <h3 className="text-sm font-bold text-zinc-900 mb-2 leading-snug">
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
            <span>표준 비밀유지협약(NDA) 체결 · 안전한 폐쇄형 데이터 관리</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>납품 후 7일 이내 서식 미세 수정 무상 케어</span>
          </div>
        </div>

      </div>
    </section>
  );
}
