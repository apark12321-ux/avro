import { 
  ShieldCheck, 
  Lock, 
  FileCheck2, 
  Receipt, 
  CheckCircle2, 
  Layers, 
  FileText,
  UserCheck
} from 'lucide-react';

export default function WebEnterpriseTrust() {
  const securityPillars = [
    {
      icon: <Lock className="w-5 h-5 text-[#0066EE]" />,
      title: '엄격한 기밀 유지 (NDA)',
      desc: '의뢰 접수 즉시 법적 효력을 갖는 비밀유지서약서(NDA)를 체결하며, 고객사 상호 및 원본 문서는 대외 비노출 원칙을 엄수합니다.'
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#0066EE]" />,
      title: '원본 데이터 영구 폐기',
      desc: '최종 납품 및 고객 검수 완료 7일 후 작업 서버 및 로컬 드라이브의 원본·변환본 데이터를 영구 삭제하며 폐기 확인서를 발급합니다.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#0066EE]" />,
      title: '2단계 크로스 교차 검수',
      desc: '전문 조판원의 1차 1:1 입력 후, 시니어 수석 검수관이 원본 대조(오탈자, 수치, 그리스 문자, 표 병합선)를 전수 재검증합니다.'
    },
    {
      icon: <Receipt className="w-5 h-5 text-[#0066EE]" />,
      title: '공공·기업 행정 서류 완비',
      desc: '국세청 전자세금계산서 즉시 발행, 나라장터 수의계약 지원, 사업자등록증·통장사본·청렴서약서 등 필요 행정 서류를 일체 제공합니다.'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: '원고 접수 & 보안 협약',
      desc: '스캔 PDF·이미지 접수 및 표준 NDA 체결'
    },
    {
      step: '02',
      title: '1차 표준화 조판',
      desc: '한글 수식 코드 입력, 표 복원, 300dpi 도판 업스케일'
    },
    {
      step: '03',
      title: '2차 수석 교차 검수',
      desc: '원본 1:1 대조, 수치 오탈자 0% 지향 검증'
    },
    {
      step: '04',
      title: '정품 HWP 납품 & 파기',
      desc: '고객사 전용 양식 완결본 납품 및 원본 영구 폐기'
    }
  ];

  return (
    <section id="security-assurance" className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Section Header with unboxed metadata */}
        <div className="text-left mb-12 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0066EE] uppercase tracking-wider mb-2 font-bold">
            <span>ENTERPRISE SECURITY &amp; QUALITY ASSURANCE</span>
            <span aria-hidden="true">·</span>
            <span>보안 및 검수 체계</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-900 mb-3">
            공공기관과 대기업이 신뢰하는 <span className="text-[#0066EE]">보안 및 품질 검증</span>
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed">
            민감한 행정 문서, 특허 명세서, 미공개 시험지까지 안전하게 맡기실 수 있도록 폐쇄형 작업 프로세스와 2단계 전수 교차 검수를 보장합니다.
          </p>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {securityPillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Verification Timeline Box */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-sm text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-zinc-200">
            <div>
              <span className="text-xs font-bold text-[#0066EE] uppercase tracking-wider block mb-1">
                2-STAGE CROSS-INSPECTION WORKFLOW
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                표준 전산화 4단계 작업 공정
              </h3>
            </div>
            <span className="text-xs text-zinc-500 font-mono">
              전 공정 정밀 체크리스트 기록 관리
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {workflowSteps.map((ws, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-black text-[#0066EE] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    STEP {ws.step}
                  </span>
                  <div className="h-px bg-zinc-200 flex-1 hidden lg:block" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">
                  {ws.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
