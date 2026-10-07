import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FactsheetFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '일반 무료 자동 PDF 변환기(OCR 툴)와의 차이는 무엇인가요?',
      a: '일반 웹 자동 변환기는 복잡한 극한, 적분, 기하 기호 및 과학 특수기호를 자주 오인식하며, 도판을 저화질 비트맵으로 단순 캡처하여 수령 후 대대적인 재작업이 필요합니다. 본 전문 조판 솔루션은 전문 에디터 검수를 통해 수식 오탈자 0%를 보장하고, 원본 도판을 고화질 무손실 벡터로 업스케일하며, 고객사 지정 템플릿에 맞춘 완결형 HWP를 납품합니다.'
    },
    {
      q: 'PDF 외에 다른 문서 포맷(이미지, 스캔본, 기존 HWP 등)도 변환 가능한가요?',
      a: '네, 가능합니다. PDF뿐만 아니라 사진/스캔 이미지, 워드(DOCX), 서식이 깨진 기존 HWP 등 모든 원본 문서를 고객이 지정하는 완벽한 표준 HWP/HWPX 문서로 상호 변환해 드립니다.'
    },
    {
      q: '도형 및 그래프 업스케일 시 원본 이미지가 왜 반드시 필요한가요?',
      a: '수학·과학 문항의 출제 의도와 좌표·수치적 무결성을 100% 보존하기 위해, 임의의 창작 작도가 아닌 [고객 제공 원본 도판 기반 1:1 고화질 벡터 업스케일링]을 원칙으로 진행하기 때문입니다. 따라서 스캔본이나 손그림 등 초안 이미지가 반드시 포함되어야 합니다.'
    },
    {
      q: '학원이나 출판사 자체 전용 템플릿에 맞춰 납품받을 수 있나요?',
      a: '네, 기존에 사용하시던 HWP 템플릿(글꼴, 장평, 자간, 행간, 1단/2단 규격)을 전달해 주시면 해당 양식에 100% 일치하도록 최종 문서를 출력하여 납품합니다. 수령 즉시 재편집 없이 바로 사용 가능합니다.'
    },
    {
      q: '무료 샘플 3문항 변환 테스트 절차는 어떻게 되나요?',
      a: '보유 원고 중 수식이나 캡처 이미지가 포함된 3문항을 접수해 주시면, 원고 검토 후 표준 HWP 변환본과 이미지 고화질 업스케일 샘플을 순차적으로 신속히 제작하여 회신해 드립니다.'
    }
  ];

  return (
    <section id="faq-section" className="py-12 md:py-16 bg-[#18181b] text-white font-sans border-t border-zinc-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/10 text-[#008CFF] text-xs font-bold mb-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            자주 묻는 질문 (팩트 답변)
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-zinc-700/80 bg-white/5 overflow-hidden transition-all text-left"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-3.5 text-left flex items-center justify-between gap-3 hover:bg-white/[0.04] transition-colors cursor-pointer text-xs sm:text-sm"
                >
                  <span className="font-bold text-zinc-100">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#008CFF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 pt-1 text-xs text-zinc-300 leading-relaxed border-t border-zinc-700/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
