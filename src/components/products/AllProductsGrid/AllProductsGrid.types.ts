export interface ProductCategory {
  id: number;
  title: string;
  image: string;
}

export interface AllProductsGridProps {
  categories: ProductCategory[];
}