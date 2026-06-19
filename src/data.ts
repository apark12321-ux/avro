import { TimelineItem, ServiceItem, ProjectItem, PartnerItem, ProcessStep } from './types';

export const timelineData: TimelineItem[] = [
  {
    year: '2026',
    events: [
      { description: '★ 교육 특화 AI 기업 선언 · 10년의 노하우를 계승하여 에듀테크 전문 AI 기획 및 저작 지원 하우스로 전환', isHighlight: true },
      { description: '가르치고 배우는 이들을 위한 AI 맞춤형 교육 솔루션 및 저작 지원 툴 연구 개시', isHighlight: true }
    ]
  },
  {
    year: '2022 — 2025',
    events: [
      { description: 'EBSMath 핵심 콘텐츠 설계 및 교수학습지도안 4년 연속 개발 (수학 콘텐츠 설계 및 교수법 도메인 지식 구축)' },
      { description: '미래엔(Mirae-N) 플랫폼 초코 · 엠티처 사이트 QA/QC 점검 및 디지털 검수 운영 (대형 에듀테크 플랫폼 기능 및 데이터 검수 역량 축적)' },
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
      { description: '주식회사 에이브로 공식 법인 설립 (2016.07) · 디지털 콘텐츠 기획/제작 에이전시로서 비즈니스 개시' },
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
    description: '10년의 공교육·출판 플랫폼 검수 노하우에 AI 기술을 융합합니다. 정밀한 기획력을 바탕으로 가볍고 강력한 맞춤형 교육 소프트웨어와 지능형 시스템을 설계합니다.',
    items: ['안정적인 다중 AI 결합 설계', '도메인 특화 데이터 파싱', '실무 밀착형 AI 에이전트', '사용하기 쉬운 맞춤형 SaaS 구축']
  },
  {
    num: '02',
    title: 'AI Education & Learning Tools',
    englishTitle: 'AI EDUTECH & AGENT SOLUTIONS',
    description: 'EBSMath 등 공교육의 복잡한 교과/수학 콘텐츠를 개발했던 경험을 살려 에듀테크 도구를 만듭니다. 교수자를 위한 수학 수식 및 에듀텍스트 편리 저작 툴과, 학생들을 위한 맞춤 스마트 워크북을 설계합니다.',
    items: ['가르치는 이들을 위한 교육 AI 설계', '수식 및 문항 저작 보조 AI 엔진', '배우는 이들을 위한 대화형 학습 앱', '교육 문서 자동 정형화 솔루션']
  },
  {
    num: '03',
    title: '10-Year Digital Legacy Operations',
    englishTitle: 'TRUSTED PLATFORM LEGACY',
    description: 'EBSMath, 미래엔, 윌비스 등 주요 에듀테크 플랫폼의 기능 검수와 디지털 운영 파트너십. 비즈니스 품질과 신뢰도를 보장하기 위해, 다년간 축적해 온 디지털 기획 및 퍼블리싱 검수 역량을 최적으로 조화시킵니다.',
    items: ['안정성/신뢰성 최우선 대형 시스템 조율', 'EBS/출판사 정밀 수학 및 콘텐츠 기획 설계', '에듀테크 전문 QA & 퍼블리싱 체계 보장', '레거시 연계 비즈니스 인터랙션 보정']
  },
  {
    num: '04',
    title: 'AI Visual & Cinema Production',
    englishTitle: 'DIGITAL VIDEO & GENERATIVE SEAMLESS',
    description: '구미시청, 한국릴리, 롯데시네마 등 10년간 누적된 전문적인 비주얼 콘텐츠 기획 노하우를 바탕으로, Generative AI 기술을 접목한 영상 콘텐츠 제작 워크플로우를 설계합니다. 전문적인 기획 노하우와 선진 AI 툴체인을 유기적으로 결합하여 완성도 높은 하이 퀄리티 실감 미디어 콘텐츠를 생산해 냅니다.',
    items: ['브랜드 다큐멘터리 / 웰메이드 콘텐츠 영상', '교육 최적화 모션그래픽스 및 인포그래픽스', '생성형 비디오(Gen-2, Sora) 기반 워크플로우', '멀티미디어 채널 브랜딩 및 디지털 미디어 콘텐츠 포지셔닝']
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'PRD_002',
    name: 'AvroEdu Platform',
    client: '에이브로 교육 AI 기술 연구',
    domain: 'avro.co.kr/edu',
    tags: ['EduTech', 'AI-SaaS', 'Adaptive Learning Support', 'Education Utilities'],
    description: '공교육 및 대형 출판사의 풍부한 수학 기획력을 바탕으로 구축된 에듀테크 지원 플랫폼입니다. 가르치는 사람을 위한 스마트 문제 출제 및 교재 저작 기능과, 배우는 사람을 위한 대화형 맞춤 수학 튜터를 제공합니다.',
    isFeatured: true,
    status: 'LAUNCHING SOON'
  },
  {
    id: 'CASE_001',
    name: 'EBSMath 콘텐츠 개발 파트너십',
    client: '한국교육방송공사 (EBS)',
    domain: 'ebsmath.co.kr',
    tags: ['EBSMath', '수업지도안', '교육 콘텐츠 개발', 'Legacy Operations'],
    description: '2022년부터 2025년까지 공교육 및 상용 수학 콘텐츠의 학습 활용 방안을 기획하고, 맞춤형 수학 수업지도안 연구 및 개발 업무를 수행하며 교육 콘텐츠 분야의 풍부한 도메인 지식을 축적해왔습니다.',
    isFeatured: false,
    status: 'CASE STUDY'
  },
  {
    id: 'CASE_002',
    name: '미래엔 초코 / 엠티처 플랫폼 검수 및 QA',
    client: '(주)미래엔',
    domain: 'mirae-n.com',
    tags: ['초코', '엠티처', 'QA / QC', '안정적 운영 레거시'],
    description: '교과서 출판사 미래엔의 온라인 교육 서비스인 초코 플랫폼과 교사용 교육 지원 시스템 엠티처 전반의 디지털 기능 검수 및 QA 퍼블리싱 지원을 수행하여 안정적이고 편리한 서비스 운영에 기여하였습니다.',
    isFeatured: false,
    status: 'CASE STUDY'
  },
  {
    id: 'CASE_003',
    name: '타임폴리오투자자문 브랜드 및 웹 구축',
    client: '타임폴리오 (TIMEFOLIO)',
    domain: 'timefolio.co.kr',
    tags: ['웹 인프라', 'UI UX', 'Identity Design'],
    description: '자산운용사인 타임폴리오의 공식 웹사이트 고도화 작업 및 기업 전용 BI/CI 디자인 패키지를 설계하여 사용자 친화적인 온라인 채널을 구축하였습니다.',
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
  { step: '05', title: '애자일 기반 서비스/SaaS 엔진 신속한 배포', englishTitle: 'AGILE SaaS DEPLOYMENT' },
  { step: '06', title: '정밀 결과 리포팅 및 실무 지속 고도화', englishTitle: 'VALUE SCALE-UP' }
];
