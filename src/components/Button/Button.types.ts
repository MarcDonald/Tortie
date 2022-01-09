export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export default interface ButtonTypes {
  text: string;
  onClick: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
}
