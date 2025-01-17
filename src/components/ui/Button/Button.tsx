import React from 'react';
import { cn } from '../../../utils/cn';
import { ChevronRight } from 'lucide-react';
import { ButtonProps } from './Button.types';
import { buttonVariants } from './Button.variants';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant = 'primary',
    size = 'medium',
    withIcon = false,
    disabled = false,
    children,
    ...props
  }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, disabled }),
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
        {withIcon && (
          <ChevronRight className="ml-2 h-4 w-4" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';