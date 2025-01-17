import { cva } from 'class-variance-authority';

export const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-neutral-white hover:bg-primary-hover active:bg-primary-active',
        secondary: 'bg-secondary text-primary hover:bg-secondary-hover active:bg-secondary-active',
        outline: 'border-2 border-neutral-stroke bg-transparent hover:bg-neutral-stroke/10 active:bg-neutral-stroke/20',
        ghost: 'bg-transparent hover:bg-neutral-stroke/10 active:bg-neutral-stroke/20',
      },
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);