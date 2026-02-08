import React from 'react';
import Image from 'next/image';

const books = [
  {
    title: "Chalkboard to Checkbook",
    author: "Ransom John Usoko",
    image: "/images/chalkboard-to-checkbook-cover.webp",
  },
  {
    title: "Love Revived",
    author: "Ransom John & Esther Ransom",
    image: "/images/love-revived-cover-image.webp",
  },
  {
    title: "Reawakened by Fire",
    author: "John & Esther Ransom",
    image: "/images/reawakened-by-fire.webp",
  },
  {
    title: "Know When to Say Know",
    author: "Ransom John Usoko",
    image: "/images/know-when-to-say-know-book-cover.webp",
  },
];

const FeaturedBooks = () => {
  // Duplicate books for seamless infinite scroll
  const duplicatedBooks = [...books, ...books];

  return (
    <section className="w-full py-20 bg-[#FCFAFF] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary font-bricolage mb-4">
            Explore our Library
          </h2>
          <p className="text-base md:text-lg text-secondary/70 leading-relaxed max-w-xl mx-auto mb-6">
            Explore faith-rooted writings created to deepen understanding, strengthen purpose, and support intentional living.
          </p>
          
          {/* Decorative SVG Underline */}
          <div className="w-[150px] md:w-[250px] mx-auto">
            <svg width="100%" viewBox="0 0 359 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
              <path d="M0.115234 8.93086C0.115234 8.93086 213.037 -7.78857 213.037 8.93086C213.037 25.6503 14.7275 24.058 39.777 35.2042C64.8266 46.3505 358.115 25.6503 358.115 25.6503" stroke="#CA356A" strokeWidth="3"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Carousel */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="relative w-full group overflow-hidden">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#FCFAFF] via-[#FCFAFF]/60 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#FCFAFF] via-[#FCFAFF]/60 to-transparent z-10 pointer-events-none"></div>
          
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .scroll-container {
              animation: scroll 30s linear infinite;
            }
            .group:hover .scroll-container {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="scroll-container flex gap-6 w-max">
          {[...books, ...books, ...books, ...books].map((book, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-5 transition-all duration-300 flex flex-col items-center text-center w-[240px] md:w-[280px] shrink-0 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Book Cover */}
              <div className="w-full relative aspect-[2/3] mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                 <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                 />
              </div>

              {/* Details */}
              <div className="w-full text-left">
                  <h3 className="text-lg md:text-xl font-bold text-secondary mb-1 truncate">
                    {book.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm mb-4 font-medium truncate">
                    {book.author}
                  </p>
                  
                  <a 
                    href={`https://wa.me/2348032388802?text=${encodeURIComponent(`Hello Mr. Ransom John, I want to get your book "${book.title}". Please let me know how to proceed.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-md active:scale-95 block text-center"
                  >
                    Buy Now
                  </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
