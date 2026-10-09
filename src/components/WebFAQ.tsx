import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function WebFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '일반 무료 자동 PDF 변환기(웹 OCR)와 무엇이 다른가요?',
      a: '웹 OCR은 복합 다단 표가 깨지고, 들여쓰기가 붕괴되며, 수식과 특수 기호가 글자로 인식되지 않습니다. 에이브로는 전문 조판 에디터와 시니어 검수관이 한글 표준 수식 코드 입력, 300dpi 도판 업스케일, 고객사 전용 공문서·사내 템플릿 완결본으로 납품해 바로 전자결재 및 출판에 사용하실 수 있습니다.'
    },
    {
      q: '공공기관 수의계약 및 전자세금계산서 발행이 가능한가요?',
      a: '네, 가능합니다. 국세청 전자세금계산서 정식 발행은 물론, 공공기관 및 지자체 수의계약에 필요한 사업자등록증, 통장사본, 청렴계약서 등 행정 서류를 일체 완비하여 신속 지원합니다.'
    },
    {
      q: '공학 기술계산서나 특허 도면도 작업이 가능한가요?',
      a: '네. 그리스 문자(σ, τ, Δ), 위/아래 첨자, 행렬, 미적분 기호 등 공학 계산식 전반을 한글 공식 수식 코드로 입력합니다. 또한 설계 도판 및 특허 도면은 300dpi 인쇄 규격에 부합하도록 벡터화 및 고화질 리터칭을 수행합니다.'
    },
    {
      q: '기업 기밀 및 대외비 문서의 보안 서약(NDA) 체결이 되나요?',
      a: '네, 법적 효력을 갖는 표준 비밀유지서약서(NDA)를 즉시 체결합니다. 모든 작업은 폐쇄형 작업 환경에서 진행되며, 최종 납품 7일 후 원본 및 변환본 데이터를 영구 파기(파기 확인서 발급)합니다.'
    },
    {
      q: '시험지나 학원 교재의 수식·도형도 여전히 작업하나요?',
      a: '네, 에이브로의 시그니처 핵심 분야로서 초·중·고 전과목 시험지 및 기하 도형 벡터 작도(실제 전후 비교 샘플 4선 탑재)는 상시 최우선 접수 중입니다.'
    },
    {
      q: '무료 샘플 테스트 절차는 어떻게 되나요?',
      a: '문서의 난이도나 업종에 관계없이 3페이지(또는 3문항)를 무상으로 먼저 변환해 드립니다. 직접 한글(HWP) 파일 품질과 수식 편집성을 확인하신 후 본 작업을 결정하시면 됩니다.'
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
            공공기관, 연구소, 기업 법무팀, 교육 출판사에서 가장 많이 확인하시는 핵심 문의 사항입니다.
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
