import React from 'react';
import { PhoneMissed, Banknote, ClockAlert } from 'lucide-react';
import { motion } from 'motion/react';

interface PainPointCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const PainPointCard: React.FC<PainPointCardProps> = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay * 0.001 }}
    className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
  >
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const PainPoints: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-brand-purple font-semibold tracking-wide uppercase text-sm">
            Why Business Owners Switch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Scale Your Operations,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              Not Your Payroll.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PainPointCard 
            delay={100}
            icon={
              <div className="w-full h-full bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center text-white">
                <PhoneMissed size={28} />
              </div>
            }
            title="The Silent Revenue Killer"
            description="72% of callers hang up if sent to voicemail. Every missed call is a direct donation to your competitor's bank account. Stop bleeding potential revenue."
          />
          
          <PainPointCard 
            delay={300}
            icon={
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-white">
                <ClockAlert size={28} />
              </div>
            }
            title="The Speed-to-Lead Trap"
            description="Leads go cold in 5 minutes. If you aren't answering instantly 24/7, you're burning ad spend. Humans sleep; your AI agent converts while you rest."
          />

          <PainPointCard 
            delay={500}
            icon={
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white">
                <Banknote size={28} />
              </div>
            }
            title="Payroll Pitfall"
            description="Paying staff to answer 'Are you open?' is a waste of capital. Reclaim thousands in monthly wages by automating routine tasks and bookings."
          />
        </div>
      </div>
    </div>
  );
};

export default PainPoints;