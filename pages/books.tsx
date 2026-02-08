import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import BookReviews from '@/components/BookReviews';
import Banner from '@/components/Banner';

// Book data with mockup images and descriptions
const booksData = [
  {
    id: 1,
    title: "Know When to Say No",
    author: "Ransom John Usoko",
    description: "A Flag Down on Relationship Red Flags offers an insightful exploration of relationships, providing readers with the tools to navigate the complexities of love and companionship.",
    mockupImage: "/images/know-when-to-say-no-mockup.png",
    coverImage: "/images/know-when-to-say-know-book-cover.png",
  },
  {
    id: 2,
    title: "Love Revived",
    author: "John & Esther Ransom",
    description: "Love Revived offers readers a transformative journey through the complexities of romantic relationships. Each chapter presents profound stories and practical strategies designed to rekindle passion and intimacy.",
    mockupImage: "/images/love-revived-mockup.png",
    coverImage: "/images/love-revived-cover-image.png",
  },
  {
    id: 3,
    title: "Chalkboard to Checkbook",
    author: "Ransom John Usoko",
    description: "Chalkboard to Checkbook is a powerful wakeup call and heartfelt companion for every teacher who's ever felt trapped by the limits of the paycheck but driven by an unshakable passion to educate and inspire lives.",
    mockupImage: "/images/chalkboard-to-checkbook-mockup.png",
    coverImage: "/images/chalkboard-to-checkbook-cover.png",
  },
  {
    id: 4,
    title: "Reawakened by Fire",
    author: "Ransom John Usoko",
    description: "Reawakened by Fire is a profound and timely guide for anyone seeking to ignite and sustain the powerful presence of the Holy Spirit in their lives.",
    mockupImage: "/images/reawakened-by-fire-mockup.png",
    coverImage: "/images/reawakened-by-fire.png",
  },
];

const BooksPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through books
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % booksData.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeBook = booksData[activeIndex];

  return (
    <>
      <Head>
        <title>Books | EL-Ran Transformational Rendezvous</title>
        <meta name="description" content="Explore our collection of faith-rooted books by Ransom John Usoko. Transform your life with wisdom on relationships, faith, and personal growth." />
        <meta property="og:title" content="Books | EL-Ran Transformational Rendezvous" />
        <meta property="og:description" content="Explore our collection of faith-rooted books by Ransom John Usoko. Transform your life with wisdom on relationships, faith, and personal growth." />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/og-image.png" />
      </Head>

      <main className="w-full min-h-screen bg-[#FCFAFF]">
        
        {/* Hero Accordion Section - Sleek Design */}
        <section className="w-full pt-20 md:pt-28 pb-16 md:pb-24 bg-gradient-to-br from-[#FCFAFF] via-[#F5EFFA] to-[#EDE4F5] relative overflow-hidden">
          
          {/* Floating Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#E2C7DE]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#D4B8D0]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#CA356A]/10 rounded-full blur-2xl"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
            
            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 min-h-[480px] md:min-h-[550px]">
              
              {/* Left: Book Info with Glassmorphic Card */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/50 ">
                  
                  {/* Book Number Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#3F2139]/10 px-3 py-1 rounded-full text-xs font-medium text-[#3F2139] mb-6">
                    <span className="w-1.5 h-1.5 bg-[#CA356A] rounded-full animate-pulse"></span>
                    Book {activeIndex + 1} of {booksData.length}
                  </div>
                  
                  <h1 
                    key={activeBook.id} 
                    className="text-3xl md:text-5xl font-bold text-secondary font-bricolage mb-3 animate-slideIn"
                  >
                    {activeBook.title}
                  </h1>
                  
                  <p className="text-[#3F2139]/60 text-sm md:text-base mb-6 font-medium tracking-wide">
                    by {activeBook.author}
                  </p>
                  
                  <p 
                    key={`desc-${activeBook.id}`}
                    className="text-secondary/75 text-base md:text-lg leading-relaxed mb-8 animate-slideIn"
                    style={{ animationDelay: '0.1s' }}
                  >
                    {activeBook.description}
                  </p>
                  
                  <a 
                    href={`https://wa.me/2348032388802?text=${encodeURIComponent(`Hello Mr. Ransom, I want to get your book "${activeBook.title}". Please let me know how to proceed.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#3F2139] to-[#5A3252] text-white rounded-2xl font-semibold text-sm hover:shadow-[0_8px_24px_rgba(63,33,57,0.3)] transition-all duration-300 active:scale-[0.98]"
                  >
                    Buy Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Right: Book Mockup Image with Sleek Cylindrical Base */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
                <div 
                  key={`img-${activeBook.id}`}
                  className="relative w-[260px] md:w-[380px] h-[320px] md:h-[480px] animate-slideIn flex flex-col items-center justify-end"
                >
                  {/* Book Image */}
                  <div className="relative w-full h-[280px] md:h-[420px] mb-2">
                    <Image
                      src={activeBook.mockupImage}
                      alt={activeBook.title}
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(63,33,57,0.25)] transition-all duration-700"
                      priority
                    />
                  </div>
                  
                  {/* Sleek Cylindrical Base - Layered Ellipses */}
                  <div className="relative w-[180px] md:w-[240px]">
                    {/* Top surface of cylinder */}
                    <div className="w-full h-[12px] md:h-[16px] bg-gradient-to-b from-[#D4B8D0] to-[#C9A8C5] rounded-[50%]"></div>
                    {/* Body/side of cylinder */}
                    <div className="w-full h-[8px] md:h-[10px] bg-gradient-to-b from-[#C9A8C5] to-[#B89AB3] -mt-[6px] md:-mt-[8px]"></div>
                    {/* Bottom edge with shadow */}
                    <div className="w-full h-[6px] md:h-[8px] bg-[#A88AA0] rounded-b-[50%] -mt-[1px] shadow-[0_4px_12px_rgba(63,33,57,0.15)]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sleek Navigation Dots with Progress */}
            <div 
              className="flex justify-center items-center gap-2 mt-10"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {booksData.map((book, index) => (
                <button
                  key={book.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    relative h-2 rounded-full overflow-hidden transition-all duration-500 ease-out
                    ${index === activeIndex 
                      ? 'w-10 bg-[#3F2139]/20' 
                      : 'w-2 bg-[#3F2139]/20 hover:bg-[#3F2139]/40'
                    }
                  `}
                  aria-label={`View ${book.title}`}
                >
                  {/* Progress Fill for Active Dot */}
                  {index === activeIndex && (
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#3F2139] to-[#CA356A] rounded-full animate-progress"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Books Grid Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            
            <h2 className="text-2xl md:text-4xl font-bold text-secondary font-bricolage text-center mb-4">
              Complete Library
            </h2>
            <p className="text-secondary/70 text-center mb-12 max-w-xl mx-auto">
              Browse all books by Ransom John Usoko
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {booksData.map((book) => (
                <div 
                  key={book.id}
                  className="group bg-[#FCFAFF] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Book Cover */}
                  <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Book Info */}
                  <h3 className="text-lg font-bold text-secondary font-bricolage mb-2 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-secondary/60 mb-4">
                    by {book.author}
                  </p>
                  
                  {/* Buy Button */}
                  <a 
                    href={`https://wa.me/2348032388802?text=${encodeURIComponent(`Hello Mr. Ransom, I want to get your book "${book.title}". Please let me know how to proceed.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-md active:scale-95 block text-center"
                  >
                    Buy Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Reviews Section */}
        <BookReviews bgColor="bg-white" />

        {/* Banner Section */}
        <Banner bgColor="bg-[#FCFAFF]" />

      </main>
      
      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-progress {
          animation: progress 5s linear forwards;
        }
      `}</style>
    </>
  );
};

export default BooksPage;
