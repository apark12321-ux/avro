import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function WebFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '그림이나 도형을 처음부터 직접 새로 그려주나요?',
      a: '신규 작도(새로 그리기)는 높은 외주 단가로 인해 진행하지 않습니다. 합리적인 단가와 빠른 납기를 위해 보내주신 캡처본·스캔본을 300dpi 인쇄용 고화질로 업스케일·리터칭하여 완결합니다.'
    },
    {
      q: '일반 무료 자동 PDF 변환기(웹 OCR)와 무엇이 다른가요?',
      a: '웹 자동 변환기는 수식이 깨지고 도판이 뭉개집니다. 에이브로는 한글 표준 수식 코드 매칭과 300dpi 도판 복원, 귀사 템플릿 완결본으로 납품하여 바로 수업 및 출판에 활용하실 수 있습니다.'
    },
    {
      q: 'PDF 외에 다른 문서 포맷도 변환 가능한가요?',
      a: '시험지 사진, 스마트폰 촬영본, 스캔본, DOCX, 서식이 깨진 구버전 HWP 등 모든 형태의 원고를 정품 HWP/HWPX로 정밀 변환합니다.'
    },
    {
      q: '학원·출판사 자체 전용 템플릿 양식에 맞춰 주나요?',
      a: '네. 귀사의 전용 글꼴, 자간, 장평, 2단 레이아웃을 정밀하게 반영하여 추가 작업 부담 없는 완성본으로 납품합니다.'
    },
    {
      q: '무료 샘플 3문항 테스트 절차는 어떻게 되나요?',
      a: '수식이나 도판이 포함된 3문항을 접수해주시면, 표준 HWP 변환본과 300dpi 도판 샘플을 무료로 제작해 드립니다.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Header */}
        <div className="text-left mb-14 max-w-3xl">
          <span className="text-xs sm:text-sm font-black text-[#0066EE] tracking-widest uppercase block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-3">
            자주 묻는 질문
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">
            작업 의뢰 전 확인하시는 핵심 질문과 답변
          </p>
        </div>

        {/* Accordion list */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden transition-all text-left"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  <span className="font-extrabold text-sm sm:text-base text-zinc-900">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#0066EE] text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 font-medium">
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
