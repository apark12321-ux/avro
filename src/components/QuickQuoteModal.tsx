import { useState, type FormEvent } from 'react';
import { X, Sparkles, CheckCircle2, Clock, Calculator, ArrowRight, FileText } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickQuoteModal({ isOpen, onClose }: QuickQuoteModalProps) {
  const [documentType, setDocumentType] = useState('스캔 PDF / 시험지 사진');
  const [pageCount, setPageCount] = useState<number | string>(20);
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const docTypes = [
    '스캔 PDF / 시험지 캡처',
    '인쇄 교재 / 기출 문제집',
    '손글씨 / 필기 원고',
    '기존 HWP (서식 깨짐 재조판)'
  ];

  const quickCounts = [10, 20, 30, 50, 100];

  const numPages = typeof pageCount === 'number' ? pageCount : parseInt(pageCount, 10) || 0;
  // Estimated turn-around based on page count
  const estimatedDays = numPages <= 15 ? '당일~24시간 이내' : numPages <= 50 ? '1~2일 이내' : '2~3일 이내';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) {
      setError('견적을 받아보실 연락처 또는 이메일을 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const emailPayload = {
        _subject: `[간편견적신청] ${contact} - ${documentType} (${numPages}페이지)`,
        _replyto: contact.includes('@') ? contact : 'ceo@avro.co.kr',
        _cc: 'apark12321@gmail.com',
        구분: '간편 견적 (Quick Quote)',
        문서종류: documentType,
        예상분량: `${numPages}페이지 (또는 문항)`,
        예상납기: estimatedDays,
        견적회신처: contact
      };

      await fetch('https://formsubmit.co/ajax/ceo@avro.co.kr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(emailPayload)
      }).catch(() => {});

      await fetch('https://formsubmit.co/ajax/apark12321@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(emailPayload)
      }).catch(() => {});
    } catch {
      // ignore
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs font-sans">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white text-zinc-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-zinc-200"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3.5 rounded-full">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-zinc-900 mb-1.5">
              간편 견적 요청이 접수되었습니다
            </h3>
            <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
              입력하신 정보가 관리자(ceo@avro.co.kr)로 전달되었습니다.<br />
              <strong className="text-zinc-800 font-bold">{contact}</strong>(으)로 1시간 이내 정확한 확정 견적서를 보내드립니다.
            </p>

            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-xs text-left mb-5 space-y-1">
              <div className="text-zinc-600"><strong>문서 형태:</strong> {documentType}</div>
              <div className="text-zinc-600"><strong>예상 분량:</strong> {numPages} 페이지 / 문항</div>
              <div className="text-zinc-600"><strong>예상 소요:</strong> {estimatedDays}</div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-2.5 bg-[#0066EE] text-white font-bold rounded-xl text-xs hover:bg-[#0052cc] transition-colors cursor-pointer"
            >
              확인
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066EE] text-[11px] font-bold mb-2">
                <Calculator className="w-3 h-3" />
                <span>30초 초간편 견적 산출</span>
              </div>
              <h3 className="text-xl font-black text-zinc-900">
                Quick Quote · 간편 견적
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                문서 종류와 페이지만 선택하면 예상 일정과 견적을 즉시 안내합니다.
              </p>
            </div>

            {error && (
              <div className="mb-3 p-2 bg-red-50 text-red-600 text-xs font-semibold rounded-lg text-center border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Field 1: Document Type */}
              <div>
                <label className="block font-bold text-zinc-800 mb-2">
                  1. 문서 종류
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {docTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setDocumentType(type)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                        documentType === type
                          ? 'border-[#0066EE] bg-blue-50/80 text-[#0066EE]'
                          : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 2: Estimated Page Count */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-bold text-zinc-800">
                    2. 예상 페이지(또는 문항) 수
                  </label>
                  <span className="text-xs font-black text-[#0066EE]">
                    {numPages} p
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-2">
                  {quickCounts.map((cnt) => (
                    <button
                      type="button"
                      key={cnt}
                      onClick={() => setPageCount(cnt)}
                      className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        Number(pageCount) === cnt
                          ? 'bg-[#0066EE] text-white border-[#0066EE]'
                          : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100'
                      }`}
                    >
                      {cnt}p
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  min="1"
                  max="500"
                  value={pageCount}
                  onChange={(e) => setPageCount(e.target.value)}
                  placeholder="직접 입력 (페이지 수)"
                  className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-xs text-zinc-800 focus:outline-none focus:border-[#0066EE]"
                />
              </div>

              {/* Instant calculation summary */}
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-600">
                  <Clock className="w-4 h-4 text-[#0066EE]" />
                  <span>예상 납기 일정:</span>
                </div>
                <span className="font-bold text-[#0066EE]">
                  {estimatedDays}
                </span>
              </div>

              {/* Field 3: Contact */}
              <div>
                <label className="block font-bold text-zinc-800 mb-1">
                  3. 견적서 수신처 <span className="text-[#008CFF]">*</span>
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="연락처(010-0000-0000) 또는 이메일"
                  className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-xs text-zinc-800 focus:outline-none focus:border-[#0066EE]"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#0066EE] hover:bg-[#0052cc] text-white font-extrabold rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>견적 요청 접수 중...</span>
                ) : (
                  <>
                    <span>간편 견적 요청하기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
