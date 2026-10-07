import { Star } from 'lucide-react';

export default function FactsheetReviews() {
  const reviews = [
    {
      institution: '대치동 수학학원',
      author: '김○환 원장',
      role: '고등부',
      summary: '스캔 PDF 시험지 20회분을 완벽한 HWP 원본으로 변환.',
      details: '수식 편집기 수식 입력 완료. 표와 단 나누기까지 원본과 동일하게 복원.'
    },
    {
      institution: '과학 전문 교재연구소',
      author: '이○준 실장',
      role: '콘텐츠 개발',
      summary: '물리·화학 복잡 기호 및 반응식 누락 없이 100% 전산화.',
      details: '일반 변환기로 안 되던 특수 과학 기호까지 한글 파일로 정확히 변환 납품.'
    },
    {
      institution: '입시 교재 출판사',
      author: '박○영 편집장',
      role: '기획편집실',
      summary: '전달한 원본 도판을 고화질 벡터로 업스케일하여 인쇄 감리 통과.',
      details: '스캔본의 흐릿한 그래프를 300dpi급 선명한 벡터로 복원하여 인쇄 완료.'
    },
    {
      institution: '분당 입시학원',
      author: '최○호 대표강사',
      role: '수능대비반',
      summary: '학원 자체 교재 템플릿 양식에 맞춰 최종 문서 1:1 출력.',
      details: '지정한 자간, 장평, 2단 레이아웃 그대로 납품받아 추가 재편집 없이 즉시 사용.'
    }
  ];

  return (
    <section
      id="reviews-section"
      data-navbar-theme="dark"
      className="py-12 md:py-16 bg-[#212121] text-white font-sans overflow-hidden border-t border-zinc-800"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            실제 변환 및 아웃풋 납품 사례
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            PDF 변환, 수식·도판 업스케일, 고객 템플릿 맞춤 출력 현장 검증
          </p>
        </div>

        {/* Marquee Row */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#212121] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#212121] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-3 animate-marquee hover:[animation-play-state:paused] py-1 w-max">
            {[...reviews, ...reviews].map((rev, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[320px] bg-white/5 border border-white/10 p-4 flex flex-col justify-between hover:border-[#008CFF]/50 transition-all shrink-0 text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#008CFF] font-bold">납품 완료</span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-white mb-1.5 leading-snug">
                    "{rev.summary}"
                  </h3>

                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    {rev.details}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white text-[11px]">{rev.author}</span>{' '}
                    <span className="text-zinc-400 text-[10px]">({rev.role})</span>
                  </div>
                  <span className="text-[#008CFF] font-semibold text-[11px]">{rev.institution}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
