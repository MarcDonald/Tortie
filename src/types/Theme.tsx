import { BreakpointTypes } from '../styles';
import { validateRange } from '../utils';

type CssSizeValue = string | number;

export interface Dimensions {
  cornerRadius: {
    small: CssSizeValue;
    medium: CssSizeValue;
    large: CssSizeValue;
    round: CssSizeValue;
  };
  spacing: Spacing;
  maxPageWidth: CssSizeValue;
}

export interface FontSizes {
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

export interface FontWeights {
  thin: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
}

export interface Theme {
  dimensions: {
    phone: Dimensions;
    tablet: Dimensions;
    laptop: Dimensions;
    desktop: Dimensions;
    largeDesktop: Dimensions;
  };
  typography: {
    weights: FontWeights;
    sizes: FontSizes;
  };
  breakpoints: BreakpointTypes<string | number>;
  palette: Palette;
}

export class PaletteColor {
  constructor(
    readonly name: string,
    readonly hue: number,
    readonly saturation: number,
    readonly lightness: number
  ) {
    PaletteColor.validateName(name);
    this.validateHue();
    PaletteColor.validatePercentage(saturation, 'saturation');
    PaletteColor.validatePercentage(lightness, 'lightness');
    this.name = name;
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }

  private static validateName(name: string) {
    if (!name || name === '') {
      throw new Error('You must supply a name');
    }
  }

  private static validatePercentage(percentage: number, fieldName: string) {
    validateRange(percentage, 0, 100, fieldName);
  }

  private validateHue() {
    validateRange(this.hue, 0, 360, 'hue');
  }

  get rawHslValues(): string {
    return `${this.hue}deg, ${this.saturation}%, ${this.lightness}%`;
  }

  get hsl(): string {
    return `hsl(${this.rawHslValues})`;
  }

  public hsla(alpha: number) {
    validateRange(alpha, 0, 1, 'alpha');
    return `hsla(${this.rawHslValues}, ${alpha})`;
  }

  public toString(): string {
    return this.hsl;
  }
}

export interface Palette {
  core: {
    primary: PaletteColor;
    secondary: PaletteColor;
    tertiary: PaletteColor;
    background: PaletteColor;
    surface: PaletteColor;
    success: PaletteColor;
    error: PaletteColor;
  };
  typography: {
    onBackground: PaletteColor;
    onSurface: PaletteColor;
    onPrimary: PaletteColor;
    onSecondary: PaletteColor;
    onTertiary: PaletteColor;
    onError: PaletteColor;
    onSuccess: PaletteColor;
  };
  base: BaseColors;
}

export interface Spacing {
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

export type BaseColor = 'gray' | 'blue' | 'red' | 'green' | 'white' | 'black';

export interface BaseColors {
  gray: PaletteColor;
  red: PaletteColor;
  green: PaletteColor;
  blue: PaletteColor;
  white: PaletteColor;
  black: PaletteColor;
}
