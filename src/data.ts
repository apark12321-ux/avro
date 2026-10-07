import { 
  TimelineItem, 
  ServiceCategory, 
  SubServiceItem, 
  ProjectItem, 
  PartnerItem, 
  ProcessStep, 
  GuideItem 
} from './types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'munhang',
    num: '01',
    title: '수학 문항 조판 & 교재 외주',
    subtitle: 'HWP 수식 타이핑 · PDF 변환 · 정밀 그래프 작도 · 자체 교재',
    englishTitle: 'MATHEMATICS TYPOGRAPHY & HWP PUBLISHING',
    description: '한글 수식 편집기의 난해한 분수, 행렬, 루트 기호부터 정밀 함수 그래프 작도까지. 1픽셀의 오차도 없는 출판 인쇄용 무결성 HWP/HWPX 조판본을 납품합니다.',
    highlights: ['샘플 3문항 무료 조판', '비밀유지약정서(NDA) 상시 체결', '한 번에 300문항 이상 대량 대응', '인쇄용 고해상도 벡터 도형']
  },
  {
    id: 'homepage',
    num: '02',
    title: '학원 & 공부방 전문 웹사이트',
    subtitle: '네이버 검색 노출 · 모바일 최적화 원페이지 · 빠른 상담 신청 전환',
    englishTitle: 'ACADEMY & TUTOR WEB DEVELOPMENT',
    description: '블로그만으로는 한계가 있는 학원 신뢰도와 상담 유입을 극대화합니다. 학원 브랜딩 홈페이지부터 1인 공부방·과외 선생님을 위한 초경량 원페이지까지 맞춤 제작합니다.',
    highlights: ['네이버 서치어드바이저 등록 보장', '스마트폰 상담 신청 1초 연결', '유지보수 월 관리 체계', '학원 원장님 도메인 명의 100% 보장']
  },
  {
    id: 'youtube',
    num: '03',
    title: '강사 & 시니어 유튜브 세팅·교육',
    subtitle: '채널 개설 대행 · 무노출 강의 세팅 · 5060 시니어 1:1 맞춤 코칭',
    englishTitle: 'YOUTUBE CHANNEL SETUP & EDUCATION',
    description: '복잡한 방송 장비 없이 스마트폰 하나로 시작하는 유튜브. 선생님의 수업 녹화부터 50대·60대 시니어의 첫 채널 개설까지 알기 쉬운 눈높이로 지도합니다.',
    highlights: ['얼굴 노출 없는 수업 녹화 세팅', '1:1 방문 및 원격 맞춤 교육', '수익 창출 요건 가이드', '채널 아트 및 썸네일 템플릿 제공']
  }
];

export const subServices: SubServiceItem[] = [
  {
    id: 'hangul-equation-typing',
    name: '수학 문제 한글 수식 타이핑',
    category: 'munhang',
    tagline: '손글씨·모의고사 수식을 표준 HWP 수식 명령어로 완벽 전산화',
    keywords: ['수학 문제 한글 타이핑', '수식 입력 외주', '시험지 타이핑'],
    description: '손글씨 원고나 복잡한 수식이 섞인 시험지를 한글 수식 편집기 표준 규격에 맞추어 깔끔하게 타이핑합니다. 대량 분량도 균일한 조판 규격을 유지합니다.',
    features: ['분수, 루트, 행렬, 미적분 기호 정밀 입력', '양식 가이드(글꼴, 행간, 자간) 준수', '오탈자 3회 교차 검수'],
    turnaroundTime: '100문항 기준 24~48시간',
    priceNote: '문항당 최적 단가 산정',
    badge: 'BEST SELLER'
  },
  {
    id: 'pdf-to-hwp',
    name: '스캔 PDF 시험지 HWP 변환',
    category: 'munhang',
    tagline: '깨진 글자와 뭉개진 수식을 재활용 가능한 원본 HWP로 복원',
    keywords: ['PDF 시험지 한글 변환', '스캔 시험지 hwp 변환', 'pdf hwp 수식'],
    description: '단순 OCR 프로그램으로는 깨지는 수식과 기호를 전문 에디터가 직접 재입력하여 바로 편집하고 시험지로 인쇄할 수 있는 완벽한 HWP 문서로 만듭니다.',
    features: ['뭉개진 수식 기호 100% 수동 복원', '2단 조판 시험지 레이아웃 복원', '인쇄 시 번짐 없는 선명도'],
    turnaroundTime: '시험지 1종(20~25문항) 당 당일~익일 출고',
    badge: '인기 서비스'
  },
  {
    id: 'math-figure',
    name: '수학 도형 & 함수 그래프 벡터 작도',
    category: 'munhang',
    tagline: '인쇄해도 흐려지지 않는 고해상도 지오지브라/벡터 그래프 제작',
    keywords: ['수학 도형 이미지 제작', '함수 그래프 외주', '도형 재작도'],
    description: '스캔본의 흐릿한 기하 도형과 좌표평면 그래프를 벡터 선으로 정밀 재작도합니다. 한글 문서 내에 배치해도 확대 시 깨짐 없이 깔끔하게 인쇄됩니다.',
    features: ['각도, 선분, 기호, 꼭짓점 라벨 정확 배치', '삼각함수, 이차곡선, 입체도형 정밀 렌더', 'HWP 글자처럼 취급 완벽 연동'],
    turnaroundTime: '개당 평균 10~20분 신속 납품'
  },
  {
    id: 'answer-explanation',
    name: '정답 및 상세 해설지 조판',
    category: 'munhang',
    tagline: '문제 번호와 해설 정렬이 어긋나지 않는 가독성 최상급 해설지',
    keywords: ['해설지 조판 외주', '정답지 편집', '해설 타이핑'],
    description: '단계별 풀이 과정, 보충 설명 박스, 참고 공식 팁까지 한눈에 들어오도록 폰트 크기와 여백을 치밀하게 계산하여 조판합니다.',
    features: ['문항 번호 매칭 무결성 검증', '풀이 단계별 들여쓰기 정돈', '정답표 별도 분리 제공 가능'],
    turnaroundTime: '교재 분량에 따른 일정 조율'
  },
  {
    id: 'academy-textbook',
    name: '학원 자체 교재 기획 & 편집',
    category: 'munhang',
    tagline: '학원 로고와 독자적 커리큘럼을 담은 명품 내신·수능 대비 교재',
    keywords: ['학원 자체 교재 제작', '학원 교재 편집 외주', '학원 맞춤 출판'],
    description: '인근 학교 기출문제와 학원만의 비법 문항을 모아 브랜드 가치를 높여주는 완성형 교재 책자로 디자인하고 조판합니다. 표지부터 내지까지 인쇄소 직결 규격 지원.',
    features: ['학원 시그니처 표지 & 내지 템플릿', '단원별 목차 및 빠른 정답 섹션', '인쇄소 전달용 PDF + HWP 원본 납품'],
    turnaroundTime: '권당 5~10일 (사전 협의)',
    badge: '학원장 추천'
  },
  {
    id: 'academy-homepage',
    name: '학원 브랜드 전문 웹사이트',
    category: 'homepage',
    tagline: '학부모 신뢰를 얻고 상담 예약으로 연결되는 반응형 웹사이트',
    keywords: ['학원 홈페이지 제작', '교육업체 홈페이지', '학원 소개 사이트'],
    description: '원장님 인사말, 강사진 소개, 시간표, 시설 안내, 상담 신청 폼을 갖추어 네이버 플레이스 및 지도 검색과 연동되는 고품질 웹사이트를 제작합니다.',
    features: ['네이버·구글 검색 최적화(SEO) 세팅', '모바일 / 태블릿 / PC 완전 반응형', '학부모 카카오톡/문자 즉시 상담 연결'],
    turnaroundTime: '기획 확정 후 7~10일'
  },
  {
    id: 'tutor-onepage',
    name: '공부방 & 과외 1인 원페이지',
    category: 'homepage',
    tagline: '거품 없는 비용으로 하루 만에 완성하는 소개 페이지',
    keywords: ['공부방 홈페이지', '과외 선생님 홈페이지', '교습소 랜딩페이지'],
    description: '복잡한 기능 없이 선생님의 실력과 학생 후기, 수업 시간표, 실시간 상담 신청 버튼만 임팩트 있게 담아내는 가성비 원페이지 사이트입니다.',
    features: ['단 1페이지로 끝나는 초스피드 로딩', '월 서버 관리비 최소화', '지도 및 길찾기 버튼 탑재'],
    turnaroundTime: '원고 수령 후 3~5일',
    badge: '가성비 1위'
  },
  {
    id: 'youtube-channel',
    name: '학원 & 강사 유튜브 채널 개설 대행',
    category: 'youtube',
    tagline: '얼굴을 비추지 않고도 학생들에게 신뢰를 주는 수업 아카이빙',
    keywords: ['유튜브 채널 개설 대행', '유튜브 세팅 교육', '강사 유튜브'],
    description: '칠판 수업이나 아이패드 필기 화면을 녹화하여 유튜브에 올리고 비공개/일부공개로 원생들에게 복습용 링크를 제공하는 워크플로우를 완벽하게 세팅해 드립니다.',
    features: ['화면 녹화 프로그램 세팅 및 사용법 전수', '채널 프로필, 배너, 워터마크 세팅', '학생용 재생목록 관리 요령 전수'],
    turnaroundTime: '원격 2시간 또는 1회 방문 세팅'
  },
  {
    id: 'senior-start',
    name: '5060 시니어 유튜브 시작 1:1 코칭',
    category: 'youtube',
    tagline: '어려운 전문 용어 없이, 스마트폰으로 즐겁게 시작하는 유튜브',
    keywords: ['50대 유튜브 시작', '60대 유튜브 교육', '시니어 유튜브'],
    description: '복잡한 영상 편집 툴 대신 스마트폰 기본 기능과 쉬운 어플로 일상, 취미, 지식을 영상으로 기록하고 세상과 소통할 수 있도록 친절하게 안내합니다.',
    features: ['스마트폰 촬영 구도 및 음성 잘 들리는 팁', '무료 앱을 통한 초간단 자막 넣기', '영상 업로드 및 댓글 소통 실습'],
    turnaroundTime: '주 1~2회 맞춤 커리큘럼'
  }
];

export const mathHwpInfo = {
  title: 'mathhwp.com 연계 안내',
  tagline: '소량 셀프 변환은 mathhwp.com, 대량·맞춤 조판은 에이브로',
  description: '1~2문항의 가벼운 수식이나 빠른 셀프 변환이 필요할 때는 무료 웹 도구 mathhwp.com을 활용하시고, 50문항 이상의 대량 발주, 스캔 시험지 전산화, 고난도 교재 조판은 에이브로에 맡기시면 가장 효율적입니다.',
  linkUrl: 'https://mathhwp.com',
  features: [
    '소량 빠른 셀프 변환: mathhwp.com 웹 브라우저에서 즉시 해결',
    '대량 수백 문항 외주: 에이브로 전문 에디터가 수동 정밀 조판 & 무결성 보증',
    '맞춤형 학원 교재 편집: 인쇄소 규격 책자 편집까지 원스톱 완성'
  ]
};

export const trustGuarantees = [
  {
    title: '샘플 3문항 무료 제작',
    desc: '품질을 의심하며 망설이실 필요 없습니다. 실제 원고의 3문항을 먼저 무료로 조판해 드립니다. 확인 후 본작업을 결정하세요.'
  },
  {
    title: '비밀유지약정(NDA) 100% 보장',
    desc: '출제 전 시험지, 학원 독점 비법 교재는 최고 수준의 보안으로 보호됩니다. 요청 시 전자 서명 NDA를 즉시 발급합니다.'
  },
  {
    title: '한 번에 300문항 대량 대응',
    desc: '시험 기간에 몰리는 수백 문항도 자체 정예 수식 조판팀이 분할 교차 검수하여 약속된 기한 내 차질 없이 납품합니다.'
  },
  {
    title: '0% 레이아웃 전위 보증',
    desc: '기기나 한글 버전에 따라 수식이 찌그러지거나 잘리는 현상이 없도록 한글 표준 벡터 폰트와 규격 여백을 준수합니다.'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'CASE_001',
    name: '전국 단위 모의고사 수학 30회차 표준 조판',
    client: '수학 전문 출판 및 입시 연구소',
    tags: ['모의고사 조판', '수식 표준화', '고난도 기하 도형', '무결점 교차검수'],
    description: '고등부 수능 및 내신 대비 고난도 수학 모의고사 30회차(총 900문항)의 한글(HWP) 표준 수식 입력 및 출판 인쇄용 벡터 기하 그래프 작도를 전담하여 정밀 납품했습니다.',
    isFeatured: true,
    status: 'CASE STUDY'
  },
  {
    id: 'CASE_002',
    name: '중학 수학 시험지 18종 일괄 조판 납품',
    client: '대형 입시 에듀테크사',
    tags: ['300문항+ 대량 발주', 'HWP 시험지 조판', '도형 정밀 재작도'],
    description: '중학교 1~3학년 1학기·2학기 기말고사 대비 시험지 총 18종(400여 문항)을 의뢰받아 스캔본 상태의 손글씨 원고를 인쇄용 HWP로 5영업일 만에 무결점 납품 완료했습니다.',
    isFeatured: true,
    status: 'LIVE'
  },
  {
    id: 'CASE_003',
    name: '라스트마일 Blogstudio 에디터 기획',
    client: '라스트마일 (LASTMILE)',
    domain: 'blogstudio.ai',
    tags: ['스마트 에디터', 'UI/UX 설계', '저작 엔진'],
    description: '수식과 텍스트가 결합된 지능형 블로그 저작 엔진 Blogstudio의 사용자 워크플로우 설계 및 복합 에디터 UI/UX 기획에 참여하여 전문성을 입증했습니다.',
    isFeatured: false,
    status: 'CASE STUDY'
  },
  {
    id: 'CASE_004',
    name: '수학 전문 학원 맞춤 내신 교재 6권 조판',
    client: '대치·목동권 수학 전문 학원',
    tags: ['학원 자체 교재', '도형 120개 작도', '인쇄용 PDF 납품'],
    description: '학원 원장님의 고난도 기출 변형 문항 600문항을 2단 단행본 형태로 레이아웃하고, 120여 개의 복합 기하 도형을 벡터로 전면 재작도하여 정규 교재로 제작했습니다.',
    isFeatured: true,
    status: 'LIVE'
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: 'Present & Beyond',
    events: [
      { description: '문항 조판 외주 및 학원 전문 웹 인프라 서비스 대규모 표준화', isHighlight: true },
      { description: '샘플 3문항 무료 제작 시스템 및 온라인 실시간 조판 견적기 도입' },
      { description: 'mathhwp.com 연계를 통한 소량 셀프 변환 및 대량 맞춤 조판 시너지 확장' }
    ]
  },
  {
    year: '2022 — 2025',
    events: [
      { description: '전국 단위 수학 모의고사 및 수능 기출 변형 문항 정밀 조판 체계 확립' },
      { description: '중학 수학 및 고등 내신 시험지 50종 이상 누적 납품 (오탈자 무사고)' },
      { description: '라스트마일 Blogstudio 상세 에디터 UI/UX 기획 참여' }
    ]
  },
  {
    year: '2016 — 2021',
    events: [
      { description: '주식회사 에이브로 법인 설립 및 교육/미디어 콘텐츠 저작 솔루션 개척' },
      { description: '국기원, 롯데시네마 등 주요 기관 및 엔터프라이즈 디지털 콘텐츠 구축' }
    ]
  }
];

export const partnersData: PartnerItem[] = [
  { name: '수학 전문 출판사', type: 'PUBLISHER', isHighlight: true },
  { name: '라스트마일', type: 'AI PLATFORM', isHighlight: true },
  { name: '수학학원 연합', type: 'ACADEMY NETWORK', isHighlight: true },
  { name: '대치·목동 입시학원', type: 'ACADEMY', isHighlight: true },
  { name: '롯데시네마', type: 'ENTERTAINMENT', isHighlight: false },
  { name: '서울예대', type: 'UNIVERSITY', isHighlight: false }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: '원고 접수 & 무료 샘플 3문항',
    englishTitle: 'SAMPLE 3-QUESTION TEST',
    description: '시험지나 손글씨 원고를 보내주시면, 가장 난해한 3문항을 먼저 무료로 조판하여 전달해 드립니다. 직접 한글 파일(HWP)을 열어보고 품질을 검증하세요.'
  },
  {
    step: '02',
    title: '투명 견적 확정 & 보안 NDA 체결',
    englishTitle: 'TRANSPARENT QUOTE & NDA',
    description: '문항 수와 도형 개수에 따른 정찰제 견적과 납기일을 확정합니다. 시험지 유출 방지를 위한 법적 효력의 비밀유지약정서(NDA)를 상호 날인합니다.'
  },
  {
    step: '03',
    title: '전담 에디터 조판 & 무결성 교차 검수',
    englishTitle: 'PRECISION TYPING & QA',
    description: '수학 전문 에디터가 수식을 정밀 조판하고, 벡터 도형을 재작도한 뒤 번호 정렬 및 오탈자를 3회 교차 검수하여 납품합니다. 수정 요청 시 즉각 반영합니다.'
  }
];

export const guidesData: GuideItem[] = [
  {
    id: 'hangul-equation-cheatsheet',
    title: '한글 수식 편집기 단축키 & 분수/루트 명령어 치트시트',
    category: '문항 조판 팁',
    keyword: '한글 수식 편집기 명령어',
    readTime: '3분 소요',
    summary: '시험지 조판 작업 속도를 3배 높여주는 핵심 명령어 모음. over, sqrt, matrix, sub/sup 문법과 정렬 요령을 정리했습니다.',
    keyPoints: [
      '분수: {분자} over {분모}',
      '루트: sqrt {식} 또는 root {n} of {식}',
      '연립방정식 정렬: cases {식1 # 식2}',
      '공백 제어: 큰 빈칸은 ` (백틱), 작은 빈칸은 ~ (물결)'
    ]
  },
  {
    id: 'scan-pdf-to-hwp',
    title: '스캔 PDF 시험지를 깨짐 없이 HWP로 옮기는 3단계',
    category: '문항 조판 팁',
    keyword: '스캔 pdf 한글 변환 방법',
    readTime: '4분 소요',
    summary: '일반 OCR로 수식을 변환하면 왜 깨질까요? 이미지 해상도 보정부터 수식 수동 타이핑, 2단 레이아웃 복원까지 실전 워크플로우를 소개합니다.',
    keyPoints: [
      '일반 OCR 프로그램은 수학 기호(∑, ∫, √)를 한자나 특수문자로 오인식',
      '도형은 스캔본을 오려붙이지 말고 지오지브라/벡터로 재작도해야 인쇄 시 선명',
      '문제 번호 스타일과 본문 폰트를 통일해야 페이지 분량이 팽창하지 않음'
    ]
  },
  {
    id: 'academy-homepage-cost',
    title: '학원 홈페이지 제작 비용, 바가지 쓰지 않는 5가지 기준',
    category: '홈페이지 가이드',
    keyword: '학원 홈페이지 제작 비용',
    readTime: '5분 소요',
    summary: '수백만 원짜리 복잡한 포털이 과연 필요할까요? 학부모가 실제로 보고 등록하는 페이지 구성과 합리적인 견적 산출법을 짚어드립니다.',
    keyPoints: [
      '학부모의 85% 이상은 스마트폰으로 학원 검색: 모바일 원페이지가 가장 효과적',
      '도메인과 호스팅 소유권을 반드시 원장님 명의로 등록해야 업체 폐업 시에도 안전',
      '네이버 서치어드바이저와 플레이스 연동이 누락되면 아무도 찾아오지 않음'
    ]
  },
  {
    id: 'senior-youtube-setup',
    title: '50대·60대도 가능한 스마트폰 유튜브 첫걸음 세팅법',
    category: '유튜브 가이드',
    keyword: '50대 유튜브 시작',
    readTime: '4분 소요',
    summary: '비싼 카메라와 조명은 필요 없습니다. 가지고 계신 스마트폰 하나로 시작하는 선명한 녹화와 목소리 깨끗하게 녹음하는 꿀팁.',
    keyPoints: [
      '영상 화질보다 더 중요한 것은 목소리: 1~2만 원대 핀마이크 하나면 방송국 음질',
      '얼굴을 보이기 부담스럽다면 책상 위 손동작이나 칠판 화면 녹화로 시작',
      '제목에 시청자가 검색할 단어를 반드시 포함해야 알고리즘 추천이 시작됨'
    ]
  }
];
