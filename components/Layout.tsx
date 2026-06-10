import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PromoModal from './PromoModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {/* <PromoModal /> */}
    </div>
  );
};

export default Layout;
