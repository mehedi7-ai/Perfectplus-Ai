import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-black py-32 md:py-48 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background glow for atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
          "Our goal is to make enterprise-grade Voice AI accessible and intuitive, empowering businesses to capture every lead and deliver 24/7 support without the complexity."
        </h2>
        
        <div className="mt-12 flex flex-col items-center">
            <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide">
            - Mehedi Hasan, Founder of Perfectplus Ai
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;