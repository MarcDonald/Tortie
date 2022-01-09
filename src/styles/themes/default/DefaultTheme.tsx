import { Theme } from '../../../types';
import { Spacing } from '../../../types/Theme';
import { cssVar } from '../../../utils';
import { DefaultBreakpoints } from '../../variables';

import { Blue, Gray, Green, Red } from './DefaultColors';

const cornerRadius = {
  small: '4px',
  medium: '8px',
  large: '16px',
  round: '99999px',
};

const spacing: Spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
  9: '96px',
  10: '128px',
};

const maxPageWidth = '1600px';

export const DefaultThemeLight: Theme = {
  breakpoints: DefaultBreakpoints,
  dimensions: {
    phone: {
      cornerRadius,
      spacing,
      maxPageWidth,
    },
    tablet: {
      cornerRadius,
      spacing,
      maxPageWidth,
    },
    laptop: {
      cornerRadius,
      spacing,
      maxPageWidth,
    },
    desktop: {
      cornerRadius,
      spacing,
      maxPageWidth,
    },
    largeDesktop: {
      cornerRadius,
      spacing,
      maxPageWidth,
    },
  },
  palette: {
    background: '#FFEEE4',
    surface: '#FFFFFF',
    primary: '#A1961B',
    secondary: cssVar('color-blue-50'),
    tertiary: '#403F39',
    success: cssVar('color-green-50'),
    error: cssVar('color-red-50'),
    white: '#FFEEE4',
    black: '#010203',
    typeface: {
      onBackground: cssVar('color-black'),
      onSurface: cssVar('color-black'),
      onPrimary: '#FFFFFF',
      onSecondary: '#FFFFFF',
      onTertiary: '#FFFFFF',
      onError: '#FFFFFF',
      onSuccess: cssVar('color-black'),
    },
    colors: {
      gray: Gray,
      red: Red,
      green: Green,
      blue: Blue,
    },
  },
  typeface: {
    weights: {
      thin: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      1: '0.875rem',
      2: '1rem',
      3: '1.25rem',
      4: '1.5rem',
      5: '1.75rem',
      6: '2rem',
      7: '2.5rem',
      8: '3rem',
      9: '3.5rem',
      10: '4rem',
    },
  },
};
