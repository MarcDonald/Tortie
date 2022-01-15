import { PaletteColor, Spacing, Theme } from '../../../types';
import { DefaultBreakpoints } from '../../variables';

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

const black = new PaletteColor('black', 0, 0, 0);
const white = new PaletteColor('white', 0, 100, 100);

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
    core: {
      background: new PaletteColor('background', 15, 50, 97),
      surface: new PaletteColor(
        'surface',
        white.hue,
        white.saturation,
        white.lightness
      ),
      primary: new PaletteColor('primary', 33, 84, 48),
      secondary: new PaletteColor('secondary', 240, 100, 7),
      tertiary: new PaletteColor('tertiary', 341, 57, 28),
      success: new PaletteColor('success', 91, 46, 47),
      error: new PaletteColor('error', 354, 71, 55),
    },
    typography: {
      onBackground: new PaletteColor(
        'onBackground',
        black.hue,
        black.saturation,
        black.lightness
      ),
      onSurface: new PaletteColor(
        'onSurface',
        black.hue,
        black.saturation,
        black.lightness
      ),
      onPrimary: new PaletteColor(
        'onPrimary',
        white.hue,
        white.saturation,
        white.lightness
      ),
      onSecondary: new PaletteColor(
        'onSecondary',
        white.hue,
        white.saturation,
        white.lightness
      ),
      onTertiary: new PaletteColor(
        'onTertiary',
        white.hue,
        white.saturation,
        white.lightness
      ),
      onError: new PaletteColor(
        'onError',
        white.hue,
        white.saturation,
        white.lightness
      ),
      onSuccess: new PaletteColor(
        'onSuccess',
        white.hue,
        white.saturation,
        white.lightness
      ),
    },
    base: {
      gray: new PaletteColor('gray', 0, 0, 27),
      red: new PaletteColor('red', 354, 71, 55),
      green: new PaletteColor('green', 91, 46, 47),
      blue: new PaletteColor('blue', 235, 31, 48),
      white: white,
      black: black,
    },
  },
  typography: {
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
