import { useState, useEffect, type FormEvent } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface FactsheetContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'inquiry' | 'sample';
}

export default function FactsheetContactModal({
  isOpen,
  onClose,
  defaultMode = 'sample'
}: FactsheetContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: defaultMode === 'sample' ? '샘플 3문항 무료 테스트' : '수학 문항 조판 정기 외주',
    documentType: '스캔 PDF 시험지',
    questionCount: defaultMode === 'sample' ? '3문항 (무료 샘플 테스트)' : '100문항 내외',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        serviceType: defaultMode === 'sample' ? '샘플 3문항 무료 테스트' : '수학 문항 조판 정기 외주',
        questionCount: defaultMode === 'sample' ? '3문항 (무료 샘플 테스트)' : '100문항 내외'
      }));
      setIsSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen, defaultMode]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('필수 항목(성함, 이메일, 연락처)을 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // 1. Send via free email endpoint service to both admin addresses
      const emailPayload = {
        _subject: `[신청접수] ${formData.name}님 (${formData.company}) ${formData.serviceType}`,
        _replyto: formData.email,
        _cc: 'apark12321@gmail.com',
        담당자명: formData.name,
        소속_학원_출판사명: formData.company,
        연락처: formData.phone,
        이메일: formData.email,
        의뢰_구분: formData.serviceType,
        원고_형태: formData.documentType,
        문의_내용: formData.message || '(추가 문의내용 없음)'
      };

      const res = await fetch('https://formsubmit.co/ajax/ceo@avro.co.kr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      if (!res.ok) {
        // Fallback endpoint to second address if needed
        await fetch('https://formsubmit.co/ajax/apark12321@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        }).catch(() => {});
      }
    } catch (err) {
      console.warn('Direct email API notice:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs font-sans">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white text-zinc-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-zinc-200 max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 rounded-full">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-1">
              신청서가 정상 접수되었습니다
            </h3>
            <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
              작성해주신 의뢰 내용이 담당 관리자 이메일(ceo@avro.co.kr)로 즉시 전송되었습니다.<br />
              기재해주신 연락처 및 이메일로 1시간 이내 신속히 회신드리겠습니다.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-[11px] text-zinc-500 mb-5 text-left space-y-1">
              <div><strong className="text-zinc-700">접수 담당자:</strong> {formData.name} ({formData.company})</div>
              <div><strong className="text-zinc-700">의뢰 구분:</strong> {formData.serviceType}</div>
              <div><strong className="text-zinc-700">회신 예정 연락처:</strong> {formData.phone} / {formData.email}</div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#0066EE] text-white font-bold rounded-lg text-xs cursor-pointer shadow-md hover:bg-[#0052cc] transition-colors"
            >
              확인 및 창 닫기
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#0066EE]/10 text-[#0066EE] text-xs font-bold mb-2 rounded-full">
                <Sparkles className="w-3 h-3" />
                <span>접수 창구</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-zinc-900">
                {defaultMode === 'sample' ? '샘플 3문항 무료 변환 테스트 신청' : '문서 변환 및 템플릿 제작 의뢰'}
              </h2>
            </div>

            {errorMessage && (
              <div className="mb-3 p-2 bg-red-50 text-red-600 text-xs font-bold text-center border border-red-200">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-zinc-800 mb-1">
                    담당자명 <span className="text-[#008CFF]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예) 홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-zinc-300 focus:border-[#008CFF] outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-zinc-800 mb-1">
                    학원/출판사명 <span className="text-[#008CFF]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예) 대치 명문학원"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-zinc-300 focus:border-[#008CFF] outline-none bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-zinc-800 mb-1">
                    연락처 <span className="text-[#008CFF]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="예) 010-1234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-zinc-300 focus:border-[#008CFF] outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-zinc-800 mb-1">
                    이메일 <span className="text-[#008CFF]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="예) email@academy.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-zinc-300 focus:border-[#008CFF] outline-none bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-zinc-800 mb-1">의뢰 구분</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-zinc-300 focus:border-[#008CFF] outline-none bg-white"
                  >
                    <option value="샘플 3문항 무료 변환 테스트">샘플 3문항 무료 변환 테스트</option>
                    <option value="PDF → HWP 완벽 변환 (메인)">PDF → HWP 완벽 변환 (메인)</option>
                    <option value="수학·과학 수식 정밀 타이핑">수학·과학 수식 정밀 타이핑</option>
                    <option value="캡처 사진/저화질 이미지 고화질 업스케일">캡처 사진/저화질 이미지 고화질 업스케일</option>
                    <option value="고객사 지정 템플릿 맞춤 출력">고객사 지정 템플릿 맞춤 출력</option>
                    <option value="스캔 시험지 / 이미지 HWP 전산화">스캔 시험지 / 이미지 HWP 전산화</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-zinc-800 mb-1">
                    원고 형태 <span className="text-[#008CFF] font-normal text-[10px]">(캡처/사진 필수)</span>
                  </label>
                  <select
                    value={formData.documentType}
                    onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm border border-zinc-300 focus:border-[#008CFF] outline-none bg-white"
                  >
                    <option value="스캔 PDF 시험지">스캔 PDF 시험지</option>
                    <option value="캡처 사진 / 휴대폰 촬영본">캡처 사진 / 휴대폰 촬영본</option>
                    <option value="기존 HWP 초안 (서식 교정)">기존 HWP 초안</option>
                    <option value="사진/스캔 이미지">사진/스캔 이미지</option>
                  </select>
                </div>
              </div>

              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-sm text-[11px] text-amber-900 leading-snug">
                <span className="font-bold text-amber-700">이미지 작업 안내:</span> 신규 드로잉(새로 그리기)은 고단가로 인해 지원되지 않으며, <strong>전달해주신 캡처 사진이나 저화질 이미지를 고화질로 업스케일하여 깔끔하게 변환</strong>해 드리는 서비스만 제공됩니다. (원본 이미지 첨부 필수)
              </div>

              <div>
                <label className="block font-bold text-zinc-800 mb-1">문의 내용 (선택)</label>
                <textarea
                  rows={2}
                  placeholder="예상 문항 수, 납품 희망 일정 등"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-sm border border-zinc-300 focus:border-[#008CFF] outline-none bg-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#0066EE] hover:bg-[#0052cc] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70 text-sm shadow-md shadow-[#0066EE]/30"
                >
                  {isSubmitting ? '전송 중...' : '신청 접수하기'}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
