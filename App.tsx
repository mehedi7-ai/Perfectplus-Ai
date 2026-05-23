import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import BDPage from './components/BDPage';
import ResourcesPage from './components/ResourcesPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import ScrollToTop from './components/ScrollToTop';
import { FloatingContact } from './components/FloatingContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden relative pt-20">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/global" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/bd" element={<BDPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
      <FloatingContact />
    </div>
  );
};

export default App;