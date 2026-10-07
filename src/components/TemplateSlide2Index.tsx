import { ArrowUpRight } from 'lucide-react';

export default function TemplateSlide2Index() {
  const menuItems = [
    { num: '01', title: '서비스 개요', sub: 'PDF → HWP 100% 정밀 전산화', targetId: 'service-overview' },
    { num: '02', title: '문제 진단', sub: '단순 자동 변환의 한계 및 현장 리스크', targetId: 'why-avro' },
    { num: '03', title: '핵심 솔루션', sub: '수식 타이핑 & 캡처본 클린 업스케일', targetId: 'our-solution' },
    { num: '04', title: '품질 & 검증 데이터', sub: '수치로 입증된 납기 준수율과 만족도', targetId: 'quality-data' },
    { num: '05', title: '진행 프로세스', sub: '5단계 원스톱 외주 진행 절차', targetId: 'work-process' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="service-roadmap" className="py-20 md:py-28 bg-[#0066EE] text-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="text-sm font-bold tracking-wider text-blue-200 uppercase mb-3 inline-block">
                SERVICE ROADMAP
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-5">
                핵심 작업 영역.
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base font-medium leading-relaxed max-w-sm">
                PDF 완벽 변환부터 수식 입력, 캡처본 고화질 업스케일까지 에이브로가 제공하는 출판 인쇄 표준 작업 체계입니다.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-white/20 text-xs text-blue-200 font-mono">
              AVRO Typesetting Architecture · High-Precision Quality
            </div>
          </div>

          {/* Right Side: Web-style Service Cards */}
          <div className="lg:col-span-7">
            <div className="space-y-0 divide-y divide-white/25">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => scrollTo(item.targetId)}
                  className="py-4.5 sm:py-5 flex items-center justify-between group cursor-pointer hover:bg-white/10 px-3 sm:px-4 rounded-md transition-all"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-lg sm:text-2xl font-black font-mono text-blue-200 group-hover:text-white transition-colors">
                      {item.num}
                    </span>
                    <div>
                      <span className="text-2xl sm:text-3xl md:text-3xl font-extrabold tracking-tight group-hover:translate-x-1 inline-block transition-transform">
                        {item.title}
                      </span>
                      <span className="hidden sm:inline-block text-xs text-blue-100 ml-4 font-medium opacity-80">
                        {item.sub}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#0066EE] group-hover:border-white transition-all">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
