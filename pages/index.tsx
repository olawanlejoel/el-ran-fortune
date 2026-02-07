import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Commitment from "@/components/Commitment";
import Books from "@/components/Books";
import FeaturedBooks from "@/components/FeaturedBooks";
import BookReviews from "@/components/BookReviews";
import Banner from "@/components/Banner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Head>
        <title>EL-RAN Transformational Rendezvous | Faith-Driven Growth & Purpose</title>
        <meta 
          name="description" 
          content="EL-RAN Transformational Rendezvous stewards growth with integrity, intention, and faith. Explore our library of faith-rooted writings and transformational resources for intentional living." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="EL-RAN Transformational Rendezvous | Faith-Driven Growth" />
        <meta property="og:description" content="Steward your growth with integrity, intention, and faith. Explore transformational resources for purpose-driven living." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        {/* <meta property="og:image" content="/images/og-image.png" /> */}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EL-RAN Transformational Rendezvous" />
        <meta name="twitter:description" content="Faith-driven growth for intentional living. Explore our library and transformational resources." />
        {/* <meta name="twitter:image" content="/images/og-image.png" /> */}
        
        {/* Additional SEO */}
        <meta name="author" content="Ransom John" />
        <meta name="keywords" content="faith, growth, transformation, purpose-driven, intentional living, books, mentorship, Christian resources" />
        <link rel="canonical" href="" />
      </Head>
     <div className="bg-background overflow-hidden">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        
        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        <ScrollReveal>
          <Commitment />
        </ScrollReveal>

        {/* <ScrollReveal>
          <Books />
        </ScrollReveal> */}
        
        <ScrollReveal>
          <FeaturedBooks />
        </ScrollReveal>
        
        <ScrollReveal>
          <BookReviews />
        </ScrollReveal>

        <ScrollReveal overflow="visible">
          <Banner />
        </ScrollReveal>
      </div>
    </>
  );
}
