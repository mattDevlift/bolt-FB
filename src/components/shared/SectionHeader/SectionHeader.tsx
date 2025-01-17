import React from 'react';
import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  title: string;
  accentText?: string;
  titleColor: string;
  accentTextColor: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  accentText,
  titleColor,
  accentTextColor,
}) => {
  return (
    <div className="text-left mb-12">
      <h3 className={cn(
        "text-[20px] font-semibold uppercase mb-2",
        titleColor
      )}>
        {title}
      </h3>
      {accentText && (
        <h2 className={cn(
          "text-h2",
          accentTextColor
        )}>
          {accentText}
        </h2>
      )}
    </div>
  );
};