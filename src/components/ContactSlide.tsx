import { Mail, Globe, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSlide() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full h-full py-4 min-h-0 text-left">
      {/* Left Column: General Call-To-Action */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-cyan-400 uppercase mb-3 select-none">
          <span className="text-cyan-400 font-extrabold">$</span>
          <span className="text-zinc-700">/</span>
          <span>avro_studio_routine_start.sh</span>
        </div>
        
        <h2 className="text-2xl sm:text-4.5xl font-sans font-black tracking-tight text-white mb-4 leading-none select-none">
          Together,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] via-[#00aaff] to-[#ff00ee]">함께 만들어갈까요?</span>
          <span className="inline-block w-2.5 h-6 bg-cyan-400 align-middle ml-1.5 shadow-[0_0_8px_#22d3ee] animate-pulse" />
        </h2>

        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-lg mb-6 font-normal">
          가장 정교하고 검증 가능한 교육용 교안 / 수식 검출 자동화 솔루션부터 최신 기술 트렌드와 결합한 맞춤 에듀테크 AI 비즈니스용 SaaS 개발에 대한 협력이 필요하시다면 아래 대표 메일로 연락해 보시기 바랍니다.
        </p>

        <div className="flex select-none">
          <motion.a 
            href="mailto:ceo@avro.co.kr"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:brightness-110 text-white font-sans font-black text-xs uppercase tracking-wide flex items-center justify-between gap-4 shadow-[0_4px_25px_rgba(6,182,212,0.35)] border border-cyan-300/10 cursor-pointer"
          >
            <span>ceo@avro.co.kr 이메일 송신</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </motion.a>
        </div>
      </div>

      {/* Right Column: Contact Links */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <div className="glass-effect border border-white/[0.05] p-5 rounded-2xl space-y-4 bg-[#0d0d12]/40">
          <h3 className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest border-b border-white/[0.04] pb-3 text-left m-0 select-none">
            // AVRO Studio Contacts &amp; Operations
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div className="flex flex-col text-left">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider select-none">direct inquiry email</span>
                <a href="mailto:ceo@avro.co.kr" className="text-zinc-200 font-bold hover:text-cyan-405 text-xs transition-colors">
                  ceo@avro.co.kr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div className="flex flex-col text-left">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider select-none">official space URL</span>
                <a href="https://www.avro.co.kr" target="_blank" rel="noopener noreferrer" className="text-zinc-200 font-bold hover:text-cyan-400 text-xs transition-colors flex items-center gap-0.5">
                  www.avro.co.kr <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
              <div className="flex flex-col text-left">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider select-none">corporate headquarters location</span>
                <span className="text-zinc-300 font-sans text-xs font-semibold leading-relaxed">
                  인천광역시 서구 청라에메랄드로 99
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.04] pt-3.5 font-mono text-[8.5px] text-zinc-550 leading-relaxed text-left select-none">
            * 전송 주시는 메일은 대표 보안 사서함으로 영구 분류되며, 영업일 기준 수신 4시간 이내 본부 임원급이 직접 세부 제안서나 일정을 회신 드립니다.
          </div>
        </div>
      </div>
    </div>
  );
}
