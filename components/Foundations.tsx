import React from 'react';
import { motion } from 'motion/react';

interface FoundationsProps {
  onNavigate?: (page: string) => void;
}

const Foundations: React.FC<FoundationsProps> = ({ onNavigate }) => {
  return (
    <div className="py-24 relative overflow-hidden bg-white">
      {/* Background Gradient Mesh matching the reference image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-x-1/4"></div>
        <div className="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/4"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-brand-purple/80 font-medium tracking-wide text-sm md:text-base">
            Strong Foundations
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Shaped by Industry Experts
          </h2>
        </motion.div>

        {/* Card Section - Centered Single Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-lg mb-20"
        >
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              {/* Logo */}
              <div className="h-16 mb-6 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co.com/rJfpyvQ/photo-2026-02-01-12-08-48.jpg" 
                  alt="Voice AI Bootcamp Logo" 
                  className="h-full object-contain rounded-full shadow-sm"
                />
                <span className="ml-3 text-xl font-bold text-slate-900">Voice AI Bootcamp</span>
              </div>
              
              {/* Description */}
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                Team are Trained by Europe's leading Voice AI experts who've built solutions used in fortune-200 companies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Discover how a custom AI agent can transform your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button 
              onClick={() => window.open('https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi', '_blank')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-slate-900 to-indigo-900 text-white font-bold text-lg shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              Book Your Free Consultation
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('about')}
              className="px-8 py-3.5 rounded-full bg-white text-slate-700 font-bold text-lg shadow-sm border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 w-full sm:w-auto"
            >
              About Us
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 pt-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Spots are limited - Book now fast to secure yours
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Foundations;