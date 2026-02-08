import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Counter from "@/components/Counter";

const About = () => {
  return (
    <section className="w-full py-20 bg-[#FCFAFF]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-6 md:gap-8 overflow-hidden">
        
        {/* Left Image Section (40%) */}
        <div className="w-full md:w-[40%] flex justify-start h-[400px] md:h-[550px] relative">
             <img 
                src="/images/ransom-john-about.webp" 
                alt="About Ransom John" 
                className="w-full h-full object-cover object-bottom rounded-tl-[8rem] rounded-br-[5rem]"
             />
        </div>

        {/* Right Content Section (60%) */}
        <div className="w-full md:w-[60%] pl-0 md:pl-12">
          {/* Tag */}
          <div className="inline-block bg-[#E2C7DE]/50 text-primary px-4 py-1.5 rounded-lg font-medium text-sm mb-6">
            About Us
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-secondary font-bricolage mb-6">
            What is EL-RAN?
          </h2>

          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-4">
            EL-RAN Transformational Rendezvous is a <span className="font-bold text-secondary">dynamic</span>, purpose-driven brand dedicated to igniting profound <span className="font-bold text-secondary">personal growth.</span>
          </p>

          <p className="text-base md:text-lg text-secondary leading-relaxed mb-10">
            We bridge the gap between potential and purpose through curated mentorship, faith-based principles, and transformative resources designed to elevate your life and leadership.
          </p>

          {/* Stats Grid */}
          <div className="flex flex-row flex-nowrap items-center justify-between md:justify-start gap-3 md:gap-8 mb-10 w-full overflow-x-auto md:overflow-visible">
            <div className="shrink-0">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary font-bricolage flex items-center">
                <Counter value={100} />+
              </h3>
              <p className="text-[10px] md:text-sm text-secondary/70 mt-1">People mentored</p>
            </div>
            
            <div className="w-[1px] md:w-1 h-8 md:h-12 bg-secondary/20 rounded-full shrink-0"></div>

            <div className="shrink-0">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary font-bricolage flex items-center">
                <Counter value={3} />+
              </h3>
              <p className="text-[10px] md:text-sm text-secondary/70 mt-1">Books published</p>
            </div>

            <div className="w-[1px] md:w-1 h-8 md:h-12 bg-secondary/20 rounded-full shrink-0"></div>

            <div className="shrink-0">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary font-bricolage flex items-center">
                <Counter value={100} />+
              </h3>
              <p className="text-[10px] md:text-sm text-secondary/70 mt-1">Lives transformed</p>
            </div>
          </div>

          <Link href="/about">
            <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-medium text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg">
              Read More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
