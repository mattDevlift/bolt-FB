export interface ProductCategory {
  id: number;
  title: string;
  image: string;
}

export interface ProductsCategoryGridProps {
  categories: ProductCategory[];
}