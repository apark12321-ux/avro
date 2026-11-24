import { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';

interface WebHeroProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function WebHero({ onOpenModal }: WebHeroProps) {
  const [imageError, setImageError] = useState(false);

  const metrics = [
    { value: '2~4주', label: '맞춤 개발·현장 배포' },
    { value: '1:1 설계', label: '우리 업종 전용 기능' },
    { value: '100% 소유', label: '월 과금 없는 자체 구축' },
    { value: '무료 진단', label: '업무 흐름 분석·견적' },
  ];

  const scrollToSolutions = () => {
    const el = document.getElementById('industry-ai');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-5">
              <span className="text-[#2563EB] font-semibold">AI 맞춤 솔루션 개발</span>
              <span aria-hidden="true">·</span>
              <span>소상공인 · 자영업자 · 전문직</span>
            </div>

            <h1 className="text-[2.2rem] sm:text-[2.9rem] lg:text-[3.35rem] font-bold tracking-tight text-slate-900 leading-[1.15] text-balance mb-5">
              우리 사업에 딱 맞는 AI,
              <br />
              가장 쓰기 쉽게 만듭니다
            </h1>

            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-lg mb-8">
              법무·세무·병원부터 카페·식당·동네 매장까지.
              <br />
              매일 반복되는 응대·예약·정산·문서를 전용 AI로 자동화합니다.
            </p>

            {/* Primary CTA + Clean Text Action */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => onOpenModal('sample')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>무료 업무 진단 신청</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToSolutions}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                업종별 솔루션 보기
              </button>
            </div>
          </div>

          {/* Right Editorial Visual Column */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
              {!imageError ? (
                <img
                  src="/src/assets/images/ai_studio_hero_1795479785612.jpg"
                  alt="소상공인 및 전문직 맞춤형 AI 업무 자동화 솔루션 개발 스튜디오"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-slate-400">
                  <Layers className="w-10 h-10 mb-3 text-slate-300" />
                  <span className="text-sm font-medium text-slate-500">AVRO Custom AI Studio</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Spec Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, idx) => (
            <div key={idx}>
              <div className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
