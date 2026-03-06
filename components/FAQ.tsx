import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Will my customers know they're speaking with an AI?",
      answer: "That's entirely your choice. Our Voice Agents can identify themselves as AI assistants or simply introduce themselves as part of your team—whatever best fits your brand and customer communication style."
    },
    {
      question: "How quickly can you deploy an AI Voice Agent for my business?",
      answer: "We deliver fully functional Voice Agents in 3-5 weeks, not months. Each agent is built from the ground up using your industry-specific knowledge and customized to sound authentically like your business."
    },
    {
      question: "Won't customers prefer speaking to a human?",
      answer: "For routine inquiries—which make up roughly 80% of customer interactions—most customers prioritize speed, convenience, and availability over speaking to a person. They want instant answers and 24/7 accessibility that human teams simply can't provide. Think of it like the shift from record stores to Spotify: once customers experienced greater accessibility, there was no going back."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing varies based on your agent's complexity and scope. We don't sell templates—every Voice Agent is custom-built for your specific business needs. Our goal is to ensure your investment pays for itself. Book a free consultation to receive a personalized quote."
    },
    {
      question: "What if the AI promises something we don't offer?",
      answer: "Our Voice Agents are programmed with strict guardrails to stay within their defined scope. If they encounter a request they can't handle, they'll either politely decline or, if you prefer, seamlessly transfer the call to your team."
    },
    {
      question: "Can the agent transfer to a human if needed?",
      answer: "Absolutely. We can configure your agent to recognize when human intervention is needed and transfer calls accordingly."
    }
  ];

  return (
    <div id="faq" className="py-24 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-purple font-medium tracking-wide text-sm md:text-base">
            Got Questions?
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'shadow-lg border-2 border-slate-900' 
                    : 'shadow-sm border border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-brand-purple" strokeWidth={2.5} />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 font-medium leading-relaxed">
                        <div className="border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FAQ;