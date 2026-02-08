import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/Banner";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | EL-RAN Transformational Rendezvous</title>
        <meta
          name="description"
          content="Learn more about EL-RAN Transformational Rendezvous and our mission to steward growth with integrity, intention, and faith."
        />
        <meta property="og:title" content="About Us | EL-RAN Transformational Rendezvous" />
        <meta property="og:description" content="Learn more about EL-RAN Transformational Rendezvous and our mission to steward growth with integrity, intention, and faith." />
        <meta property="og:image" content="/images/og-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/og-image.webp" />
      </Head>

      <main className="w-full min-h-screen">
        {/* Custom Hero Section */}
        <div className="relative w-full h-[70vh] md:h-[100vh] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
          <div className="absolute inset-0 w-full h-full">
             <Image 
                src="/images/about-hero.webp" 
                alt="About El-Ran Hero" 
                fill
                className="object-cover object-top"
                priority
             />
          </div>
          
          {/* Overlay - Color: #A556954D */}
          <div className="absolute inset-0 bg-[#A556954D] z-10"></div>
          
          {/* Content */}
          <div className="relative z-20 text-center px-6 pt-32 md:pt-40">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-bricolage drop-shadow-md">
              About Me
            </h1>
          </div>
        </div>

        {/* Meet Ransom John Section */}
        <section className="bg-[#F9F5FF] pb-20 overflow-visible">
            <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
                
                {/* Left: Content */}
                <div className="pt-8 lg:pt-32 order-2 lg:order-1 lg:w-[45%]">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary font-bricolage mb-8">
                        Meet Ransom John
                    </h2>
                    <div className="space-y-6 text-secondary/80 text-base md:text-lg leading-relaxed font-medium">
                        <p>
                            Ransom John Usoko is a seasoned preacher per excellence and a relationship expert. He is married to Esther his beautiful and gracious wife of over nine years.
                        </p>
                        <p>
                            He is an itinerant minister who is passionate about Kingdom business. It is his passion and burden that has kept him committed in spreading the gospel of Christ among young people for over two decades
                        </p>
                        <p>
                            His involvement in nurturing young minds through teaching, preaching and counselling to get it right spiritually, emotionally and maritally has been an obsession that has given birth to the <span className="font-bold text-secondary">EL-Ran Transformational Rendezvous.</span>
                        </p>
                    </div>
                </div>

                {/* Right: Images Composition */}
                <div className="relative order-1 lg:order-2 lg:w-[45%] flex justify-center lg:justify-end">
                    {/* Composition Container - Smaller on mobile */}
                    <div className="relative w-[240px] md:w-[500px] h-[320px] md:h-[650px] -mt-8 md:-mt-24 group">
                        
                        {/* Image 1: Back (Top Left) - Smaller on mobile */}
                        <div className="absolute top-0 left-0 w-[160px] md:w-[350px] h-[200px] md:h-[450px] z-20 shadow-xl rounded-xl overflow-hidden border-4 border-[#F9F5FF] -rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
                             <Image 
                                src="/images/about-image-1.webp" 
                                alt="Ransom John and Wife" 
                                fill
                                className="object-cover"
                             />
                        </div>

                        {/* Image 2: Front (Bottom Right) - Smaller on mobile */}
                        <div className="absolute bottom-0 right-0 w-[140px] md:w-[280px] h-[180px] md:h-[350px] z-30 shadow-2xl rounded-xl overflow-hidden border-4 border-[#F9F5FF] rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 delay-100">
                             <Image 
                                src="/images/about-image-2.webp" 
                                alt="Ransom John Couple Portrait" 
                                fill
                                className="object-cover"
                             />
                        </div>

                        {/* Heart SVGs Decoration - Moved under first, beside second */}
                        <div className="absolute bottom-20 left-10 md:left-20 z-10 w-20 h-20 animate-pulse">
                            <svg width="77" height="91" viewBox="0 0 77 91" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
                                <path d="M11.1493 81.4792C9.43787 78.4 6.31043 71.7124 8.08588 67.7518C9.25938 65.134 12.1318 63.873 14.7732 65.0571C16.142 65.6707 17.3062 66.7405 18.3131 69.3837C20.9563 68.3768 22.5296 68.5341 23.8983 69.1477C26.5398 70.3318 27.5096 73.3151 26.3361 75.9329C24.5606 79.8936 17.4873 82.0084 14.0498 82.7794C12.8931 83.0389 11.7253 82.5154 11.1493 81.4792Z" stroke="#D45E88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M32.7113 47.8069C29.0715 41.2584 22.4204 27.0358 26.1962 18.6128C28.6919 13.0454 34.8006 10.3637 40.4183 12.8819C43.3292 14.1868 45.8052 16.4621 47.9466 22.0832C53.5678 19.9418 56.9137 20.2764 59.8247 21.5813C65.4422 24.0996 67.5047 30.4443 65.009 36.0116C61.2331 44.4347 46.1902 48.9323 38.8798 50.5721C36.4198 51.1238 33.9362 50.0105 32.7113 47.8069Z" stroke="#D45E88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                </div>
            </div>
        </div>
        </section>

        {/* Things You May Not Know Section */}
        <section className="bg-[#FCFAFF] pt-20 pb-0 overflow-hidden">
             <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-20">
                
                {/* Image Side */}
                <div className="relative lg:w-1/2 flex justify-center lg:justify-start pl-8 pt-8 z-10">
                    {/* Decorative Shape Behind - Color #CA356A */}
                    <div className="absolute top-0 left-0 w-[280px] md:w-[400px] h-[350px] md:h-[500px] bg-[#CA356A] rounded-tr-[100px] z-0"></div>
                    
                    {/* Image */}
                    <div className="relative w-[300px] md:w-[400px] aspect-[4/5] rounded overflow-hidden shadow-none mt-12 ml-12 z-10">
                        <Image 
                           src="/images/about-image-3.webp" 
                           alt="Ransom John Portrait" 
                           fill
                           className="object-cover"
                        />
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary font-bricolage mb-8 leading-tight">
                        Some Things you May <br/> or May not Know:
                    </h2>
                    
                    <div className="space-y-6 text-lg text-secondary/90 font-medium mb-10">
                        <p>You will find out when you buy my books.</p>
                        <p>You will find out when you buy my books.</p>
                        <p>You will find out when you buy my books.</p>
                    </div>

                    <Link href="/books">
                        <button className="px-8 py-3 bg-[#3F2139] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg active:scale-95 text-sm">
                            Buy Now!!
                        </button>
                    </Link>
                </div>
             </div>

             {/* Thick Full Rectangle Below */}
             <div className="w-full h-16 md:h-24 bg-[#563652]"></div>
        </section>

        {/* Mission & Vision Section */}
        <section id="vision" className="bg-white py-24 px-6 md:px-16">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                
                {/* Mission Card */}
                <div className="relative bg-[#E2C7DE]/40 p-10 md:p-12 rounded-[40px] rounded-tl-none pt-16 mt-8 group transition-all duration-500 ease-out hover:bg-gradient-to-br hover:from-[#3F2139] hover:via-[#4A2840] hover:to-[#2D1A28] hover:shadow-[0_20px_60px_-15px_rgba(63,33,57,0.5)] cursor-pointer overflow-visible">
                    {/* Icon with Soft Glow */}
                    <div className="absolute -top-10 left-10 w-20 h-20 bg-[#3F2139] rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ease-out group-hover:shadow-[0_0_40px_rgba(138,74,118,0.7)] group-hover:scale-105 z-10">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="6"/>
                            <circle cx="12" cy="12" r="2"/>
                            <line x1="12" y1="2" x2="12" y2="22"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                        </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-secondary mb-4 font-bricolage transition-colors duration-500 ease-out group-hover:text-white">Our Mission</h3>
                    <p className="text-secondary/80 leading-relaxed transition-colors duration-500 ease-out group-hover:text-white/85">
                        To ignite profound personal growth by delivering targeted trainings, transformative relationship sessions, and life-changing workshops that equip individuals and families with clarity, purpose, and practical tools for intentional living.
                    </p>
                </div>

                {/* Vision Card */}
                <div className="relative bg-[#E2C7DE]/60 p-10 md:p-12 rounded-[40px] rounded-br-none pt-16 mt-8 group transition-all duration-500 ease-out hover:bg-gradient-to-br hover:from-[#3F2139] hover:via-[#4A2840] hover:to-[#2D1A28] hover:shadow-[0_20px_60px_-15px_rgba(63,33,57,0.5)] cursor-pointer overflow-visible">
                    {/* Icon with Soft Glow */}
                    <div className="absolute -top-10 left-10 w-20 h-20 bg-[#3F2139] rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ease-out group-hover:shadow-[0_0_40px_rgba(138,74,118,0.7)] group-hover:scale-105 z-10">
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-secondary mb-4 font-bricolage transition-colors duration-500 ease-out group-hover:text-white">Our Vision</h3>
                    <p className="text-secondary/80 leading-relaxed transition-colors duration-500 ease-out group-hover:text-white/85">
                        To build a generation of spiritually grounded individuals and families who live with clarity, purpose, and wholeness transformed by truth, strengthened by faith, and guided by divine wisdom.
                    </p>
                </div>

            </div>
        </section>

        {/* Banner Section */}
        <Banner />

      </main>
    </>
  );
}
