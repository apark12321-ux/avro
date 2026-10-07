import { useState } from 'react';
import TemplateNavbar from './components/TemplateNavbar';
import TemplateSlide1Hero from './components/TemplateSlide1Hero';
import TemplateSlide2Index from './components/TemplateSlide2Index';
import TemplateSlide3About from './components/TemplateSlide3About';
import TemplateSlide4UserProblem from './components/TemplateSlide4UserProblem';
import TemplateSlide5PainPoints from './components/TemplateSlide5PainPoints';
import TemplateSlide6Solution from './components/TemplateSlide6Solution';
import TemplateSlide7Projects from './components/TemplateSlide7Projects';
import TemplateSlide8DataGauge from './components/TemplateSlide8DataGauge';
import TemplateSlide9ReviewsBlue from './components/TemplateSlide9ReviewsBlue';
import TemplateSlide10BarChart from './components/TemplateSlide10BarChart';
import TemplateSlide11Keywords from './components/TemplateSlide11Keywords';
import TemplateSlide12Process from './components/TemplateSlide12Process';
import TemplateFAQ from './components/TemplateFAQ';
import TemplateSlide13Footer from './components/TemplateSlide13Footer';
import FactsheetContactModal from './components/FactsheetContactModal';
import TermsModal from './components/TermsModal';

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
      {/* Sleek Floating Navbar */}
      <TemplateNavbar onOpenModal={handleOpenModal} />

      {/* Slide 1: Cover / Hero (Dark Navy + 3D Blue Fluid Petal Bloom) */}
      <TemplateSlide1Hero onOpenModal={handleOpenModal} />

      {/* Slide 2: Table of Contents (Solid Cobalt Blue Screen) */}
      <TemplateSlide2Index />

      {/* Slide 3: 01. About (간결하게 깔끔한 레이아웃) */}
      <TemplateSlide3About onOpenModal={handleOpenModal} />

      {/* Slide 4: 01-1. User Problem (3 Persona Cards) */}
      <TemplateSlide4UserProblem />

      {/* Slide 5: 01-2. User Problem (Detailed Pain Points & Pill Tags) */}
      <TemplateSlide5PainPoints />

      {/* Slide 6: 01-3. Solution (3-Tier Solution & Key Summary Box) */}
      <TemplateSlide6Solution />

      {/* Slide 7: 02. Core Capabilities (Vector Diagram & Solid Blue Card) */}
      <TemplateSlide7Projects />

      {/* Slide 8: 02-1. Projects Data (Gauge Chart & Factual Stats) */}
      <TemplateSlide8DataGauge />

      {/* Slide 9: Overview (Solid Blue Screen with 5 Floating Client Review Cards) */}
      <TemplateSlide9ReviewsBlue />

      {/* Slide 10: 02-2. Projects Data (Horizontal Bar Chart) */}
      <TemplateSlide10BarChart />

      {/* Slide 11: 02-3. Projects Keyword (Rounded Pill Cloud) */}
      <TemplateSlide11Keywords />

      {/* Slide 12: 02-4. Process (5-Step Chevron Flow & Key Point Quote) */}
      <TemplateSlide12Process />

      {/* FAQ Section */}
      <TemplateFAQ />

      {/* Slide 13: Closing & Minimal Footer (Thanks for watching! + 4 Columns Info) */}
      <TemplateSlide13Footer
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

      {/* Legal Policy Modal */}
      <TermsModal
        isOpen={modalPolicy !== null}
        type={modalPolicy}
        onClose={() => setModalPolicy(null)}
      />
    </div>
  );
}
