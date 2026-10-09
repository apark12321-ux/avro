import { useState } from 'react';
import WebNavbar from './components/WebNavbar';
import WebHero from './components/WebHero';
import ConversionWorkstation from './components/ConversionWorkstation';
import WebServiceOverview from './components/WebServiceOverview';
import WebWhyAndSolutions from './components/WebWhyAndSolutions';
import WebQualityAndReviews from './components/WebQualityAndReviews';
import WebProcess from './components/WebProcess';
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

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-zinc-900 font-sans antialiased selection:bg-[#0066EE] selection:text-white">
      {/* Floating Website GNB */}
      <WebNavbar onOpenModal={handleOpenModal} />

      {/* Hero Section (Dark Navy #060B19 with Windows 11-style 3D Electric Blue Fluid Petals) */}
      <WebHero onOpenModal={handleOpenModal} />

      {/* Conversion Workstation Showcase: [선별 원고 캡처] ➔ [빈출유형 1회 최종 HWP] (No company names) */}
      <ConversionWorkstation onOpenSampleModal={() => handleOpenModal('sample')} />

      {/* Service Overview & Upscale Technology Policy */}
      <WebServiceOverview onOpenModal={handleOpenModal} />

      {/* Why AVRO & 3-Tier Solutions */}
      <WebWhyAndSolutions />

      {/* Verified Metrics (Gauge & Benchmark Bars) + Authentic Client Reviews */}
      <WebQualityAndReviews />

      {/* 5-Step Work Process with Realistic Reassurance */}
      <WebProcess />

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
