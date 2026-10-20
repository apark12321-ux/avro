import { useState } from 'react';
import SEO from './components/SEO';
import WebNavbar from './components/WebNavbar';
import WebHero from './components/WebHero';
import WebIndustrySolutions from './components/WebIndustrySolutions';
import WebEnterpriseTrust from './components/WebEnterpriseTrust';
import WebFAQ from './components/WebFAQ';
import WebFooter from './components/WebFooter';
import FactsheetContactModal from './components/FactsheetContactModal';
import TermsModal from './components/TermsModal';
import FloatingSampleButton from './components/FloatingSampleButton';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'inquiry' | 'sample'>('sample');
  const [modalPolicy, setModalPolicy] = useState<'terms' | 'privacy' | null>(null);

  const handleOpenModal = (mode: 'inquiry' | 'sample' = 'sample') => {
    setModalMode(mode);
    setIsContactModalOpen(true);
  };

  // Determine dynamic SEO metadata according to current active view / modal
  let seoTitle = 'AVRO - 수학 문항 조판 & 에듀테크 테크 에이전시';
  let seoDescription =
    '수학·과학 시험지 PDF를 출판 인쇄 규격 HWP로 완벽 변환하는 전문 기업. 수식 타이핑, 캡처본 고화질 업스케일, 학원 교재 템플릿 맞춤 조판. 샘플 3문항 무료 테스트 제공.';

  if (isContactModalOpen) {
    if (modalMode === 'sample') {
      seoTitle = '샘플 3문항 무료 변환 신청 | AVRO 수학 문항 조판';
      seoDescription =
        '보유하신 수학·과학 시험지 또는 교재 3문항을 한글(HWP) 출판 규격으로 무상 변환해 드립니다. 수식 개체화 및 도판 품질을 직접 사전 검증해보세요.';
    } else {
      seoTitle = '조판 및 외주 견적 상담 문의 | AVRO 수학 문항 조판';
      seoDescription =
        '대량 기출문제 전산화, 학원 교재 템플릿 조판, 수학·과학 수식 타이핑 외주 견적 및 일정 상담을 신청하세요.';
    }
  } else if (modalPolicy === 'terms') {
    seoTitle = '이용약관 | AVRO';
    seoDescription = 'AVRO 수학 문항 조판 및 에듀테크 서비스 이용약관 안내입니다.';
  } else if (modalPolicy === 'privacy') {
    seoTitle = '개인정보처리방침 | AVRO';
    seoDescription = 'AVRO 개인정보처리방침 및 원고 보안 보호 정책 안내입니다.';
  }

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-zinc-900 font-sans antialiased selection:bg-[#0066EE] selection:text-white">
      {/* Dynamic SEO Meta Tags & Structured Data */}
      <SEO title={seoTitle} description={seoDescription} />
      {/* Floating Website GNB */}
      <WebNavbar onOpenModal={handleOpenModal} />

      {/* Hero Section (Dark Navy #060B19 with high-contrast, ultra-punchy 4-panel core feature cards) */}
      <WebHero onOpenModal={handleOpenModal} />

      {/* Cross-Industry Solutions Explorer (Education, Public, Corporate, Legal) */}
      <WebIndustrySolutions onOpenModal={handleOpenModal} />

      {/* Enterprise Security (NDA, Closed-loop workflow, Permanent Deletion) & 2-Stage Cross Inspection */}
      <WebEnterpriseTrust />

      {/* Frequently Asked Questions */}
      <WebFAQ />

      {/* Closing Hero & Minimal Footer */}
      <WebFooter
        onOpenModal={handleOpenModal}
        onOpenTerms={() => setModalPolicy('terms')}
        onOpenPrivacy={() => setModalPolicy('privacy')}
      />

      {/* Contact & Sample Request Modal */}
      <FactsheetContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultMode={modalMode}
      />

      {/* Legal Terms & Privacy Modal */}
      <TermsModal
        isOpen={modalPolicy !== null}
        type={modalPolicy}
        onClose={() => setModalPolicy(null)}
      />

      {/* Floating Action Button (FAB) for Free Sample Request */}
      <FloatingSampleButton onOpenSampleModal={() => handleOpenModal('sample')} />
    </div>
  );
}
