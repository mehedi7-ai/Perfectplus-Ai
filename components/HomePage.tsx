import React from 'react';
import Hero from './Hero';
import Features from './Features';
import SocialProof from './SocialProof';
import PainPoints from './PainPoints';
import DemoShowcase from './DemoShowcase';
import ROICalculator from './ROICalculator';
import Foundations from './Foundations';
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';
import CTA from './CTA';
import GlobalMap from './GlobalMap';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <SocialProof />
      <GlobalMap />
      <PainPoints />
      <DemoShowcase />
      <ROICalculator />
      <Foundations />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
};

export default HomePage;
