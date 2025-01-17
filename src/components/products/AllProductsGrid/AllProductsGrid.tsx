import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/ui/Button/Button';
import { AllProductsGridProps } from './AllProductsGrid.types';

export const AllProductsGrid: React.FC<AllProductsGridProps> = ({ categories }) => {
  const navigate = useNavigate();

  const handleViewProducts = (categoryTitle: string) => {
    navigate(`/products/category/${encodeURIComponent(categoryTitle)}`);
  };

  return (
    <>
      <div className="mb-6">
        <span className="text-[16px] text-text-secondary">
          {categories.length} Categories
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="lg:h-[255px] rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left side - Image */}
            <div className="w-full md:w-[35%] h-[255px] md:h-full">
              <img 
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="w-full md:w-[65%] bg-primary p-8 md:p-12 flex flex-col justify-between">
              <h2 className="text-[32px] font-bold text-white mb-6">
                {category.title}
              </h2>
              <div>
                <Button 
                  variant="secondary"
                  size="large"
                  className="text-[16px]"
                  onClick={() => handleViewProducts(category.title)}
                >
                  View Products
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};