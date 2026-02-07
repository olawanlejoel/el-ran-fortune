import React from 'react';
import Image from 'next/image';

const books = [
  {
    title: "Chalkboard to Checkbook",
    author: "Ransom John Usoko",
    image: "/images/chalkboard-to-checkbook-cover.png",
  },
  {
    title: "Love Revived",
    author: "Ransom John Usoko",
    image: "/images/love-revived-cover-image.png",
  },
  {
    title: "Reawakened by Fire",
    author: "Ransom John Usoko",
    image: "/images/reawakened-by-fire.png",
  },
];

const FeaturedBooks = () => {
  return (
    <section className="w-full py-20 bg-[#FCFAFF]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Heading */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary font-bricolage inline-block relative z-10">
            Grab your Copy!
            {/* Stylized Underline */}
            <svg 
                className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-40 md:w-64 h-auto opacity-80 -z-10" 
                viewBox="0 0 359 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
              <path d="M0.115234 8.93086C0.115234 8.93086 213.037 -7.78857 213.037 8.93086C213.037 25.6503 14.7275 24.058 39.777 35.2042C64.8266 46.3505 358.115 25.6503 358.115 25.6503" stroke="#CA356A" strokeWidth="3"/>
            </svg>
          </h2>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 transition-all duration-300 flex flex-col items-center text-center group">
              {/* Book Cover */}
              <div className="w-full relative aspect-[2/3] mb-6 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center">
                 <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
              </div>

              {/* Details */}
              <div className="w-full text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary mb-1">
                    {book.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base mb-6 font-medium">
                    {book.author}
                  </p>
                  
                  <button className="w-full py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-md active:scale-95">
                    Buy Now
                  </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedBooks;
