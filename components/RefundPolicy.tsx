import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw, CheckCircle2, XCircle, MessageSquare, Mail, AlertCircle } from 'lucide-react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Header Section */}
      <div className="bg-[#020617] text-white py-20 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] opacity-50"></div>
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
              <RotateCcw className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Refund Policy</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              আমাদের রিফান্ড পলিসি এবং আপনাদের সহযোগিতা নিশ্চিত করার নিয়মাবলী।
            </p>
            <p className="mt-4 text-sm text-slate-500 font-mono uppercase tracking-widest">
              Last Updated: May 22, 2026
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
              <p className="lead text-lg md:text-xl text-slate-700 font-medium">
                Perfectplus AI-তে আমাদের প্রতিটি গ্রাহকের সন্তুষ্টি অত্যন্ত গুরুত্বপূর্ণ। আমাদের সেবা ব্যবহারের ক্ষেত্রে রিফান্ড সংক্রান্ত যাবতীয় নিয়মাবলী নিচে বিস্তারিত প্রদান করা হলো:
              </p>
            </div>

            {/* Section 1 - রিফান্ডের যোগ্যতা */}
            <section className="relative pl-8 border-l-4 border-emerald-500">
              <div className="absolute -left-[27px] top-0 bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">১</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                রিফান্ডের যোগ্যতা
              </h2>
              <p className="text-slate-600 mb-6">
                নিম্নোক্ত শর্তসমূহ পূরণ সাপেক্ষে আপনি রিফান্ডের জন্য আবেদন করতে পারবেন:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">সময়সীমা</h3>
                    <p className="text-sm text-slate-600">সার্ভিস শুরু হওয়ার প্রথম ৭ দিনের মধ্যে রিফান্ডের আবেদন সম্পন্ন করতে হবে।</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">টেকনিক্যাল জটিলতা</h3>
                    <p className="text-sm text-slate-600">চ্যাটবট বা সিস্টেম প্রোপারলি কনফিগার (properly configure) করার পরেও যদি সেটি তার নির্দিষ্ট কার্যসম্পাদনে ব্যর্থ হয় এবং ঠিকমতো কাজ না করে।</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">সাপোর্ট রিকোয়েস্ট</h3>
                    <p className="text-sm text-slate-600">রিপোর্টেড টেকনিক্যাল কোনো সমস্যা জানানোর পরেও যদি আমাদের টিম সেটি ৪৮ ঘণ্টার মধ্যে সমাধান (fix) করে দিতে না পারে।</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 - যেক্ষেত্রে Refund প্রযোজ্য নয় */}
            <section className="relative pl-8 border-l-4 border-rose-500">
              <div className="absolute -left-[27px] top-0 bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">২</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                যেক্ষেত্রে রিফান্ড প্রযোজ্য নয়
              </h2>
              <p className="text-slate-600 mb-6">
                নিম্নোক্ত ক্ষেত্রসমূহে কোনো রিফান্ড বা ক্যাশব্যাক নীতি কার্যকর হবে না:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100/50 flex gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">সময়সীমা অতিবাহিত</h4>
                    <p className="text-xs text-slate-600">সার্ভিস অ্যাক্টিভেশনের পর ৭ দিন সময় অতিক্রম হয়ে গেলে।</p>
                  </div>
                </div>
                <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100/50 flex gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">সিস্টেম পরিবর্তন</h4>
                    <p className="text-xs text-slate-600">ক্লায়েন্ট নিজে বা তার কোনো টিম মেম্বার সিস্টেমের মূল কনফিগারেশনে পরিবর্তন বা অননুমোদিত মডিফিকেশন করলে।</p>
                  </div>
                </div>
                <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100/50 flex gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">অসম্পূর্ণ তথ্য প্রদান</h4>
                    <p className="text-xs text-slate-600">প্রোডাক্ট/সার্ভিস বা ব্যবসার সঠিক ডেটা/ইনফরমেশন সঠিকভাবে প্রদান না করার কারণে চ্যাটবট রেসপন্স বা ফাংশনে সমস্যা হলে।</p>
                  </div>
                </div>
                <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100/50 flex gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">কাস্টম সলিউশন প্রজেক্ট</h4>
                    <p className="text-xs text-slate-600">যেকোনো প্রকারের কাস্টম সলিউশন (Custom Solution) প্রজেক্ট বা ডেডিকেটেড ডেভেলপমেন্ট টাস্কের ক্ষেত্রে।</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 - Refund Process */}
            <section className="relative pl-8 border-l-4 border-indigo-500">
              <div className="absolute -left-[27px] top-0 bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">৩</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                রিফান্ড প্রক্রিয়া (Refund Process)
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-indigo-500/10 text-indigo-600 p-2 rounded-xl mt-0.5">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">WhatsApp এ রিকোয়েস্ট পাঠান</p>
                      <p className="text-sm text-slate-600 mt-0.5">
                        রিফান্ডের যোগ্যতা অনুযায়ী আবেদন করতে সরাসরি আমাদের অফিশিয়াল WhatsApp নাম্বারে বিস্তারিত মেসেজ করুন: 
                        <a href="https://wa.me/8801887633339" target="_blank" rel="noopener noreferrer" className="ml-1 text-indigo-600 font-bold hover:underline">
                          01887633339
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-indigo-500/10 text-indigo-600 p-2 rounded-xl mt-0.5">
                      <AlertCircle size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">ফেরত পাওয়ার মাধ্যম ও সময়সীমা</p>
                      <p className="text-sm text-slate-600 mt-0.5">আবেদনটি যাচাই-বাছাইপূর্বক অনুমোদিত হওয়ার পর ৩-৫ কার্যদিবসের মধ্যে আপনার নিজস্ব bKash/নগদ একাউন্টে টাকা ফেরত দেওয়া হবে।</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact Support */}
            <div className="mt-16 bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">সহযোগিতার প্রয়োজন?</h3>
              <p className="text-slate-600 mb-6 font-medium">
                রিফান্ড পলিসি বা অন্য যেকোনো প্রশ্ন থাকলে আমাদের সাপোর্ট টিমের সাথে সরাসরি যোগাযোগ করুন।
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://wa.me/8801887633339" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 rounded-full shadow-md transition-all w-full sm:w-auto justify-center"
                >
                  <MessageSquare size={18} />
                  WhatsApp Support
                </a>
                <a 
                  href="mailto:support@perfectplusai.com" 
                  className="flex items-center gap-2 text-slate-700 bg-white hover:bg-slate-50 font-bold px-6 py-3 rounded-full shadow-sm border border-slate-200 transition-all w-full sm:w-auto justify-center"
                >
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

export default RefundPolicy;
