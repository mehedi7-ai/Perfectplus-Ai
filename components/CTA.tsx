import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const CTA: React.FC = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-pulse"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse delay-700"></div>
        </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-[#0f111a] border border-gray-800 shadow-2xl group"
        >
          
          {/* Background Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            {/* Top center purple glow */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[4s]"></div>
            {/* Bottom right blue glow */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
          </div>

          <div className="relative z-10 py-20 px-8 md:px-12 flex flex-col items-center text-center">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 shadow-inner"
            >
              <span className="text-xs md:text-sm font-semibold text-purple-200 tracking-wide uppercase">
                High Demand - Limited Spots
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Stop Losing Money on<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
                 Missed Calls Today
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-medium"
            >
              Join exclusive clients already saving thousands per month with AI receptionists. Book your free consultation to discover your exact savings potential.
            </motion.p>

            {/* Features/Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {['Free consultation', 'No obligation', 'Custom Strategy'].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-200 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => window.open('https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi', '_blank')}
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-brand-purple to-indigo-600 rounded-full hover:from-brand-purple/90 hover:to-indigo-600/90 shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Book Your Call
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </motion.button>

            {/* Footer Text */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 text-sm text-gray-500 font-medium"
            >
              No credit card required • Free strategy session
            </motion.p>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;