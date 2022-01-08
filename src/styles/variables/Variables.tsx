import { css } from 'styled-components';

import { Theme } from '../../types';
import { ColorRange } from '../../types/Theme';
import TypedPropsWithTheme from '../../types/TypedPropsWithTheme';

import { DefaultPixelBreakpoints } from './Breakpoints';

const Variables = css`
  html {
    /* Palette */
    --color-primary: ${({ theme }: TypedPropsWithTheme) =>
      theme.palette.primary};
    --color-secondary: ${({ theme }: TypedPropsWithTheme) =>
      theme.palette.secondary};
    --color-background: ${({ theme }: TypedPropsWithTheme) =>
      theme.palette.background};
    --color-surface: ${({ theme }: TypedPropsWithTheme) =>
      theme.palette.surface};

    --color-font-primary: ${({ theme }: TypedPropsWithTheme) =>
      theme.palette.typeface.primary};
    --color-font-primary-inverse: ${({ theme }: TypedPropsWithTheme) =>
      theme.palette.typeface.primaryInverse};
    --color-font-secondary: ${({ theme }: TypedPropsWithTheme) =>
      theme.palette.typeface.secondary};
    --color-font-tertiary: ${({ theme }: TypedPropsWithTheme) =>
      theme.palette.typeface.tertiary};

    ${({ theme }: TypedPropsWithTheme) => ColorVariables(theme)};

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

type Device = 'phone' | 'tablet' | 'laptop' | 'desktop' | 'largeDesktop';

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
  return themeToCssVariables('font-size', theme.typeface.sizes);
}

function FontWeights(theme: Theme) {
  return themeToCssVariables('font', theme.typeface.weights);
}

function ColorVariables(theme: Theme): string {
  return themeColorToCssVariables('gray', theme.palette.gray);
}

function themeColorToCssVariables(name: string, range: ColorRange): string {
  return themeToCssVariables(`color-${name}`, range);
}

function themeToCssVariables(prefix: string, obj: any) {
  let result = '';
  for (const key in obj) {
    result += `--${prefix}-${key}: ${obj[key]};`;
  }
  return result;
}

export default Variables;
