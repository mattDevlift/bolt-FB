export type Category = string;

export type SortOption = {
  label: string;
  value: string;
};

export interface CategoryGridProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  getCategoryCount: (category: string) => number;
  totalItems: number;
  allItemsLabel?: string;
  sortOptions: SortOption[];
  selectedSort: string;
  onSortChange: (value: string) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
}