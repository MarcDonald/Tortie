import { createGlobalStyle, css } from 'styled-components';

import { DefaultPixelBreakpoints } from './Breakpoints';

export const TortieVariables = css`
  html {
    /* Dimensions */
    --tortie-corner-radius: 16px;
    --tortie-spacing: 16px;
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.tabletMin}rem / 16)) {
    html {
      --tortie-corner-radius: 24px;
      --tortie-spacing: 24px;
    }
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.laptopMin}rem / 16)) {
    html {
    }
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.desktopMin}rem / 16)) {
    html {
      --tortie-corner-radius: 32px;
      --tortie-spacing: 32px;
    }
  }

  @media (min-width: calc(${DefaultPixelBreakpoints.largeDesktopMin}rem / 16)) {
    html {
    }
  }
`;

export const TortieVariablesGlobal = createGlobalStyle`
  ${TortieVariables}
`;
