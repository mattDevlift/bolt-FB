export type ButtonVariant = 
  | 'primary'
  | 'secondary'
  | 'primary-outline'
  | 'secondary-outline'
  | 'alt'
  | 'alt-icon';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withIcon?: boolean;
  disabled?: boolean;
}