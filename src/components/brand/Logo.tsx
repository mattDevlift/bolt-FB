import React from 'react';
import { LogoSvg } from './LogoSvg';
import { cn } from '@/utils/cn';

type LogoVariant = 'icon' | 'full' | 'horizontal';

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  alt?: string;
};

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'horizontal',
  className = '',
  alt = 'Form & Build Supply Logo'
}) => {
  return (
    <LogoSvg 
      className={cn('text-primary', className)}
      aria-label={alt}
    />
  );
};