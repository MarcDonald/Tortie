import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../styles';
import { DefaultTheme } from '../../styles/themes/default';
import Theme from '../../types/Theme';

export default function TortieThemeProvider(props: {
  theme?: Theme;
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={props.theme ?? DefaultTheme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
}
