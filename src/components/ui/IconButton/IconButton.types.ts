import { LucideIcon } from 'lucide-react';

export type IconButtonVariant = 
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost';

export type IconButtonSize = 
  | 'sm'    // 32px
  | 'md'    // 40px
  | 'lg';   // 48px

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
}