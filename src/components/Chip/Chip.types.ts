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
    backgroundColor: string;
    hoverColor: string;
    borderColor: string;
    textColor: string;
  };
}
