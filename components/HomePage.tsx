import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from './Hero';
import Features from './Features';
import SocialProof from './SocialProof';
import PainPoints from './PainPoints';
import DemoShowcase from './DemoShowcase';
import ROICalculator from './ROICalculator';
import Foundations from './Foundations';
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';
import CTA from './CTA';
import GlobalMap from './GlobalMap';

const HomePage: React.FC = () => {
  // Sticky Navigator State
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState('solutions');

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 72;
      const stickyBarHeight = 56;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - stickyBarHeight + 2;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveTab(id);
    }
  };

  useEffect(() => {
    // 1. Scroll listener for sticky navigation visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 2. Intersection observer for highlighting the active section
    const sectionIds = ['solutions', 'live-demo', 'faq'];
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // 3. Initial hash scroll after 150ms on load
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          scrollToAnchor(id);
        }
      }, 150);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
        clearTimeout(timer);
      };
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Sticky Navigator for Global Page */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#0a0a1a]/95 backdrop-blur-[10px] border-b border-[#7c3aed]/30 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex items-center justify-center py-2.5">
                {/* Centered for tablet and above, horizontally scrollable for mobile */}
                <div className="w-full flex justify-center gap-2 md:gap-4 py-1 mx-auto">
                  
                  {/* Tab 1: Solutions */}
                  <button
                    onClick={() => scrollToAnchor('solutions')}
                    className={`whitespace-nowrap cursor-pointer transition-all duration-300 flex-1 md:flex-initial text-center font-semibold text-xs md:text-sm px-2 md:px-6 py-2 rounded-full ${
                      activeTab === 'solutions'
                        ? 'bg-purple-700 text-white rounded-full font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Solutions
                  </button>

                  {/* Tab 2: Live Demo */}
                  <button
                    onClick={() => scrollToAnchor('live-demo')}
                    className={`whitespace-nowrap cursor-pointer transition-all duration-300 flex-1 md:flex-initial text-center font-semibold text-xs md:text-sm px-2 md:px-6 py-2 rounded-full ${
                      activeTab === 'live-demo'
                        ? 'bg-purple-700 text-white rounded-full font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Live Demo
                  </button>

                  {/* Tab 3: FAQ */}
                  <button
                    onClick={() => scrollToAnchor('faq')}
                    className={`whitespace-nowrap cursor-pointer transition-all duration-300 flex-1 md:flex-initial text-center font-semibold text-xs md:text-sm px-2 md:px-6 py-2 rounded-full ${
                      activeTab === 'faq'
                        ? 'bg-purple-700 text-white rounded-full font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    FAQ
                  </button>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Hero />
      <Features />
      <SocialProof />
      <GlobalMap />
      <PainPoints />
      <DemoShowcase />
      <ROICalculator />
      <Foundations />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
};

export default HomePage;
