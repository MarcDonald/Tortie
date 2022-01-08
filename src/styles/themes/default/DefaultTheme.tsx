import { Theme } from '../../../types';
import { DefaultBreakpoints } from '../../variables';

const DefaultTheme: Theme = {
  breakpoints: DefaultBreakpoints,
  dimensions: {
    phone: {
      cornerRadius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        round: '99999px',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
      },
      maxPageWidth: '1600px',
    },
    tablet: {
      cornerRadius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        round: '999999px',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
      },
      maxPageWidth: '1600px',
    },
    laptop: {
      cornerRadius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        round: '999999px',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
      },
      maxPageWidth: '1600px',
    },
    desktop: {
      cornerRadius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        round: '999999px',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
      },
      maxPageWidth: '1600px',
    },
    largeDesktop: {
      cornerRadius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        round: '999999px',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
      },
      maxPageWidth: '1600px',
    },
  },
  palette: {
    background: 'hsl(200, 75%, 7%)',
    surface: 'hsl(0, 100%, 100%)',
    primary: 'hsl(55, 71%, 37%)',
    secondary: 'hsl(224, 44%, 61%)',
    typeface: {
      primary: 'hsl(202, 85%, 8%)',
      primaryInverse: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(180, 50%, 25%)',
      tertiary: 'hsl(180, 30%, 45%)',
    },
    gray: {
      10: '#cfd8dc',
      20: '#b0bec5',
      30: '#90a4ae',
      40: '#78909c',
      50: '#607d8b',
      60: '#546e7a',
      70: '#455a64',
      80: '#37474f',
      90: '#263238',
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

export default DefaultTheme;
