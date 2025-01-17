import React from 'react';
import { Button } from '@components/ui/Button/Button';

const categories = [
  {
    name: "Concrete Forms",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Rebar & Mesh",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Waterproofing",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Insulation",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Masonry",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Tools",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Safety Equipment",
    image: "https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=60",
  }
];

export const Categories = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-h4 md:text-h3 text-primary">Popular Categories</h2>
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
    </section>
  );
};