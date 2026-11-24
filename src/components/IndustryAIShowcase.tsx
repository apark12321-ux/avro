import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface IndustryAIShowcaseProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

type SectorKey = 'professional' | 'clinic_edu' | 'fnb' | 'retail';

interface PreviewRow {
  time: string;
  title: string;
  detail: string;
  result: string;
}

interface SectorConfig {
  id: SectorKey;
  tabLabel: string;
  sectors: string[];
  headline: string;
  points: string[];
  uiTitle: string;
  uiSubtitle: string;
  uiMetricLabel: string;
  uiMetricValue: string;
  rows: PreviewRow[];
}

const SECTORS: Record<SectorKey, SectorConfig> = {
  professional: {
    id: 'professional',
    tabLabel: '전문직 · 부동산',
    sectors: ['법무', '세무', '회계', '부동산'],
    headline: '상담·서류 자동화부터 지역 키워드 검색(SEO) 유입까지',
    points: [
      '의뢰인 초기 상담 요약 및 계약·증빙 서류 자동 분류',
      '지역·분야 키워드 검색 최적화(SEO) 및 전문 칼럼 초안',
      '신고 기한·만기 일정 고객별 자동 리마인드',
    ],
    uiTitle: '전문직 AI 업무 · 유입 보드',
    uiSubtitle: '세무·법무·부동산 자동화 및 검색 최적화',
    uiMetricLabel: '검색 유입 · 처리',
    uiMetricValue: '38건',
    rows: [
      { time: '09:15', title: '부가세 증빙 서류 14건', detail: '누락 영수증 2건 자동 안내 발송', result: '분류 완료' },
      { time: '11:20', title: '지역 키워드 SEO 칼럼 발행', detail: '네이버·구글·AI 검색 구조화 태그 적용', result: '상위 노출' },
      { time: '13:40', title: '신규 법률·부동산 상담 문의', detail: '검색 유입 고객 핵심 쟁점 3줄 요약', result: '접수 완료' },
    ],
  },
  clinic_edu: {
    id: 'clinic_edu',
    tabLabel: '병원 · 약국 · 학원',
    sectors: ['병원', '약국', '학원'],
    headline: '예약·출결 자동화와 지역 검색(SEO) 신규 유입을 함께',
    points: [
      '진료·수업 예약 변경 카카오톡 채널 24시간 자동 응답',
      '진료과목·학원 지역 검색 최적화(SEO) 및 플레이스 관리',
      '방문 전 안내·복약 지도·학부모 학습 리포트 자동 발송',
    ],
    uiTitle: '예약 · 검색 유입 관리',
    uiSubtitle: '병원·약국·학원 자동화 보드',
    uiMetricLabel: '신규 예약 전환',
    uiMetricValue: '+42%',
    rows: [
      { time: '10:30', title: '지역 진료·학원 SEO 세팅', detail: '검색 스키마 및 플레이스 키워드 최적화', result: '노출 상승' },
      { time: '14:30', title: '학원 등원·과제 리포트', detail: '학부모 알림톡 개별 학습 요약 발송', result: '발송 완료' },
      { time: '16:05', title: '정기검진·복약 순응 알림', detail: '재방문 시점 자동 안내 및 예약 연동', result: '예약 11건' },
    ],
  },
  fnb: {
    id: 'fnb',
    tabLabel: '카페 · 식당 · 베이커리',
    sectors: ['커피숍', '카페', '식당', '베이커리'],
    headline: '발주·예약 자동화부터 지역 맛집 검색(SEO)·리뷰 홍보까지',
    points: [
      '요일·날씨별 판매 예측으로 원재료 발주량 자동 제안',
      '지역 맛집 검색 최적화(SEO)·플레이스 상위 노출 세팅',
      '단체 예약 자동 응대 및 리뷰·SNS 홍보 문구 즉시 생성',
    ],
    uiTitle: '매장 운영 · 홍보 AI',
    uiSubtitle: '카페·식당·베이커리 일일 브리핑',
    uiMetricLabel: '발주 · 홍보 절감',
    uiMetricValue: '일 50분',
    rows: [
      { time: '07:30', title: '베이커리 생지·우유 발주', detail: '주말 예상 수요 +18% 반영 추천', result: '발주 확정' },
      { time: '12:15', title: '지역 키워드 플레이스 SEO', detail: '신메뉴 검색 태그·소개글 자동 최적화', result: '유입 +28%' },
      { time: '19:40', title: '신규 리뷰 6건 응대 · 홍보', detail: '매장 톤 맞춘 답글 및 SNS 피드 초안', result: '승인 대기' },
    ],
  },
  retail: {
    id: 'retail',
    tabLabel: '동네 매장 · 판매점',
    sectors: ['휴대폰 판매점', '세탁소', '과일가게', '정육점'],
    headline: '동네 검색 노출(SEO)과 단골 알림으로 재방문을 높입니다',
    points: [
      '동네 업종 키워드 검색 최적화(SEO)로 신규 손님 유입',
      '세탁 완료·신선 입고·개통 진행 현황 알림톡 자동 발송',
      '재구매 주기에 맞춘 단골 할인·입고 홍보 메시지',
    ],
    uiTitle: '동네 홍보 · 단골 자동화',
    uiSubtitle: '판매점·세탁소·신선매장 전용',
    uiMetricLabel: '단골 재방문율',
    uiMetricValue: '3.2배',
    rows: [
      { time: '10:00', title: '과일·정육 당일 신선 입고', detail: '단골 120명 예약 주문 링크 자동 발송', result: '주문 34건' },
      { time: '13:15', title: '우리 동네 검색 SEO 업데이트', detail: '세탁·휴대폰 지역 검색 노출 키워드 반영', result: '노출 완료' },
      { time: '17:45', title: '휴대폰 약정 만료 · 세탁 완료', detail: '맞춤 요금 비교표 및 수령 안내 발송', result: '전송 완료' },
    ],
  },
};

const ALL_SECTORS = [
  '법무',
  '세무',
  '회계',
  '병원',
  '약국',
  '부동산',
  '커피숍',
  '카페',
  '식당',
  '베이커리',
  '학원',
  '휴대폰 판매점',
  '세탁소',
  '과일가게',
  '정육점',
];

export default function IndustryAIShowcase({ onOpenModal }: IndustryAIShowcaseProps) {
  const [activeKey, setActiveKey] = useState<SectorKey>('professional');
  const current = SECTORS[activeKey];

  return (
    <section
      id="industry-ai"
      className="py-20 md:py-28 bg-[#F7F8FA] border-t border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header + Segmented Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-medium text-[#2563EB] mb-2">Solutions</div>
            <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold tracking-tight text-slate-900 leading-tight">
              업종별 맞춤 AI
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="업종 카테고리 선택"
            className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1 p-1 bg-white rounded-xl border border-slate-200 self-start lg:self-auto"
          >
            {(Object.keys(SECTORS) as SectorKey[]).map((key) => {
              const item = SECTORS[key];
              const isSelected = activeKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveKey(key)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#2563EB] text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Showcase Panel */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-9 lg:p-11 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Concise Value & 3 Points */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Unboxed typographic sector list */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-[#2563EB] mb-3">
                {current.sectors.map((sec, idx) => (
                  <span key={sec} className="inline-flex items-center gap-2">
                    <span>{sec}</span>
                    {idx < current.sectors.length - 1 && (
                      <span aria-hidden="true" className="text-slate-300">·</span>
                    )}
                  </span>
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug text-balance mb-6">
                {current.headline}
              </h3>

              <ul className="space-y-3.5 mb-8">
                {current.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onOpenModal('inquiry')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>이 업종 맞춤 견적 받기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Minimal Visual UI Preview */}
          <div className="lg:col-span-7 bg-[#F7F8FA] border border-slate-200 rounded-xl p-5 sm:p-6">
            {/* UI Mockup Top Bar */}
            <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-200">
              <div>
                <div className="text-sm font-bold text-slate-900">{current.uiTitle}</div>
                <div className="text-xs text-slate-500 mt-0.5">{current.uiSubtitle}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[11px] text-slate-500">{current.uiMetricLabel}</div>
                <div className="font-mono tabular-nums text-lg font-bold text-[#2563EB]">
                  {current.uiMetricValue}
                </div>
              </div>
            </div>

            {/* Clean Activity Rows */}
            <div className="divide-y divide-slate-200/80">
              {current.rows.map((row, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <span className="font-mono tabular-nums text-xs text-slate-400 pt-0.5 shrink-0">
                      {row.time}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 truncate">
                        {row.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{row.detail}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#2563EB] shrink-0 sm:text-right pl-12 sm:pl-0">
                    {row.result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clean Unboxed Supported Sectors Strip */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <span className="font-semibold text-slate-800 shrink-0">지원 업종</span>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {ALL_SECTORS.map((sector, idx) => (
              <span key={sector} className="inline-flex items-center gap-2">
                <span>{sector}</span>
                {idx < ALL_SECTORS.length - 1 && (
                  <span aria-hidden="true" className="text-slate-300">·</span>
                )}
              </span>
            ))}
            <span className="text-slate-400">외 모든 개인사업자</span>
          </div>
        </div>
      </div>
    </section>
  );
}
