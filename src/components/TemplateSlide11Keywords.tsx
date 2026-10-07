export default function TemplateSlide11Keywords() {
  const keywords = [
    { text: 'PDF to HWP', type: 'white' },
    { text: '수학 수식 정밀 타이핑', type: 'blue' },
    { text: '캡처본 고화질 업스케일', type: 'white' },
    { text: '무손실 300dpi+', type: 'white' },
    { text: '오탈자 0% 3단계 검수', type: 'blue' },
    { text: '출판 인쇄 템플릿', type: 'white' },
    { text: '과학 물리·화학식', type: 'blue' },
    { text: '비밀유지협약 NDA', type: 'white' },
    { text: 'HWPX 정품 원본', type: 'blue' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F4F6F9] text-zinc-900 font-sans border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 text-center">
        
        {/* Category Header */}
        <div className="mb-12">
          <span className="text-sm md:text-base font-extrabold text-[#0066EE] tracking-tight block mb-2">
            CORE KEYWORDS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            핵심 역량 키워드.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium mt-2">
            에이브로가 약속하는 출판 인쇄 표준 작업 기준
          </p>
        </div>

        {/* Rounded Bubble Pills Cloud */}
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4.5">
          {keywords.map((kw, idx) => (
            <div
              key={idx}
              className={`px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-full font-black text-sm sm:text-base md:text-lg tracking-tight shadow-sm hover:scale-105 transition-all select-none cursor-default ${
                kw.type === 'blue'
                  ? 'bg-[#0066EE] text-white shadow-md shadow-[#0066EE]/20'
                  : 'bg-white text-zinc-800 border-2 border-blue-200 hover:border-[#0066EE]'
              }`}
            >
              {kw.text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
