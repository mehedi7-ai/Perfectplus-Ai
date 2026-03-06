import React, { useState, useEffect } from 'react';
import { Star, Building2, Briefcase, GraduationCap, Stethoscope, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    quote: "The AI agent didn't just answer calls, it stopped us from bleeding revenue. We slashed our reception costs by 85% and stopped losing leads to voicemail forever.",
    author: "James Calzoni",
    role: "Director of Operations, Apex Dental"
  },
  {
    quote: "We used to miss 30% of calls during lunch hours. Now, every single patient gets booked instantly. It's like having a receptionist who never sleeps.",
    author: "Sarah Jenkins",
    role: "Practice Manager, City Health Clinic"
  },
  {
    quote: "Our real estate leads are contacted within 10 seconds. The conversion rate has doubled since we implemented Perfectplus AI.",
    author: "Michael Ross",
    role: "Senior Broker, Ross Realty Group"
  },
  {
    quote: "The multi-language support is a game changer. We serve clients globally without needing a 24-hour support team.",
    author: "Elena Rodriguez",
    role: "CEO, Global Logistics Co."
  }
];

const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds for better readability

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-50 py-16 border-y border-gray-100 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 text-center mb-10"
      >
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
      </motion.div>

      {/* Marquee Container - Text Ticker */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden mb-16 bg-slate-900 py-4"
      >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
          
          <div className="flex animate-marquee whitespace-nowrap">
             {/* Repeat text to ensure smooth loop */}
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center text-xl md:text-2xl font-bold text-white tracking-wide shrink-0">
                   <span className="text-red-400 mx-8">Did you lose a client because you weren't fast enough?</span>
                   <span className="mx-8">Research shows <span className="text-yellow-400">78% of customers</span> buy from the business that responds first.</span>
                   <a 
                     href="https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-green-400 uppercase mx-8 hover:text-green-300 transition-colors underline decoration-2 underline-offset-4"
                   >
                     Book A FREE Call Today To Fix Your Problem
                   </a>
                </div>
             ))}
          </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center space-y-6 min-h-[300px] justify-center transition-all duration-500">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={24} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <div className="relative w-full overflow-hidden">
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed font-serif">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    
                    <div className="flex flex-col items-center mt-6">
                      <cite className="not-italic font-bold text-slate-900 text-lg">{testimonials[currentIndex].author}</cite>
                      <span className="text-sm text-slate-500 font-medium">{testimonials[currentIndex].role}</span>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-2 mt-4">
            {testimonials.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-slate-900 w-6' : 'bg-slate-300'}`}
                />
            ))}
        </div>
      </div>

      {/* Style for animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SocialProof;