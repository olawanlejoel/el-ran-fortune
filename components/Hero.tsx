import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full pt-32 pb-10 md:pb-20 px-6 md:px-16 max-w-[1400px] mx-auto min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
      
      {/* Left Content (60%) */}
      <div className="md:w-[60%] text-center md:text-left z-10 pt-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] font-bricolage tracking-tight">
          Raising Purpose-Driven <br />
          Lives <span className="font-normal">Through</span> <span className="font-extrabold">Faith</span> and <br />
          Transformation
        </h1>

        {/* Separated SVG Underline */}
        <div className="w-[200px] md:w-full max-w-[350px] my-4 md:my-6 mx-auto md:mx-0">
            <svg width="100%" viewBox="0 0 359 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
              <path d="M0.115234 8.93086C0.115234 8.93086 213.037 -7.78857 213.037 8.93086C213.037 25.6503 14.7275 24.058 39.777 35.2042C64.8266 46.3505 358.115 25.6503 358.115 25.6503" stroke="#CA356A" strokeWidth="3"/>
            </svg>
        </div>
        
        <div className="mb-8 md:mb-10 mt-6">
            <p className="text-base md:text-xl text-secondary/80 max-w-xl leading-relaxed mx-auto md:mx-0">
              Rooted in faith, EL-RAN Transformational Rendezvous guides personal growth through teaching aligned with <span className="font-bold text-secondary">God’s design.</span>
            </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link href="/books">
            <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-medium text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg">
              Explore our Library
            </button>
          </Link>
          <Link href="/about#vision">
            <button className="px-6 py-2.5 bg-transparent text-primary border border-primary/20 rounded-xl font-medium text-sm hover:bg-primary/5 transition-all">
              Explore our Vision
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image (40%) */}
      <div className="w-full md:w-[40%] relative h-[400px] md:h-[550px] flex items-center justify-center md:justify-end pt-0 md:pt-8">
         {/* Main Hero Image */}
         <div className="relative w-full h-full flex items-center justify-center md:justify-end">
             <img 
                src="/images/ransom-john-hero.webp" 
                alt="Ransom John" 
                className="object-contain h-full w-auto drop-shadow-2xl z-10"
             />
         </div>

        {/* Mentorship Tag - Hidden on Mobile */}
        <div className="hidden md:block absolute top-[80%] -left-32 z-20 bg-accent text-white px-5 py-2 rounded-lg -rotate-12 shadow-lg font-bold text-sm font-bricolage">
          Mentorship
        </div>
        
        {/* Dotted Arrow - Hidden on Mobile */}
        <div className="hidden md:block absolute bottom-0 -left-6 w-32 h-auto z-0 opacity-80 rotate-[-1deg]">
            <svg width="100%" viewBox="0 0 169 113" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary">
              <path d="M167 43.2548C137.811 73.3011 73.6751 114.586 42.831 45.2413C21.7725 -2.10352 57.6001 -18.3498 79.4889 34.3679C101.378 87.0857 64.5702 152.337 1.45874 74.6104M1.45874 74.6104L15.2173 70.9972M1.45874 74.6104L9.50219 104.148" stroke="currentColor" strokeWidth="2.8064" strokeLinecap="round" strokeDasharray="5.61 5.61"/>
            </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
