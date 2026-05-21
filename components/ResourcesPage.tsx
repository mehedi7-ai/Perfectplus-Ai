import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, X, Calendar, ArrowRight } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
}

export const ResourcesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const guides: Guide[] = [
    {
      id: 'ecommerce-sales',
      title: 'How AI Chatbots Drive 3x E-commerce Sales in Bangladesh',
      category: 'E-commerce Growth',
      readTime: '6 min read',
      date: 'May 15, 2026',
      author: 'Perfectplus AI Team',
      summary: 'Learn how instant responses and personalized product recommendations can skyrocket your online sales and conversions.',
      content: [
         'বাংলাদেশি ই-কমার্স এবং এফ-কমার্স মার্কেটে কাস্টমারদের সবচেয়ে বড় চাওয়া হলো "Instant Response"। প্রোডাক্টের ছবি দেখে যখন কাস্টমার প্রাইস জানতে চায় বা অর্ডার করতে চায়, তখন ৫ মিনিটের বেশি দেরি হলে ৯০% ক্ষেত্রে তারা আগ্রহ হারিয়ে ফেলে অথবা অন্য কোনো পেজে চলে যায়। এখানেই AI Chatbot গেম-চেঞ্জার হিসেবে কাজ করে।',
         '১. ২৪/৭ ইনস্ট্যান্ট রিপ্লাই: AI Chatbot কাস্টমার মেসেজ দেওয়ার সাথে সাথেই সাইজ, কালার বা প্রাইস সংক্রান্ত সব ফ্রিল্যান্স প্রশ্নের উত্তর নিখুঁতভাবে দিয়ে দেয়। এতে কাস্টমার ড্রপ-আউট রেট প্রায় শূন্যে নেমে আসে।',
         '২. অটোমেটেড আপসেলিং ও ক্রসসেলিং: চ্যাটবট শুধুমাত্র প্রশ্নের উত্তরই দেয় না, বরং কাস্টমারের চয়েস অনুযায়ী রিলেটেড অন্যান্য প্রোডাক্ট চমৎকারভাবে সাজেস্ট করে। যেমন: একজন কাস্টমার পাঞ্জাবি পছন্দ করলে তাকে মানানসই কোটি বা জুতোও সাজেস্ট করে।',
         '৩. ইনস্ট্যান্ট অর্ডার প্লেসমেন্ট: কোনো পেজ এডমিনের সাহায্য ছাড়াই চ্যাটবট কাস্টমারের কাছ থেকে নাম, মোবাইল নাম্বার এবং ডেলিভারি এড্রেস নিয়ে চ্যাটবক্সের ভেতরেই সম্পূর্ণ অর্ডার কনফার্ম করে নিতে পারে।'
      ]
    },
    {
      id: 'whatsapp-automation',
      title: 'WhatsApp Automation: The Ultimate Guide for F-Commerce',
      category: 'F-Commerce Guide',
      readTime: '8 min read',
      date: 'May 12, 2026',
      author: 'Perfectplus AI Team',
      summary: 'Discover the secrets of leveraging WhatsApp Automation to retain customers and streamline F-commerce shipping notifications.',
      content: [
         'বাংলাদেশে ফেইসবুকের পাশাপাশি এখন হোয়াটসঅ্যাপ একটি অত্যন্ত জনপ্রিয় অর্ডারিং প্ল্যাটফর্ম। হোয়াটসঅ্যাপের সরাসরি কমিউনিকেশন কাস্টমারদের সাথে অন্যরকম একটি ট্রাস্ট বা বিশ্বাসযোগ্যতা তৈরি করে। কিন্তু ম্যানুয়ালি শত শত চ্যাটের রিপ্লাই দেওয়া অসম্ভব।',
         '১. ব্রডকাস্ট ক্যাম্পেইন: কোনো ঝুটঝামেলা ছাড়াই আপনার এক্সিস্টিং হাজার হাজার কাস্টমারদের কাছে এক ক্লিকেই নতুন প্রডাক্টের অফার, ডিসকাউন্ট বা ঈদের মেসেজ পৌঁছে দিতে পারেন হোয়াটসঅ্যাপ অটোমেশনের মাধ্যমে।',
         '২. অটোমেটিক অর্ডার অ্যান্ড ট্র্যাকিং: অর্ডার করা মাত্রই কাস্টমার হোয়াটসঅ্যাপ লাইভ আপডেট পেয়ে যান। কুরিয়ার বুকিং সম্পন্ন হলে ট্র্যাকিং নাম্বার সহ মেসেজ চলে যায় যা কাস্টমারের অভিজ্ঞতা বহু গুনে বাড়িয়ে দেয়।',
         '৩. কাস্টমার রিটেনশন: হোয়াটসঅ্যাপের ওয়ান-টু-ওয়ান মেসেজিংয়ের কারণে কাস্টমাররা আগের চেয়ে বেশি রেসপন্স করে এবং পেজের লাইফ-টাইম রেভিনিউ বৃদ্ধিতে মূল ভূমিকা রাখে।'
      ]
    },
    {
      id: 'courier-integration',
      title: 'Integrating Messenger Chatbots with Courier Services (Steadfast, Pathao)',
      category: 'Operations',
      readTime: '5 min read',
      date: 'May 10, 2026',
      author: 'Perfectplus AI Team',
      summary: 'How to completely eliminate manual copy-paste errors by linking your Facebook inbox with courier partner API portals.',
      content: [
         'একটি এফ-কমার্স বিজнеসে প্রতিদিনের সবচেয়ে বিরক্তিকর ও সময়সাপেক্ষ কাজ হলো ইনবক্স থেকে এড্রেস, ফোন নাম্বার কপি করে Steadfast বা Pathao পোর্টালে ম্যানুয়ালি পেস্ট করে পার্সেল এন্ট্রি করা। এতে কাজ স্লথ হয় এবং অনেক ভুলত্রুটি হয়।',
         '১. ওয়ান-ক্লিক এন্ট্রি: AI Chatbot কাস্টমারের কাছ থেকে সঠিক ফরম্যাটে নাম, ফোন নাম্বার এবং ফুল এড্রেস ভেরিফাই করে নিয়ে নেয়। এটি সরাসরি বাটন ক্লিকের সাহায্যে আপনার কুরিয়ার পোর্টালে পার্সেল হিসেবে ক্রিয়েট হয়ে যায়।',
         '২. ডেলিভারি রেট বৃদ্ধি: কাস্টমার নিজে ইনবক্সে এড্রেস টাইপ করে কনফার্ম করার কারণে ডেলিভারি ডাটাতে নামের বা নম্বরের ভুল থাকে না বললেই চলে, যার ফলে পার্সেল রিটার্ন রেট নাটকীয়ভাবে কমে যায়।',
         '৩. সময় এবং খরচ সাশ্রয়: যেখানে আগে প্রতিদিন পার্সেল বুকিং করতেই কয়েক ঘণ্টা সময় নষ্ট হতো,システムটি অটোমেটেড হওয়ায় ম্যানপাওয়ার এবং মূল্যবান সময় দুটোই সাশ্রয় হয় যা আপনি মার্কেটিংয়ের কাজে ব্যবহার করতে পারেন।'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Background Gradients/Grids */}
      <div className="absolute inset-0 bg-[#0a0a1a] z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7c3aed]/10 blur-[125px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#db2777]/10 blur-[125px] rounded-full z-0" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Back Button */}
        <div className="text-left">
          <button
            onClick={() => navigate('/bd')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs md:text-sm font-bold">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>Learning & Growth Hub</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-purple-400">
             AI Resources Hub
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            আপনার ফেসবুক পেজ এবং বিজনেস অপারেশন্সকে AI-র অফুরন্ত শক্তির সাথে কানেক্ট করতে আমাদের তথ্যবহুল গাইড এবং টিপসগুলো পড়ুন।
          </p>
        </div>

        {/* Guides Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {guides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => setSelectedGuide(guide)}
              className="bg-[#111126]/40 border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all duration-300 group cursor-pointer flex flex-col justify-between text-left h-full"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 font-bold border border-purple-500/15">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {guide.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
                  {guide.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {guide.summary}
                </p>
              </div>

              {/* Action */}
              <div className="flex items-center gap-1.5 text-purple-400 font-bold text-xs mt-6 self-start group-hover:text-purple-300 transition-colors">
                <span>বিস্তারিত পড়ুন</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guide details Popup Modal */}
      <AnimatePresence>
        {selectedGuide && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100001]"
              onClick={() => setSelectedGuide(null)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-[#0a0a1a] border border-purple-500/30 rounded-3xl shadow-[0_0_50px_rgba(124,58,237,0.3)] z-[100002] flex flex-col max-h-[85vh] font-sans overflow-hidden"
            >
              {/* Close pin */}
              <button
                onClick={() => setSelectedGuide(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto px-6 py-8 md:p-8 space-y-6 text-left">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 pt-2 border-b border-white/5 pb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 font-bold border border-purple-500/15">
                    {selectedGuide.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedGuide.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedGuide.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-400 leading-snug">
                  {selectedGuide.title}
                </h2>

                {/* Content */}
                <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  {selectedGuide.content.map((para, idx) => (
                    <p key={idx} className="whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Call to action */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-slate-400 text-xs text-center sm:text-left">Perfectplus AI এর সাথে আপনার স্বপ্নময় বিজনেসকে বড় করুন!</span>
                  <button
                    onClick={() => {
                      setSelectedGuide(null);
                      navigate('/bd');
                      setTimeout(() => {
                         document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                      }, 400);
                    }}
                    className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-extrabold rounded-xl transition-all shadow-md shadow-purple-900/10 cursor-pointer"
                  >
                     অর্ডার শুরু করুন →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResourcesPage;
