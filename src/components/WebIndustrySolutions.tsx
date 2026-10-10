import { useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  FileText, 
  GraduationCap, 
  Check, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface WebIndustrySolutionsProps {
  onOpenModal: (mode?: 'inquiry' | 'sample') => void;
}

export default function WebIndustrySolutions({ onOpenModal }: WebIndustrySolutionsProps) {
  const [activeTab, setActiveTab] = useState<'education' | 'public' | 'corporate' | 'legal'>('education');

  const industries = {
    education: {
      id: 'education',
      label: '교육 · 출판 · 시험지',
      icon: <GraduationCap className="w-4 h-4" />,
      tagline: '전과목 시험지 · 수식 타이핑 · 기하 벡터 작도 (실제 검증 샘플)',
      desc: '초·중·고 내신 및 수능 모의고사, 학원 자체 교재의 흐릿한 스캔본을 수학·과학 한글 수식 및 300dpi 기하 벡터 도판이 포함된 완결형 HWP 시험지로 조판합니다.',
      targetDocs: [
        '기출 문제집, 모의고사 스캔 PDF 및 손글씨 선별 원고',
        '중·고등 수학/과학/국어/영어 시험지 및 풀이 해설집',
        '기하·도형·함수 그래프가 포함된 심화 문항집',
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
    },
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
    corporate: {
      id: 'corporate',
      label: '기업 · 사내 실무 · 매뉴얼',
      icon: <Briefcase className="w-4 h-4" />,
      tagline: '사내 업무 매뉴얼 & 프로세스 순서도 & 보고서 서식 전산화',
      desc: '인쇄·복사본으로 보관 중인 사내 업무 매뉴얼, 부서별 프로세스 흐름도, 결재 기안 양식을 한글 표준 도형 개체와 다단 표 서식으로 깔끔하게 복원합니다.',
      targetDocs: [
        '부서별 업무 추진 매뉴얼 및 인수인계서',
        '사내 업무 프로세스 흐름도 및 직무 기술서',
        '정기 결재 기안문 및 다단 결재선 보고 양식',
        '사내 신입사원 교육 교재 및 직무 가이드북'
      ],
      ocrIssues: [
        '흐름도 박스 테두리 분절 및 순서도 화살표 뭉개짐',
        '텍스트 상자 글자 깨짐 및 내용 수정 불가 상태',
        '사내 보고서 템플릿 양식 훼손으로 결재 상신 불가'
      ],
      avroSolutions: [
        '한글 표준 그리기 개체(선·도형·화살표)로 1:1 완결 조판',
        '모든 텍스트 상자·설명문 즉시 수정 가능하도록 납품',
        '기업 전용 폰트, 자간, 결재선 양식 1:1 맞춤 적용',
        '회사 양식 템플릿(배경, 로고, 머리말/꼬리말) 매칭'
      ],
      specs: [
        { label: '도형 개체', value: '한글 벡터 그리기 100%' },
        { label: '수정 편의', value: '전 문장 텍스트 즉시 편집' },
        { label: '템플릿', value: '사내 표준 서식 1:1 매칭' },
        { label: '납품 포맷', value: '정품 HWP / DOCX 선택' }
      ]
    },
    legal: {
      id: 'legal',
      label: '사규 · 계약 · 규정 서식',
      icon: <FileText className="w-4 h-4" />,
      tagline: '오탈자 0% 지향 2단계 검수 & 계약서 & 사규집 조판',
      desc: '사내 취업규칙, 계약서 양식, 거래 약관, 정관 등 조항 번호 체계가 복잡한 규정 문서를 전문 에디터와 시니어 검수관의 2단계 크로스 검수로 오탈자 없이 전산화합니다.',
      targetDocs: [
        '표준 근로계약서, 용역계약서 및 비밀유지서약서(NDA)',
        '기업 취업규칙, 사규집, 정관 및 이사회 규정',
        '서비스 이용약관, 개인정보처리방침 대조표',
        '공증 문서, 소송 판결문 및 서증 자료 서식'
      ],
      ocrIssues: [
        '조항 번호(제1조, 제2항, 제1호) 및 괄호 체계 왜곡',
        '약관 다단 표 서식의 행간 붕괴 및 조항 누락',
        '민감한 계약 조건 문구의 OCR 오인식 리스크'
      ],
      avroSolutions: [
        '전문 조판원 1차 입력 + 시니어 검수관 2차 대조 크로스 시스템',
        '법령·규정 표준 들여쓰기 및 조항 번호 스타일 체계화',
        '표 서식 셀 분할·병합 및 자간·장평 정밀 조판',
        '철저한 비밀유지서약(NDA) 체결 및 작업 후 원본 영구 파기'
      ],
      specs: [
        { label: '오탈자 방지', value: '2단계 크로스 교차 검수' },
        { label: '조항 체계', value: '장/조/항/호 들여쓰기 완결' },
        { label: '보안 서약', value: '표준 NDA · 영구 파기 증명' },
        { label: '규정 서식', value: '사규집·계약서 템플릿 적용' }
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
            단순 텍스트 추출이 아닙니다. 공공기관 조례 서식부터 기업 사내 매뉴얼, 계약서·사규, 교육·출판 시험지까지 각 문서의 고유 규격을 완벽히 충족합니다.
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
                  <span>표준 정밀 조판 납품 기준</span>
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
