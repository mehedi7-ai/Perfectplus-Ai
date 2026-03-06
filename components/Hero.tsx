import React, { useRef, useState } from 'react';
import { Play, Zap, Users, Globe, Activity, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

// Using the hosted image URL provided by the user
const mehediImage = "https://i.ibb.co.com/ZRBZg9mg/8de32266-741d-4eac-9407-30cffb025d46.jpg";

const Hero: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleUnmute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
        '*'
      );
      setIsMuted(false);
      setHasInteracted(true);
    }
  };

  return (
    <section className="relative w-full pt-20 pb-32 overflow-hidden bg-[#020617] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] opacity-30"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Live Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-pulse"
        >
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
            <span className="text-sm font-mono text-blue-200 tracking-wider uppercase">System Operational • Global Network</span>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
           The Global Command Center <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
             For Intelligent Voice AI
           </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
           Deploy enterprise-grade voice agents worldwide. Handle millions of calls in any language, timezone, or dialect from a single dashboard.
        </motion.p>

        {/* CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-6 mb-20"
        >
            <button 
                onClick={() => window.open('https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi', '_blank')}
                className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
                <span className="relative z-10 flex items-center gap-2">
                   Deploy Your Agent <Zap size={20} className="fill-slate-900" />
                </span>
            </button>
            <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                           <Users size={16} className="text-slate-400" />
                        </div>
                    ))}
                </div>
                <span>Trusted By Industry Leaders</span>
            </div>
        </motion.div>

        {/* Video Placeholder - Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-6xl mx-auto perspective-1000"
        >
             {/* Laptop/Dashboard Frame */}
             <div className="relative bg-[#0f172a] rounded-t-2xl border-t border-x border-slate-700 shadow-2xl overflow-hidden aspect-[16/9] group transform transition-transform duration-500 hover:rotate-x-2">
                 {/* Top Bar */}
                 <div className="h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <div className="ml-4 px-3 py-0.5 bg-slate-900 rounded text-[10px] font-mono text-slate-500">
                        dashboard.perfectplus.ai
                    </div>
                 </div>
                 
                 {/* Screen Content */}
                 <div className="relative w-full h-full bg-slate-900 flex items-center justify-center group/video">
                     <iframe
                        ref={iframeRef}
                        className={`w-full h-full object-cover ${isMuted ? 'pointer-events-none' : ''}`}
                        src="https://www.youtube.com/embed/FGcRFUllEBY?autoplay=1&mute=1&loop=1&playlist=FGcRFUllEBY&enablejsapi=1&controls=1&rel=0"
                        title="Global Intro Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>

                     {/* Overlay for Click-to-Unmute */}
                     {isMuted && (
                         <div 
                             className="absolute inset-0 z-10 bg-transparent cursor-pointer"
                             onClick={handleUnmute}
                         ></div>
                     )}

                     {/* Mute Indicator */}
                     {isMuted && (
                        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                           <div className="w-20 h-14 md:w-28 md:h-20 bg-brand-purple/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 border-2 border-white/20 animate-pulse">
                              <Volume2 className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                           </div>
                           <div className="absolute bottom-8 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
                               Click to Unmute
                           </div>
                        </div>
                     )}
                 </div>
             </div>
             {/* Reflection/Glow below */}
             <div className="absolute -bottom-4 inset-x-4 h-20 bg-brand-purple/20 blur-3xl rounded-full opacity-40"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;