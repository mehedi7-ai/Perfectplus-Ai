import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Server, UserCheck, FileText, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Header Section */}
      <div className="bg-[#020617] text-white py-20 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-purple/10 rounded-full blur-[100px] opacity-30"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/10">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="mt-4 text-sm text-slate-500 font-mono uppercase tracking-widest">
              Effective Date: February 04, 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
        >
          <div className="p-8 md:p-12 space-y-12">
            
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="lead text-xl text-slate-700 font-medium">
                At Perfectplus Ai, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our Facebook Messenger Chatbot.
              </p>
            </div>

            {/* Section 1 */}
            <section className="relative pl-8 border-l-4 border-blue-500">
              <div className="absolute -left-[27px] top-0 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">1</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                Information We Collect
              </h2>
              <p className="text-slate-600 mb-4">
                When you use our chatbot, we may collect the following types of information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-2 text-slate-900 font-bold">
                    <UserCheck className="w-5 h-5 text-blue-500" />
                    Public Profile Information
                  </div>
                  <p className="text-sm text-slate-600">Your name, profile picture, and gender provided by the Facebook platform.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-2 text-slate-900 font-bold">
                    <FileText className="w-5 h-5 text-blue-500" />
                    Chat Logs
                  </div>
                  <p className="text-sm text-slate-600">The messages and queries you send to the bot to provide relevant responses.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 md:col-span-2">
                  <div className="flex items-center gap-3 mb-2 text-slate-900 font-bold">
                    <Server className="w-5 h-5 text-blue-500" />
                    Technical Data
                  </div>
                  <p className="text-sm text-slate-600">Basic interaction data provided by n8n or Facebook to ensure the bot functions correctly.</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="relative pl-8 border-l-4 border-brand-purple">
              <div className="absolute -left-[27px] top-0 bg-brand-purple text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">2</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                How We Use Your Information
              </h2>
              <p className="text-slate-600 mb-4">We use the collected information for:</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0"></div>
                  <span>Providing and improving our chatbot services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0"></div>
                  <span>Personalizing your experience with Perfectplus Ai.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0"></div>
                  <span>Responding to your inquiries and requests.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="relative pl-8 border-l-4 border-indigo-500">
              <div className="absolute -left-[27px] top-0 bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">3</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Data Sharing and Disclosure
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. Data may only be shared with service providers (like n8n) solely for the purpose of operating the chatbot.
              </p>
            </section>

            {/* Section 4 */}
            <section className="relative pl-8 border-l-4 border-green-500">
              <div className="absolute -left-[27px] top-0 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">4</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Data Retention and Deletion
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We keep your data only as long as necessary to provide our services. If you wish to have your data deleted, you can contact us at <span className="font-semibold text-slate-900">support@perfectplusai.com</span>, and we will process your request within a reasonable timeframe.
              </p>
            </section>

            {/* Section 5 */}
            <section className="relative pl-8 border-l-4 border-orange-500">
              <div className="absolute -left-[27px] top-0 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">5</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Security
              </h2>
              <div className="flex items-start gap-4 bg-orange-50 p-5 rounded-xl border border-orange-100">
                <Lock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700">
                  We implement standard security measures to protect your information from unauthorized access or disclosure.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="relative pl-8 border-l-4 border-teal-500">
              <div className="absolute -left-[27px] top-0 bg-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">6</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Changes to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be reflected with a new "Effective Date."
              </p>
            </section>

            {/* Contact Section */}
            <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h3>
              <p className="text-slate-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="mailto:support@perfectplusai.com" className="flex items-center gap-2 text-brand-purple font-bold hover:underline bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 hover:shadow-md transition-all">
                  <Mail size={18} />
                  support@perfectplusai.com
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
