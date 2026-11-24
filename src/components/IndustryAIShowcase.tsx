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
    headline: '상담 접수부터 서류 요약·일정 안내까지 자동화',
    points: [
      '의뢰인 초기 상담 질문 자동 정리 및 브리핑',
      '계약서·증빙·기장 서류 자동 분류 및 누락 확인',
      '신고 기한·만기 일정 고객별 자동 리마인드',
    ],
    uiTitle: '전문직 AI 업무 보드',
    uiSubtitle: '세무·법무·부동산 자동 처리 현황',
    uiMetricLabel: '오늘 자동 처리',
    uiMetricValue: '38건',
    rows: [
      { time: '09:15', title: '부가세 증빙 서류 14건', detail: '누락 영수증 2건 자동 안내 발송', result: '분류 완료' },
      { time: '10:40', title: '임대차 계약 갱신 고객', detail: '만기 60일 전 알림톡 예약 발송', result: '발송 예정' },
      { time: '13:20', title: '신규 법률 상담 문의', detail: '핵심 쟁점 3줄 요약 및 일정 제안', result: '접수 완료' },
    ],
  },
  clinic_edu: {
    id: 'clinic_edu',
    tabLabel: '병원 · 약국 · 학원',
    sectors: ['병원', '약국', '학원'],
    headline: '예약·출결·안내 전화 부담을 줄이는 전용 AI',
    points: [
      '진료·수업 예약 및 변경 카톡 24시간 자동 응답',
      '방문 전 안내·복약 지도·출결 알림 자동 발송',
      '단골 환자·학부모 상담 이력 한눈에 정리',
    ],
    uiTitle: '예약 · 안내 자동화',
    uiSubtitle: '병원·약국·학원 통합 관리',
    uiMetricLabel: '노쇼 감소율',
    uiMetricValue: '-42%',
    rows: [
      { time: '11:00', title: '치과 정기검진 리마인드', detail: '6개월 도래 환자 24명 자동 안내', result: '예약 11건' },
      { time: '14:30', title: '학원 등원·과제 리포트', detail: '학부모 카톡 개별 학습 요약 발송', result: '발송 완료' },
      { time: '16:05', title: '약국 복약 순응도 알림', detail: '처방 3일차 복용 확인 메시지', result: '확인 완료' },
    ],
  },
  fnb: {
    id: 'fnb',
    tabLabel: '카페 · 식당 · 베이커리',
    sectors: ['커피숍', '카페', '식당', '베이커리'],
    headline: '주문·발주·리뷰 응대를 한 번에 해결하는 매장 AI',
    points: [
      '요일·날씨별 판매 예측으로 원재료 발주량 제안',
      '단체 주문·예약·주차 문의 24시간 자동 응대',
      '네이버·배달앱 리뷰 맞춤 답글 초안 즉시 생성',
    ],
    uiTitle: '매장 운영 AI 어시스턴트',
    uiSubtitle: '카페·식당·베이커리 일일 브리핑',
    uiMetricLabel: '발주 시간 절감',
    uiMetricValue: '일 50분',
    rows: [
      { time: '07:30', title: '베이커리 생지·우유 발주', detail: '주말 예상 수요 +18% 반영 추천', result: '발주 확정' },
      { time: '12:15', title: '저녁 8인 단체 예약 문의', detail: '잔여 좌석 확인 후 자동 예약 확정', result: '예약 완료' },
      { time: '19:40', title: '신규 리뷰 6건 응대', detail: '매장 톤 맞춘 감사 답글 초안 작성', result: '승인 대기' },
    ],
  },
  retail: {
    id: 'retail',
    tabLabel: '동네 매장 · 판매점',
    sectors: ['휴대폰 판매점', '세탁소', '과일가게', '정육점'],
    headline: '단골 관리와 재고·진행 안내를 자동으로',
    points: [
      '세탁 완료·신선 입고·개통 진행 현황 자동 알림',
      '요금제 비교·부위별 추천 등 고객 맞춤 견적 안내',
      '재구매 주기 맞춘 단골 고객 할인·입고 메시지',
    ],
    uiTitle: '단골 · 판매 자동 관리',
    uiSubtitle: '판매점·세탁소·신선매장 전용',
    uiMetricLabel: '재방문 응답률',
    uiMetricValue: '3.2배',
    rows: [
      { time: '10:00', title: '과일·정육 당일 신선 입고', detail: '단골 120명 예약 주문 링크 발송', result: '주문 34건' },
      { time: '15:10', title: '세탁소 완성품 수령 안내', detail: '보관 위치·결제 금액 알림톡 발송', result: '전송 완료' },
      { time: '17:45', title: '휴대폰 약정 만료 고객', detail: '맞춤 요금제·지원금 비교표 전송', result: '상담 예약' },
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
            <div className="flex items-center gap-2 text-xs font-medium text-[#2563EB] mb-2.5">
              <span>업종별 맞춤 솔루션</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold tracking-tight text-slate-900 leading-tight text-balance">
              업종마다 다른 업무, 전용 AI로 해결합니다
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
