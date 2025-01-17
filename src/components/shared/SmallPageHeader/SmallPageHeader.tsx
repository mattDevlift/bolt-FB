import React from 'react';
import { cn } from '@/utils/cn';
import { SectionHeader } from '@components/shared/SectionHeader';

interface SmallPageHeaderProps {
  title: string;
  accentText?: string;
  backgroundImage?: string;
  className?: string;
}

export const SmallPageHeader: React.FC<SmallPageHeaderProps> = ({
  title,
  accentText,
  backgroundImage = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=2000&auto=format&fit=crop&q=80",
  className,
}) => {
  return (
    <div 
      className={cn(
        "w-full h-[290px] relative flex items-center p-10 justify-start",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <SectionHeader 
          title={title}
          accentText={accentText}
          titleColor="text-white"
          accentTextColor="text-white"
        />
      </div>
    </div>
  );
};