import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@components/ui/Button/Button';
import { IconButton } from '@components/ui/IconButton/IconButton';

interface FeaturedProductsProps {
  backgroundColor?: string;
  hideViewAll?: boolean;
  titleColor?: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  backgroundColor = '#151545', // Default to primary blue
  hideViewAll = false,
  titleColor = '#FFFFFF' // Default to white
}) => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      const newScrollLeft = container.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-h4 md:text-h3" style={{ color: titleColor }}>Featured Products</h2>
          {!hideViewAll && (
            <Button 
              variant="secondary" 
              size="large"
              className="bg-secondary text-primary hover:bg-secondary/90 w-full sm:w-auto"
              onClick={() => navigate('/products')}
            >
              View All Products
            </Button>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10">
            <IconButton
              icon={ChevronLeft}
              variant="ghost"
              size="lg"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="shadow-lg bg-white text-primary hover:bg-white/90"
            />
          </div>

          {/* Products Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] snap-start"
              >
                <div className="bg-white rounded-lg overflow-hidden border border-neutral-stroke hover:shadow-lg transition-shadow h-[342px] flex flex-col">
                  <div className="h-[205px] relative">
                    <img 
                      src={`https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&auto=format&fit=crop&q=60`}
                      alt={`Featured product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-[18px] text-primary truncate">Featured Product {index + 1}</h3>
                    <div className="flex justify-between items-center mt-auto">
                      <Button 
                        variant="primary" 
                        size="small"
                        className="bg-secondary hover:bg-secondary/90 text-primary"
                      >
                        Add to Quote
                      </Button>
                      <Button
                        variant="primary"
                        size="small"
                        className="bg-neutral-stroke hover:bg-neutral-stroke/90 text-primary inline-flex items-center gap-1"
                      >
                        View
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10">
            <IconButton
              icon={ChevronRight}
              variant="ghost"
              size="lg"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="shadow-lg bg-white text-primary hover:bg-white/90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};