import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export default function TermsModal({ isOpen, type, onClose }: TermsModalProps) {
  if (!isOpen || !type) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200 max-h-[85vh] flex flex-col"
      >
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
          <h3 className="text-base font-bold text-slate-900">
            {type === 'terms' ? '서비스 이용약관' : '개인정보처리방침'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="p-1 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto py-4 text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed pr-1">
          {type === 'terms' ? (
            <>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">제1조 (목적)</h4>
                <p>
                  본 약관은 주식회사 에이브로(AVRO)가 제공하는 소상공인·자영업자·전문직
                  맞춤형 AI 솔루션 개발 및 업무 자동화 구축 서비스의 이용 조건과 절차를
                  규정합니다.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">제2조 (개발 및 납품)</h4>
                <p>
                  1. 회사는 사전 확정된 기능 명세와 일정에 따라 솔루션을 개발 및 배포합니다.
                  <br />
                  2. 납품 후 합의된 안정화 기간 내 당사 과실로 발생한 오류는 무상으로 수정합니다.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">제3조 (보안 및 소유권)</h4>
                <p>
                  1. 최종 납품된 맞춤형 솔루션의 사용권 및 산출물 귀속 조건은 개별 계약에 따릅니다.
                  <br />
                  2. 회사는 프로젝트 수행 중 취득한 고객사의 영업·고객 데이터에 대해 비밀유지(NDA)를 엄수합니다.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">1. 수집 항목 및 이용 목적</h4>
                <p>
                  성함, 상호·사무소명, 업종, 연락처, 이메일 주소 — 무료 업무 진단 및 맞춤형 AI
                  솔루션 견적 상담 목적
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">2. 보유 기간 및 파기</h4>
                <p>
                  상담 및 계약 목적 달성 후 지체 없이 파기하며, 전자적 파일은 복구 불가능한
                  방식으로 안전하게 삭제합니다.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">3. 개인정보 보호 책임자</h4>
                <p>주식회사 에이브로 대표이사 박예준 (ceo@avro.co.kr)</p>
              </div>
            </>
          )}
        </div>

        <div className="pt-3.5 border-t border-slate-200 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
