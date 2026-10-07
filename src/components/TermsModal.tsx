import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export default function TermsModal({ isOpen, type, onClose }: TermsModalProps) {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs font-sans">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white text-zinc-900 rounded-sm p-6 shadow-2xl border border-zinc-300 max-h-[85vh] flex flex-col"
      >
        <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
          <h3 className="text-base font-bold text-zinc-900">
            {type === 'terms' ? '서비스 이용약관' : '개인정보처리방침'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto py-4 text-xs text-zinc-600 space-y-3 leading-relaxed pr-2">
          {type === 'terms' ? (
            <>
              <div>
                <h4 className="font-bold text-zinc-900 mb-0.5">제1조 (목적)</h4>
                <p>본 약관은 주식회사 에이브로가 제공하는 수학 문항 조판, 수식 타이핑 및 HWP 외주 편집 서비스 이용 조건 및 절차를 규정합니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-0.5">제2조 (납품 및 검수)</h4>
                <p>1. 회사는 합의된 기한 내 결과물(.hwp, .hwpx, .pdf)을 납품합니다.<br />2. 납품 후 당사 과실로 인한 오탈자 확인 시 상호 협의된 일정 내 신속하고 책임감 있게 수정합니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-0.5">제3조 (보안 및 저작권)</h4>
                <p>1. 원고의 저작권은 의뢰인에게 귀속됩니다.<br />2. 미공개 시험지에 대해 비밀유지(NDA)를 준수하며 작업 후 안전 파기합니다.</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-zinc-900 mb-0.5">1. 수집 항목 및 목적</h4>
                <p>성명, 학원/회사명, 연락처, 이메일 주소 / 조판 견적 상담 및 샘플 파일 발송 목적</p>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-0.5">2. 보유 기간 및 파기</h4>
                <p>목적 달성 시 지체 없이 파기하며 전자적 파일은 복구 불가능하게 삭제 처리합니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-0.5">3. 개인정보 책임자</h4>
                <p>대표이사 박아론 (032-567-2480 / ceo@avro.co.kr)</p>
              </div>
            </>
          )}
        </div>

        <div className="pt-3 border-t border-zinc-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black text-white text-xs font-bold rounded-sm hover:bg-zinc-800 transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
