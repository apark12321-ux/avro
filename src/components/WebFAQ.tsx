import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function WebFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '그림이나 도형을 처음부터 직접 새로 그려주나요?',
      a: '아닙니다. 그림을 직접 그리는 작업(신규 드로잉/작도)은 외주 단가가 너무 높고 제작 기간이 오래 걸려 지원하지 않습니다. 단가 부담을 대폭 낮추고 신속한 납품을 실현하기 위해 [고객이 전달해주신 캡처 사진이나 퀄리티 낮은 원본 이미지를 고화질로 업스케일하여 깔끔하게 변환해 드리는 서비스]만 전문으로 제공합니다. 따라서 변환할 캡처 사진, 시험지 사진 등 원본 이미지가 반드시 필요합니다.'
    },
    {
      q: '일반 무료 자동 PDF 변환기(웹 OCR)와 무엇이 다른가요?',
      a: '일반 웹 자동 변환기는 복잡한 수식(미적분, 기하, 행렬, 분수 등)을 오인식하거나 깨뜨리고, 도판을 저화질 비트맵으로 캡처하여 수령 후 대대적인 재수정 작업이 불가피합니다. 본 전문 조판 서비스는 전문 인력의 교차 검수를 통해 수식 오탈자 0%를 달성하고, 흐릿한 이미지를 선명하게 업스케일하며, 고객사 전용 템플릿에 맞춘 완결형 정품 HWP를 납품합니다.'
    },
    {
      q: 'PDF 외에 다른 문서 포맷(이미지, 스캔본, 기존 HWP 등)도 변환 가능한가요?',
      a: '네, 가능합니다. PDF뿐만 아니라 시험지 사진, 스캔 이미지, 워드(DOCX), 서식이 깨진 기존 HWP 등 모든 문서를 고객이 지정하시는 정품 HWP/HWPX 문서로 상호 변환해 드립니다.'
    },
    {
      q: '학원이나 출판사 자체 전용 템플릿에 맞춰 납품받을 수 있나요?',
      a: '네, 기존에 사용하시던 HWP 템플릿(글꼴, 장평, 자간, 행간, 1단/2단 규격)을 전달해 주시면 해당 양식에 100% 일치하도록 최종 문서를 출력하여 납품합니다. 수령 즉시 재편집 없이 바로 사용 가능합니다.'
    },
    {
      q: '무료 샘플 3문항 변환 테스트 절차는 어떻게 되나요?',
      a: '보유 중인 원고 중 수식이나 캡처 도판이 포함된 3문항을 접수해 주시면, 원고 검토 후 표준 HWP 변환본과 이미지 고화질 업스케일 샘플을 순차적으로 신속히 제작하여 회신해 드립니다.'
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
            작업 의뢰 전 확인하시는 주요 질문과 명확한 팩트 답변
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
