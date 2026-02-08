import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle Scroll Direction (Show/Hide)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scroll Down -> Hide
      } else {
        setIsVisible(true); // Scroll Up -> Show
      }
      
      // Handle Background Change
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex justify-between items-center relative z-50">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.webp" 
            alt="El-Ran Logo" 
            width={100} 
            height={32} 
            className="object-contain h-10 w-auto"
            priority
          />
          <span className="sr-only font-bricolage text-2xl font-bold text-primary">El-Ran Fortune</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center font-medium text-[14px]">
          <NavLink href="/" text="Home" isActive={router.pathname === '/'} />
          <NavLink href="/about" text="About" isActive={router.pathname === '/about'} />
          <NavLink href="/books" text="Books" isActive={router.pathname === '/books'} />
          <NavLink href="/contact" text="Contact" isActive={router.pathname === '/contact'} />
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-sm">
            Get in touch
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
            className="md:hidden p-2 text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            <div className="relative w-6 h-5">
                <span className={`absolute left-0 top-0 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2.5' : ''}`} />
                <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 top-4 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2.5' : ''}`} />
            </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 top-[70px] z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center pt-10 px-6 h-[calc(100vh-70px)]"
            >
                <div className="flex flex-col gap-6 w-full items-center mt-10">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About', href: '/about' },
                        { name: 'Books', href: '/books' },
                        { name: 'Contact', href: '/contact' }
                    ].map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full text-center"
                        >
                            <Link 
                                href={item.href} 
                                className={`text-lg font-medium block py-2 transition-colors ${
                                    router.pathname === item.href 
                                    ? 'text-primary font-bold' 
                                    : 'text-secondary/80 hover:text-primary'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                    
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 w-full flex justify-center"
                    >
                         <button className="w-full max-w-[200px] bg-primary text-white px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-sm">
                            Get in touch
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper component for Nav Links with the specific underline style
const NavLink = ({ href, text, isActive = false }: { href: string, text: string, isActive?: boolean }) => {
  return (
    <Link href={href} className="relative group">
      <span className={`transition-colors duration-300 ${isActive ? 'text-black font-semibold' : 'text-black/80 group-hover:text-black'}`}>
        {text}
      </span>
      <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-[3px] bg-gradient-to-r from-[#3F2139E5] to-[#A55695CC] rounded-full transition-all duration-300 ease-in-out
        ${isActive ? 'w-[120%]' : 'w-0 group-hover:w-[120%]'}`}
      ></span>
    </Link>
  );
};

export default Navbar;
