import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

interface OrderFormModalProps {
  showOrderModal: boolean;
  setShowOrderModal: (val: boolean) => void;
  selectedPlan: 'Starter' | 'Growth' | 'Pro' | null;
  orderForm: {
    businessName: string;
    platforms: string[];
    dailyCustomers: string;
    bkashNumber: string;
  };
  setOrderForm: React.Dispatch<React.SetStateAction<{
    businessName: string;
    platforms: string[];
    dailyCustomers: string;
    bkashNumber: string;
  }>>;
  orderErrors: { [key: string]: string };
  setOrderErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  orderStep: number;
  setOrderStep: React.Dispatch<React.SetStateAction<number>>;
  copied: boolean;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
  toBengaliNumber: (numStr: string) => string;
  getPlanPrice: () => number;
}

export const OrderFormModal: React.FC<OrderFormModalProps> = ({
  showOrderModal,
  setShowOrderModal,
  selectedPlan,
  orderForm,
  setOrderForm,
  orderErrors,
  setOrderErrors,
  orderStep,
  setOrderStep,
  copied,
  setCopied,
  toBengaliNumber,
  getPlanPrice
}) => {
  const [amountCopied, setAmountCopied] = React.useState(false);
  const bp = getPlanPrice();
  const platCount = orderForm.platforms.length;
  const calcCount = Math.max(1, platCount);
  const origTot = bp * calcCount;
  
  let discPct = 0;
  if (platCount === 2) {
    discPct = 20;
  } else if (platCount >= 3) {
    discPct = 30;
  }
  const discTot = Math.round(origTot * (1 - discPct / 100));

  const handleNextStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};
    if (!orderForm.businessName.trim()) {
      errors.businessName = 'আপনার Business বা Facebook Page এর নাম দিতে হবে';
    }
    if (orderForm.platforms.length === 0) {
      errors.platforms = 'কমপক্ষে একটি Platform সিলেক্ট করুন';
    }
    if (!orderForm.dailyCustomers) {
      errors.dailyCustomers = 'আনুমানিক Customer সংখ্যা সিলেক্ট করুন';
    }
    if (!orderForm.bkashNumber.trim()) {
      errors.bkashNumber = 'বিকাশ/নগদ নম্বর দিতে হবে';
    } else if (!/^(01)[3-9]\d{8}$/.test(orderForm.bkashNumber.trim())) {
      errors.bkashNumber = '১১ ডিজিটের সঠিক মোবাইল নম্বর দিন (যেমন: 018XXXXXXXX)';
    }

    if (Object.keys(errors).length > 0) {
      setOrderErrors(errors);
      return;
    }

    setOrderErrors({});

    // Send to webhook in background
    fetch("https://n8n.srv1462469.hstgr.cloud/webhook/pricing-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        plan: selectedPlan,
        amount: discTot.toString(),
        businessName: orderForm.businessName,
        platforms: orderForm.platforms.join(', '),
        dailyCustomers: orderForm.dailyCustomers,
        bkashNumber: orderForm.bkashNumber
      })
    }).catch(err => {
      console.error("Webhook submit failed in background:", err);
    });

    setOrderStep(2);
  };

  return (
    <AnimatePresence>
      {showOrderModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-0 md:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[10001]"
            onClick={() => setShowOrderModal(false)}
          />
          
          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full h-full md:h-auto md:max-w-2xl bg-[#0a0a1a] border-0 md:border-2 border-purple-500/40 md:rounded-3xl shadow-[0_0_50px_rgba(124,58,237,0.45)] z-[10002] flex flex-col font-sans overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowOrderModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-[10005]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-8 md:p-8 space-y-6">
              {orderStep === 1 ? (
                <div className="space-y-6">
                  {/* Banner Header */}
                  <div className="space-y-2 mt-4 text-left">
                    <h3 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 leading-snug">
                       🎁 ঈদ Special — Setup Fee সম্পূর্ণ FREE!
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm font-medium">
                       নিচের তথ্যগুলো দিন — ৩-৫ কার্যদিবসে আপনার AI Chatbot Live হয়ে যাবে
                    </p>
                  </div>

                  {/* Pre-selected plan info */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">নির্বাচিত প্ল্যান:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${
                      selectedPlan === 'Starter' 
                        ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' 
                        : selectedPlan === 'Growth'
                           ? 'bg-purple-500/15 text-purple-400 border-purple-500/30'
                           : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                    }`}>
                      {platCount <= 1 ? (
                        <span>✅ {selectedPlan} — ৳{toBengaliNumber(discTot.toLocaleString('en-US'))}/মাস</span>
                      ) : (
                        <span className="flex items-center gap-1 flex-wrap">
                          <span>✅ {selectedPlan} × {toBengaliNumber(platCount.toString())} — </span>
                          <span className="line-through text-slate-400/70">৳{toBengaliNumber(origTot.toLocaleString('en-US'))}</span>
                          <span>→ ৳{toBengaliNumber(discTot.toLocaleString('en-US'))}/মাস ({toBengaliNumber(discPct.toString())}% ছাড়)</span>
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Form fields */}
                  <form onSubmit={handleNextStepSubmit} className="space-y-4 text-left">
                    {/* Business Name Field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs md:text-sm font-semibold text-slate-200">
                        Business/Page Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        value={orderForm.businessName}
                        onChange={(e) => setOrderForm({...orderForm, businessName: e.target.value})}
                        placeholder="আপনার Business বা Facebook Page এর নাম"
                        className={`w-full px-4 py-2.5 bg-[#0d0d22] text-white rounded-xl border ${orderErrors.businessName ? 'border-red-500 focus:border-red-500' : 'border-purple-500/25 focus:border-purple-500'} focus:outline-none transition-colors text-xs md:text-sm`}
                      />
                      {orderErrors.businessName && (
                        <p className="text-red-500 text-xs font-semibold">{orderErrors.businessName}</p>
                      )}
                    </div>

                    {/* Checkbox Platform Fields */}
                    <div className="space-y-3">
                      <div className="flex flex-col gap-1">
                        <label className="block text-xs md:text-sm font-semibold text-[#f1f5f9]">
                          Platform (multiple references allowed, select checkbox) <span className="text-red-500">*</span>
                        </label>
                        <p className="text-[11px] font-bold text-[#7c3aed]">
                          🎁 ২টা Chatbot একসাথে নিলে ২০% | ৩টা নিলে ৩০% discount পাচ্ছেন!
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-1">
                        {[
                          { 
                            id: 'messenger', 
                            label: 'Messenger',
                            icon: (
                              <svg className="w-5 h-5 text-[#0084FF] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.5 2 2 6.14 2 11.25c0 2.91 1.45 5.51 3.71 7.14.19.14.31.36.31.6l.02 1.87c.01.59.62.99 1.14.73l2.09-1.05c.17-.09.38-.1.56-.05 1.12.33 2.31.51 3.55.51 5.5 0 10-4.14 10-9.25S17.5 2 12 2zm1.09 11.83l-2.09-2.23-4.07 2.23 4.48-4.75 2.14 2.23 4.02-2.23-4.48 4.75z"/>
                              </svg>
                            )
                          },
                          { 
                            id: 'whatsapp', 
                            label: 'WhatsApp',
                            icon: (
                              <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.004 2C6.48 2 2.001 6.477 2.001 12c0 1.892.527 3.66 1.446 5.17L2 22l5.003-1.314c1.456.794 3.12 1.25 4.887 1.25 5.518 0 9.99-4.48 9.99-10S17.525 2 12.004 2zm5.408 14.125c-.295-.148-1.748-.862-2.019-.96-.27-.099-.468-.148-.665.148-.197.296-.763.961-.935 1.159-.172.196-.345.22-.64.073-.295-.148-1.25-.46-2.378-1.465-.877-.783-1.47-1.75-1.642-2.046-.172-.296-.018-.455.13-.602.132-.132.295-.345.442-.518.148-.172.197-.296.296-.494.098-.197.049-.37-.024-.518-.074-.148-.665-1.602-.91-2.193-.242-.574-.483-.496-.664-.505-.173-.009-.37-.01-.568-.01-.197 0-.518.074-.789.37-.27.296-1.034 1.01-1.034 2.463 0 1.453 1.057 2.858 1.205 3.055.147.197 2.08 3.18 5.038 4.458.707.304 1.257.485 1.685.621.712.227 1.36.195 1.869.119.569-.085 1.748-.716 1.996-1.405.247-.689.247-1.28.172-1.405-.074-.124-.271-.197-.568-.344z"/>
                              </svg>
                            )
                          },
                          { 
                            id: 'instagram', 
                            label: 'Instagram',
                            icon: (
                              <svg className="w-5 h-5 text-pink-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            )
                          },
                          { 
                            id: 'telegram', 
                            label: 'Telegram',
                            icon: (
                              <svg className="w-5 h-5 text-[#2AABEE] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.41 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.58.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.07-.06-.18-.04-.26-.02-.11.02-1.89 1.2-5.34 3.53-.51.35-.97.52-1.37.51-.44-.01-1.29-.25-1.92-.45-.77-.25-.98-.39-.93-.82.03-.23.35-.46.97-.7.24-.1.71-.24 1.43-.51 4.39-1.91 7.33-3.17 8.8-3.79 4.2-1.74 5.07-2.04 5.64-2.05.13 0 .41.03.59.18.15.12.19.29.21.41-.02.08-.02.2-.02.26z"/>
                              </svg>
                            )
                          }
                        ].map((p) => {
                          const isChecked = orderForm.platforms.some(item => 
                            (p.label === 'Messenger' && (item === 'Messenger' || item === 'Facebook Messenger')) || 
                            (p.label === 'WhatsApp' && (item === 'WhatsApp' || item === 'WhatsApp Web Automation')) || 
                            (p.label === 'Instagram' && (item === 'Instagram' || item === 'Instagram Inbox')) || 
                            (p.label === 'Telegram' && (item === 'Telegram' || item === 'Telegram Chatbot')) || 
                            (item === p.label)
                          );
                          
                          const handleToggle = () => {
                            let updated = [...orderForm.platforms];
                            if (isChecked) {
                              updated = updated.filter(item => {
                                if (p.label === 'Messenger' && (item === 'Messenger' || item === 'Facebook Messenger')) return false;
                                if (p.label === 'WhatsApp' && (item === 'WhatsApp' || item === 'WhatsApp Web Automation')) return false;
                                if (p.label === 'Instagram' && (item === 'Instagram' || item === 'Instagram Inbox')) return false;
                                if (p.label === 'Telegram' && (item === 'Telegram' || item === 'Telegram Chatbot')) return false;
                                return item !== p.label;
                              });
                            } else {
                              updated.push(p.label);
                            }
                            setOrderForm({...orderForm, platforms: updated});
                          };

                          return (
                            <div 
                              key={p.id} 
                              onClick={handleToggle}
                              className={`p-3 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer select-none ${
                                isChecked 
                                  ? 'bg-[#121235] border-purple-500 shadow-[0_0_15px_rgba(124,58,237,0.2)]' 
                                  : 'bg-[#0d0d22] border-white/5 hover:border-purple-500/20'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                {p.icon}
                                <span className={`text-xs md:text-sm font-semibold ${isChecked ? 'text-white' : 'text-slate-400'}`}>
                                  {p.label}
                                </span>
                              </div>
                              <input 
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  handleToggle();
                                }}
                                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-white/10 bg-slate-900 cursor-pointer"
                              />
                            </div>
                          );
                        })}
                      </div>
                      {orderErrors.platforms && (
                        <p className="text-red-500 text-xs font-semibold mt-1">{orderErrors.platforms}</p>
                      )}
                    </div>

                    {/* Daily Customers Selection */}
                    <div className="space-y-1.5">
                      <label className="block text-xs md:text-sm font-semibold text-slate-200">
                        দৈনিক আনুমানিক কতজন Customer মেসেজ দেয়? <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select 
                          value={orderForm.dailyCustomers}
                          onChange={(e) => setOrderForm({...orderForm, dailyCustomers: e.target.value})}
                          className={`w-full px-4 py-2.5 bg-[#0d0d22] text-white rounded-xl border ${orderErrors.dailyCustomers ? 'border-red-500' : 'border-purple-500/25'} focus:outline-none focus:border-purple-500 transition-colors text-xs md:text-sm appearance-none cursor-pointer`}
                        >
                          <option value="">বাছাই করুন...</option>
                          <option value="10-30">১০ - ৩০ জন</option>
                          <option value="30-50">৩০ - ৫০ জন</option>
                          <option value="50-100">৫০ - ১০০ জন</option>
                          <option value="100-200">১০০ - ২০০ জন</option>
                          <option value="200+">২০০+ জন</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      {orderErrors.dailyCustomers && (
                        <p className="text-red-500 text-xs font-semibold">{orderErrors.dailyCustomers}</p>
                      )}
                    </div>

                    {/* bKash Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs md:text-sm font-semibold text-slate-200">
                        আপনার বিকাশ/নগদ নম্বর (যেখান থেকে পেমেন্ট করবেন) <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        value={orderForm.bkashNumber}
                        onChange={(e) => setOrderForm({...orderForm, bkashNumber: e.target.value})}
                        placeholder="01XXXXXXXXX"
                        className={`w-full px-4 py-2.5 bg-[#0d0d22] text-white rounded-xl border ${orderErrors.bkashNumber ? 'border-red-500 focus:border-red-500' : 'border-purple-500/25 focus:border-purple-500'} focus:outline-none transition-colors text-xs md:text-sm`}
                      />
                      {orderErrors.bkashNumber && (
                        <p className="text-red-500 text-xs font-semibold">{orderErrors.bkashNumber}</p>
                      )}
                    </div>

                    {/* Proceed step button */}
                    <button
                      type="submit"
                      className="w-full py-3 md:py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl transition-all duration-300 shadow-xl shadow-purple-900/15 transform hover:-translate-y-0.5 mt-2 text-xs md:text-sm cursor-pointer"
                    >
                      <span>পরবর্তী ধাপে যান →</span>
                    </button>
                  </form>
                </div>
              ) : (
                /* Step 2: Payment Details with dynamic discounted prices */
                <div className="space-y-5">
                  <div className="space-y-2 mt-4 text-left">
                    <h3 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                      পেমেন্ট বিবরণী 💳
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm font-medium">
                      নিচের Personal নম্বরে পেমেন্ট (Send Money) সম্পন্ন করুন
                    </p>
                  </div>

                  {/* Submission success notification bar */}
                  <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-400 text-left">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold text-base flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs md:text-sm">নিবন্ধন সফল হয়েছে!</h4>
                      <p className="text-[11px] text-slate-300">তথ্য পাওয়া গেছে। পেমেন্ট সম্পন্ন হলে AI Chatbot সেটআপ শুরু হবে।</p>
                    </div>
                  </div>

                  {/* Payment Details Container */}
                  <div className="space-y-3.5">
                    <h3 className="text-xs md:text-sm font-bold text-white text-left uppercase tracking-wider text-slate-400">
                      পেমেন্ট প্রসেস 👇
                    </h3>

                    <div className="bg-[#111126] border border-purple-500/20 rounded-2xl p-5 md:p-6 relative overflow-hidden space-y-4 shadow-xl text-left">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs md:text-sm font-bold text-slate-400">মোট পরিমাণ (Send Money):</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            ৳{toBengaliNumber(discTot.toLocaleString('en-US'))}
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(discTot.toString());
                              setAmountCopied(true);
                              setTimeout(() => setAmountCopied(false), 1500);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center gap-1 ${amountCopied ? 'bg-emerald-600 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white cursor-pointer'}`}
                          >
                            {amountCopied ? 'Copied! ✓' : 'Copy Amount'}
                          </button>
                        </div>
                      </div>

                      {/* bKash card structure */}
                      <div className="p-3.5 bg-slate-950/70 border border-purple-500/10 rounded-xl space-y-3 relative">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                            💳 bKash / Nagad Send Money
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold px-2 py-0.5 bg-purple-500/10 rounded-full border border-purple-500/20">
                            Personal Number
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <p className="text-[10px] text-slate-400 font-bold">নম্বর:</p>
                            <p className="text-base md:text-lg font-mono font-bold text-white tracking-widest">01880257912</p>
                          </div>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText('01880257912');
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center gap-1 ${copied ? 'bg-emerald-600 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white cursor-pointer'}`}
                          >
                            {copied ? 'Copied! ✓' : 'Copy Number'}
                          </button>
                        </div>

                        <div className="pt-1.5 flex items-center justify-between text-xs text-slate-300">
                          <span>পরিশোধযোগ্য পরিমান:</span>
                          <span className="font-extrabold text-white">
                            ৳{toBengaliNumber(discTot.toLocaleString('en-US'))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Steps list block */}
                  <div className="bg-[#111126]/30 p-4 rounded-xl border border-white/5 text-left space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="text-sm flex-shrink-0">1️⃣</span>
                      <p className="text-xs text-slate-200">
                        বিকাশ বা নগদ অ্যাপের মাধ্যমে উপরের নম্বরে <span className="font-extrabold text-purple-300">৳{toBengaliNumber(discTot.toLocaleString('en-US'))}</span> Send Money করুন
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-sm flex-shrink-0">2️⃣</span>
                      <p className="text-xs text-slate-200">
                        পেমেন্ট কমপ্লিট করে নিচের WhatsApp বাটনে ক্লিক করে স্ক্রিনশটটা পাঠিয়ে দিন
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp screenshot forward click action */}
                  <a
                    href={`https://wa.me/8801887633339?text=${encodeURIComponent(`আমি ${selectedPlan} (৳${toBengaliNumber(discTot.toLocaleString('en-US'))}/মাস) এর পেমেন্ট করেছি। পেমেন্ট স্ক্রিনশট নিচে পাঠাচ্ছি।`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-xs md:text-sm cursor-pointer text-center"
                  >
                    <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    📱 WhatsApp এ Screenshot পাঠান →
                  </a>

                  {/* Clarification prompt */}
                  <p className="text-slate-300 text-[10px] md:text-xs font-semibold pt-1.5 text-center leading-relaxed max-w-sm mx-auto">
                    আমাদের সাপোর্ট টিম আপনার স্ক্রিনশট পাওয়া মাত্রই সেটা রিভিউ করে অর্ডার কনফার্ম করে দিবে ✅
                  </p>

                  {/* Direct Dial Header Helpline link */}
                  <div className="pt-3 border-t border-purple-500/10 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                    <span>প্রশ্ন থাকলে হেল্পলাইনে কল দিন:</span>
                    <a href="tel:+8801887633339" className="font-extrabold text-white hover:text-purple-400 transition-colors">+8801887633339</a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OrderFormModal;
