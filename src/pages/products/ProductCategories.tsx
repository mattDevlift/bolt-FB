import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductsHeader } from '@components/products/ProductsHeader';
import { Button } from '@components/ui/Button/Button';
import { Filter, ArrowUpDown } from 'lucide-react';
import { ProductsCategoryGrid } from '@components/products/ProductsCategoryGrid';

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Concrete Form",
    category: "Concrete Forms",
    description: "High-quality concrete form for professional construction projects",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Steel Form Panel",
    category: "Concrete Forms",
    description: "Durable steel form panel for precise concrete shaping",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Form Release Agent",
    category: "Concrete Forms",
    description: "Professional-grade form release agent for clean removal",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60"
  },
  // Add more mock products as needed
];

export const ProductCategories = () => {
  const { category } = useParams();
  const decodedCategory = category ? decodeURIComponent(category) : '';
  const categoryProducts = products.filter(product => product.category === decodedCategory);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-8">
      <ProductsHeader title={decodedCategory} />
      
      <div className="py-8">
        {/* Product Grid */}
        <ProductsCategoryGrid categories={products} />
      </div>
    </div>
  );
};