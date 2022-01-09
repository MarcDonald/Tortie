import TortieThemeProvider from '../src/components/TortieThemeProvider';
import { createGlobalStyle } from 'styled-components';

export const decorators = [
  (Story) => (
    <TortieThemeProvider>
      <StoryStyles />
      <Story />
    </TortieThemeProvider>
  ),
];

const StoryStyles = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: var(--color-background);
  }

  #root {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
`;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '465px',
          height: '851px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1366px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1920px',
          height: '1080px',
        },
      },
      largeDesktop: {
        name: 'Large Desktop',
        styles: {
          width: '3440px',
          height: '1440px',
        },
      },
    },
  },
};
