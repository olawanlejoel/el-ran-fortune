import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="w-full pt-32 md:pt-52 pb-12 md:pb-20 bg-white flex justify-center px-6 md:px-16 overflow-visible">
      <div className="w-full max-w-[1200px] bg-primary rounded-[2rem] md:rounded-[3rem] text-white relative flex flex-col md:flex-row items-center md:justify-between px-6 md:px-16 py-8 md:py-16 shadow-2xl">
        
        {/* Left Content */}
        <div className="w-full md:w-[55%] z-10 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-6 leading-tight">
                Ready to Turn your Life <br className="hidden md:block"/> Around?
            </h2>
            <p className="text-white/80 text-base md:text-xl mb-8 leading-relaxed max-w-lg">
                Join 100+ people on a journey of purpose, growth, and transformation.
            </p>
            <Link href="/contact">
              <button className="bg-[#F3EBFF] text-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
                  Contact Me
              </button>
            </Link>
        </div>

        {/* Right Image - Shoots Out */}
        <div className="absolute bottom-0 right-0 md:right-10 w-[90%] md:w-[450px] pointer-events-none hidden md:block">
            {/* The image is allowed to overflow the container upwards */}
             <img 
                src="/images/ransom-john-siting.png" 
                alt="Ransom John Sitting" 
                className="w-full h-auto object-contain object-bottom scale-[1.35] origin-bottom" 
            />
            
            {/* Gradient Overlay to Blend Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>



      </div>
    </section>
  );
};

export default Banner;
