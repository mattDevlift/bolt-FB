import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@components/ui/Button/Button';
import { CategoryGridProps } from './CategoryGrid.types';

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  getCategoryCount,
  totalItems,
  allItemsLabel = 'All Items',
  sortOptions,
  selectedSort,
  onSortChange,
  showFilters,
  onToggleFilters,
}) => {
  return (
    <div>
      {/* Controls Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <Button 
          variant="alt" 
          className="gap-2"
          onClick={onToggleFilters}
        >
          <Filter className="h-4 w-4" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-text-secondary">
            Sort By:
          </label>
          <select
            id="sort"
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 rounded-md border border-neutral-stroke bg-neutral-background text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Grid */}
      {showFilters && (
        <div className="flex flex-wrap gap-4 mb-8">
          {/* All Items Button */}
          <button
            onClick={() => onCategorySelect(null)}
            className={`w-[295px] h-[70px] rounded-lg text-[18px] font-medium transition-colors flex items-center justify-between px-6 ${
              selectedCategory === null
                ? 'bg-secondary text-primary'
                : 'bg-neutral-background text-text-secondary hover:bg-neutral-stroke'
            }`}
          >
            <span>{allItemsLabel}</span>
            <div className="flex items-center justify-center bg-[#E0AD4F] rounded-full w-8 h-8">
              <span className="text-primary text-[14px] font-semibold">
                {totalItems}
              </span>
            </div>
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`w-[295px] h-[70px] rounded-lg text-[18px] font-medium transition-colors flex items-center justify-between px-6 ${
                selectedCategory === category
                  ? 'bg-secondary text-primary'
                  : 'bg-neutral-background text-text-secondary hover:bg-neutral-stroke'
              }`}
            >
              <span>{category}</span>
              <div className="flex items-center justify-center bg-[#E0AD4F] rounded-full w-8 h-8">
                <span className="text-primary text-[14px] font-semibold">
                  {getCategoryCount(category)}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};