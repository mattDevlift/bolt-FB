import React from 'react';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Ask An Expert",
    description: "From foundation to finishing touches, our comprehensive construction services deliver excellence at every stage.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Credit Services",
    description: "Our engineering solutions combine technical expertise with practical know-how.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop&q=60"
  }
];

export const Services = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="w-full min-h-[508px] bg-primary rounded-lg overflow-hidden"
          >
            <div className="h-[318px]">
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-[24px] font-semibold text-secondary">
                  {service.title}
                </h3>
                <div className="bg-secondary rounded-full p-1">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-[18px] text-white leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};