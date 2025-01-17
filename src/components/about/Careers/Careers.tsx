import React from 'react';
import { Button } from '@components/ui/Button/Button';

export const Careers = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden min-h-[406px]">
        {/* Left Side - Content */}
        <div className="bg-primary p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
          <h2 className="text-h3 text-white mb-6">
            Curious about career opportunities with us?
          </h2>
          <p className="text-[20px] text-white/90 mb-10">
            Join our team of passionate professionals dedicated to excellence in construction supply.  We offer competitive benefits, and ongoing training.
          </p>
          <Button 
            variant="secondary" 
            size="large"
            className="w-fit"
          >
            View Job Openings
          </Button>
        </div>

        {/* Right Side - Image */}
        <div className="h-full">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60"
            alt="Two construction professionals collaborating on site"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};