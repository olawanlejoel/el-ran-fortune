import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    text: "This book reshaped my understanding of love and relationships, revealing God’s way as the best and most fulfilling path. Through practical wisdom on sacrifice, discipline, and intentional living, it challenged misconceptions and offered clarity that deeply transformed my perspective.",
    name: "Oyekunle Isreal Phillian",
    image: "/images/oyekunle-isreal.jpg",
  },
  {
    id: 2,
    text: "This book reshaped my understanding of love and relationships, revealing God’s way as the best and most fulfilling path. Through practical wisdom on sacrifice, discipline, and intentional living, it challenged misconceptions and offered clarity that deeply transformed my perspective.",
    name: "Oyekunle Isreal Phillian",
    image: "/images/oyekunle-isreal.jpg",
  },
  {
    id: 3,
    text: "This book reshaped my understanding of love and relationships, revealing God’s way as the best and most fulfilling path. Through practical wisdom on sacrifice, discipline, and intentional living, it challenged misconceptions and offered clarity that deeply transformed my perspective.",
    name: "Oyekunle Isreal Phillian",
    image: "/images/oyekunle-isreal.jpg",
  },
];

const BookReviews = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="w-full py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-secondary font-bricolage text-center mb-16"
        >
          Book Reviews
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto min-h-[400px]">
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.1 26.4005C23.1 23.2892 23.1 21.7336 24.0666 20.7671C25.0331 19.8005 26.5887 19.8005 29.7 19.8005C32.8113 19.8005 34.3669 19.8005 35.3335 20.7671C36.3 21.7336 36.3 23.2892 36.3 26.4005C36.3 29.5118 36.3 31.0674 35.3335 32.0339C34.3669 33.0005 32.8113 33.0005 29.7 33.0005C26.5887 33.0005 25.0331 33.0005 24.0666 32.0339C23.1 31.0674 23.1 29.5118 23.1 26.4005Z" stroke="#3F2139" strokeWidth="2.475"/>
                    <path d="M23.1 28.0503V20.6548C23.1 14.1 27.2509 8.54119 33 6.60029" stroke="#3F2139" strokeWidth="2.475" strokeLinecap="round"/>
                    <path d="M3.30002 26.4005C3.30002 23.2892 3.30002 21.7336 4.26659 20.7671C5.23316 19.8005 6.78878 19.8005 9.90002 19.8005C13.0113 19.8005 14.5669 19.8005 15.5335 20.7671C16.5 21.7336 16.5 23.2892 16.5 26.4005C16.5 29.5118 16.5 31.0674 15.5335 32.0339C14.5669 33.0005 13.0113 33.0005 9.90002 33.0005C6.78878 33.0005 5.23316 33.0005 4.26659 32.0339C3.30002 31.0674 3.30002 29.5118 3.30002 26.4005Z" stroke="#3F2139" strokeWidth="2.475"/>
                    <path d="M3.29997 28.0503V20.6548C3.29997 14.1 7.45088 8.54119 13.2 6.60029" stroke="#3F2139" strokeWidth="2.475" strokeLinecap="round"/>
                </svg>
            </div>

            {/* Review Content with Animation */}
            <div className="relative h-[300px] overflow-visible">
                <AnimatePresence mode='wait'>
                    <motion.div 
                        key={current}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="text-center px-4 md:px-12 absolute w-full top-0 left-0"
                    >
                        <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-secondary/90 mb-8 md:mb-10 font-medium italic">
                            "{reviews[current].text}"
                        </p>

                        {/* Author */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary shadow-md">
                                <img 
                                    src={reviews[current].image} 
                                    alt={reviews[current].name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-bold text-secondary text-base md:text-lg">
                                {reviews[current].name}
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Nav Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute top-1/3 -left-2 md:-left-20 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group hover:scale-110 active:scale-95 z-20"
                aria-label="Previous Review"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
            </button>

            <button 
                onClick={nextSlide}
                className="absolute top-1/3 -right-2 md:-right-20 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group hover:scale-110 active:scale-95 z-20"
                aria-label="Next Review"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        current === index ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default BookReviews;
