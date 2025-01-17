import React from 'react';
import { Button } from '@components/ui/Button/Button';

interface FooterCTAProps {
  heading: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({
  heading = "Serving you with 6 branches across Ontario!",
  description = "With six branches across Southwestern Ontario, and delivery across the region, we're ready and able to help you with whatever your job needs are.",
  buttonText = "Contact Us",
  onButtonClick,
}) => {
  return (
    <div className="relative -translate-y-1/4 md:-translate-y-1/2">
      <div className="bg-secondary rounded-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-h4 text-primary mb-4">
              {heading}
            </h2>
            <p className="text-lg text-primary/80">
              {description}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button 
              variant="primary" 
              size="large"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};