import { ShieldCheck } from 'lucide-react';

interface TimelineEvent {
  description: string;
  isHighlight?: boolean;
}

interface TimelineItem {
  year: string;
  events: TimelineEvent[];
}

interface PartnerItem {
  name: string;
  type: string;
  isHighlight?: boolean;
}

interface TimelineSlideProps {
  timelineData: TimelineItem[];
  partnersData: PartnerItem[];
}

export default function TimelineSlide({
  timelineData,
  partnersData,
}: TimelineSlideProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full h-full py-4 min-h-0 text-left">
      {/* Left Column: Timeline Roadmaps */}
      <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center h-full min-h-0">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#d4ff3a] uppercase mb-1.5 shrink-0 select-none">
          <span>SLIDE 03</span>
          <span className="text-zinc-700">/</span>
          <span>CHRONICS ROADMAP TIMELINE</span>
        </div>
        
        <h3 className="text-lg sm:text-2xl font-sans font-black text-white mb-4 shrink-0">
          에이브로의 발자취와 지속적인 증명.
        </h3>

        {/* Scrollable roadmap events timeline with customized scrollbar */}
        <div className="flex-1 overflow-y-auto max-h-[300px] border-l border-white/[0.06] pl-5 ml-1 space-y-4 py-1 custom-scrollbar min-h-0 pr-2">
          {timelineData.map((mile) => (
            <div key={mile.year} className="relative group text-left">
              <div className="absolute -left-[26px] top-1.5 w-2 h-2 rounded-full bg-[#07070a] border-2 border-lime-400 shadow-[0_0_8px_#d4ff3a]" />
              <span className="font-mono text-[13px] font-black text-lime-400 block mb-1 leading-none text-left">
                {mile.year}
              </span>
              <ul className="space-y-1 text-left list-none pl-0 m-0">
                {mile.events.map((ev, idx) => (
                  <li
                    key={idx}
                    className={`text-[11px] leading-relaxed pl-2.5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full ${
                      ev.isHighlight
                        ? 'before:bg-lime-400 text-zinc-200 font-semibold'
                        : 'before:bg-zinc-600 text-zinc-400'
                    }`}
                  >
                    {ev.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Partners & Brief legal info */}
      <div className="lg:col-span-6 xl:col-span-5 h-full flex flex-col justify-center min-h-0 space-y-3.5">
        <div className="glass-effect border border-white/[0.05] p-4 rounded-xl bg-[#0d0d12]/20">
          <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-wider text-lime-400 uppercase mb-3 text-left shrink-0 select-none">
            <span>05</span>
            <span className="text-zinc-700">/</span>
            <span>CLIENT PARTNERS GRID</span>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {partnersData.map((part) => (
              <div
                key={part.name}
                className={`flex flex-col items-center justify-center p-2.5 rounded border text-center relative overflow-hidden transition-colors ${
                  part.isHighlight
                    ? 'border-lime-400/20 bg-lime-400/[0.02] text-white'
                    : 'border-white/[0.04] bg-[#0c0c11]'
                }`}
              >
                {part.isHighlight && (
                  <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-lime-400 shadow-[0_0_4px_#d4ff3a]" />
                )}
                <span className={`font-sans font-bold text-[10.5px] ${part.isHighlight ? 'text-lime-300 font-black' : 'text-zinc-300'}`}>
                  {part.name}
                </span>
                <span className="font-mono text-[7px] tracking-wide text-zinc-500 mt-0.5">
                  {part.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & facts metadata block */}
        <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-4 font-mono text-[9px] text-zinc-500 space-y-1.5 text-left leading-relaxed">
          <div className="flex justify-between border-b border-white/[0.04] pb-1.5 uppercase font-bold text-zinc-400 text-[8.5px] select-none">
            <span>// AVRO Legal &amp; Corporate Info</span>
            <span className="text-lime-400 text-[8px]">Active Status ✓</span>
          </div>
          <div>代表者 : <span className="text-zinc-300 font-sans font-bold">박예준 대표 (CEO)</span></div>
          <div>設立日 : <span className="text-zinc-300 font-sans">2016-07-18</span></div>
          <div>事業者등록번호 : <span className="text-zinc-300">205-87-00590</span></div>
          <div>本店所在地 : <span className="text-zinc-350 font-sans">인천광역시 서구 청라에메랄드로 99, 10년 역사 법인</span></div>
        </div>
      </div>
    </div>
  );
}
