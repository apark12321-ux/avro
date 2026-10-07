import { Clock, Printer, SlidersHorizontal } from 'lucide-react';

export default function TemplateSlide4UserProblem() {
  const personas = [
    {
      icon: <Clock className="w-8 h-8 text-[#0066EE]" />,
      title: '학원장 · 수학 강사',
      subtitle: '고등부 수능·내신 총괄',
      pill: '수식 타이핑 과다',
      items: [
        '시험지·교재 전산화로 강의 연구 시간 부족',
        '미적분/기하 수식 새벽 반복 입력 피로',
        '버전 관리 실패로 원본 HWP 유실 위험'
      ]
    },
    {
      icon: <Printer className="w-8 h-8 text-[#0066EE]" />,
      title: '교재 연구소 · 기획자',
      subtitle: '모의고사 콘텐츠 개발팀',
      pill: '도판 인쇄 번짐',
      items: [
        '저화질 캡처 사진으로 옵셋 인쇄 시 번짐',
        '신규 드로잉 외주는 단가가 너무 비싸 부담',
        '오탈자 교차 검수 미흡으로 인쇄 사고 우려'
      ]
    },
    {
      icon: <SlidersHorizontal className="w-8 h-8 text-[#0066EE]" />,
      title: '출판사 · 편집팀',
      subtitle: '교재 편집 및 양식 감리',
      pill: '서식 재작업 지연',
      items: [
        '외주사별 장평·자간·글꼴 규격 불일치',
        '납품 후 학원 양식으로 전면 재편집 발생',
        '시험 직전 300문항 이상 대량 대응 한계'
      ]
    }
  ];

  return (
    <section id="why-avro" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Category Header */}
        <div className="text-left mb-12">
          <span className="text-sm md:text-base font-extrabold text-[#0066EE] tracking-tight block mb-2">
            WHY AVRO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            현장의 3대 조판 애로사항.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium mt-2">
            단순 수식 입력과 서식 교정으로 낭비되는 전문 인력의 핵심 리소스
          </p>
        </div>

        {/* 3 White Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {personas.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all border border-zinc-100 flex flex-col items-center text-center"
            >
              {/* Persona Avatar / Icon Container */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#E0F2FE] to-[#EFF6FF] border-2 border-blue-100 flex items-center justify-center mb-5 shadow-sm">
                {card.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-black text-zinc-900 mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-zinc-500 font-medium mb-5">
                {card.subtitle}
              </p>

              {/* Blue Pill Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#0066EE] text-white text-xs font-bold tracking-tight shadow-sm">
                  {card.pill}
                </span>
              </div>

              {/* Problem Bullets */}
              <ul className="space-y-2 text-left w-full text-xs sm:text-sm text-zinc-600 border-t border-zinc-100 pt-5 font-medium">
                {card.items.map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
