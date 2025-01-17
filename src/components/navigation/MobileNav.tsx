import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@components/ui/IconButton/IconButton';
import { Button } from '@components/ui/Button/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleBookDemo = () => {
    navigate('/book-demo');
    onClose();
  };

  return (
    <div 
      className={`
        fixed inset-0 bg-primary z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-primary/60" />
            </div>
            <input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-full text-primary placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          
          <IconButton
            icon={X}
            variant="ghost"
            size="sm"
            className="text-white hover:text-secondary ml-4"
            onClick={onClose}
            aria-label="Close menu"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-6 py-8">
          <div className="space-y-6">
            <Link 
              to="/products" 
              className="block text-xl font-medium text-white hover:text-secondary transition-colors"
              onClick={onClose}
            >
              All Products
            </Link>
            <Link 
              to="/resources" 
              className="block text-xl font-medium text-white hover:text-secondary transition-colors"
              onClick={onClose}
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className="block text-xl font-medium text-white hover:text-secondary transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-xl font-medium text-white hover:text-secondary transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Footer Actions */}
        <div className="p-6 space-y-4">
          <Button 
            variant="secondary" 
            size="large" 
            className="w-full"
            onClick={handleBookDemo}
          >
            Book Demo
          </Button>
          <div className="flex justify-between">
            <Link 
              to="/blog" 
              className="text-white/80 hover:text-white transition-colors"
              onClick={onClose}
            >
              Blog
            </Link>
            <Link 
              to="/credit-services" 
              className="text-white/80 hover:text-white transition-colors"
              onClick={onClose}
            >
              Credit Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};