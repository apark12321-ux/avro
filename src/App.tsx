import { useState } from 'react';
import SEO from './components/SEO';
import WebNavbar from './components/WebNavbar';
import WebHero from './components/WebHero';
import IndustryAIShowcase from './components/IndustryAIShowcase';
import PortfolioShowcase from './components/PortfolioShowcase';
import CoreCapabilities from './components/CoreCapabilities';
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

  let seoTitle = 'AVRO — 소상공인·자영업자·전문직 맞춤형 AI 솔루션 · SEO 마케팅 개발사';
  let seoDescription =
    '법무·세무·회계·병원·부동산부터 카페·식당·베이커리·학원·동네 매장까지. 업무 자동화 AI 솔루션과 검색 최적화(SEO/GEO)·마케팅 홍보 세팅을 함께 구축합니다.';

  if (isContactModalOpen) {
    if (modalMode === 'sample') {
      seoTitle = '무료 AI 업무 진단 신청 | AVRO';
      seoDescription =
        '우리 매장·사무실에서 반복되는 예약·상담·정산·문서 업무를 진단하고 맞춤형 AI 화면과 견적을 무료로 제안받으세요.';
    } else {
      seoTitle = '맞춤형 AI 솔루션 개발 문의 | AVRO';
      seoDescription =
        '업종별 고객 응대, 예약 자동화, 문서 정리, 전용 웹·앱 제작 프로젝트 상담을 신청하세요.';
    }
  } else if (modalPolicy === 'terms') {
    seoTitle = '이용약관 | AVRO';
    seoDescription = '주식회사 에이브로 맞춤형 AI 솔루션 개발 서비스 이용약관 안내입니다.';
  } else if (modalPolicy === 'privacy') {
    seoTitle = '개인정보처리방침 | AVRO';
    seoDescription = '주식회사 에이브로 개인정보처리방침 및 고객 데이터 보호 정책 안내입니다.';
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      <SEO title={seoTitle} description={seoDescription} />
      <WebNavbar onOpenModal={handleOpenModal} />

      <main>
        <WebHero onOpenModal={handleOpenModal} />
        <IndustryAIShowcase onOpenModal={handleOpenModal} />
        <PortfolioShowcase onOpenModal={handleOpenModal} />
        <CoreCapabilities onOpenModal={handleOpenModal} />
        <WebEnterpriseTrust />
        <WebFAQ />
      </main>

      <WebFooter
        onOpenModal={handleOpenModal}
        onOpenTerms={() => setModalPolicy('terms')}
        onOpenPrivacy={() => setModalPolicy('privacy')}
      />

      <FactsheetContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultMode={modalMode}
      />

      <TermsModal
        isOpen={modalPolicy !== null}
        type={modalPolicy}
        onClose={() => setModalPolicy(null)}
      />

      <FloatingSampleButton onOpenSampleModal={() => handleOpenModal('sample')} />
    </div>
  );
}
