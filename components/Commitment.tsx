import React from 'react';

const Commitment = () => {
  return (
    <section className="w-full py-20 bg-background text-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 flex flex-col items-center">
        
        {/* Icon Container */}
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8">
            <img 
                src="/images/emojione-monotone_handshake.png" 
                alt="Handshake Icon" 
                className="w-10 h-10 object-contain text-primary" 
            />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-secondary font-bricolage mb-6">
          Our Commitment
        </h2>

        <p className="text-base md:text-lg text-secondary/80 leading-relaxed max-w-4xl font-medium">
          At EL-RAN Transformational Rendezvous, our commitment is to steward growth with integrity, intention, and faith. We are dedicated to creating spaces where learning is meaningful, relationships are strengthened, and personal transformation is guided by truth.
        </p>

      </div>
    </section>
  );
};

export default Commitment;
