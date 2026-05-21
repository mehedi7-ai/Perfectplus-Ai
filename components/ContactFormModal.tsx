import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ContactFormModalProps {
  showContactModal: boolean;
  setShowContactModal: (val: boolean) => void;
  contactForm: {
    name: string;
    whatsappNumber: string;
    businessEmail: string;
    message: string;
  };
  setContactForm: React.Dispatch<React.SetStateAction<{
    name: string;
    whatsappNumber: string;
    businessEmail: string;
    message: string;
  }>>;
  contactErrors: { [key: string]: string };
  setContactErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  contactSubmitted: boolean;
  setContactSubmitted: (val: boolean) => void;
  contactSubmitting: boolean;
  setContactSubmitting: (val: boolean) => void;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  showContactModal,
  setShowContactModal,
  contactForm,
  setContactForm,
  contactErrors,
  setContactErrors,
  contactSubmitted,
  setContactSubmitted,
  contactSubmitting,
  setContactSubmitting
}) => {
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contactSubmitting) return;

    // Validation checks
    const errors: { [key: string]: string } = {};
    if (!contactForm.name.trim()) {
      errors.name = 'আপনার নাম দিতে হবে';
    }
    if (!contactForm.whatsappNumber.trim()) {
      errors.whatsappNumber = 'হোয়াটসঅ্যাপ নম্বরটি দিতে হবে';
    } else if (!/^(01)[3-9]\d{8}$/.test(contactForm.whatsappNumber.trim())) {
      errors.whatsappNumber = 'হোয়াটসঅ্যাপ নম্বরটি ১১ ডিজিটের সঠিক মোবাইল নম্বর হতে হবে (যেমন: 018XXXXXXXX)';
    }

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setContactErrors({});
    setContactSubmitting(true);

    try {
      await fetch("https://n8n.srv1462469.hstgr.cloud/webhook/bd-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactForm.name,
          whatsapp: contactForm.whatsappNumber,
          email: contactForm.businessEmail,
          message: contactForm.message
        })
      });
    } catch (err) {
      console.error("Contact Form Lead Webhook submission failed:", err);
    }

    setContactSubmitting(false);
    setContactSubmitted(true);

    // Auto-close modal after 2.5 seconds
    setTimeout(() => {
      setShowContactModal(false);
      setContactSubmitted(false);
      setContactForm({ name: '', whatsappNumber: '', businessEmail: '', message: '' });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {showContactModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-0 md:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[10001]"
            onClick={() => {
              if (!contactSubmitting) {
                setShowContactModal(false);
                setContactSubmitted(false);
              }
            }}
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full h-full md:h-auto md:max-w-md bg-[#0a0a1a] border-0 md:border-2 border-purple-500/40 md:rounded-3xl shadow-[0_0_50px_rgba(124,58,237,0.45)] z-[10002] flex flex-col font-sans overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={() => {
                setShowContactModal(false);
                setContactSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-[10005]"
              disabled={contactSubmitting}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body content scroll wrapper */}
            <div className="px-6 py-8 md:p-8 space-y-5 flex-1 overflow-y-auto">
              {/* Header Title */}
              <div className="space-y-2 mt-4 text-left">
                <h3 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 leading-snug">
                  📬 Get in Touch — আমাদের জানান
                </h3>
                <p className="text-slate-300 text-xs md:text-sm font-medium">
                  নিচের ফর্মটি পূরণ করুন, আমাদের প্রতিনিধি আপনাকে ২৪ ঘণ্টার মধ্যে মেসেজ বা কল করবেন।
                </p>
              </div>

              {contactSubmitted ? (
                /* Success screen */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-bold text-2xl">
                    ✓
                  </div>
                  <h4 className="text-base font-extrabold text-emerald-400">মেসেজ পাঠানো হয়েছে!</h4>
                  <p className="text-slate-300 text-xs leading-relaxed font-medium">
                     ধন্যবাদ! আপনার বার্তা আমাদের কাছে পৌছেছে। আমাদের প্রতিনিধি শীঘ্রই যোগাযোগ করবেন।
                  </p>
                </motion.div>
              ) : (
                /* Interactive state contact submission form fields */
                <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs md:text-sm font-semibold text-slate-200">
                      নাম (Name) <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="আপনার নাম লিখুন"
                      disabled={contactSubmitting}
                      className={`w-full px-4 py-2.5 bg-[#0d0d22] text-white rounded-xl border ${contactErrors.name ? 'border-red-500 focus:border-red-500' : 'border-purple-500/25 focus:border-purple-500'} focus:outline-none transition-colors text-xs md:text-sm`}
                    />
                    {contactErrors.name && (
                      <p className="text-red-500 text-[11px] font-semibold">{contactErrors.name}</p>
                    )}
                  </div>

                  {/* WhatsApp number input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs md:text-sm font-semibold text-slate-200">
                      হোয়াটসঅ্যাপ নম্বর (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel"
                      value={contactForm.whatsappNumber}
                      onChange={(e) => setContactForm({...contactForm, whatsappNumber: e.target.value})}
                      placeholder="01XXXXXXXXX"
                      disabled={contactSubmitting}
                      className={`w-full px-4 py-2.5 bg-[#0d0d22] text-white rounded-xl border ${contactErrors.whatsappNumber ? 'border-red-500 focus:border-red-500' : 'border-purple-500/25 focus:border-purple-500'} focus:outline-none transition-colors text-xs md:text-sm`}
                    />
                    {contactErrors.whatsappNumber && (
                      <p className="text-red-500 text-[11px] font-semibold">{contactErrors.whatsappNumber}</p>
                    )}
                  </div>

                  {/* Optional Business Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs md:text-sm font-semibold text-slate-200">
                      বিজনেস ইমেইল (ঐচ্ছিক)
                    </label>
                    <input 
                      type="email"
                      value={contactForm.businessEmail}
                      onChange={(e) => setContactForm({...contactForm, businessEmail: e.target.value})}
                      placeholder="আপনার বিজনেস ইমেইল"
                      disabled={contactSubmitting}
                      className="w-full px-4 py-2.5 bg-[#0d0d22] text-white rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-500 transition-colors text-xs md:text-sm"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs md:text-sm font-semibold text-slate-200">
                      আপনার মেসেজ (আপনার প্রশ্ন/প্রয়োজনটি লিখুন)
                    </label>
                    <textarea 
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="আপনার ব্যবসা বা প্রয়োজন সম্পর্কে এখানে লিখুন..."
                      rows={3}
                      disabled={contactSubmitting}
                      className="w-full px-4 py-2.5 bg-[#0d0d22] text-white rounded-xl border border-purple-500/25 focus:outline-none focus:border-purple-500 transition-colors text-xs md:text-sm resize-none"
                    />
                  </div>

                  {/* Action submit button */}
                  <button
                    type="submit"
                    disabled={contactSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl transition-all duration-300 shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs md:text-sm cursor-pointer disabled:opacity-50"
                  >
                    {contactSubmitting ? 'মেসেজ পাঠানো হচ্ছে...' : 'মেসেজ পাঠান 🚀'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
