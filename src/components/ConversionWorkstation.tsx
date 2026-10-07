import { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  Layers,
  Check,
  ShieldCheck,
  FileCheck,
  Image,
  Type,
  LayoutGrid
} from 'lucide-react';

export default function ConversionWorkstation() {
  const [activeTab, setActiveTab] = useState<'overview' | 'cases' | 'specs'>('overview');
  const [selectedCase, setSelectedCase] = useState<number>(0);

  // 4 Core Cases explained purely in words (no raw question text dumps)
  const cases = [
    {
      id: 1,
      title: '입체도형 & 교점·교선 문항',
      category: '기하 / 입체도형',
      before: {
        tag: '접수 원고 문제점',
        summary: '스캐너 왜곡 및 책 접힘 그림자로 인한 도판 식별 곤란',
        points: [
          '책 안쪽 접힘으로 인해 입체도형 모서리와 보이지 않는 선(점선)이 심하게 왜곡됨',
          '저해상도 비트맵 스캔으로 교점·교선 기호(a, b) 및 본문 서체가 흐릿하게 뭉개짐',
          '기존 교재의 여백과 폰트가 학원 규격과 맞지 않아 그대로 재배포 불가능'
        ]
      },
      after: {
        tag: '전문 조판 완결 처리',
        summary: '300dpi급 선명한 투시도 복원 및 한글 표준 수식 1:1 조판',
        points: [
          '비싼 재작도 비용 없이, 제공받은 도판의 점선과 입체 면을 선명하게 고화질 리터칭',
          '수식 기호(a, b, a+b)를 한글 공식 수식 편집기로 표준 입력하여 자유로운 수정 가능',
          '학원 전용 시험지 2단 그리드 규격에 맞춰 여백 및 글꼴 일치 완결'
        ]
      }
    },
    {
      id: 2,
      title: '직선·선분·반직선 기호 판별 문항',
      category: '기하 / 기호 판별',
      before: {
        tag: '접수 원고 문제점',
        summary: '특수기호 해상도 저하 및 출처 교재 번호(24번) 혼재',
        points: [
          '반직선 화살표 방향(→)과 선분 표시 기호가 저화질로 인해 뭉개져 오독 위험 발생',
          '출처 교재 원본 번호(24번)가 그대로 찍혀 있어 학원 시험지 순번(02번)과 불일치',
          '객관식 보기(①~⑤) 정렬 간격이 제각각으로 단락 서식 깨짐'
        ]
      },
      after: {
        tag: '전문 조판 완결 처리',
        summary: '한글 표준 기호 수식화 및 학원 시험지 순번 일치 재배치',
        points: [
          '반직선(AB), 선분(AD), 직선(CD) 기호를 한글 수식 표준 코드로 정확히 입력',
          '학원 시험지 순번 체계(02번)로 자동 재정렬 및 객관식 보기 2단 균등 정렬',
          '직선 l 위의 4개 점(A, B, C, D) 다이어그램 선명화로 인쇄 시 잉크 번짐 차단'
        ]
      }
    },
    {
      id: 3,
      title: '선분의 중점 & 분수 관계식 문항',
      category: '기하 / 분수 수식',
      before: {
        tag: '접수 원고 문제점',
        summary: '분수식 기호 뭉개짐 및 로마자 기호 폰트 불일치',
        points: [
          '분수(1/2, 1/4, 3/2)가 이미지로 캡처되어 분모와 분자 구분이 모호한 상태',
          '알파벳 점 기호(A, N, M, B) 서체가 본문 서체와 어긋나 가독성 저하',
          '중점 다이어그램의 선분 길이 비율이 찌그러져 학생 학습 시 혼선 유발'
        ]
      },
      after: {
        tag: '전문 조판 완결 처리',
        summary: '한글 분수 전용 수식 서식화 및 수직선 다이어그램 최적화',
        points: [
          '한글(HWP) 공식 분수 입력(over)으로 크기 및 간격을 정확하게 조판',
          '수학 표준 이탤릭체(italic)와 한글 명조/고딕 본문 폰트 규격 100% 매칭',
          '수직선 상의 중점 비율을 보기 좋게 정돈하여 시험지 인쇄 퀄리티 극대화'
        ]
      }
    },
    {
      id: 4,
      title: '치수선 길이 계산 문항',
      category: '도형 / 치수선',
      before: {
        tag: '접수 원고 문제점',
        summary: '치수선 지시선 노이즈 및 단위 표기 잉크 번짐 위험',
        points: [
          '치수 지시선 괄호 곡선 주변에 스캔 노이즈가 발생하여 복사 시 지저분하게 출력됨',
          '단위(40cm) 숫자와 영문이 뭉개져 시험지 인쇄 시 번짐 발생 우려',
          '문제 하단 여백이 확보되지 않아 학생이 풀이 과정을 작성할 공간 부족'
        ]
      },
      after: {
        tag: '전문 조판 완결 처리',
        summary: '치수 지시선 깔끔 최적화 및 풀이 공간 템플릿 규격 확보',
        points: [
          '곡선 지시선 주변 노이즈를 완벽 제거하고 선명한 벡터급 도판으로 업스케일',
          '수식과 단위(40cm)를 규격 폰트로 정밀 입력하여 가독성 확보',
          '학원 템플릿의 문항 간격 규격을 적용하여 충분한 학생 풀이 여백 자동 배치'
        ]
      }
    }
  ];

  return (
    <section id="conversion-sample" className="py-20 md:py-28 bg-[#091024] text-white font-sans relative overflow-hidden border-t border-blue-900/40">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0066EE]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0066EE]/20 border border-[#0066EE]/40 text-[#38BDF8] text-xs font-bold mb-3 tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>비정형 원고 ➔ 규격화 완성본 변환 설명</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
            불규칙한 교재 캡처 원고가
            <br />
            <span className="text-[#38BDF8]">완성형 HWP 시험지로 변환되는 과정</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base font-medium leading-relaxed">
            난잡한 시험지 문제를 그대로 나열하지 않고, 원고 접수 시 발생하는 기술적 한계와
            <br className="hidden sm:inline" />
            전문 조판 과정을 통해 이를 어떻게 완벽한 규격 문서로 전환하는지 핵심 내용을 상세히 설명해 드립니다.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#0F1A34] p-1.5 rounded-xl border border-blue-500/30 inline-flex gap-1 shadow-lg">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'bg-[#0066EE] text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>종합 비교 요약 (Before vs After)</span>
            </button>

            <button
              onClick={() => setActiveTab('cases')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'cases'
                  ? 'bg-[#0066EE] text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>대표 문항별 변환 사례 (4대 케이스)</span>
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'specs'
                  ? 'bg-[#0066EE] text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>4대 핵심 기술 스펙</span>
            </button>
          </div>
        </div>

        {/* TAB 1: OVERVIEW (BEFORE VS AFTER STRUCTURED COMPARISON) */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* BEFORE CARD */}
            <div className="bg-[#0D1527] rounded-2xl border border-amber-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-sm font-black text-amber-300 tracking-wider uppercase">
                      BEFORE: 고객사 접수 원고 상태
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-amber-950/60 text-amber-200 border border-amber-500/30 font-semibold">
                    스캔본 / 사진 촬영본
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  제각각 흩어져 있어 인쇄나 수업에 바로 쓸 수 없는 원고
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm mb-6 leading-relaxed">
                  여러 교재나 기출 시험지에서 선별하여 캡처한 파일은 해상도, 규격, 서식이 모두 달라 원본 그대로는 재편집이나 배포가 불가능합니다.
                </p>

                {/* 4 Inherent Problems in Before */}
                <div className="space-y-3.5 mb-6">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-amber-200 mb-0.5">
                        복잡한 수식의 비트맵 왜곡 및 식별 불가
                      </h4>
                      <p className="text-xs text-zinc-400 leading-normal">
                        분수, 근호, 첨자, 그리스 문자 등이 흐릿하게 뭉개져 있어 복사기 인쇄 시 학생 오독 위험이 큽니다.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-amber-200 mb-0.5">
                        도판(도형·그래프) 해상도 저하 &amp; 접힘 그림자
                      </h4>
                      <p className="text-xs text-zinc-400 leading-normal">
                        책 접힘 그림자와 스캔 노이즈가 섞여 있으며, 저해상도로 인해 점선이나 지시선이 끊겨 보입니다.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-amber-200 mb-0.5">
                        서체·장평·자간의 무질서한 불일치
                      </h4>
                      <p className="text-xs text-zinc-400 leading-normal">
                        출처마다 폰트와 줄간격이 제각각이고, 문항 번호(예: 24번)가 섞여 있어 단일 시험지 체계가 성립되지 않습니다.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-amber-200 mb-0.5">
                        학원 전용 시험지 서식(헤더·배점표) 부재
                      </h4>
                      <p className="text-xs text-zinc-400 leading-normal">
                        단원명, 학년, 성명란, 배점표 및 풀이 여백 규격이 없어 조판 작업 없이는 배포할 수 없습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-amber-300/80 font-medium flex items-center justify-between">
                <span>⚠️ 그대로 배포 시: 학원 브랜드 신뢰도 저하 &amp; 오탈자 리스크</span>
                <span className="font-mono text-[11px] text-zinc-500">원고 상태: 재편집 불가</span>
              </div>
            </div>

            {/* AFTER CARD */}
            <div className="bg-[#0A1633] rounded-2xl border border-blue-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066EE]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-blue-400/20">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                    <span className="text-sm font-black text-[#38BDF8] tracking-wider uppercase">
                      AFTER: 1:1 완결 납품본
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#0066EE] text-white font-bold shadow">
                    정품 한글(HWP) 파일 납품
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  수령 즉시 인쇄·수업 투입이 가능한 완성형 교재
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm mb-6 leading-relaxed">
                  전문 에디터가 수식을 한글 수식 코드로 100% 입력하고, 도판을 선명하게 다듬어 귀사 지정 템플릿에 딱 맞춰 완결합니다.
                </p>

                {/* 4 Core Solutions in After */}
                <div className="space-y-3.5 mb-6">
                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#38BDF8] mb-0.5">
                        한글 공식 수식 편집기 100% 표준 입력
                      </h4>
                      <p className="text-xs text-zinc-300 leading-normal">
                        글자처럼 취급되는 순수 수식 코드로 입력되어, 크기 조절이나 문항 추가 시에도 서식이 흐트러지지 않고 자유롭게 수정 가능합니다.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#38BDF8] mb-0.5">
                        도판 300dpi급 고화질 업스케일 &amp; 리터칭
                      </h4>
                      <p className="text-xs text-zinc-300 leading-normal">
                        고가의 신규 드로잉 비용 없이, 제공받은 캡처본을 고화질로 복원·리터칭하여 인쇄 시 번짐 없는 선명한 상태로 납품합니다.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#38BDF8] mb-0.5">
                        고객사 전용 스타일 시트 1:1 완벽 일치
                      </h4>
                      <p className="text-xs text-zinc-300 leading-normal">
                        귀사 고유의 폰트, 자간, 장평, 수능 2단 / 내신 1단 그리드 및 문항 번호(01, 02...)를 통일감 있게 배치합니다.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#38BDF8] mb-0.5">
                        단원 정보·배점표·풀이 공간 완결 조판
                      </h4>
                      <p className="text-xs text-zinc-300 leading-normal">
                        학원 로고, 시험 회차, 학생 성명란, 배점표가 완벽히 포함되어 파일 수령 즉시 번거로운 추가 편집 없이 인쇄할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-400/20 text-xs text-[#38BDF8] font-semibold flex items-center justify-between">
                <span>✓ 납품 후 즉시 인쇄·강의실 배포 가능</span>
                <span className="font-mono text-[11px] text-zinc-300">최종 납품: HWP 완결본</span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: 4 SPECIFIC CASES (말로 설명하는 4대 사례) */}
        {activeTab === 'cases' && (
          <div className="space-y-6">
            
            {/* Case Selection Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {cases.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCase(idx)}
                  className={`p-3 sm:p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedCase === idx
                      ? 'bg-[#0066EE]/20 border-[#38BDF8] text-white shadow-lg'
                      : 'bg-[#0D1527] border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="text-[11px] font-mono text-[#38BDF8] mb-1 font-bold">CASE 0{c.id}</div>
                  <div className="text-xs sm:text-sm font-bold text-white line-clamp-1">{c.title}</div>
                  <div className="text-[10px] text-zinc-400 mt-1">{c.category}</div>
                </button>
              ))}
            </div>

            {/* Selected Case Detail Board */}
            <div className="bg-[#080E1E] rounded-2xl border border-blue-500/30 p-6 sm:p-9 shadow-2xl text-left">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
                    사례 0{cases[selectedCase].id} 변환 상세 분석
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {cases[selectedCase].title}
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-900/40 text-blue-200 border border-blue-500/30 font-bold">
                  {cases[selectedCase].category}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left: Before Problem State */}
                <div className="bg-[#12192B] rounded-xl p-5 sm:p-6 border border-amber-500/30 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      {cases[selectedCase].before.tag}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">저화질 캡처본</span>
                  </div>

                  <div className="text-sm font-bold text-amber-200">
                    “ {cases[selectedCase].before.summary} ”
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {cases[selectedCase].before.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: After Solution State */}
                <div className="bg-[#0E1A38] rounded-xl p-5 sm:p-6 border border-blue-500/40 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold text-[#38BDF8] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      {cases[selectedCase].after.tag}
                    </span>
                    <span className="text-[11px] text-[#38BDF8] font-bold">HWP 완결본</span>
                  </div>

                  <div className="text-sm font-bold text-[#38BDF8]">
                    “ {cases[selectedCase].after.summary} ”
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-200">
                    {cases[selectedCase].after.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Reassurance */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                <span className="text-zinc-300">
                  💡 모든 작업은 고객사가 지정하신 고유 스타일 시트(글꼴, 크기, 자간, 2단 레이아웃)에 맞춰 진행됩니다.
                </span>
                <span className="text-[#38BDF8] font-bold">
                  고객사 전용 템플릿 100% 매칭
                </span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: AVRO 4 CORE SPECS (기술 스펙 말로 설명) */}
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-[#0F1A34] border border-blue-500/20 hover:border-[#38BDF8]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0066EE]/20 border border-[#0066EE]/40 flex items-center justify-center text-[#38BDF8] mb-4">
                  <Type className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider block mb-1">
                  SPEC 01
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  한글 공식 수식 편집기
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  자동 이미지 인식이 아닌 전문 조판 에디터가 한글 공식 수식 코드로 한 글자씩 직접 타이핑합니다. 크기 확대나 폰트 변경 시에도 왜곡이 전혀 없습니다.
                </p>
              </div>
              <div className="text-[11px] text-[#38BDF8] font-semibold pt-3 border-t border-white/10">
                ✓ 100% 순수 수식 코드 완결
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1A34] border border-blue-500/20 hover:border-[#38BDF8]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0066EE]/20 border border-[#0066EE]/40 flex items-center justify-center text-[#38BDF8] mb-4">
                  <Image className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider block mb-1">
                  SPEC 02
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  도판 고화질 최적화
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  비싼 일러스트 신규 작도 비용을 청구하지 않습니다. 보내주신 캡처 이미지의 노이즈를 제거하고 300dpi급 선명한 인쇄용으로 업스케일·리터칭합니다.
                </p>
              </div>
              <div className="text-[11px] text-[#38BDF8] font-semibold pt-3 border-t border-white/10">
                ✓ 합리적 단가 &amp; 선명한 인쇄
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1A34] border border-blue-500/20 hover:border-[#38BDF8]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0066EE]/20 border border-[#0066EE]/40 flex items-center justify-center text-[#38BDF8] mb-4">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider block mb-1">
                  SPEC 03
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  고객사 템플릿 1:1 매칭
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  학원·출판사가 사용 중인 전용 한글 템플릿을 전달해주시면, 글꼴, 자간, 장평, 2단 레이아웃, 머리말/꼬리말 규격을 100% 일치시켜 제작합니다.
                </p>
              </div>
              <div className="text-[11px] text-[#38BDF8] font-semibold pt-3 border-t border-white/10">
                ✓ 번거로운 양식 수정 불필요
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1A34] border border-blue-500/20 hover:border-[#38BDF8]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0066EE]/20 border border-[#0066EE]/40 flex items-center justify-center text-[#38BDF8] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider block mb-1">
                  SPEC 04
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  다단계 휴먼 검수 &amp; 보안
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  기계 변환의 치명적인 한계인 오탈자와 수식 부호 누락을 방지하기 위해 전문 교정자가 원본과 1:1 대조 검수를 진행하며, 고객사 정보는 철저히 보안 유지됩니다.
                </p>
              </div>
              <div className="text-[11px] text-[#38BDF8] font-semibold pt-3 border-t border-white/10">
                ✓ NDA 비밀유지 · 정밀 검수
              </div>
            </div>
          </div>
        )}

        {/* Confidentiality & Reassurance Notice */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-zinc-300 font-medium">
              모든 샘플 및 작업물은 고객사 상호 및 원본 출판사명이 비노출 처리되며, 보안 서약(NDA)에 따라 엄격히 보호됩니다.
            </span>
          </div>

          <div className="text-zinc-300 font-bold">
            전문 품질 검수 완료
          </div>
        </div>

      </div>
    </section>
  );
}
