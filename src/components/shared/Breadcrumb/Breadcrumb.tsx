import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  title: string;
  basePath: string;
  baseLabel: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  title,
  basePath,
  baseLabel
}) => {
  return (
    <div className="w-full h-[40px] bg-neutral-background">
      <div className="max-w-[1440px] mx-auto px-4 h-full flex items-center">
        <div className="flex items-center text-[14px] text-text-secondary">
          <Link to={basePath} className="hover:text-secondary transition-colors">
            {baseLabel}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-primary font-medium truncate max-w-[300px]">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};