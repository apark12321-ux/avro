import { 
  FileType, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Sparkles, 
  FileCheck,
  Maximize2
} from 'lucide-react';

interface WebServiceOverviewProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function WebServiceOverview({ onOpenModal }: WebServiceOverviewProps) {
  const capabilities = [
    {
      category: '메인 업무',
      title: 'PDF → HWP / HWPX 정밀 변환',
      desc: '스캔 PDF나 시험지 사진을 100% 수정·편집 가능한 정품 한글 문서로 원본 복원합니다. 표, 다단, 문단 스타일이 완벽히 유지됩니다.',
      icon: <FileType className="w-5 h-5 text-[#0066EE]" />
    },
    {
      category: '수식 전산화',
      title: '수학·과학 복잡 수식 정밀 타이핑',
      desc: '단순 OCR의 오류를 배제하고, 수학교육 및 이공계 전담 인력이 한글 수식 편집기로 표준 수식을 100% 전산화 타이핑합니다.',
      icon: <FileCheck className="w-5 h-5 text-[#0066EE]" />
    },
    {
      category: '도판 최적화',
      title: '캡처본 & 저화질 이미지 고화질 업스케일',
      desc: '고단가의 신규 드로잉 대신, 캡처 사진이나 흐릿한 원본 이미지를 노이즈 없이 300dpi급으로 깔끔하게 업스케일 변환합니다. (원본 이미지 필수)',
      icon: <Maximize2 className="w-5 h-5 text-[#0066EE]" />
    },
    {
      category: '서식 커스텀',
      title: '학원·출판사 맞춤 템플릿 1:1 매칭',
      desc: '고객사 전용 스타일 시트(글꼴, 장평, 자간, 수능 2단/내신 1단)를 100% 반영하여 수령 즉시 불필요한 서식 재작업 없이 바로 활용 가능합니다.',
      icon: <Layers className="w-5 h-5 text-[#0066EE]" />
    }
  ];

  return (
    <section id="service-overview" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Section Header */}
        <div className="text-left mb-14 max-w-3xl">
          <span className="text-xs sm:text-sm font-black text-[#0066EE] tracking-widest uppercase block mb-2">
            SERVICE OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-3">
            간결하고 완벽한 출판 인쇄 규격 HWP.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">
            웹 기반 자동 변환기의 한계를 극복하고, 수식 오탈자 0%와 고화질 도판, 
            고객사 전용 템플릿까지 완결된 상태로 최종본을 납품합니다.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all border border-zinc-200 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-black px-2.5 py-1 rounded bg-blue-50 text-[#0066EE] border border-blue-100">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-zinc-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-[#0066EE] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>표준 검수 통과 보장</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Policy Highlight Banner (Request #4) */}
        <div id="core-tech" className="bg-[#0066EE] text-white rounded-2xl p-7 sm:p-10 shadow-xl relative overflow-hidden text-left">
          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3">
              <AlertCircle className="w-3.5 h-3.5 text-cyan-200" />
              <span>도판 작업 핵심 정책 안내</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black mb-3 leading-snug">
              신규 드로잉은 단가 부담으로 미진행,
              <br />
              전달 원본의 <span className="text-[#38BDF8]">고화질 클린 업스케일</span>에 집중합니다.
            </h3>

            <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium mb-6">
              그림이나 도형을 처음부터 직접 새로 그리는 작업은 단가가 너무 높아 고객의 부담이 큽니다.
              합리적인 외주 단가와 신속 납품을 실현하기 위해 <strong>신규 드로잉은 진행하지 않으며, 
              고객이 전달해주신 캡처 사진이나 퀄리티 낮은 원본 이미지를 고화질로 업스케일하여 깔끔하게 변환</strong>해 드리는 서비스만 전문으로 제공합니다.
              따라서 변환할 캡처 사진, 시험지 사진 등 원본 이미지가 반드시 필요합니다.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenModal('sample')}
                className="px-6 py-2.5 rounded-full bg-white text-[#0066EE] font-black text-xs sm:text-sm hover:bg-zinc-100 transition-all shadow cursor-pointer"
              >
                무료 샘플 3문항 변환 테스트 신청
              </button>
              <span className="text-xs text-blue-200 font-medium">
                ※ 보유 원고의 캡처본으로 변환 품질을 먼저 확인하실 수 있습니다.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
