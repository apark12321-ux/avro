import { TimelineItem, ServiceItem, ProjectItem, PartnerItem, ProcessStep } from './types';

export const timelineData: TimelineItem[] = [
  {
    year: 'Present & Beyond',
    events: [
      { description: '에듀테크 전문 AI 서비스 기획 및 디지털 저작 도구 개발 사업 확대', isHighlight: true },
      { description: '실무 지향형 생성형 AI 에이전트 및 교육용 SaaS 솔루션 최적화 공급' }
    ]
  },
  {
    year: '2022 — 2025',
    events: [
      { description: 'EBSMath 핵심 콘텐츠 기획 및 교수학습지도안 4년 연속 개발' },
      { description: '라스트마일 Blogstudio 상세 에디터 UI/UX 기획 및 개발 설계 기여' }
    ]
  },
  {
    year: '2016 — 2021',
    events: [
      { description: '주식회사 에이브로 법인 설립 및 대형 플랫폼 연계 웹 서비스 구축 개시' },
      { description: '국기원, 롯데시네마 등 주요 기업 및 기관 대상 디지털 미디어 콘텐츠 구축 완수' }
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    num: '01',
    title: 'AI Engineering & SaaS',
    englishTitle: 'LLM · AGENT · SaaS ENGINE',
    description: '10년의 견고한 도메인 노하우와 기획력을 이식한 실용적인 AI SaaS를 구축합니다. 기업 실무진이 바로 사용 가능한 인텔리전트 에이전트와 지능형 비즈니스 워크플로우를 최적화 설계합니다.',
    items: ['다중 AI 모델 지능형 결합 설계', '비정형 데이터 정제 및 파싱', '실무형 AI 에이전트 개발', '사용성이 명확한 맞춤형 SaaS 구축']
  },
  {
    num: '02',
    title: 'AI Education & Learning Tools',
    englishTitle: 'AI EDUTECH & AGENT SOLUTIONS',
    description: 'EBSMath 등 공교육 플랫폼을 설계한 실제 경험을 바탕으로, 학습 효율을 비약적으로 개선하는 스마트 에듀테크 도구를 제작합니다. 수식 저작 툴 및 개인화 스마트 워크북을 구축합니다.',
    items: ['교육 특화 맞춤 AI 모델 설계', '에듀 텍스트 및 수식 저작 보조', '스마트 대화형 학습 위젯', '수리 영역 디지털 교재 변환']
  },
  {
    num: '03',
    title: 'Digital Legacy Operations',
    englishTitle: 'TRUSTED PLATFORM LEGACY',
    description: '대형 교육 포털 및 출판사 서비스의 면밀한 운영 검수(QA) 경력을 기반으로, 복잡성 높은 비즈니스 시스템의 조율과 검수 운영 체계를 빈틈없이 이끌어 안정성을 지원합니다.',
    items: ['대형 시스템 기능 및 가이드 점검', '에듀테크 전문 퍼블리싱 검수', '데이터 무결성 검증 체계 보장', '웹 플랫폼 품질 개선 어드바이징']
  },
  {
    num: '04',
    title: 'AI Visual & Digital Media',
    englishTitle: 'VISUAL CONTENT GENERATION',
    description: '10년 동안 누적된 전문적인 비주얼 콘텐츠 자산을 바탕으로, Generative AI 툴체인을 영리하게 접목하여 독창적이고 생산성 높은 하이 퀄리티 디지털 콘텐츠를 기획·생산해냅니다.',
    items: ['브랜드 웰메이드 콘텐츠 기획·제작', '교육 특화 모션그래픽스 영상 시각화', '생성형 AI 비디오 워크플로우 설계', '다채널 브랜딩 비주얼 최적화']
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'CASE_004',
    name: '라스트마일 Blogstudio 개발 기획',
    client: '라스트마일 (LASTMILE)',
    domain: 'blogstudio.ai',
    tags: ['개발 기획', 'UI UX 설계', '스마트 에디터', '블로그 저작 도구'],
    description: '블로그 및 디지털 콘텐츠 저작 지원 툴인 Blogstudio의 직관적인 사용자 워크플로우 설계, 인텔리전트 에디터 UI/UX 기획 및 백엔드 연동 관련 상세 개발 기획 전반에 주도적으로 참여하여 프로젝트 기반의 완성도 구축에 적극 기여하였습니다.',
    isFeatured: true,
    status: 'CASE STUDY'
  },
  {
    id: 'CASE_001',
    name: 'EBSMath 콘텐츠 개발 파트너십',
    client: '한국교육방송공사 (EBS)',
    domain: 'ebsmath.co.kr',
    tags: ['EBSMath', '수업지도안', '교육 콘텐츠 개발', 'Legacy Operations'],
    description: '2022년부터 2025년까지 공교육 및 상용 수학 콘텐츠의 학습 활용 방안을 기획하고, 맞춤형 수학 수업지도안 연구 및 개발 업무를 수행하며 교육 콘텐츠 분야의 풍부한 도메인 지식을 축적해왔습니다.',
    isFeatured: true,
    status: 'CASE STUDY'
  }
];

export const partnersData: PartnerItem[] = [
  { name: 'EBSMath', type: 'EDUCATIONAL PORTAL', isHighlight: true },
  { name: '라스트마일', type: 'AI PLATFORM', isHighlight: true },
  { name: '한국릴리', type: 'PHARMACEUTICAL', isHighlight: false },
  { name: '롯데시네마', type: 'ENTERTAINMENT', isHighlight: false },
  { name: '서울예대', type: 'UNIVERSITY', isHighlight: false },
  { name: '구미시청', type: 'GOVERNMENT', isHighlight: false }
];

export const processSteps: ProcessStep[] = [
  { step: '01', title: '1:1 도메인 및 데이터 정밀 분석', englishTitle: 'DOMAIN DIAGNOSIS' },
  { step: '02', title: '맞춤형 AI 아키텍처 및 화면 기획 설계', englishTitle: 'ARCHITECTURE & SYSTEM DESIGN' },
  { step: '03', title: '검증된 PoC 및 고성능 SaaS 신속 배포', englishTitle: 'SaaS ENGINE BUILD & DEV' }
];
