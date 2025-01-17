import React from 'react';
import { Button } from '@components/ui/Button/Button';

const supplierLogos = [
  {
    name: "Hilti",
    logo: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "DeWalt",
    logo: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Milwaukee",
    logo: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Makita",
    logo: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Bosch",
    logo: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Stanley",
    logo: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Black & Decker",
    logo: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Ridgid",
    logo: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Craftsman",
    logo: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Ryobi",
    logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Klein Tools",
    logo: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Snap-on",
    logo: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop&q=60"
  }
];

export const Suppliers = () => {
  return (
    <section className="bg-neutral-background">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <h2 className="text-h4 md:text-h3 text-primary">
            Trusted Suppliers
          </h2>
          <Button 
            variant="secondary" 
            size="large"
          >
            All Suppliers
          </Button>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {supplierLogos.map((supplier, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg w-full h-[120px] flex items-center justify-center p-6"
            >
              <img 
                src={supplier.logo}
                alt={supplier.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};