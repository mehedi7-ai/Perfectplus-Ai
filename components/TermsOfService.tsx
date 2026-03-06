import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Scale, Lock, AlertTriangle, Ban, XCircle, RefreshCw } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Header Section */}
      <div className="bg-[#020617] text-white py-20 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-30"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/10">
              <FileText className="w-8 h-8 text-brand-purple" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Terms of Service</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By accessing or using Perfectplus Ai, you agree to be bound by these terms.
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
            
            {/* Section 1 */}
            <section className="relative pl-8 border-l-4 border-brand-purple">
              <div className="absolute -left-[27px] top-0 bg-brand-purple text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">1</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Use of Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Perfectplus Ai must only be used for lawful and ethical purposes. Misuse, fraudulent activity, or spreading harmful content through our platform is strictly prohibited.
              </p>
            </section>

            {/* Section 2 */}
            <section className="relative pl-8 border-l-4 border-blue-500">
              <div className="absolute -left-[27px] top-0 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">2</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                User Responsibilities
              </h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span>Users must provide accurate information and authorized access to their platforms (e.g., Facebook page, website).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span>Perfectplus Ai is not responsible for outdated or incorrect user data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span>Users are solely responsible for the security of their own systems and accounts.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="relative pl-8 border-l-4 border-indigo-500">
              <div className="absolute -left-[27px] top-0 bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">3</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                All AI tools, engines, logic, and templates remain the property of Perfectplus Ai. Any content or data provided by the user remains their sole property.
              </p>
            </section>

            {/* Section 4 */}
            <section className="relative pl-8 border-l-4 border-green-500">
              <div className="absolute -left-[27px] top-0 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">4</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Payment Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Users agree to pay service fees as per the agreed pricing plan. All payments are non-refundable unless stated otherwise in a specific agreement.
              </p>
            </section>

            {/* Section 5 */}
            <section className="relative pl-8 border-l-4 border-orange-500">
              <div className="absolute -left-[27px] top-0 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">5</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Perfectplus Ai shall not be liable for indirect, incidental, or consequential damages, including data loss or revenue loss. Our total liability shall not exceed the amount paid by the client within the last three (3) months.
              </p>
            </section>

            {/* Section 6 */}
            <section className="relative pl-8 border-l-4 border-red-500">
              <div className="absolute -left-[27px] top-0 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">6</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Prohibited Activities
              </h2>
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <p className="font-semibold text-red-800 mb-3">Users must not:</p>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start gap-3">
                    <Ban className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Reverse-engineer, hack, or tamper with the chatbot system.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Use the chatbot for spam, hate speech, misinformation, or unethical practices.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section className="relative pl-8 border-l-4 border-slate-500">
              <div className="absolute -left-[27px] top-0 bg-slate-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">7</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Termination
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Either party may terminate services with a written notice. Perfectplus Ai may suspend or terminate services immediately in case of misuse or breach of terms.
              </p>
            </section>

            {/* Section 8 */}
            <section className="relative pl-8 border-l-4 border-teal-500">
              <div className="absolute -left-[27px] top-0 bg-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">8</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                Amendments
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Perfectplus Ai reserves the right to amend these Terms & Conditions at any time. Updates will be published on our platform and effective immediately upon posting.
              </p>
            </section>

            {/* Contact Section */}
            <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Questions or Concerns?</h3>
              <p className="text-slate-600 mb-6">
                For questions or concerns regarding these Terms & Conditions, please contact us.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="mailto:support@perfectplusai.com" className="flex items-center gap-2 text-brand-purple font-bold hover:underline">
                  <span className="bg-brand-purple/10 p-2 rounded-lg"><Shield size={18} /></span>
                  support@perfectplusai.com
                </a>
                <a href="https://www.perfectplusai.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-purple font-bold hover:underline">
                  <span className="bg-brand-purple/10 p-2 rounded-lg"><FileText size={18} /></span>
                  www.perfectplusai.com
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
