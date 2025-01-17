import React from 'react';
import { ProductsHeaderProps } from './ProductsHeader.types';

export const ProductsHeader: React.FC<ProductsHeaderProps> = ({ title }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[286px] rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Title */}
          <div className="w-full md:w-[35%] bg-primary flex items-center p-8 md:p-12">
            <h1 className="text-h3 md:text-h2 text-white">
              {title}
            </h1>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-[65%] h-full">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=2000&auto=format&fit=crop&q=80"
              alt="Industrial warehouse"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};