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
      title: '표준 비밀유지서약 (NDA)',
      desc: '법적 효력을 갖는 NDA를 체결하며, 고객사 정보와 원본 문서는 대외 비노출을 엄수합니다.'
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#0066EE]" />,
      title: '작업 데이터 영구 폐기',
      desc: '납품 완료 7일 후 원본 및 변환본 데이터를 영구 삭제하며 폐기 확인서를 발급합니다.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#0066EE]" />,
      title: '2단계 전수 교차 검수',
      desc: '전문 조판원 1차 입력 후 시니어 검수관이 원본과 1:1 대조하여 오탈자를 방지합니다.'
    },
    {
      icon: <Receipt className="w-5 h-5 text-[#0066EE]" />,
      title: '행정 서류 일체 지원',
      desc: '전자세금계산서 발행 및 공공기관 수의계약에 필요한 제반 서류를 신속 제공합니다.'
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
            공공기관과 기업이 안심하는 <span className="text-[#0066EE]">보안 및 품질 검증</span>
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed">
            폐쇄형 보안 프로세스와 2단계 전수 교차 검수로 안전하고 정확하게 완결합니다.
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
