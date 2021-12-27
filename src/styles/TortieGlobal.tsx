import { createGlobalStyle, css } from 'styled-components';

import { DefaultPixelBreakpoints } from './Breakpoints';
import { TortieFonts } from './TortieFonts';
import { TortieReset } from './TortieReset';
import { TortieVariables } from './TortieVariables';

export const TortieStyles = css`
  ${TortieReset}
  ${TortieVariables}
  ${TortieFonts}

  html {
    font-family: var(--tortie-font-sans-serif);
    font-weight: var(--tortie-font-normal);
  }

  code {
    font-family: var(--tortie-font-monospace);
    font-weight: var(--tortie-font-normal);
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

export const TortieStylesGlobal = createGlobalStyle`
  ${TortieStyles}
`;
