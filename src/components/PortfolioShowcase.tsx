import { useState } from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';

interface PortfolioShowcaseProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

interface PortfolioItem {
  id: string;
  num: string;
  category: string;
  title: string;
  domainLabel?: string;
  url?: string;
  summary: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'growthtap',
    num: '01',
    category: '소상공인 · 매장 성장 AI',
    title: 'GrowthTap',
    summary: '상권·매장 데이터 분석, 맞춤 실행 플랜, 홍보 글쓰기 통합 웹 솔루션',
    highlights: ['입지·상권 분석', '매장 데이터 진단', '추천 액션 플랜', '홍보 글쓰기'],
    image: '/src/assets/images/portfolio_growthtap_1795482340584.jpg',
    imageAlt: 'GrowthTap 소상공인 매장 데이터 분석 및 마케팅 액션 플랜 AI 웹 솔루션 화면',
  },
  {
    id: 'mathhwp',
    num: '02',
    category: '학원·전문직 · AI 문서 자동화',
    title: 'MathHWP',
    domainLabel: 'mathhwp.com',
    url: 'https://mathhwp.com/',
    summary: 'PDF·이미지 수식 AI OCR 인식 및 한글(HWPX) 자동 변환 SaaS',
    highlights: ['AI 수식 OCR 인식', '문항 수 자동 분석', '한글(HWPX) 출력', '크레딧 정산'],
    image: '/src/assets/images/portfolio_mathhwp_1795482341060.jpg',
    imageAlt: 'MathHWP 수학 PDF 수식 AI 인식 및 한글 HWPX 자동 변환 서비스 화면',
  },
];

export default function PortfolioShowcase({ onOpenModal }: PortfolioShowcaseProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-white border-t border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Crisp Non-Narrative Section Header */}
        <div className="mb-12">
          <div className="text-xs font-medium text-[#2563EB] mb-2">Portfolio</div>
          <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold tracking-tight text-slate-900 leading-tight">
            구축 사례
          </h2>
        </div>

        {/* 2-Column Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((item) => {
            const isFailed = failedImages[item.id];
            const imageFrame = !isFailed ? (
              <img
                src={item.image}
                alt={item.imageAlt}
                referrerPolicy="no-referrer"
                onError={() =>
                  setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                }
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-400 bg-slate-50">
                <Globe className="w-8 h-8 mb-2 text-slate-300" />
                <span className="font-mono text-xs text-slate-500">{item.title}</span>
              </div>
            );

            return (
              <article
                key={item.id}
                className="group bg-[#F7F8FA] border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors hover:border-slate-300"
              >
                <div>
                  {/* 16:9 Preview Frame */}
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title} 라이브 사이트 열기`}
                      className="block aspect-video w-full overflow-hidden border-b border-slate-200 bg-slate-100 relative"
                    >
                      {imageFrame}
                    </a>
                  ) : (
                    <div className="aspect-video w-full overflow-hidden border-b border-slate-200 bg-slate-100 relative">
                      {imageFrame}
                    </div>
                  )}

                  {/* Concise Copy */}
                  <div className="p-6 sm:p-8 pb-5">
                    <div className="flex items-center justify-between gap-3 text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono tabular-nums font-semibold text-[#2563EB]">
                          {item.num}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{item.category}</span>
                      </div>
                      {item.domainLabel && (
                        <span className="font-mono text-[11px] text-slate-400 truncate max-w-[180px]">
                          {item.domainLabel}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {item.summary}
                    </p>

                    {/* Clean Unboxed Highlights */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                      {item.highlights.map((hl, idx) => (
                        <span key={hl} className="inline-flex items-center gap-2">
                          <span className="font-medium text-slate-700">{hl}</span>
                          {idx < item.highlights.length - 1 && (
                            <span aria-hidden="true" className="text-slate-300">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-6 sm:px-8 py-4 border-t border-slate-200/80 bg-white flex items-center justify-between gap-4">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>라이브 사이트 보기</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onOpenModal('sample')}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>시연 · 도입 문의</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => onOpenModal('inquiry')}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    유사 솔루션 문의
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
