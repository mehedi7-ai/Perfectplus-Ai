import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const ROICalculator: React.FC = () => {
  const [callVolume, setCallVolume] = useState(1000);
  const [callDuration, setCallDuration] = useState(11);
  const [staffCost, setStaffCost] = useState(43);
  const [ticker, setTicker] = useState(0.22);

  // Ticker effect: Increase by $0.01 every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker(prev => prev + 0.01);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Derived values
  const hoursSaved = Math.round((callVolume * callDuration) / 60);
  const moneySaved = Math.round(hoursSaved * staffCost);

  return (
    <div className="py-24 relative overflow-hidden bg-[#0f172a] text-white">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs">
            Return on Investment
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-white">
            See Your Savings Instantly
          </h2>
        </motion.div>

        {/* Main Card with Gold Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900 rounded-[2rem] shadow-[0_0_50px_rgba(234,179,8,0.1)] border border-yellow-500/20 p-8 md:p-12 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Sliders */}
            <div className="space-y-12">
              
              {/* Slider 1 */}
              <div className="group">
                <div className="flex justify-between items-center mb-5">
                  <label className="text-sm font-bold text-slate-300">Monthly call volume</label>
                  <span className="text-lg font-extrabold text-white">{callVolume.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={callVolume}
                  onChange={(e) => setCallVolume(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-400 hover:accent-yellow-300 transition-all"
                />
              </div>

              {/* Slider 2 */}
              <div className="group">
                <div className="flex justify-between items-center mb-5">
                  <label className="text-sm font-bold text-slate-300">Avg call duration (min)</label>
                  <span className="text-lg font-extrabold text-white">{callDuration}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={callDuration}
                  onChange={(e) => setCallDuration(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-400 hover:accent-yellow-300 transition-all"
                />
              </div>

               {/* Slider 3 */}
               <div className="group">
                <div className="flex justify-between items-center mb-5">
                  <label className="text-sm font-bold text-slate-300">Staff cost ($/hr)</label>
                  <span className="text-lg font-extrabold text-white">${staffCost}</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="100"
                  step="1"
                  value={staffCost}
                  onChange={(e) => setStaffCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-400 hover:accent-yellow-300 transition-all"
                />
              </div>

            </div>

            {/* Right Column: Result */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-3xl p-8 md:p-12 text-center border border-yellow-500/30 h-full flex flex-col justify-center shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-500/5 blur-xl"></div>
                <div className="relative z-10">
                    <p className="text-yellow-400 font-semibold mb-2 text-lg">Estimated Monthly Savings</p>
                    <motion.h3 
                      key={moneySaved}
                      initial={{ scale: 1.1, color: "#fbbf24" }}
                      animate={{ scale: 1, color: "#ffffff" }}
                      className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                    >
                        ${moneySaved.toLocaleString()}
                    </motion.h3>
                    
                    <div className="border-t border-white/10 w-full mb-8"></div>
                    
                    <p className="text-slate-400 font-bold mb-2 text-sm uppercase tracking-wide">Time Saved per Month</p>
                    <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-extrabold text-white">{hoursSaved}</span>
                        <span className="text-2xl text-slate-500 font-semibold">hours</span>
                    </div>
                </div>
            </div>

          </div>
        </motion.div>

        {/* Floating Ticker */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-6 px-16 text-center transform transition-transform hover:scale-105 duration-300">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Saved since visiting</p>
                <p className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    ${ticker.toFixed(2)}
                </p>
            </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
            <p className="text-slate-400 font-medium mb-8">Want a more detailed breakdown of how much you can save?</p>
            <button 
                onClick={() => window.open('https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi', '_blank')}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-900 px-10 py-4 rounded-full text-lg font-bold shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
                Book Your Free Discovery Call
            </button>
        </motion.div>

      </div>
    </div>
  );
};

export default ROICalculator;