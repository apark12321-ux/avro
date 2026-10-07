import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Sparkles, Send, CheckCircle2, ShieldCheck, Upload, PhoneCall, Mail, MapPin } from 'lucide-react';

interface QuickContactFormProps {
  initialService?: string;
}

export default function QuickContactForm({ initialService = '수학 문제 한글 수식 타이핑' }: QuickContactFormProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div id="contact-section" className="scroll-mt-24 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10 lg:p-12 text-left space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info & Reassurance */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% 무료 · 부담 없는 사전 확인</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              실제 원고 3문항으로<br />
              <span className="text-sky-400">품질을 먼저 확인하세요.</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              조판 외주는 결과물을 보지 않고 맡기기 어렵습니다. 지금 원고의 가장 까다로운 3문항을 보내주시면, 에이브로 전문 에디터가 출판 규격 HWP 파일로 신속히 제작하여 회신해 드립니다.
            </p>
          </div>

          <div className="space-y-3 pt-2 text-xs text-slate-400 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-slate-300">원고 유출 방지 및 비밀유지(NDA) 원칙 준수</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-slate-300">샘플 확인 후 마음에 들지 않으면 결제 0원</span>
            </div>
          </div>

          {/* Direct Contact info */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400" />
              <span>공식 이메일: </span>
              <a href="mailto:ceo@avro.co.kr" className="text-white font-bold hover:text-sky-400">ceo@avro.co.kr</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>사업장 소재지: 인천광역시 서구 청라에메랄드로 99</span>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Simple Form */}
        <div className="lg:col-span-7">
          {isSubmitted ? (
            <div className="h-full min-h-[320px] rounded-2xl bg-slate-950/80 border border-sky-500/40 p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">신청이 성공적으로 접수되었습니다.</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                남겨주신 연락처(<strong className="text-white">{contact}</strong>)로 담당 에디터가 신속히 확인 후 순차적으로 안내드리겠습니다. (샘플 HWP 파일 신속 회신)
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setName('');
                  setContact('');
                  setMessage('');
                  setFileName('');
                }}
                className="mt-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                추가 문의 작성하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    성함 또는 학원명 <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 박원장 (에이스수학학원)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-xs outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    연락처 (휴대폰 번호) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="예: 010-1234-5678"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-xs outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  관심 서비스 선택
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    '수학 문제 조판 & 교재',
                    '학원 전문 웹사이트',
                    '강사·원장 유튜브 세팅',
                  ].map((svc) => (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => setService(svc)}
                      className={`p-2 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        service === svc
                          ? 'bg-sky-500/20 border-sky-400 text-white font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional File upload or message */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  샘플용 3문항 원고 첨부 (선택)
                </label>
                <div className="flex items-center gap-3">
                  <label className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 cursor-pointer shrink-0">
                    <Upload className="w-3.5 h-3.5 text-sky-400" />
                    <span>파일 찾기</span>
                    <input
                      type="file"
                      accept=".pdf,.hwp,.hwpx,.doc,.docx,.jpg,.jpeg,.png,.zip"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-slate-500 truncate">
                    {fileName || 'PDF, 사진, HWP 파일 등 (나중에 카톡이나 메일로 보내주셔도 됩니다)'}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  문의 내용 및 희망 일정 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="예: 중등 수학 모의고사 150문항 시험지 조판 일정 문의드립니다."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-xs outline-none transition-all placeholder:text-slate-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? '접수 처리 중...' : '샘플 3문항 무료 신청 & 간편 상담 접수'}</span>
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                * 신청 즉시 결제되지 않으며, 담당 에디터가 작업 가능 여부와 무료 샘플을 먼저 안내해 드립니다.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
