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
    if (path === '/' || path === '/global') return 'home';
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

  const handleMobileNavigate = (path: string) => {
    const isCurrentPage = 
      (path === '/global' && (location.pathname === '/' || location.pathname === '/global')) ||
      (location.pathname === path);

    if (isCurrentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, targetPath: string) => {
    const isCurrentPage = 
      (targetPath === '/global' && (location.pathname === '/' || location.pathname === '/global')) ||
      (location.pathname === targetPath);

    if (isCurrentPage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Global', path: '/global' },
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
            >
              <Link 
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-base font-semibold transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer flex items-center gap-1 ${
                  activePage === item.id ? 'text-brand-purple' : 'text-gray-700 hover:text-brand-purple'
                }`}
              >
                {item.label}
              </Link>
              
              {/* Active Underline */}
              {activePage === item.id && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-purple rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Right CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => {
              window.open('https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi', '_blank');
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
                    onClick={() => handleMobileNavigate(item.path)}
                    className={`text-2xl font-bold text-left flex items-center justify-between w-full ${
                      activePage === item.id ? 'text-brand-purple' : 'text-gray-900'
                    }`}
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 pb-10">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi', '_blank');
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