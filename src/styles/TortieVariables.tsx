import { createGlobalStyle, css } from 'styled-components';

export const TortieVariables = css`
  html {
    /* Dimensions */
    --tortie-corner-radius: 16px;
    --tortie-spacing: 16px;
  }

  /*
		Tablet and up Styles
 */
  @media (min-width: calc(550rem / 16)) {
    html {
      --tortie-corner-radius: 24px;
      --tortie-spacing: 24px;
    }
  }

  /*
		Laptop and up Styles
 */
  @media (min-width: calc(1100rem / 16)) {
    html {
    }
  }

  /*
		Desktop and up Styles
 */
  @media (min-width: calc(1500rem / 16)) {
    html {
      --tortie-corner-radius: 32px;
      --tortie-spacing: 32px;
    }
  }

  /*
		Large Desktop and up Styles
 */
  @media (min-width: calc(2500rem / 16)) {
    html {
    }
  }
`;

export const TortieVariablesGlobal = createGlobalStyle`
  ${TortieVariables}
`;
