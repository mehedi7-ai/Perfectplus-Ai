import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import PainPoints from './components/PainPoints';
import DemoShowcase from './components/DemoShowcase';
import ROICalculator from './components/ROICalculator';
import Foundations from './components/Foundations';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';
import BDPage from './components/BDPage';
import GlobalMap from './components/GlobalMap';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'bd' | 'terms' | 'privacy'>('home');

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'about' || page === 'bd' || page === 'terms' || page === 'privacy') {
      setCurrentPage(page as 'home' | 'about' | 'bd' | 'terms' | 'privacy');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden relative pt-20">
      
      {/* Navbar - Position absolute for home to overlay dark hero, or just normal */}
      {/* We keep it normal but might need to handle text color contrast if hero is dark. 
          For now, Navbar component has its own white background or we can adjust later. 
          Assuming Navbar is default white/transparent. The current Navbar is transparent-ish? 
          Actually Navbar code shows bg-transparent/white behavior usually. 
          Let's ensure Navbar looks okay. The current Navbar code doesn't have a background set explicitly on the nav tag, 
          it just sits in the flow. If Hero is dark, we might want Navbar to handle that. 
          But sticking to basic integration first. */}
      <Navbar onNavigate={handleNavigate} activePage={currentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            {/* Hero is now full width dark section */}
            <Hero />
            
            {/* Features Section */}
            <Features />

            {/* Full width sections */}
            <SocialProof />
            
            <GlobalMap />
            
            <PainPoints />

            <DemoShowcase />

            <ROICalculator />

            <Foundations onNavigate={handleNavigate} />

            <HowItWorks />

            <FAQ />

            <CTA />
          </>
        ) : currentPage === 'about' ? (
          <AboutUsPage />
        ) : currentPage === 'bd' ? (
          <BDPage />
        ) : currentPage === 'terms' ? (
          <TermsOfService />
        ) : (
          <PrivacyPolicy />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </div>
  );
};

export default App;