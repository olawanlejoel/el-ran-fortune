import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { Mail, Phone } from 'lucide-react'; // Removed unused import causing error

const Footer = () => {
  return (
    <footer className="w-full bg-[#F9F5FF]">
       {/* Rounded Container */}
      <div className="w-full bg-[#F3EBFF] rounded-tl-[5rem] rounded-tr-[5rem] pt-16 pb-16 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
            
            {/* Left Side: Logo & Tagline */}
            <div className="flex flex-col items-start gap-4 max-w-sm">
               <div className="flex items-center gap-2 mb-2">
                    <img 
                        src="/images/logo.png" 
                        alt="El-Ran Logo" 
                        className="h-12 w-auto object-contain"
                    />
               </div>
               <p className="text-secondary/80 font-medium text-sm">
                 Faith-driven growth for intentional living.
               </p>
            </div>
            
            {/* Right Side: Links (Navigation, Socials, Contact) */}
            <div className="w-full md:w-auto grid grid-cols-2 md:flex md:flex-row gap-y-10 gap-x-4 md:gap-20">
                {/* Navigation */}
                <div>
                  <h4 className="font-bold text-secondary mb-6 text-base">Quick Links</h4>
                  <ul className="space-y-3 text-secondary/70 font-medium text-sm">
                    <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Books</Link></li>
                    <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                  </ul>
                </div>
                
                {/* Socials */}
                <div>
                  <h4 className="font-bold text-secondary mb-6 text-base">Socials</h4>
                  <ul className="space-y-3 text-secondary/70 font-medium text-sm">
                    <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
                  </ul>
                </div>
                
                {/* Contact Us */}
                <div>
                  <h4 className="font-bold text-secondary mb-6 text-base">Contact Us</h4>
                  <div className="space-y-4 text-secondary/70 font-medium text-sm">
                    <a href="mailto:theransomrendezvous@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary group-hover:text-primary">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                       <span>theransomrendezvous@gmail.com</span>
                    </a>
                    <a href="tel:08032388802" className="flex items-center gap-3 hover:text-primary transition-colors group">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary group-hover:text-primary">
                            <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.4019C21.1469 21.5901 20.9046 21.733 20.6407 21.8212C20.3769 21.9095 20.0974 21.9412 19.82 21.914C16.7429 21.5799 13.7848 20.6973 11.09 19.3C8.59868 17.9946 6.38139 16.1423 4.56002 13.9C3.15392 11.2001 2.26941 8.24357 1.93002 5.18C1.90279 4.90159 1.93457 4.62121 2.02293 4.35649C2.11129 4.09176 2.25414 3.84883 2.44203 3.64388C2.62991 3.43892 2.85848 3.27663 3.11308 3.16781C3.36768 3.05899 3.64251 3.0062 3.92002 3.012H6.92002C7.40698 3.00767 7.87893 3.18182 8.24838 3.49755C8.61782 3.81329 8.86177 4.25055 8.93002 4.73C9.05615 5.68822 9.29023 6.6295 9.63002 7.53C9.76631 7.88763 9.79469 8.27606 9.71185 8.64993C9.62901 9.02381 9.43836 9.36766 9.16202 9.642L7.89002 10.914C9.30908 13.4357 11.3783 15.5049 13.9 16.924L15.17 15.652C15.4443 15.3756 15.7882 15.185 16.1621 15.1021C16.536 15.0193 16.9244 15.0477 17.282 15.184C18.1825 15.5237 19.1238 15.7578 20.082 15.884C20.5638 15.9525 21.0029 16.1983 21.3191 16.5703C21.6354 16.9423 21.8087 17.4172 21.802 17.906L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>08032388802</span>
                    </a>
                  </div>
                </div>
            </div>
            
        </div>
        
        {/* Divider & Copyright */}
        <div className="max-w-[1400px] mx-auto border-t border-[#81727E] pt-8 text-center text-sm text-secondary/60">
            © {new Date().getFullYear()} EL-RAN Transformational Rendezvous. All rights reserved. Privacy Policy | Terms of Use
        </div>
      </div>
    </footer>
  );
};

export default Footer;
