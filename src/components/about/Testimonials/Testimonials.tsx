import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@components/shared/SectionHeader';
import { IconButton } from '@components/ui/IconButton/IconButton';

const testimonials = [
  {
    text: "Form & Build Supply has been instrumental in the success of our projects. Their extensive product range and expert advice have made them our go-to supplier for all construction needs.",
    author: "Michael Anderson",
    role: "Project Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
  },
  {
    text: "The quality of service and products we receive from Form & Build is consistently outstanding. Their team's knowledge and dedication to customer satisfaction is unmatched.",
    author: "Sarah Mitchell",
    role: "Construction Supervisor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
  },
  {
    text: "Working with Form & Build has streamlined our procurement process significantly. Their reliable delivery and competitive pricing have made them an invaluable partner.",
    author: "David Thompson",
    role: "Site Manager",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=60"
  },
  {
    text: "The technical expertise and support from Form & Build's team have been exceptional. They've helped us overcome numerous challenges with innovative solutions.",
    author: "Jennifer Parker",
    role: "Operations Director",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&auto=format&fit=crop&q=60"
  }
];

export const Testimonials = () => {
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
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          title="TESTIMONIALS"
          accentText="What Our Customers Are Saying"
          titleColor="text-[#E0AD4F]"
          accentTextColor="text-white"
        />

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10">
            <IconButton
              icon={ChevronLeft}
              variant="ghost"
              size="lg"
              onClick={() => scroll('left')}
              aria-label="Previous testimonial"
              className="shadow-lg bg-white text-primary hover:bg-white/90"
            />
          </div>

          {/* Testimonials Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-1"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-none w-full md:w-[calc(50%-12px)] snap-start"
              >
                <div className="bg-white rounded-lg p-8 h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className="h-5 w-5 fill-[#E0AD4F] text-[#E0AD4F]"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[18px] text-primary mb-8 min-h-[108px]">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-[16px] font-semibold text-primary">
                        {testimonial.author}
                      </h4>
                      <p className="text-[14px] text-text-secondary">
                        {testimonial.role}
                      </p>
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
              aria-label="Next testimonial"
              className="shadow-lg bg-white text-primary hover:bg-white/90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};