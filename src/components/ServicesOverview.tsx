import { FileText, Globe, Video, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesOverviewProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesOverview({ onSelectService }: ServicesOverviewProps) {
  const services = [
    {
      id: 'math',
      tag: 'CORE SPECIALTY',
      icon: FileText,
      title: '수학 문항 조판 & HWP 교재 외주',
      subtitle: '손글씨·스캔 PDF를 출판 규격 HWP 파일로 완벽 복원',
      description: '선생님과 원장님의 소중한 시험지·교재 원고를 한글 표준 수식과 인쇄용 벡터 도형으로 정밀 조판합니다. 복잡한 수식과 기하 그래프도 깨짐 없이 완벽하게 구현됩니다.',
      features: [
        '수학 문제 한글 수식 정밀 타이핑 (분수, 적분, 행렬)',
        '흐릿한 스캔본 PDF의 원본급 HWP 문서화 복원',
        '지오지브라 기반 고화질 인쇄용 벡터 기하·도형 재작도',
        '학원 시그니처 2단 교재 & 해설지 맞춤 레이아웃',
      ],
      highlight: '★ 실제 원고 중 3문항 무료 샘플 제작 후 발주 결정',
      ctaText: '3문항 무료 샘플 신청',
      serviceName: '수학 문제 한글 수식 타이핑',
      isPrimary: true,
    },
    {
      id: 'web',
      tag: 'ACADEMY WEB',
      icon: Globe,
      title: '학원·공부방 전문 홈페이지 제작',
      subtitle: '방문 학부모의 1:1 상담 예약 전환에 최적화된 반응형 웹',
      description: '복잡하고 관리하기 어려운 홈페이지 대신, 원장님의 철학, 커리큘럼, 학생 후기, 상담 신청이 모바일에서 한눈에 들어오는 고전환 원페이지 웹사이트를 구축합니다.',
      features: [
        '모바일 & 카카오톡 1초 상담 예약 연동',
        '원장님 프로필 및 수업 강점 중심의 직관적 기획',
        '네이버 플레이스 & 검색 포털(SEO) 최적화 등록',
        '추가 월 관리비 부담 없는 독립형 모던 웹',
      ],
      highlight: '상담 전환율 극대화 중심 기획 & 디자인',
      ctaText: '홈페이지 제작 상담',
      serviceName: '학원·공부방 전문 웹사이트',
      isPrimary: false,
    },
    {
      id: 'youtube',
      tag: 'INSTRUCTOR MEDIA',
      icon: Video,
      title: '강사 & 원장 유튜브 미디어 세팅',
      subtitle: '얼굴 노출 부담 없는 칠판·전자판서 수업 녹화 시스템',
      description: '수업 영상을 찍고 싶지만 얼굴 노출이나 장비 조작이 부담스러우신 선생님을 위해, 판서 화면과 목소리만 깔끔하게 녹화·송출되는 원클릭 스튜디오 환경을 세팅해 드립니다.',
      features: [
        '얼굴 노출 없는 타블렛/전자칠판 강의 녹화 세팅',
        '잡음 없는 마이크 세팅 & OBS 원클릭 원격 세팅',
        '유튜브 채널 아트, 썸네일 템플릿, 재생목록 가이드',
        '5060 원장님도 쉽게 다루는 눈높이 1:1 매뉴얼 제공',
      ],
      highlight: '기계치 원장님도 10분 만에 녹화 시작 가능',
      ctaText: '미디어 세팅 상담',
      serviceName: '강사·시니어 유튜브 세팅',
      isPrimary: false,
    },
  ];

  return (
    <div className="space-y-6 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((svc) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.id}
              className={`rounded-2xl p-7 flex flex-col justify-between space-y-6 transition-all relative ${
                svc.isPrimary
                  ? 'bg-slate-900 border-2 border-sky-500/60 shadow-xl shadow-sky-950/30'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {svc.isPrimary && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-sky-500 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                  가장 많이 찾는 서비스
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    svc.isPrimary ? 'bg-sky-500 text-white' : 'bg-slate-800 text-sky-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500">
                    {svc.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-400 mt-1.5 leading-normal">
                    {svc.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {svc.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="text-[11px] font-medium text-sky-300 bg-sky-950/40 px-3 py-1.5 rounded-lg border border-sky-900/40 text-center">
                  {svc.highlight}
                </div>

                <button
                  onClick={() => onSelectService(svc.serviceName)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    svc.isPrimary
                      ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-md'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <span>{svc.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
