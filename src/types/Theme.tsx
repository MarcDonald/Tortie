import { BreakpointTypes } from './Breakpoints';
import PaletteColor from './PaletteColor';

export interface Theme {
  dimensions: DimensionsValues;
  typography: TypographyValues;
  breakpoints: BreakpointTypes<string | number>;
  palette: Palette;
}

export interface DimensionsValues {
  phone: BreakpointDimensionValues;
  tablet: BreakpointDimensionValues;
  laptop: BreakpointDimensionValues;
  desktop: BreakpointDimensionValues;
  largeDesktop: BreakpointDimensionValues;
}

export interface BreakpointDimensionValues {
  cornerRadius: CornerRadiusValues;
  spacing: SpacingValues;
  maxPageWidth: CssSizeValue;
}

export interface CornerRadiusValues {
  small: CssSizeValue;
  medium: CssSizeValue;
  large: CssSizeValue;
  round: CssSizeValue;
}

export interface TypographyValues {
  weights: FontWeightValues;
  sizes: FontSizeValues;
}

export interface FontSizeValues {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}

export interface FontWeightValues {
  thin: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
}

export interface SpacingValues {
  1: CssSizeValue;
  2: CssSizeValue;
  3: CssSizeValue;
  4: CssSizeValue;
  5: CssSizeValue;
  6: CssSizeValue;
  7: CssSizeValue;
  8: CssSizeValue;
  9: CssSizeValue;
  10: CssSizeValue;
}

export interface Palette {
  core: CorePalette;
  typography: TypographyPalette;
  base: BaseColorPalette;
}

export interface CorePalette {
  primary: PaletteColor;
  secondary: PaletteColor;
  tertiary: PaletteColor;
  background: PaletteColor;
  surface: PaletteColor;
  success: PaletteColor;
  error: PaletteColor;
}

export interface TypographyPalette {
  onPrimary: PaletteColor;
  onSecondary: PaletteColor;
  onTertiary: PaletteColor;
  onBackground: PaletteColor;
  onSurface: PaletteColor;
  onSuccess: PaletteColor;
  onError: PaletteColor;
}

export interface BaseColorPalette {
  gray: PaletteColor;
  red: PaletteColor;
  green: PaletteColor;
  blue: PaletteColor;
  white: PaletteColor;
  black: PaletteColor;
}

export type ColorType = keyof Palette;
export type CoreColor = keyof CorePalette;
export type TypographyColor = keyof TypographyPalette;
export type BaseColor = keyof BaseColorPalette;
export type Spacing = keyof SpacingValues;
export type CornerRadius = keyof CornerRadiusValues;
export type Typography = keyof TypographyValues;
export type Dimensions = keyof DimensionsValues;
export type BreakpointDimensions = keyof BreakpointDimensionValues;
export type FontSize = keyof FontSizeValues;
export type FontWeight = keyof FontWeightValues;
export type CssSizeValue = string | number;
