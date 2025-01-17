import React from 'react';
import { Button } from '@components/ui/Button/Button';

export const Banner = () => {
  return (
    <div className="pl-0 pr-4 py-4">
      <div className="relative w-full min-h-[400px] md:min-h-[600px] overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 rounded-2xl ml-4"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1
          }}
        />

        {/* Content Container */}
        <div className="absolute start-0 max-w-[1440px] mx-auto px-0 py-12 md:py-24 hidden md:flex items-center min-h-[400px] md:min-h-[600px]">
          <div className="bg-[#0A1A3B] rounded-r-lg p-6 md:p-12 max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-4 md:mb-6">
              Your <span className="text-[#E0AD4F]">Expert Supplier</span>
              <br />In Concrete Products
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-6 md:mb-8 max-w-xl">
              With over 7,000 products - Form & Build is sure to have everything you need to get the job done, when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                variant="secondary" 
                size="large"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-[#E0AD4F] text-[#0A1A3B] hover:bg-[#E0AD4F]/90 text-sm md:text-base"
              >
                View Products
              </Button>
              <Button 
                variant="primary-outline" 
                size="large"
                className="px-6 md:px-8 py-2.5 md:py-3 border-[#E0AD4F] text-[#E0AD4F] hover:bg-[#E0AD4F]/10 text-sm md:text-base"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};