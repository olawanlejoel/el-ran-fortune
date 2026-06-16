import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PurposeAcademyCard = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row">
          {/* Left: Flyer Image */}
          <div className="md:w-[45%] relative">
            <Image
              src="/images/Purpose Academy (1).png"
              alt="Purpose Academy Cohort 2"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-block bg-[#E2C7DE]/50 text-primary px-4 py-1.5 rounded-lg font-medium text-xs mb-4 w-fit">
              Cohort 2
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary font-bricolage mb-3 leading-tight">
              Purpose Academy
            </h2>
            <p className="text-secondary/70 text-sm md:text-base leading-relaxed mb-6">
              A transformative program designed to help you discover your purpose, build intentional habits, and live a faith-driven life. Don&apos;t miss this opportunity to grow.
            </p>
            <div className="flex items-center gap-3 text-sm text-secondary/60 mb-8">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Limited Slots
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                ₦20,000
              </div>
            </div>
            <Link
              href="/purpose-academy"
              className="inline-flex items-center gap-2 w-fit px-8 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-[0.97]"
            >
              Click to Register
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeAcademyCard;
