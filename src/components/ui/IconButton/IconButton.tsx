import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { IconButtonProps } from './IconButton.types';
import { iconButtonVariants } from './IconButton.variants';

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    className,
    icon: Icon,
    variant = 'primary',
    size = 'md',
    disabled = false,
    isLoading = false,
    ...props
  }, ref) => {
    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
    };

    return (
      <button
        className={cn(
          iconButtonVariants({ variant, size }),
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <Loader2 
            className="animate-spin"
            size={iconSizes[size]}
          />
        ) : (
          <Icon size={iconSizes[size]} />
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';