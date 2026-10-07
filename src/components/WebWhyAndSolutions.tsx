import { 
  Clock, 
  Printer, 
  SlidersHorizontal, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  PenTool, 
  LayoutTemplate 
} from 'lucide-react';

export default function WebWhyAndSolutions() {
  const personas = [
    {
      icon: <Clock className="w-7 h-7 text-[#0066EE]" />,
      role: '강사 · 학원장',
      headline: "강사의 본업은 '수식 타이핑'이 아닌 '강의와 연구'",
      pill: '수식 타이핑 피로',
      desc: '미적분, 기하 수식과 시험지 전산화에 밤샘 작업을 반복하여 정작 중요한 강의 연구 시간이 잠식되는 현실.',
      tags: ['수식 깨짐', '흐릿한 캡처', '버전 혼선', '시간 부족']
    },
    {
      icon: <Printer className="w-7 h-7 text-[#0066EE]" />,
      role: '교재 연구소 · 기획팀',
      headline: "연구진의 핵심은 '단순 포맷 교정'이 아닌 '킬러 문항 개발'",
      pill: '인쇄 번짐 리스크',
      desc: '저화질 캡처본으로 옵셋 인쇄 시 외곽선이 뭉개지며, 신규 작도 외주는 단가가 너무 높아 고민인 상황.',
      tags: ['도판 저화질', '인쇄 뭉개짐', '고단가 부담', '검수 오류']
    },
    {
      icon: <SlidersHorizontal className="w-7 h-7 text-[#0066EE]" />,
      role: '출판사 · 편집팀',
      headline: "편집팀의 목표는 '무한 서식 재작업' 없는 '즉시 납품'",
      pill: '서식 재편집 공수',
      desc: '외주사마다 글꼴, 장평, 자간이 불일치하여 납품받은 후에도 자체 양식으로 대대적인 재편집이 발생하는 문제.',
      tags: ['서식 불일치', '2단 깨짐', '대량 마감', '재편집 지연']
    }
  ];

  const solutions = [
    {
      num: '솔루션 01',
      title: '수식 오탈자 0% 3단계 전수 교차 검수',
      desc: '수학교육 및 이공계 전담 검수원을 배치하여 괄호 쌍 매칭, 위/아래첨자, 적분·기하 명령어를 100% 크로스 검증합니다.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#0066EE]" />
    },
    {
      num: '솔루션 02',
      title: '캡처본·저화질 이미지 고화질 클린 업스케일',
      desc: '신규 드로잉 대신 고객이 전달해주신 캡처 사진/스캔본을 300dpi급 선명한 이미지로 업스케일하여 인쇄 감리를 무수정 통과합니다.',
      icon: <PenTool className="w-5 h-5 text-[#0066EE]" />
    },
    {
      num: '솔루션 03',
      title: '학원·출판사 지정 전용 템플릿 1:1 완결 출력',
      desc: '고객사 전용 스타일 시트(글꼴, 장평, 자간, 수능 2단/내신 1단)를 100% 반영하여 수령 즉시 불필요한 서식 재작업 없이 바로 인쇄 및 수업에 투입할 수 있습니다.',
      icon: <LayoutTemplate className="w-5 h-5 text-[#0066EE]" />
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Section Header */}
        <div className="text-left mb-14 max-w-3xl">
          <span className="text-xs sm:text-sm font-black text-[#0066EE] tracking-widest uppercase block mb-2">
            WHY PROFESSIONAL TYPESETTING &amp; SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-3">
            현장의 조판 애로사항, 전문 조판 솔루션으로 해결합니다.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">
            단순 수식 입력과 서식 재편집으로 낭비되던 전문 인력의 핵심 리소스를 원천 보호합니다.
          </p>
        </div>

        {/* Part 1: 3 Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {personas.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all border border-zinc-200 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0066EE] text-white text-[11px] font-bold">
                    {card.pill}
                  </span>
                </div>

                <span className="text-xs font-bold text-zinc-400 block mb-1">
                  {card.role}
                </span>

                <h3 className="text-base sm:text-lg font-black text-zinc-900 mb-3 leading-snug">
                  "{card.headline}"
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
                {card.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 text-[11px] font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: 3-Tier Core Solutions */}
        <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm border border-zinc-200 text-left">
          <div className="mb-8">
            <span className="text-xs font-black text-[#0066EE] tracking-widest uppercase block mb-1">
              OUR 3-TIER SOLUTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900">
              교재 제작 부담을 덜어드리는 3대 작업 원칙
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-black text-[#0066EE] font-mono">
                      {sol.num}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-zinc-900 mb-2 leading-snug">
                    {sol.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
                    {sol.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-200 flex items-center gap-1.5 text-xs text-[#0066EE] font-bold">
                  {sol.icon}
                  <span>완결 검증</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 font-bold text-zinc-900">
              <ShieldCheck className="w-5 h-5 text-[#0066EE] shrink-0" />
              <span>미공개 시험지 및 출판 교재 원고에 대한 비밀유지협약(NDA) 철저 준수</span>
            </div>
            <span className="text-zinc-500 font-medium">
              납품 후 오탈자 확인 시 전담 에디터가 꼼꼼하고 신속하게 반영
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
