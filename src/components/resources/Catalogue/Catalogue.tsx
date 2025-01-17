import React from 'react';
import { Button } from '@components/ui/Button/Button';

export const Catalogue = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16">
      {/* Line Card Row */}
      <div className="flex flex-col md:flex-row items-center border-b border-neutral-stroke pb-16 mb-16">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[32px] font-bold text-primary mb-8">Line Card Product Catalogue</h2>
          <Button 
            variant="secondary" 
            size="large"
            className="w-full md:w-auto"
          >
            Download PDF
          </Button>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=800&auto=format&fit=crop&q=60"
            alt="Line Card Product Catalogue"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Sealer Row */}
      <div className="flex flex-col md:flex-row items-center border-b border-neutral-stroke pb-16">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[32px] font-bold text-primary mb-8">Sealer Product Catalogue</h2>
          <Button 
            variant="secondary" 
            size="large"
            className="w-full md:w-auto"
          >
            Download PDF
          </Button>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60"
            alt="Sealer Product Catalogue"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};