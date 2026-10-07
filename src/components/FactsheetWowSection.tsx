import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function FactsheetWowSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const points = [
    {
      num: '01',
      title: '핵심 가치',
      highlightTitle: 'PDF → HWP 완결형 정밀 조판',
      specs: [
        '단순 자동 변환 툴이 해결하지 못하는 복잡 수식 오류와 깨진 도판 완벽 해결',
        '단순 기계적 OCR 추출이 아닌 전문 에디터의 3단계 검수로 오탈자 0% 달성',
        'PDF, 스캔본, 이미지, 기존 HWP 등 모든 문서를 100% 편집 가능한 규격으로 복원',
        '납품 즉시 추가 수정 없이 인쇄 및 수업에 투입 가능한 완결형 산출물 제공'
      ]
    },
    {
      num: '02',
      title: '정밀 복원 기술',
      highlightTitle: '수식 타이핑 & 도판 업스케일',
      specs: [
        '수학(미적분/기하/확통) 및 과학(물리/화학) 복잡 수식을 한글 수식 표준 규격으로 정밀 입력',
        '전달해주신 원본 도판·그림을 기반으로 1:1 무손실 벡터 그래픽으로 고화질 업스케일',
        '대형 옵셋 인쇄에서도 테두리 번짐 없는 300dpi급 선명도 100% 보장',
        '※ 수학적 무결성을 위해 원본 도판 이미지가 반드시 필요합니다'
      ]
    },
    {
      num: '03',
      title: '템플릿 호환',
      highlightTitle: '고객 지정 양식 1:1 최종 출력',
      specs: [
        '학원 및 출판사 고유 전용 템플릿(본문 서체, 자간, 장평, 행간, 단 구분) 100% 반영',
        '수능 2단형, 내신 1단형, 해설지 분할형 등 목적에 맞는 최적화 레이아웃 완성',
        '편집이 자유로운 정품 HWP/HWPX 원본 및 인쇄용 고해상도 PDF 일괄 납품',
        '고객의 교재 서식 재편집 및 오탈자 검수 부담을 덜어주는 턴키(Turn-key) 외주 솔루션'
      ]
    }
  ];

  return (
    <section
      id="wow-section"
      data-navbar-theme="light"
      className="relative bg-[#f5f5f5] text-black py-14 md:py-20 font-sans transition-colors duration-200"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-900">
            문서 변환 및 조판 핵심 기준
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 font-medium">
            자동 변환의 한계를 넘어 최종 출판본을 완성하는 3대 팩트
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 bg-zinc-200 border border-zinc-300">
            {points.map((pt, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 sm:px-5 py-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#008CFF] text-white'
                    : 'text-zinc-700 hover:text-black'
                }`}
              >
                <span className="opacity-70 mr-1 font-mono">0{idx + 1}</span>
                {pt.highlightTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Display Card */}
        <div className="max-w-4xl mx-auto bg-white p-5 sm:p-8 shadow-md border border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Specs */}
            <div className="md:col-span-6 text-left">
              <span className="text-[#008CFF] font-mono font-black text-lg block mb-1">
                {points[activeTab].num}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 tracking-tight mb-3">
                {points[activeTab].title} · <span className="text-[#008CFF]">{points[activeTab].highlightTitle}</span>
              </h3>

              <div className="space-y-2 pt-1">
                {points[activeTab].specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-semibold text-zinc-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008CFF] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Comparison Matrix */}
            <div className="md:col-span-6 bg-zinc-50 p-4 border border-zinc-200 text-xs text-left">
              
              {activeTab === 0 && (
                <div className="space-y-2">
                  <div className="font-bold text-zinc-800 pb-1 border-b border-zinc-200">
                    단순 자동 변환 툴 vs 전문 조판 솔루션
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200">
                    <div className="text-zinc-500 font-bold mb-0.5">단순 자동 웹 변환기:</div>
                    <div className="text-zinc-700">단순 OCR 기반 · 수식 오탈자 빈발 · 서식 미적용</div>
                  </div>
                  <div className="p-2.5 bg-white border border-[#008CFF]/40">
                    <div className="text-[#008CFF] font-bold mb-0.5">전문 조판 솔루션:</div>
                    <div className="text-zinc-900 font-medium">전문 검수 수식 100% · 도판 벡터 업스케일 · 템플릿 완결 납품</div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="space-y-2">
                  <div className="font-bold text-zinc-800 pb-1 border-b border-zinc-200">
                    수식 및 도판 처리 사양
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 flex justify-between">
                    <span className="text-zinc-500">수학 수식:</span>
                    <span className="font-bold text-zinc-800">미적분, 기하, 행렬, 극한 표준 입력</span>
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 flex justify-between">
                    <span className="text-zinc-500">과학 수식:</span>
                    <span className="font-bold text-zinc-800">물리 기호, 화학 반응식, 구조식 입력</span>
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 flex justify-between">
                    <span className="text-zinc-500">도판 업스케일:</span>
                    <span className="font-bold text-[#008CFF]">원본 기반 1:1 고화질 벡터 변환</span>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-2">
                  <div className="font-bold text-zinc-800 pb-1 border-b border-zinc-200">
                    포맷 및 템플릿 지원
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 flex justify-between">
                    <span className="text-zinc-500">변환 가능 문서:</span>
                    <span className="font-bold text-zinc-800">PDF, HWP, 이미지(JPG/PNG), 워드</span>
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 flex justify-between">
                    <span className="text-zinc-500">템플릿 지원:</span>
                    <span className="font-bold text-zinc-800">고객사 지정 전용 스타일 시트 1:1 반영</span>
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 flex justify-between">
                    <span className="text-zinc-500">출력 규격:</span>
                    <span className="font-bold text-[#008CFF]">수능 2단, 내신 1단, 교재 분할 등 자유 지정</span>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
