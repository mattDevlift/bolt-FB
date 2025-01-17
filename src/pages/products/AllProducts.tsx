import React from 'react';
import { ProductsHeader } from '@components/products/ProductsHeader';
import { AllProductsGrid } from '@components/products/AllProductsGrid';
import type { ProductCategory } from '@components/products/AllProductsGrid';

// Mock data for product categories
const productCategories: ProductCategory[] = [
  {
    id: 1,
    title: "Concrete Forms",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Rebar & Mesh",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Waterproofing",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Insulation",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Masonry",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Tools",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    title: "Safety Equipment",
    image: "https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=60",
  }
];

export const AllProducts = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-8">
        <ProductsHeader title="All Products" />
        <div className="py-8">
          <AllProductsGrid categories={productCategories} />
        </div>
      </div>
    </>
  );
};