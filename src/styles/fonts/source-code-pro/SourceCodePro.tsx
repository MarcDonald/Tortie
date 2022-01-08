import { css } from 'styled-components';

import SourceCodeProVariableItalic from './SourceCodeVariable-Italic.ttf.woff2';
import SourceCodeProVariable from './SourceCodeVariable-Roman.ttf.woff2';

const SourceCodePro = css`
  @font-face {
    font-family: 'Source Code Pro';
    src: local('Source Code Pro'), url(${SourceCodeProVariable}) format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src: local('Source Code Pro'),
      url(${SourceCodeProVariableItalic}) format('woff2');
    font-style: italic;
  }
`;

export default SourceCodePro;
