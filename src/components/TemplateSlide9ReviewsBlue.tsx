import { Star, Quote } from 'lucide-react';

export default function TemplateSlide9ReviewsBlue() {
  const reviews = [
    {
      author: '김○환 원장',
      role: '고등부 수능 총괄',
      inst: '대치동 S수학학원',
      quote: '스캔 PDF 시험지 20회분을 완벽한 HWP 원본으로 변환.',
      detail: '수식 편집기 수식 입력 완료. 표와 단 나누기까지 원본과 동일하게 복원.'
    },
    {
      author: '이○준 실장',
      role: '콘텐츠 개발팀장',
      inst: '모의고사 전문 연구소',
      quote: '물리·화학 복잡 기호 및 반응식 누락 없이 100% 전산화.',
      detail: '일반 변환기로 안 되던 특수 과학 기호까지 한글 파일로 정확히 변환 납품.'
    },
    {
      author: '박○영 편집장',
      role: '기획편집실',
      inst: '수학 전문 교재 출판사',
      quote: '전달한 원본 도판을 고화질 벡터로 업스케일하여 인쇄 감리 통과.',
      detail: '스캔본의 흐릿한 그래프를 300dpi급 선명한 벡터로 복원하여 인쇄 완료.'
    },
    {
      author: '최○호 대표강사',
      role: '고3 킬러문항반',
      inst: '분당 입시학원',
      quote: '학원 자체 교재 템플릿 양식에 맞춰 최종 문서 1:1 완결 출력.',
      detail: '지정한 자간, 장평, 2단 레이아웃 그대로 납품받아 재편집 0분 달성.'
    },
    {
      author: '정○우 소장',
      role: '논술 집필진',
      inst: '대입 수리논술 연구소',
      quote: '대학교 기출 다중 적분·행렬식 기호 100% 표준 규격 입력.',
      detail: '이공계 전공자 크로스 검수로 수식 왜곡 없이 정밀 디지털화 완료.'
    }
  ];

  return (
    <section id="client-reviews" className="py-20 md:py-28 bg-[#0066EE] text-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 text-center">
        
        {/* Top Header */}
        <div className="mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-200 uppercase block mb-3">
            CLIENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            “ 실제 고객 현장 검증 평가 ”
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm md:text-base font-medium mt-3">
            학원장 · 출판 기획자 · 연구진이 직접 경험한 완결형 조판 품질
          </p>
        </div>

        {/* 5 Floating White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-5 text-left">
          {reviews.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-zinc-900 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Quote className="w-4 h-4 fill-amber-500" />
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <h3 className="text-sm font-black text-zinc-900 mb-2 leading-snug">
                  "{item.quote}"
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-zinc-900">{item.author}</span>{' '}
                  <span className="text-zinc-400 text-[11px]">({item.role})</span>
                </div>
                <span className="text-[#0066EE] font-bold text-[11px]">{item.inst}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
          {reviews.slice(3, 5).map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-zinc-900 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Quote className="w-4 h-4 fill-amber-500" />
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <h3 className="text-sm font-black text-zinc-900 mb-2 leading-snug">
                  "{item.quote}"
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-zinc-900">{item.author}</span>{' '}
                  <span className="text-zinc-400 text-[11px]">({item.role})</span>
                </div>
                <span className="text-[#0066EE] font-bold text-[11px]">{item.inst}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
