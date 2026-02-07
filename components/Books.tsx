import React from 'react';
import Image from 'next/image';

const Books = () => {
  return (
    <section className="w-full relative bg-[#FCFAFF]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
            {/* Tag */}
            <div className="inline-block bg-[#E2C7DE]/50 text-primary px-4 py-1.5 rounded-lg font-medium text-sm mb-6">
                Books
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-secondary font-bricolage mb-6">
                Explore our Library
            </h2>

            <p className="text-base md:text-xl text-secondary/80 leading-relaxed max-w-lg mb-10">
                Explore faith-rooted writings created to deepen understanding, strengthen purpose, and support intentional living.
            </p>

            <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-medium text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg">
                Visit Library
            </button>
        </div>

        {/* Right Images - Sleek Fanned Arrangement */}
        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] flex items-end justify-center">
             
             {/* Book 1: Know When to Say No - Furthest Left */}
             <div className="absolute left-0 md:left-0 bottom-0 w-[160px] md:w-[220px] z-10 transform -rotate-12 origin-bottom-right">
                <img 
                    src="/images/know-when-to-say-no-book-ransom-john.png" 
                    alt="Know When to Say No" 
                    className="w-full h-auto"
                />
             </div>

             {/* Book 2: Love Revived - Overlapping Next */}
             <div className="absolute left-[20%] md:left-[22%] bottom-6 w-[170px] md:w-[240px] z-20 transform -rotate-6 origin-bottom-right">
                <img 
                    src="/images/love-revived-book-ransom-john.png" 
                    alt="Love Revived" 
                    className="w-full h-auto"
                />
             </div>

             {/* Book 3: Chalkboard to Checkbook - Visible Middle-Right */}
             <div className="absolute left-[42%] md:left-[45%] bottom-10 w-[180px] md:w-[260px] z-30 transform rotate-2 origin-bottom-left">
                <img 
                    src="/images/chalkboard-to-checkbook-ransom-john.png" 
                    alt="Chalkboard to Checkbook" 
                    className="w-full h-auto"
                />
             </div>

             {/* Book 4: Reawakened by Fire - Front Right, Largest */}
             <div className="absolute right-0 md:right-[2%] bottom-16 w-[200px] md:w-[300px] z-40 transform rotate-12 origin-bottom-left">
                <img 
                    src="/images/reawaked-by-fire-ransom-john.png" 
                    alt="Reawakened by Fire" 
                    className="w-full h-auto"
                />
             </div>
        </div>

      </div>
      
      {/* Thick Bottom Line/Section */}
      <div className="w-full h-24 bg-[#3F2139E5]"></div>
    </section>
  );
};

export default Books;
