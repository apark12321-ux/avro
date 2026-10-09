import { useState, useRef, useEffect, type PointerEvent } from 'react';
import { 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  Check, 
  ZoomIn, 
  Split, 
  SlidersHorizontal,
  FileCode,
  FileCheck,
  Maximize2,
  X
} from 'lucide-react';

interface SampleBeforeAfterViewerProps {
  onOpenSampleModal?: () => void;
}

export default function SampleBeforeAfterViewer({ onOpenSampleModal }: SampleBeforeAfterViewerProps) {
  const [activeSample, setActiveSample] = useState<0 | 1 | 2 | 3>(0);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const [sliderPos, setSliderPos] = useState(52); // percentage 0 - 100
  const [copiedCode, setCopiedCode] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const samples = [
    {
      id: 'square-geometry',
      category: '교육 · 출판 기하',
      title: '정사각형과 합동인 삼각형의 각도 구하기',
      filename: '실제원고_스크린샷_131714_131742',
      badge: '선분 기호 & 각도 수식 & 정사각형 벡터 작도',
      hwpScript: 'overline {BE} = overline {CF} # angle BAE = 25^circ # angle BFC',
      beforeSummary: {
        tag: '접수 원고 (스캔본 / 캡처)',
        issues: [
          '스캔 노이즈 및 바탕 종이 얼룩 (#F3F2EE)',
          '수식 기호(윗줄 overline, 각도 기호) 비트맵 뭉개짐',
          '정사각형 모서리 및 선분이 저해상도로 인쇄 시 계단 현상',
          '한글(HWP) 재편집 및 텍스트 수정 완전 불가'
        ]
      },
      afterSummary: {
        tag: '에이브로 납품본 (정품 HWP)',
        features: [
          '한글 표준 수식 코드(overline, angle) 1:1 완결 입력',
          '300dpi 출판 인쇄용 벡터 작도 (모서리·원호 선명 복원)',
          '순수 화이트(#FFFFFF) 배경 및 학원 규격 바탕체 조판',
          'HWP 파일 납품으로 언제든 문항 수정 및 문항번호 재배치 가능'
        ]
      },
      problemNumber: '08.',
      questionText: '그림과 같이 정사각형 ABCD에서 BE = CF이고 ∠BAE = 25°일 때, ∠BFC의 크기는?',
      choices: ['① 60°', '② 65°', '③ 70°', '④ 75°', '⑤ 80°']
    },
    {
      id: 'triangle-bisector',
      category: '교육 · 출판 기하',
      title: '직각삼각형과 각의 이등분선 및 수선 길이',
      filename: '실제원고_스크린샷_131851_132005',
      badge: '각의 이등분선 점(••) & 직각(∟) 기호 & 치수선 복원',
      hwpScript: 'angle B = 90^circ # overline {AB} = 8 rm cm # overline {BC} = 6 rm cm # overline {CD}',
      beforeSummary: {
        tag: '접수 원고 (복사본 캡처)',
        issues: [
          '반복 복사로 인한 선 굵기 불균일 및 먹번짐 노이즈',
          '각의 이등분선 동일각 표기(••) 흐려져 기호 식별 곤란',
          '수선의 발 직각 기호(∟) 및 치수 단위 뭉개짐',
          '인쇄 시 흐릿하여 학생 오답 유발 및 재사용 불가'
        ]
      },
      afterSummary: {
        tag: '에이브로 납품본 (정품 HWP)',
        features: [
          '직각삼각형 및 수선 DE를 300dpi 벡터로 완벽 작도',
          '각의 이등분선 표기 점(••)과 직각 기호(∟) 정밀 배치',
          '한글 표준 11pt 본문 서체 및 규격 배점·정답 란 구성',
          '오탈자 검수 및 학원 2단 템플릿에 맞춤 레이아웃 적용'
        ]
      },
      problemNumber: '14.',
      questionText: '그림과 같이 ∠B = 90°인 직각삼각형 ABC에서 ∠A의 이등분선이 변 BC와 만나는 점을 D라 하고, 점 D에서 변 AC에 내린 수선의 발을 E라 하자. 선분 CD의 길이는?',
      choices: ['① 2cm', '② 3cm', '③ 7/2cm', '④ 4cm', '⑤ 9/2cm']
    },
    {
      id: 'public-ordinance',
      category: '공공 · 행정 서식',
      title: '지자체 조례·규정집 스캔 표 ➔ 정부 표준 공문서 복원',
      filename: '공공행정_조례규정집_스캔표_전후비교',
      badge: '공문서 표준 서식 & 복합 표 셀 병합 & 5단계 항목 구분',
      hwpScript: '표 1. [자치법규 제32조] 공공시설물 사용료 감면 및 반환 기준 (제3조 관련)',
      beforeSummary: {
        tag: '스캔 원고 (자치법규집 캡처)',
        issues: [
          '다단 표의 세로 구분선 분절 및 텍스트 잘림 현상',
          '조례 본문의 5단계 항목 구분(1. 가. 1)) 들여쓰기 붕괴',
          '스캐너 그림자로 배경 얼룩 발생 및 전자결재 등록 불가'
        ]
      },
      afterSummary: {
        tag: '에이브로 납품본 (정품 HWP)',
        features: [
          '행정안전부 공문서 서식 편람 1:1 표준 규격 준수',
          '표 테두리·셀 배경 음영(10%) 및 정렬 한글 표준화',
          '온-나라 시스템 및 지자체 전자결재 즉시 호환 완결'
        ]
      },
      problemNumber: '제12조.',
      questionText: '공공시설물 이용료의 감면 및 반환 기준은 다음 [별표 1]과 같으며, 재난·재변 시 전액을 반환한다.',
      choices: ['1. 국가유공자: 100% 감면', '2. 관내 거주자: 30% 감면', '3. 취소 3일전: 80% 반환', '4. 당일 취소: 50% 반환']
    },
    {
      id: 'engineering-specs',
      category: '연구 · 엔지니어링',
      title: '구조계산서 허용응력식 & 설계 도판 복원',
      filename: '엔지니어링_구조계산서_수식도판_전후비교',
      badge: '그리스 문자(σ, τ) & 적분·분수식 & 300dpi 도판',
      hwpScript: 'sigma _{max} = {M cdot y} over {I _{x}} le sigma _{all} # tau = {V cdot Q} over {I cdot b}',
      beforeSummary: {
        tag: '기술 원고 (구조계산서 캡처)',
        issues: [
          '그리스 문자(σ, τ, Δ) 및 위/아래 첨자 폰트 전면 깨짐',
          '단면 2차 모멘트(Ix) 분수식 분모·분자 선 분절',
          '도판 치수선 및 지시선의 저해상도 뭉개짐'
        ]
      },
      afterSummary: {
        tag: '에이브로 납품본 (정품 HWP)',
        features: [
          '한글 수식 편집기 공식 명령어(sigma, tau, over) 100% 입력',
          '단면도 및 응력 분포도 300dpi 고화질 벡터화 리터칭',
          '토목·건축 시방서 규격 폰트 및 수치 정밀 검수 완결'
        ]
      },
      problemNumber: '식 (3-2).',
      questionText: '단면의 최대 휨응력 σ_max는 허용휨응력 σ_all 이하이어야 하며, 전단응력 τ는 전단면에서 안전성을 만족해야 한다.',
      choices: ['① σ_max = M·y / Ix', '② τ = V·Q / (I·b)', '③ δ_max = 5qL⁴/(384EI)', '④ P_cr = π²EI / (KL)²']
    }
  ];

  const current = samples[activeSample];

  // Drag handler for slider
  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clampedPercent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(clampedPercent);
  };

  const copyHwpScript = () => {
    navigator.clipboard.writeText(current.hwpScript);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Render the diagram for Sample 1 (Square)
  const renderSquareDiagram = (isBefore: boolean) => {
    return (
      <div className={`relative w-44 h-44 sm:w-52 sm:h-52 mx-auto flex items-center justify-center p-2 rounded-lg ${
        isBefore ? 'bg-[#F2F1EA] border border-amber-900/10' : 'bg-white border border-slate-200 shadow-xs'
      }`}>
        <svg 
          viewBox="0 0 260 260" 
          className={`w-full h-full ${isBefore ? 'filter blur-[0.45px] contrast-[1.25]' : ''}`}
        >
          {isBefore && (
            <defs>
              <filter id="scanNoise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0" />
                <feBlend mode="multiply" in="SourceGraphic" />
              </filter>
            </defs>
          )}

          {/* Square ABCD */}
          <rect
            x="35"
            y="35"
            width="180"
            height="180"
            fill={isBefore ? '#F4F3ED' : '#FFFFFF'}
            stroke={isBefore ? '#475569' : '#0F172A'}
            strokeWidth={isBefore ? '2.4' : '1.8'}
            strokeLinecap="round"
            strokeLinejoin="miter"
          />

          {/* Points: A(35,35), B(35,215), C(215,215), D(215,35) */}
          {/* E on BC: (100, 215) -> BE = 65 */}
          {/* F on CD: (215, 150) -> CF = 65 */}
          {/* Line AE */}
          <line
            x1="35"
            y1="35"
            x2="100"
            y2="215"
            stroke={isBefore ? '#475569' : '#0F172A'}
            strokeWidth={isBefore ? '2.2' : '1.6'}
          />

          {/* Line BF */}
          <line
            x1="35"
            y1="215"
            x2="215"
            y2="150"
            stroke={isBefore ? '#475569' : '#0F172A'}
            strokeWidth={isBefore ? '2.2' : '1.6'}
          />

          {/* Equal tick marks: on BE (x=67.5, y=215) and on CF (x=215, y=182.5) */}
          <line
            x1="67.5"
            y1="208"
            x2="67.5"
            y2="222"
            stroke={isBefore ? '#334155' : '#0066EE'}
            strokeWidth={isBefore ? '2' : '1.8'}
          />
          <line
            x1="208"
            y1="182.5"
            x2="222"
            y2="182.5"
            stroke={isBefore ? '#334155' : '#0066EE'}
            strokeWidth={isBefore ? '2' : '1.8'}
          />

          {/* Angle arc for 25 deg at A: between AB (down) and AE */}
          <path
            d="M 35,75 A 40,40 0 0,0 48,72"
            fill="none"
            stroke={isBefore ? '#64748B' : '#E11D48'}
            strokeWidth={isBefore ? '1.8' : '1.5'}
          />
          <text
            x="48"
            y="94"
            fill={isBefore ? '#475569' : '#E11D48'}
            fontSize={isBefore ? '12' : '11.5'}
            fontWeight="bold"
            fontFamily="serif"
          >
            25°
          </text>

          {/* Labels A, B, C, D, E, F */}
          <text x="18" y="32" fill="#0F172A" fontSize="14" fontStyle="italic" fontFamily="serif" fontWeight="bold">A</text>
          <text x="18" y="232" fill="#0F172A" fontSize="14" fontStyle="italic" fontFamily="serif" fontWeight="bold">B</text>
          <text x="222" y="232" fill="#0F172A" fontSize="14" fontStyle="italic" fontFamily="serif" fontWeight="bold">C</text>
          <text x="222" y="32" fill="#0F172A" fontSize="14" fontStyle="italic" fontFamily="serif" fontWeight="bold">D</text>
          <text x="96" y="235" fill="#0F172A" fontSize="13" fontStyle="italic" fontFamily="serif" fontWeight="bold">E</text>
          <text x="225" y="154" fill="#0F172A" fontSize="13" fontStyle="italic" fontFamily="serif" fontWeight="bold">F</text>
        </svg>
      </div>
    );
  };

  // Render the diagram for Sample 2 (Triangle with angle bisector)
  const renderTriangleDiagram = (isBefore: boolean) => {
    return (
      <div className={`relative w-44 h-44 sm:w-52 sm:h-52 mx-auto flex items-center justify-center p-2 rounded-lg ${
        isBefore ? 'bg-[#F2F1EA] border border-amber-900/10' : 'bg-white border border-slate-200 shadow-xs'
      }`}>
        <svg 
          viewBox="0 0 260 260" 
          className={`w-full h-full ${isBefore ? 'filter blur-[0.45px] contrast-[1.25]' : ''}`}
        >
          {/* Right triangle: B=(40,210) right angle, A=(40,40), C=(220,210) */}
          {/* Triangle ABC */}
          <polygon
            points="40,40 40,210 220,210"
            fill={isBefore ? '#F4F3ED' : '#FFFFFF'}
            stroke={isBefore ? '#475569' : '#0F172A'}
            strokeWidth={isBefore ? '2.4' : '1.8'}
            strokeLinejoin="miter"
          />

          {/* Right angle symbol at B */}
          <polyline
            points="40,195 55,195 55,210"
            fill="none"
            stroke={isBefore ? '#475569' : '#0F172A'}
            strokeWidth="1.6"
          />

          {/* Angle bisector AD: D on BC. Let D = (115, 210) */}
          <line
            x1="40"
            y1="40"
            x2="115"
            y2="210"
            stroke={isBefore ? '#475569' : '#0F172A'}
            strokeWidth={isBefore ? '2.0' : '1.6'}
          />

          {/* Equal angle dots at vertex A */}
          <circle cx="48" cy="72" r={isBefore ? '2.5' : '2'} fill={isBefore ? '#475569' : '#E11D48'} />
          <circle cx="58" cy="68" r={isBefore ? '2.5' : '2'} fill={isBefore ? '#475569' : '#E11D48'} />

          {/* Perpendicular DE to AC: */}
          {/* Line AC is from (40,40) to (220,210). Vector (180, 170). */}
          {/* Perpendicular from D(115,210) meets AC at approx (140, 134) */}
          <line
            x1="115"
            y1="210"
            x2="140"
            y2="134"
            stroke={isBefore ? '#475569' : '#0066EE'}
            strokeWidth={isBefore ? '2.0' : '1.6'}
            strokeDasharray={isBefore ? 'none' : 'none'}
          />

          {/* Right angle symbol at E(140, 134) */}
          <polyline
            points="132,142 124,134 132,126"
            fill="none"
            stroke={isBefore ? '#475569' : '#0066EE'}
            strokeWidth="1.5"
          />

          {/* Labels A, B, C, D, E */}
          <text x="22" y="38" fill="#0F172A" fontSize="14" fontStyle="italic" fontFamily="serif" fontWeight="bold">A</text>
          <text x="22" y="222" fill="#0F172A" fontSize="14" fontStyle="italic" fontFamily="serif" fontWeight="bold">B</text>
          <text x="226" y="220" fill="#0F172A" fontSize="14" fontStyle="italic" fontFamily="serif" fontWeight="bold">C</text>
          <text x="110" y="230" fill="#0F172A" fontSize="13" fontStyle="italic" fontFamily="serif" fontWeight="bold">D</text>
          <text x="148" y="132" fill="#0F172A" fontSize="13" fontStyle="italic" fontFamily="serif" fontWeight="bold">E</text>

          {/* Dimension indicators */}
          <text x="18" y="130" fill={isBefore ? '#64748B' : '#475569'} fontSize="11" fontFamily="serif">8cm</text>
          <text x="120" y="80" fill={isBefore ? '#64748B' : '#475569'} fontSize="11" fontFamily="serif">10cm</text>
        </svg>
      </div>
    );
  };

  // Render diagram/table for Sample 3 (Public Administration Table)
  const renderPublicTable = (isBefore: boolean) => {
    return (
      <div className={`relative w-full sm:w-56 p-2 rounded-lg text-[10px] font-sans ${
        isBefore ? 'bg-[#F2F1EA] border border-amber-900/10 text-slate-700 filter blur-[0.4px]' : 'bg-white border border-slate-300 text-slate-900 shadow-xs'
      }`}>
        <div className="font-bold text-center mb-1 text-[11px] pb-1 border-b border-slate-300">
          [별표 1] 시설물 감면 기준표
        </div>
        <table className="w-full border-collapse border border-slate-400 text-center">
          <thead>
            <tr className={isBefore ? 'bg-slate-200/60' : 'bg-slate-100'}>
              <th className="border border-slate-400 p-1 font-bold">대상 구분</th>
              <th className="border border-slate-400 p-1 font-bold">감면율</th>
              <th className="border border-slate-400 p-1 font-bold">증빙서류</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-400 p-1 font-medium">국가유공자</td>
              <td className="border border-slate-400 p-1 font-bold text-blue-700">100%</td>
              <td className="border border-slate-400 p-1 text-[9px]">유공자증</td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-1 font-medium">관내 주민</td>
              <td className="border border-slate-400 p-1 font-bold text-blue-700">30%</td>
              <td className="border border-slate-400 p-1 text-[9px]">신분증</td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-1 font-medium">청소년·다자녀</td>
              <td className="border border-slate-400 p-1 font-bold text-blue-700">50%</td>
              <td className="border border-slate-400 p-1 text-[9px]">주민등록등본</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-1.5 text-[9px] text-slate-500 text-right">
          ※ 행정안전부 공문서 표 규격 적용
        </div>
      </div>
    );
  };

  // Render diagram for Sample 4 (Engineering Beam & Moment Diagram)
  const renderEngineeringDiagram = (isBefore: boolean) => {
    return (
      <div className={`relative w-44 h-44 sm:w-52 sm:h-52 mx-auto flex items-center justify-center p-2 rounded-lg ${
        isBefore ? 'bg-[#F2F1EA] border border-amber-900/10' : 'bg-white border border-slate-200 shadow-xs'
      }`}>
        <svg 
          viewBox="0 0 260 260" 
          className={`w-full h-full ${isBefore ? 'filter blur-[0.45px] contrast-[1.25]' : ''}`}
        >
          {/* I-Beam Cross Section */}
          {/* Top Flange */}
          <rect x="50" y="40" width="160" height="24" fill={isBefore ? '#E2E8F0' : '#F1F5F9'} stroke={isBefore ? '#475569' : '#0F172A'} strokeWidth="1.8" />
          {/* Web */}
          <rect x="118" y="64" width="24" height="110" fill={isBefore ? '#E2E8F0' : '#F1F5F9'} stroke={isBefore ? '#475569' : '#0F172A'} strokeWidth="1.8" />
          {/* Bottom Flange */}
          <rect x="50" y="174" width="160" height="24" fill={isBefore ? '#E2E8F0' : '#F1F5F9'} stroke={isBefore ? '#475569' : '#0F172A'} strokeWidth="1.8" />

          {/* Neutral Axis (중립축 N.A) line */}
          <line x1="30" y1="119" x2="230" y2="119" stroke={isBefore ? '#94A3B8' : '#2563EB'} strokeWidth="1.2" strokeDasharray="6,4" />
          <text x="234" y="122" fill={isBefore ? '#64748B' : '#2563EB'} fontSize="10" fontStyle="italic" fontWeight="bold">N.A</text>

          {/* Dimensions */}
          {/* Flange width b = 160 */}
          <line x1="50" y1="28" x2="210" y2="28" stroke="#475569" strokeWidth="1.0" />
          <polyline points="54,25 50,28 54,31" fill="none" stroke="#475569" strokeWidth="1.0" />
          <polyline points="206,25 210,28 206,31" fill="none" stroke="#475569" strokeWidth="1.0" />
          <text x="124" y="24" fill="#0F172A" fontSize="10" fontFamily="serif" textAnchor="middle">b = 200mm</text>

          {/* Total Height h = 200 */}
          <line x1="35" y1="40" x2="35" y2="198" stroke="#475569" strokeWidth="1.0" />
          <polyline points="32,44 35,40 38,44" fill="none" stroke="#475569" strokeWidth="1.0" />
          <polyline points="32,194 35,198 38,194" fill="none" stroke="#475569" strokeWidth="1.0" />
          <text x="18" y="123" fill="#0F172A" fontSize="10" fontFamily="serif">h</text>

          {/* Stress profile on right */}
          <polygon points="180,60 215,60 180,119" fill={isBefore ? '#CBD5E1' : '#E0F2FE'} stroke="#0284C7" strokeWidth="1.2" />
          <polygon points="180,119 145,178 180,178" fill={isBefore ? '#CBD5E1' : '#FEE2E2'} stroke="#DC2626" strokeWidth="1.2" />
          <text x="195" y="55" fill="#0284C7" fontSize="9" fontWeight="bold">σ_c</text>
          <text x="135" y="195" fill="#DC2626" fontSize="9" fontWeight="bold">σ_t</text>
        </svg>
      </div>
    );
  };

  // Render Exam Card Content
  const renderExamProblem = (isBefore: boolean) => {
    return (
      <div className={`p-4 sm:p-5 h-full flex flex-col justify-between ${
        isBefore ? 'bg-[#F2F1EA] text-slate-800' : 'bg-white text-slate-900'
      }`}>
        {/* Top Header line of card */}
        <div className="flex items-center justify-between border-b pb-2 mb-3 text-xs font-serif border-slate-300">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
              isBefore 
                ? 'bg-amber-950/20 text-amber-900 border border-amber-800/20' 
                : 'bg-blue-50 text-[#0066EE] border border-blue-200'
            }`}>
              {isBefore ? '접수 원고 (스캔본)' : '에이브로 납품본 (정품 HWP)'}
            </span>
            <span className="text-slate-500 font-mono text-[11px] hidden sm:inline">
              {isBefore ? '해상도 저하 · 텍스트 수정 불가' : '300dpi 벡터 · 100% 한글 수식·서식 코드'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            {isBefore ? '72dpi Raster' : '300dpi Vector / HWP'}
          </span>
        </div>

        {/* Question content */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start justify-between">
            {/* Left: Text & Equations */}
            <div className="flex-1 space-y-2">
              <div className="flex items-start gap-1.5 leading-relaxed font-serif">
                <span className={`font-bold text-base ${isBefore ? 'text-slate-700' : 'text-slate-950'}`}>
                  {current.problemNumber}
                </span>
                <p className={`text-xs sm:text-[13px] leading-relaxed ${
                  isBefore ? 'text-slate-700 filter blur-[0.3px]' : 'text-slate-900'
                }`}>
                  {activeSample === 0 && (
                    <>
                      그림과 같이 정사각형 <span className="font-serif italic font-semibold">ABCD</span>에서{' '}
                      <span className={`inline-block px-1 font-serif italic ${
                        isBefore ? 'border-t-2 border-slate-500' : 'border-t border-slate-900'
                      }`}>
                        BE
                      </span> ={' '}
                      <span className={`inline-block px-1 font-serif italic ${
                        isBefore ? 'border-t-2 border-slate-500' : 'border-t border-slate-900'
                      }`}>
                        CF
                      </span>이고{' '}
                      <span className="font-serif italic">∠BAE</span> = 25°일 때,{' '}
                      <span className="font-serif italic font-semibold">∠BFC</span>의 크기는?{' '}
                      <span className="text-[11px] text-slate-500 font-sans">[4점]</span>
                    </>
                  )}
                  {activeSample === 1 && (
                    <>
                      그림과 같이 <span className="font-serif italic font-semibold">∠B = 90°</span>인 직각삼각형{' '}
                      <span className="font-serif italic">ABC</span>에서 <span className="font-serif italic">∠A</span>의 이등분선이 변{' '}
                      <span className="font-serif italic">BC</span>와 만나는 점을 <span className="font-serif italic">D</span>라 하고, 점{' '}
                      <span className="font-serif italic">D</span>에서 변 <span className="font-serif italic">AC</span>에 내린 수선의 발을{' '}
                      <span className="font-serif italic font-semibold">E</span>라 하자.{' '}
                      <span className="font-serif italic">AB = 8cm, AC = 10cm</span>일 때 선분 <span className="font-serif italic font-bold">CD</span>의 길이는?{' '}
                      <span className="text-[11px] text-slate-500 font-sans">[4점]</span>
                    </>
                  )}
                  {activeSample === 2 && (
                    <>
                      지방자치단체 공공시설물의 감면 및 반환 기준은 다음 [별표 1]과 같으며, 관계 법령 개정에 따른 부속 규칙은 행정안전부 공문서 편람 규격을 엄격히 준용한다.
                    </>
                  )}
                  {activeSample === 3 && (
                    <>
                      단면의 최대 휨응력 <span className="font-serif italic font-semibold">σ_max = (M·y)/Ix</span>는 재료의 허용응력 <span className="font-serif italic">σ_all</span>을 초과하지 않아야 하며, 플랜지 두께에 따른 전단응력 <span className="font-serif italic font-semibold">τ</span>의 연속성을 보장한다.
                    </>
                  )}
                </p>
              </div>

              {/* Multiple Choices / Sub items */}
              <div className={`grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px] sm:text-xs font-serif pt-1 pl-3 text-slate-800 ${
                isBefore ? 'filter blur-[0.25px] text-slate-600' : ''
              }`}>
                {current.choices.map((choice, i) => (
                  <div key={i} className="font-medium bg-black/[0.03] p-1 rounded">{choice}</div>
                ))}
              </div>
            </div>

            {/* Right: Graphic Diagram or Table */}
            <div className="shrink-0 w-full sm:w-auto">
              {activeSample === 0 && renderSquareDiagram(isBefore)}
              {activeSample === 1 && renderTriangleDiagram(isBefore)}
              {activeSample === 2 && renderPublicTable(isBefore)}
              {activeSample === 3 && renderEngineeringDiagram(isBefore)}
            </div>
          </div>
        </div>

        {/* Footer info box */}
        <div className={`mt-3 p-2 rounded text-[11px] font-sans flex items-center justify-between ${
          isBefore 
            ? 'bg-amber-900/10 text-amber-900 border border-amber-900/20' 
            : 'bg-blue-50/70 text-[#0066EE] border border-blue-200/80'
        }`}>
          <div className="flex items-center gap-1.5 truncate">
            {isBefore ? (
              <>
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span className="truncate">글자·수식·표 깨짐 발생, 복사 및 수정 불가 상태</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066EE] shrink-0" />
                <span className="truncate font-semibold">한글 표준 수식 코드 &amp; 규격 서식 완결 (자유 수정 보장)</span>
              </>
            )}
          </div>
          <span className="text-[10px] font-mono shrink-0 ml-2">
            {isBefore ? '수정 불가' : '정품 HWP'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full text-left">
      
      {/* Sample Tabs: User's 2 Real Attached Cases */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 w-full sm:w-auto">
          {samples.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveSample(idx as 0 | 1 | 2 | 3)}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSample === idx
                  ? 'bg-[#0066EE] text-white shadow-md shadow-blue-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 text-[10px] flex items-center justify-center font-mono shrink-0">
                {idx + 1}
              </span>
              <span className="truncate">
                {idx === 0 && '정사각형 각도 (실제원고)'}
                {idx === 1 && '직각삼각형 수선 (실제원고)'}
                {idx === 2 && '공공 조례·규정 표'}
                {idx === 3 && '구조계산서 수식'}
              </span>
            </button>
          ))}
        </div>

        {/* View mode toggle: Slider vs Side-by-side */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto bg-white/5 border border-white/10 p-1 rounded-xl text-xs">
          <button
            onClick={() => setViewMode('slider')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'slider'
                ? 'bg-sky-500/20 text-[#38BDF8] border border-sky-500/40'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>슬라이더 전·후 비교</span>
          </button>
          <button
            onClick={() => setViewMode('sideBySide')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'sideBySide'
                ? 'bg-sky-500/20 text-[#38BDF8] border border-sky-500/40'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Split className="w-3.5 h-3.5" />
            <span>1:1 나란히 비교</span>
          </button>
        </div>
      </div>

      {/* Main Display Container */}
      <div className="relative rounded-2xl border border-white/15 bg-[#091024] p-3 sm:p-5 shadow-2xl overflow-hidden mb-6">
        
        {/* Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-[#38BDF8] border border-blue-500/30">
                {current.category}
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">
                {current.filename}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {current.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomOpen(true)}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
              <span>확대 검수</span>
            </button>
          </div>
        </div>

        {/* Display Mode 1: Interactive Slider */}
        {viewMode === 'slider' && (
          <div 
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerUp}
            className="relative w-full rounded-xl overflow-hidden select-none border border-slate-700 bg-slate-900 shadow-inner cursor-ew-resize min-h-[380px] sm:min-h-[340px]"
          >
            {/* Background Layer: AFTER (Right side revealed when slider moves left) */}
            <div className="absolute inset-0 w-full h-full">
              {renderExamProblem(false)}
            </div>

            {/* Foreground Layer (Clipped): BEFORE (Left side) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden border-r-2 border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.5)]"
              style={{ width: `${sliderPos}%` }}
            >
              <div 
                className="absolute inset-0 h-full"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              >
                {renderExamProblem(true)}
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#38BDF8] pointer-events-none flex items-center justify-center -translate-x-1/2 z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-[#0066EE] border-2 border-white shadow-xl flex items-center justify-center text-white">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Floating Tags at corners */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-amber-300 font-bold text-[11px] border border-amber-500/40 shadow-md">
                ◀ 원본 스캔본 (BEFORE)
              </span>
            </div>
            <div className="absolute top-3 right-3 z-10 pointer-events-none">
              <span className="px-2.5 py-1 rounded bg-[#0066EE]/90 backdrop-blur-md text-white font-bold text-[11px] border border-white/20 shadow-md">
                에이브로 정품 HWP (AFTER) ▶
              </span>
            </div>

            {/* Bottom Slider Instruction */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] text-zinc-300 border border-white/10 hidden sm:block">
              좌우로 드래그하여 스캔본 대비 HWP 조판 품질을 확인하세요
            </div>
          </div>
        )}

        {/* Display Mode 2: Side-by-Side Dual View */}
        {viewMode === 'sideBySide' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Before Column */}
            <div className="rounded-xl border border-amber-500/40 overflow-hidden shadow-lg flex flex-col">
              <div className="bg-amber-950/40 border-b border-amber-500/30 px-3.5 py-2 flex items-center justify-between text-xs font-bold text-amber-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>BEFORE: 고객사 접수 원고</span>
                </div>
                <span className="text-[10px] text-amber-200/80 font-normal">비트맵 캡처 상태</span>
              </div>
              <div className="flex-1">
                {renderExamProblem(true)}
              </div>
            </div>

            {/* After Column */}
            <div className="rounded-xl border border-blue-500/40 overflow-hidden shadow-lg flex flex-col">
              <div className="bg-blue-950/40 border-b border-blue-500/30 px-3.5 py-2 flex items-center justify-between text-xs font-bold text-[#38BDF8]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>AFTER: 에이브로 조판 완결본</span>
                </div>
                <span className="text-[10px] text-blue-200/80 font-normal">정품 HWP 파일 납품</span>
              </div>
              <div className="flex-1">
                {renderExamProblem(false)}
              </div>
            </div>
          </div>
        )}

        {/* Technical Detail Checklist below the sample */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
          {/* Before points */}
          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20">
            <span className="text-[11px] font-bold text-amber-400 block mb-2 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>접수 원고 문제점</span>
            </span>
            <ul className="space-y-1.5 text-zinc-300 text-[11px]">
              {current.beforeSummary.issues.map((iss, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-500 shrink-0">•</span>
                  <span>{iss}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After points */}
          <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/30">
            <span className="text-[11px] font-bold text-[#38BDF8] block mb-2 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>에이브로 조판 해결 결과</span>
            </span>
            <ul className="space-y-1.5 text-zinc-200 text-[11px]">
              {current.afterSummary.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* HWP Formula Script Inspector Bar */}
        <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 font-mono text-[10px] font-bold shrink-0 border border-blue-500/30">
              HWP 수식 코드
            </span>
            <code className="text-zinc-300 font-mono text-[11px] truncate bg-black/40 px-2 py-1 rounded border border-white/5">
              {current.hwpScript}
            </code>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              onClick={copyHwpScript}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">복사됨!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-300" />
                  <span>수식 복사</span>
                </>
              )}
            </button>

            {onOpenSampleModal && (
              <button
                onClick={onOpenSampleModal}
                className="px-3.5 py-1.5 rounded-lg bg-[#0066EE] hover:bg-[#0052cc] text-white font-bold text-[11px] flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>이 퀄리티로 3문항 무료 테스트</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Full Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#0D1527] border border-blue-500/30 rounded-2xl p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base">
                  정밀 확대 검수: {current.title}
                </span>
                <span className="text-xs text-sky-400 font-mono">
                  [HWP 표준 수식 &amp; 벡터 300dpi]
                </span>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-1">
              <div className="rounded-xl border border-amber-500/40 overflow-hidden">
                <div className="bg-amber-950/60 p-2 text-xs font-bold text-amber-300 border-b border-amber-500/30">
                  접수 원고 (저해상도 스캔)
                </div>
                {renderExamProblem(true)}
              </div>
              <div className="rounded-xl border border-blue-500/40 overflow-hidden">
                <div className="bg-blue-950/60 p-2 text-xs font-bold text-sky-300 border-b border-blue-500/30">
                  에이브로 완결본 (출판 규격 HWP)
                </div>
                {renderExamProblem(false)}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsZoomOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
