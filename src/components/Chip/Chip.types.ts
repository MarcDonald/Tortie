export type ChipVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'negative'
  | 'positive';

export default interface ChipTypes {
  text?: string;
  variant?: ChipVariant;
  colors?: {
    backgroundColor?: string;
    foregroundColor?: string;
    textColor?: string;
  };
  disabled?: boolean;
}
