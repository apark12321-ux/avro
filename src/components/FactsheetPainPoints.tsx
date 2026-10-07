export default function FactsheetPainPoints() {
  const conversionFacts = [
    {
      tag: '한계 01',
      title: '단순 자동 OCR 변환기의 수식 오탈자',
      desc: '웹 기반 자동 변환기는 복잡한 적분, 기하, 행렬 기호 및 과학 특수문자를 오인식하여 결국 사람이 일일이 재입력해야 하는 한계가 있습니다. 본 전문 조판 솔루션은 전문 에디터 검수로 수식 오탈자 0%를 보장합니다.'
    },
    {
      tag: '한계 02',
      title: '뭉개진 도판의 단순 캡처 문제',
      desc: '일반 변환 툴은 도판 이미지를 저해상도 비트맵으로 단순 추출하여 인쇄 시 테두리가 흐려집니다. 본 솔루션은 전달해주신 원본 도판을 1:1로 정밀 트레이싱하여 300dpi급 무손실 벡터로 고화질 업스케일합니다.'
    },
    {
      tag: '한계 03',
      title: '고객사 전용 서식·템플릿 미적용',
      desc: '단순 변환 파일은 규격화된 스타일 시트가 없어 수령 후 학원/출판사 양식에 맞춰 전면 재편집해야 합니다. 본 솔루션은 고객사가 보유한 고유 템플릿(글꼴, 장평, 자간, 2단/1단 구분)에 맞춰 완결본으로 납품합니다.'
    }
  ];

  const formatSpecs = [
    {
      tag: '핵심 역량',
      title: '완벽히 편집 가능한 정품 HWP 복원',
      desc: '단순 텍스트 추출이 아닌, 전문 에디터가 검수한 완성형 HWP/HWPX 문서로 완벽 복원 납품.'
    },
    {
      tag: '입력 무결성',
      title: '수학·과학 전과정 수식 완벽 전산화',
      desc: '수능/내신 고난도 킬러 문항, 대학 미적분, 물리/화학 복합식까지 한글 수식 표준 규격으로 입력.'
    },
    {
      tag: '최종 아웃풋',
      title: '원하는 형식 & 템플릿 1:1 출력',
      desc: 'PDF, 이미지, 기존 HWP 등 어떤 원본 문서든 고객이 지정하는 완벽한 출판 인쇄용 최종본으로 제작.'
    }
  ];

  return (
    <div id="pain-points" className="bg-[#18181b] text-white py-12 md:py-16 font-sans border-t border-zinc-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* ================= SECTION 1 ================= */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-3">
            <span className="inline-block px-2.5 py-0.5 bg-white/10 text-[#008CFF] text-xs font-bold border border-[#008CFF]/20">
              기술 팩트
            </span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
              단순 자동 변환의 한계와 전문 조판이 필요한 이유
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-5xl mx-auto">
            {conversionFacts.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-white/5 border border-white/10 text-left shadow-sm"
              >
                <span className="text-[11px] font-mono font-bold text-[#008CFF] block mb-1">
                  {item.tag}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div>
          <div className="text-center mb-3">
            <span className="inline-block px-2.5 py-0.5 bg-white/10 text-[#008CFF] text-xs font-bold border border-[#008CFF]/20">
              전문 작업 사양
            </span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
              수식 오류 0% · 도판 업스케일 · 맞춤 템플릿 완결
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-5xl mx-auto">
            {formatSpecs.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-white/5 border border-white/10 text-left shadow-sm"
              >
                <span className="text-[11px] font-mono font-bold text-[#008CFF] block mb-1">
                  {item.tag}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
