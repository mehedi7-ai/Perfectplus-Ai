import React, { useState, useRef, useEffect } from 'react';
import { Play, CheckCircle2, Info, Laptop, Mic, Activity, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

type Scenario = {
  id: string;
  label: string;
  title: string;
  scenario: string;
  capabilities: string[];
  whyItMatters: string;
  color: string;
  videoId: string;
};

const scenarios: Scenario[] = [
  {
    id: 'support',
    label: 'Customer Support',
    title: 'Support Agent',
    scenario: '"Handling a football fan\'s ticket inquiry with context and empathy."',
    capabilities: [
      'Provides personalized responses',
      'Handles frustrated tone with empathy',
      'Accesses real-time ticket database',
      'Triggers sending emails and texts'
    ],
    whyItMatters: 'Resolves frustration naturally without escalating to a human.',
    color: 'from-blue-500 to-indigo-600',
    videoId: '3hNysHYWK3Q'
  },
  {
    id: 'scheduler',
    label: 'Scheduling',
    title: 'Appointment Scheduler',
    scenario: '"Finding the perfect time slot for a busy dental patient."',
    capabilities: [
      'Syncs with Google/Cal.com in real-time',
      'Handles rescheduling and cancellations',
      'Sends calendar invites automatically',
      'Understands natural language dates'
    ],
    whyItMatters: 'Fills your calendar while you sleep.',
    color: 'from-emerald-500 to-teal-600',
    videoId: '0NYtYDAS2HU'
  },
  {
    id: 'outbound',
    label: 'Outbound Sales',
    title: 'Sales Assistant',
    scenario: '"Reactivating dormant leads with a special offer."',
    capabilities: [
      'Dials thousands of leads simultaneously',
      'Detects voicemails vs humans',
      'Navigates gatekeepers intelligently',
      'Books meetings directly on the call'
    ],
    whyItMatters: 'Turn your cold lead list into a goldmine.',
    color: 'from-orange-500 to-red-600',
    videoId: 'rjFH5kAXa_0'
  }
];

const DemoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(scenarios[0].id);
  const activeScenario = scenarios.find(s => s.id === activeTab) || scenarios[0];
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Reset mute state and interaction when switching tabs
  useEffect(() => {
    setIsMuted(true);
    setHasInteracted(false);
  }, [activeTab]);

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
    <div id="demo" className="py-24 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-pulse"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse delay-700"></div>
        </div>
       {/* Decorative blob */}
       <div className="absolute top-1/2 left-0 -z-10 w-[600px] h-[600px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-purple font-bold tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
            Live Software
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-900">
            The Interface of Intelligence
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {scenarios.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === item.id
                  ? 'bg-slate-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* Main Content Area - Laptop Mockup */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
            {/* Laptop Body */}
            <div className="relative bg-gray-800 rounded-t-[2rem] p-2 pb-0 shadow-2xl border-t border-gray-700 mx-auto w-full aspect-[16/10] max-h-[600px]">
                {/* Camera Dot */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black z-20"></div>
                
                {/* Screen Bezel */}
                <div className="bg-black w-full h-full rounded-t-[1.5rem] overflow-hidden relative flex">
                    
                    {/* Sidebar Control Panel (Glassmorphism) */}
                    <div className="hidden md:flex w-64 h-full bg-slate-900/90 backdrop-blur-md border-r border-slate-800 flex-col p-6 z-10 relative">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Active Brain</div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-xl border border-slate-700">
                                <div className="p-2 bg-green-500/20 rounded-lg">
                                    <Mic size={16} className="text-green-500" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Voice Input</div>
                                    <div className="text-green-500 text-[10px] uppercase font-bold">Live</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-xl border border-slate-700">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <Activity size={16} className="text-blue-500" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Latency</div>
                                    <div className="text-slate-400 text-[10px]">~400ms</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                             <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Capabilities</div>
                             <div className="space-y-2">
                                 {activeScenario.capabilities.slice(0, 3).map((cap, i) => (
                                     <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                                         <CheckCircle2 size={12} className="text-brand-purple" />
                                         {cap.substring(0, 20)}...
                                     </div>
                                 ))}
                             </div>
                        </div>
                    </div>

                    {/* Main Video Area */}
                    <div className="flex-1 relative bg-slate-900 flex items-center justify-center group/video">
                         <iframe
                            key={activeScenario.videoId} // Force re-render on tab change
                            ref={iframeRef}
                            className="w-full h-full object-cover"
                            src={`https://www.youtube.com/embed/${activeScenario.videoId}?autoplay=1&mute=1&loop=1&playlist=${activeScenario.videoId}&enablejsapi=1&controls=1&modestbranding=1&rel=0`}
                            title={activeScenario.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                         ></iframe>

                         {/* Click overlay to unmute and reveal controls */}
                         {!hasInteracted && (
                           <div 
                              onClick={handleUnmute}
                              className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors z-10"
                           >
                              <div className="p-4 rounded-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover/video:opacity-100">
                                  <VolumeX className="w-8 h-8 text-white" />
                              </div>
                              
                              {/* Mute Indicator */}
                              <div className="absolute bottom-16 right-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md pointer-events-none flex items-center gap-2 animate-pulse">
                                  <VolumeX className="w-4 h-4" />
                                  Click to Unmute
                              </div>
                           </div>
                         )}
                    </div>

                </div>
            </div>
            {/* Laptop Base */}
            <div className="bg-gray-700 h-4 w-full rounded-b-xl shadow-xl relative z-20 mx-auto max-w-[102%] -mt-1 border-t border-gray-600">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-gray-600 rounded-b-lg"></div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default DemoShowcase;