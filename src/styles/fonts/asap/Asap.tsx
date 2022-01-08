import { css } from 'styled-components';

import TypedPropsWithTheme from '../../../types/TypedPropsWithTheme';

import AsapBoldWoff2 from './Asap-Bold.woff2';
import AsapBoldItalicWoff2 from './Asap-BoldItalic.woff2';
import AsapItalicWoff2 from './Asap-Italic.woff2';
import AsapMediumWoff2 from './Asap-Medium.woff2';
import AsapMediumItalicWoff2 from './Asap-MediumItalic.woff2';
import AsapRegularWoff2 from './Asap-Regular.woff2';
import AsapSemiBoldWoff2 from './Asap-SemiBold.woff2';
import AsapSemiBoldItalicWoff2 from './Asap-SemiBoldItalic.woff2';

const Asap = css`
  @font-face {
    font-family: 'Asap';
    src: local('Asap'), url(${AsapRegularWoff2}) format('woff2');
    font-weight: ${({ theme }: TypedPropsWithTheme) =>
      theme.typeface.weights.normal};
    font-style: normal;
  }

  @font-face {
    font-family: 'Asap';
    src: local('Asap'), url(${AsapItalicWoff2}) format('woff2');
    font-weight: ${({ theme }: TypedPropsWithTheme) =>
      theme.typeface.weights.normal};
    font-style: italic;
  }

  @font-face {
    font-family: 'Asap';
    src: local('Asap'), url(${AsapMediumWoff2}) format('woff2');
    font-weight: ${({ theme }: TypedPropsWithTheme) =>
      theme.typeface.weights.medium};
    font-style: normal;
  }

  @font-face {
    font-family: 'Asap';
    src: local('Asap'), url(${AsapMediumItalicWoff2}) format('woff2');
    font-weight: ${({ theme }: TypedPropsWithTheme) =>
      theme.typeface.weights.medium};
    font-style: italic;
  }

  @font-face {
    font-family: 'Asap';
    src: local('Asap'), url(${AsapSemiBoldWoff2}) format('woff2');
    font-weight: ${({ theme }: TypedPropsWithTheme) =>
      theme.typeface.weights.semibold};
    font-style: normal;
  }

  @font-face {
    font-family: 'Asap';
    src: local('Asap'), url(${AsapSemiBoldItalicWoff2}) format('woff2');
    font-weight: ${({ theme }: TypedPropsWithTheme) =>
      theme.typeface.weights.semibold};
    font-style: italic;
  }

  @font-face {
    font-family: 'Asap';
    src: local('Asap'), url(${AsapBoldWoff2}) format('woff2');
    font-weight: ${({ theme }: TypedPropsWithTheme) =>
      theme.typeface.weights.bold};
    font-style: normal;
  }

  @font-face {
    font-family: 'Asap';
    src: local('Asap'), url(${AsapBoldItalicWoff2}) format('woff2');
    font-weight: ${({ theme }: TypedPropsWithTheme) =>
      theme.typeface.weights.bold};
    font-style: italic;
  }
`;

export default Asap;
