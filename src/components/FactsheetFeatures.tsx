import { 
  FileType,
  Binary, 
  Maximize, 
  ArrowRightLeft, 
  LayoutTemplate 
} from 'lucide-react';

export default function FactsheetFeatures() {
  const featureList = [
    {
      category: '메인 변환',
      title: 'PDF → HWP 완벽 변환',
      spec: '스캔본 PDF 및 일반 PDF 문서를 100% 편집 가능한 HWP/HWPX 문서로 복원',
      icon: <FileType className="w-5 h-5 text-[#008CFF]" />
    },
    {
      category: '수식 타이핑',
      title: '수학·과학 수식 정밀 입력',
      spec: '미적분, 기하, 벡터, 물리 기호, 화학 반응식 등 복잡 수식 한글 수식 표준 타이핑',
      icon: <Binary className="w-5 h-5 text-[#008CFF]" />
    },
    {
      category: '도판 복원',
      title: '원본 도판 고화질 벡터 업스케일링',
      spec: '전달된 원본 그림/도판을 기반으로 300dpi급 무손실 벡터 그래픽으로 고화질 업스케일',
      icon: <Maximize className="w-5 h-5 text-[#008CFF]" />
    },
    {
      category: '포맷 호환',
      title: '모든 문서 포맷 상호 변환',
      spec: 'PDF, HWP, HWPX, 이미지(JPG/PNG), 워드(DOCX) 등 모든 문서를 원하는 형식으로 변환',
      icon: <ArrowRightLeft className="w-5 h-5 text-[#008CFF]" />
    },
    {
      category: '템플릿 출력',
      title: '고객 지정 템플릿 1:1 맞춤 제작',
      spec: '학원/출판사 고유 서식(글꼴, 장평, 자간, 행간, 단 구분)에 맞춘 완벽한 최종 아웃풋 납품',
      icon: <LayoutTemplate className="w-5 h-5 text-[#008CFF]" />
    }
  ];

  return (
    <section
      id="features-section"
      data-navbar-theme="dark"
      className="py-12 md:py-16 bg-[#050B1A] text-white relative font-sans border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-1.5">
            제공 서비스 스펙 (팩트)
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium">
            문서 변환 · 수식·도판 업스케일 · 템플릿 맞춤 출력 업무 범위
          </p>
        </div>

        {/* 5 Compact Horizontal Capsules */}
        <div className="flex flex-col gap-2.5 max-w-4xl mx-auto">
          {featureList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 py-3 bg-white/5 border border-[#008CFF]/50 rounded-xs hover:bg-white/10 hover:border-white transition-all text-left shadow-sm"
            >
              {/* Category */}
              <div className="flex items-center gap-2 sm:w-32 shrink-0 mb-1 sm:mb-0">
                <div className="p-1 rounded-none bg-[#008CFF]/10 shrink-0">
                  {item.icon}
                </div>
                <span className="text-xs font-extrabold text-[#008CFF]">
                  {item.category}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] h-4 bg-white/20 mx-3 shrink-0" />

              {/* Title & Spec */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between grow gap-1 sm:gap-3">
                <span className="text-xs sm:text-sm font-bold text-white shrink-0">
                  {item.title}
                </span>
                <span className="text-xs text-zinc-300 font-medium">
                  {item.spec}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
