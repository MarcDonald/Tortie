import { css } from 'styled-components';

import { PaletteColor, Theme } from '../../types';
import TypedPropsWithTheme from '../../types/TypedPropsWithTheme';
import { camelToKebab } from '../../utils/FormatUtils';

import { DefaultPixelBreakpoints, Device } from './Breakpoints';

const Variables = css`
  html {
    /* Palette */
    ${({ theme }: TypedPropsWithTheme) => ColorVariables(theme)};

    /* Shadows */
    --shadow-color: 0deg 0% 0%;
    --shadow-elevation-low: 0px 1px 1.1px hsl(var(--shadow-color) / 0.1),
      0px 1.7px 1.9px -1.2px hsl(var(--shadow-color) / 0.1),
      -0.1px 4px 4.5px -2.5px hsl(var(--shadow-color) / 0.1);
    --shadow-elevation-medium: 0px 1px 1.1px hsl(var(--shadow-color) / 0.11),
      -0.1px 3.3px 3.7px -0.8px hsl(var(--shadow-color) / 0.11),
      -0.1px 8.2px 9.2px -1.7px hsl(var(--shadow-color) / 0.11),
      -0.3px 20px 22.5px -2.5px hsl(var(--shadow-color) / 0.11);
    --shadow-elevation-high: 0px 1px 1.1px hsl(var(--shadow-color) / 0.1),
      -0.1px 5.8px 6.5px -0.4px hsl(var(--shadow-color) / 0.1),
      -0.2px 10.9px 12.3px -0.7px hsl(var(--shadow-color) / 0.1),
      -0.3px 17.9px 20.1px -1.1px hsl(var(--shadow-color) / 0.1),
      -0.4px 28.6px 32.2px -1.4px hsl(var(--shadow-color) / 0.1),
      -0.7px 44.7px 50.3px -1.8px hsl(var(--shadow-color) / 0.1),
      -1px 67.9px 76.4px -2.1px hsl(var(--shadow-color) / 0.1),
      -1.5px 100px 112.5px -2.5px hsl(var(--shadow-color) / 0.1);

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
    result += themeItemToCssVariables(prefix, key, obj[key]);
  }
  return result;
}

function paletteColorToCssVariables(paletteColor: PaletteColor) {
  return themeItemToCssVariables('color', paletteColor.name, paletteColor.hsl);
}

function themeItemToCssVariables(prefix: string, key: string, value: any) {
  return `--${prefix}-${camelToKebab(key)}: ${value};`;
}

export default Variables;
