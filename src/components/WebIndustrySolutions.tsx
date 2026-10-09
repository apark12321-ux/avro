import { useState } from 'react';
import { 
  Building2, 
  Cpu, 
  Scale, 
  GraduationCap, 
  Check, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface WebIndustrySolutionsProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function WebIndustrySolutions({ onOpenModal }: WebIndustrySolutionsProps) {
  const [activeTab, setActiveTab] = useState<'public' | 'engineering' | 'legal' | 'education'>('public');

  const industries = {
    public: {
      id: 'public',
      label: '공공 · 행정 · 지자체',
      icon: <Building2 className="w-4 h-4" />,
      tagline: '행정업무 공문서 표준 규격 & 조례 규정집 정밀 전산화',
      desc: '스캔된 과거 고시·조례·규칙집부터 지자체 복합 표 서식, 입찰 제안요청서(RFP)까지 온-나라 전자결재 및 공공 서식에 최적화된 정품 HWP/HWPX로 복원합니다.',
      targetDocs: [
        '지자체 조례·규칙 및 자치법규 규정집',
        '스캔 공고문, 기안문 및 기관 내부 지침서',
        '공공 입찰 제안요청서(RFP) 및 과업내용서',
        '다단 결재선 및 복합 표가 포함된 행정보고서'
      ],
      ocrIssues: [
        '웹 OCR 변환 시 공문서 5단계 항목 구분(1. 가. 1) 가)) 들여쓰기 붕괴',
        '복합 표 셀 병합선 누락 및 글자 겹침으로 문서 재작성 불가피',
        '관인(날인) 및 서식 여백 불일치로 정부 전자결재 등록 불가'
      ],
      avroSolutions: [
        '행정업무운영편람 공문서 표준 서식 규격 1:1 준수 조판',
        '복잡 다열 표·셀 병합 및 테두리 두께 표준 한글 표 코드로 완벽 재현',
        '기관별 자체 공문서 서식 파일(템플릿) 맞춤 스타일 즉시 적용',
        '공공기관 수의계약 지원 및 전자세금계산서 정식 발급'
      ],
      specs: [
        { label: '포맷 규격', value: '정품 HWP / HWPX (행정 표준)' },
        { label: '서식 기준', value: '공문서 서식 편람 규격 1:1' },
        { label: '행정 지원', value: '세금계산서 · 나라장터 수의계약' },
        { label: '보안 기준', value: '폐쇄망 작업 · 공공 보안 준수' }
      ]
    },
    engineering: {
      id: 'engineering',
      label: '연구 · 엔지니어링 · 기술',
      icon: <Cpu className="w-4 h-4" />,
      tagline: '공학 수식 · 기술계산서 · 시방서 · 설계 도판 복원',
      desc: '구조·토목·플랜트 계산서의 복잡한 공학 수식(그리스 문자, 적분, 행렬, 공차 기호)과 CAD 도판을 한글 수식 편집기 표준 코드 및 300dpi 인쇄 규격으로 전산화합니다.',
      targetDocs: [
        '건축·토목·플랜트 공사 시방서 및 기술계산서',
        '정밀안전진단보고서 및 비파괴 검사 성적서',
        '장비 운용 매뉴얼 및 기술 규격 해설서',
        '연구소 학술 논문 및 실험 데이터 산출표'
      ],
      ocrIssues: [
        '그리스 문자(σ, τ, Δ), 위/아래 첨자 및 행렬식 전면 깨짐',
        '설계 도판 치수선 및 지시선의 저해상도 뭉개짐으로 식별 불가',
        '분수식 선 누락 및 오차로 인한 심각한 공학 계산 왜곡'
      ],
      avroSolutions: [
        '한글 수식 편집기 공식 명령어(over, sqrt, sum, cases) 정밀 입력',
        '설계 도판 및 공학 다이어그램 300dpi 인쇄용 고해상도 리터칭',
        '기술 도표의 단위(kgf/cm², MPa, mm) 표준 코드 정렬',
        '엔지니어링 전용 폰트 및 여백 규격 맞춤 완결본 납품'
      ],
      specs: [
        { label: '수식 규격', value: '한글 수식 표준 코드 1:1' },
        { label: '도판 품질', value: '300dpi 기술 인쇄 규격' },
        { label: '공학 기호', value: '그리스 문자 · 첨자 무결성' },
        { label: '검수 체계', value: '수치·단위 정밀 교차 검수' }
      ]
    },
    legal: {
      id: 'legal',
      label: '법률 · 특허 · 회계 · 금융',
      icon: <Scale className="w-4 h-4" />,
      tagline: '오탈자 0% 지향 2단계 검수 & 특허 도면 & 재무제표 복원',
      desc: '소송 판결문, 공증 증서, 특허청 규격 도면, 회계감사보고서의 다열 재무제표를 전문 에디터와 시니어 검수관의 2단계 크로스 검수로 철저하게 전산화합니다.',
      targetDocs: [
        '법원 판결문, 소장, 증거서류 및 공증 계약서',
        '특허청(KIPO) 출원용 특허명세서 및 특허 도면',
        '외부감사보고서, 재무제표 비교표 및 주석 명세서',
        '금융 투자설명서 및 보험 약관 대조표'
      ],
      ocrIssues: [
        '법조문 호/목 번호 및 괄호 체계의 왜곡으로 법리 오인 유발',
        '회계 표 음수 표기(△), 콤마(,), 소수점 누락 등 치명적 오류',
        '특허 도면 선 굵기 기준 미달로 인한 보정명령 리스크'
      ],
      avroSolutions: [
        '전문 조판원 1차 입력 + 시니어 검수관 2차 대조 크로스 시스템',
        '특허청 제도 규칙에 부합하는 선 굵기 및 부호 지시선 복원',
        '재무제표 10단 이상 다열 표 셀 규격화 및 회계 폰트 정렬',
        '철저한 비밀유지서약(NDA) 체결 및 작업 후 원본 영구 파기'
      ],
      specs: [
        { label: '오탈자 방지', value: '2단계 크로스 교차 검수' },
        { label: '특허 규격', value: 'KIPO 출원 제도 기준 충족' },
        { label: '보안 서약', value: '표준 NDA · 영구 파기 증명' },
        { label: '표 조판', value: '10열 이상 복합 재무표 완결' }
      ]
    },
    education: {
      id: 'education',
      label: '교육 · 출판 · 시험지',
      icon: <GraduationCap className="w-4 h-4" />,
      tagline: '전과목 시험지 · 수식 타이핑 · 기하 벡터 도판 (사용자 검증 샘플)',
      desc: '초·중·고 내신 및 수능 모의고사, 학원 자체 교재의 흐릿한 스캔본을 수학·과학 한글 수식 및 300dpi 기하 벡터 도판이 포함된 완결형 HWP 시험지로 조판합니다.',
      targetDocs: [
        '기출 문제집, 모의고사 스캔 PDF 및 손글씨 선별 원고',
        '중·고등 수학/과학/국어/영어 시험지 및 풀이 해설집',
        '기하·벡터·함수 그래프가 포함된 심화 문항집',
        '학원 자체 브랜딩 2단 레이아웃 교재'
      ],
      ocrIssues: [
        '분수식, 근호, 미적분, 극한 수식의 비트맵 깨짐 및 번짐',
        '기하 도형의 계단 현상(Aliasing)으로 인쇄 시 선 뭉개짐',
        '출처별 서체 불일치 및 캡처본 배경 그림자 노이즈'
      ],
      avroSolutions: [
        '사용자 첨부 실제 샘플 4선 검증: 기하 작도 및 수식 1:1 정밀화',
        '선명한 300dpi 출판 인쇄용 벡터 작도 및 노이즈 완전 제거',
        '원장님 학원 전용 폰트, 배점 규격, 2단 레이아웃 1:1 매칭',
        '3문항 무료 샘플 변환으로 품질 사전 확인 가능'
      ],
      specs: [
        { label: '수식 조판', value: '한글 수식 편집기 100% 입력' },
        { label: '도판 품질', value: '300dpi 기하 벡터 복원' },
        { label: '서식 규격', value: '학원 A4 2단 템플릿 맞춤' },
        { label: '샘플 제공', value: '실제 원고 3문항 무료 테스트' }
      ]
    }
  };

  const current = industries[activeTab];

  return (
    <section id="industry-solutions" className="py-20 md:py-28 bg-[#070D1F] text-white font-sans border-t border-blue-900/40 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Section Header with unboxed metadata */}
        <div className="text-left mb-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
            <span>ENTERPRISE DOCUMENT ENGINEERING</span>
            <span aria-hidden="true">·</span>
            <span>문서 유형별 맞춤 조판 솔루션</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
            문서별 특수 규격에 맞춘 <span className="text-[#38BDF8]">맞춤형 HWP 조판</span>
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed">
            단순 텍스트 추출이 아닙니다. 공공기관 행정 서식부터 공학 수식, 법률·특허 규격, 출판 시험지까지 각 분야의 고유 문서 표준을 완벽히 충족합니다.
          </p>
        </div>

        {/* Industry Segmented Control Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-black/40 p-1.5 rounded-2xl border border-white/10">
          {(Object.keys(industries) as Array<keyof typeof industries>).map((key) => {
            const ind = industries[key];
            const isActive = activeTab === key;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(key)}
                className={`py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#0066EE] text-white shadow-lg shadow-blue-600/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {ind.icon}
                <span className="truncate">{ind.label}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Detail Showcase Card */}
        <div className="bg-[#0C152B] rounded-2xl border border-blue-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl text-left">
          
          {/* Top Tagline & Quick Specs */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <div className="text-xs text-[#38BDF8] font-bold uppercase tracking-wider mb-1">
                {current.label} 전용 조판 프로세스
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                {current.tagline}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenModal('sample')}
                className="px-5 py-2.5 rounded-xl bg-[#0066EE] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/30 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>무료 샘플 테스트 신청</span>
              </button>
            </div>
          </div>

          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-8 max-w-4xl">
            {current.desc}
          </p>

          {/* 3-Column Comparison & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Column 1: Target Documents */}
            <div className="bg-black/30 rounded-xl p-5 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block mb-3 pb-2 border-b border-white/10">
                  주요 전산화 대상 문서
                </span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {current.targetDocs.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#38BDF8] shrink-0 font-bold">0{i + 1}.</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Web OCR Failures (Why OCR is not enough) */}
            <div className="bg-amber-950/20 rounded-xl p-5 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-3 pb-2 border-b border-amber-500/20 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>일반 웹 OCR 변환의 한계</span>
                </span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {current.ocrIssues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 shrink-0">✕</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: AVRO Precision Delivery */}
            <div className="bg-blue-950/30 rounded-xl p-5 border border-blue-500/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block mb-3 pb-2 border-b border-blue-400/20 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>에이브로 엔지니어링 납품 기준</span>
                </span>
                <ul className="space-y-2 text-xs text-zinc-200">
                  {current.avroSolutions.map((sol, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Quick Specifications Strip */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {current.specs.map((sp, idx) => (
              <div key={idx} className="border-l-2 border-[#38BDF8] pl-2.5">
                <span className="text-[10px] text-zinc-400 block">{sp.label}</span>
                <span className="font-bold text-white text-xs">{sp.value}</span>
              </div>
            ))}
          </div>

          {/* Bottom Security Note */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>전 문서 표준 비밀유지서약서(NDA) 즉시 발급 · 작업 완료 후 7일 이내 원본 영구 폐기 원칙</span>
            </div>
            <button
              onClick={() => onOpenModal('inquiry')}
              className="text-[#38BDF8] hover:text-white font-bold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{current.label} 견적 상담</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
