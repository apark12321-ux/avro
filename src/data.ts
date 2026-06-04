import { TimelineItem, ServiceItem, ProjectItem, PartnerItem, ProcessStep } from './types';

export const timelineData: TimelineItem[] = [
  {
    year: '2026',
    events: [
      { description: '★ AI 핵심 기업 피벗 (AI Pivot) 완성 · 10년 콘텐츠 개발 대행을 마감하고 비즈니스 AI 유틸리티 엔진 그룹으로 선언', isHighlight: true },
      { description: 'mathhwp.com 공식 브랜드 운영 · 구글 Gemini 1.5/2.0 API와 Mathpix OCR 엔지니어링을 통한 수학 PDF 수식-아래한글(HWPX) 자동 변환 SaaS 런칭', isHighlight: true },
      { description: 'blogstudio.live 정식 서비스 개시 · 멀티 디바이스 원스톱 다중 발행 특화 콘텐츠 자동 생성 AI 솔루션', isHighlight: true },
      { description: '에이전틱 워크플로우(Agentic Workflow) 구축 대행 및 Multi-LLM 엔터프라이즈 콘텐츠 자동화 서비스 론칭', isHighlight: true }
    ]
  },
  {
    year: '2022 — 2025',
    events: [
      { description: 'EBSMath 핵심 콘텐츠 설계 및 교수학습지도안 4년 연속 장기 전담 개발 (비-AI 레거시의 극치, 견고한 교육 도메인 장악)' },
      { description: '미래엔(Mirae-N) 플래그십 교육 플랫폼 초코 · 엠티처 사이트 QA/QC 총괄 기능 점검 및 디지털 검수 운영 (대규모 플랫폼 무결성 보장 노하우 축적)' },
      { description: '구미시청 지역 문화유산 투어 오리지널 실사/공연형 영상 시나리오 기획 및 영상 촬영 제작 (2023)' },
      { description: '맥스(MAX)농구교실 풀스택 홈페이지 구축 및 BI 브랜드 아이덴티티 로고 디자인 (2023)' },
      { description: '윌비스 1억뷰N잡 클래스 디지털 미디어 콘텐츠 기획 및 교육 콘텐츠 자문 (2022)' },
      { description: '하나로컨설팅노무법인 등 오피스 전문 기관의 장기 유튜브 대행 운영 및 디지털 교육 영상 제작 (2022)' },
      { description: '동서대학교 LINC 3.0 사업단 공식 산학협약 체결 및 디지털 콘텐츠 공동 연구 개발 (2022)' }
    ]
  },
  {
    year: '2016 — 2021',
    events: [
      { description: '타임폴리오투자자문(Timefolio) 공식 투자 관리 웹 서비스 인터랙티브 프론트엔드 구축 및 브랜드 디자인 전반 (2018–2022)' },
      { description: '한국릴리 제약 메디컬 리서치 정보 인포그래픽스 및 인체 모션 소개 영상 제작 (2021)' },
      { description: '롯데시네마 창립기념 영상 및 국기원 태권도 글로벌 보급 교육 콘텐츠 제작 (2020)' },
      { description: '주식회사 에이브로 공식 법인 설립 (2016.07) · 10년 전 탄탄한 디지털 콘텐츠 기획/제작 대행사로 대장정 개시' },
      { description: '서울예술대학교 산학협력단 / 아시아문화원 미래 실감 비주얼 키 그래픽 기획 및 디자인 개발 (2017)' },
      { description: '쥬스컴퍼니 및 남산골한옥마을 등 전통 문화 브랜드 페스티벌 온라인 전시 콘텐츠 기획 및 미디어 콘텐츠 구축 (2017)' }
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    num: '01',
    title: 'AI Engineering & SaaS',
    englishTitle: 'LLM · AGENT · SaaS ENGINE',
    description: '10년의 견고한 플랫폼 검수 노하우 위에, Google Gemini, OpenAI, Anthropic 등 최신 AI 신경망을 결합합니다. 복잡한 수식을 완벽히 인식하여 변환하는 mathhwp.com의 설계 역량을 바탕으로, 기업용 실무 에이전트와 도메인 특화 인터랙티브 시스템을 전문적으로 빌드합니다.',
    items: ['다중 LLM 조율 및 API 결합', '도메인 특화 OCR & 파서 엔지니어링', '실무 지향 AI 에이전트 워크플로우', '무결성 보장 전용 SaaS 설계 및 배포']
  },
  {
    num: '02',
    title: 'Creative AI Automation',
    englishTitle: 'CREATIVE OSMU AUTOMATION',
    description: 'blogstudio.live의 OSMU 원천 자동화 구조를 계승하여 중복적인 콘텐츠 가공 리소스를 혁신적으로 제거합니다. 검증된 원본 텍스트 하나만으로 가독성 품질을 정교하게 유지한 채 네이버 블로그 포스팅, 인스타그램 캡션, 숏폼 비디오 시나리오, 교육/뉴스레터용 원고를 AI 멀티 에이전트가 완벽히 구성하고 스케줄 발행합니다.',
    items: ['원소스 멀티유즈 (OSMU) 자동 기획', '지능형 블로그/SNS 다중 플랫폼 연합 배포', '브랜드 페르소나 정교화 튜닝 프롬프트', '정교한 콘텐츠 퍼블리싱 자동화 스택']
  },
  {
    num: '03',
    title: '10-Year Digital Legacy Operations',
    englishTitle: 'TRUSTED PLATFORM LEGACY',
    description: 'EBSMath, 미래엔, 윌비스 등 10년간 검증된 공공 및 대기업 에듀테크 플랫폼 대규모 검수와 디지털 운영의 헤리티지. AI 기술의 사각지대인 "실무 무결성"과 "시스템 신뢰도"를 보장하기 위해, 우리는 10년의 깊은 에이전시 운영 역량을 AI 핵심 빔으로 투사합니다.',
    items: ['안정성/신뢰성 최우선 대형 시스템 조율', '에듀테크 전문 QA & 퍼블리싱 체계 보장', '인프라 클라우드 전환 및 API 통합', '레거시 연계 비즈니스 인터랙션 보정']
  },
  {
    num: '04',
    title: 'AI Visual & Cinema Production',
    englishTitle: 'DIGITAL VIDEO & GENERATIVE SEAMLESS',
    description: '구미시청, 한국릴리, 롯데시네마 등 10년간 누적된 메이저 비주얼 영상 기획 노하우를 바탕으로 차세대 Generative AI 영상 제작을 완수합니다. 연출의 미감(Human Eye)과 고급 AI 영상 툴체인을 융합하여 상상을 현실로 바꾸는 초고해상도 실감 미디어를 초단기 완성해 냅니다.',
    items: ['브랜드 다큐멘터리 / 웰메이드 콘텐츠 영상', '교육 최적화 모션그래픽스 및 인포그래픽스', '생성형 비디오(Gen-2, Sora) 기반 워크플로우', '멀티미디어 채널 브랜딩 및 디지털 미디어 콘텐츠 포지셔닝']
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'PRD_001',
    name: 'mathhwp',
    client: '(주)라스트마일 핵심 공조 빌드',
    domain: 'mathhwp.com',
    tags: ['AI', 'OCR', 'hwp', 'LaTex', 'EduTech', '1st Pivot Product'],
    description: 'Google Gemini 분석 브레인과 Mathpix 수식 파서를 고도로 오케스트레이션하여, 가장 정교한 서식 변정이 요구되는 수학/과학 PDF 내 수식들을 편집용 아래한글(HWPX) 코드로 리포맷해주는 국내 선두의 수학 변환 에듀테크 SaaS입니다. 에이브로의 핵심적인 AI 피벗 첫 타자입니다.',
    isFeatured: true,
    status: 'LIVE'
  },
  {
    id: 'PRD_002',
    name: 'BlogStudio',
    client: '에이브로 독자 AI SaaS 제품',
    domain: 'blogstudio.live',
    tags: ['AI-OSMU', 'SaaS', 'Content Automation', 'Multi-LLM Pipeline'],
    description: '지난 10년간 대형 브랜드와 교육기관의 비주얼 및 미디어 콘텐츠를 수작업으로 기획·개발하고 퍼블리싱하며 격파해 온 병목 현상을 집대성하여 탄생시킨 AI 멀티 에이전트 SaaS. 단 한 번의 텍스트 입력으로 블로그 포스팅, 카드뉴스 캡션, 숏폼 비디오 대본을 전문성 높은 어조로 다중 제작해 냅니다.',
    isFeatured: true,
    status: 'LIVE'
  },
  {
    id: 'CASE_001',
    name: 'EBSMath 4개년 대규모 파트너십',
    client: '한국교육방송공사 (EBS)',
    domain: 'ebsmath.co.kr',
    tags: ['EBSMath', '수업지도안', '4년 연속 수행', 'Stable Legacy Operations'],
    description: '2022년부터 2025년까지 비-AI 영역에서 공교육 사상 최대 규모 수학 콘텐츠의 활용 방안 기획, 공교육 맞춤 입체 수업지도안 전담 연구를 성공리에 수행하며, 단순 AI 연산을 실상의 교육 비즈니스로 밀결합시키는 핵심 도메인 지식을 배양해왔습니다.',
    isFeatured: false,
    status: 'CASE STUDY'
  },
  {
    id: 'CASE_002',
    name: '미래엔 초코 / 엠티처 총괄 무결성 QA',
    client: '(주)미래엔',
    domain: 'mirae-n.com',
    tags: ['초코', '엠티처', 'QA / QC', '무결성 운영 레거시'],
    description: '대표적인 교과서 출판사 미래엔의 초대형 교육 커뮤니티 초코 플랫폼 및 교사용 지원 시스템 엠티처의 기능 동작, 완벽한 사용자 만족을 위한 전체 검수와 QA 퍼블리싱 가속화를 도맡아 시스템 무안정 운영을 달성한 굵직한 업적입니다.',
    isFeatured: false,
    status: 'CASE STUDY'
  },
  {
    id: 'CASE_003',
    name: '타임폴리오투자자문 인터랙티브 사이트 구축',
    client: '타임폴리오 (TIMEFOLIO)',
    domain: 'timefolio.co.kr',
    tags: ['금융 웹 브랜딩', 'UI UX', 'Identity Design'],
    description: '대한민국 대표 자산 운용사 타임폴리오의 공식 사이트 웹 인터랙션 구축과 기업 전용 BI/CI 전반 패키지를 밀착 설계하여 신뢰 위주의 하이엔드 온라인 창구를 완벽하게 일구어냈습니다.',
    isFeatured: false,
    status: 'CASE STUDY'
  }
];

export const partnersData: PartnerItem[] = [
  { name: 'EBS', type: 'BROADCAST', isHighlight: true },
  { name: 'EBSMath', type: 'PLATFORM', isHighlight: true },
  { name: '미래엔', type: 'CONTENT', isHighlight: true },
  { name: 'TIMEFOLIO', type: 'FINANCE', isHighlight: false },
  { name: '서울예대', type: 'ACADEMY', isHighlight: false },
  { name: '아시아문화원', type: 'CULTURE', isHighlight: false },
  { name: '윌비스', type: 'CONSULTING', isHighlight: false },
  { name: '국기원', type: 'SPORTS', isHighlight: false },
  { name: '롯데시네마', type: 'ENTERTAIN', isHighlight: false },
  { name: '한국릴리', type: 'PHARMACEUTICAL', isHighlight: false },
  { name: '동서대 LINC', type: 'UNIVERSITY', isHighlight: false },
  { name: '동국대 산학', type: 'UNIVERSITY', isHighlight: false },
  { name: '구미시청', type: 'GOVERNMENT', isHighlight: false },
  { name: '남산골한옥마을', type: 'CULTURE', isHighlight: false },
  { name: '라스트마일', type: 'AI TECH', isHighlight: true },
  { name: 'MAX 농구교실', type: 'SPORTS', isHighlight: false },
];

export const processSteps: ProcessStep[] = [
  { step: '01', title: 'AI 비즈니스 1:1 진단 및 분석', englishTitle: 'AI FIT DIAGNOSIS' },
  { step: '02', title: '레거시 데이터 / 도메인 워크플로우 분석', englishTitle: 'LEGACY DATA ANALYSIS' },
  { step: '03', title: '맞춤형 Multi-LLM 에이전트 상세 구조 기획', englishTitle: 'CUSTOM AGENTIC PLANNING' },
  { step: '04', title: '무결성 PoC 테스트 및 개발 예산 조율', englishTitle: 'INTEGRITY POC & SCOPE' },
  { step: '05', title: '애자일 기반 서비스/SaaS 엔진 초광속 배포', englishTitle: 'AGILE SaaS DEPLOYMENT' },
  { step: '06', title: '정밀 결과 리포포 및 실무 지속 고도화', englishTitle: 'VALUE SCALE-UP' }
];
