import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate = (_: string) => {} }) => {
  return (
    <footer className="w-full pt-20 pb-10 bg-black text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Brand & Contact */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img 
                src="https://i.ibb.co.com/XfGCQ0V3/Untitled-512-x-512-px-1.png" 
                alt="Perfectplus Ai Logo" 
                className="w-10 h-10 object-cover rounded-lg" 
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                Perfectplus Ai
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-sm font-medium">
              Transform your business with AI receptionists that work 24/7, 
              integrate with your CRM, and save you thousands every month.
            </p>

            <div className="space-y-5 pt-2">
              <a href="mailto:support@perfectplusai.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2.5 bg-gray-900 rounded-lg group-hover:bg-brand-purple/20 transition-colors border border-gray-800 group-hover:border-brand-purple/50">
                    <Mail size={18} className="text-brand-purple group-hover:text-purple-300" />
                </div>
                <span className="text-sm font-medium tracking-wide">support@perfectplusai.com</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="p-2.5 bg-gray-900 rounded-lg border border-gray-800">
                    <MapPin size={18} className="text-brand-purple" />
                </div>
                <span className="text-sm font-medium tracking-wide">Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 lg:pl-12">
            
            {/* Services */}
            <div className="col-span-1">
              <h4 className="text-white font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-4">
                {['AI Receptionists', 'CRM Integration', 'Call Analytics', '24/7 Support'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-brand-purple hover:translate-x-1 transition-all duration-200 text-sm font-medium block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-1">
              <h4 className="text-white font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Case Studies', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    {item === 'About Us' ? (
                      <button 
                        onClick={() => onNavigate('about')}
                        className="text-gray-400 hover:text-brand-purple hover:translate-x-1 transition-all duration-200 text-sm font-medium block bg-transparent border-none cursor-pointer p-0 text-left"
                      >
                        {item}
                      </button>
                    ) : item === 'Terms of Service' ? (
                      <button 
                        onClick={() => onNavigate('terms')}
                        className="text-gray-400 hover:text-brand-purple hover:translate-x-1 transition-all duration-200 text-sm font-medium block bg-transparent border-none cursor-pointer p-0 text-left"
                      >
                        {item}
                      </button>
                    ) : item === 'Privacy Policy' ? (
                      <button 
                        onClick={() => onNavigate('privacy')}
                        className="text-gray-400 hover:text-brand-purple hover:translate-x-1 transition-all duration-200 text-sm font-medium block bg-transparent border-none cursor-pointer p-0 text-left"
                      >
                        {item}
                      </button>
                    ) : (
                      <a href="#" className="text-gray-400 hover:text-brand-purple hover:translate-x-1 transition-all duration-200 text-sm font-medium block">
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Perfectplus Ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;