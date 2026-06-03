import { TimelineItem, ServiceItem, ProjectItem, PartnerItem, ProcessStep } from './types';

export const timelineData: TimelineItem[] = [
  {
    year: '2026',
    events: [
      { description: 'AI 마케팅 솔루션 사업 본격화 · 자체 마케팅 툴 개발 및 종합 마케팅 대행 영역 확장', isHighlight: true },
      { description: 'mathhwp.com 출시 · 수학 PDF→아래한글 AI 변환 서비스 (라스트마일 협업)', isHighlight: true },
      { description: 'blogstudio.live 출시 임박 · AI 기반 OSMU 콘텐츠 자동화 SaaS (자체 서비스)', isHighlight: true }
    ]
  },
  {
    year: '2022 — 2025',
    events: [
      { description: 'EBSMath 콘텐츠 활용방안 연구 / 학습서비스 연구활동 / 수업지도안 개발 · 4년 연속 파트너십 (2022–2025)' },
      { description: '미래엔 초코 · 엠티처 사이트 QA · QC 및 콘텐츠 개발 (2023–2025)' },
      { description: '구미시청 산업유산투어 공연형 테마버스 안내 영상 제작 (2023)' },
      { description: '맥스(MAX)농구교실 홈페이지 구축 및 로고 디자인 (2023)' },
      { description: '윌비스 1억뷰N잡 콘텐츠 개발 자문 (2022)' },
      { description: '하나로컨설팅노무법인 유튜브 영상 제작 및 채널 운영 (2022)' },
      { description: '동서대학교 LINC 3.0사업단 산학협약 체결 (2022)' }
    ]
  },
  {
    year: '2018 — 2021',
    events: [
      { description: '타임폴리오투자자문 사이트 구축 · BI & CI 제작 (2018–2022)' },
      { description: '미디어크루 동영상 강의 및 홍보영상 제작 (2018)' },
      { description: '한국릴리 제약 연구 소개영상 제작 (2021)' },
      { description: '롯데시네마 창립기념 홍보영상 / 국기원 태권도 영상 제작 (2020)' }
    ]
  },
  {
    year: '2016 — 2017',
    events: [
      { description: '주식회사 에이브로 법인 설립 (2016.07)', isHighlight: true },
      { description: '서울예술대학교 산학협력단 차세대 실감콘텐츠 영상 제작 (2017.12)' },
      { description: '아시아문화원 차세대 실감콘텐츠 컨셉 및 키비주얼 개발 (2017.12)' },
      { description: '쥬스컴퍼니 미스터 레이디 · 남산골 한옥마을 온라인 홍보대행 (2017.10–11)' },
      { description: '동국대학교 산학협력단 협력 프로젝트 (2017.11)' },
      { description: '투모로우 홍보영상 기획 및 컨설팅 (2016.12)' },
      { description: '이코브리지 디자인 및 퍼블리싱 (2016.11–12)' },
      { description: '한국쓰리디프린팅협회 K-ICT 디바이스 FAB 판교 사례 발표 행사 (2016.12)' }
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    num: '01',
    title: 'AI Engineering',
    englishTitle: 'LLM · AGENT · CORE',
    description: 'Claude · GPT · Gemini 등 최신 오픈AI/앤트로픽/구글 모델을 통합한 맞춤형 언어모델 솔루션 및 의사결정형 자율 에이전트 시스템을 기획하고 완전하게 개발합니다. 정교한 RAG 데이터베이스 연동과 MCP 통합, 최적의 인하우스 오케스트레이션을 보장합니다.',
    items: ['LLM 연동 및 미세조정', '자율 협업형 AI 에이전트', 'RAG 지식 허브 구축', '프롬프트 옵티마이징']
  },
  {
    num: '02',
    title: 'Product Development',
    englishTitle: 'WEB · APP · SAAS',
    description: '기업 홍보 웹사이트, 고도화된 기능성 플랫폼, 비즈니스 지향 SaaS 제품 및 크로스플랫폼 모바일 앱을 풀스택으로 설계·개발합니다. 빠른 실행에 최신의 컴포넌트 아키텍처와 대규모 백엔드 트래픽 처리 노하우를 주입합니다. mathhwp.com 서비스가 대표적인 실서비스 빌드 성과입니다.',
    items: ['반응형 웹 & 플랫폼 개발', '네이티브/하이브리드 모바일 앱', '고성능 비즈니스 SaaS', '유지보수 및 인프라 운영']
  },
  {
    num: '03',
    title: 'AI Automation',
    englishTitle: 'WORKFLOW · TOOLS',
    description: '반복적인 정보 수집, 원시 데이터 포맷팅, 이종 도구 간의 데이터 동기화, 대량의 문서 분석 및 정보 분류 프로세스를 자동화합니다. API 기반 오토메이션과 AI 판단 단계를 엮음으로써 현업 부서의 실무 리소스를 대폭 경감합니다.',
    items: ['비즈니스 프로세스 자동화 (BPA)', '비정형 문서 정보 추출', '자동 마케팅 발행 루틴', '맞춤형 AI 내부 유틸리티']
  },
  {
    num: '04',
    title: 'Digital Production',
    englishTitle: 'VIDEO · CONTENT',
    description: '10년 동안 정교하게 다듬어온 콘텐츠 시각 기획 능력과 현대의 생성형 크리에이션 AI 스택을 접목합니다. 모션 그래픽스, 교육용 홍보 영상, 기업 브랜딩 콘텐츠 기획, SNS 미디어 가치 상승을 위한 디지털 시각 산출물을 초음속으로 완수합니다.',
    items: ['모션 그래픽스 & 홍보 영상', '교육용 인터랙티브 콘텐츠', '유튜브 & 미디어 채널 운영', '생성형 AI 비디오 메이킹']
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'PRD_001',
    name: 'BlogStudio',
    client: '자체 SaaS 제품',
    domain: 'blogstudio.live',
    tags: ['AI', 'SaaS', 'OSMU', 'Multi-LLM', 'Creative Automation'],
    description: '단 하나의 마스터 소스 텍스트로부터 다채로운 배포 포맷을 일괄 변환해내는 원소스 멀티유즈(OSMU) 콘텐츠 허브. 네이버 블로그 포스팅, 인스타그램 캡션, 숏폼 스크립트, 뉴스레터를 AI 에이전트가 동시에 조율하여 생성 및 발행합니다. 2026년 에이브로의 대표적인 차세대 릴리스 플랫폼.',
    isFeatured: true,
    status: 'LAUNCHING SOON'
  },
  {
    id: 'PRD_002',
    name: 'mathhwp',
    client: '(주)라스트마일 협업 빌드',
    domain: 'mathhwp.com',
    tags: ['AI', 'OCR', 'hwp', 'LaTex', 'EduTech'],
    description: '구글 Gemini AI 분석 엔진과 고정밀 특화 OCR 기술을 융합하여, 수학 PDF 파일에 포함된 수식과 기호들을 오판 없이 완전히 편집 가능한 아래한글(HWPX) 수식으로 원클릭 변환해내는 대중적 에듀테크 서비스입니다. 교사 및 수학 교육 기업에 전례 없는 가치를 전하고 있습니다.',
    isFeatured: false,
    status: 'LIVE'
  },
  {
    id: 'CASE_001',
    name: 'EBSMath 콘텐츠 개발',
    client: '한국교육방송공사 (EBS)',
    domain: 'ebsmath.co.kr',
    tags: ['EBSMath', 'LINC', '수업지도안', '4년 연속'],
    description: '2022년부터 2025년까지 연속으로 EBS의 핵심 플랫폼인 EBSMath 콘텐츠 활용방안 연구 용역, 중학수학 학습서비스 연구활동, 입체 클래스 매직 수업지도안 개발 등을 수행하며 공교육 공조 파트너로서 공헌해왔습니다.',
    isFeatured: false,
    status: 'CASE STUDY'
  },
  {
    id: 'CASE_002',
    name: '미래엔 초코 & 엠티처 파이프라인',
    client: '(주)미래엔',
    domain: 'mirae-n.com',
    tags: ['엠티처', '초코', 'QA / QC', '퍼블리싱 검증'],
    description: '교과 교육 출판사 미래엔의 플래그십 학생 커뮤니티 "초코" 플랫폼 및 핵심 지원 앰티처 채널의 완벽한 기능 무결성 보장을 극대화하기 위해 다년간의 전문 품질 검증(QA/QC) 및 퍼블리싱 가속화를 수행하였습니다.',
    isFeatured: false,
    status: 'CASE STUDY'
  },
  {
    id: 'CASE_003',
    name: '윌비스 1억뷰N잡 전문화',
    client: '(주)윌비스',
    domain: 'njobler.net',
    tags: ['컨설팅', '콘텐츠 자문', '온라인 아카데미'],
    description: '온라인 멀티 에듀 플랫폼 윌비스의 미디어 1억뷰N잡 콘텐츠 전략 구성 자문을 수행하여 교육 채널 다양화에 기여하였습니다.',
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
  { step: '01', title: '전문 플래너 1:1 상담', englishTitle: 'DEDICATED PLANNER' },
  { step: '02', title: '세부 요구사항 규격화', englishTitle: 'REQUIREMENTS DESIGN' },
  { step: '03', title: '맞춤 솔루션 개념 기획', englishTitle: 'CONCEPT ARCHITECTURE' },
  { step: '04', title: '합리적 견적 & 일정 확정', englishTitle: 'FINAL AGREEMENT' },
  { step: '05', title: '정밀 엔지니어링 실행', englishTitle: 'AGILE DEPLOYMENT' },
  { step: '06', title: '결과 분석 및 지속적 고도화', englishTitle: 'VALUE RETROSPECTIVE' }
];
