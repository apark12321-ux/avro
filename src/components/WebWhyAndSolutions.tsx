import { 
  Building2, 
  Cpu, 
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
      headline: "행정관의 본업은 '서식 재작업'이 아닌 '정책과 공공 서비스'",
      desc: '스캔된 조례·지침서의 깨진 표를 행정안전부 공문서 규격에 맞게 복원해 전자결재 등록을 완결합니다.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#0066EE]" />,
      role: '연구소 · 엔지니어링 실무진',
      headline: "연구진의 핵심은 '그리스 수식 씨름'이 아닌 '기술 설계와 분석'",
      desc: '시방서·구조계산서의 첨자·그리스 문자와 CAD 도판을 300dpi 인쇄 규격 HWP로 정밀 전산화합니다.'
    },
    {
      icon: <Scale className="w-5 h-5 text-[#0066EE]" />,
      role: '법률 · 특허 · 회계 법인',
      headline: "전문가의 자산은 '오탈자 교정'이 아닌 '정밀 자문과 변론'",
      desc: '소송 판결문, 특허 도면, 재무제표 표 서식을 2단계 교차 검수로 오차 없이 복원하며 NDA를 준수합니다.'
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#0066EE]" />,
      role: '학원장 · 교재 출판사',
      headline: "교육자의 가치는 '수식 타이핑'이 아닌 '강의와 문항 개발'",
      desc: '흐릿한 모의고사·기출 스캔본을 수학 한글 수식과 기하 벡터 작도가 완료된 학원 교재로 완성합니다.'
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
            전문 인력의 귀중한 시간을 <span className="text-[#0066EE]">본업에 집중</span>시켜 드립니다
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm font-medium">
            반복적인 표 서식 교정과 수식 타이핑은 맡기시고, 각 분야의 핵심 가치 창출에만 몰입하세요.
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
