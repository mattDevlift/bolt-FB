import React, { useState } from 'react';
import { ClipboardList, Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '@components/brand/Logo';
import { IconButton } from '@components/ui/IconButton/IconButton';
import { MobileNav } from './MobileNav';

export const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-neutral-white border-b border-neutral-stroke">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <IconButton
                icon={Menu}
                variant="ghost"
                size="sm"
                className="text-primary hover:text-secondary mr-4"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              />
            </div>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo variant="horizontal" className="w-[215px]" />
            </Link>

            {/* Right Side Content */}
            <div className="flex items-center justify-end flex-1 space-x-12">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-12">
                <Link to="/products" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                  All Products
                </Link>
                <Link to="/resources" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                  Resources
                </Link>
                <Link to="/about" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                  Contact
                </Link>
              </div>

              {/* Actions */}
              <div className="flex items-center">
                {/* Search - Desktop Only */}
                <div className="hidden md:block bg-neutral-background rounded-full mr-4">
                  <IconButton
                    icon={Search}
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-secondary"
                    aria-label="Search"
                  />
                </div>
                
                {/* Orders */}
                <div className="relative bg-neutral-background rounded-full">
                  <span className="absolute -top-1 -left-1 bg-secondary text-primary text-[9px] font-semibold rounded-full w-[18px] h-[18px] flex items-center justify-center z-10">
                    22
                  </span>
                  <IconButton
                    icon={ClipboardList}
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-secondary"
                    aria-label="Orders"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};