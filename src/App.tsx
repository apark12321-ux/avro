import { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-zinc-900 font-sans antialiased selection:bg-[#0066EE] selection:text-white">
      {/* Floating Website GNB */}
      <WebNavbar onOpenModal={handleOpenModal} />

      {/* Hero Section (Dark Navy #060B19 with high-contrast, ultra-punchy 4-panel SWOT cards) */}
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
