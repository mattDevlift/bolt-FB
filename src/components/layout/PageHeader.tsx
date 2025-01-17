import React from 'react';
import { Button } from '@components/ui/Button/Button';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  action
}) => {
  return (
    <div className="w-full py-8 md:py-12 bg-neutral-background">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-h3 md:text-h2 text-primary mb-2">{title}</h1>
            {subtitle && (
              <p className="text-lg text-text-secondary">{subtitle}</p>
            )}
          </div>
          {action && (
            <div className="mt-4 md:mt-0">
              <Button
                variant="secondary"
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};