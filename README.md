# AVRO — AI Engineering Studio

AVRO 공식 웹사이트입니다. React 19, TypeScript, Vite, Tailwind CSS v4, Motion 기반의 인터랙티브 포트폴리오/회사 소개형 랜딩 페이지입니다.

## 현재 개발 기준

- GitHub: `apark12321-ux/avro`
- 기본 브랜치: `main`
- 작업 브랜치: `sky-184-theme`
- Vercel 프로젝트: `avro`
- 주요 작업 이슈: [#1 The Sky 184 테마 반영 및 AVRO 레이아웃 개선](https://github.com/apark12321-ux/avro/issues/1)

## 로컬 실행

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 검증 명령어

```bash
npm run lint
npm run build
npm run preview
```

## 기술 스택

- React 19
- TypeScript
- Vite 6
- Tailwind CSS v4
- motion
- lucide-react

## 핵심 파일

```txt
src/App.tsx                         # 전체 슬라이드 레이아웃, 헤더, 배경, 드로어
src/index.css                       # 폰트, 전역 유틸리티, 글로우, 스크롤바, glass effect
src/components/AICanvas.tsx         # 인터랙티브 파티클 캔버스
src/components/CursorAura.tsx       # 마우스 커서 오라
src/components/IntroSlide.tsx       # 메인 히어로 및 시뮬레이터 카드
src/components/ProjectsSlide.tsx    # 포트폴리오 슬라이드
src/components/TimelineSlide.tsx    # 연혁/파트너 슬라이드
src/components/ContactSlide.tsx     # 문의 슬라이드
src/data.ts                         # 서비스, 프로젝트, 파트너, 연혁 데이터
```

## The Sky 184 테마 작업 방향

기존 라임/블랙 사이버 무드를 줄이고, 다음 기준으로 전역 톤을 통일합니다.

- 배경: `#020616 → #05102a → #01030e` 계열의 cosmic midnight gradient
- 광원: cyan, aqua, teal, indigo, purple, pink aura blur
- 히어로: `함께 여는 새로운 연결` 중심 디스플레이 타이포그래피
- 버튼: frosted outline capsule + luminous cyan/blue gradient capsule
- 인터랙션: 파티클/커서/상태 칩/터미널/타임라인을 cyan-purple 계열로 재배색

## 완료 기준

- `npm run lint` 통과
- `npm run build` 통과
- 모바일에서 히어로·CTA·시뮬레이터 카드가 잘리지 않음
- lime/연두색이 메인 컬러로 남아 있지 않음
- Vercel 배포 후 홈, 프로젝트, 연혁, 문의 슬라이드의 톤앤매너가 일관됨
