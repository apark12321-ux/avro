import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Upload, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function SampleRequestModal({
  isOpen,
  onClose,
  initialService = '수학 문제 한글 수식 타이핑'
}: SampleRequestModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [serviceType, setServiceType] = useState(initialService);
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState('');
  const [requestNda, setRequestNda] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-left"
        >
          {/* Header */}
          <div className="bg-slate-950/80 border-b border-slate-800 px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider block">
                  100% FREE PROOF OF CONCEPT
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  샘플 3문항 무료 조판 신청
                </h3>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="p-8 sm:p-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">신청이 정상 접수되었습니다!</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                남겨주신 연락처(<strong className="text-white">{contact}</strong>)로 담당 전문 에디터가 작업 안내 및 샘플 HWP 파일을 전달해 드립니다.
              </p>
              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs cursor-pointer"
                >
                  확인 완료
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                실제 원고 중 가장 까다로운 <strong className="text-sky-400">3문항을 먼저 HWP로 제작</strong>해 드립니다. 퀄리티를 직접 확인하신 후 정식 발주 여부를 결정하세요.
              </p>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    성함 또는 학원명 <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 김원장 (청라수학전문)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    연락처 (휴대폰 번호) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="예: 010-9876-5432"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    관심 작업 유형
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-sky-500"
                  >
                    <option value="수학 문제 한글 수식 타이핑">수학 문제 한글 수식 타이핑 외주</option>
                    <option value="스캔 PDF 시험지 HWP 변환">스캔본 PDF 시험지 HWP 변환 & 복원</option>
                    <option value="수학 도형 및 그래프 작도">수학 기하 도형 & 함수 그래프 벡터 재작도</option>
                    <option value="학원 자체 교재 기획 & 편집">학원 자체 교재·모의고사 2단 조판</option>
                    <option value="학원·공부방 전문 웹사이트">학원·공부방 전문 홈페이지 제작</option>
                    <option value="강사·시니어 유튜브 세팅">강사·시니어 유튜브 미디어 세팅</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    원고 파일 첨부 (선택)
                  </label>
                  <div className="flex items-center gap-2">
                    <label className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium cursor-pointer shrink-0 flex items-center gap-1.5">
                      <Upload className="w-3.5 h-3.5 text-sky-400" />
                      <span>파일 선택</span>
                      <input
                        type="file"
                        accept=".pdf,.hwp,.hwpx,.doc,.docx,.jpg,.jpeg,.png,.zip"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-xs text-slate-500 truncate">
                      {fileName || 'PDF, 사진 등 (미첨부 시 추후 메일 발송 가능)'}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    추가 요청사항 (선택)
                  </label>
                  <input
                    type="text"
                    placeholder="예: 긴급 마감 일정 조율 필요, 문제 수 약 100문항"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-sky-500"
                  />
                </div>

                <label className="flex items-center gap-2 pt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={requestNda}
                    onChange={(e) => setRequestNda(e.target.checked)}
                    className="rounded text-sky-500 focus:ring-sky-400 w-3.5 h-3.5"
                  />
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    시험지 원고 보호를 위한 전자서명 NDA(비밀유지약정) 발행 요청
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? '접수 처리 중...' : '3문항 무료 샘플 신청하기'}</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
