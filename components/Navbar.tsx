import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isGlobalHovered, setIsGlobalHovered] = useState(false);
  const [isBDHovered, setIsBDHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active page based on path
  const getActivePage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/bd') return 'bd';
    if (path === '/terms') return 'terms';
    if (path === '/privacy') return 'privacy';
    return 'home';
  };

  const activePage = getActivePage();

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Handle hash scrolling on page load/change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const scrollToSection = (page: 'home' | 'about' | 'bd' | 'terms' | 'privacy', id: string) => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    
    if (location.pathname !== targetPath) {
      navigate(`${targetPath}#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsGlobalHovered(false);
    setIsBDHovered(false);
    setIsMobileMenuOpen(false);
  };

  const handleMobileNavigate = (page: string) => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    navigate(targetPath);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Global', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'bd', label: 'BD', path: '/bd' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <nav className="w-full py-4 px-4 sm:px-8 flex items-center justify-between max-w-7xl mx-auto relative z-[101]">
        {/* Logo Section */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Logo Image */}
          <img 
            src="https://i.ibb.co.com/XfGCQ0V3/Untitled-512-x-512-px-1.png" 
            alt="Perfectplus Ai Logo" 
            className="w-10 h-10 object-cover rounded-lg shadow-sm" 
          />
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Perfectplus Ai
          </span>
        </motion.div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <div 
              key={item.id} 
              className="relative"
              onMouseEnter={() => {
                if (item.id === 'home') setIsGlobalHovered(true);
                if (item.id === 'bd') setIsBDHovered(true);
              }}
              onMouseLeave={() => {
                if (item.id === 'home') setIsGlobalHovered(false);
                if (item.id === 'bd') setIsBDHovered(false);
              }}
            >
              <Link 
                to={item.path}
                className={`text-base font-semibold transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer flex items-center gap-1 ${
                  activePage === item.id ? 'text-brand-purple' : 'text-gray-700 hover:text-brand-purple'
                }`}
              >
                {item.label}
                {(item.id === 'home' || item.id === 'bd') && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${
                      (item.id === 'home' && isGlobalHovered) || (item.id === 'bd' && isBDHovered) ? 'rotate-180' : ''
                    }`} 
                  />
                )}
              </Link>
              
              {/* Active Underline */}
              {activePage === item.id && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-purple rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Global Dropdown */}
              {item.id === 'home' && (
                <AnimatePresence>
                  {isGlobalHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden p-2"
                    >
                      <div className="flex flex-col gap-1">
                        <button 
                          onClick={(e) => { e.stopPropagation(); scrollToSection('home', 'solutions'); }}
                          className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors group"
                        >
                          <span className="block text-white font-bold text-sm mb-0.5 group-hover:text-brand-purple transition-colors">Solutions</span>
                          <span className="block text-slate-400 text-xs">Industry Solutions</span>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); scrollToSection('home', 'demo'); }}
                          className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors group"
                        >
                          <span className="block text-white font-bold text-sm mb-0.5 group-hover:text-brand-purple transition-colors">Live Demo</span>
                          <span className="block text-slate-400 text-xs">Live Software</span>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); scrollToSection('home', 'faq'); }}
                          className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors group"
                        >
                          <span className="block text-white font-bold text-sm mb-0.5 group-hover:text-brand-purple transition-colors">FAQ</span>
                          <span className="block text-slate-400 text-xs">Common Questions</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* BD Dropdown */}
              {item.id === 'bd' && (
                <AnimatePresence>
                  {isBDHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden p-2"
                    >
                      <div className="flex flex-col gap-1">
                        <button 
                          onClick={(e) => { e.stopPropagation(); scrollToSection('bd', 'demo'); }}
                          className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors group"
                        >
                          <span className="block text-white font-bold text-sm mb-0.5 group-hover:text-brand-purple transition-colors">Live Demo</span>
                          <span className="block text-slate-400 text-xs">See it in action</span>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); scrollToSection('bd', 'pricing'); }}
                          className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors group"
                        >
                          <span className="block text-white font-bold text-sm mb-0.5 group-hover:text-brand-purple transition-colors">Pricing</span>
                          <span className="block text-slate-400 text-xs">Plans & Costs</span>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); scrollToSection('bd', 'resources'); }}
                          className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors group"
                        >
                          <span className="block text-white font-bold text-sm mb-0.5 group-hover:text-brand-purple transition-colors">Resources</span>
                          <span className="block text-slate-400 text-xs">Guides & Tools</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => {
              if (activePage === 'bd') {
                const formElement = document.getElementById('onboarding-form');
                if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              } else {
                window.open('https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi', '_blank');
              }
            }}
            className="bg-brand-purple hover:bg-brand-purple/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Book A Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-brand-purple transition-colors p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

        {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-[99] bg-white md:hidden flex flex-col p-6 overflow-y-auto h-[calc(100vh-72px)]"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      if (item.id === 'home') {
                        setIsGlobalHovered(!isGlobalHovered);
                      } else if (item.id === 'bd') {
                        setIsBDHovered(!isBDHovered);
                      } else {
                        handleMobileNavigate(item.id);
                      }
                    }}
                    className={`text-2xl font-bold text-left flex items-center justify-between w-full ${
                      activePage === item.id ? 'text-brand-purple' : 'text-gray-900'
                    }`}
                  >
                    {item.label}
                    {(item.id === 'home' || item.id === 'bd') && (
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 ${
                          (item.id === 'home' && isGlobalHovered) || (item.id === 'bd' && isBDHovered) ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Mobile Sub-menus */}
                  <AnimatePresence>
                    {item.id === 'home' && isGlobalHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 flex flex-col gap-4 border-l-2 border-gray-100 py-2">
                          <button onClick={() => scrollToSection('home', 'solutions')} className="text-left text-gray-600 font-medium text-lg">Solutions</button>
                          <button onClick={() => scrollToSection('home', 'demo')} className="text-left text-gray-600 font-medium text-lg">Live Demo</button>
                          <button onClick={() => scrollToSection('home', 'faq')} className="text-left text-gray-600 font-medium text-lg">FAQ</button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <AnimatePresence>
                    {item.id === 'bd' && isBDHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 flex flex-col gap-4 border-l-2 border-gray-100 py-2">
                          <button onClick={() => scrollToSection('bd', 'demo')} className="text-left text-gray-600 font-medium text-lg">Live Demo</button>
                          <button onClick={() => scrollToSection('bd', 'pricing')} className="text-left text-gray-600 font-medium text-lg">Pricing</button>
                          <button onClick={() => scrollToSection('bd', 'resources')} className="text-left text-gray-600 font-medium text-lg">Resources</button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 pb-10">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (activePage === 'bd') {
                    const formElement = document.getElementById('onboarding-form');
                    if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  } else {
                    window.open('https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi', '_blank');
                  }
                }}
                className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg"
              >
                Book A Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;