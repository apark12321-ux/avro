import { useState, useEffect, type FormEvent } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface FactsheetContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'inquiry' | 'sample';
}

export default function FactsheetContactModal({
  isOpen,
  onClose,
  defaultMode = 'sample',
}: FactsheetContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '법무 · 세무 · 회계 · 부동산',
    solutionType: defaultMode === 'sample' ? '무료 AI 업무 진단' : '고객 응대 · 예약 자동화',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        solutionType: defaultMode === 'sample' ? '무료 AI 업무 진단' : '고객 응대 · 예약 자동화',
      }));
      setIsSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen, defaultMode]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('성함, 연락처, 이메일을 모두 입력해 주세요.');
      return;
    }

    if (!emailPattern.test(formData.email.trim())) {
      setErrorMessage('올바른 이메일 형식을 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const emailPayload = {
        _subject: `[AI 솔루션 문의] ${formData.name}님 (${formData.company || formData.industry}) - ${formData.solutionType}`,
        _replyto: formData.email,
        _cc: 'apark12321@gmail.com',
        담당자명: formData.name,
        상호_사무소명: formData.company || '(미입력)',
        업종: formData.industry,
        희망_솔루션: formData.solutionType,
        연락처: formData.phone,
        이메일: formData.email,
        문의_내용: formData.message || '(추가 내용 없음)',
      };

      const res = await fetch('https://formsubmit.co/ajax/ceo@avro.co.kr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      if (!res.ok) {
        await fetch('https://formsubmit.co/ajax/apark12321@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(emailPayload),
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
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 max-h-[92vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-11 h-11 bg-blue-50 text-[#2563EB] flex items-center justify-center mx-auto mb-4 rounded-full">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">
              상담 신청이 접수되었습니다
            </h3>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              남겨주신 업종과 내용을 검토한 뒤 영업일 기준 빠르게 회신드리겠습니다.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs text-slate-600 mb-6 text-left space-y-1">
              <div>
                <span className="font-semibold text-slate-900">신청자:</span> {formData.name}
                {formData.company ? ` (${formData.company})` : ''}
              </div>
              <div>
                <span className="font-semibold text-slate-900">업종:</span> {formData.industry}
              </div>
              <div>
                <span className="font-semibold text-slate-900">희망 분야:</span> {formData.solutionType}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-lg text-sm cursor-pointer transition-colors"
            >
              확인
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-6">
              <div className="text-xs font-semibold text-[#2563EB] mb-1">
                {defaultMode === 'sample' ? '무료 업무 진단' : '맞춤형 AI 개발 문의'}
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {defaultMode === 'sample'
                  ? '우리 업종 AI 자동화 무료 진단'
                  : '맞춤형 AI 솔루션 제작 상담'}
              </h2>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 text-rose-700 text-xs font-medium border border-rose-200">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    성함 <span className="text-[#2563EB]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    상호 · 사무소명
                  </label>
                  <input
                    type="text"
                    placeholder="예) 청라세무회계 / OO카페"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    연락처 <span className="text-[#2563EB]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    이메일 <span className="text-[#2563EB]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    업종 선택
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:border-[#2563EB] outline-none bg-white text-sm"
                  >
                    <option value="법무 · 세무 · 회계 · 부동산">법무 · 세무 · 회계 · 부동산</option>
                    <option value="병원 · 약국 · 학원">병원 · 약국 · 학원</option>
                    <option value="커피숍 · 카페 · 식당 · 베이커리">커피숍 · 카페 · 식당 · 베이커리</option>
                    <option value="휴대폰 판매점 · 세탁소 · 과일가게 · 정육점">
                      휴대폰 판매점 · 세탁소 · 과일가게 · 정육점
                    </option>
                    <option value="기타 소상공인 · 개인사업자">기타 소상공인 · 개인사업자</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    희망 솔루션
                  </label>
                  <select
                    value={formData.solutionType}
                    onChange={(e) => setFormData({ ...formData, solutionType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:border-[#2563EB] outline-none bg-white text-sm"
                  >
                    <option value="무료 AI 업무 진단">무료 AI 업무 진단</option>
                    <option value="고객 응대 · 예약 자동화">고객 응대 · 예약 자동화</option>
                    <option value="검색 최적화(SEO) · AI 마케팅 홍보">검색 최적화(SEO) · AI 마케팅 홍보</option>
                    <option value="문서 · 정산 · 발주 자동화">문서 · 정산 · 발주 자동화</option>
                    <option value="우리 매장 전용 웹·앱 제작">우리 매장 전용 웹·앱 제작</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  자동화하고 싶은 업무 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="예) 카톡 예약 응대가 너무 많습니다 / 세무 증빙 정리를 줄이고 싶습니다"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 outline-none bg-white text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-colors cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? '접수 중...' : '신청하기'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
