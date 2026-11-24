import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function WebFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '개발이나 AI를 전혀 몰라도 의뢰할 수 있나요?',
      a: '네. 현재 겪고 계신 불편함만 말씀해 주시면 필요한 기능과 화면 시안을 먼저 설계해 드립니다.',
    },
    {
      q: '소규모 매장이나 1인 사무실도 비용 부담 없이 도입 가능한가요?',
      a: '꼭 필요한 핵심 기능만 가볍게 구성해 불필요한 비용을 줄이며, 무료 진단 시 투명한 견적을 안내합니다.',
    },
    {
      q: '개발 기간은 보통 얼마나 걸리나요?',
      a: '단일 자동화·응대 툴은 2주 내외, 전용 관리 웹·앱 구축은 평균 3~4주 안에 현장 배포됩니다.',
    },
    {
      q: '지금 쓰는 카카오톡, 네이버 예약, 엑셀과 연동되나요?',
      a: '네. 기존에 사용 중인 메신저, 예약 채널, POS, 엑셀 양식에 맞춰 자연스럽게 연결해 드립니다.',
    },
    {
      q: '구축 후 수정이나 유지보수도 지원하나요?',
      a: '납품 후 안정화 기간을 기본 제공하며, 업종 변화에 맞춘 기능 추가와 운영 지원도 상시 가능합니다.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Sticky Title */}
          <div className="lg:col-span-4">
            <div className="text-xs font-medium text-[#2563EB] mb-2.5">FAQ</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight text-balance mb-3">
              자주 묻는 질문
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              도입 전 가장 많이 확인하시는 핵심 내용만 담았습니다.
            </p>
          </div>

          {/* Right Clean Hairline Accordion */}
          <div className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 hover:text-[#2563EB] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#2563EB]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
