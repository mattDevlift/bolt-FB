import React from 'react';
import { Link } from 'react-router-dom';

export const TopNav = () => {
  return (
    <nav className="hidden md:block w-full bg-primary text-text-alt py-2 px-4">
      <div className="max-w-[1440px] mx-auto flex justify-end items-center space-x-8">
        <Link to="/blog" className="text-sm hover:text-secondary transition-colors">
          Blog
        </Link>
        <Link to="/credit-services" className="text-sm hover:text-secondary transition-colors">
          Credit Services
        </Link>
        <Link to="/book-demo" className="text-sm text-secondary hover:text-secondary/80 transition-colors">
          Book A Demo
        </Link>
      </div>
    </nav>
  );
};