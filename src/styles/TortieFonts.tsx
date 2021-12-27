import { createGlobalStyle, css } from 'styled-components';

import AsapWoff2 from './fonts/asap/Asap-Regular.woff2';
import SourceCodeProWoff2 from './fonts/source-code-pro/SourceCodeVariable-Roman.ttf.woff2';

export const TortieFonts = css`
  @font-face {
    font-family: 'Asap';
    src: local('Asap'), url(${AsapWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src: local('Source Code Pro'), url(${SourceCodeProWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --tortie-font-sans-serif: 'Asap', -apple-system, BlinkMacSystemFont,
      avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto,
      noto, arial, sans-serif;
    --tortie-font-serif: Iowan Old Style, Apple Garamond, Baskerville,
      Times New Roman, Droid Serif, Times, Source Serif Pro, serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    --tortie-font-monospace: 'Source Code Pro', Consolas, monaco, monospace;

    --tortie-font-thin: 300;
    --tortie-font-normal: 500;
    --tortie-font-medium: 600;
    --tortie-font-bold: 800;
  }
`;

export const TortieFontsGlobal = createGlobalStyle`
  ${TortieFonts}
`;
