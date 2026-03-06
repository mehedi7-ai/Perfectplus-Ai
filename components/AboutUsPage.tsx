import React from 'react';
import { Youtube, Instagram, Play, Globe, Users, Zap, ShieldCheck, Heart, Cpu, MapPin, Rocket, GraduationCap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen font-sans">
      
      {/* 1. HERO SECTION: Dark Mode, Grid Pattern, Ambient Glows */}
      <section className="relative w-full py-32 md:py-48 bg-[#0f172a] overflow-hidden flex items-center justify-center">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        {/* Ambient Brand Glows */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/30 rounded-full blur-[128px] pointer-events-none mix-blend-screen"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen"
        ></motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-purple-200 text-xs font-bold uppercase tracking-widest mb-8"
           >
              <Globe size={12} /> Global AI Solutions
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight mb-8"
           >
              Bridging human intent with <br/>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x">
                 Intelligent Voice AI
              </span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
           >
              "Our mission is to empower brands to have meaningful, natural conversations with their customers anytime, anywhere—without the complexity of traditional enterprise software."
           </motion.p>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.6 }}
             className="mt-12 flex flex-col items-center"
           >
               <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-500 to-transparent mb-4"></div>
               <p className="text-white font-medium tracking-wide">
                 Mehedi Hasan, <span className="text-slate-500 font-normal">Founder</span>
               </p>
           </motion.div>
        </div>
      </section>

      {/* 2. FOUNDER SECTION: Glassmorphism Overlap Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-32 -z-10"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
               
               {/* Image Container */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="w-full lg:w-1/2 relative z-0"
               >
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
                     <img 
                        src="https://i.ibb.co.com/ZRBZg9mg/8de32266-741d-4eac-9407-30cffb025d46.jpg" 
                        alt="Mehedi Hasan" 
                        className="w-full h-full object-cover"
                     />
                     {/* Overlay Gradient for text readability if needed */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                  </div>
                  {/* Decorative Elements around image */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-purple rounded-full blur-2xl opacity-40"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
               </motion.div>

               {/* Text Card - Overlapping */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="w-full lg:w-3/5 relative z-10 -mt-12 lg:mt-0 lg:-ml-24"
               >
                  <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50">
                     <span className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-4 block">
                        The Visionary
                     </span>
                     <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-serif">
                        Mehedi Hasan
                     </h2>
                     <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                        <p>
                           "Hi, I’m Mehedi. When the first GPT models launched, I didn't just see a chat tool; I saw the end of 'Please hold, your call is important to us'."
                        </p>
                        <p>
                           I created <span className="font-bold text-slate-900">PerfectPlus AI</span> to solve a simple but expensive problem: businesses lose money every time they miss a call or make a customer wait. My goal isn't just to automate support, but to elevate it—giving every small business the power of a Fortune 500 call center.
                        </p>
                     </div>

                     {/* Signature & Socials */}
                     <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
                        <div className="font-handwriting text-3xl text-slate-400 rotate-[-2deg]">
                           Mehedi H.
                        </div>
                        <div className="flex items-center gap-4">
                           {/* Custom Skool Logo */}
                           <a 
                              href="https://skool.com/@mehedi-hasan-5570" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                           >
                              <svg viewBox="0 0 100 100" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                <text x="15" y="75" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="70" fill="#0056D2">s</text>
                                <text x="55" y="75" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="70" fill="#FF5722">k</text>
                              </svg>
                           </a>

                           {/* Standard Icons */}
                           {[
                              { icon: <Youtube size={20} />, href: "https://www.youtube.com/@IM_Mehedi_Hasan" },
                              { icon: <Instagram size={20} />, href: "https://www.instagram.com/im_mehedihasan/" }
                           ].map((social, idx) => (
                              <a 
                                 key={idx} 
                                 href={social.href} 
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                              >
                                 {social.icon}
                              </a>
                           ))}
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. CORE VALUES (Our DNA) */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
               <span className="text-brand-purple font-bold tracking-widest text-sm uppercase">Our DNA</span>
               <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900">What Drives Us</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { icon: <Zap className="text-yellow-500" />, title: "Obsessed with Speed", desc: "We believe latency kills deals. Our AI is optimized for milliseconds, not seconds." },
                  { icon: <Heart className="text-red-500" />, title: "Human-Centric", desc: "Technology should feel natural. We fine-tune our voice agents to sound warm and empathetic." },
                  { icon: <ShieldCheck className="text-green-500" />, title: "Trust & Security", desc: "Data privacy isn't an afterthought. It's the foundation of our architecture." },
                  { icon: <Cpu className="text-brand-purple" />, title: "Continuous Innovation", desc: "We ship updates weekly, ensuring you always have the cutting-edge of AI." }
               ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
                        {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-slate-500 leading-relaxed text-sm">
                        {item.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. TEAM SECTION: Stylized */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="lg:w-1/2"
               >
                   <div className="relative group">
                      <div className="absolute inset-0 bg-brand-purple rounded-[2rem] rotate-3 opacity-20 transition-transform group-hover:rotate-6"></div>
                      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                         <img 
                            src="https://i.ibb.co.com/S7vQSBqt/photo-2026-02-01-17-42-24.jpg" 
                            alt="Perfectplus Team" 
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                         />
                         {/* Text Overlay */}
                         <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-bold text-lg">The Dream Team</p>
                            <p className="text-slate-300 text-sm">Remote-first, Global Mindset</p>
                         </div>
                      </div>
                   </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="lg:w-1/2 space-y-8"
               >
                   <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                      Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-blue-600">Experts</span>,<br/>
                      Powered by Passion.
                   </h2>
                   <p className="text-lg text-slate-600 leading-relaxed">
                      We are a collective of developers, linguists, and AI specialists working across time zones. We don't just write code; we craft conversations. Our team is dedicated to building tools that are powerful enough for enterprise but accessible enough for startups.
                   </p>
                   <div className="flex flex-wrap gap-3">
                      {['24/7 Support', 'Dedicated Account Managers', 'Custom Engineering'].map((tag, i) => (
                         <span key={i} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-semibold border border-gray-200">
                            {tag}
                         </span>
                      ))}
                   </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 5. IMPACT SECTION: Blue Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
          {/* Abstract Map Dots (CSS or SVG) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dotPattern)" />
              </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6"
             >
                <TrendingUp size={32} className="text-white" />
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="text-3xl md:text-4xl font-bold mb-6"
             >
               Expertise That Drives Real Results
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-blue-100 text-lg max-w-2xl mx-auto mb-12"
             >
                Our intelligent solutions are designed to maximize your business potential—slashing operational costs, reclaiming lost time, and delivering a substantial return on investment.
             </motion.p>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                 {[
                    { val: "60%", label: "Operational Savings" },
                    { val: "24/7", label: "Revenue Capture" },
                    { val: "100%", label: "Lead Response" }
                 ].map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                      className="text-center"
                    >
                       <p className="text-4xl font-extrabold">{stat.val}</p>
                       <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mt-1">{stat.label}</p>
                    </motion.div>
                 ))}
             </div>
          </div>
      </section>

      {/* 6. CINEMATIC VIDEO SECTION: Dark Mode */}
      <section className="py-24 bg-[#0b0f19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex items-center justify-between mb-12"
           >
              <div>
                 <h2 className="text-3xl md:text-5xl font-extrabold text-white">Media Center</h2>
                 <p className="text-slate-400 mt-2">Latest insights, tutorials, and demos.</p>
              </div>
              <a href="https://www.youtube.com/@perfectplusai" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-brand-purple font-bold hover:text-white transition-colors">
                 View Channel <Rocket size={16} />
              </a>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Video (Large) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 group cursor-pointer"
              >
                 <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-800 shadow-2xl border border-white/10">
                    <img 
                       src="https://i.ibb.co.com/gLrqJ7R6/thumbnail-1765959796513.png" 
                       alt="Featured Video" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                          <Play className="fill-white text-white ml-2" size={32} />
                       </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                       <span className="px-3 py-1 bg-brand-purple text-white text-xs font-bold rounded-full mb-3 inline-block">FEATURED</span>
                       <h3 className="text-2xl md:text-3xl font-bold leading-tight">Gemini 3.0 vs Traditional Voice AI</h3>
                    </div>
                 </div>
              </motion.div>

              {/* Smaller Videos List */}
              <div className="space-y-6 flex flex-col justify-center">
                 {[
                    {
                       title: "How AI Receptionists Save $3000+",
                       img: "https://i.ibb.co.com/1G9TWTPJ/Black-White-Red-Simple-Modern-Elegant-Video-How-To-You-Tube-Thumbnail.png",
                       duration: "10:24"
                    },
                    {
                       title: "Live Demo: Booking an Appointment",
                       img: "https://i.ibb.co.com/svdzwtKh/Black-Green-Red-Simple-Modern-Vlog-You-Tube-Thumbnail.png",
                       duration: "05:12"
                    }
                 ].map((video, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                      className="flex gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                    >
                       <div className="relative w-40 aspect-video rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                          <img src={video.img} alt={video.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                          <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded text-[10px] font-mono">
                             {video.duration}
                          </div>
                       </div>
                       <div className="flex flex-col justify-center">
                          <h4 className="font-bold text-lg leading-tight group-hover:text-brand-purple transition-colors">{video.title}</h4>
                          <span className="text-slate-500 text-sm mt-1 flex items-center gap-1 group-hover:text-slate-400">
                             Watch Now <Play size={12} />
                          </span>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>
      
      {/* 7. CTA BANNER */}
      <section className="py-24 bg-white border-t border-gray-100">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-6 text-center"
          >
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Ready to join the future?</h2>
             <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                Transform your customer experience today. It starts with a simple conversation.
             </p>
             <button 
                onClick={() => window.open('https://calendly.com/mehedi-perfectplusai/discovery-call-with-mehedi', '_blank')}
                className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 hover:shadow-xl transition-all hover:-translate-y-1"
             >
                Book a Strategy Call
             </button>
          </motion.div>
      </section>

    </div>
  );
};

export default AboutUsPage;