import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/ui/Button/Button';
import { ProductsCategoryGridProps } from './ProductsCategoryGrid.types';

export const ProductsCategoryGrid: React.FC<ProductsCategoryGridProps> = ({ categories }) => {
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
      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="h-[342px] rounded-lg overflow-hidden"
          >
            <div className="h-[202px]">
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[140px] bg-primary p-8 flex flex-col justify-between">
              <h3 className="text-[18px] text-white">{category.name}</h3>
              <div>
                <Button 
                  variant="secondary" 
                  size="small"
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