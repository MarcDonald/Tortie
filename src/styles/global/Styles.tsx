import { css } from 'styled-components';

import { Fonts } from '../fonts/Fonts';
import { DefaultPixelBreakpoints, Variables } from '../variables';

import { Reset } from './Reset';

export const Styles = css`
  ${Reset}
  ${Variables}
  ${Fonts}
  html {
    font-family: var(--font-sans-serif);
    font-weight: var(--font-normal);
  }

  code {
    font-family: var(--font-monospace);
    font-weight: var(--font-normal);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--font-medium);
  }

  h1 {
    font-size: var(--font-size-10);
    font-weight: var(--font-medium);
  }

  h2 {
    font-size: var(--font-size-8);
  }

  h3 {
    font-size: var(--font-size-7);
  }

  h4 {
    font-size: var(--font-size-6);
  }

  h5 {
    font-size: var(--font-size-5);
  }

  h6 {
    font-size: var(--font-size-4);
  }

  p,
  span,
  code,
  em,
  strong {
    font-size: var(--font-size-3);
  }

  figcaption {
    font-size: var(--font-size-2);
    font-style: italic;
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.tabletMin}rem / 16)) {
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.laptopMin}rem / 16)) {
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.desktopMin}rem / 16)) {
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.largeDesktopMin}rem / 16)) {
  }
`;

export default Styles;
