import { useState } from 'react';
import { ArrowUpRight, Smartphone } from 'lucide-react';

interface CoreCapabilitiesProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function CoreCapabilities({ onOpenModal }: CoreCapabilitiesProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="capabilities"
      className="py-20 md:py-28 bg-[#F7F8FA] border-t border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Minimal Section Header */}
        <div className="mb-12">
          <div className="text-xs font-medium text-[#2563EB] mb-2">Capabilities</div>
          <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold tracking-tight text-slate-900 leading-tight">
            핵심 구축 영역
          </h2>
        </div>

        {/* Asymmetric 3-Column Bento Grid (2+1 / 1+2) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 01. Marquee Card (col-span-2) */}
          <article className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="font-mono tabular-nums text-xs font-semibold text-[#2563EB] mb-3">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                  24시간 고객 응대 · 예약 AI
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  카카오톡 채널·알림톡·네이버 톡톡 문의를 업종 규칙에 맞춰 자동으로
                  답변하고 예약까지 확정합니다.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span>카카오톡 채널 · 알림톡 · 네이버 예약</span>
                <button
                  type="button"
                  onClick={() => onOpenModal('sample')}
                  className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:text-[#2563EB] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>진단받기</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="md:w-[44%] min-h-[210px] border-t md:border-t-0 md:border-l border-slate-200 bg-slate-100">
              {!imageError ? (
                <img
                  src="/src/assets/images/smb_ai_workspace_1795479785858.jpg"
                  alt="매장 및 전문직 데스크에서 운영되는 맞춤형 예약·응대 AI 태블릿 화면"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <Smartphone className="w-8 h-8" />
                </div>
              )}
            </div>
          </article>

          {/* 02. Document, Accounting & Inventory Automation */}
          <article className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono tabular-nums text-xs font-semibold text-[#2563EB] mb-3">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                문서 · 정산 · 발주 자동화
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                영수증·계약서·상담 기록을 자동 정리하고, 매출 추이에 맞춰 적정
                발주량을 제안합니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              증빙 분류 · 계약서 요약 · 수요 예측 발주
            </div>
          </article>

          {/* 03. SEO & AI Marketing Promotion */}
          <article className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono tabular-nums text-xs font-semibold text-[#2563EB] mb-3">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                검색 최적화(SEO) · AI 홍보
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                네이버·구글·AI 검색 상위 노출 구조(SEO/GEO)를 세팅하고, 블로그·SNS
                홍보와 단골 알림을 자동화합니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              SEO/GEO 세팅 · 플레이스 노출 · 홍보 콘텐츠
            </div>
          </article>

          {/* 04. Custom Internal App (col-span-2) */}
          <article className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7">
                <div className="font-mono tabular-nums text-xs font-semibold text-[#2563EB] mb-3">
                  04
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                  우리 가게·사무실 전용 웹·앱 제작
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  검색 유입(SEO)이 적용된 브랜드 홈페이지부터 엑셀·수기 장부를
                  대체하는 전용 관리 화면까지 맞춤 제작합니다.
                </p>
              </div>

              <div className="md:col-span-5 md:border-l md:border-slate-200 md:pl-6 space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/70">
                  <span className="text-slate-500">검색 최적화</span>
                  <span className="font-semibold text-slate-900">SEO · GEO 기본 세팅</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/70">
                  <span className="text-slate-500">기존 툴 연동</span>
                  <span className="font-semibold text-slate-900">POS · 캘린더 · 엑셀</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">소유권</span>
                  <span className="font-semibold text-slate-900">고객사 100% 귀속</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <span>불필요한 구독료 없이 업무 자동화와 홍보 기반을 함께 구축</span>
              <button
                type="button"
                onClick={() => onOpenModal('inquiry')}
                className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:text-[#2563EB] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>제작 문의</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
