import { css } from 'styled-components';

import { PaletteColor, Theme } from '../../types';
import TypedPropsWithTheme from '../../types/TypedPropsWithTheme';

import { DefaultPixelBreakpoints, Device } from './Breakpoints';

const Variables = css`
  html {
    /* Palette */
    ${({ theme }: TypedPropsWithTheme) => ColorVariables(theme)};

    /* Shadows */
    --shadow-on-background-color: 16deg 15% 60%;
    --shadow-on-background-elevation-low: 0.3px 0.5px 0.7px
        hsl(var(--shadow-on-background-color) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-on-background-color) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(--shadow-on-background-color) / 0.34);
    --shadow-on-background-elevation-medium: 0.3px 0.5px 0.7px
        hsl(var(--shadow-on-background-color) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-on-background-color) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-on-background-color) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(--shadow-on-background-color) / 0.36);
    --shadow-on-background-elevation-high: 0.3px 0.5px 0.7px
        hsl(var(--shadow-on-background-color) / 0.34),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-on-background-color) / 0.34),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-on-background-color) / 0.34),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-on-background-color) / 0.34),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-on-background-color) / 0.34),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-on-background-color) / 0.34),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-on-background-color) / 0.34),
      25px 50px 62.9px -2.5px hsl(var(--shadow-on-background-color) / 0.34);

    --shadow-on-surface-color: 22deg 37% 57%;
    --shadow-on-surface-elevation-low: 0.3px 0.5px 0.7px
        hsl(var(--shadow-on-surface-color) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-on-surface-color) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(--shadow-on-surface-color) / 0.34);
    --shadow-on-surface-elevation-medium: 0.3px 0.5px 0.7px
        hsl(var(--shadow-on-surface-color) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-on-surface-color) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-on-surface-color) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(--shadow-on-surface-color) / 0.36);
    --shadow-on-surface-elevation-high: 0.3px 0.5px 0.7px
        hsl(var(--shadow-on-surface-color) / 0.34),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-on-surface-color) / 0.34),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-on-surface-color) / 0.34),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-on-surface-color) / 0.34),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-on-surface-color) / 0.34),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-on-surface-color) / 0.34),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-on-surface-color) / 0.34),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);

    /* Dimensions */
    ${({ theme }: TypedPropsWithTheme) => CornerRadius('phone', theme)}
    ${({ theme }: TypedPropsWithTheme) => Spacing('phone', theme)}
    ${({ theme }: TypedPropsWithTheme) =>
      `--max-page-width: ${theme.dimensions['phone'].maxPageWidth};`}

    /* Typeface */
    --font-sans-serif: 'Asap', -apple-system, BlinkMacSystemFont, avenir next,
    avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
    sans-serif;
    --font-serif: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,
      Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol;
    --font-monospace: 'Source Code Pro', Consolas, monaco, monospace;

    ${({ theme }: TypedPropsWithTheme) => FontSizes(theme)}
    ${({ theme }: TypedPropsWithTheme) => FontWeights(theme)}
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.tabletMin}rem / 16)) {
    html {
      /* Dimensions */
      ${({ theme }: TypedPropsWithTheme) => CornerRadius('tablet', theme)}
      ${({ theme }: TypedPropsWithTheme) => Spacing('tablet', theme)}
      ${({ theme }: TypedPropsWithTheme) =>
        `--max-page-width: ${theme.dimensions['tablet'].maxPageWidth}`}
    }
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.laptopMin}rem / 16)) {
    html {
      /* Dimensions */
      ${({ theme }: TypedPropsWithTheme) => CornerRadius('laptop', theme)}
      ${({ theme }: TypedPropsWithTheme) => Spacing('laptop', theme)}
      ${({ theme }: TypedPropsWithTheme) =>
        `--max-page-width: ${theme.dimensions['laptop'].maxPageWidth}`}
    }
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.desktopMin}rem / 16)) {
    html {
      /* Dimensions */
      ${({ theme }: TypedPropsWithTheme) => CornerRadius('desktop', theme)}
      ${({ theme }: TypedPropsWithTheme) => Spacing('desktop', theme)}
      ${({ theme }: TypedPropsWithTheme) =>
        `--max-page-width: ${theme.dimensions['desktop'].maxPageWidth}`}
    }
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.largeDesktopMin}rem / 16)) {
    html {
      /* Dimensions */
      ${({ theme }: TypedPropsWithTheme) => CornerRadius('largeDesktop', theme)}
      ${({ theme }: TypedPropsWithTheme) => Spacing('largeDesktop', theme)}
      ${({ theme }: TypedPropsWithTheme) =>
        `--max-page-width: ${theme.dimensions['largeDesktop'].maxPageWidth}`}
    }
  }
`;

function ColorVariables(theme: Theme): string {
  // Can disable eslint and ts warnings because we're getting the keys from the object we're looping through
  let result = '';
  for (const key in theme.palette.base) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result += paletteColorToCssVariables(theme.palette.base[key]);
  }
  for (const key in theme.palette.typography) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result += paletteColorToCssVariables(theme.palette.typography[key]);
  }

  for (const key in theme.palette.core) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result += paletteColorToCssVariables(theme.palette.core[key]);
  }
  return result;
}

function CornerRadius(device: Device, theme: Theme) {
  return themeToCssVariables(
    'corner-radius',
    theme.dimensions[device].cornerRadius
  );
}

function Spacing(device: Device, theme: Theme) {
  return themeToCssVariables('spacing', theme.dimensions[device].spacing);
}

function FontSizes(theme: Theme) {
  return themeToCssVariables('font-size', theme.typography.sizes);
}

function FontWeights(theme: Theme) {
  return themeToCssVariables('font', theme.typography.weights);
}

function themeToCssVariables(prefix: string, obj: any) {
  let result = '';
  for (const key in obj) {
    // Converts key from camelcase to kebab case
    // https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
    result += themeItemToCssVariables(prefix, key, obj[key]);
  }
  return result;
}

function themeItemToCssVariables(prefix: string, key: string, value: any) {
  const formattedKey = key
    .replace(/\B(?:([A-Z])(?=[a-z]))|(?:(?<=[a-z0-9])([A-Z]))/g, '-$1$2')
    .toLowerCase();
  const result = `--${prefix}-${formattedKey}: ${value};`;
  return result;
}

function paletteColorToCssVariables(paletteColor: PaletteColor) {
  // Converts from camelcase to kebab case
  // https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
  return themeItemToCssVariables('color', paletteColor.name, paletteColor.hsl);
}

export default Variables;
