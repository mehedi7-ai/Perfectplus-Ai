import React from 'react';
import { User, Bot, Clock, DollarSign, Phone, Globe, Zap, X, Check, Brain, Battery } from 'lucide-react';
import { motion } from 'motion/react';

const GlobalMap: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center mb-16">
                 <span className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-4 block">
                    COMPARISON
                 </span>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                     Human vs. AI Receptionist
                 </h2>
                 <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                     See why switching to an AI receptionist is the smartest move for your business growth and efficiency.
                 </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                 
                 {/* Human Receptionist Card */}
                 <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 relative overflow-hidden group hover:border-slate-600 transition-colors"
                 >
                     <div className="absolute top-0 left-0 w-full h-1 bg-slate-600"></div>
                     <div className="flex items-center gap-4 mb-8">
                         <div className="p-4 bg-slate-700 rounded-2xl">
                             <User className="w-8 h-8 text-slate-400" />
                         </div>
                         <div>
                             <h3 className="text-2xl font-bold text-white">Human Receptionist</h3>
                             <p className="text-slate-400 text-sm">Traditional Approach</p>
                         </div>
                     </div>

                     <div className="space-y-6">
                         <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-xl border border-slate-700/50">
                             <Clock className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                             <div>
                                 <h4 className="font-bold text-slate-200">Limited Availability</h4>
                                 <p className="text-sm text-slate-400 mt-1">Only works 8-9 hours a day. Misses calls after hours, weekends, and holidays.</p>
                             </div>
                         </div>

                         <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-xl border border-slate-700/50">
                             <DollarSign className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                             <div>
                                 <h4 className="font-bold text-slate-200">High Cost</h4>
                                 <p className="text-sm text-slate-400 mt-1">Salary, benefits, insurance, and paid leaves cost thousands monthly.</p>
                             </div>
                         </div>

                         <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-xl border border-slate-700/50">
                             <Phone className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                             <div>
                                 <h4 className="font-bold text-slate-200">Single Tasking</h4>
                                 <p className="text-sm text-slate-400 mt-1">Can only handle one call at a time. Other customers get a busy signal.</p>
                             </div>
                         </div>

                         <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-xl border border-slate-700/50">
                             <Battery className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                             <div>
                                 <h4 className="font-bold text-slate-200">Inconsistent Energy</h4>
                                 <p className="text-sm text-slate-400 mt-1">Performance drops with fatigue. Mood can affect customer experience.</p>
                             </div>
                         </div>
                     </div>
                 </motion.div>

                 {/* AI Receptionist Card */}
                 <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-b from-brand-purple/20 to-slate-900 rounded-3xl p-8 border border-brand-purple/50 relative overflow-hidden shadow-2xl shadow-brand-purple/10 group"
                 >
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-blue-500"></div>
                     <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px] group-hover:bg-brand-purple/30 transition-colors"></div>
                     
                     <div className="flex items-center gap-4 mb-8 relative z-10">
                         <div className="p-4 bg-brand-purple rounded-2xl shadow-lg shadow-brand-purple/20">
                             <Bot className="w-8 h-8 text-white" />
                         </div>
                         <div>
                             <h3 className="text-2xl font-bold text-white">Voice AI Receptionist</h3>
                             <p className="text-brand-purple text-sm font-bold uppercase tracking-wider">Modern Solution</p>
                         </div>
                     </div>

                     <div className="space-y-6 relative z-10">
                         <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-xl border border-brand-purple/30 shadow-lg">
                             <Clock className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                             <div>
                                 <h4 className="font-bold text-white">24/7 Availability</h4>
                                 <p className="text-sm text-slate-300 mt-1">Never sleeps. Answers every call instantly, day or night, 365 days a year.</p>
                                 <div className="mt-2 w-full bg-slate-700 rounded-full h-1.5">
                                     <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                                 </div>
                                 <p className="text-xs text-green-400 mt-1 font-bold">100% Uptime</p>
                             </div>
                         </div>

                         <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-xl border border-brand-purple/30 shadow-lg">
                             <DollarSign className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                             <div>
                                 <h4 className="font-bold text-white">Cost Effective</h4>
                                 <p className="text-sm text-slate-300 mt-1">Fraction of the cost of a human employee. No benefits or overhead required.</p>
                                 <div className="mt-2 w-full bg-slate-700 rounded-full h-1.5">
                                     <div className="bg-green-500 h-1.5 rounded-full w-[85%]"></div>
                                 </div>
                                 <p className="text-xs text-green-400 mt-1 font-bold">~85% Savings</p>
                             </div>
                         </div>

                         <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-xl border border-brand-purple/30 shadow-lg">
                             <Zap className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                             <div>
                                 <h4 className="font-bold text-white">Infinite Scalability</h4>
                                 <p className="text-sm text-slate-300 mt-1">Handles unlimited concurrent calls simultaneously. Zero wait times.</p>
                                 <div className="mt-2 w-full bg-slate-700 rounded-full h-1.5">
                                     <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                                 </div>
                                 <p className="text-xs text-green-400 mt-1 font-bold">Unlimited Capacity</p>
                             </div>
                         </div>

                         <div className="flex items-start gap-4 p-4 bg-slate-800/80 rounded-xl border border-brand-purple/30 shadow-lg">
                             <Brain className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                             <div>
                                 <h4 className="font-bold text-white">Consistent & Smart</h4>
                                 <p className="text-sm text-slate-300 mt-1">Always polite, follows the perfect script, and integrates with your CRM instantly.</p>
                             </div>
                         </div>
                     </div>
                 </motion.div>
             </div>
        </div>
    </div>
  );
};

export default GlobalMap;