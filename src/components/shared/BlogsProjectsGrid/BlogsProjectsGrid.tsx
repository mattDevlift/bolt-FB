import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@components/ui/Button/Button';
import { BlogsProjectsGridProps } from './BlogsProjectsGrid.types';

export const BlogsProjectsGrid: React.FC<BlogsProjectsGridProps> = ({
  items,
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemClick,
}) => {
  // Calculate pagination
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedItems.map((item) => (
          <article 
            key={item.id}
            className="bg-white rounded-lg overflow-hidden border border-neutral-stroke hover:shadow-lg transition-shadow min-h-[609px] flex flex-col"
          >
            <div className="h-[325px] relative border-b-4 border-secondary">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <span className="px-4 py-1 rounded-full bg-neutral-background text-primary text-sm font-medium">
                  {item.category}
                </span>
              </div>
              <h3 className="text-[22px] font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-secondary text-[16px] mb-4">
                {item.date}
              </p>
              <p className="text-[16px] text-text-secondary mb-4">
                {item.excerpt}
              </p>
              <div className="mt-auto">
                <Button 
                  variant="secondary"
                  size="small"
                  className="w-[140px] text-center"
                  onClick={() => onItemClick(item.id)}
                >
                  Read More
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-hover transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                currentPage === index + 1
                  ? 'bg-secondary text-primary'
                  : 'border border-neutral-stroke hover:bg-neutral-background text-primary'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-hover transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
};