import React, { useState } from 'react';
import { Building2, Stethoscope, ShoppingBag, Scale, Utensils, ArrowRight, XCircle, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface IndustryData {
  id: string;
  name: string;
  icon: React.ReactNode;
  before: {
    title: string;
    points: string[];
  };
  after: {
    title: string;
    points: string[];
  };
}

const industries: IndustryData[] = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: <Building2 size={24} />,
    before: {
      title: 'The "Lead Decay" Trap',
      points: [
        'Leads go cold within 5 minutes if not answered instantly.',
        'Weekend & after-hours inquiries are lost to competitors.',
        'Top agents waste 40% of their time screening unqualified "tire kickers".',
        'Manual follow-ups are inconsistent and prone to human error.'
      ]
    },
    after: {
      title: '24/7 Instant Capture',
      points: [
        'Every lead is contacted within 10 seconds, day or night.',
        'AI pre-qualifies by budget, timeline, and credit score.',
        'Direct calendar integration books showings automatically.',
        'Agents only speak to serious, ready-to-buy prospects.'
      ]
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <Stethoscope size={24} />,
    before: {
      title: 'Front Desk Overload',
      points: [
        'Receptionists are overwhelmed by repetitive scheduling calls.',
        'Patients face long hold times and frustrating phone trees.',
        'High no-show rates due to lack of timely confirmation calls.',
        'Critical staff distracted from patient care to answer phones.'
      ]
    },
    after: {
      title: 'Seamless Patient Access',
      points: [
        'Zero hold times: AI handles unlimited simultaneous calls.',
        'HIPAA-compliant scheduling directly into your EHR.',
        'Automated reminders reduce no-shows by up to 80%.',
        'Staff can focus 100% on in-clinic patient experience.'
      ]
    }
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: <ShoppingBag size={24} />,
    before: {
      title: 'Support Scalability Wall',
      points: [
        'Support costs skyrocket during seasonal peaks and sales.',
        'Agents burn out answering "Where is my order?" 500 times a day.',
        'Missed upsell opportunities during support interactions.',
        'Slow response times lead to cart abandonment and bad reviews.'
      ]
    },
    after: {
      title: 'Profit-Driven Support',
      points: [
        'Instant order tracking and returns without human intervention.',
        'AI suggests personalized upsells based on purchase history.',
        'Scale from 100 to 10,000 calls instantly during Black Friday.',
        '24/7 support builds trust and increases lifetime value (LTV).'
      ]
    }
  },
  {
    id: 'legal',
    name: 'Legal Services',
    icon: <Scale size={24} />,
    before: {
      title: 'The Billable Hour Leak',
      points: [
        'Lawyers waste high-value time screening potential clients.',
        'Missed calls translate directly to thousands in lost revenue.',
        'Intake processes are slow, manual, and paper-heavy.',
        'Clients feel neglected when calls go to voicemail.'
      ]
    },
    after: {
      title: 'Automated Client Intake',
      points: [
        'AI conducts comprehensive legal intake interviews 24/7.',
        'Instant conflict checks and case qualification.',
        'Qualified leads are transferred directly or booked immediately.',
        'Lawyers focus solely on billable work and case strategy.'
      ]
    }
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: <Utensils size={24} />,
    before: {
      title: 'Peak Hour Chaos',
      points: [
        'Staff ignore the phone to serve in-person guests during rush.',
        'Lost reservations due to busy signals or unanswered calls.',
        'Inconsistent answers to simple questions (parking, allergies).',
        'Room service orders taken incorrectly due to noise/haste.'
      ]
    },
    after: {
      title: 'The Perfect Concierge',
      points: [
        'AI handles 100% of reservations and modifications instantly.',
        'Perfect knowledge of menu, amenities, and policies.',
        'Upsells room upgrades and special packages naturally.',
        'Staff remains calm and focused on guests in front of them.'
      ]
    }
  }
];

const Features: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryData>(industries[0]);

  return (
    <div id="solutions" className="py-24 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-pulse"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse delay-700"></div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-purple font-bold tracking-widest text-xs uppercase bg-purple-100 px-4 py-1.5 rounded-full">
            Industry Solutions
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            We Understand Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-blue-600">
              Specific Challenges
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Every industry has its own bottleneck. Our Voice AI is pre-trained to solve yours.
            Select your industry to see the transformation.
          </p>
        </motion.div>

        {/* Industry Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                selectedIndustry.id === industry.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-brand-purple hover:text-brand-purple'
              }`}
            >
              {industry.icon}
              {industry.name}
            </button>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* BEFORE Card (Red) */}
          <motion.div 
            key={`before-${selectedIndustry.id}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-10 border-l-8 border-red-500 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertCircle size={120} className="text-red-500" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="text-red-600" size={24} />
                </div>
                <span className="text-red-600 font-bold tracking-wider text-sm uppercase">Before Voice AI</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {selectedIndustry.before.title}
              </h3>
              
              <ul className="space-y-4">
                {selectedIndustry.before.points.map((point, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-red-400" />
                    <span className="leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AFTER Card (Green) */}
          <motion.div 
            key={`after-${selectedIndustry.id}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 rounded-3xl p-8 md:p-10 border-l-8 border-green-500 shadow-2xl relative overflow-hidden group hover:shadow-green-900/20 transition-shadow duration-300"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrendingUp size={120} className="text-green-500" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="text-green-400" size={24} />
                </div>
                <span className="text-green-400 font-bold tracking-wider text-sm uppercase">After Voice AI Solution</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {selectedIndustry.after.title}
              </h3>
              
              <ul className="space-y-4">
                {selectedIndustry.after.points.map((point, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" size={18} />
                    <span className="leading-relaxed font-medium">{point}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-2 text-green-400 font-bold text-sm uppercase tracking-widest">
                  <TrendingUp size={16} />
                  Positive Outcome
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Arrow Connector (Visual only, hidden on mobile) */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-slate-400">
          <ArrowRight size={24} />
        </div>

      </div>
    </div>
  );
};

export default Features;