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
      title: 'PDF → 정품 HWP 정밀 변환',
      desc: '스캔 PDF·시험지 사진을 표·다단 스타일이 살아있는 편집 가능한 한글 문서로 복원합니다.',
      icon: <FileType className="w-5 h-5 text-[#0066EE]" />
    },
    {
      category: '전과목 전산화',
      title: '수식·지문 한글 표준화',
      desc: '수학 수식부터 국·영 긴 지문과 도표까지 한글 표준 코드로 변환해 자유로운 편집·수정이 가능합니다.',
      icon: <FileCheck className="w-5 h-5 text-[#0066EE]" />
    },
    {
      category: '도판 최적화',
      title: '캡처본 300dpi 고화질 업스케일',
      desc: '신규 작도 비용 부담 없이, 원본 캡처 노이즈를 제거해 300dpi 인쇄용 고해상도로 개선합니다.',
      icon: <Maximize2 className="w-5 h-5 text-[#0066EE]" />
    },
    {
      category: '서식 커스텀',
      title: '고객사 맞춤 템플릿 1:1 매칭',
      desc: '귀사 고유 폰트, 자간, 2단 규격을 충실히 반영해 수령 즉시 수업에 활용할 수 있습니다.',
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
            출판 인쇄 규격에 맞춘 정밀 HWP
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">
            정밀 수식 입력, 고화질 도판 복원, 귀사 맞춤 템플릿 적용으로 바로 쓰는 최종본을 제공합니다.
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
                <span>자체 3단계 검수 완료</span>
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

            <h3 className="text-xl sm:text-2xl font-black mb-2 leading-snug">
              신규 작도 비용 부담 없이, <span className="text-[#38BDF8]">고화질 클린 업스케일</span>로 해결합니다
            </h3>

            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed font-normal mb-5">
              높은 단가의 신규 드로잉 대신, 원본 캡처본을 300dpi 인쇄용 고화질로 업스케일·리터칭하여 합리적인 단가로 완성합니다. (원본 이미지 접수 필수)
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenModal('sample')}
                className="px-6 py-2.5 rounded-full bg-white text-[#0066EE] font-black text-xs sm:text-sm hover:bg-zinc-100 transition-all shadow cursor-pointer"
              >
                무료 샘플 3문항 신청
              </button>
              <span className="text-xs text-blue-200 font-medium">
                ※ 보유 원고 캡처본으로 변환 품질을 먼저 확인하세요.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
