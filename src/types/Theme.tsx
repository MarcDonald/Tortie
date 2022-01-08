import { BreakpointTypes } from '../styles';

export default interface Theme {
  dimensions: {
    phone: Dimensions;
    tablet: Dimensions;
    laptop: Dimensions;
    desktop: Dimensions;
    largeDesktop: Dimensions;
  };
  typeface: {
    weights: FontWeights;
    sizes: {
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      '7': string;
      '8': string;
      '9': string;
      '10': string;
    };
  };
  breakpoints: BreakpointTypes<string | number>;
  palette: Palette;
}

type CssSizeValue = string | number;

interface Dimensions {
  cornerRadius: {
    small: CssSizeValue;
    medium: CssSizeValue;
    large: CssSizeValue;
    round: CssSizeValue;
  };
  spacing: {
    1: CssSizeValue;
    2: CssSizeValue;
    3: CssSizeValue;
    4: CssSizeValue;
    5: CssSizeValue;
    6: CssSizeValue;
  };
  maxPageWidth: CssSizeValue;
}

interface Palette {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  gray: ColorRange;
  typeface: {
    primary: string;
    primaryInverse: string;
    secondary: string;
    tertiary: string;
  };
}

export interface ColorRange {
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
}

interface FontWeights {
  thin: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
}
