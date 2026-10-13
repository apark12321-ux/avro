import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function WebFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '일반 웹 자동 변환기(OCR)와 무엇이 다른가요?',
      a: '웹 OCR은 표와 들여쓰기가 깨지고 수식을 인식하지 못합니다. 전문 에디터가 수식 코드 입력, 300dpi 도판 복원, 규격 서식까지 완결하여 즉시 사용 가능한 정품 HWP로 납품합니다.'
    },
    {
      q: '공공기관 수의계약 및 세금계산서 발행이 가능한가요?',
      a: '네. 국세청 전자세금계산서 발행과 공공기관 수의계약에 필요한 사업자등록증, 통장사본 등 행정 서류를 완비하여 지원합니다.'
    },
    {
      q: '매뉴얼의 순서도나 계약서 표도 수정 가능한가요?',
      a: '네. 순서도 도형·화살표를 한글 그리기 개체로 조판하여 텍스트 상자와 구조를 자유롭게 수정하실 수 있습니다.'
    },
    {
      q: '대외비 문서의 보안 서약(NDA) 체결이 되나요?',
      a: '네. 표준 비밀유지서약서(NDA)를 즉시 체결하며, 최종 납품 7일 후 원본 데이터를 영구 파기하고 확인서를 발급합니다.'
    },
    {
      q: '시험지나 교재의 수식·도형 작업도 가능한가요?',
      a: '네. 초·중·고 전과목 수학·과학 수식 타이핑과 300dpi 기하 벡터 작도는 상시 최우선으로 정밀 납품합니다.'
    },
    {
      q: '무료 샘플 테스트는 어떻게 진행되나요?',
      a: '원고의 3페이지(또는 3문항)를 무상으로 먼저 변환해 드립니다. 완성된 정품 HWP 파일의 편집성을 직접 확인하신 후 의뢰하시면 됩니다.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Header */}
        <div className="text-left mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0066EE] uppercase tracking-wider mb-2 font-bold">
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span aria-hidden="true">·</span>
            <span>자주 묻는 질문</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-3">
            업무 의뢰 전 <span className="text-[#0066EE]">자주 묻는 질문</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">
            공공기관, 기업 실무팀, 법무·사규 관리자, 교육 출판사에서 가장 많이 확인하시는 핵심 문의 사항입니다.
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
