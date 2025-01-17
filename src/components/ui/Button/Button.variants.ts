import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-active disabled:bg-gray-400',
        secondary: 'bg-secondary text-primary hover:bg-secondary-hover active:bg-secondary-active disabled:bg-secondary-disabled',
        'primary-outline': 'border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/20 disabled:border-gray-300 disabled:text-gray-300',
        'secondary-outline': 'border-2 border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/20 disabled:border-secondary-disabled disabled:text-secondary-disabled',
        alt: 'bg-gray-200 text-primary hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:text-gray-400',
        'alt-icon': 'bg-gray-200 text-primary hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:text-gray-400',
      },
      size: {
        small: 'text-sm px-4 py-2',
        medium: 'text-base px-6 py-2.5',
        large: 'text-lg px-8 py-3',
      },
      disabled: {
        true: 'cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      disabled: false,
    },
  }
);