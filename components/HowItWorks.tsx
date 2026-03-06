import React from 'react';
import { Search, Target, Monitor, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We learn about your business and figure out what kind of agent you need.',
      icon: <Search className="w-6 h-6 text-slate-700" />,
      iconBg: 'bg-slate-100',
    },
    {
      number: '02',
      title: 'Action Call',
      description: 'We plan from start to finish and provide insights for a high-impact voice agent.',
      icon: <Target className="w-6 h-6 text-red-500" />,
      iconBg: 'bg-red-50',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Your agent & automations get built and connected to your systems.',
      icon: <Monitor className="w-6 h-6 text-slate-700" />,
      iconBg: 'bg-slate-100',
    },
    {
      number: '04',
      title: 'Testing & Launch',
      description: 'Final testing, then your voice agent goes live and starts taking on calls.',
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      iconBg: 'bg-blue-50',
    }
  ];

  return (
    <div className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-pulse"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse delay-700"></div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-purple font-medium tracking-wide text-sm md:text-base">
            How It Works
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900">
            Getting Started Is Easy
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top Row: Number and Icon */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-6xl font-black text-slate-100 tracking-tighter select-none transition-colors group-hover:text-slate-200/80">
                  {step.number}
                </span>
                <div className={`p-3 rounded-2xl ${step.iconBg} transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-purple transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;