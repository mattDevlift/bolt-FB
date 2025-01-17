import React from 'react';
import { TopNav } from '@components/navigation/TopNav';
import { MainNav } from '@components/navigation/MainNav';
import { Footer } from '@components/footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <MainNav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};